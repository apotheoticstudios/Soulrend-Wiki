// Epic Fight's animation and skill registries, rebuilt by running each mod's registration code in the
// bytecode interpreter (tools/lib/models/jvm.mjs) with recording stand-ins for Epic Fight's API:
//   AnimationRegistryEvent.newBuilder(ns, task) → task(builder); builder.nextAccessor(path, factory) →
//     factory(accessor), whose AttackAnimation$Phase constructors, addProperty and setResourceLocation (a
//     clip from another file) calls are recorded
//   SkillBuildEvent.createRegistryWorker(ns).build(name, constructor, builder) → the animations the builder
//     and the constructed skill hold, then the ones the skill's class code plays
// Animations that datapacks declare (a "constructor" invocation in the clip JSON) are read from the JSON.
// Joints are names, colliders { type, count?, size, center } in the joint's space (blocks).
import fs from 'node:fs';
import path from 'node:path';
import { unzipSync, strFromU8 } from 'fflate';
import { readClass } from '../classfile.mjs';
import { Jvm, JvmError, baseNatives, opaque } from '../models/jvm.mjs';

const EF = 'yesman/epicfight';
const ANIMATION_EVENT = `${EF}/api/animation/AnimationManager$AnimationRegistryEvent`;
const SKILL_EVENT = `${EF}/api/forgeevent/SkillBuildEvent`;
const ACCESSOR = /AnimationAccessor;$/;
const isObj = v => v && typeof v === 'object';

