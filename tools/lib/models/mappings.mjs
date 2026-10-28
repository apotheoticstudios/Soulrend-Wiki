// SRG → official member names for Minecraft 1.20.1, so model code reads as `addOrReplaceChild` instead of
// `m_171599_`. Forge's install keeps both halves: Mojang's official mappings (official → obfuscated) and
// MCP config's tsrg2 (obfuscated → SRG). Joining them on the obfuscated name gives SRG → official.
import fs from 'node:fs';

const PRIMITIVE = { void: 'V', boolean: 'Z', byte: 'B', char: 'C', short: 'S', int: 'I', long: 'J', float: 'F', double: 'D' };

export function readMappings(officialFile, tsrgFile) {
  const official = fs.readFileSync(officialFile, 'utf8').split('\n');
  const toObf = new Map();
  for (const line of official) {
    const m = /^(\S+) -> (\S+):$/.exec(line);
    if (m) toObf.set(m[1].replaceAll('.', '/'), m[2].replaceAll('.', '/'));
  }
  const obfType = type => {
    let dims = '';
    while (type.endsWith('[]')) { dims += '['; type = type.slice(0, -2); }
    if (PRIMITIVE[type]) return dims + PRIMITIVE[type];
    const name = type.replaceAll('.', '/');
    return `${dims}L${toObf.get(name) ?? name};`;
  };

  // obfuscated class → { fields: obf → name, methods: obf+desc → name }
  const names = new Map();
  let current = null;
  for (const line of official) {
    if (!line.startsWith(' ')) {
      const m = /^(\S+) -> (\S+):$/.exec(line);
      current = m ? { fields: new Map(), methods: new Map() } : null;
      if (m) names.set(m[2].replaceAll('.', '/'), current);
      continue;
    }
    if (!current) continue;
    const method = /^\s+(?:\d+:\d+:)?(\S+) ([^\s(]+)\(([^)]*)\) -> (\S+)$/.exec(line);
    if (method) {
      const [, ret, name, params, obf] = method;
      const desc = `(${params ? params.split(',').map(obfType).join('') : ''})${obfType(ret)}`;
      current.methods.set(obf + desc, name);
      continue;
    }
    const field = /^\s+\S+ (\S+) -> (\S+)$/.exec(line);
    if (field) current.fields.set(field[2], field[1]);
  }

  const srg = new Map();
  let cls = null;
  for (const line of fs.readFileSync(tsrgFile, 'utf8').split('\n')) {
    if (!line.startsWith('\t')) { cls = names.get(line.split(' ')[0]) ?? null; continue; }
    if (!cls || line.startsWith('\t\t')) continue;
    const parts = line.trim().split(' ');
    if (parts.length === 2 && parts[1].startsWith('f_')) {
      const name = cls.fields.get(parts[0]);
      if (name) srg.set(parts[1], name);
    } else if (parts.length === 3 && parts[2].startsWith('m_')) {
      const name = cls.methods.get(parts[0] + parts[1]);
      if (name) srg.set(parts[2], name);
    }
  }
  return srg;
}
