// Held items for the attack viewer: an item's model turned into triangles in the space of the hand joint
// (Tool_R or Tool_L) that Epic Fight draws it on, so the viewer only has to parent it to that joint.
//   joint space ← Epic Fight's correction (RenderItemBase: translate(0, 0, -0.13), rotate -90° about X,
//   or the item skin's "transforms") ← the model's third-person display transform ← translate(-0.5)
// Models: vanilla item models (generated sprites are extruded one pixel deep like ItemModelGenerator,
// elements are cuboids), and item skins whose renderer draws an Epic Fight mesh (Nightfall's weapons).
import { PNG } from 'pngjs';
import { strFromU8 } from 'fflate';
import { Gltf } from './gltf.mjs';
import { invert, mulAll, translation, rotationX, rotationY, rotationZ, scaling, transformPoint, fromRows } from './mat4.mjs';
import { BLENDER_TO_MINECRAFT } from './clip.mjs';

const RAD = Math.PI / 180;
const DEFAULT_CORRECTION = mulAll(translation([0, 0, -0.13]), rotationX(-90 * RAD));

// bind: the armature's bind-pose matrices by joint name, for item meshes skinned to the biped.
// code: models that code chooses (code-models.mjs): geckolib(itemId) for items drawn by GeckoLib or
// AzureLib, handSuffixes(namespace) for held "<name><suffix>" models.
// Returns the glTF and what it was built from: "skin mesh", "skin blade", "hand model", "geckolib", "obj",
// "elements" or "sprite" (a flat item texture, extruded).
// modelId draws that model instead of the item's own (a per-style model), with the item's skin transforms.
// variant "mesh2" draws an item skin's second mesh set (mesh2_main, mesh2_texture): Nightfall's Yamato
// switches to it during some attacks.
export function itemGlb(inst, itemId, bind, code = {}, modelId = null, variant = null) {
  const { geckolib } = code;
  const [ns, name] = itemId.split(':');
  const skin = json(inst, `${ns}:item_skins/${name}.json`);
  const g = new Gltf();
  // Item skins can draw Epic Fight meshes, one per hand (Nightfall: "mesh", "mesh_main"/"mesh_off", or
  // "mesh1_main"/"mesh1_off" with a sheath as mesh2), or another item's model as the blade (Resurrection's
  // Yamato: "yamatoBlade"). Otherwise the item's own model is drawn.
  const set = variant === 'mesh2' ? 'mesh2' : 'mesh1';
  const meshKey = hand => skin?.[hand === 'main' ? 'mesh_main' : 'mesh_off'] ?? skin?.[`${set}_${hand}`] ?? (hand === 'main' ? skin?.mesh : null);
  const blade = skin?.yamatoBlade ?? skin?.yamatoblade ?? null;
  let kind, sources;
  if (meshKey('main') && !modelId) {
    kind = 'skin mesh';
    const texture = skin.texture ?? skin[`${set}_texture`];
    const biped = Object.keys(bind);
    const main = epicFightMesh(inst, meshKey('main'), texture, biped);
    sources = { main, off: meshKey('off') ? epicFightMesh(inst, meshKey('off'), texture, biped) : mirrored(main) };
  } else {
    // A mod that swaps in "<name>_in_hand" (or another suffix) when the item is held.
    const hand = blade ? null : (code.handSuffixes?.(ns) ?? []).map(s => `${ns}:item/${name}${s}`).find(id => inst.resource(`${ns}:models/${id.split(':')[1]}.json`));
    const model = resolveModel(inst, modelId ?? (blade ? `${blade.split(':')[0]}:item/${blade.split(':')[1]}` : hand ?? `${ns}:item/${name}`));
    if (!model) throw new Error(`no item model for ${itemId}`);
    let source = model;
    if (model.builtin) {
      const geo = model.builtin === 'builtin/entity' ? geckolib?.(itemId) : null;
      if (geo?.renderer) throw new Error(`drawn by a Java model (${geo.renderer.split('/').pop()})`);
      if (!geo) throw new Error(`drawn by code (${model.builtin}), renderer not found`);
      source = { ...geo, display: model.display, kind: geo.kind ?? 'geckolib' };
    }
    kind = blade ? 'skin blade' : hand && source.kind !== 'geckolib' ? 'hand model' : source.kind;
    // A Java item renderer can draw the left hand differently.
    sources = { main: source, off: source.off ? { ...source.off, display: model.display } : source };
  }
  const atlas = buildAtlas({ ...sources.main.textures, ...sources.off.textures });
  const material = g.material(atlas.png, { name: itemId });
  // One mesh per distinct source in its own space (pixels, or the biped's space for Epic Fight meshes).
  // Corners with the same position and uv are one vertex.
  const meshes = new Map();
  const meshOf = source => {
    if (meshes.has(source)) return meshes.get(source);
    const prim = { positions: [], uvs: [], indices: [], material };
    const seen = new Map();
    const vertex = (p, uv) => {
      const key = `${p.map(v => v.toFixed(5))}|${uv.map(v => v.toFixed(6))}`;
      if (!seen.has(key)) { seen.set(key, prim.positions.length / 3); prim.positions.push(...p); prim.uvs.push(...uv); }
      return seen.get(key);
    };
    for (const quad of source.quads) {
      const v = quad.points.map((p, i) => vertex(p, atlas.map(quad.texture, quad.uvs[i])));
      prim.indices.push(...(v.length === 3 ? v : [v[0], v[1], v[2], v[0], v[2], v[3]]));
    }
    meshes.set(source, g.mesh(`${itemId} ${meshes.size}`, [prim]));
    return meshes.get(source);
  };
  // Nodes are named "<hand>__<joint>": the viewer parents each to that joint of the player. P1nero's
  // dual renderer always draws the item in both hands (Tidal Claws, gauntlets), so its left one is "main".
  const both = /dual_renderer$/.test(skin?.renderer ?? '');
  for (const hand of ['main', 'off']) {
    const source = sources[hand];
    const label = both ? 'main' : hand;
    if (source.mesh) {
      // Item meshes are modelled on the biped at rest, so each part moves into its joint's own space.
      const parts = new Map();
      for (const q of source.quads) { if (!parts.has(q.joint)) parts.set(q.joint, { ...source, quads: [] }); parts.get(q.joint).quads.push(q); }
      for (const [joint, part] of parts) if (bind[joint]) g.node({ name: `${label}__${joint}`, matrix: invert(bind[joint]), mesh: meshOf(part) });
    } else {
      const matrix = mulAll(skinTransform(skin, hand) ?? DEFAULT_CORRECTION, displayMatrix(source.display, hand), translation([-0.5, -0.5, -0.5]), scaling([1 / 16, 1 / 16, 1 / 16]));
      g.node({ name: `${label}__${hand === 'main' ? 'Tool_R' : 'Tool_L'}`, matrix, mesh: meshOf(source) });
    }
  }
  return { glb: g.toGlb(), kind };
}

