// Builds the Epic Fight attack viewer that {{moveset}} embeds show: the player, target dummies, a horse
// for mounted attacks, the held weapons and every attack and innate-skill animation, from the modpack.
//   npm run attacks                     everything
//   npm run attacks -- --only player    just the player model (what `npm run skin` runs)
//   npm run attacks -- --instance <dir>
//   npm run skin -- <skin.png>          copy a Minecraft skin over the manifest's and rebuild the player
//
// Settings live in tools/models/mobs.json under "$attacks". Everything else comes from the game:
//   game-data/movesets.json (npm run sync-game)  each weapon type's combos, styles, innate skills
//   the mod jars, read by tools/lib/attacks/*    animation clips, attack phases and colliders (registry.mjs
//                                                replays each mod's registration code), skills' animations,
//                                                item models, the dummy's and horse's models
// Output: assets/models/attacks/ (player.glb, dummy.glb, horse.glb, items/, clips/) and
// game-data/attacks.json, which the moveset embed reads.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { strFromU8 } from 'fflate';
import { openInstance } from './lib/models/instance.mjs';
import { javaModels } from './lib/models/java.mjs';
import { writeGlb } from './lib/models/glb.mjs';
import { readRegistries, scanMods, readDataDriven, constructorPhases } from './lib/attacks/registry.mjs';
import { readArmature, readClip } from './lib/attacks/clip.mjs';
import { playerGlb, clipGlb, isSlimSkin } from './lib/attacks/player.mjs';
import { itemGlb } from './lib/attacks/item.mjs';
import { codeModels } from './lib/attacks/code-models.mjs';
import { layoutTargets } from './lib/attacks/simulate.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/models/attacks');
const INDEX = path.join(ROOT, 'game-data/attacks.json');
const args = process.argv.slice(2);
const arg = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/models/mobs.json'), 'utf8'));
const cfg = manifest.$attacks;
const only = arg('only');
const t0 = Date.now();
const log = msg => console.log(`${msg} (${((Date.now() - t0) / 1000).toFixed(1)} s)`);

const inst = openInstance(arg('instance'), { packs: manifest.$resourcePacks ?? [] });
const readJson = res => {
  const bytes = inst.resource(res);
  return bytes ? JSON.parse(strFromU8(bytes).replace(/^﻿/, '')) : null;
};
const written = new Set();
const write = (rel, bytes) => {
  const file = path.join(OUT, rel);
  written.add(rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file) || !fs.readFileSync(file).equals(Buffer.from(bytes))) fs.writeFileSync(file, bytes);
  return `models/attacks/${rel}`;
};
const index = fs.existsSync(INDEX) ? JSON.parse(fs.readFileSync(INDEX, 'utf8')) : {};

// The player, from the skin in the manifest.
const skin = fs.readFileSync(path.join(ROOT, cfg.skin));
const slim = cfg.slim ?? isSlimSkin(skin);
const meshJson = readJson(slim ? cfg.mesh.slim : cfg.mesh.wide);
if (!meshJson) throw new Error(`player mesh not found: ${slim ? cfg.mesh.slim : cfg.mesh.wide}`);
const armature = readArmature(meshJson);
index.player = { model: write('player.glb', playerGlb(meshJson, skin)), slim };
log(`Player model built from ${cfg.skin} (${slim ? 'slim' : 'wide'} arms)`);
if (only === 'player') {
  fs.writeFileSync(INDEX, JSON.stringify(index) + '\n');
  process.exit(0);
}

const movesets = JSON.parse(fs.readFileSync(path.join(ROOT, 'game-data/movesets.json'), 'utf8'));
const { mods, loadedMods } = scanMods(inst.instance);
const warnings = [];
const registry = readRegistries({ classPath: inst.classPath, mods, loadedMods, warn: w => warnings.push(w.trim()) });
const aliases = readDataDriven(mods, registry);
log(`Replayed ${registry.animations.size} animation and ${registry.skills.size} skill registrations`);

