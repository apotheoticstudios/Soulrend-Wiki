// Epic Fight movesets: which weapon type each item uses, and each type's combos, skills and styles.
// Sources, later ones win:
//   1. Weapon types registered in Java (WeaponCapabilityPresetRegistryEvent), read from mod bytecode by
//      replaying the calls each preset's builder makes (newStyleCombo, innateSkill, ...).
//   2. Datapack types, data/<ns>/capabilities/weapons/types/<name>.json, from jars and Paxi datapacks.
//   3. Item capabilities, data/<ns>/capabilities/weapons/<item>.json, which point at a type.
// The in-game export (item-stats.json, `epicFight`) records each item's category, default style and
// innate skill, which settles ties between jars and catches anything this static read gets wrong.
import fs from 'node:fs';
import path from 'node:path';
import { unzipSync, strFromU8 } from 'fflate';
import { readClass } from './classfile.mjs';

// Jars can embed extra datapacks under packs/<name>/ (WoM Plus overrides WoM items that way).
const CAPABILITY = /^(?:packs\/[^/]+\/)?data\/([a-z0-9_.-]+)\/capabilities\/weapons\/(.+)\.json$/;
const LANG = /^assets\/([a-z0-9_.-]+)\/lang\/en_us\.json$/;
const LANG_KEY = /^(skill\.[a-z0-9_]+\.[a-z0-9_]+(\.tooltip\d*)?|epicfight\.(weapon_category|style)\.[a-z0-9_]+|[a-z0-9_]+\.weapon_category\.[a-z0-9_]+)$/;
const REGISTRY_EVENT = 'yesman/epicfight/api/forgeevent/WeaponCapabilityPresetRegistryEvent';
const SKILL_DESC = 'Lyesman/epicfight/skill/Skill;';
const lower = s => s.toLowerCase();

function parseJson(bytes) {
  try {
    return JSON.parse((typeof bytes === 'string' ? bytes : strFromU8(bytes)).replace(/^﻿/, ''));
  } catch {
    return null;
  }
}

function modIdsOf(toml) {
  return [...toml.matchAll(/\[\[\s*mods\s*\]\][^[]*?modId\s*=\s*["']([^"']+)["']/g)].map(m => m[1]);
}

// Every data/<ns>/... file of a datapack folder or zip, as [relative path, bytes].
function readDatapack(dir) {
  const out = [];
  const walk = d => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, entry.name);
      if (entry.isDirectory()) walk(p);
      else out.push([path.relative(dir, p).split(path.sep).join('/'), () => fs.readFileSync(p)]);
    }
  };
  if (fs.statSync(dir).isDirectory()) walk(dir);
  else for (const [name, bytes] of Object.entries(unzipSync(new Uint8Array(fs.readFileSync(dir))))) out.push([name, () => bytes]);
  return out;
}

