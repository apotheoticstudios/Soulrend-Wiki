// Custom entity models (OptiFine CEM / EMF .jem files) in a resource pack. Entity Model Features replaces
// the vanilla (or mod) model with them in game. They become the same part trees the other converters
// produce (see glb.mjs); only the rest pose is built, the expression-driven animations aren't evaluated.
//
// Conventions, worked out from the wither, spider, warden and shulker models (hand-built, so their static
// pose is the real one) and Entity Model Features' EMFPartData/EMFBoxData: pixels in vanilla Java model space
// (Y down, ground at y = 24). Blockbench exports a part's translate as the negated pivot, relative to its
// parent's pivot (the model origin, (0, 24, 0), for top-level parts), and its boxes as Blockbench
// coordinates relative to that same parent pivot. "invertAxis" names the axes Blockbench and vanilla space
// disagree on ("xy"): flipped boxes (x -> -x - w) and a translate that is already vanilla's on those axes,
// while z (not flagged) is negated. Rotations are negated per flagged axis. A model without invertAxis is
// plain vanilla space: translate is the pivot, boxes are relative to it.
//
// Models by Fresh Animations and EFA put their parts in place with expression animations (body.ty = …), so
// their static pose isn't a rest pose; the wiki doesn't build them.

const RAD = Math.PI / 180;

// .jem/.jpm files are JSON written by hand and tools: comments and trailing commas occur.
export function parseLoose(text) {
  const src = text.replace(/^﻿/, '');
  let out = '', i = 0, str = false;
  while (i < src.length) {
    const c = src[i];
    if (str) {
      out += c;
      if (c === '\\') out += src[++i] ?? '';
      else if (c === '"') str = false;
    } else if (c === '"') { str = true; out += c; }
    else if (c === '/' && src[i + 1] === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    else if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i + 2); i = i < 0 ? src.length : i + 2; continue; }
    else out += c;
    i++;
  }
  return JSON.parse(out.replace(/,(\s*[}\]])/g, '$1'));
}

const FACE_KEYS = { uvDown: 'down', uvUp: 'up', uvNorth: 'north', uvSouth: 'south', uvWest: 'west', uvEast: 'east' };

// jem: the parsed .jem; loadJpm(name) → parsed .jpm (a part file a model entry names) or null.
// Returns { texWidth, texHeight, parts, notes } where notes counts what couldn't be honoured.
export function readJem(jem, loadJpm) {
  const [texWidth, texHeight] = jem.textureSize ?? [16, 16];
  const notes = { attach: 0, perPartTexture: 0, missingJpm: [], animationOnly: 0 };

  // parentPivot: the parent's pivot in model space; roots hang off the model origin.
  const build = (raw, parentTexSize, parentPivot) => {
    let def = { ...raw };
    if (def.model) {
      const jpm = loadJpm(def.model);
      if (!jpm) notes.missingJpm.push(def.model);
      else def = { ...jpm, ...Object.fromEntries(Object.entries(def).filter(([k]) => k !== 'model')) };
    }
    const invert = def.invertAxis ?? '';
    const flags = ['x', 'y', 'z'].map(ch => invert.includes(ch));
    const T = def.translate ?? [0, 0, 0];
    const blockbench = invert !== '';
    const root = parentPivot === undefined;
    parentPivot ??= blockbench ? [0, 24, 0] : [0, 0, 0];
    // Offset of this part's pivot from its parent's pivot (vanilla space).
    const delta = T.map((v, i) => (!blockbench ? v : flags[i] ? v : -v));
    const pivot = parentPivot.map((v, i) => v + delta[i]);
    const r = (def.rotate ?? [0, 0, 0]).map(a => a * RAD);
    const rot = r.map((v, i) => (flags[i] ? -v : v));
    const texSize = def.textureSize ?? parentTexSize;
    if (def.texture) notes.perPartTexture++;
    const cubes = (def.boxes ?? []).map(box => {
      let [x, y, z, w, h, d] = box.coordinates;
      if (flags[0]) x = -x - w;
      if (flags[1]) y = -y - h;
      if (flags[2]) z = -z - d;
      // Blockbench boxes are relative to the parent's pivot; this part's pivot is `delta` further on.
      const at = blockbench ? [x - delta[0], y - delta[1], z - delta[2]] : [x, y, z];
      const cube = { from: at, size: [w, h, d], inflate: box.sizeAdd ?? 0, mirror: /u/.test(def.mirrorTexture ?? '') };
      if (texSize[0] !== texWidth || texSize[1] !== texHeight) cube.texSize = texSize;
      const faces = {};
      for (const [key, face] of Object.entries(FACE_KEYS)) if (box[key]) faces[face] = box[key];
      if (Object.keys(faces).length) cube.faces = faces;
      else cube.uv = box.textureOffset ?? [0, 0];
      return cube;
    });
    const subs = [...(def.submodel ? [def.submodel] : []), ...(def.submodels ?? [])];
    const children = subs.map(s => build(s, texSize, pivot)).filter(Boolean);
    if (def.attach && def.attach !== 'false') notes.attach++;
    if (!cubes.length && !children.length) { notes.animationOnly++; return null; }
    const part = { name: def.id ?? def.part ?? 'part', pos: root ? pivot : delta, rot, cubes, children };
    if (def.scale && def.scale !== 1) part.scale = Array.isArray(def.scale) ? def.scale : [def.scale, def.scale, def.scale];
    if (def.part && def.part !== part.name) part.vanillaPart = def.part;
    return part;
  };

  const parts = (jem.models ?? []).map(m => build(m, [texWidth, texHeight])).filter(Boolean);
  return { texWidth, texHeight, parts, notes };
}