// Moveset references are datapack ids ("wom:biped/combat/x") or Java fields named by the owning mod
// ("epicfightx:LONGSWORD_AUTO1", see movesets.mjs).
const modOfClass = new Map();
for (const mod of mods) for (const cls of mod.classes) if (!modOfClass.has(cls)) modOfClass.set(cls, mod.ids[0]);
const byField = new Map();
for (const [key, id] of registry.fields) {
  const cut = key.lastIndexOf('.');
  const mod = modOfClass.get(key.slice(0, cut));
  if (mod && !byField.has(`${mod}:${key.slice(cut + 1)}`)) byField.set(`${mod}:${key.slice(cut + 1)}`, id);
}
// A field whose class movesets.mjs couldn't place ("?:KUSABIMARU_AUTO1") is found by name, Epic Fight's
// add-ons in registration order.
const byName = new Map();
for (const [key, id] of byField) { const name = key.split(':')[1]; if (!byName.has(name)) byName.set(name, id); }
const resolveAnim = ref => (ref.includes('/') ? ref : byField.get(ref) ?? (ref.startsWith('?:') ? byName.get(ref.slice(2)) : null) ?? null);

// Held items: a type's own mod first, then vanilla, then the rest; items drawn by code are skipped.
const bind = Object.fromEntries(armature.joints.map((j, i) => [j.name, armature.bind[i]]));
const itemModels = new Map();
const itemKinds = {};               // item → what its held model was built from, or why there's none
const java = javaModels({ classPath: inst.classPath, rename: n => inst.rename(n) });
const code = codeModels(inst, java);
function itemModel(id) {
  if (!itemModels.has(id)) {
    try {
      const { glb, kind } = itemGlb(inst, id, bind, code);
      itemModels.set(id, write(`items/${id.replace(':', '/')}.glb`, glb));
      itemKinds[id] = kind;
    } catch (e) {
      itemModels.set(id, null);
      itemKinds[id] = `none: ${e.message}`;
    }
  }
  return itemModels.get(id);
}
const itemsOfType = new Map();
for (const [id, item] of Object.entries(movesets.items)) {
  if (!itemsOfType.has(item.type)) itemsOfType.set(item.type, []);
  itemsOfType.get(item.type).push(id);
}
function heldItem(typeId) {
  const override = cfg.items?.[typeId];
  if (override) return itemModel(override) ? override : null;
  const ns = typeId.split(':')[0];
  const rank = id => (id.startsWith(`${ns}:`) ? 0 : id.startsWith('minecraft:') ? 1 : 2);
  const candidates = [...(itemsOfType.get(typeId) ?? [])].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  return candidates.find(id => itemModel(id)) ?? null;
}

// The weapon a style swings: its collider (the item's, else the type's, else Epic Fight's fist) and
// max strikes (the item's for the style, else its common ones, else 1).
const presetCollider = ref => (typeof ref === 'string' && ref.startsWith('preset:') ? registry.colliders[ref.slice(7)] : ref) ?? null;
function weaponOf(type, itemId, style) {
  const item = itemId ? movesets.items[itemId] : null;
  return {
    collider: presetCollider(item?.collider) ?? presetCollider(type.collider) ?? registry.colliders.FIST ?? null,
    strikes: item?.maxStrikes?.[style] ?? item?.maxStrikes?.common ?? 1,
  };
}

