// Drafts tools/models/mobs.json entries by reading how each mod wires its entities to renderers.
//   node tools/models/discover.mjs ns:entity [ns:entity …]      prints draft entries as JSON
//
// It follows the mod's own registrations in bytecode: the entity type field assigned after the id string,
// registerEntityRenderer(field, Renderer::new), what the renderer constructs (a GeckoLib model, a
// ModelRenderer-style model, or a layer baked from a LayerDefinition method), and the texture strings it
// holds. The result is a starting point: check every entry with `npm run models -- --only <id>`.
import { openInstance } from '../lib/models/instance.mjs';
import { readClass } from '../lib/classfile.mjs';

const ids = process.argv.slice(2);
const inst = openInstance();
const cp = inst.classPath;
const parsed = new Map();
const klass = name => {
  if (!parsed.has(name)) { const b = cp(name); let c = null; try { c = b && readClass(b); } catch { /* not a class we can read */ } parsed.set(name, c); }
  return parsed.get(name);
};
const name = n => inst.rename(n);
const superChain = cls => { const out = []; for (let c = cls, d = 0; c && d < 12; d++) { out.push(c); c = klass(c)?.superName; } return out; };

const out = {};
const byNs = new Map();
for (const id of ids) { const ns = id.split(':')[0]; if (!byNs.has(ns)) byNs.set(ns, []); byNs.get(ns).push(id); }