// An item skin's "transforms": { mainhand: { Tool_R: { translation, rotation, scale } } } (offhand likewise).
function skinTransform(skin, hand) {
  const t = skin?.transforms?.[hand === 'main' ? 'mainhand' : 'offhand'];
  const joint = t && (t[hand === 'main' ? 'Tool_R' : 'Tool_L'] ?? Object.values(t)[0]);
  if (!joint) return null;
  const r = joint.rotation ?? [0, 0, 0];
  return mulAll(translation(joint.translation ?? [0, 0, 0]), rotationX(r[0] * RAD), rotationY(r[1] * RAD), rotationZ(r[2] * RAD), scaling(joint.scale ?? [1, 1, 1]));
}

// ItemTransform.apply: translate, rotationXYZ, scale; the left hand mirrors X.
function displayMatrix(display, hand) {
  const t = (hand === 'off' ? display.thirdperson_lefthand : null) ?? display.thirdperson_righthand ?? display.thirdperson ?? {};
  const clamp = (v, lim) => Math.max(-lim, Math.min(lim, v));
  let [tx, ty, tz] = (t.translation ?? [0, 0, 0]).map(v => clamp(v, 80) / 16);
  let [rx, ry, rz] = t.rotation ?? [0, 0, 0];
  const s = (t.scale ?? [1, 1, 1]).map(v => clamp(v, 4));
  if (hand === 'off' && !display.thirdperson_lefthand) { tx = -tx; ry = -ry; rz = -rz; }
  return mulAll(translation([tx, ty, tz]), rotationX(rx * RAD), rotationY(ry * RAD), rotationZ(rz * RAD), scaling(s));
}

