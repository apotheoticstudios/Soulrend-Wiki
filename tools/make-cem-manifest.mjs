// Which resource pack supplies each custom entity model (OptiFine CEM / EMF .jem) the game applies:
// the texture manifest's pack stack -> game-data/cem-models.json. Run `npm run textures` first.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync, strFromU8 } from 'fflate';
import { parseLoose } from './lib/models/cem.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : fallback; };
const instance = arg('instance', path.join(os.homedir(), 'Documents/curseforge/minecraft/Instances/Soulrend-Development'));
const textures = JSON.parse(fs.readFileSync(path.join(ROOT, 'game-data/texture-manifest.json'), 'utf8'));
const mobs = JSON.parse(fs.readFileSync(path.join(ROOT, 'game-data/mobs.json'), 'utf8'));

// assets/<ns>/optifine/cem/<name>.jem and assets/<ns>/emf/cem/<name>.jem; EMF's modded entities live under
// assets/minecraft/emf/cem/modded/<modid>/<name>.jem. Pack roots only: versioned overlay folders (21-5/…)
// aren't read by 1.20.1.
const CEM = /^assets\/([^/]+)\/(optifine|emf)\/cem\/(.+)\.(jem|jpm|properties)$/;

// Entity ids the jem names don't spell: the model's class name instead of the entity's.
const ALIASES = {
  'cataclysm:ignited_berserker_model': 'cataclysm:ignited_berserker',
  'cataclysm:draugr_model': 'cataclysm:draugr',
  'cataclysm:royal_draugr_model': 'cataclysm:royal_draugr',
  'cataclysm:elite_draugr_model': 'cataclysm:elite_draugr',
  'cataclysm:aptrgangr_model': 'cataclysm:aptrgangr',
  'cataclysm:netherite_ministrosity_model': 'cataclysm:netherite_ministrosity',
};

// Per pack: every cem file (name -> bytes of .jem, .jpm, .properties paths) in stack order.
const packs = [];
textures.sources.forEach((src, index) => {
  if (!['zip', 'folder'].includes(src.kind)) return;
  const where = path.join(instance, src.where);
  const files = new Map();
  if (src.kind === 'zip') {
    const got = unzipSync(fs.readFileSync(where), { filter: e => CEM.test(e.name) });
    for (const [name, bytes] of Object.entries(got)) files.set(name, bytes);
  } else {
    const walk = rel => {
      for (const ent of fs.readdirSync(path.join(where, rel), { withFileTypes: true })) {
        const next = `${rel}/${ent.name}`;
        if (ent.isDirectory()) walk(next);
        else if (CEM.test(next)) files.set(next, fs.readFileSync(path.join(where, next)));
      }
    };
    if (fs.existsSync(path.join(where, 'assets'))) walk('assets');
  }
  if (files.size) packs.push({ index, id: src.id, files });
});

// A file a model names (.jpm) resolves through the whole stack like any resource, highest pack first.
const stackFile = file => { for (const pack of [...packs].reverse()) if (pack.files.has(file)) return { pack, bytes: pack.files.get(file) }; return null; };

const entityOf = (ns, dir, rest) => {
  const modded = /^modded\/([^/]+)\/(.+)$/.exec(rest);
  if (modded) return { ns: modded[1], name: modded[2] };
  return { ns, name: rest };
};
// zombie2 and zombie_baby are variants of zombie: a trailing number, or a known state suffix.
const baseName = name => name.replace(/\d+$/, '').replace(/_(baby|saddle|charge|armor|harness|ropes)$/, '');

