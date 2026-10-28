// Tabula models (.tbl: a zip with model.json), used by Ice and Fire's dragons. Tabula cubes are already in
// Java space: `position` is the rotation point, `offset` the box corner, rotations in degrees.
import { unzipSync, strFromU8 } from 'fflate';

const RAD = Math.PI / 180;

export function readTabula(tbl) {
  const json = JSON.parse(strFromU8(unzipSync(tbl, { filter: e => e.name === 'model.json' })['model.json']));
  const part = cube => ({
    name: cube.name,
    pos: cube.position,
    rot: cube.rotation.map(a => a * RAD),
    scale: cube.scale,
    hidden: cube.hidden,
    cubes: [{ from: cube.offset, size: cube.dimensions, inflate: cube.mcScale ?? 0, mirror: !!cube.txMirror, uv: cube.txOffset }],
    children: (cube.children ?? []).map(part),
  });
  const parts = (json.cubes ?? []).map(part);
  for (const group of json.cubeGroups ?? []) parts.push(...(group.cubes ?? []).map(part));
  return { texWidth: json.textureWidth, texHeight: json.textureHeight, parts };
}

// Loops through whole-model poses (other .tbl files of the same model): each pose is held for `step`
// seconds, blended linearly, as Ice and Fire's pose animator does.
export function poseAnimation(name, model, poses, step = 0.25) {
  const flat = parts => { const out = new Map(); const walk = p => { out.set(p.name, p); p.children.forEach(walk); }; parts.forEach(walk); return out; };
  const frames = [...poses, poses[0]].map(p => flat(p.parts));
  const times = frames.map((_, i) => i * step);
  const tracks = [];
  for (const [partName] of flat(model.parts)) {
    const rot = [], pos = [];
    for (const f of frames) {
      const p = f.get(partName);
      if (!p) break;
      rot.push(...p.rot);
      pos.push(...p.pos);
    }
    if (rot.length !== times.length * 3) continue;
    tracks.push({ part: partName, path: 'rotation', times, values: rot }, { part: partName, path: 'position', times, values: pos });
  }
  return { name, length: times.at(-1), loop: true, tracks };
}