// The item model with its parents merged: { quads, textures: { key: png }, display, kind } or { builtin, display }.
export function resolveModel(inst, id) {
  const textures = {};
  let display = {}, elements = null, generated = false, builtin = null;
  const seen = new Set();
  for (let cur = normal(id); cur && !seen.has(cur); ) {
    seen.add(cur);
    if (/^(minecraft:)?(item|builtin)\/generated$/.test(cur) || cur === 'builtin/generated') { generated = true; break; }
    if (/builtin\/entity$/.test(cur)) { builtin = 'builtin/entity'; break; }
    let m = json(inst, `${cur.split(':')[0]}:models/${cur.split(':')[1]}.json`);
    if (!m) break;
    // A model that is only overrides (Resurrection's Yamato: sheathed or not) shows its first override.
    if (!m.parent && !m.elements && !m.loader && !m.textures && m.overrides?.length) { cur = normal(m.overrides[0].model); continue; }
    // Forge's separate_transforms: the held model is "base" (or its third-person perspective).
    if (m.loader === 'forge:separate_transforms' || m.loader === 'forge:separate-perspective') {
      const pick = m.perspectives?.thirdperson_righthand ?? m.base;
      for (const [k, v] of Object.entries(m.display ?? {})) display[k] ??= v;
      m = typeof pick === 'string' ? { parent: pick } : pick;
    }
    if (m.loader === 'forge:obj') {
      for (const [k, v] of Object.entries(m.display ?? {})) display[k] ??= v;
      const obj = objModel(inst, m);
      return { ...obj, display, kind: 'obj' };
    }
    if (m.loader && m.loader !== 'minecraft:elements') builtin ??= m.loader;
    for (const [k, v] of Object.entries(m.textures ?? {})) textures[k] ??= v;
    for (const [k, v] of Object.entries(m.display ?? {})) display[k] ??= v;
    elements ??= m.elements ?? null;
    if (elements) { builtin = null; }
    cur = m.parent ? normal(m.parent) : null;
  }
  if (builtin && !elements) return { builtin, display };
  const resolve = ref => {
    for (let k = 0; k < 8 && typeof ref === 'string' && ref.startsWith('#'); k++) ref = textures[ref.slice(1)];
    return typeof ref === 'string' && !ref.startsWith('#') ? normal(ref) : null;
  };
  const pngs = {};
  const load = ref => {
    const tex = resolve(ref);
    if (!tex) return null;
    if (!(tex in pngs)) pngs[tex] = firstFrame(inst.resource(`${tex.split(':')[0]}:textures/${tex.split(':')[1]}.png`));
    return pngs[tex] ? tex : null;
  };
  const quads = [];
  if (elements) {
    for (const el of elements) quads.push(...elementQuads(el, ref => load(ref)));
  } else if (generated) {
    for (let i = 0; textures[`layer${i}`]; i++) {
      const tex = load(`#layer${i}`);
      if (tex) quads.push(...extrude(pngs[tex], tex, i));
    }
  }
  if (!quads.length) throw new Error(`model ${id} has nothing to draw`);
  return { quads, textures: pngs, display, kind: elements ? 'elements' : 'sprite' };
}

const normal = id => (id.includes(':') ? id : `minecraft:${id}`);

function json(inst, res) {
  const bytes = inst.resource(res);
  if (!bytes) return null;
  try { return JSON.parse(strFromU8(bytes).replace(/^﻿/, '')); } catch { return null; }
}

// Animated textures are vertical strips; the first frame is the square at the top.
export function firstFrame(bytes) {
  if (!bytes) return null;
  let img;
  try { img = PNG.sync.read(Buffer.from(trimPng(bytes))); } catch { return null; }
  if (img.height <= img.width) return img;
  const out = new PNG({ width: img.width, height: img.width });
  img.data.copy(out.data, 0, 0, img.width * img.width * 4);
  return out;
}
function trimPng(bytes) {
  const b = Buffer.from(bytes);
  const end = b.indexOf('IEND');
  return end > 0 ? b.subarray(0, end + 8) : b;
}

