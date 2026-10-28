// Builds 3D models of the wiki's mobs from the modpack's own model data into assets/models/<ns>/<id>.glb.
//   npm run models                         every entry in tools/models/mobs.json
//   npm run models -- --only ns:id,ns:id   just these
//   npm run models -- --instance <dir>
//
// Each entry in mobs.json names where the mob's model lives; nothing about the shape is hand-made:
//   "geo"     GeckoLib/AzureLib Bedrock geometry, with "animation" (+ "play") baked into a looping clip
//   "layer"   a Java method returning a LayerDefinition ("key" picks one from a map, as in vanilla's
//             LayerDefinitions.createRoots), replayed by the bytecode interpreter in tools/lib/models/
//   "boxes"   a Java model class built from ModelRenderer-style parts (Citadel, lionfishapi, llibrary)
//   "tabula"  a Tabula .tbl (Ice and Fire dragons), with "poses" looped as an animation
//   "mesh"    an Epic Fight mesh (Weapons of Miracles mobs)
// Java models can add "keyframes": a static AnimationDefinition field ("Class.FIELD") played as the idle.
// Other fields:
//   "texture"  a resource id, or a list whose later entries are drawn over the first; "emissive" likewise
//   "name"     replaces the entity's English name in game-data/mobs.json
//   "hide"     part names; "pose": part → [x, y, z] degrees replacing the rest rotation; "move": part → position
//   "repeat"   part → runs of { from, step, count }, for a part a renderer draws several times
//   "setup"    pose the model with its own setupAnim for an idle entity: for "layer" the model class to
//              build around the baked parts, for "boxes" true
//   "layers"   more entries drawn into the same model (an outer shell, armor), each with its own texture
//   "follow"   on a "layers" entry (armor): each top-level part takes the pose of the body part it covers
//   "mesh"     may also be a list: an Epic Fight body plus its armor or weapon meshes
//   "attach"   entries whose parts are copied onto the part "to" at each of "at": [{ pos, rot }], as a
//              render layer draws them; "translucent" blends instead of cutting out
// Resource ids are "ns:path" under assets/. "$resourcePacks" at the top lists resource packs whose files
// replace the jars' (Excalibur for vanilla textures). Other fields starting with "$" are notes. tools/models/discover.mjs
// drafts new entries. The output also goes into game-data/mobs.json (entity id → name and model path).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { strFromU8 } from 'fflate';
import { PNG } from 'pngjs';
import { openInstance } from './lib/models/instance.mjs';
import { javaModels } from './lib/models/java.mjs';
import { readGeo, readAnimation } from './lib/models/bedrock.mjs';
import { readTabula, poseAnimation } from './lib/models/tabula.mjs';
import { readEpicFightMesh } from './lib/models/epicfight.mjs';
import { readKeyframes } from './lib/models/keyframes.mjs';
import { writeGlb } from './lib/models/glb.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/models');
// Entity id → { name, model }, so pages can name a mob by id: {{model alexscaves:nucleeper}}.
const INDEX = path.join(ROOT, 'game-data/mobs.json');
const args = process.argv.slice(2);
const arg = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/models/mobs.json'), 'utf8'));
const only = arg('only')?.split(',');

// Textures come from the resource packs the modpack runs with, where the manifest says so.
const inst = openInstance(arg('instance'), { packs: manifest.$resourcePacks ?? [] });
let java;
const javaReplay = () => (java ??= javaModels({ classPath: inst.classPath, rename: n => inst.rename(n) }));

