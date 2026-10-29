// Held item models that code chooses, traced through the mod's bytecode.
//
// Hand models (handSuffixes): a ModelEvent.ModifyBakingResult handler that wraps an item's inventory model
// so it draws "<name><suffix>" when held (Mowzie's Mobs: "spear" → "spear_in_hand"). The suffixes are the
// handler's string-concatenation recipes.
//
// Items drawn by code (geckolib; models whose parent is builtin/entity). GeckoLib and AzureLib items name their
// geo model and texture only in code, so they're traced through it:
//   the item's registration (ITEMS.register("<name>", () -> new FooItem(…)), stored in a static field)
//   → its renderer: one the item class (a superclass, or a nested class such as its client extensions)
//     constructs, or one that code pairs with the item's field (AzureLib's
//     AzItemRendererRegistry.register(FooRenderer::new, ITEMS.FOO.get()))
//   → the renderer's model: its getModelResource and getTextureResource run in the interpreter (GeckoLib),
//     else the "geo/….geo.json" and "textures/….png" strings in the renderer and the classes it builds.
// The geometry is placed as GeoItemRenderer draws it: GeckoLib mirrors Bedrock's X axis and the renderer
// translates by (0.5, 0.51, 0.5), inside the item's display transform and translate(-0.5).
// Renderers with no geo model (Java models: Cataclysm, Alex's Caves) come back as { renderer } only.
import { strFromU8 } from 'fflate';
import { readClass } from '../classfile.mjs';
import { readGeo } from '../models/bedrock.mjs';
import { bakeParts } from '../models/glb.mjs';
import { opaque } from '../models/jvm.mjs';
import { firstFrame } from './item.mjs';
import { identity, mul, translation, scaling, fromQuat, transformPoint } from './mat4.mjs';

const RENDERERS = [
  'net/minecraft/client/renderer/BlockEntityWithoutLevelRenderer',
  'mod/azure/azurelib/render/item/AzItemRenderer',
];
const GEO_MODELS = ['software/bernie/geckolib/model/GeoModel', 'mod/azure/azurelib/model/GeoModel'];
const ITEM = 'net/minecraft/world/item/Item';