// ItemModelGenerator, as runs of opaque pixels per row: each run is a 1px-deep box whose front and back
// show the run, whose top and bottom show the same pixels edge-on, and whose ends show the end pixels.
function extrude(img, tex, layer) {
  const { width: w, height: h, data } = img;
  const px = 16 / w, py = 16 / h;
  const z0 = 7.5 - layer * 0.01, z1 = 8.5 + layer * 0.01;
  const quads = [];
  const solid = (x, y) => x >= 0 && y >= 0 && x < w && y < h && data[(y * w + x) * 4 + 3] > 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; ) {
      if (!solid(x, y)) { x++; continue; }
      let e = x;
      while (solid(e + 1, y)) e++;
      const x0 = x * px, x1 = (e + 1) * px, y1 = 16 - y * py, y0 = 16 - (y + 1) * py;
      const uv = (u0, v0, u1, v1) => [[u0, v0], [u1, v0], [u1, v1], [u0, v1]].map(([u, v]) => [u / w, v / h]);
      // Front (south, +Z) and back.
      quads.push({ texture: tex, points: [[x0, y1, z1], [x1, y1, z1], [x1, y0, z1], [x0, y0, z1]], uvs: uv(x, y, e + 1, y + 1) });
      quads.push({ texture: tex, points: [[x1, y1, z0], [x0, y1, z0], [x0, y0, z0], [x1, y0, z0]], uvs: uv(e + 1, y, x, y + 1) });
      // Top and bottom only where the neighbouring row is empty, ends always.
      for (let k = x; k <= e; k++) {
        const a = k * px, b = (k + 1) * px;
        if (!solid(k, y - 1)) quads.push({ texture: tex, points: [[a, y1, z0], [b, y1, z0], [b, y1, z1], [a, y1, z1]], uvs: uv(k, y, k + 1, y + 1) });
        if (!solid(k, y + 1)) quads.push({ texture: tex, points: [[a, y0, z1], [b, y0, z1], [b, y0, z0], [a, y0, z0]], uvs: uv(k, y, k + 1, y + 1) });
      }
      quads.push({ texture: tex, points: [[x0, y1, z0], [x0, y1, z1], [x0, y0, z1], [x0, y0, z0]], uvs: uv(x, y, x + 1, y + 1) });
      quads.push({ texture: tex, points: [[x1, y1, z1], [x1, y1, z0], [x1, y0, z0], [x1, y0, z1]], uvs: uv(e, y, e + 1, y + 1) });
      x = e + 1;
    }
  }
  return quads;
}

// A block-model element: from/to in pixels, faces with uv (pixels of a 16-unit texture) and rotation,
// and an optional rotation about an origin on one axis (rescale stretches the other two axes).
function elementQuads(el, load) {
  const [x0, y0, z0] = el.from, [x1, y1, z1] = el.to;
  const corners = {
    down: [[x0, y0, z1], [x1, y0, z1], [x1, y0, z0], [x0, y0, z0]],
    up: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]],
    north: [[x1, y1, z0], [x0, y1, z0], [x0, y0, z0], [x1, y0, z0]],
    south: [[x0, y1, z1], [x1, y1, z1], [x1, y0, z1], [x0, y0, z1]],
    west: [[x0, y1, z0], [x0, y1, z1], [x0, y0, z1], [x0, y0, z0]],
    east: [[x1, y1, z1], [x1, y1, z0], [x1, y0, z0], [x1, y0, z1]],
  };
  const autoUv = {
    down: [x0, 16 - z1, x1, 16 - z0], up: [x0, z0, x1, z1], north: [16 - x1, 16 - y1, 16 - x0, 16 - y0],
    south: [x0, 16 - y1, x1, 16 - y0], west: [z0, 16 - y1, z1, 16 - y0], east: [16 - z1, 16 - y1, 16 - z0, 16 - y0],
  };
  let rotate = p => p;
  if (el.rotation?.angle) {
    const { origin = [8, 8, 8], axis, angle, rescale } = el.rotation;
    const m = { x: rotationX, y: rotationY, z: rotationZ }[axis](angle * RAD);
    const k = rescale ? 1 / Math.cos(Math.abs(angle) * RAD) : 1;
    const stretch = axis === 'x' ? [1, k, k] : axis === 'y' ? [k, 1, k] : [k, k, 1];
    const full = mulAll(translation(origin), m, scaling(stretch), translation(origin.map(v => -v)));
    rotate = p => transformPoint(full, p);
  }
  const quads = [];
  for (const [face, spec] of Object.entries(el.faces ?? {})) {
    const tex = load(spec.texture);
    if (!tex || !corners[face]) continue;
    const [u0, v0, u1, v1] = spec.uv ?? autoUv[face];
    let uvs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
    for (let r = 0; r < ((spec.rotation ?? 0) / 90 & 3); r++) uvs.push(uvs.shift());
    quads.push({ texture: tex, points: corners[face].map(rotate), uvs: uvs.map(([u, v]) => [u / 16, v / 16]) });
  }
  return quads;
}

