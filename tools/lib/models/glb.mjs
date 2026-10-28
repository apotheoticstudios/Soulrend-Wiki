// Turns a cube model into a binary glTF (.glb) for the {{model}} viewer.
//
// Models arrive in Java model space, the space vanilla ModelParts use: pixels, Y down, the front at -Z,
// part poses applied translate → Z → Y → X. Every converter (Bedrock geo, Java bytecode, Tabula) produces:
//   { layers: [{ texture: { png, width, height }, emissive?: { png }, translucent?, parts: [Part], meshes? }],
//     animations?: [Animation] }       (or a single layer's fields at the top level)
//   Part      = { name, pos: [x, y, z], rot: [x, y, z] (radians), scale?, layer?, cubes: [Cube], children: [Part] }
//   Cube      = { from: [x, y, z], size: [w, h, d], inflate (number or per axis), mirror, texSize?, texScale?,
//                 uv: [u, v] | faces: { north: [u1, v1, u2, v2], … } }
//   Animation = { name, length, loop, tracks: [{ part, path: 'rotation' | 'position' | 'scale', times, values }] }
// Track values are absolute Java-space poses (Euler radians, pixel offsets, scale factors), one triple per time.
// glTF is Y up with the front at +Z, which is Java space turned 180° about X and lifted 24px.
//
// Parts no animation moves are merged into their parent's mesh, so a model with hundreds of rotated
// cubes becomes a handful of nodes. Normals are left out: three.js then shades each face flat, which is
// what Minecraft's cube lighting looks like anyway.

const FACES = ['down', 'up', 'west', 'north', 'east', 'south'];