// mods: [{ jar, ids, classes: Set }] from scanMods; classPath: models/classpath.mjs over every jar.
export function readRegistries({ classPath, mods, loadedMods, warn = console.warn }) {
  const natives = baseNatives();
  const animations = new Map();      // id → { id, class, phases, props, owner, field }
  const skills = new Map();          // id → { id, class, animations: [id] }
  let current = null;                // the animation whose factory is running

  natives['net/minecraftforge/fml/ModList.get'] = () => ({ $class: 'net/minecraftforge/fml/ModList', $f: {} });
  natives['net/minecraftforge/fml/ModList.isLoaded'] = (_, [id]) => (loadedMods.has(id) ? 1 : 0);
  natives['net/minecraftforge/fml/loading/FMLEnvironment.dist'] = () => opaque('net/minecraftforge/api/distmarker/Dist');
  natives['net/minecraft/resources/ResourceLocation.<init>'] = (_, args, __, self) => {
    const [ns, p] = args.length === 2 ? args : String(args[0]).includes(':') ? String(args[0]).split(':') : ['minecraft', args[0]];
    self.$key = `${ns}:${p}`;
  };
  natives['net/minecraft/resources/ResourceLocation.toString'] = (_, __, ___, self) => self.$key ?? '?';
  natives['net/minecraft/resources/ResourceLocation.fromNamespaceAndPath'] = (_, [ns, p]) => ({ $class: 'net/minecraft/resources/ResourceLocation', $f: {}, $key: `${ns}:${p}` });
  natives['net/minecraft/resources/ResourceLocation.tryParse'] = natives['net/minecraft/resources/ResourceLocation.parse'] = (_, [s]) => ({ $class: 'net/minecraft/resources/ResourceLocation', $f: {}, $key: s.includes(':') ? s : `minecraft:${s}` });

  // Animations.
  natives[`${ANIMATION_EVENT}.newBuilder`] = (jvm, [ns, task]) => {
    const builder = { $class: `${EF}/api/animation/AnimationManager$AnimationBuilder`, $f: { namespace: ns }, $ns: ns };
    try { jvm.callLambda(task, [builder]); } catch (e) { if (!(e instanceof JvmError)) throw e; warn(`  attacks: ${ns} animations stopped early: ${e.message}`); }
  };
  natives[`${EF}/api/animation/AnimationManager$AnimationBuilder.nextAccessor`] = (jvm, [p, factory], __, self) => {
    const id = `${self.$ns}:${p}`;
    const accessor = { $class: `${EF}/api/animation/AnimationManager$AnimationAccessorImpl`, $f: {}, $id: id };
    const record = { id, class: null, phases: [], props: {} };
    const outer = current;
    current = record;
    jvm.steps = 0;
    try {
      const made = jvm.callLambda(factory, [accessor]);
      record.class = made?.$class ?? null;
      accessor.$animation = made;
    } catch (e) {
      if (!(e instanceof JvmError)) throw e;
      record.error = e.message;
    }
    current = outer;
    animations.set(id, record);
    return accessor;
  };
  for (const m of ['get', 'registryName', 'id', 'toString']) {
    natives[`${EF}/api/animation/AnimationManager$AnimationAccessor.${m}`] = natives[`${EF}/api/animation/AnimationManager$AnimationAccessorImpl.${m}`] = (jvm, _, desc, self) => {
      if (m === 'get') return self?.$animation ?? opaque(`${EF}/api/animation/types/StaticAnimation`);
      if (m === 'registryName') return { $class: 'net/minecraft/resources/ResourceLocation', $f: {}, $key: self?.$id };
      return m === 'id' ? 0 : self?.$id ?? '?';
    };
  }
  natives[`${EF}/api/animation/types/AttackAnimation$Phase.<init>`] = (_, args, desc, self) => {
    const phase = phaseFrom(args);
    self.$phase = phase;
    current?.phases.push(phase);
  };
  // Properties are keyed by their static field's name, found once each class has initialised.
  const propName = (jvm, key) => {
    if (key?.$propName) return key.$propName;
    for (const [cls, fields] of jvm.statics) {
      if (!/AnimationProperty|PhaseProperty/.test(cls)) continue;
      for (const [name, v] of Object.entries(fields)) if (isObj(v)) v.$propName ??= name;
    }
    return key?.$propName ?? '?';
  };
  natives['*.addProperty'] = (jvm, [key, value], __, self) => {
    const owner = self?.$phase ?? (self?.$class?.includes('/animation/types/') || !self?.$phase ? current : null);
    if (owner) {
      const name = propName(jvm, key);
      const props = self?.$phase ? self.$phase.props : current?.props;
      if (props) props[name] = plain(value);
    }
    return self;
  };
  // An animation can play another file's clip (AirSlashAnimation reusing sword_dual_airslash).
  natives['*.setResourceLocation'] = (_, args, __, self) => {
    const [ns, p] = args.length === 2 ? args : String(args[0]?.$key ?? args[0]).split(':');
    if (current && ns && p) current.clip = `${ns}:${p}`;
    return self;
  };
  // A MirrorAnimation is two clips, one per hand (shield_mainhand, shield_offhand); the main hand's plays.
  natives[`${EF}/api/animation/types/MirrorAnimation.<init>`] = (_, args) => {
    const p = args.find(a => typeof a === 'string');
    if (current && p) current.clip = p.includes(':') ? p : `${current.id.split(':')[0]}:${p}`;
  };
  natives[`${EF}/api/utils/math/ValueModifier.setter`] = (_, [v]) => ({ $class: 'ValueModifier', $f: {}, $plain: { set: v } });
  natives[`${EF}/api/utils/math/ValueModifier.adder`] = (_, [v]) => ({ $class: 'ValueModifier', $f: {}, $plain: { add: v } });
  natives[`${EF}/api/utils/math/ValueModifier.multiplier`] = (_, [v]) => ({ $class: 'ValueModifier', $f: {}, $plain: { multiply: v } });

  // Armatures: every field and lookup of an armature is a joint, named after HumanoidArmature's fields.
  const jointNames = humanoidJoints(classPath);
  const joint = name => ({ $class: `${EF}/api/animation/Joint`, $f: {}, $joint: name });
  const armature = () => ({ $class: `${EF}/model/armature/HumanoidArmature`, $f: new Proxy({}, { get: (_, k) => typeof k === 'string' ? joint(jointNames[k] ?? k) : undefined }) });
  natives[`${EF}/gameasset/Armatures$ArmatureAccessor.get`] = armature;
  natives[`${EF}/api/asset/AssetAccessor.get`] = (_, __, ___, self) => (self?.$animation ?? (self?.$class?.includes('Armature') ? armature() : opaque()));
  natives[`${EF}/api/model/Armature.searchJointByName`] = natives[`${EF}/model/armature/HumanoidArmature.searchJointByName`] = (_, [name]) => joint(name);
  // Colliders.
  const collider = (type, args, self) => {
    const n = args.filter(a => typeof a === 'number');
    const shape = type === 'multi' ? { type, count: n[0], size: n.slice(1, 4), center: n.slice(4, 7) } : { type, size: n.slice(0, 3), center: n.slice(3, 6) };
    if (self) self.$collider = shape;
    return shape;
  };
  natives[`${EF}/api/collider/OBBCollider.<init>`] = (_, args, desc, self) => { if (desc.startsWith('(DDDDDD') || desc.startsWith('(FFFFFF')) collider('obb', args, self); };
  natives[`${EF}/api/collider/MultiOBBCollider.<init>`] = (_, args, desc, self) => { if (/^\(I[DF]{6}/.test(desc)) collider('multi', args, self); };
  natives[`${EF}/gameasset/ColliderPreset.registerCollider`] = (_, args) => args.at(-1);

  // Skills.
  natives[`${SKILL_EVENT}.createRegistryWorker`] = (_, [ns]) => ({ $class: `${SKILL_EVENT}$ModRegistryWorker`, $f: {}, $ns: ns });
  natives[`${SKILL_EVENT}$ModRegistryWorker.build`] = (jvm, [name, ctor, builder], __, self) => {
    const id = `${self.$ns}:${name}`;
    const record = { id, class: null, animations: [] };
    jvm.steps = 0;
    collectAccessors(builder, record.animations);
    try {
      const skill = jvm.callLambda(ctor, [builder]);
      record.class = skill?.$class ?? null;
      collectAccessors(skill, record.animations);
    } catch (e) {
      if (!(e instanceof JvmError)) throw e;
      record.error = e.message;
    }
    skills.set(id, record);
    return record.class ? { $class: record.class, $f: {}, $skill: id } : opaque(`${EF}/skill/Skill`);
  };

  const skipInit = name => /^net\/minecraft\/(world\/(level|item|entity|effect|damagesource|food)|server|core|sounds|tags|data|stats|commands|network|advancements|client)\//.test(name)
    || /\/(client|particle|sound)\//.test(name) && !name.startsWith(EF + '/api/');
  const jvm = new Jvm({ classPath, natives, skipInit, maxSteps: 2e6 });

  // Each mod's subscriber methods, Epic Fight's own first so add-ons can reference its accessors.
  const entries = [];
  for (const mod of mods) for (const name of mod.classes) {
    const bytes = classPath(name);
    if (!bytes) continue;
    const text = Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const events = [ANIMATION_EVENT, SKILL_EVENT].filter(e => text.includes(e));
    if (!events.length) continue;
    const cls = jvm.klass(name);
    for (const m of cls?.methods ?? []) {
      for (const event of events) if (m.desc === `(L${event};)V` && m.bytes) {
        entries.push({ event, cls: name, method: m.name, static: !!(m.access & 8), ef: name.startsWith(EF) });
      }
    }
  }
  entries.sort((a, b) => (b.ef - a.ef) || (a.event === ANIMATION_EVENT ? -1 : 1) - (b.event === ANIMATION_EVENT ? -1 : 1));
  const eventObject = event => ({ $class: event, $f: {} });
  for (const e of entries.filter(x => x.event === ANIMATION_EVENT).concat(entries.filter(x => x.event === SKILL_EVENT))) {
    jvm.steps = 0;
    try {
      const self = e.static ? undefined : jvm.instantiate(e.cls);
      jvm.invoke(e.cls, e.method, `(L${e.event};)V`, [eventObject(e.event)], self);
    } catch (error) {
      if (!(error instanceof JvmError)) throw error;
      warn(`  attacks: ${e.cls}.${e.method}: ${error.message}`);
    }
  }

  // ActionAnimation and its subclasses (attacks among them) move the entity with the clip.
  for (const record of animations.values()) {
    if (record.class) record.action = jvm.isSubclass(record.class, `${EF}/api/animation/types/ActionAnimation`);
  }
  // Java fields → accessor ids, so moveset references (`mod:FIELD`) and skill code resolve.
  const fields = new Map();
  for (const [cls, statics] of jvm.statics) for (const [name, v] of Object.entries(statics)) {
    if (isObj(v) && v.$id) fields.set(`${cls}.${name}`, v.$id);
  }
  // Skills whose animations live in their class code (played from executeOnServer and the like).
  for (const record of skills.values()) {
    for (let c = record.class, depth = 0; c && depth < 4 && !c.startsWith(`${EF}/skill/Skill`); depth++) {
      const k = jvm.klass(c);
      if (!k) break;
      for (const m of k.methods) for (const ins of m.code) {
        if (ins.op === 'getstatic' && ACCESSOR.test(ins.desc)) {
          const id = fields.get(`${ins.owner}.${ins.name}`);
          if (id && !record.animations.includes(id)) record.animations.push(id);
        }
      }
      c = k.superName;
    }
  }
  return { animations, skills, fields, colliders: colliderPresets(jvm) };

  function collectAccessors(root, out, seen = new Set()) {
    const visit = v => {
      if (!isObj(v) || seen.has(v)) return;
      seen.add(v);
      if (v.$id) { if (!out.includes(v.$id)) out.push(v.$id); return; }
      if (Array.isArray(v)) return v.forEach(visit);
      if (v.$list) return v.$list.forEach(visit);
      if (v.$map) return [...v.$map.values()].forEach(visit);
      if (v.$lambda) return v.$captured?.forEach(visit);
      if (v.$f && !(v.$f instanceof Object && Object.getPrototypeOf(v.$f) === null)) for (const x of Object.values(v.$f)) visit(x);
    };
    visit(root);
  }
}

// AttackAnimation$Phase(start, antic, preDelay, contact, recovery, end, [hand], joint, collider) and the
// JointColliderPair[] forms: numbers are the times, the rest is read by kind.
function phaseFrom(args) {
  const times = args.filter(a => typeof a === 'number');
  const flat = args.flatMap(a => (Array.isArray(a) ? a.flatMap(p => [p?.$f?.first ?? p?.$f?.a, p?.$f?.second ?? p?.$f?.b, p]) : [a]));
  const joints = flat.filter(a => a?.$joint).map(a => a.$joint);
  const colliders = flat.filter(a => isObj(a) && 'size' in a || a?.$collider).map(a => a.$collider ?? a);
  const hand = args.find(a => a?.$f?.name === 'OFF_HAND' || a?.$f?.name === 'MAIN_HAND')?.$f.name;
  const [start, antic, preDelay, contact, recovery, end] = times.length >= 6 ? times : [0, ...times, Infinity];
  return { start, antic, preDelay, contact, recovery, end: Number.isFinite(end) && end < 1e30 ? end : null, hand: hand === 'OFF_HAND' ? 'off' : 'main', joints: joints.length ? joints : ['Tool_R'], colliders: colliders.length ? colliders : [null], props: {} };
}

function plain(v) {
  if (v === null || typeof v !== 'object') return v;
  if (v.$plain) return v.$plain;
  if (v.$id) return v.$id;
  if (v.$f?.name !== undefined && typeof v.$f.name === 'string') return v.$f.name;
  if (Array.isArray(v)) return v.map(plain);
  return v.$class?.split('/').pop() ?? null;
}

// HumanoidArmature's joint fields (toolR → "Tool_R"): its Joint fields in order, against the joint names its
// constructor looks up in the same order.
function humanoidJoints(classPath) {
  const map = { rootJoint: 'Root' };
  const bytes = classPath(`${EF}/model/armature/HumanoidArmature`);
  if (!bytes) return map;
  const cls = readClass(bytes);
  const fields = cls.fields.filter(f => f.desc === `L${EF}/api/animation/Joint;`).map(f => f.name);
  const names = (cls.methods.find(m => m.name === '<init>')?.code ?? []).filter(i => i.op === 'ldc' && i.string).map(i => i.string);
  fields.forEach((f, i) => { if (names[i]) map[f] = names[i]; });
  return map;
}

// ColliderPreset's static fields, once its static initializer has run in the interpreter.
function colliderPresets(jvm) {
  const out = {};
  const fields = jvm.staticsOf(`${EF}/gameasset/ColliderPreset`);
  for (const [name, v] of Object.entries(fields)) if (v?.$collider) out[name] = v.$collider;
  return out;
}

// Mods that can register animations or skills: their jar, mod ids and class names. That's Epic Fight and
// every mod that depends on it, directly or through another add-on (p1nero_ec only names Nightfall), or
// that ships Epic Fight assets.
// Each also brings its data_driven/ folder, where SEpicfied declares skills and animations as JSON.
export function scanMods(instance) {
  const dir = path.join(instance, 'mods');
  const jars = [];
  const loaded = new Set();
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.jar')).sort()) {
    const jar = path.join(dir, file);
    const names = [];
    let got, content = false;
    try {
      got = unzipSync(fs.readFileSync(jar), { filter: e => {
        if (e.name.endsWith('.class')) names.push(e.name.slice(0, -6));
        else if (/\/(animmodels|item_skins|capabilities\/weapons)\//.test(e.name)) content = true;
        return e.name === 'META-INF/mods.toml' || (e.name.startsWith('data_driven/') && e.name.endsWith('.json'));
      } });
    } catch { continue; }
    const toml = got['META-INF/mods.toml'] ? strFromU8(got['META-INF/mods.toml']) : '';
    const ids = [...toml.matchAll(/\[\[\s*mods\s*\]\][^[]*?modId\s*=\s*["']([^"']+)["']/g)].map(m => m[1]);
    const deps = [...toml.matchAll(/\[\[\s*dependencies\.[^\]]+\]\][^[]*?modId\s*=\s*["']([^"']+)["']/g)].map(m => m[1]);
    ids.forEach(id => loaded.add(id));
    const data = Object.entries(got).filter(([n]) => n.startsWith('data_driven/')).map(([n, b]) => [n, strFromU8(b)]);
    jars.push({ jar, ids, deps, content, classes: new Set(names), data });
  }
  const family = new Set(['epicfight']);
  for (let grew = true; grew; ) {
    grew = false;
    for (const j of jars) if (!j.ids.some(id => family.has(id)) && j.deps.some(d => family.has(d))) { j.ids.forEach(id => family.add(id)); grew = true; }
  }
  // Some add-ons (Weapons of Traveloptics) declare no dependency but ship Epic Fight content.
  return { mods: jars.filter(j => j.content || j.ids.some(id => family.has(id))), loadedMods: loaded };
}

// SEpicfied's data-driven JSON (data_driven/<ns>/…): skills under innate_skill_builder/<kind>/, which
// name their animations in "animation"-like fields; attack animations under animations/registry/, with
// their phases; and animations/virtualizate/, ids that play another animation's clip.
export function readDataDriven(mods, { animations, skills }) {
  const aliases = new Map();
  for (const mod of mods) for (const [name, text] of mod.data) {
    let json;
    try { json = JSON.parse(text.replace(/^\uFEFF/, '')); } catch { continue; }
    const m = /^data_driven\/([a-z0-9_.-]+)\/(.+)\.json$/.exec(name);
    if (!m) continue;
    const [, ns, rest] = m;
    if (rest.startsWith('innate_skill_builder/')) {
      const id = `${json.modid ?? ns}:${json.name ?? rest.split('/').pop()}`;
      const list = [];
      const walk = (v, key = '') => {
        if (typeof v === 'string') { if (/animation/i.test(key) && /^[a-z0-9_.-]+:[a-z0-9_/.-]+$/.test(v) && !list.includes(v)) list.push(v); }
        else if (Array.isArray(v)) v.forEach(x => walk(x, key));
        else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, k);
      };
      walk(json);
      if (!skills.has(id)) skills.set(id, { id, class: 'data_driven', animations: list });
    } else if (rest.startsWith('animations/registry/') && json.animation) {
      const id = json.animation.includes(':') ? json.animation : `${ns}:${json.animation}`;
      if (!animations.has(id)) animations.set(id, { id, class: json.type ?? null, action: /attack|action|dash/.test(json.type ?? ''), props: {}, phases: (json.phases ?? []).map(p => ({
        start: 0, antic: p.antic ?? 0, preDelay: p.pre_delay ?? p.antic ?? 0, contact: p.contact ?? 0, recovery: p.recovery ?? 0, end: null,
        hand: p.hand === 'off_hand' ? 'off' : 'main', joints: (p.colliders ?? [{}]).map(c => c.joint ?? 'Tool_R'),
        colliders: (p.colliders ?? [{}]).map(c => (c.collider ? { type: 'obb', size: c.collider.size, center: c.collider.center } : null)),
        props: p.properties?.max_strikes !== undefined ? { MAX_STRIKES_MODIFIER: { set: p.properties.max_strikes } } : {},
      })) });
    } else if (rest.startsWith('animations/virtualizate/') && json.virtual_animation && json.real_animation) {
      aliases.set(json.virtual_animation, json.real_animation);
    }
  }
  return aliases;
}

// Phases from a clip's "constructor" (Epic Fight's JSON-declared animations): its invocation command
// lists each AttackAnimation$Phase as (start#F, antic#F, preDelay#F, contact#F, recovery#F, end#F, hand,
// <armature>.<joint>#…Joint, collider).
export function constructorPhases(constructor) {
  const cmd = constructor?.invocation_command;
  if (typeof cmd !== 'string' || !cmd.includes('AttackAnimation$Phase')) return [];
  const phases = [];
  for (const m of cmd.matchAll(/\(([^()]*?#F(?:,[^()]*?)*)\)/g)) {
    const parts = m[1].split(',');
    const times = parts.filter(p => p.endsWith('#F')).map(p => parseFloat(p));
    if (times.length < 5) continue;
    const joint = parts.find(p => /#yesman\.epicfight\.api\.animation\.Joint$/.test(p))?.replace(/#.*$/, '').split('.').pop() ?? 'Tool_R';
    const hand = parts.some(p => p.startsWith('OFF_HAND#')) ? 'off' : 'main';
    const [start, antic, preDelay, contact, recovery, end] = times.length >= 6 ? times : [0, ...times];
    phases.push({ start, antic, preDelay, contact, recovery, end: end ?? null, hand, joints: [joint], colliders: [null], props: {} });
  }
  return phases;
}