const humanize = id => {
  const name = id.slice(id.indexOf(':') + 1).split('/').pop().replace(/_+/g, ' ').replace(/([a-z])(\d+)$/, '$1 $2').trim().toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const animations = {};
// Moves are planned first and filled in per clip afterwards, so each clip is read once and dropped.
const requests = new Map();        // animation id → moves that play it
const unresolved = new Set();
// One button of the viewer: a label and the animation it plays, with its dummies and hits.
function move(label, ref, weapon, { mount = false, guard = false } = {}) {
  const id = resolveAnim(ref);
  if (!id) { unresolved.add(ref); return null; }
  const out = { label, anim: id };
  if (guard) out.loop = true;
  if (mount) out.mount = true;
  if (!requests.has(id)) requests.set(id, []);
  requests.get(id).push({ move: out, weapon, mount, guard });
  return out;
}
const skillMoves = (skillId, weapon) => (registry.skills.get(skillId)?.animations ?? []).map(id => move(humanize(id), id, weapon)).filter(Boolean);

const types = {};
const innateTypes = new Map();     // skill id → the first type that uses it, for skill pages
let typeCount = 0;
for (const [typeId, type] of Object.entries(movesets.types)) {
  if (type.ranged || !Object.keys(type.styles).length) continue;
  const item = heldItem(typeId);
  const styles = {};
  for (const [style, s] of Object.entries(type.styles)) {
    const weapon = weaponOf(type, item, style);
    const mount = style === 'mount';
    const moves = [];
    (s.combo ?? []).forEach((ref, i) => moves.push(move(mount ? `Mounted ${i + 1}` : `Auto ${i + 1}`, ref, weapon, { mount })));
    if (s.dash) moves.push(move('Dash', s.dash, weapon));
    if (s.air) moves.push(move('Jump', s.air, weapon));
    if (s.guard) moves.push(move('Guard', s.guard, weapon, { guard: true }));
    if (s.innate) {
      for (const m of skillMoves(s.innate, weapon)) moves.push(Object.assign(m, { skill: s.innate }));
      // A skill's page shows the first type that uses it, preferring one with a weapon to hold.
      const prev = innateTypes.get(s.innate);
      if (!prev || (!prev.item && item)) innateTypes.set(s.innate, { typeId, style, item });
    }
    // Dual-wield styles (an off-hand weapon of the type's own category) hold the item in both hands.
    const dual = type.rules?.some(r => r.style === style && r.when.some(c => c.offhand && c.offhand === type.category));
    const list = moves.filter(Boolean);
    if (list.length) styles[style] = { moves: list, ...(dual ? { dual: true } : {}) };
  }
  if (!Object.keys(styles).length) continue;
  types[typeId] = { ...(item ? { item, model: itemModels.get(item) } : {}), styles };
  typeCount++;
}
// Items whose own innate skill differs from their type's (the game's answer, see movesets.mjs).
for (const item of Object.values(movesets.items)) if (item.innate && !innateTypes.has(item.innate)) innateTypes.set(item.innate, { typeId: item.type, style: item.style });

const skills = {};
for (const [skillId, { typeId, style }] of innateTypes) {
  const type = movesets.types[typeId];
  if (!type) continue;
  const item = types[typeId]?.item ?? heldItem(typeId);
  const moves = skillMoves(skillId, weaponOf(type, item, style));
  if (moves.length) skills[skillId] = { type: typeId, ...(item ? { item, model: itemModels.get(item) } : {}), moves };
}
// Clips, a jar's worth at a time: the clip glTF, then the dummies and hits of every move that plays it.
const dummySize = { width: cfg.dummy.size[0], height: cfg.dummy.size[1] };
const failed = new Set();
let ridingPose;
// Some animations play another file's clip: setResourceLocation in code, SEpicfied's virtual animations.
const clipRes = id => { const [ns, p] = (registry.animations.get(id)?.clip ?? aliases.get(id) ?? id).split(':'); return `${ns}:animmodels/animations/${p}.json`; };
const ids = [...requests.keys()];
for (let i = 0; i < ids.length; i += 200) {
  const batch = ids.slice(i, i + 200);
  inst.prefetch(batch.map(clipRes));
  for (const id of batch) {
    const clip = readClipOf(id);
    if (!clip) { failed.add(id); unresolved.add(id); continue; }
    entityMovement(clip, registry.animations.get(id));
    const [ns, p] = id.split(':');
    const list = requests.get(id);
    if (list.some(r => !r.mount)) animations[id] = { clip: write(`clips/${ns}/${p}.glb`, clipGlb(clip, armature, id)), length: round(clip.length) };
    if (list.some(r => r.mount)) animations[`${id}@mount`] = { clip: write(`clips/${ns}/${p}@mount.glb`, clipGlb(riding(clip), armature, id)), length: round(clip.length) };
    const done = new Map();
    for (const { move: m, weapon, mount, guard } of list) {
      if (mount) m.anim = `${id}@mount`;
      if (guard) continue;
      const key = `${JSON.stringify(weapon)}|${mount}`;
      if (!done.has(key)) {
        done.set(key, layoutTargets({
          armature, clip, anim: registry.animations.get(id), weapon, dummy: dummySize,
          maxDummies: cfg.maxDummies ?? 5, lift: mount ? cfg.horse.rider : 0,
          clear: mount ? cfg.horse.width / 2 + dummySize.width : cfg.clearance ?? 1.2, fallbackClear: mount ? null : dummySize.width,
        }));
      }
      Object.assign(m, done.get(key));
    }
  }
  inst.evict(batch.map(clipRes));
}
const keep = list => list.filter(m => m && !failed.has(m.anim));
for (const [typeId, type] of Object.entries(types)) {
  for (const [style, s] of Object.entries(type.styles)) if (!(s.moves = keep(s.moves)).length) delete type.styles[style];
  if (!Object.keys(type.styles).length) { delete types[typeId]; typeCount--; }
}
for (const [skillId, skill] of Object.entries(skills)) if (!(skill.moves = keep(skill.moves)).length) delete skills[skillId];
log(`Laid out ${typeCount} weapon types and ${Object.keys(skills).length} innate skills (${Object.keys(animations).length} animations)`);

// A mounted attack: the attack's own tracks for the joints in the horse's mask, the riding pose for the rest.
function riding(clip) {
  ridingPose ??= (() => {
    const mask = new Set(readJson(cfg.horse.mask)?.joints ?? []);
    inst.prefetch([clipRes(cfg.horse.pose)]);
    const pose = readClipOf(cfg.horse.pose);
    if (!pose) throw new Error(`riding pose not found: ${cfg.horse.pose}`);
    return { mask, pose };
  })();
  const { mask, pose } = ridingPose;
  const name = j => armature.joints[j].name;
  return { ...clip, tracks: [...clip.tracks.filter(t => mask.has(name(t.joint))), ...pose.tracks.filter(t => !mask.has(name(t.joint)))], coord: null };
}

// ActionAnimation moves the entity by how far the Coord track has come since the start, and only
// horizontally unless the animation sets MOVE_VERTICAL. Without a Coord track it moves it by Root's
// travel and keeps Root over the entity (correctRootJoint), so on screen Root moves by its travel since
// the first key.
function entityMovement(clip, anim) {
  if (!clip.coord) {
    const root = clip.tracks.find(t => armature.joints[t.joint].name === 'Root');
    if (!anim?.action || !root) return;
    const [x0, z0] = [root.locals[0][12], root.locals[0][14]];
    root.locals = root.locals.map(m => { const out = new Float64Array(m); out[12] -= x0; out[14] -= z0; return out; });
    return;
  }
  const [x0, y0, z0] = [12, 13, 14].map(i => clip.coord.locals[0][i]);
  const vertical = !!anim?.props?.MOVE_VERTICAL;
  clip.coord.locals = clip.coord.locals.map(m => {
    const out = new Float64Array(m);
    out[12] -= x0; out[13] = vertical ? out[13] - y0 : 0; out[14] -= z0;
    return out;
  });
}

function readClipOf(id) {
  const [ns, p] = id.split(':');
  const bytes = inst.resource(clipRes(id));
  if (!bytes) return null;
  try {
    const json = JSON.parse(strFromU8(bytes).replace(/^\uFEFF/, ''));
    // Animations declared by their clip file carry their phases in it.
    if (!registry.animations.has(id) && Object.hasOwn(json, 'constructor')) {
      const cls = /\)#([\w.$]+)"?\s*$/.exec(json.constructor?.invocation_command ?? '')?.[1] ?? null;
      registry.animations.set(id, { id, class: cls, action: /Attack|Action|Dodge/.test(cls ?? ''), props: {}, phases: constructorPhases(json.constructor) });
    }
    const clip = json.animation ? readClip(json, armature) : null;
    return clip?.tracks.length ? clip : null;
  } catch (e) {
    warnings.push(`${ns}:${p}: ${e.message}`);
    return null;
  }
}

