// Bedrock geometry (GeckoLib/AzureLib .geo.json) and animations (.animation.json) → the cube model glb.mjs takes.
//
// Bedrock space has Y up with absolute pivots and cube origins; Java space has Y down with each part
// relative to its parent. The X axis and the Euler angles carry over unchanged (Blockbench's Java export
// does the same), so only Y flips: javaY = 24 - bedrockY.
import { compileMolang } from './molang.mjs';

const FACE = { north: 'north', south: 'south', east: 'west', west: 'east', up: 'down', down: 'up' };
const RAD = Math.PI / 180;
const FPS = 20;

export function readGeo(json, identifier) {
  let geo, texWidth, texHeight;
  if (json['minecraft:geometry']) {
    const all = json['minecraft:geometry'];
    geo = (identifier && all.find(g => g.description?.identifier === identifier)) ?? all[0];
    texWidth = geo.description?.texture_width;
    texHeight = geo.description?.texture_height;
  } else {
    // format 1.8: { "geometry.name": { texturewidth, textureheight, bones } }
    const key = (identifier && json[identifier] ? identifier : Object.keys(json).find(k => k.startsWith('geometry.')));
    geo = json[key];
    texWidth = geo.texturewidth;
    texHeight = geo.textureheight;
  }
  const bones = geo.bones ?? [];
  const byName = new Map(bones.map(b => [b.name, b]));
  const pivot = b => { const p = b?.pivot ?? [0, 0, 0]; return [p[0], 24 - p[1], p[2]]; };
  const parts = new Map();
  const roots = [];
  for (const bone of bones) {
    const pj = pivot(bone);
    const parent = bone.parent && byName.get(bone.parent);
    const pp = parent ? pivot(parent) : [0, 0, 0];
    const part = {
      name: bone.name,
      pos: [pj[0] - pp[0], pj[1] - pp[1], pj[2] - pp[2]],
      rot: (bone.rotation ?? bone.bind_pose_rotation ?? [0, 0, 0]).map(a => a * RAD),
      cubes: [],
      children: [],
      rest: { pos: null, rot: bone.rotation ?? [0, 0, 0] },
    };
    part.rest.pos = part.pos;
    if (bone.neverRender) part.hidden = true;
    for (const [i, cube] of (bone.cubes ?? []).entries()) {
      const c = toCube(cube, bone);
      if (cube.rotation && cube.rotation.some(Boolean)) {
        // Java parts can't rotate single cubes: give a rotated cube its own child part at its pivot.
        const cp = cube.pivot ? [cube.pivot[0], 24 - cube.pivot[1], cube.pivot[2]] : pj;
        c.from = [c.from[0] - cp[0], c.from[1] - cp[1], c.from[2] - cp[2]];
        part.children.push({ name: `${bone.name}_cube${i}`, pos: [cp[0] - pj[0], cp[1] - pj[1], cp[2] - pj[2]], rot: cube.rotation.map(a => a * RAD), cubes: [c], children: [] });
      } else {
        c.from = [c.from[0] - pj[0], c.from[1] - pj[1], c.from[2] - pj[2]];
        part.cubes.push(c);
      }
    }
    parts.set(bone.name, part);
  }
  for (const bone of bones) {
    const parent = bone.parent && parts.get(bone.parent);
    if (parent) parent.children.push(parts.get(bone.name));
    else roots.push(parts.get(bone.name));
  }
  return { texWidth, texHeight, parts: roots, byName: parts };
}

// A cube in absolute Java coordinates (the caller makes it relative to its part).
function toCube(cube, bone) {
  const [w, h, d] = cube.size ?? [0, 0, 0];
  const [x, y, z] = cube.origin ?? [0, 0, 0];
  const out = {
    from: [x, 24 - y - h, z],
    size: [w, h, d],
    inflate: cube.inflate ?? bone.inflate ?? 0,
    mirror: !!(cube.mirror ?? bone.mirror),
  };
  if (Array.isArray(cube.uv) || cube.uv === undefined) out.uv = cube.uv ?? [0, 0];
  else {
    out.faces = {};
    for (const [face, f] of Object.entries(cube.uv)) {
      if (!f?.uv || !FACE[face]) continue;
      const [u, v] = f.uv;
      const [su, sv] = f.uv_size ?? [0, 0];
      out.faces[FACE[face]] = [u, v, u + su, v + sv, f.uv_rotation ?? 0];
    }
  }
  return out;
}

