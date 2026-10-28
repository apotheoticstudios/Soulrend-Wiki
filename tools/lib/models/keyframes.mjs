// Vanilla keyframe animations (net.minecraft.client.animation.AnimationDefinition), which HierarchicalModel
// mobs keep in static fields (Cataclysm's Scylla_Normal_Animation.IDLE, …). The interpreter builds the
// definition by running the holder's static initializer; this replays it as KeyframeAnimations.animate
// does: each channel's value is added to the part's rest pose (rotations in radians, positions already
// Y-flipped by posVec, scales as offsets from 1), between keyframes linearly or by Catmull-Rom.
import { iterate } from './jvm.mjs';

const FPS = 20;
const ANIM = 'net/minecraft/client/animation/';

export function readKeyframes(jvm, field, parts) {
  const [owner, name] = field.split('.');
  const def = jvm.staticsOf(owner)[name];
  if (!def?.$f?.boneAnimations) throw new Error(`no AnimationDefinition at ${field}`);
  const targets = jvm.staticsOf(`${ANIM}AnimationChannel$Targets`);
  const smooth = jvm.staticsOf(`${ANIM}AnimationChannel$Interpolations`).CATMULLROM;
  const length = def.$f.lengthInSeconds || 1;
  const steps = Math.max(1, Math.round(length * FPS));
  const times = Array.from({ length: steps + 1 }, (_, i) => (i / steps) * length);
  const byName = new Map();
  const walk = list => list.forEach(p => { if (!byName.has(p.name)) byName.set(p.name, p); walk(p.children ?? []); });
  walk(parts);

  // Channels of one bone add up, so sum them per (bone, path) before turning them into poses.
  const sums = new Map();
  for (const [bone, channels] of def.$f.boneAnimations.$map) {
    const part = byName.get(bone);
    if (!part) continue;
    for (const channel of iterate(channels)) {
      const path = channel.$f.target === targets.ROTATION ? 'rotation' : channel.$f.target === targets.POSITION ? 'position' : 'scale';
      const frames = iterate(channel.$f.keyframes).map(k => ({ t: k.$f.timestamp, v: [k.$f.target.$f.x, k.$f.target.$f.y, k.$f.target.$f.z], smooth: k.$f.interpolation === smooth }));
      if (!frames.length) continue;
      const key = `${bone}\n${path}`;
      if (!sums.has(key)) sums.set(key, { part, path, values: times.map(() => [0, 0, 0]) });
      const acc = sums.get(key).values;
      times.forEach((t, i) => { const v = sample(frames, t); for (let k = 0; k < 3; k++) acc[i][k] += v[k]; });
    }
  }
  const tracks = [...sums.values()].map(({ part, path, values }) => ({
    part: part.name,
    path,
    times,
    values: values.flatMap(v => (path === 'rotation' ? v.map((a, k) => part.rot[k] + a) : path === 'position' ? v.map((a, k) => part.pos[k] + a) : v.map(a => 1 + a))),
  }));
  return { name: 'idle', length, loop: !!def.$f.looping, tracks };
}

// KeyframeAnimations.animate: find the keyframes around t, then interpolate with the later one's mode.
function sample(frames, t) {
  const next = Math.max(0, frames.findIndex(f => f.t > t));
  const after = next === 0 && t >= frames.at(-1).t ? frames.length - 1 : next;
  const before = Math.max(0, after - 1);
  const a = frames[before], b = frames[after];
  const span = b.t - a.t;
  const k = span > 0 ? Math.min(1, Math.max(0, (t - a.t) / span)) : 0;
  if (!b.smooth) return a.v.map((v, i) => v + (b.v[i] - v) * k);
  const p0 = frames[Math.max(0, before - 1)].v, p3 = frames[Math.min(frames.length - 1, after + 1)].v;
  return a.v.map((v, i) => catmullRom(k, p0[i], v, b.v[i], p3[i]));
}

// Mth.catmullrom
function catmullRom(t, p0, p1, p2, p3) {
  return 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (3 * p1 - p0 - 3 * p2 + p3) * t * t * t);
}