export function writeGlb(model) {
  const layers = model.layers ?? [{ texture: model.texture, emissive: model.emissive, parts: model.parts ?? [], meshes: model.meshes }];
  const animated = new Set((model.animations ?? []).flatMap(a => a.tracks.map(t => t.part)));

  // Part tree → node tree with per-material geometry in each node's own space.
  const toNode = (part, layerIndex) => {
    if (part.hidden) return null;
    if (part.layer !== undefined) layerIndex = part.layer;
    const node = { name: part.name, ...transform(part.pos, part.rot, part.scale), geo: new Map(), children: [] };
    if (part.cubes?.length) addGeometry(node, layerIndex, cubesToMesh(part.cubes, layers[layerIndex].texture));
    for (const child of part.children ?? []) {
      const c = toNode(child, layerIndex);
      if (c) node.children.push(c);
    }
    return node;
  };
  const root = { name: 'root', translation: [0, 1.5, 0], geo: new Map(), children: [] };
  for (const [i, layer] of layers.entries()) for (const part of layer.parts ?? []) {
    const node = toNode(part, i);
    if (node) root.children.push(node);
  }
  flatten(root, animated);

  const doc = {
    asset: { version: '2.0', generator: 'Soulrend Wiki tools/make-models.mjs' },
    scene: 0, scenes: [{ nodes: [] }], nodes: [], meshes: [], accessors: [], bufferViews: [], buffers: [],
    materials: [], textures: [], images: [], samplers: [{ magFilter: 9728, minFilter: 9728, wrapS: 33071, wrapT: 33071 }],
  };
  // Accessors share one buffer view per kind (vertex data, indices, animation), laid out at the end.
  const pools = { vertex: { target: 34962, chunks: [], length: 0 }, index: { target: 34963, chunks: [], length: 0 }, anim: { chunks: [], length: 0 } };
  const pending = [];
  const accessor = (array, type, pool, minMax = false) => {
    const size = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 }[type];
    const p = pools[pool];
    const acc = { bufferView: pool, byteOffset: p.length, componentType: array instanceof Float32Array ? 5126 : array instanceof Uint32Array ? 5125 : 5123, count: array.length / size, type };
    if (minMax) {
      acc.min = Array(size).fill(Infinity);
      acc.max = Array(size).fill(-Infinity);
      for (let i = 0; i < array.length; i++) {
        acc.min[i % size] = Math.min(acc.min[i % size], array[i]);
        acc.max[i % size] = Math.max(acc.max[i % size], array[i]);
      }
    }
    const bytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    const padded = new Uint8Array(Math.ceil(bytes.length / 4) * 4);
    padded.set(bytes);
    p.chunks.push(padded);
    p.length += padded.length;
    doc.accessors.push(acc);
    pending.push(acc);
    return doc.accessors.length - 1;
  };
  const images = [];
  const image = png => {
    images.push(png);
    doc.images.push({ bufferView: `image${images.length - 1}`, mimeType: 'image/png' });
    doc.textures.push({ source: doc.images.length - 1, sampler: 0 });
    return doc.textures.length - 1;
  };

  // One material per layer: a layer is a texture plus the parts drawn with it (a body and its armor,
  // a slime and its outer shell).
  for (const layer of layers) {
    const material = { pbrMetallicRoughness: { baseColorTexture: { index: image(layer.texture.png) }, metallicFactor: 0, roughnessFactor: 1 }, alphaMode: layer.translucent ? 'BLEND' : 'MASK', doubleSided: true };
    if (!layer.translucent) material.alphaCutoff = 0.1;
    if (layer.emissive) Object.assign(material, { emissiveTexture: { index: image(layer.emissive.png) }, emissiveFactor: [1, 1, 1] });
    doc.materials.push(material);
  }
  const mesh = (geo, name) => {
    const primitives = [];
    for (const [material, g] of geo) {
      if (!g.indices.length) continue;
      const indices = g.positions.length / 3 > 65535 ? new Uint32Array(g.indices) : new Uint16Array(g.indices);
      primitives.push({
        attributes: { POSITION: accessor(new Float32Array(g.positions), 'VEC3', 'vertex', true), TEXCOORD_0: accessor(new Float32Array(g.uvs), 'VEC2', 'vertex') },
        indices: accessor(indices, 'SCALAR', 'index'),
        material,
      });
    }
    if (!primitives.length) return undefined;
    doc.meshes.push({ name, primitives });
    return doc.meshes.length - 1;
  };
  // The rest pose is the idle clip's first frame, so a viewer that doesn't play the clip (or a still
  // render) shows the mob as it stands in game rather than its bind pose. Bones the clip hides by
  // scaling them to zero stay hidden too.
  const firstFrame = new Map();
  for (const track of model.animations?.[0]?.tracks ?? []) {
    const v = track.values.slice(0, 3);
    const pose = firstFrame.get(track.part) ?? {};
    if (track.path === 'rotation') pose.rotation = quaternion(v);
    else if (track.path === 'position') pose.translation = [v[0] / 16, -v[1] / 16, -v[2] / 16];
    else pose.scale = v;
    firstFrame.set(track.part, pose);
  }
  const nodeOf = new Map();
  const writeNode = node => {
    const index = doc.nodes.length;
    const out = { name: node.name };
    Object.assign(node, firstFrame.get(node.name));
    for (const key of ['translation', 'rotation', 'scale']) if (node[key]) out[key] = node[key];
    doc.nodes.push(out);
    if (!nodeOf.has(node.name)) nodeOf.set(node.name, []);
    nodeOf.get(node.name).push(index);
    const m = mesh(node.geo, node.name);
    if (m !== undefined) out.mesh = m;
    const children = node.children.map(writeNode);
    if (children.length) out.children = children;
    return index;
  };
  doc.scenes[0].nodes.push(writeNode(root));
  // Raw triangle meshes (Epic Fight) are already in glTF space with the feet at y = 0.
  for (const [i, layer] of layers.entries()) for (const raw of layer.meshes ?? []) {
    doc.nodes.push({ name: 'mesh', mesh: mesh(new Map([[i, raw]]), 'mesh') });
    doc.scenes[0].nodes.push(doc.nodes.length - 1);
  }

  for (const anim of model.animations ?? []) {
    const channels = [], samplers = [];
    for (const track of anim.tracks) {
      const nodes = nodeOf.get(track.part);
      if (!nodes || !track.times.length) continue;
      const frames = [];
      for (let i = 0; i < track.times.length; i++) {
        const v = track.values.slice(i * 3, i * 3 + 3);
        frames.push(track.path === 'rotation' ? quaternion(v) : track.path === 'position' ? [v[0] / 16, -v[1] / 16, -v[2] / 16] : v);
      }
      const kept = reduce(track.times, frames);
      // A channel that never leaves its first value is the rest pose already (see firstFrame).
      if (anim === model.animations[0] && kept.length === 2 && near(frames[kept[0]], frames[kept[1]])) continue;
      samplers.push({
        input: accessor(new Float32Array(kept.map(i => track.times[i])), 'SCALAR', 'anim', true),
        output: accessor(new Float32Array(kept.flatMap(i => frames[i])), track.path === 'rotation' ? 'VEC4' : 'VEC3', 'anim'),
        interpolation: 'LINEAR',
      });
      for (const node of nodes) channels.push({ sampler: samplers.length - 1, target: { node, path: track.path === 'position' ? 'translation' : track.path } });
    }
    if (channels.length) (doc.animations ??= []).push({ name: anim.name, channels, samplers });
  }

  // Lay out the binary chunk: one view per non-empty pool, then one per image.
  const chunks = [];
  let byteLength = 0;
  const views = {};
  const addView = (bytes, target) => {
    doc.bufferViews.push({ buffer: 0, byteOffset: byteLength, byteLength: bytes.length, ...(target ? { target } : {}) });
    const padded = Math.ceil(bytes.length / 4) * 4;
    chunks.push(bytes, new Uint8Array(padded - bytes.length));
    byteLength += padded;
    return doc.bufferViews.length - 1;
  };
  for (const [name, p] of Object.entries(pools)) {
    if (!p.length) continue;
    const bytes = new Uint8Array(p.length);
    let at = 0;
    for (const c of p.chunks) { bytes.set(c, at); at += c.length; }
    views[name] = addView(bytes, p.target);
  }
  for (const acc of pending) { acc.bufferView = views[acc.bufferView]; if (!acc.byteOffset) delete acc.byteOffset; }
  images.forEach((png, i) => { doc.images[i].bufferView = addView(png); });

  for (const key of ['meshes', 'accessors', 'textures', 'images']) if (!doc[key].length) delete doc[key];
  doc.buffers.push({ byteLength });
  const json = new TextEncoder().encode(JSON.stringify(doc));
  const jsonPad = (4 - (json.length % 4)) % 4;
  const total = 12 + 8 + json.length + jsonPad + 8 + byteLength;
  const out = new Uint8Array(total);
  const dv = new DataView(out.buffer);
  dv.setUint32(0, 0x46546c67, true);
  dv.setUint32(4, 2, true);
  dv.setUint32(8, total, true);
  dv.setUint32(12, json.length + jsonPad, true);
  dv.setUint32(16, 0x4e4f534a, true);
  out.set(json, 20);
  out.fill(0x20, 20 + json.length, 20 + json.length + jsonPad);
  let at = 20 + json.length + jsonPad;
  dv.setUint32(at, byteLength, true);
  dv.setUint32(at + 4, 0x004e4942, true);
  at += 8;
  for (const chunk of chunks) { out.set(chunk, at); at += chunk.length; }
  return out;
}

