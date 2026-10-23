import path from 'node:path';
import Ajv from 'ajv';
import { readJson } from './fsutil.mjs';

const ajv = new Ajv({ allErrors: true, strict: false });
const cache = new Map();

function validator(schemaName, root) {
  if (!cache.has(schemaName)) {
    cache.set(schemaName, ajv.compile(readJson(path.join(root, 'site/schemas', `${schemaName}.schema.json`))));
  }
  return cache.get(schemaName);
}

// Returns a list of { pointer, message } describing why `data` doesn't match the schema; empty when valid.
export function validate(schemaName, data, root) {
  const check = validator(schemaName, root);
  if (check(data)) return [];
  return dedupe(check.errors).map(e => {
    const extra = e.params?.additionalProperty ? ` "${e.params.additionalProperty}"` : '';
    const allowed = e.params?.allowedValues ? ` (${e.params.allowedValues.join(', ')})` : '';
    return { pointer: e.instancePath || '/', message: `${e.instancePath || '(top level)'} ${e.message}${extra}${allowed}` };
  });
}

// anyOf failures report every branch; keep only the first branch's message at that location.
function dedupe(errors) {
  const anyOfPaths = new Set(errors.filter(e => e.keyword === 'anyOf').map(e => e.instancePath));
  const seen = new Set();
  return errors.filter(e => {
    if (e.keyword === 'anyOf') return false;
    const key = anyOfPaths.has(e.instancePath) ? e.instancePath : e.instancePath + e.keyword;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Best-effort line for a JSON pointer: the first line mentioning its last key.
export function lineOfPointer(text, pointer, firstLine = 1) {
  const key = pointer.split('/').filter(s => s && !/^\d+$/.test(s)).pop();
  if (!key) return firstLine;
  const index = text.split('\n').findIndex(line => line.includes(`"${key}"`));
  return index < 0 ? firstLine : firstLine + index;
}
