// Where the target dummies stand and when each one is hit, by sweeping an attack's colliders over its
// hit windows the way AttackAnimation does: each phase hurts entities whose box its collider touches
// between preDelay and contact, at most "max strikes" of them, each once.
// Colliders are OBBs ({ size: half extents, center } in the joint's space, blocks); a MultiOBBCollider
// (count > 1) also tests poses in between ticks. Everything is in Epic Fight's model space (front -Z).
import { sample, worldMatrices, coordAt } from './clip.mjs';
import { mul, translation, transformPoint, transformDir } from './mat4.mjs';

const STEP = 1 / 60;

// anim: { phases } from the registry; weapon: { collider, strikes }; dummy: { width, height };
// options: { maxDummies, spacing, lift (the rider's height on a horse), clear (keep-out radius) }.
export function layoutTargets(options) {
  // Dummies keep a gap from the player; attacks too short to reach past it get a closer one.
  const path = rootPath(options.armature, options.clip);
  let result = layoutAt(options, path);
  if (!result.hits.length && options.fallbackClear) result = layoutAt({ ...options, clear: options.fallbackClear }, path);
  // How far the player travels ([minX, minZ, maxX, maxZ]), so the viewer can keep the whole move in frame.
  const xs = path.map(p => p[0]), zs = path.map(p => p[1]);
  return { ...result, travel: [Math.min(...xs), Math.min(...zs), Math.max(...xs), Math.max(...zs)].map(round) };
}

// Where the player's body passes: Root over the whole clip, with the Coord track's movement.
function rootPath(armature, clip) {
  const path = [];
  const root = armature.index.get('Root');
  for (let t = 0; t <= clip.length + 1e-6; t += STEP * 3) {
    const world = worldMatrices(armature, sample(armature, clip, t));
    const p = transformPoint(mul(translation(coordAt(clip, t)), world[root]), [0, 0, 0]);
    path.push([p[0], p[2]]);
  }
  return path;
}

function layoutAt({ armature, clip, anim, weapon, dummy, maxDummies = 5, spacing = 1.1, lift = 0, clear = 1.2 }, path) {
  const phases = (anim?.phases ?? []).map(phase => ({
    ...phase,
    strikes: strikes(weapon.strikes, phase.props?.MAX_STRIKES_MODIFIER),
    pairs: phase.joints.map((joint, i) => ({ joint: armature.index.get(joint) ?? armature.index.get('Tool_R'), collider: usable(phase.colliders[i] ?? phase.colliders[0]) ?? usable(weapon.collider) })),
  })).filter(p => p.contact > p.preDelay && p.preDelay < clip.length && p.pairs.some(x => x.collider));
  if (!phases.length) return front(dummy);

  // Each phase's colliders over its hit window, as OBBs in model space.
  const lifted = translation([0, lift, 0]);
  const sweeps = phases.map(phase => {
    const boxes = [];
    // Open-ended phases (Float.MAX_VALUE) end with the clip.
    const end = Math.min(phase.contact, clip.length);
    for (let t = Math.min(phase.preDelay, end); t <= end + 1e-6; t += STEP) {
      const world = worldMatrices(armature, sample(armature, clip, t));
      const coord = translation(coordAt(clip, t));
      for (const { joint, collider } of phase.pairs) {
        if (!collider || joint === undefined) continue;
        boxes.push({ t, ...obb(mul(lifted, mul(coord, world[joint])), collider) });
      }
    }
    return boxes;
  });
  const all = sweeps.flat();
  if (!all.length) return front(dummy);
  const reach = Math.max(...all.map(b => Math.hypot(b.c[0], b.c[2]) + Math.hypot(...b.h))) + dummy.width;

  // Candidate spots on a grid, scored by how many phases reach them and how deep inside the sweep they are.
  const half = dummy.width / 2;
  const scored = [];
  for (let x = -reach; x <= reach; x += 0.25) for (let z = -reach; z <= reach; z += 0.25) {
    // No dummy stands in the way of the player's body, a lunge included.
    if (path.some(([px, pz]) => Math.hypot(x - px, z - pz) < clear)) continue;
    const box = { min: [x - half, 0, z - half], max: [x + half, dummy.height, z + half] };
    let depth = 0;
    const first = sweeps.map(boxes => {
      let t = null;
      for (const b of boxes) if (intersects(b, box)) { t ??= b.t; depth++; }
      return t;
    });
    const hit = first.filter(t => t !== null).length;
    if (hit) scored.push({ x, z, hit, depth, first });
  }
  if (!scored.length) return front(dummy);
  scored.sort((a, b) => b.hit - a.hit || b.depth - a.depth || Math.hypot(a.x, a.z) - Math.hypot(b.x, b.z));
  const want = Math.min(maxDummies, Math.max(...phases.map(p => p.strikes)));
  const chosen = [scored[0]];
  for (const s of scored) {
    if (chosen.length >= want) break;
    if (chosen.every(c => Math.hypot(c.x - s.x, c.z - s.z) >= spacing)) chosen.push(s);
  }

  // Hits: per phase, the dummies its sweep reaches in order, up to its max strikes.
  const hits = [];
  phases.forEach((phase, p) => {
    chosen.map((c, i) => ({ i, t: c.first[p] })).filter(h => h.t !== null).sort((a, b) => a.t - b.t)
      .slice(0, phase.strikes).forEach(h => hits.push([round(h.t), h.i]));
  });
  hits.sort((a, b) => a[0] - b[0]);
  // Dummies face the player's starting spot.
  return { targets: chosen.map(c => [round(c.x), round(c.z), round(Math.atan2(-c.x, -c.z))]), hits, multi: want > 1 };
}