// The dummy, with its own hit wobble baked into a "hit" clip.
index.dummy = { model: write('dummy.glb', dummyGlb()), size: cfg.dummy.size };
index.horse = { model: write('horse.glb', horseGlb()), rider: cfg.horse.rider };
log('Dummy and horse models built');

// Every weapon's own model, so an item's page shows that item in hand.
const items = {};
for (const [id, item] of Object.entries(movesets.items)) {
  if (types[item.type] && (cfg.everyItem || itemModels.has(id)) && itemModel(id)) items[id] = itemModels.get(id);
}
// Models a weapon switches to in an Epic Fight style (EF Extended Datapacks' weapons_model_properties:
// Simply Swords Epicfied's demon forms in the Ochs stance).
const styleItems = {};
for (const res of inst.listAll(/^assets\/[^/]+\/weapons_model_properties\/.+\.json$/)) {
  for (const entry of readJson(res)?.weapons_models ?? []) for (const sc of entry.style_config ?? []) {
    if (!items[entry.item] || !sc.style || !sc.model) continue;
    try {
      const { glb } = itemGlb(inst, entry.item, bind, code, sc.model);
      (styleItems[entry.item] ??= {})[sc.style] = write(`items/${entry.item.replace(':', '/')}@${sc.style}.glb`, glb);
    } catch (e) {
      warnings.push(`${entry.item} in ${sc.style}: ${e.message}`);
    }
  }
}
// Item skins whose renderer switches to a second mesh set during some animations (Nightfall's Yamato draws
// its blade only in the attacks RenderYamato_DMC.isUseMesh2 lists): that set's model, for those moves.
const moveItems = {};
for (const id of Object.keys(items)) {
  const [ns, name] = id.split(':');
  const skin = readJson(`${ns}:item_skins/${name}.json`);
  if (!skin?.renderer || !skin.mesh2_main) continue;
  const anims = code.meshSwap(skin.renderer).map(f => registry.fields.get(f)).filter(Boolean);
  if (!anims.length) continue;
  try {
    const { glb } = itemGlb(inst, id, bind, code, null, 'mesh2');
    moveItems[id] = { model: write(`items/${ns}/${name}@mesh2.glb`, glb), anims };
  } catch (e) {
    warnings.push(`${id} second mesh: ${e.message}`);
  }
}
log(`Built ${Object.keys(items).length} held item models (${Object.keys(styleItems).length} with a model per style, ${Object.keys(moveItems).length} per move)`);
const kinds = {};
for (const k of Object.values(itemKinds)) { const key = k.startsWith('none') ? 'none' : k; kinds[key] = (kinds[key] ?? 0) + 1; }
console.log(`  held models by source: ${Object.entries(kinds).map(([k, n]) => `${k} ${n}`).join(', ')}`);
// What each weapon's held model was built from, for checking which ones should be 3D.
fs.writeFileSync(path.join(ROOT, 'game-data/attack-items.json'), JSON.stringify(sortKeys(itemKinds), null, 1) + '\n');
Object.assign(index, { animations: sortKeys(animations), types: sortKeys(types), skills: sortKeys(skills), items: sortKeys(items), styleItems: sortKeys(styleItems), moveItems: sortKeys(moveItems) });
fs.writeFileSync(INDEX, JSON.stringify(index) + '\n');