export function extractMovesets({ instance, itemStats = {}, warn = console.warn }) {
  const lang = new Map();
  const modNames = new Map();
  const caps = new Map();        // item id -> [{ source, json }], highest priority first
  const jsonTypes = new Map();   // type id -> { source, json }
  const classes = new Map();     // internal class name -> { bytes, mod, parsed? }
  const loadedMods = new Set();
  const presetClasses = [];

  const addCapability = (name, bytes, source, front) => {
    const m = CAPABILITY.exec(name);
    if (!m) return;
    const json = parseJson(bytes());
    if (!json) return warn(`  movesets: invalid JSON in ${source}: ${name}`);
    if (m[2].startsWith('types/')) jsonTypes.set(`${m[1]}:${m[2].slice(6)}`, { source, json });
    else if (!m[2].startsWith('item_keyword/')) {
      const id = `${m[1]}:${m[2]}`;
      if (!caps.has(id)) caps.set(id, []);
      caps.get(id)[front ? 'unshift' : 'push']({ source, json });
    }
  };

  // Mod jars. Only those that mention Epic Fight can register weapon types, so only their classes are read.
  const jarDir = path.join(instance, 'mods');
  for (const file of fs.readdirSync(jarDir).filter(f => f.endsWith('.jar')).sort()) {
    const bytes = new Uint8Array(fs.readFileSync(path.join(jarDir, file)));
    let entries;
    try {
      entries = unzipSync(bytes, { filter: f => f.name === 'META-INF/mods.toml' || CAPABILITY.test(f.name) || LANG.test(f.name) });
    } catch {
      continue;
    }
    const toml = entries['META-INF/mods.toml'] ? strFromU8(entries['META-INF/mods.toml']) : '';
    const mods = modIdsOf(toml);
    mods.forEach(id => loadedMods.add(id));
    for (const [, id, display] of toml.matchAll(/modId\s*=\s*["']([^"']+)["']\s*[\s\S]*?displayName\s*=\s*"([^"]*)"/g)) {
      if (!display.includes('${') && !modNames.has(id)) modNames.set(id, display);
    }
    for (const [name, data] of Object.entries(entries)) {
      if (LANG.test(name)) {
        for (const [key, value] of Object.entries(parseJson(data) ?? {})) if (LANG_KEY.test(key) && typeof value === 'string') lang.set(key, value);
      } else addCapability(name, () => data, name.startsWith('packs/') ? `pack:${file}/${name.split('/')[1]}` : `jar:${file}`, name.startsWith('packs/'));
    }
    if (!/epicfight/.test(toml) && !Object.keys(entries).some(n => CAPABILITY.test(n))) continue;
    const mod = mods[0] ?? file;
    for (const [name, data] of Object.entries(unzipSync(bytes, { filter: f => f.name.endsWith('.class') && !f.name.startsWith('META-INF/') }))) {
      const cls = name.slice(0, -6);
      if (!classes.has(cls)) classes.set(cls, { bytes: data, mod });
    }
  }

  // Paxi datapacks and KubeJS data load after mod data, so they win.
  const packDirs = [];
  const paxi = path.join(instance, 'config/paxi/datapacks');
  if (fs.existsSync(paxi)) for (const name of fs.readdirSync(paxi).sort()) packDirs.push([path.join(paxi, name), `paxi:${name}`]);
  if (fs.existsSync(path.join(instance, 'kubejs/data'))) packDirs.push([path.join(instance, 'kubejs'), 'kubejs']);
  for (const [dir, source] of packDirs) {
    for (const [name, bytes] of readDatapack(dir)) addCapability(name, bytes, source, true);
  }
  const paxiLang = path.join(instance, 'config/paxi/resourcepacks');
  if (fs.existsSync(paxiLang)) for (const pack of fs.readdirSync(paxiLang)) {
    for (const [name, bytes] of readDatapack(path.join(paxiLang, pack))) {
      if (LANG.test(name)) for (const [key, value] of Object.entries(parseJson(bytes()) ?? {})) if (LANG_KEY.test(key) && typeof value === 'string') lang.set(key, value);
    }
  }

  const parsed = name => {
    const entry = classes.get(name);
    if (!entry) return null;
    if (!entry.parsed) {
      try {
        entry.parsed = readClass(entry.bytes);
      } catch (error) {
        warn(`  movesets: can't read ${name}: ${error.message}`);
        entry.parsed = { methods: [], bootstrap: [], strings: [] };
      }
    }
    return entry.parsed;
  };
  for (const [name, entry] of classes) {
    // Cheap byte search before parsing: preset classes reference the registry event.
    if (Buffer.from(entry.bytes.buffer, entry.bytes.byteOffset, entry.bytes.byteLength).includes(REGISTRY_EVENT)) presetClasses.push(name);
  }

  const skills = skillResolver(classes, parsed, lang);
  const javaTypes = new Map();
  // Each mod registers its own ids first. A mod that registers into another mod's namespace is replacing
  // that type on purpose (Epic Fight Extra's `overwrite`, EFR Fix Patch's s_tachi), so those go last.
  const registered = presetClasses.sort().flatMap(name => {
    const mod = classes.get(name).mod;
    return registrations(parsed(name), mod).map(r => ({ ...r, name, mod, override: !r.id.startsWith(`${mod}:`) }));
  }).sort((a, b) => a.override - b.override)
    .filter(r => (!r.requires || loadedMods.has(r.requires)) && (!r.unless || !loadedMods.has(r.unless)));
  for (const { id, target, name, mod, override } of registered) {
    const cls = parsed(name);
    const method = cls.methods.find(m => m.name === target);
    if (!method) continue;
    const type = replayBuilder(cls, method, { mod, classes, parsed, skills });
    if (!Object.keys(type.styles).length && !type.category && !type.ranged) continue;
    if (type.ranged) type.category ||= id.split(':')[1];
    if (javaTypes.has(id) && !override) warn(`  movesets: ${id} is registered by both ${javaTypes.get(id).mod} and ${mod}`);
    javaTypes.set(id, { ...type, mod, source: `java:${mod}` });
  }

  const types = {};
  for (const [id, type] of javaTypes) types[id] = type;
  for (const [id, { source, json }] of jsonTypes) types[id] = fromJson(json, source);

  // Items: the highest-priority capability whose type exists; ties between jars go to the export.
  const items = {};
  const counts = { items: 0, fromExport: 0, mismatched: [] };
  const allIds = new Set([...caps.keys(), ...Object.keys(itemStats).filter(id => itemStats[id]?.epicFight)]);
  for (const id of [...allIds].sort()) {
    const ef = itemStats[id]?.epicFight;
    const candidates = (caps.get(id) ?? []).filter(c => types[c.json.type]);
    const agrees = c => ef && matches(types[c.json.type], ef);
    const pick = candidates.find(c => !/^(jar|pack):/.test(c.source)) ?? candidates.find(c => c.source.startsWith('pack:'))
      ?? candidates.find(agrees) ?? candidates[0];
    let type = pick?.json.type;
    // No capability file: Epic Fight picks a preset from the item's class (sword, axe, ...). Everything
    // else reports the empty-hand "fist" category.
    if (!type && ef?.category && !['fist', 'not_weapon'].includes(ef.category) && types[`epicfight:${ef.category}`]) {
      type = `epicfight:${ef.category}`;
      counts.fromExport++;
    }
    if (!type) continue;
    let source = pick?.source;
    // The game reports a different category: something replaced the capability (e.g. Epic Knights' Lochaber axes
    // are swords in game). Use Epic Fight's type for that category when it fits.
    const reported = ef && types[`epicfight:${ef.category}`];
    if (ef && !matches(types[type], ef) && reported && matches(reported, ef)) {
      type = `epicfight:${ef.category}`;
      source = 'export';
    }
    const item = { type, ...(source ? { source } : {}), ...(ef?.style ? { style: ef.style } : {}) };
    // Max strikes per style and the hit collider, for the attack viewer (tools/make-attacks.mjs).
    if (pick && type === pick.json.type) {
      const strikes = Object.fromEntries(Object.entries(pick.json.attributes ?? {}).filter(([, a]) => a?.max_strikes !== undefined).map(([style, a]) => [style, a.max_strikes]));
      if (Object.keys(strikes).length) item.maxStrikes = strikes;
      if (pick.json.collider) item.collider = jsonCollider(pick.json.collider);
    }
    if (ef && !matches(types[type], ef)) {
      counts.mismatched.push(`${id} (${type})`);
      // The game's answer wins for the default style's innate skill.
      if (ef.innateSkill && ef.innateSkill !== types[type].styles[ef.style]?.innate) item.innate = ef.innateSkill;
    }
    items[id] = item;
    counts.items++;
  }
  if (counts.mismatched.length) {
    warn(`  movesets: ${counts.mismatched.length} items disagree with the in-game export, e.g. ${counts.mismatched.slice(0, 5).join(', ')}`);
  }

  // Skill names and tooltips, for every skill a type can use.
  const skillInfo = {};
  const addSkill = id => {
    if (!id || skillInfo[id] || !id.includes(':')) return;
    const [ns, name] = id.split(':');
    const key = `skill.${ns}.${name}`;
    // Add-ons that re-register a skill (Epic Fight Extra) keep Epic Fight's text.
    const found = lang.has(key) ? key : [...lang.keys()].find(k => k.endsWith(`.${name}`) && /^skill\.[a-z0-9_]+\.[a-z0-9_]+$/.test(k));
    const base = found ?? (lang.has(`${key}.tooltip`) ? key : null);
    const lines = [];
    for (let i = 1; base && lang.has(`${base}.tooltip${i}`); i++) lines.push(lang.get(`${base}.tooltip${i}`));
    // Nightfall titles a skill in `.tooltip` and describes it in `.tooltip1`, `.tooltip2`, ...
    skillInfo[id] = lines.length
      ? { name: (found && lang.get(found)) ?? lang.get(`${base}.tooltip`), tooltip: lines.join('\n') }
      : { name: found ? lang.get(found) : null, tooltip: base ? lang.get(`${base}.tooltip`) ?? null : null };
  };
  for (const item of Object.values(items)) addSkill(item.innate);
  for (const type of Object.values(types)) {
    addSkill(type.passive);
    for (const style of Object.values(type.styles)) addSkill(style.innate);
    for (const rule of type.rules ?? []) for (const c of rule.when) addSkill(c.skill);
  }

  const labels = { categories: {}, styles: {} };
  for (const [key, value] of lang) {
    let m;
    if ((m = /^[a-z0-9_]+\.weapon_category\.([a-z0-9_]+)$/.exec(key))) labels.categories[m[1]] ??= value;
    else if ((m = /^epicfight\.style\.([a-z0-9_]+)$/.exec(key))) labels.styles[m[1]] = value;
  }
  const usedMods = new Set();
  for (const type of Object.values(types)) {
    usedMods.add(type.mod);
    for (const style of Object.values(type.styles)) for (const a of [...(style.combo ?? []), style.guard]) if (a) usedMods.add(a.split(':')[0]);
  }
  const mods = Object.fromEntries([...usedMods].filter(Boolean).sort().map(id => [id, modNames.get(id) ?? id]));

  return {
    data: { types: sortKeys(types), items, skills: sortKeys(skillInfo), labels, mods },
    summary: `${counts.items} items, ${Object.keys(types).length} weapon types (${javaTypes.size} from mod code), ${Object.keys(skillInfo).length} skills`
      + (counts.mismatched.length ? `, ${counts.mismatched.length} disagree with the export` : ''),
  };
}