function addGeometry(node, material, g) {
  if (!node.geo.has(material)) node.geo.set(material, { positions: [], uvs: [], indices: [] });
  const into = node.geo.get(material);
  const base = into.positions.length / 3;
  into.positions.push(...g.positions);
  into.uvs.push(...g.uvs);
  for (const i of g.indices) into.indices.push(base + i);
}

// Bakes every node that neither moves itself nor holds a moving node into its parent's geometry.
function flatten(node, animated) {
  const kept = [];
  for (const child of node.children) {
    flatten(child, animated);
    if (animated.has(child.name) || child.children.length) { kept.push(child); continue; }
    const m = matrix(child);
    const mirrored = m[0] * (m[5] * m[10] - m[6] * m[9]) - m[4] * (m[1] * m[10] - m[2] * m[9]) + m[8] * (m[1] * m[6] - m[2] * m[5]) < 0;
    for (const [material, g] of child.geo) {
      const positions = [];
      for (let i = 0; i < g.positions.length; i += 3) {
        const [x, y, z] = [g.positions[i], g.positions[i + 1], g.positions[i + 2]];
        positions.push(m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]);
      }
      // A negative scale turns the triangles inside out; swap two corners to keep them facing out.
      const indices = mirrored ? g.indices.map((_, i, a) => a[i - (i % 3) + [0, 2, 1][i % 3]]) : g.indices;
      addGeometry(node, material, { positions, uvs: g.uvs, indices });
    }
  }
  node.children = kept;
}

// Column-major 4×4 from a node's translation, rotation (quaternion) and scale.
function matrix({ translation: t = [0, 0, 0], rotation: q = [0, 0, 0, 1], scale: s = [1, 1, 1] }) {
  const [x, y, z, w] = q;
  return [
    (1 - 2 * (y * y + z * z)) * s[0], (2 * (x * y + z * w)) * s[0], (2 * (x * z - y * w)) * s[0], 0,
    (2 * (x * y - z * w)) * s[1], (1 - 2 * (x * x + z * z)) * s[1], (2 * (y * z + x * w)) * s[1], 0,
    (2 * (x * z + y * w)) * s[2], (2 * (y * z - x * w)) * s[2], (1 - 2 * (x * x + y * y)) * s[2], 0,
    t[0], t[1], t[2], 1,
  ];
}

// Drops samples that linear interpolation between the kept neighbours reproduces (baked clips are
// sampled at 20 fps, but most channels are smooth or still).
function reduce(times, frames, epsilon = 2e-4) {
  const kept = [0];
  for (let i = 1; i < frames.length - 1; i++) {
    const a = kept.at(-1);
    const k = (times[i] - times[a]) / (times[i + 1] - times[a]);
    const guess = frames[a].map((v, n) => v + (frames[i + 1][n] - v) * k);
    if (!near(guess, frames[i], epsilon)) kept.push(i);
  }
  if (frames.length > 1) kept.push(frames.length - 1);
  return kept;
}
const near = (a, b, epsilon = 2e-4) => a.every((v, i) => Math.abs(v - b[i]) <= epsilon);

