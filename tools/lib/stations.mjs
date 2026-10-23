import fs from 'node:fs';
import path from 'node:path';
import { validate, lineOfPointer } from './validate.mjs';
import { jsonErrorLine } from './diagnostics.mjs';

// Loads site/stations/*.json into a Map of name -> { data }. A recipe type claimed by two stations is an error.
export function loadStations(root, diag) {
  const dir = path.join(root, 'site/stations');
  const stations = new Map();
  const claimed = new Map();
  if (!fs.existsSync(dir)) return stations;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
    const rel = `site/stations/${file}`;
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      diag.error(rel, jsonErrorLine(error, text), `Invalid JSON: ${error.message}`);
      continue;
    }
    const problems = validate('station', data, root);
    for (const p of problems) diag.error(rel, lineOfPointer(text, p.pointer), p.message);
    if (!data.flow && !(data.size && data.inputs && data.outputs)) {
      diag.error(rel, 1, 'needs "size", "inputs" and "outputs" (or "flow": true for an automatic layout)');
      continue;
    }
    if (problems.length) continue;
    const name = file.replace(/\.json$/, '');
    for (const type of Object.keys(data.recipes)) {
      if (claimed.has(type)) diag.error(rel, lineOfPointer(text, `/recipes/${type}`), `Recipe type ${type} is already shown by site/stations/${claimed.get(type)}.json`);
      else claimed.set(type, name);
    }
    stations.set(name, { data });
  }
  return stations;
}