const sortKeys = obj => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));

// Does a resolved type agree with what the game reported for the item?
function matches(type, ef) {
  if (!type) return false;
  const style = type.styles[ef.style] ?? type.styles[type.defaultStyle];
  const category = lower(type.category ?? '');
  // The game reports every ranged weapon as "bow".
  return (category === lower(ef.category ?? '') || category.endsWith(`:${lower(ef.category ?? '')}`) || (type.ranged && ef.category === 'bow'))
    && (style?.innate ?? null) === (ef.innateSkill ?? null);
}

// The last two entries of a combo list are the dash attack and the jump attack (Epic Fight's convention).
function splitCombo(list, style) {
  if (style === 'mount' || list.length < 3) return { combo: list };
  return { combo: list.slice(0, -2), dash: list.at(-2), air: list.at(-1) };
}

function fromJson(json, source) {
  const styles = {};
  for (const [style, list] of Object.entries(json.combos ?? {})) styles[style] = splitCombo(list.map(String), style);
  for (const [style, skill] of Object.entries(json.innate_skills ?? {})) (styles[style] ??= {}).innate = skill;
  for (const [style, motions] of Object.entries(json.livingmotion_modifier ?? {})) {
    if (motions.block) (styles[style] ??= {}).guard = motions.block;
  }
  const rules = (json.styles?.cases ?? []).map(c => ({ style: c.style, when: (c.conditions ?? []).map(jsonCondition) }));
  return {
    mod: source.startsWith('jar:') ? null : source,
    source: `json:${source}`,
    category: json.category,
    defaultStyle: json.styles?.default ?? null,
    styles,
    rules,
    ...(json.passive_skill ? { passive: json.passive_skill } : {}),
    ...(json.collider ? { collider: jsonCollider(json.collider) } : {}),
    offhand: json.usable_in_offhand ?? null,
    ...(json.offhand_item_compatible_predicate?.length ? { dualWith: json.offhand_item_compatible_predicate.flatMap(p => p.category ?? []) } : {}),
  };
}