// Java part pose → glTF node TRS.
function transform(pos = [0, 0, 0], rot = [0, 0, 0], scale) {
  const t = {};
  if (pos.some(Boolean)) t.translation = [pos[0] / 16, -pos[1] / 16, -pos[2] / 16];
  if (rot.some(Boolean)) t.rotation = quaternion(rot);
  if (scale && scale.some(s => s !== 1)) t.scale = scale;
  return t;
}

// Java applies Z, then Y, then X to the parent's frame (q = qz·qy·qx); turning the space 180° about X
// negates the Y and Z angles.
export function quaternion([x, y, z]) {
  const [cx, sx] = [Math.cos(x / 2), Math.sin(x / 2)];
  const [cy, sy] = [Math.cos(-y / 2), Math.sin(-y / 2)];
  const [cz, sz] = [Math.cos(-z / 2), Math.sin(-z / 2)];
  const [ax, ay, az, aw] = [-sz * sy, cz * sy, sz * cy, cz * cy]; // qz·qy, then ·qx below
  return [
    aw * sx + ax * cx,
    ay * cx + az * sx,
    az * cx - ay * sx,
    aw * cx - ax * sx,
  ];
}

// Quads for a part's cubes, following vanilla ModelPart.Cube: the same eight corners, the same face order,
// and the same corner-to-UV assignment, so box UV, mirroring and inflation all match the game.
function cubesToMesh(cubes, texture) {
  const positions = [], uvs = [], indices = [];
  for (const cube of cubes) {
    const [x, y, z] = cube.from;
    const [w, h, d] = cube.size;
    const [gx, gy, gz] = Array.isArray(cube.inflate) ? cube.inflate : Array(3).fill(cube.inflate ?? 0);
    let x0 = x - gx, x1 = x + w + gx;
    const y0 = y - gy, y1 = y + h + gy, z0 = z - gz, z1 = z + d + gz;
    const tw = (cube.texSize?.[0] ?? texture.width) * (cube.texScale?.[0] ?? 1);
    const th = (cube.texSize?.[1] ?? texture.height) * (cube.texScale?.[1] ?? 1);
    if (cube.mirror) [x0, x1] = [x1, x0];
    const v = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]];
    const corners = { down: [5, 4, 0, 1], up: [2, 3, 7, 6], west: [0, 4, 7, 3], north: [1, 0, 3, 2], east: [5, 1, 2, 6], south: [4, 5, 6, 7] };
    const normal = { down: [0, -1, 0], up: [0, 1, 0], west: [-1, 0, 0], north: [0, 0, -1], east: [1, 0, 0], south: [0, 0, 1] };
    let rects = cube.faces;
    if (!rects) {
      const [u, vv] = cube.uv ?? [0, 0];
      rects = {
        down: [u + d, vv, u + d + w, vv + d],
        up: [u + d + w, vv + d, u + d + w + w, vv],
        west: [u, vv + d, u + d, vv + d + h],
        north: [u + d, vv + d, u + d + w, vv + d + h],
        east: [u + d + w, vv + d, u + d + w + d, vv + d + h],
        south: [u + d + w + d, vv + d, u + d + w + d + w, vv + d + h],
      };
    }
    for (const face of FACES) {
      const r = rects[face];
      if (!r) continue;
      let quad = corners[face].map(i => v[i]);
      const [u1, v1, u2, v2, turn = 0] = r;
      let uv = [[u2, v1], [u1, v1], [u1, v2], [u2, v2]];
      for (let k = 0; k < ((turn / 90) & 3); k++) uv.unshift(uv.pop());
      if (cube.mirror && !cube.faces) { quad = quad.reverse(); uv = uv.reverse(); }
      // Vanilla flips the normal of mirrored cubes on X; the winding follows the normal, so faces point
      // outwards even though no normals are written.
      const n = normal[face].slice();
      if (cube.mirror && !cube.faces) n[0] = -n[0];
      const base = positions.length / 3;
      const p = quad.map(([px, py, pz]) => [px / 16, -py / 16, -pz / 16]);
      const gn = [n[0], -n[1], -n[2]];
      for (let i = 0; i < 4; i++) {
        positions.push(...p[i]);
        uvs.push(uv[i][0] / tw, uv[i][1] / th);
      }
      const c = cross(sub(p[1], p[0]), sub(p[2], p[0]));
      if (c[0] * gn[0] + c[1] * gn[1] + c[2] * gn[2] >= 0) indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
      else indices.push(base, base + 2, base + 1, base, base + 3, base + 2);
    }
  }
  return { positions, uvs, indices };
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
