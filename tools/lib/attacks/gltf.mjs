// A small glTF 2.0 (.glb) builder for the attack viewer: node trees, triangle meshes (optionally skinned),
// cut-out pixel-art materials and keyframe animations. tools/lib/models/glb.mjs writes the cube mobs; this
// one writes what those don't need: skins, matrices and clips without meshes.
import { decompose } from './mat4.mjs';

export class Gltf {
  constructor() {
    this.doc = { asset: { version: '2.0', generator: 'soulrend-wiki attacks' }, scene: 0, scenes: [{ nodes: [] }], nodes: [], buffers: [], bufferViews: [], accessors: [] };
    this.chunks = [];
    this.length = 0;
    // Accessor data shares one buffer view per kind (vertex attributes, indices, the rest), laid out when
    // the file is written; a view per accessor would make the JSON bigger than the data.
    this.pools = new Map();
    this.pending = [];
  }

  // A node from { name, matrix } or { name, t, q, s }; returns its index.
  node({ name, matrix, t, q, s, children, mesh, skin }, parent) {
    const out = { name };
    if (matrix) ({ t, q, s } = decompose(matrix));
    if (t && t.some(v => Math.abs(v) > 1e-9)) out.translation = t.map(round);
    if (q && Math.abs(q[3]) < 1 - 1e-9) out.rotation = q.map(round);
    if (s && s.some(v => Math.abs(v - 1) > 1e-9)) out.scale = s.map(round);
    if (mesh !== undefined) out.mesh = mesh;
    if (skin !== undefined) out.skin = skin;
    if (children) out.children = children;
    const i = this.doc.nodes.push(out) - 1;
    if (parent === undefined) this.doc.scenes[0].nodes.push(i);
    else if (parent !== null) (this.doc.nodes[parent].children ??= []).push(i);
    return i;
  }