// { number, size, center } → the attack viewer's collider shape (blocks, in the joint's space).
function jsonCollider(c) {
  const count = c.number ?? 1;
  return { type: count > 1 ? 'multi' : 'obb', ...(count > 1 ? { count } : {}), size: c.size ?? [0, 0, 0], center: c.center ?? [0, 0, 0] };
}

function jsonCondition(c) {
  const predicate = String(c.predicate ?? '').replace(/^epicfight:/, '');
  switch (predicate) {
    case 'offhand_item_category': return { offhand: c.category };
    case 'skill_active': return { skill: c.skill, active: true };
    case 'innate_skill_boolean_data_key': case 'innate_skill_integer_data_key':
      return { innateState: c.skill_data_key, value: c.expected_value };
    case 'passive_skill_boolean_data_key': case 'passive_skill_integer_data_key':
      return { passiveState: c.skill_data_key, value: c.expected_value };
    case 'charged_attack_event': return { charged: true };
    default: return { other: c.predicate };
  }
}

// { id, target, requires?, unless? } from `event.getTypeEntry().put(new ResourceLocation(...), PRESET)`, where
// target is the builder method. `if (ModList.get().isLoaded("x")) put(A) else put(B)` marks A and B.
function registrations(cls, mod) {
  // Static Function fields are assigned a lambda (or method reference) in <clinit>.
  const fieldTarget = new Map();
  for (const method of cls.methods) {
    let last = null;
    for (const ins of method.code) {
      if (ins.op === 'invokedynamic') last = cls.bootstrap[ins.bootstrap]?.name ?? null;
      else if (ins.op === 'putstatic' && last) { fieldTarget.set(ins.name, last); last = null; }
      else if (ins.op !== 'invoke') last = null;
    }
  }
  const out = [];
  for (const method of cls.methods) {
    let strings = [];
    let condition = null;
    for (const ins of method.code) {
      if (ins.op === 'ldc' && ins.string !== undefined) strings.push(ins.string);
      else if (ins.op === 'invoke' && ins.name === 'isLoaded') { condition = { mod: strings.pop(), then: null }; strings = []; }
      else if ((ins.op === 'getstatic' && ins.desc === 'Ljava/util/function/Function;') || (ins.op === 'invokedynamic' && strings.length)) {
        const name = strings.pop();
        const ns = strings.pop();
        const target = ins.op === 'getstatic' ? fieldTarget.get(ins.name) : cls.bootstrap[ins.bootstrap]?.name;
        if (name && /^[a-z0-9_./-]+$/.test(name) && target) {
          const id = `${ns && /^[a-z0-9_]+$/.test(ns) ? ns : mod}:${name}`;
          if (condition && !condition.then) { condition.then = id; out.push({ id, target, requires: condition.mod }); }
          else if (condition?.then === id) { out.push({ id, target, unless: condition.mod }); condition = null; }
          else { out.push({ id, target }); condition = null; }
        }
        strings = [];
      } else if (ins.op === 'invoke' && ins.name === 'put') strings = [];
    }
  }
  return out;
}