const RAD = Math.PI / 180;
let built = 0;
const failed = [];
const index = fs.existsSync(INDEX) ? JSON.parse(fs.readFileSync(INDEX, 'utf8')) : {};
for (const id of Object.keys(index)) if (!manifest[id]) delete index[id];
for (const [id, entry] of Object.entries(manifest)) {
  if (id.startsWith('$') || (only && !only.includes(id))) continue;
  try {
    const layers = [entry, ...(entry.layers ?? [])].map(e => buildLayer(e, id));
    // Armor follows the body: like vanilla's copyPropertiesTo, each armor part takes the pose of the
    // body part it covers (bipedRightArm, armorRightArm and right_arm all cover right_arm; boots and
    // shoes cover the legs).
    for (const [i, layer] of layers.entries()) {
      if (!i || !(entry.layers[i - 1].follow)) continue;
      const body = new Map(layers[0].parts.map(p => [limb(p.name), p]));
      for (const part of layer.parts) {
        const target = body.get(limb(part.name));
        if (target) { part.pos = target.pos; part.rot = target.rot; }
      }
    }
    // Attached models (heads a render layer draws onto a body part) join the first layer's tree, each
    // placement wrapped in a part at its offset; their own texture becomes another layer.
    for (const attach of entry.attach ?? []) {
      const layer = buildLayer(attach, id);
      const target = findPart(layers[0].parts, attach.to);
      if (!target) throw new Error(`attach: no part named ${attach.to}`);
      const index = layers.push({ ...layer, parts: [] }) - 1;
      for (const [i, at] of attach.at.entries()) {
        target.children.push({ name: `${attach.to}_${i}`, pos: at.pos ?? [0, 0, 0], rot: (at.rot ?? [0, 0, 0]).map(a => a * RAD), cubes: [], layer: index, children: structuredClone(layer.parts) });
      }
    }
    const animations = layers[0].animations ?? [];
    const glb = writeGlb({ layers, animations });
    const [ns, name] = id.split(':');
    const file = path.join(OUT, ns, `${name}.glb`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    if (!fs.existsSync(file) || !fs.readFileSync(file).equals(Buffer.from(glb))) fs.writeFileSync(file, glb);
    index[id] = { name: entry.name ?? entityName(id), model: `models/${ns}/${name}.glb`, ...(animations.length ? { animated: true } : {}) };
    built++;
    const cubes = layers.reduce((n, l) => n + countCubes(l.parts), 0);
    if (args.includes('--verbose')) console.log(`${id}: ${cubes} cubes${animations.length ? `, animation ${animations[0].name}` : ''}, ${(glb.length / 1024).toFixed(0)} KB`);
  } catch (error) {
    failed.push(`${id}: ${error.message}`);
  }
}
fs.writeFileSync(INDEX, JSON.stringify(Object.fromEntries(Object.entries(index).sort()), null, 2) + '\n');
if (java?.jvm.failures.length && args.includes('--verbose')) console.log(`Calls that threw and were skipped:\n  ${[...new Set(java.jvm.failures)].slice(0, 20).join('\n  ')}`);
console.log(`Built ${built} models into assets/models/.`);
if (failed.length) {
  console.error(`${failed.length} failed:\n  ${failed.join('\n  ')}`);
  process.exitCode = 1;
}

function buildLayer(entry, id) {
  let model, animations = [];
  if (entry.geo) {
    const geo = readJson(entry.geo);
    model = readGeo(geo, entry.geoId);
    if (entry.animation) {
      const anims = readJson(entry.animation);
      const names = Object.keys(anims.animations ?? {});
      const wanted = entry.play === false ? null : entry.play ?? names.find(n => /(^|\.)idle$/.test(n)) ?? names.find(n => /idle/.test(n));
      const clip = wanted && readAnimation(anims, wanted, model);
      if (entry.play && !clip) throw new Error(`animation ${entry.play} not found or empty`);
      if (clip) animations.push({ ...clip, name: 'idle' });
    }
  } else if (entry.layer) {
    model = javaReplay().layer({ method: entry.layer, layer: entry.key, args: entry.args, texSize: entry.texSize, setup: entry.setup });
  } else if (entry.boxes) {
    model = javaReplay().boxes({ class: entry.boxes, ctor: entry.ctor, args: entry.args, roots: entry.roots, texSize: entry.texSize, setup: entry.setup });
  } else if (entry.tabula) {
    model = readTabula(need(entry.tabula));
    if (entry.poses?.length) animations.push(poseAnimation('idle', model, entry.poses.map(p => readTabula(need(p))), entry.poseStep));
  } else if (entry.mesh) {
    // Armor and weapon meshes are skinned to the wearer's armature, so in the bind pose they already
    // sit where they are worn or held.
    model = { meshes: [entry.mesh].flat().map(res => readEpicFightMesh(readJson(res))), parts: [] };
  } else {
    throw new Error('entry names no model source');
  }
  if (!countCubes(model.parts) && !model.meshes) throw new Error('model has no cubes');
  if (entry.keyframes) animations.push(readKeyframes(javaReplay().jvm, entry.keyframes, model.parts));

  const hide = new Set(entry.hide ?? []);
  const visit = parts => {
    for (const p of [...parts]) {
      if (hide.has(p.name)) p.hidden = true;
      if (entry.pose?.[p.name]) p.rot = entry.pose[p.name].map(a => a * RAD);
      if (entry.move?.[p.name]) p.pos = entry.move[p.name];
      // A part a renderer draws several times (the ender dragon's neck, which is also its tail) becomes
      // runs of copies: { from, step, count } each.
      const runs = entry.repeat?.[p.name];
      if (runs) {
        parts.splice(parts.indexOf(p), 1);
        let n = 0;
        for (const run of [runs].flat()) for (let i = 0; i < run.count; i++) {
          parts.push({ ...p, name: n++ ? `${p.name}_${n - 1}` : p.name, pos: (run.from ?? p.pos).map((v, k) => v + run.step[k] * i) });
        }
      }
      visit(p.children ?? []);
    }
  };
  visit(model.parts);
  const missing = [...hide, ...Object.keys(entry.pose ?? {}), ...Object.keys(entry.move ?? {}), ...Object.keys(entry.repeat ?? {})].filter(n => !hasPart(model.parts, n));
  if (missing.length) throw new Error(`no part named ${missing.join(', ')} (parts: ${partNames(model.parts).slice(0, 30).join(', ')})`);

  const png = texture(entry.texture, id);
  return {
    texture: { png, width: model.texWidth ?? 64, height: model.texHeight ?? 64 },
    emissive: entry.emissive ? { png: premultiply(texture(entry.emissive, id)) } : undefined,
    translucent: entry.translucent,
    parts: model.parts,
    meshes: model.meshes,
    animations,
  };
}

// The English name from the namespace's lang file (Ice and Fire's unused bosses included).
function entityName(id) {
  const [ns, name] = id.split(':');
  const lang = inst.resource(`${ns}:lang/en_us.json`);
  const key = `entity.${ns}.${name}`;
  try {
    const value = lang && JSON.parse(strFromU8(lang).replace(/^\uFEFF/, ''))[key];
    if (value) return value.replace(/§./g, '');
  } catch { /* fall through to the id */ }
  return name.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

function need(res) {
  const bytes = inst.resource(res);
  if (!bytes) throw new Error(`resource not found: ${res}`);
  return bytes;
}
function readJson(res) { return JSON.parse(strFromU8(need(res)).replace(/^﻿/, '')); }

// A texture, or a base with overlays drawn over it (scaled to the base's size, nearest neighbour).
function texture(spec, id) {
  if (!spec) throw new Error(`${id} has no texture`);
  const [base, ...overlays] = [spec].flat();
  if (!overlays.length) return need(base);
  const out = PNG.sync.read(Buffer.from(need(base)));
  for (const res of overlays) {
    const over = PNG.sync.read(Buffer.from(need(res)));
    for (let y = 0; y < out.height; y++) for (let x = 0; x < out.width; x++) {
      const sx = Math.floor(x * over.width / out.width), sy = Math.floor(y * over.height / out.height);
      const s = (sy * over.width + sx) * 4, d = (y * out.width + x) * 4;
      const a = over.data[s + 3] / 255;
      if (!a) continue;
      for (let c = 0; c < 3; c++) out.data[d + c] = Math.round(over.data[s + c] * a + out.data[d + c] * (1 - a));
      out.data[d + 3] = Math.max(out.data[d + 3], over.data[s + 3]);
    }
  }
  return new Uint8Array(PNG.sync.write(out));
}

// Emissive maps only use RGB, so transparent pixels must be black or they glow.
function premultiply(png) {
  const img = PNG.sync.read(Buffer.from(png));
  for (let i = 0; i < img.data.length; i += 4) {
    const a = img.data[i + 3] / 255;
    for (let c = 0; c < 3; c++) img.data[i + c] = Math.round(img.data[i + c] * a);
    img.data[i + 3] = 255;
  }
  return new Uint8Array(PNG.sync.write(img));
}

function countCubes(parts = []) { return parts.reduce((n, p) => n + (p.hidden ? 0 : (p.cubes?.length ?? 0) + countCubes(p.children)), 0); }
function limb(name) {
  return name.toLowerCase().replace(/biped|armor|[^a-z]/g, '').replace(/(shoe|boot|foot)$/, 'leg');
}

function findPart(parts, name) {
  for (const p of parts) { if (p.name === name) return p; const found = findPart(p.children ?? [], name); if (found) return found; }
  return null;
}
function hasPart(parts, name) { return parts.some(p => p.name === name || hasPart(p.children ?? [], name)); }
function partNames(parts) { return parts.flatMap(p => [p.name, ...partNames(p.children ?? [])]); }
