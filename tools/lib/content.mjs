import fs from 'node:fs';
import path from 'node:path';
import { walk } from './fsutil.mjs';
import { parseFrontmatter } from './frontmatter.mjs';
import { validate, lineOfPointer } from './validate.mjs';
import { ContentError, jsonErrorLine } from './diagnostics.mjs';
import { LAYOUT_DEFAULTS } from './themes.mjs';
import { normalizePath } from '../../src/render/context.js';

// Loads and validates site/site.json, filling in defaults. Returns null if it can't be used.
export function loadSite(root, diag) {
  const rel = 'site/site.json';
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    diag.error(rel, jsonErrorLine(error, text), `Invalid JSON: ${error.message}`);
    return null;
  }
  const problems = validate('site', data, root);
  for (const p of problems) diag.error(rel, lineOfPointer(text, p.pointer), p.message);
  if (problems.length) return null;
  return {
    ...data,
    defaultMode: data.defaultMode ?? 'system',
    iconSize: data.iconSize ?? 32,
    layout: { ...LAYOUT_DEFAULTS, ...data.layout },
  };
}

// Reads every content/**/*.md page. Files or folders starting with "_" are drafts, built only in dev.
export function loadPages(root, diag, { drafts }) {
  const contentDir = path.join(root, 'content');
  const pages = [];
  const byPath = new Map();
  for (const file of walk(contentDir, f => f.endsWith('.md'))) {
    const rel = path.relative(root, file).split(path.sep).join('/');
    const relContent = path.relative(contentDir, file).split(path.sep).join('/');
    const draft = relContent.split('/').some(segment => segment.startsWith('_'));
    if (draft && !drafts) continue;

    const source = fs.readFileSync(file, 'utf8');
    let parsed;
    try {
      parsed = parseFrontmatter(source, rel);
    } catch (error) {
      if (!(error instanceof ContentError)) throw error;
      diag.error(error.file, error.line, error.message);
      continue;
    }
    const problems = validate('page', parsed.data, root);
    for (const p of problems) diag.error(rel, lineOfPointer(source, p.pointer), p.message);
    if (typeof parsed.data.title !== 'string') continue;
    // Drop the header fields that failed validation so the rest of the page still renders.
    for (const p of problems) {
      const field = p.pointer.split('/')[1];
      if (field && field !== 'title') delete parsed.data[field];
    }

    const pagePath = normalizePath(relContent);
    if (byPath.has(pagePath)) {
      diag.error(rel, 1, `Same URL (/${pagePath}) as ${byPath.get(pagePath).file}`);
      continue;
    }
    const data = parsed.data;
    const page = {
      file: rel,
      path: pagePath,
      data,
      title: data.title,
      body: parsed.body,
      bodyLine: parsed.bodyLine,
      draft,
      hidden: !!data.hidden || draft,
      icon: data.icon ?? data.items?.[0] ?? data.infobox?.item ?? null,
    };
    byPath.set(pagePath, page);
    pages.push(page);
  }
  return pages;
}