const usable = c => (Array.isArray(c?.size) && Array.isArray(c?.center) ? c : null);

function front(dummy) {
  return { targets: [[0, -(1 + dummy.width), 0]], hits: [], multi: false };
}

// A weapon's max strikes, changed by the phase's MAX_STRIKES_MODIFIER ({ set | add | multiply }).
function strikes(base, modifier) {
  let n = base ?? 1;
  if (modifier?.set !== undefined) n = modifier.set;
  if (modifier?.add !== undefined) n += modifier.add;
  if (modifier?.multiply !== undefined) n *= modifier.multiply;
  return Math.max(1, Math.floor(n));
}

// A collider in model space: centre, half extents and axes.
function obb(m, collider) {
  const c = transformPoint(m, collider.center);
  const axes = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map(a => transformDir(m, a));
  const lens = axes.map(a => Math.hypot(...a));
  const u = axes.map((a, i) => a.map(v => v / (lens[i] || 1))), h = collider.size.map((s, i) => Math.abs(s) * lens[i]);
  // World-axis extents, for a quick reject before the full test.
  const ext = [0, 1, 2].map(k => u.reduce((n, a, i) => n + h[i] * Math.abs(a[k]), 0));
  return { c, u, h, ext };
}

// Separating-axis test between an OBB and an axis-aligned box.
function intersects(o, box) {
  const bc = box.min.map((v, i) => (v + box.max[i]) / 2);
  const bh = box.min.map((v, i) => (box.max[i] - v) / 2);
  const d = [o.c[0] - bc[0], o.c[1] - bc[1], o.c[2] - bc[2]];
  for (let k = 0; k < 3; k++) if (Math.abs(d[k]) > bh[k] + o.ext[k]) return false;
  const axes = [[1, 0, 0], [0, 1, 0], [0, 0, 1], ...o.u];
  for (const a of o.u) for (const e of [[1, 0, 0], [0, 1, 0], [0, 0, 1]]) {
    const x = [a[1] * e[2] - a[2] * e[1], a[2] * e[0] - a[0] * e[2], a[0] * e[1] - a[1] * e[0]];
    if (Math.hypot(...x) > 1e-6) axes.push(x);
  }
  for (const a of axes) {
    const dist = Math.abs(d[0] * a[0] + d[1] * a[1] + d[2] * a[2]);
    const rb = bh[0] * Math.abs(a[0]) + bh[1] * Math.abs(a[1]) + bh[2] * Math.abs(a[2]);
    const ro = o.u.reduce((n, u, i) => n + o.h[i] * Math.abs(u[0] * a[0] + u[1] * a[1] + u[2] * a[2]), 0);
    if (dist > rb + ro) return false;
  }
  return true;
}

const round = v => Math.round(v * 1000) / 1000;