for (const [ns, list] of byNs) {
  const jars = inst.jarsFor(ns);
  const classes = jars.flatMap(j => [...cp.classesIn(j)]).map(klass).filter(Boolean);
  // 1. entity type fields → ids
  const fieldId = new Map();
  for (const c of classes) for (const m of c.methods) {
    let last = null;
    for (const ins of m.code) {
      if (ins.op === 'ldc' && typeof ins.string === 'string' && /^[a-z0-9_]+$/.test(ins.string)) last = ins.string;
      else if (ins.op === 'putstatic' && last && /RegistryObject|EntityType|Supplier|Holder/.test(ins.desc)) { fieldId.set(`${ins.owner}.${ins.name}`, last); last = null; }
    }
  }
  // 2. renderer registrations
  const rendererOf = new Map();
  for (const c of classes) for (const m of c.methods) {
    let field = null, lambda = null;
    for (const ins of m.code) {
      if (ins.op === 'getstatic' && fieldId.has(`${ins.owner}.${ins.name}`)) { field = fieldId.get(`${ins.owner}.${ins.name}`); lambda = null; }
      else if (ins.op === 'invokedynamic') lambda = c.bootstrap[ins.bootstrap];
      else if (ins.op === 'invoke' && /^(registerEntityRenderer|register)$/.test(name(ins.name)) && field && lambda) {
        let renderer = lambda.name === '<init>' ? lambda.owner : null;
        if (!renderer) {
          const body = klass(lambda.owner)?.methods.find(mm => mm.name === lambda.name);
          renderer = body?.code.find(i => i.op === 'invoke' && i.name === '<init>' && /Render/i.test(i.owner))?.owner ?? null;
        }
        if (renderer && !rendererOf.has(field)) rendererOf.set(field, renderer);
        field = lambda = null;
      }
    }
  }
  // 3. layer locations → LayerDefinition methods
  const layerMethod = new Map();
  for (const c of classes) for (const m of c.methods) {
    let loc = null;
    for (const ins of m.code) {
      if (ins.op === 'getstatic' && /ModelLayerLocation/.test(ins.desc)) loc = `${ins.owner}.${ins.name}`;
      else if (ins.op === 'invokedynamic' && loc) {
        const h = c.bootstrap[ins.bootstrap];
        if (h && /LayerDefinition/.test(h.desc ?? '')) layerMethod.set(loc, `${h.owner}.${name(h.name)}`);
        else if (h) { const inner = klass(h.owner)?.methods.find(mm => mm.name === h.name); const call = inner?.code.find(i => i.op === 'invoke' && /LayerDefinition;$/.test(i.desc)); if (call) layerMethod.set(loc, `${call.owner}.${name(call.name)}`); }
        loc = null;
      }
    }
  }

  for (const id of list) {
    const path = id.split(':')[1];
    const entry = {};
    let renderer = rendererOf.get(path);
    const flat = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!renderer) {
      // Fall back to a renderer whose name matches the entity's.
      const want = flat(path);
      renderer = classes.find(c => /Render/.test(c.name) && flat(c.name.split('/').pop().replace(/Renderer|Render|Entity/g, '')) === want)?.name;
      if (renderer) entry.$note = 'renderer matched by name';
    }
    if (!renderer) { out[id] = { $note: 'no renderer found' }; continue; }
    entry.$renderer = renderer;
    const strings = new Set(), news = [], layers = [];
    for (const cls of superChain(renderer).filter(c => cp.has(c) && !c.startsWith('net/minecraft/'))) {
      const k = klass(cls);
      for (const s of k.strings) strings.add(s);
      for (const m of k.methods) for (const ins of m.code) {
        if (ins.op === 'invoke' && ins.name === '<init>' && ins.owner !== cls && cp.has(ins.owner)) news.push(ins.owner);
        if (ins.op === 'getstatic' && /ModelLayerLocation/.test(ins.desc)) layers.push(`${ins.owner}.${ins.name}`);
      }
    }
    const model = news.find(n => superChain(n).some(s => /Model|GeoModel/.test(s.split('/').pop()) && !/Renderer/.test(s)) && !/Layer|Renderer/.test(n.split('/').pop()));
    const chain = model ? superChain(model) : [];
    if (model) for (const s of klass(model).strings) strings.add(s);
    if (chain.some(s => /geckolib|azurelib/i.test(s))) {
      const geo = [...strings].find(s => /\.geo\.json$/.test(s));
      const base = [...strings].find(s => /^[a-z0-9_]+$/.test(s) && s !== ns);
      entry.geo = geo ? res(ns, geo) : base && `${ns}:geo/entity/${base}.geo.json`;
      const anim = [...strings].find(s => /\.animation\.json$/.test(s));
      entry.animation = anim ? res(ns, anim) : base && `${ns}:animations/entity/${base}.animation.json`;
    } else if (chain.some(s => /AdvancedEntityModel|AdvancedModelBase|MowzieEntityModel|BasicEntityModel/.test(s))) {
      entry.boxes = model;
    } else if (model) {
      const own = layers.map(l => layerMethod.get(l)).find(Boolean);
      const statics = klass(model).methods.filter(m => /LayerDefinition;$/.test(m.desc) && (m.access & 8)).map(m => `${model}.${name(m.name)}`);
      entry.layer = own ?? statics[0] ?? `?${model}`;
      if (layers.some(l => l.startsWith('net/minecraft/'))) entry.$vanillaLayers = layers.filter(l => l.startsWith('net/minecraft/'));
    }
    const pngs = [...strings].filter(s => /\.png$/.test(s)).map(s => res(ns, s));
    const guess = inst.list(ns, /textures\/.*\.png$/).filter(t => flat(t.split('/').pop()).includes(flat(path).slice(0, 6)));
    const candidates = [...new Set([...pngs, ...guess])].filter(p => inst.resource(p));
    entry.texture = candidates.sort((a, b) => textureScore(b, path) - textureScore(a, path))[0] ?? null;
    entry.$textures = candidates.slice(0, 8);
    out[id] = entry;
  }
}
console.log(JSON.stringify(out, null, 2));

// Prefers the plain body texture named after the entity over overlays, glow maps and GUI art.
function textureScore(res, entity) {
  const file = res.split('/').pop().replace('.png', '');
  const flat = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let score = 0;
  if (flat(file) === flat(entity)) score += 10;
  else if (flat(file).includes(flat(entity))) score += 5;
  if (/textures\/(entity|entities|mobs?|models)\//.test(res)) score += 3;
  if (/crack|glow|eyes?\b|_eye|emissive|overlay|layer|_bar|gui|\/item\/|particle|spawn_egg|saddle|armor|charge|sleeping|shield|projectile|_angry|_hurt|_dead|_open|_closed/.test(res)) score -= 6;
  if (/_0$|_idle_0$/.test(file)) score += 1;
  return score - file.length / 100;
}

function res(ns, s) {
  if (s.includes(':')) return s;
  return `${ns}:${s.replace(/^assets\/[^/]+\//, '')}`;
}
