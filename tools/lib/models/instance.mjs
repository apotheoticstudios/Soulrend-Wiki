// The modpack instance as the model tools see it: which jar holds which assets namespace, a class path
// over every jar (plus the SRG-named client and JOML from Forge's libraries), and SRG → official names.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { unzipSync } from 'fflate';
import { classPath } from './classpath.mjs';
import { readMappings } from './mappings.mjs';

const CURSEFORGE = path.join(os.homedir(), 'Documents/curseforge/minecraft');
const MC = '1.20.1-20230612.114412';

// packs: resource packs from the instance's resourcepacks/ that override jar assets, highest priority
// first, as { file, namespaces?, prefix? } (only those namespaces, only paths under prefix).
export function openInstance(instance = path.join(CURSEFORGE, 'Instances/Soulrend-Development'), { packs = [] } = {}) {
  const libraries = path.join(CURSEFORGE, 'Install/libraries');
  const clientSrg = path.join(libraries, `net/minecraft/client/${MC}/client-${MC}-srg.jar`);
  const vanilla = path.join(CURSEFORGE, 'Install/versions/1.20.1/1.20.1.jar');
  const joml = path.join(libraries, 'org/joml/joml/1.10.5/joml-1.10.5.jar');
  const mods = fs.readdirSync(path.join(instance, 'mods')).filter(f => f.endsWith('.jar')).map(f => path.join(instance, 'mods', f));

  // assets/<ns>/… and data/<ns>/… → jars, from the central directories only (nothing is inflated).
  const byNamespace = new Map();
  const entries = new Map();
  for (const jar of [vanilla, ...mods]) {
    const names = new Set();
    unzipSync(fs.readFileSync(jar), { filter: e => { names.add(e.name); return false; } });
    entries.set(jar, names);
    for (const name of names) {
      const m = /^assets\/([^/]+)\//.exec(name);
      if (!m) continue;
      if (!byNamespace.has(m[1])) byNamespace.set(m[1], new Set());
      byNamespace.get(m[1]).add(jar);
    }
  }
  const overrides = packs.map(pack => {
    const zip = path.join(instance, 'resourcepacks', pack.file);
    if (!fs.existsSync(zip)) throw new Error(`resource pack not found: ${zip}`);
    const names = new Set();
    unzipSync(fs.readFileSync(zip), { filter: e => { names.add(e.name); return false; } });
    return { ...pack, zip, names };
  });
  const cache = new Map();
  // "ns:path" → bytes of assets/ns/path, from the first pack that covers it, else whichever jar has it.
  const resource = id => {
    const [ns, rel] = id.includes(':') ? id.split(':') : ['minecraft', id];
    const file = `assets/${ns}/${rel}`;
    for (const pack of overrides) {
      if (pack.namespaces && !pack.namespaces.includes(ns)) continue;
      if (pack.prefix && !rel.startsWith(pack.prefix)) continue;
      if (!pack.names.has(file)) continue;
      const key = `${pack.zip}!${file}`;
      if (!cache.has(key)) cache.set(key, unzipSync(fs.readFileSync(pack.zip), { filter: e => e.name === file })[file]);
      return cache.get(key);
    }
    for (const jar of byNamespace.get(ns) ?? []) {
      if (!entries.get(jar).has(file)) continue;
      const key = `${jar}!${file}`;
      if (!cache.has(key)) cache.set(key, unzipSync(fs.readFileSync(jar), { filter: e => e.name === file })[file]);
      return cache.get(key);
    }
    return null;
  };
  // Every file under assets/<ns>/ matching a pattern, for discovery.
  const list = (ns, re) => [...(byNamespace.get(ns) ?? [])].flatMap(jar => [...entries.get(jar)].filter(n => n.startsWith(`assets/${ns}/`) && re.test(n)).map(n => `${ns}:${n.slice(`assets/${ns}/`.length)}`));

  let mappings, classes;
  return {
    instance, mods, resource, list,
    jarsFor: ns => [...(byNamespace.get(ns) ?? [])],
    get mappings() {
      mappings ??= readMappings(path.join(libraries, `net/minecraft/client/${MC}/client-${MC}-mappings.txt`),
        path.join(libraries, `de/oceanlabs/mcp/mcp_config/${MC}/mcp_config-${MC}-mappings-merged.txt`));
      return mappings;
    },
    get classPath() {
      classes ??= classPath([clientSrg, joml, ...mods]);
      return classes;
    },
    rename(name) { return this.mappings.get(name) ?? name; },
  };
}
