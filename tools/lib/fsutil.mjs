import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export function walk(dir, filter = () => true) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out.sort();
}

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function writeFile(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
}

export function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

export function copyDir(from, to, filter = () => true) {
  for (const file of walk(from)) {
    const rel = path.relative(from, file);
    if (filter(rel)) copyFile(file, path.join(to, rel));
  }
}

export function hash(...parts) {
  const h = crypto.createHash('sha256');
  for (const part of parts) h.update(part);
  return h.digest('hex').slice(0, 10);
}

export function hashFiles(files) {
  return hash(...files.flatMap(f => [f, fs.readFileSync(f)]));
}