const STYLE = /Style/;
const ANIMATION = /Animation/;

// Replays a preset's builder calls: category, styleProvider, newStyleCombo, innateSkill, passiveSkill, ...
function replayBuilder(cls, method, env) {
  const type = { category: null, defaultStyle: null, styles: {}, rules: [], offhand: null };
  const animOf = ins => `${env.classes.get(ins.owner)?.mod ?? '?'}:${ins.name}`;
  let pending = [];
  for (const ins of method.code) {
    const isBuilderCall = ins.op === 'invoke' && /Builder$/.test(ins.owner);
    if (isBuilderCall && /Ranged/.test(ins.owner)) type.ranged = true;
    if (!isBuilderCall) {
      pending.push(ins);
      continue;
    }
    const statics = pending.filter(p => p.op === 'getstatic');
    const style = statics.find(p => STYLE.test(p.desc) && !/Function/.test(p.desc));
    const styleId = style && lower(style.name);
    const anims = statics.filter(p => ANIMATION.test(p.desc) && !/LivingMotion/.test(p.desc)).map(animOf)
      .concat(pending.filter(p => p.op === 'ldc' && /^[a-z0-9_]+:biped\//.test(p.string ?? '')).map(p => p.string));
    const lambda = pending.find(p => p.op === 'invokedynamic');
    const target = lambda && cls.bootstrap[lambda.bootstrap];
    switch (ins.name) {
      case 'category': type.category = lower(statics[0]?.name ?? ''); break;
      case 'styleProvider': if (target) Object.assign(type, styleRules(cls, target.name, env)); break;
      case 'newStyleCombo': case 'newAdvanceStyleCombo':
        if (styleId) type.styles[styleId] = { ...type.styles[styleId], ...splitCombo(anims, styleId) };
        break;
      case 'innateSkill': {
        const skill = target && skillIn(env.parsed(target.owner)?.methods.find(m => m.name === target.name), env.skills);
        if (styleId && skill) (type.styles[styleId] ??= {}).innate = skill;
        break;
      }
      case 'passiveSkill': {
        const field = statics.find(p => p.desc === SKILL_DESC);
        if (field) type.passive = env.skills(field.owner, field.name);
        break;
      }
      case 'livingMotionModifier': {
        const motion = statics.find(p => /LivingMotion/.test(p.desc));
        if (styleId && motion?.name === 'BLOCK' && anims[0]) {
          for (const s of styleId === 'common' ? Object.keys(type.styles).concat('common') : [styleId]) (type.styles[s] ??= {}).guard ??= anims[0];
        }
        break;
      }
      case 'collider': {
        const preset = statics.find(p => /Collider/.test(p.desc));
        if (preset) type.collider = `preset:${preset.name}`;
        break;
      }
      case 'canBePlacedOffhand': type.offhand = pending.filter(p => p.op === 'push').at(-1)?.value === 1; break;
      case 'weaponCombinationPredicator':
        if (target) type.dualWith = categoriesIn(env.parsed(target.owner)?.methods.find(m => m.name === target.name));
        break;
    }
    pending = [];
  }
  delete type.styles.common;
  for (const [id, style] of Object.entries(type.styles)) if (!style.combo && !style.innate) delete type.styles[id];
  return type;
}

function skillIn(method, skills) {
  const field = method?.code.find(ins => ins.op === 'getstatic' && ins.desc === SKILL_DESC);
  return field ? skills(field.owner, field.name) : null;
}

function categoriesIn(method) {
  return [...new Set((method?.code ?? []).filter(ins => ins.op === 'getstatic' && /Categor/.test(ins.desc)).map(ins => lower(ins.name)))];
}

// A style provider is code, so only its usual shapes are read: "if <condition> return STYLE" chains whose
// conditions are an off-hand weapon category, an active innate skill, or a skill's data key.
function styleRules(cls, name, env, depth = 0) {
  const method = env.parsed(cls.name)?.methods.find(m => m.name === name) ?? cls.methods.find(m => m.name === name);
  const rules = [];
  let when = [];
  let defaultStyle = null;
  for (const ins of method?.code ?? []) {
    if (ins.op === 'getstatic' && STYLE.test(ins.desc)) {
      const style = lower(ins.name);
      if (when.length) rules.push({ style, when });
      else defaultStyle = style;
      when = [];
    } else if (ins.op === 'getstatic' && /Categor/.test(ins.desc)) when.push({ offhand: lower(ins.name) });
    else if (ins.op === 'getstatic' && ins.desc === SKILL_DESC) when.push({ skill: env.skills(ins.owner, ins.name), active: true });
    else if (ins.op === 'getstatic' && (/DataKey/.test(ins.desc) || /DataKey/.test(ins.owner))) {
      const slot = when.find(w => w.slot)?.slot;
      when = when.filter(w => !w.slot);
      when.push({ [slot === 'weapon_passive' ? 'passiveState' : 'innateState']: `${env.classes.get(ins.owner)?.mod ?? '?'}:${lower(ins.name)}` });
    } else if (ins.op === 'getstatic' && /SkillSlot/.test(ins.desc)) when.push({ slot: lower(ins.name) });
    else if (ins.op === 'invoke' && ins.name === 'isActivated') {
      const slot = when.find(w => w.slot);
      if (slot) { when = when.filter(w => w !== slot); when.push({ [slot.slot === 'weapon_passive' ? 'passiveActive' : 'innateActive']: true }); }
    } else if (ins.op === 'invokedynamic' && depth < 2) {
      const target = cls.bootstrap[ins.bootstrap];
      if (target?.owner === cls.name) {
        const inner = styleRules(cls, target.name, env, depth + 1);
        rules.push(...inner.rules);
      }
    }
  }
  const unique = when => [...new Map(when.filter(w => !w.slot).map(w => [JSON.stringify(w), w])).values()];
  return { rules: rules.map(r => ({ ...r, when: unique(r.when) })).filter(r => r.when.length), defaultStyle };
}

// Java skill fields -> registry ids. Skill classes assign each field from a build("<name>", ...) call, so the
// name is one of the identifier strings since the previous assignment: the one matching the field name, else
// the last one with a lang key, else the last.
function skillResolver(classes, parsed, lang) {
  const cache = new Map();
  const langNames = new Set([...lang.keys()].map(key => /^skill\.[a-z0-9_]+\.([a-z0-9_]+)$/.exec(key)?.[1]).filter(Boolean));
  const modIds = new Set([...classes.values()].map(c => c.mod));
  return (owner, field) => {
    if (!cache.has(owner)) {
      const map = new Map();
      const cls = parsed(owner);
      for (const method of cls?.methods ?? []) {
        let strings = [];
        for (const ins of method.code) {
          if (ins.op === 'ldc' && /^[a-z0-9_]+$/.test(ins.string ?? '') && !modIds.has(ins.string)) strings.push(ins.string);
          else if (ins.op === 'putstatic' && ins.desc === SKILL_DESC) {
            const name = strings.find(s => s === lower(ins.name)) ?? strings.findLast(s => langNames.has(s)) ?? strings.at(-1);
            if (name) map.set(ins.name, name);
            strings = [];
          }
        }
      }
      cache.set(owner, map);
    }
    // The registry namespace is the owning mod's; lang only decides between the string and the field name.
    const mod = classes.get(owner)?.mod ?? 'epicfight';
    const name = langNames.has(lower(field)) ? lower(field) : cache.get(owner).get(field) ?? lower(field);
    return `${mod}:${name}`;
  };
}
