// Epic Fight armatures and animation clips (assets/<ns>/animmodels/**.json), read the way JsonAssetLoader
// reads them. Everything ends up in Epic Fight's model space: Y up, blocks, the front at -Z, the feet at 0.
//   Armature: joints in the file's `joints` order (the mesh's joint indices), each { name, parent, local }.
//   Clip:     { length, tracks: [{ joint, times, locals }] }, each local the joint's full local matrix.
// Two keyframe formats exist: "matrix" (row-major 4×4 per key, the joint's local transform in Blender's
// Z-up space) and "attributes" ({ loc, rot: [w, x, y, z], sca } per key, relative to the joint's rest).
// The loader turns the first joint it finds (Root) from Blender's axes to Minecraft's, rotating -90° about
// X; a "Coord" track is the entity's own movement, kept apart.
import { fromRows, mul, mulAll, invert, fromTRS, rotationX, decompose } from './mat4.mjs';

export const BLENDER_TO_MINECRAFT = rotationX(-Math.PI / 2);

export function readArmature(json) {
  const names = json.armature.joints;
  const joints = names.map(name => ({ name, parent: -1, local: null }));
  const index = new Map(names.map((n, i) => [n, i]));
  const visit = (node, parent, root) => {
    const i = index.get(node.name);
    if (i === undefined) throw new Error(`armature joint ${node.name} isn't in the joint list`);
    const raw = fromRows(node.transform);
    joints[i].parent = parent;
    joints[i].local = root ? mul(BLENDER_TO_MINECRAFT, raw) : raw;
    for (const child of node.children ?? []) visit(child, i, false);
  };
  for (const root of json.armature.hierarchy) visit(root, -1, true);
  const armature = { joints, index };
  armature.bind = worldMatrices(armature, joints.map(j => j.local));
  return armature;
}

// Local matrices → model-space matrices (parents come before children in a hierarchy walk, not
// necessarily in the joint list, so this recurses).
export function worldMatrices(armature, locals) {
  const world = new Array(locals.length);
  const get = i => world[i] ??= armature.joints[i].parent < 0 ? locals[i] : mul(get(armature.joints[i].parent), locals[i]);
  for (let i = 0; i < locals.length; i++) get(i);
  return world;
}

export function readClip(json, armature) {
  const format = json.format === 'attributes' ? 'attributes' : 'matrix';
  const tracks = [];
  let coord = null, length = 0, root = true;
  for (const entry of json.animation ?? []) {
    const i = armature.index.get(entry.name);
    if (i === undefined && entry.name !== 'Coord') continue;
    const rest = i === undefined ? null : armature.joints[i].local;
    const times = [], locals = [];
    for (let k = 0; k < entry.time.length; k++) {
      if (entry.time[k] < 0) continue;
      const key = entry.transform[k];
      let local;
      // A file can mix formats per key, as the loader allows.
      if (Array.isArray(key)) {
        const raw = fromRows(key);
        local = (i === undefined || root) ? mul(BLENDER_TO_MINECRAFT, raw) : raw;
      } else {
        const delta = fromTRS(key.loc, [key.rot[1], key.rot[2], key.rot[3], key.rot[0]], key.sca);
        local = rest ? mul(rest, delta) : delta;
      }
      times.push(entry.time[k]);
      locals.push(local);
    }
    root = false;
    if (!times.length) continue;
    length = Math.max(length, times.at(-1));
    if (i === undefined) coord = { times, locals };
    else tracks.push({ joint: i, times, locals });
  }
  if (format === 'attributes' && !tracks.length) throw new Error('no joint tracks');
  return { length, tracks, coord };
}

// The pose at a time: every joint's local matrix (joints without a track keep their rest transform).
export function sample(armature, clip, time) {
  const locals = armature.joints.map(j => j.local);
  for (const track of clip.tracks) locals[track.joint] = sampleTrack(track, time);
  return locals;
}

export function sampleTrack({ times, locals }, time) {
  if (time <= times[0] || times.length === 1) return locals[0];
  if (time >= times.at(-1)) return locals.at(-1);
  let k = 1;
  while (times[k] < time) k++;
  const t = (time - times[k - 1]) / (times[k] - times[k - 1]);
  const a = decompose(locals[k - 1]), b = decompose(locals[k]);
  const lerp = (x, y) => x.map((v, n) => v + (y[n] - v) * t);
  return fromTRS(lerp(a.t, b.t), slerpQ(a.q, b.q, t), lerp(a.s, b.s));
}

function slerpQ(a, b, t) {
  let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  const s = dot < 0 ? -1 : 1;
  dot *= s;
  if (dot > 0.9995) {
    const q = a.map((v, n) => v + (b[n] * s - v) * t);
    const len = Math.hypot(...q);
    return q.map(v => v / len);
  }
  const theta = Math.acos(dot), sin = Math.sin(theta);
  const k0 = Math.sin((1 - t) * theta) / sin, k1 = Math.sin(t * theta) / sin * s;
  return a.map((v, n) => v * k0 + b[n] * k1);
}

// The entity's offset at a time, from the Coord track (translation only, as ActionAnimation moves it).
export function coordAt(clip, time) {
  if (!clip.coord) return [0, 0, 0];
  const m = sampleTrack(clip.coord, time);
  return [m[12], m[13], m[14]];
}

export { mulAll, invert };