  view(bytes, target) {
    const padded = Math.ceil(bytes.byteLength / 4) * 4;
    this.doc.bufferViews.push({ buffer: 0, byteOffset: this.length, byteLength: bytes.byteLength, ...(target ? { target } : {}) });
    this.chunks.push(new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength), new Uint8Array(padded - bytes.byteLength));
    this.length += padded;
    return this.doc.bufferViews.length - 1;
  }

  accessor(array, type, { target, minmax } = {}) {
    const size = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 }[type];
    const componentType = array instanceof Float32Array ? 5126 : array instanceof Int16Array ? 5122 : array instanceof Uint16Array ? 5123 : array instanceof Uint8Array ? 5121 : 5125;
    const key = target ?? 0;
    if (!this.pools.has(key)) this.pools.set(key, { chunks: [], length: 0 });
    const pool = this.pools.get(key);
    const bytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    const acc = { bufferView: key, byteOffset: pool.length, componentType, count: array.length / size, type };
    pool.chunks.push(bytes, new Uint8Array((4 - bytes.length % 4) % 4));
    pool.length += Math.ceil(bytes.length / 4) * 4;
    this.pending.push(acc);
    if (array instanceof Int16Array) acc.normalized = true;
    if (minmax) {
      acc.min = []; acc.max = [];
      for (let c = 0; c < size; c++) {
        let lo = Infinity, hi = -Infinity;
        for (let i = c; i < array.length; i += size) { lo = Math.min(lo, array[i]); hi = Math.max(hi, array[i]); }
        acc.min.push(Math.fround(lo)); acc.max.push(Math.fround(hi));
      }
    }
    return this.doc.accessors.push(acc) - 1;
  }

  // A pixel-art material: nearest filtering, alpha cut-out (or blending), no lighting tricks.
  material(png, { name = 'texture', blend = false } = {}) {
    const doc = this.doc;
    doc.images ??= []; doc.textures ??= []; doc.samplers ??= [{ magFilter: 9728, minFilter: 9728 }]; doc.materials ??= [];
    const image = doc.images.push({ bufferView: this.view(png), mimeType: 'image/png' }) - 1;
    const texture = doc.textures.push({ sampler: 0, source: image }) - 1;
    return doc.materials.push({
      name,
      pbrMetallicRoughness: { baseColorTexture: { index: texture }, metallicFactor: 0, roughnessFactor: 1 },
      alphaMode: blend ? 'BLEND' : 'MASK', ...(blend ? {} : { alphaCutoff: 0.1 }), doubleSided: true,
    }) - 1;
  }

  // primitives: [{ positions, uvs, indices, material, joints?, weights? }] (flat arrays).
  mesh(name, primitives) {
    const doc = this.doc;
    doc.meshes ??= [];
    return doc.meshes.push({
      name,
      primitives: primitives.filter(p => p.indices.length).map(p => ({
        attributes: {
          POSITION: this.accessor(new Float32Array(p.positions), 'VEC3', { target: 34962, minmax: true }),
          TEXCOORD_0: this.accessor(new Float32Array(p.uvs), 'VEC2', { target: 34962 }),
          ...(p.joints ? { JOINTS_0: this.accessor(new Uint8Array(p.joints), 'VEC4', { target: 34962 }), WEIGHTS_0: this.accessor(new Float32Array(p.weights), 'VEC4', { target: 34962 }) } : {}),
        },
        indices: this.accessor(p.indices.length > 65535 ? new Uint32Array(p.indices) : new Uint16Array(p.indices), 'SCALAR', { target: 34963 }),
        material: p.material,
      })),
    }) - 1;
  }

  skin(joints, inverseBind) {
    this.doc.skins ??= [];
    const data = new Float32Array(inverseBind.length * 16);
    inverseBind.forEach((m, i) => data.set(m, i * 16));
    return this.doc.skins.push({ joints, inverseBindMatrices: this.accessor(data, 'MAT4') }) - 1;
  }

  // tracks: [{ node, path: 'translation' | 'rotation' | 'scale', times, values (flat) }]
  animation(name, tracks) {
    const samplers = [], channels = [];
    const inputs = new Map();     // tracks given the same times array share one input accessor
    for (const track of tracks) {
      if (!track.times.length) continue;
      const size = track.path === 'rotation' ? 4 : 3;
      if (!inputs.has(track.times)) inputs.set(track.times, this.accessor(new Float32Array(track.times), 'SCALAR', { minmax: true }));
      samplers.push({
        input: inputs.get(track.times),
        // Rotations as normalized shorts (glTF allows it for rotation outputs): half the size, ~0.003° steps.
        output: size === 4 ? this.accessor(Int16Array.from(track.values, v => Math.round(Math.max(-1, Math.min(1, v)) * 32767)), 'VEC4') : this.accessor(new Float32Array(track.values), 'VEC3'),
        interpolation: 'LINEAR',
      });
      channels.push({ sampler: samplers.length - 1, target: { node: track.node, path: track.path } });
    }
    if (channels.length) (this.doc.animations ??= []).push({ name, samplers, channels });
  }

  toGlb() {
    const doc = this.doc;
    const views = new Map();
    for (const [key, pool] of this.pools) {
      const bytes = new Uint8Array(pool.length);
      let at = 0;
      for (const c of pool.chunks) { bytes.set(c, at); at += c.length; }
      views.set(key, this.view(bytes, key || undefined));
    }
    for (const acc of this.pending) { acc.bufferView = views.get(acc.bufferView); if (!acc.byteOffset) delete acc.byteOffset; }
    this.pools.clear();
    this.pending = [];
    doc.buffers.push({ byteLength: this.length });
    for (const key of ['accessors', 'bufferViews']) if (!doc[key].length) delete doc[key];
    if (!this.length) delete doc.buffers;
    const json = new TextEncoder().encode(JSON.stringify(doc));
    const jsonPad = (4 - (json.length % 4)) % 4;
    const total = 12 + 8 + json.length + jsonPad + (this.length ? 8 + this.length : 0);
    const out = new Uint8Array(total);
    const view = new DataView(out.buffer);
    view.setUint32(0, 0x46546c67, true); view.setUint32(4, 2, true); view.setUint32(8, total, true);
    view.setUint32(12, json.length + jsonPad, true); view.setUint32(16, 0x4e4f534a, true);
    out.set(json, 20);
    out.fill(0x20, 20 + json.length, 20 + json.length + jsonPad);
    if (this.length) {
      let at = 20 + json.length + jsonPad;
      view.setUint32(at, this.length, true); view.setUint32(at + 4, 0x004e4942, true);
      at += 8;
      for (const c of this.chunks) { out.set(c, at); at += c.length; }
    }
    return out;
  }
}

const round = v => Math.round(v * 1e6) / 1e6;
