// Class lookup across jars for the model interpreter. Each jar's classes are inflated on first use.
import fs from 'node:fs';
import { unzipSync } from 'fflate';

export function classPath(jars) {
  const index = new Map();          // class name → jar path, filled per jar on demand
  const loaded = new Map();         // jar path → { name: bytes }
  const names = new Map();          // jar path → Set of class names (from the central directory)
  for (const jar of jars) {
    const set = new Set();
    unzipSync(fs.readFileSync(jar), { filter: e => { if (e.name.endsWith('.class')) set.add(e.name.slice(0, -6)); return false; } });
    names.set(jar, set);
    for (const name of set) if (!index.has(name)) index.set(name, jar);
  }
  const lookup = name => {
    const jar = index.get(name);
    if (!jar) return null;
    if (!loaded.has(jar)) loaded.set(jar, unzipSync(fs.readFileSync(jar), { filter: e => e.name.endsWith('.class') }));
    return loaded.get(jar)[`${name}.class`] ?? null;
  };
  lookup.has = name => index.has(name);
  lookup.jarOf = name => index.get(name);
  lookup.classesIn = jar => names.get(jar) ?? new Set();
  return lookup;
}