// An Epic Fight mesh drawn as a skinned mesh posed by the wielder's armature (Avalon's mesh_item and
// animation_item renderers): modelled on the biped at rest, each vertex following one joint. Triangles
// are tagged with the player joint they follow: the mesh's own armature (when it has one) names its
// joints, and extra joints (Kusabimaru's sheaths, claw fingers) follow their nearest ancestor the player
// has. biped: the player armature's joint names in index order.
function epicFightMesh(inst, meshId, texture, biped) {
  const [ns, p] = meshId.split(':');
  const mesh = json(inst, `${ns}:animmodels/${p}.json`);
  if (!mesh?.vertices) throw new Error(`item skin mesh not found: ${meshId}`);
  if (!texture) throw new Error(`item skin names no texture for ${meshId}`);
  const texId = texture.replace(/\.png$/, '');
  const [tns, tpath] = texId.split(':');
  const png = firstFrame(inst.resource(`${tns}:${tpath.startsWith('textures/') ? tpath : `textures/${tpath}`}.png`));
  if (!png) throw new Error(`item skin texture not found: ${texture}`);
  const names = mesh.armature?.joints ?? biped;
  const parent = {};
  const walk = (node, up) => { parent[node.name] = up; for (const c of node.children ?? []) walk(c, node.name); };
  for (const root of mesh.armature?.hierarchy ?? []) walk(root, null);
  const known = new Set(biped);
  const follow = name => { for (let n = name, d = 0; n && d < 32; d++) { if (known.has(n)) return n; n = parent[n]; } return 'Tool_R'; };
  // Each position's heaviest joint.
  const v = mesh.vertices, pos = v.positions.array, uv = v.uvs.array;
  const jointOf = [];
  for (let i = 0, at = 0; i < v.vcounts.array.length; i++) {
    let best = null, weight = -1;
    for (let k = 0; k < v.vcounts.array[i]; k++, at += 2) {
      const w = v.weights.array[v.vindices.array[at + 1]];
      if (w > weight) { weight = w; best = v.vindices.array[at]; }
    }
    jointOf.push(follow(names[best] ?? 'Tool_R'));
  }
  const quads = [];
  for (const part of Object.values(v.parts ?? { all: v.indices })) {
    const a = part.array ?? part;
    for (let i = 0; i + 8 < a.length; i += 9) {
      const points = [0, 1, 2].map(k => transformPoint(BLENDER_TO_MINECRAFT, [pos[a[i + k * 3] * 3], pos[a[i + k * 3] * 3 + 1], pos[a[i + k * 3] * 3 + 2]]));
      const uvs = [0, 1, 2].map(k => [uv[a[i + k * 3 + 1] * 2], uv[a[i + k * 3 + 1] * 2 + 1]]);
      quads.push({ texture: texId, points, uvs, joint: jointOf[a[i]] });
    }
  }
  return { mesh: true, kind: 'skin mesh', quads, textures: { [texId]: png }, display: {} };
}

// The same mesh in the other hand: mirrored across the body and moved to the left-hand joints.
function mirrored(source) {
  const swap = j => j.replace(/_R$/, '_TMP').replace(/_L$/, '_R').replace(/_TMP$/, '_L');
  return { ...source, quads: source.quads.map(q => ({ ...q, points: q.points.map(([x, y, z]) => [-x, y, z]), joint: swap(q.joint) })) };
}