// inst: models/instance.mjs; java: javaModels(...) (its jvm has ResourceLocation natives; boxes builds
// Java models). Returns { geckolib(itemId), handSuffixes(namespace) }.
export function codeModels(inst, java) {
  const jvm = java.jvm;
  const parsed = new Map();
  const cls = name => {
    if (!parsed.has(name)) {
      const bytes = inst.classPath(name);
      let c = null;
      try { c = bytes ? readClass(bytes) : null; } catch { c = null; }
      parsed.set(name, c);
    }
    return parsed.get(name);
  };
  const isA = (name, base) => { for (let c = name, d = 0; c && d < 16; d++) { if (c === base) return true; c = cls(c)?.superName; } return false; };
  const isRenderer = name => RENDERERS.some(r => name !== r && isA(name, r));

  // Per jar: "<name>" → { cls, field } from every register…("<name>", supplier) call, and item field →
  // renderer from code that names both within a few instructions.
  const jars = new Map();
  const scan = jar => {
    if (jars.has(jar)) return jars.get(jar);
    const items = new Map(), renderers = new Map();
    for (const name of inst.classPath.classesIn(jar)) {
      const c = cls(name);
      for (const m of c?.methods ?? []) {
        let last = null, target = null, pending = null;
        const refs = [], fields = [];
        m.code.forEach((ins, i) => {
          if (ins.op === 'ldc' && typeof ins.string === 'string') { last = ins.string; target = null; }
          else if (ins.op === 'invokedynamic') {
            target = c.bootstrap[ins.bootstrap];
            if (target?.name === '<init>' && isRenderer(target.owner)) refs.push([i, target.owner]);
          } else if (ins.op === 'invoke' && ins.name === '<init>' && isRenderer(ins.owner)) refs.push([i, ins.owner]);
          else if (ins.op === 'invoke' && /^register/i.test(ins.name) && last && target) {
            const made = target.name === '<init>' ? target.owner : constructed(target);
            if (made && !items.has(last)) { items.set(last, { cls: made, field: null }); pending = last; }
            last = target = null;
          } else if (ins.op === 'putstatic' && pending) { items.get(pending).field = `${ins.owner}.${ins.name}`; pending = null; }
          else if (ins.op === 'getstatic') fields.push([i, `${ins.owner}.${ins.name}`]);
        });
        for (const [i, field] of fields) {
          const near = refs.filter(([j]) => Math.abs(j - i) <= 8).sort((a, b) => Math.abs(a[0] - i) - Math.abs(b[0] - i))[0];
          if (near && !renderers.has(field)) renderers.set(field, near[1]);
        }
      }
    }
    const result = { items, renderers };
    jars.set(jar, result);
    return result;
  };
  // The item a supplier lambda builds: the last constructor it calls that makes an Item.
  const constructed = target => {
    const m = cls(target.owner)?.methods.find(x => x.name === target.name && x.desc === target.desc);
    const inits = (m?.code ?? []).filter(i => i.op === 'invoke' && i.name === '<init>' && isA(i.owner, ITEM));
    return inits.at(-1)?.owner ?? null;
  };
  const rendererOf = itemClass => {
    for (let c = itemClass, d = 0; c && d < 6 && c !== ITEM; d++) {
      const own = inst.classPath.jarOf(c);
      const nested = own ? [...inst.classPath.classesIn(own)].filter(n => n.startsWith(`${c}$`)) : [];
      // The item class, its nested classes, then what they reach in the mod: classes they construct and
      // methods they call, overrides included (Cataclysm's items ask Cataclysm.PROXY.getISTERProperties(),
      // which the client proxy answers with a CMItemRenderProperties that builds the renderer).
      const built = new Set(), called = new Set();
      const ours = owner => !/^(java|javax|net\/minecraft|com\/mojang|net\/minecraftforge)\//.test(owner);
      const scanMethods = (k, methods, hop) => {
        for (const m of methods) for (const ins of m.code) {
          if (ins.op === 'invoke' && ins.name === '<init>' && isRenderer(ins.owner)) return ins.owner;
          if (ins.op === 'invokedynamic') { const t = k.bootstrap[ins.bootstrap]; if (t?.name === '<init>' && isRenderer(t.owner)) return t.owner; }
          if (hop && ins.op === 'invoke' && ours(ins.owner) && ins.owner !== k.name) (ins.name === '<init>' ? built : called).add(ins.name === '<init>' ? ins.owner : ins.name);
        }
        return null;
      };
      for (const n of [c, ...nested]) { const k = cls(n); const r = k && scanMethods(k, k.methods, true); if (r) return r; }
      for (const n of built) { const k = cls(n); const r = k && scanMethods(k, k.methods, false); if (r) return r; }
      if (own && called.size) for (const n of inst.classPath.classesIn(own)) {
        const k = cls(n);
        const methods = (k?.methods ?? []).filter(m => called.has(m.name));
        if (!methods.length) continue;
        let r = scanMethods(k, methods, false);
        // One more step: a returned properties object that builds the renderer.
        if (!r) for (const m of methods) for (const ins of m.code) if (!r && ins.op === 'invoke' && ins.name === '<init>' && ours(ins.owner)) { const kk = cls(ins.owner); r = kk && scanMethods(kk, kk.methods, false); }
        if (r) return r;
      }
      c = cls(c)?.superName;
    }
    return null;
  };

  // Runs the renderer's constructor and asks its GeckoLib model; else reads the renderer's strings.
  const resources = renderer => {
    const obj = jvm.newObject(renderer);
    jvm.steps = 0;
    try { jvm.invoke(renderer, '<init>', '()V', [], obj, true); } catch { /* the strings may still do */ }
    const exists = id => !!id && !!inst.resource(id);
    const call = (target, name) => {
      for (let c = target.$class, d = 0; c && d < 8; d++) {
        const m = cls(c)?.methods.find(x => x.name === name && /^\(L[^;]+;\)Lnet\/minecraft\/resources\/ResourceLocation;$/.test(x.desc) && x.bytes);
        if (m) {
          jvm.steps = 0;
          try { return jvm.invoke(c, name, m.desc, [opaque()], target)?.$key ?? null; } catch { return null; }
        }
        c = cls(c)?.superName;
      }
      return null;
    };
    const model = Object.values(obj.$f).find(v => v?.$class && GEO_MODELS.some(b => isA(v.$class, b)));
    let geo = null, texture = null;
    if (model) {
      geo = call(model, 'getModelResource');
      // A renderer can override its model's texture (Nightfall's Excalibur).
      texture = [call(obj, 'getTextureLocation'), call(model, 'getTextureResource')].find(exists) ?? null;
      if (exists(geo) && texture) return { geo, texture };
    }
    // Strings: (namespace, "geo/x.geo.json") and (namespace, "textures/x.png") in the renderer and what it builds.
    const owners = new Set([renderer]);
    for (const m of cls(renderer)?.methods ?? []) for (const ins of m.code) {
      if (ins.op === 'invoke' && ins.name === '<init>' && !/^(java|net\/minecraft)\//.test(ins.owner)) owners.add(ins.owner);
    }
    if (!exists(geo)) geo = null;
    for (const o of owners) for (const m of cls(o)?.methods ?? []) {
      let ns = null;
      for (const ins of m.code) {
        if (ins.op !== 'ldc' || typeof ins.string !== 'string') continue;
        const s = ins.string;
        const full = s.includes(':') ? s : ns ? `${ns}:${s}` : null;
        if (/\.geo\.json$/.test(s) && exists(full)) geo ??= full;
        else if (/^([a-z0-9_.-]+:)?textures\/.+\.png$/.test(s) && exists(full)) texture ??= full;
        ns = /^[a-z0-9_.-]+$/.test(s) ? s : null;
      }
    }
    return geo && texture ? { geo, texture } : null;
  };

  const suffixes = new Map();
  const handSuffixes = ns => {
    if (suffixes.has(ns)) return suffixes.get(ns);
    const out = new Set();
    for (const jar of inst.jarsFor(ns)) for (const name of inst.classPath.classesIn(jar)) {
      const c = cls(name);
      if (!c?.methods.some(m => m.desc.includes('ModelEvent$ModifyBakingResult'))) continue;
      for (const recipe of c.bootstrapStrings.flat()) {
        const m = /^\u0001(_[a-z0-9_]+)$/.exec(recipe ?? '');
        if (m) out.add(m[1]);
      }
    }
    suffixes.set(ns, [...out]);
    return suffixes.get(ns);
  };

  // Java-model item renderers (Cataclysm's CMItemstackRenderer, which branches on the item): its
  // renderByItem runs with this item's stack in the third-person right or left hand, with a PoseStack that
  // keeps its matrices and stand-ins that note each model drawn (renderToBuffer), the texture its render
  // type was made from and the matrix at the time. Returns [{ model class, texture, matrix (blocks) }].
  const CONTEXTS = ['NONE', 'THIRD_PERSON_LEFT_HAND', 'THIRD_PERSON_RIGHT_HAND', 'FIRST_PERSON_LEFT_HAND', 'FIRST_PERSON_RIGHT_HAND', 'HEAD', 'GUI', 'GROUND', 'FIXED'];
  const contexts = Object.fromEntries(CONTEXTS.map((n, i) => [n, { $class: 'net/minecraft/world/item/ItemDisplayContext', $f: { name: n, ordinal: i } }]));
  const renderTypeFactories = ['armorCutoutNoCull', 'entitySolid', 'entityCutout', 'entityCutoutNoCull', 'entityCutoutNoCullZOffset', 'itemEntityTranslucentCull', 'entityTranslucentCull', 'entityTranslucent', 'entityTranslucentEmissive', 'entitySmoothCutout', 'entityDecal', 'entityNoOutline', 'eyes', 'energySwirl', 'dragonExplosionAlpha', 'beaconBeam'];
  const javaDraws = (renderer, field, hand) => {
    const n = jvm.natives;
    const saved = {};
    const set = (key, fn) => { saved[key] = n[key]; n[key] = fn; };
    const draws = [];
    const stack = [identity()];
    const PS = 'com/mojang/blaze3d/vertex/PoseStack';
    set(`${PS}.pushPose`, () => { stack.push(stack.at(-1)); });
    set(`${PS}.popPose`, () => { if (stack.length > 1) stack.pop(); });
    set(`${PS}.translate`, (_, a) => { stack[stack.length - 1] = mul(stack.at(-1), translation(a.filter(x => typeof x === 'number').slice(0, 3))); });
    set(`${PS}.scale`, (_, a) => { stack[stack.length - 1] = mul(stack.at(-1), scaling(a.slice(0, 3))); });
    set(`${PS}.mulPose`, (_, [q]) => { const f = q?.$f ?? {}; stack[stack.length - 1] = mul(stack.at(-1), fromQuat([f.x ?? 0, f.y ?? 0, f.z ?? 0, f.w ?? 1])); });
    const typed = (_, args) => ({ $class: 'net/minecraft/client/renderer/RenderType', $f: {}, $tex: args.find(a => a?.$key)?.$key ?? null });
    for (const f of renderTypeFactories) set(`net/minecraft/client/renderer/RenderType.${f}`, typed);
    const buffer = (_, args) => ({ $class: 'com/mojang/blaze3d/vertex/VertexConsumer', $f: {}, $tex: args.find(a => a?.$tex !== undefined)?.$tex ?? null });
    for (const f of ['getFoilBuffer', 'getFoilBufferDirect', 'getArmorFoilBuffer', 'getCompassFoilBuffer', 'getCompassFoilBufferDirect']) set(`net/minecraft/client/renderer/entity/ItemRenderer.${f}`, buffer);
    set('net/minecraft/client/renderer/MultiBufferSource.getBuffer', buffer);
    set('*.renderToBuffer', (_, [, consumer], __, self) => { draws.push({ model: self?.$class, texture: consumer?.$tex ?? null, matrix: stack.at(-1) }); });
    // The item: its registry field's token is what getItem returns, and RegistryObject.get returns tokens.
    const token = { $class: 'net/minecraftforge/registries/RegistryObject', $f: {}, $field: field };
    const tokens = new Map([[field, token]]);
    const [owner] = field.split('.');
    const fields = new Proxy({}, { has: () => true, get: (_, name) => { const key = `${owner}.${String(name)}`; if (!tokens.has(key)) tokens.set(key, { $class: 'net/minecraftforge/registries/RegistryObject', $f: {}, $field: key }); return tokens.get(key); } });
    const hadStatics = jvm.statics.get(owner);
    jvm.statics.set(owner, fields);
    set('net/minecraftforge/registries/RegistryObject.get', (_, __, ___, self) => self);
    set('net/minecraft/world/item/ItemStack.getItem', () => token);
    set('net/minecraft/world/item/ItemStack.is', (_, [x]) => (x === token ? 1 : 0));
    set('net/minecraft/world/item/ItemStack.hasFoil', () => 0);
    for (const [name, ctx] of Object.entries(contexts)) set(`net/minecraft/world/item/ItemDisplayContext.${name}`, () => ctx);
    try {
      const obj = jvm.newObject(renderer);
      jvm.steps = 0;
      try { jvm.invoke(renderer, '<init>', '()V', [], obj, true); } catch { /* fields it needs are static */ }
      const method = [...(jvm.klass(renderer)?.byKey.keys() ?? [])].find(k => k.startsWith('renderByItem('));
      if (method) {
        const stackObj = { $class: PS, $f: {} };
        jvm.steps = 0;
        jvm.invoke(renderer, 'renderByItem', method.slice('renderByItem'.length), [{ $class: 'net/minecraft/world/item/ItemStack', $f: {} }, contexts[hand === 'off' ? 'THIRD_PERSON_LEFT_HAND' : 'THIRD_PERSON_RIGHT_HAND'], stackObj, { $class: 'net/minecraft/client/renderer/MultiBufferSource', $f: {} }, 15728880, 0], obj);
      }
    } catch { /* keep what was drawn */ } finally {
      for (const [k, fn] of Object.entries(saved)) { if (fn) n[k] = fn; else delete n[k]; }
      if (hadStatics) jvm.statics.set(owner, hadStatics); else jvm.statics.delete(owner);
    }
    return draws.filter(d => d.model && d.texture);
  };
  // The drawn models' cubes, baked and placed by their matrices, in item model pixels.
  const modelParts = new Map();
  const javaSource = draws => {
    const quads = [], textures = {};
    for (const d of draws) {
      if (!modelParts.has(d.model)) { try { modelParts.set(d.model, java.boxes({ class: d.model })); } catch { modelParts.set(d.model, null); } }
      const model = modelParts.get(d.model);
      const png = firstFrame(inst.resource(d.texture));
      if (!model || !png) continue;
      textures[d.texture] = png;
      const g = bakeParts(model.parts, { width: model.texWidth ?? png.width, height: model.texHeight ?? png.height });
      // glb.mjs space back to Java model space in blocks ((x, -(y - 1.5), -z)), then the draw's matrix.
      const point = i => transformPoint(d.matrix, [g.positions[i], -(g.positions[i + 1] - 1.5), -g.positions[i + 2]]).map(v => v * 16);
      for (let k = 0; k < g.indices.length; k += 3) {
        const tri = [g.indices[k], g.indices[k + 1], g.indices[k + 2]];
        quads.push({ texture: d.texture, points: tri.map(i => point(i * 3)), uvs: tri.map(i => [g.uvs[i * 2], g.uvs[i * 2 + 1]]) });
      }
    }
    return quads.length ? { quads, textures, kind: 'java model' } : null;
  };

  const cache = new Map();
  // itemId → { quads, textures, geo } in item model pixels (with { off } when the left hand differs),
  // { renderer } for a renderer that couldn't be read, or null when no renderer was found.
  const geckolib = itemId => {
    if (cache.has(itemId)) return cache.get(itemId);
    let result = null;
    const [ns, name] = itemId.split(':');
    for (const jar of inst.jarsFor(ns)) {
      const item = scan(jar).items.get(name);
      if (!item) continue;
      let renderer = rendererOf(item.cls);
      if (!renderer && item.field) for (const j of inst.jarsFor(ns)) { renderer = scan(j).renderers.get(item.field); if (renderer) break; }
      if (!renderer) continue;
      const res = resources(renderer);
      result = res && build(inst, res);
      if (!result && item.field) {
        const main = javaSource(javaDraws(renderer, item.field, 'main'));
        const off = main && javaSource(javaDraws(renderer, item.field, 'off'));
        if (main) result = { ...main, off: off ?? main };
      }
      result ??= { renderer };
      break;
    }
    cache.set(itemId, result);
    return result;
  };
  // Epic Fight item skin renderers: the class an id ("efn:mesh_item") is registered to, found where code
  // names the id's path and then makes the renderer (addItemRenderer(…"mesh_item"…, RenderYamato_DMC::new)).
  const skinRenderer = id => {
    const [ns, path] = id.split(':');
    for (const jar of inst.jarsFor(ns)) for (const name of inst.classPath.classesIn(jar)) {
      const c = cls(name);
      for (const m of c?.methods ?? []) {
        const i = m.code.findIndex(x => x.op === 'ldc' && x.string === path);
        if (i < 0) continue;
        for (const ins of m.code.slice(i + 1, i + 6)) {
          const t = ins.op === 'invokedynamic' ? c.bootstrap[ins.bootstrap] : null;
          if (t?.name === '<init>') return t.owner;
        }
      }
    }
    return null;
  };
  // The animations a renderer switches meshes for: the AnimationAccessor fields a static
  // (DynamicAnimation) → boolean test reads (RenderYamato_DMC.isUseMesh2), as "Class.FIELD".
  const meshSwap = id => {
    const r = skinRenderer(id);
    const test = cls(r)?.methods.find(m => (m.access & 8) && /^\(L[^;]*DynamicAnimation;\)Z$/.test(m.desc));
    return (test?.code ?? []).filter(i => i.op === 'getstatic' && /AnimationAccessor;$/.test(i.desc)).map(i => `${i.owner}.${i.name}`);
  };
  return { geckolib, handSuffixes, meshSwap };
}

function build(inst, { geo, texture }) {
  const bytes = inst.resource(geo);
  const png = firstFrame(inst.resource(texture));
  if (!bytes || !png) return null;
  const model = readGeo(JSON.parse(strFromU8(bytes).replace(/^﻿/, '')));
  const g = bakeParts(model.parts, { width: model.texWidth ?? png.width, height: model.texHeight ?? png.height });
  // glb.mjs space is Bedrock with Z negated; GeckoLib's is Bedrock with X negated: half a turn about Y.
  const point = i => [(-g.positions[i] + 0.5) * 16, (g.positions[i + 1] + 0.51) * 16, (-g.positions[i + 2] + 0.5) * 16];
  const quads = [];
  for (let k = 0; k < g.indices.length; k += 3) {
    const tri = [g.indices[k], g.indices[k + 1], g.indices[k + 2]];
    quads.push({ texture, points: tri.map(i => point(i * 3)), uvs: tri.map(i => [g.uvs[i * 2], g.uvs[i * 2 + 1]]) });
  }
  return { quads, textures: { [texture]: png }, geo };
}