const models = {};
for (const pack of packs) {
  for (const [file, bytes] of pack.files) {
    const m = CEM.exec(file);
    if (m[4] !== 'jem') continue;
    const { ns, name } = entityOf(m[1], m[2], m[3]);
    const key = `${ns}:${name}`;
    const jem = (() => { try { return parseLoose(strFromU8(bytes)); } catch (e) { return { parseError: e.message }; } })();
    const dir = file.slice(0, file.lastIndexOf('/') + 1);
    const jpms = [...new Set((function names(list) { return list.flatMap(x => [x.model, ...names([...(x.submodel ? [x.submodel] : []), ...(x.submodels ?? [])])]); })(jem.models ?? []).filter(Boolean))];
    const jpmFiles = jpms.map(j => {
      const found = stackFile(dir + j);
      return found ? { file: j, ...(found.pack === pack ? {} : { source: found.pack.id }), ...jpmSummary(found.bytes) } : { file: j, missing: true };
    });
    const entry = {
      source: pack.index,
      file,
      dir: m[2],
      properties: pack.files.has(file.replace(/\.jem$/, '.properties')) ? file.replace(/\.jem$/, '.properties') : undefined,
      textureSize: jem.textureSize,
      credit: jem.credit,
      parseError: jem.parseError,
      parts: (jem.models ?? []).filter(x => x.part).map(x => x.part),
      geometryInJpm: jpmFiles.some(j => j.boxes),
      jpm: jpmFiles.length ? jpmFiles : undefined,
      animations: /"animations"\s*:/.test(strFromU8(bytes)) || jpmFiles.some(j => j.animations),
    };
    ((models[key] ??= []).push(entry));
  }
}

// Entity models: the highest-priority pack wins; one pack with the same name under both optifine/ and emf/
// keeps both (which EMF prefers isn't known, optifine/ is taken).
const out = {};
for (const [key, list] of Object.entries(models)) {
  list.sort((a, b) => b.source - a.source || (a.dir === 'optifine' ? -1 : 1));
  const [win, ...under] = list;
  const { source, ...rest } = win;
  out[key] = {
    source: textures.sources[source].id,
    sourceIndex: source,
    ...rest,
    shadowed: under.length ? under.map(u => ({ source: textures.sources[u.source].id, file: u.file })) : undefined,
    mob: ALIASES[key] ?? (mobs[key] ? key : undefined),
  };
}
// Variants of an entity's model (zombie2, zombie_baby, …) beside it.
const byBase = {};
for (const key of Object.keys(out)) {
  const [ns, name] = key.split(':');
  (byBase[`${ns}:${baseName(name)}`] ??= []).push(key);
}
for (const [base, keys] of Object.entries(byBase)) {
  const variants = keys.filter(k => k !== base);
  if (out[base] && variants.length) out[base].variants = variants;
}

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
const result = {
  $comment: 'Custom entity models (OptiFine CEM .jem files that Entity Model Features applies) per entity, from the pack stack in texture-manifest.json. Generated by tools/make-cem-manifest.mjs (npm run cem).',
  $fields: {
    source: 'id (and sourceIndex into texture-manifest.json sources) of the highest-priority pack that has the model',
    file: 'path inside that pack', dir: 'optifine or emf', properties: 'the .properties file beside it (which entities/textures it applies to, if any)',
    textureSize: 'the jem\'s texture size', parts: 'vanilla part names the model entries replace',
    geometryInJpm: 'boxes live in .jpm part files rather than the .jem', jpm: 'part files it names, with box and animation counts',
    animations: 'whether expression animations exist (they are not evaluated by the wiki)', shadowed: 'lower-priority packs with the same model',
    variants: 'other models of the same entity (numbered skins, _baby, _saddle, …)',
    mob: 'the wiki entity id (game-data/mobs.json) this model belongs to, when there is one',
  },
  counts: { models: Object.keys(sorted).length, withMob: Object.values(sorted).filter(m => m.mob).length, packs: packs.map(p => p.id) },
  models: sorted,
};
fs.writeFileSync(path.join(ROOT, 'game-data/cem-models.json'), JSON.stringify(result, null, 1));
console.log(`${result.counts.models} custom entity models from ${packs.length} packs, ${result.counts.withMob} for wiki mobs`);

function jpmSummary(bytes) {
  try {
    const j = parseLoose(strFromU8(bytes));
    const count = x => (x.boxes?.length ?? 0) + [...(x.submodel ? [x.submodel] : []), ...(x.submodels ?? [])].reduce((n, s) => n + count(s), 0);
    const boxes = count(j) + (j.models ?? []).reduce((n, x) => n + count(x), 0);
    return { boxes, animations: (j.animations ?? []).length || undefined };
  } catch (e) { return { parseError: e.message }; }
}