// Forge's OBJ loader: positions in blocks, faces as polygons, textures from the MTL's map_Kd (or the
// model's own "textures" when the MTL names a #key), "flip_v" flips texture rows (Forge 47 reads only that
// spelling, so Weapons of Miracles' "flip-v" does nothing in game).
function objModel(inst, m) {
  const [ns, file] = normal(m.model).split(':');
  const text = inst.resource(`${ns}:${file}`);
  if (!text) throw new Error(`OBJ not found: ${m.model}`);
  const materials = {};
  const pngs = {};
  const load = ref => {
    for (let k = 0; k < 8 && typeof ref === 'string' && ref.startsWith('#'); k++) ref = m.textures?.[ref.slice(1)];
    if (typeof ref !== 'string') return null;
    const tex = normal(ref.replace(/\.png$/, '').replace(/^([a-z0-9_.-]+:)?textures\//, '$1'));
    if (!(tex in pngs)) pngs[tex] = firstFrame(inst.resource(`${tex.split(':')[0]}:textures/${tex.split(':')[1]}.png`));
    return pngs[tex] ? tex : null;
  };
  const lines = strFromU8(text).split(/\r?\n/);
  // "mtl_override" swaps the OBJ's material file (Weapons of Miracles' staffs share one OBJ).
  const lib = m.mtl_override ?? lines.find(l => l.startsWith('mtllib '))?.slice(7).trim();
  if (lib) {
    const dir = file.slice(0, file.lastIndexOf('/') + 1);
    const mtl = inst.resource(lib.includes(':') ? normal(lib) : `${ns}:${dir}${lib}`);
    let current = null;
    for (const l of mtl ? strFromU8(mtl).split(/\r?\n/) : []) {
      const [key, ...rest] = l.trim().split(/\s+/);
      if (key === 'newmtl') current = rest.join(' ');
      else if (key === 'map_Kd' && current) materials[current] = rest.join(' ');
    }
  }
  const v = [], vt = [], quads = [];
  let tex = load(Object.values(materials)[0] ?? '#texture');
  for (const l of lines) {
    const [key, ...rest] = l.trim().split(/\s+/);
    if (key === 'v') v.push(rest.slice(0, 3).map(Number).map(x => x * 16));
    else if (key === 'vt') vt.push([Number(rest[0]), m.flip_v ? 1 - Number(rest[1]) : Number(rest[1])]);
    else if (key === 'usemtl') tex = load(materials[rest.join(' ')] ?? '#' + rest.join(' ')) ?? tex;
    else if (key === 'f' && tex) {
      const corners = rest.map(c => c.split('/').map(n => parseInt(n, 10)));
      const at = (i, list) => (i < 0 ? list.length + i : i - 1);
      for (let k = 1; k + 1 < corners.length; k++) {
        const tri = [corners[0], corners[k], corners[k + 1]];
        quads.push({ texture: tex, points: tri.map(c => v[at(c[0], v)]), uvs: tri.map(c => vt[at(c[1], vt)] ?? [0, 0]) });
      }
    }
  }
  if (!quads.length) throw new Error(`OBJ ${m.model} has no textured faces`);
  return { quads, textures: pngs };
}

// Every texture an item uses, stacked into one image; uvs are remapped into it.
function buildAtlas(textures) {
  const entries = Object.entries(textures).filter(([, img]) => img);
  const width = Math.max(...entries.map(([, img]) => img.width));
  const height = entries.reduce((n, [, img]) => n + img.height, 0);
  const out = new PNG({ width, height });
  const place = {};
  let y = 0;
  for (const [key, img] of entries) {
    for (let r = 0; r < img.height; r++) img.data.copy(out.data, ((y + r) * width) * 4, r * img.width * 4, (r + 1) * img.width * 4);
    place[key] = { y, w: img.width, h: img.height };
    y += img.height;
  }
  return {
    png: new Uint8Array(PNG.sync.write(out)),
    map: (key, [u, v]) => { const p = place[key]; return [u * p.w / width, (p.y + v * p.h) / height]; },
  };
}

export { fromRows };