// Files from earlier runs that nothing uses now.
let removed = 0;
for (const dir of ['clips', 'items']) {
  const walk = d => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); if (!fs.readdirSync(p).length) fs.rmdirSync(p); }
      else if (!written.has(path.relative(OUT, p).split(path.sep).join('/'))) { fs.unlinkSync(p); removed++; }
    }
  };
  walk(path.join(OUT, dir));
}
log(`Wrote game-data/attacks.json${removed ? `, removed ${removed} unused files` : ''}`);
const missingSkills = [...innateTypes.keys()].filter(id => !skills[id]);
if (args.includes('--verbose')) {
  if (warnings.length) console.log(`Warnings:\n  ${warnings.join('\n  ')}`);
  const failures = Object.entries(itemKinds).filter(([, k]) => k.startsWith('none')).map(([id, k]) => `${id}: ${k.slice(6)}`);
  if (failures.length) console.log(`Items without a model:\n  ${failures.join('\n  ')}`);
}
if (unresolved.size) console.log(`${unresolved.size} animation references have no clip or registration, e.g. ${[...unresolved].slice(0, 6).join(', ')}`);
if (missingSkills.length) console.log(`${missingSkills.length} innate skills have no animations, e.g. ${missingSkills.slice(0, 6).join(', ')}`);
const noItem = Object.entries(types).filter(([, t]) => !t.item).map(([id]) => id);
if (noItem.length) console.log(`${noItem.length} weapon types show no held item (add one under "$attacks".items), e.g. ${noItem.slice(0, 6).join(', ')}`);

