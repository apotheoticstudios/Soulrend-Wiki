// The player model (Epic Fight's skinned biped mesh with a Minecraft skin) and animation clips as glTF.
// Both stay in Epic Fight's model space; the viewer turns the scene to face the camera. Joint nodes keep
// Epic Fight's joint names, so a clip file (nodes and tracks only) binds to the player by name. "Coord"
// sits above Root: clips that move the entity animate it.
import { PNG } from 'pngjs';
import { Gltf } from './gltf.mjs';
import { readArmature, BLENDER_TO_MINECRAFT } from './clip.mjs';
import { invert, transformPoint, decompose } from './mat4.mjs';

// Slim ("Alex") skins leave the outer two columns of the right arm transparent.
export function isSlimSkin(png) {
  const img = PNG.sync.read(Buffer.from(png));
  if (img.width !== 64 || img.height !== 64) return false;
  for (let y = 20; y < 32; y++) for (const x of [54, 55]) if (img.data[(y * 64 + x) * 4 + 3]) return false;
  return true;
}

export function playerGlb(meshJson, skinPng) {
  const armature = readArmature(meshJson);
  const g = new Gltf();
  const coord = g.node({ name: 'Coord' });
  const nodes = [];
  const add = i => {
    const j = armature.joints[i];
    nodes[i] = g.node({ name: j.name, matrix: j.local }, j.parent < 0 ? coord : nodes[j.parent]);
    armature.joints.forEach((c, k) => { if (c.parent === i) add(k); });
  };
  armature.joints.forEach((j, i) => { if (j.parent < 0) add(i); });

  const v = meshJson.vertices;
  const pos = v.positions.array, uv = v.uvs.array;
  // Each position's joint weights, from vcounts and (joint, weight index) pairs.
  const influences = [];
  for (let p = 0, at = 0; p < v.vcounts.array.length; p++) {
    const list = [];
    for (let k = 0; k < v.vcounts.array[p]; k++, at += 2) list.push([v.vindices.array[at], v.weights.array[v.vindices.array[at + 1]]]);
    list.sort((a, b) => b[1] - a[1]);
    const top = list.slice(0, 4);
    const sum = top.reduce((s, [, w]) => s + w, 0) || 1;
    influences.push(top.map(([j, w]) => [j, w / sum]));
  }
  const material = g.material(skinPng, { name: 'skin' });
  const prim = { positions: [], uvs: [], joints: [], weights: [], indices: [], material };
  for (const part of Object.values(v.parts)) {
    const a = part.array ?? part;
    for (let i = 0; i + 2 < a.length; i += 3) {
      const [x, y, z] = transformPoint(BLENDER_TO_MINECRAFT, [pos[a[i] * 3], pos[a[i] * 3 + 1], pos[a[i] * 3 + 2]]);
      prim.positions.push(x, y, z);
      prim.uvs.push(uv[a[i + 1] * 2], uv[a[i + 1] * 2 + 1]);
      const inf = influences[a[i]];
      for (let k = 0; k < 4; k++) { prim.joints.push(inf[k]?.[0] ?? 0); prim.weights.push(inf[k]?.[1] ?? 0); }
      prim.indices.push(prim.indices.length);
    }
  }
  const mesh = g.mesh('player', [prim]);
  const skin = g.skin(nodes, armature.bind.map(m => invert(m)));
  g.node({ name: 'player', mesh, skin });
  return g.toGlb();
}

// One clip as a glTF animation over nodes named after its joints.
export function clipGlb(clip, armature, name) {
  const g = new Gltf();
  const tracks = [];
  // Tolerances below what shows: 1/16 of a pixel, about 0.2°. A channel that stays at the joint's rest
  // value is left out (the viewer's mixer restores unanimated joints to rest), and a joint's channels
  // share the keys any of them needs, so they share one time input.
  const TOL = { t: 4e-3, q: 2e-3, s: 2e-3 };
  const addTracks = (nodeName, times, locals, rest) => {
    const parts = locals.map(m => decompose(m));
    for (let k = 1; k < parts.length; k++) {
      const a = parts[k - 1].q, b = parts[k].q;
      if (a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3] < 0) parts[k].q = b.map(x => -x);
    }
    const restParts = rest ? decompose(rest) : null;
    const near = (v, r, tol) => v.every((x, i) => Math.abs(x - r[i]) <= tol);
    const nearQ = (q, r) => near(q, r, TOL.q) || near(q, r.map(x => -x), TOL.q);
    const paths = [['translation', 't'], ['rotation', 'q'], ['scale', 's']].filter(([path, key]) => {
      const values = parts.map(p => p[key]);
      if (path === 'scale') return !values.every(v => near(v, restParts?.s ?? [1, 1, 1], TOL.s));
      if (!restParts) return true;
      return !values.every(v => (key === 'q' ? nearQ(v, restParts.q) : near(v, restParts.t, TOL.t)));
    });
    if (!paths.length) return;
    const kept = new Set();
    for (const [, key] of paths) for (const i of reduce(times, parts.map(p => p[key]), TOL[key])) kept.add(i);
    const keys = [...kept].sort((a, b) => a - b);
    const node = g.node({ name: nodeName });
    const input = keys.map(i => times[i]);
    for (const [path, key] of paths) tracks.push({ node, path, times: input, values: keys.flatMap(i => parts[i][key]) });
  };
  for (const track of clip.tracks) addTracks(armature.joints[track.joint].name, track.times, track.locals, armature.joints[track.joint].local);
  // Coord moves the entity; only its translation counts.
  if (clip.coord) addTracks('Coord', clip.coord.times, clip.coord.locals.map(m => { const t = new Float64Array(16); t[0] = t[5] = t[10] = t[15] = 1; t[12] = m[12]; t[13] = m[13]; t[14] = m[14]; return t; }), new Float64Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
  g.animation(name, tracks);
  return g.toGlb();
}

// Keyframes that linear interpolation can't reproduce within tol (first and last always kept).
function reduce(times, values, tol) {
  if (times.length <= 2) return times.map((_, i) => i);
  const kept = [0];
  for (let i = 1; i < times.length - 1; i++) {
    const a = kept.at(-1);
    // Keep i if dropping it would move any frame between the last kept key and i + 1 too far.
    let ok = true;
    for (let k = a + 1; k <= i && ok; k++) {
      const t = (times[k] - times[a]) / (times[i + 1] - times[a] || 1);
      ok = values[k].every((v, n) => Math.abs(values[a][n] + (values[i + 1][n] - values[a][n]) * t - v) <= tol);
    }
    if (!ok) kept.push(i);
  }
  kept.push(times.length - 1);
  return kept;
}

export { readArmature };