// Bakes one animation into linear tracks sampled at 20 fps, as absolute Java-space poses.
export function readAnimation(json, name, model) {
  const anim = json.animations?.[name];
  if (!anim) return null;
  const tracks = [];
  let length = Number(anim.animation_length) || 0;
  const channels = [];
  for (const [boneName, bone] of Object.entries(anim.bones ?? {})) {
    const part = model.byName.get(boneName);
    if (!part) continue;
    for (const path of ['rotation', 'position', 'scale']) {
      if (bone[path] === undefined) continue;
      const frames = keyframes(bone[path]);
      length = Math.max(length, frames.at(-1).time);
      channels.push({ part, path, frames });
    }
  }
  if (!channels.length) return null;
  if (!length) length = 1;
  const steps = Math.max(1, Math.round(length * FPS));
  const times = Array.from({ length: steps + 1 }, (_, i) => (i / steps) * length);
  for (const { part, path, frames } of channels) {
    const values = [];
    for (const t of times) {
      const [x, y, z] = sample(frames, t);
      if (path === 'rotation') {
        const r = part.rest.rot;
        values.push((r[0] + x) * RAD, (r[1] + y) * RAD, (r[2] + z) * RAD);
      } else if (path === 'position') {
        const p = part.rest.pos;
        values.push(p[0] + x, p[1] - y, p[2] + z);
      } else values.push(x, y, z);
    }
    tracks.push({ part: part.name, path, times, values });
  }
  return { name, length, loop: anim.loop === true || anim.loop === 'loop', tracks };
}

// Channel → sorted keyframes of { time, pre, post, smooth } with compiled Molang triples.
function keyframes(channel) {
  const triple = v => {
    if (v && typeof v === 'object' && !Array.isArray(v)) v = v.vector ?? v.post ?? v.pre ?? [0, 0, 0];
    if (!Array.isArray(v)) v = [v, v, v];
    return v.map(compileMolang);
  };
  const isFrames = channel && typeof channel === 'object' && !Array.isArray(channel) && !('vector' in channel)
    && Object.keys(channel).every(k => !Number.isNaN(Number(k)));
  if (!isFrames) {
    const v = triple(channel);
    return [{ time: 0, pre: v, post: v }];
  }
  return Object.entries(channel).map(([time, v]) => {
    const pre = triple(v && typeof v === 'object' && !Array.isArray(v) && v.pre !== undefined ? v.pre : v);
    const post = triple(v && typeof v === 'object' && !Array.isArray(v) && v.post !== undefined ? v.post : v);
    return { time: Number(time), pre, post, smooth: v?.lerp_mode === 'catmullrom' };
  }).sort((a, b) => a.time - b.time);
}

function sample(frames, t) {
  const at = (frame, which) => frame[which].map(f => f(t));
  if (t <= frames[0].time) return at(frames[0], frames.length === 1 ? 'post' : 'pre');
  const last = frames.at(-1);
  if (t >= last.time) return at(last, 'post');
  const i = frames.findIndex(f => f.time > t) - 1;
  const a = frames[i], b = frames[i + 1];
  const k = (t - a.time) / (b.time - a.time || 1);
  const va = at(a, 'post'), vb = at(b, 'pre');
  if (a.smooth || b.smooth) {
    const before = frames[i - 1] ? at(frames[i - 1], 'post') : va;
    const after = frames[i + 2] ? at(frames[i + 2], 'pre') : vb;
    return va.map((_, n) => catmullRom(before[n], va[n], vb[n], after[n], k));
  }
  return va.map((v, n) => v + (vb[n] - v) * k);
}

function catmullRom(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