function dummyGlb() {
  const d = cfg.dummy;
  // TargetDummyEntity: a hit adds its damage to animationPosition (at most 60); every client tick then
  // adds 1 to shakeAmount and takes 0.8 from animationPosition until it runs out. Frames interpolate
  // between ticks with the partial tick, as the renderer does.
  const intensity = Number(/animation_intensity\s*=\s*([\d.]+)/.exec(fs.readFileSync(path.join(inst.instance, d.config), 'utf8'))?.[1] ?? 1);
  const ticks = [];
  let shake = 0, pos = Math.min(d.damage, 60);
  ticks.push({ shake, pos });
  while (pos > 0) {
    shake += 1; pos -= 0.8;
    if (pos <= 0) { shake = 0; pos = 0; }
    ticks.push({ shake, pos });
  }
  const perTick = 3;
  const frames = [];
  for (let i = 0; i + 1 < ticks.length; i++) for (let k = 0; k < perTick; k++) {
    const pt = k / perTick, a = ticks[i], b = ticks[i + 1];
    frames.push({ shake: a.shake + (b.shake - a.shake) * pt, pos: a.pos + (b.pos - a.pos) * pt });
  }
  frames.push(ticks.at(-1));
  const entity = 'net/mehvahdjukaar/dummmmmmy/common/TargetDummyEntity';
  const model = java.layer({
    method: d.layer, args: d.args, setup: d.setup,
    frames: frames.map(f => ({
      natives: {
        [`${entity}.getShake`]: () => f.shake,
        [`${entity}.getAnimationPosition`]: () => f.pos,
        [`${entity}.getRechargingAnimation`]: () => 0,
        'java/util/function/Supplier.get': () => intensity,
      },
    })),
  });
  const times = model.frames.map((_, i) => round(i / (20 * perTick)));
  const tracks = [];
  for (const name of Object.keys(model.frames[0])) {
    for (const [pathName, key] of [['rotation', 'rot'], ['position', 'pos']]) {
      const values = model.frames.flatMap(f => f[name][key]);
      if (values.every((v, i) => Math.abs(v - values[i % 3]) < 1e-6)) continue;
      tracks.push({ part: name, path: pathName, times, values });
    }
  }
  return writeGlb({ layers: [{ texture: { png: need(d.texture), width: model.texWidth, height: model.texHeight }, parts: model.parts }], animations: [{ name: 'hit', length: times.at(-1), loop: false, tracks }] });
}

function horseGlb() {
  const h = cfg.horse;
  // A saddled horse with a rider, posed by HorseModel.setupAnim (the saddle parts only show then).
  const model = java.layer({
    method: h.layer, layer: h.key, setup: h.setup,
    frames: [{ natives: { '*.isSaddled': () => 1, '*.isVehicle': () => 1 } }],
  });
  const pose = model.frames[0];
  const apply = parts => {
    for (const p of parts) {
      const f = pose[p.name];
      if (f) { p.pos = f.pos; p.rot = f.rot; p.hidden = !f.visible; }
      apply(p.children ?? []);
    }
  };
  apply(model.parts);
  return writeGlb({ layers: [{ texture: { png: need(h.texture), width: model.texWidth, height: model.texHeight }, parts: model.parts }] });
}

function need(res) {
  const bytes = inst.resource(res);
  if (!bytes) throw new Error(`resource not found: ${res}`);
  return bytes;
}
function sortKeys(obj) { return Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))); }
function round(v) { return Math.round(v * 1000) / 1000; }
