// Builds the wiki into dist/: validates config and pages, renders every page to HTML,
// packs the icon atlas, writes the search index and copies the browser app.
//   node tools/build.mjs                  production build into dist/ (exit code 1 on any error)
//   node tools/build.mjs --dev --out X    dev build: includes _draft pages, adds live reload
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Diagnostics } from './lib/diagnostics.mjs';
import { walk, readJson, writeFile, copyFile, copyDir, hash, hashFiles } from './lib/fsutil.mjs';
import { loadSite, loadPages } from './lib/content.mjs';
import { loadThemes, layoutCss, themeCss, applyBreakpoints } from './lib/themes.mjs';
import { loadGameData } from './lib/gamedata.mjs';
import { loadStations } from './lib/stations.mjs';
import { Atlas, ATLAS_COLUMNS } from './lib/atlas.mjs';
import { buildSearchIndex } from './lib/search-index.mjs';
import { createContext, rootFor } from '../src/render/context.js';
import { renderPage } from '../src/render/page.js';
import { pageItemData } from '../src/render/items.js';
import { buildNav, navHtml } from '../src/render/nav.js';
import { layoutHtml } from '../src/render/layout.js';
import { esc } from '../src/render/html.js';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLE_FILES = ['base.css', 'layout.css', 'prose.css', 'components.css', 'search.css'];
const VENDOR = [
  ['minisearch/dist/es/index.js', 'vendor/minisearch.js'],
  ['three/build/three.module.js', 'vendor/three/three.module.js'],
  ['three/build/three.core.js', 'vendor/three/three.core.js'],
  ['three/examples/jsm/loaders/GLTFLoader.js', 'vendor/three/addons/loaders/GLTFLoader.js'],
  ['three/examples/jsm/controls/OrbitControls.js', 'vendor/three/addons/controls/OrbitControls.js'],
  ['three/examples/jsm/utils/BufferGeometryUtils.js', 'vendor/three/addons/utils/BufferGeometryUtils.js'],
  ['three/examples/jsm/utils/SkeletonUtils.js', 'vendor/three/addons/utils/SkeletonUtils.js'],
];

export async function build({ dev = false, out = path.join(ROOT, 'dist') } = {}) {
  const started = performance.now();
  const diag = new Diagnostics();
  const site = loadSite(ROOT, diag);
  if (!site) return { diag, ms: performance.now() - started };

  const themes = loadThemes(ROOT, diag);
  if (!themes.some(t => t.id === site.defaultStyle)) {
    diag.error('site/site.json', null, `defaultStyle "${site.defaultStyle}" has no site/themes/${site.defaultStyle}.json`);
  }
  const game = loadGameData(ROOT, diag);
  const stations = loadStations(ROOT, diag);
  if (!game.present) diag.warn('game-data/items.json', null, 'Not found: item names are guessed from ids. Run `npm run sync-game` after exporting from the game.');

  const atlas = new Atlas(game.iconDir, site.iconSize);
  const pages = loadPages(ROOT, diag, { drafts: dev });
  for (const page of pages) if (page.icon) atlas.place(page.icon);
  const ctx = createContext({ site, pages, game, atlas, stations, diag });
  const nav = buildNav(site, pages, atlas, diag);

  const rendered = pages.map(page => ({ page, ...renderPage(page, ctx) }));
  const footers = new Map();
  const footerFor = root => {
    if (!site.footer) return '';
    if (!footers.has(root)) {
      const env = { page: { file: 'site/site.json', path: '' }, ctx, root, bodyLine: 0, headings: [], usedItems: new Set() };
      footers.set(root, ctx.md.render(site.footer, env));
    }
    return footers.get(root);
  };
  const searchJson = buildSearchIndex(rendered, ctx);

  // Write into a temporary folder and swap it in, so the dev server never serves a half-built site.
  const tmp = out + '.tmp';
  fs.rmSync(tmp, { recursive: true, force: true });

  const atlasPng = atlas.pack();
  const atlasFile = atlasPng ? `atlas.${hash(atlasPng)}.png` : null;
  if (atlasPng) writeFile(path.join(tmp, '_app', atlasFile), atlasPng);
  const searchFile = `_app/search.${hash(searchJson)}.json`;
  writeFile(path.join(tmp, searchFile), searchJson);
  const app = writeApp(tmp, site, themes, atlasFile, game);

  // Link previews (Discord, social sites) need a standalone absolute image URL, so only with site.url.
  const ogImages = new Map();
  if (site.url) {
    for (const r of rendered) {
      const id = r.page.icon;
      if (!id || ogImages.has(id)) continue;
      const png = atlas.scaled(id, 128);
      if (!png) continue;
      const file = `_app/preview/${id.replace(':', '/')}.${hash(png)}.png`;
      writeFile(path.join(tmp, file), png);
      ogImages.set(id, file);
    }
  }

  for (const r of rendered) {
    const root = rootFor(r.page.path);
    writeFile(path.join(tmp, r.page.path, 'index.html'), layoutHtml({
      site, themes, app, root,
      page: r.page,
      rendered: r,
      navHtml: navHtml(nav, r.page, root),
      footerHtml: footerFor(root),
      pageItems: pageItemData(r.env, ctx),
      searchIndex: searchFile,
      ogImage: ogImages.get(r.page.icon) ?? null,
      devScript: dev ? '<script type="module" src="/__dev/client.js"></script>' : null,
    }));
  }
  write404(tmp, { site, themes, app, nav, searchFile, footerFor, dev });
  if (site.url) writeSitemap(tmp, site, rendered);
  // Like draft pages, assets in "_" folders (test models, work in progress) only ship in dev builds.
  copyDir(path.join(ROOT, 'assets'), path.join(tmp, 'assets'), rel => dev || !rel.split(path.sep).some(s => s.startsWith('_')));
  // Standalone tools ship as-is under /dev-tools/, outside the wiki's pages.
  copyDir(path.join(ROOT, 'dev-tools'), path.join(tmp, 'dev-tools'));

  fs.rmSync(out, { recursive: true, force: true });
  fs.renameSync(tmp, out);

  if (game.present && atlas.missing.size) {
    const sample = [...atlas.missing].slice(0, 5).join(', ');
    diag.warn('game-data/icons', null, `${atlas.missing.size} item${atlas.missing.size === 1 ? ' has' : 's have'} no icon (${sample}${atlas.missing.size > 5 ? ', …' : ''}). Rendered icons from the in-game export fill these in.`);
  }
  for (const id of atlas.broken) diag.warn(`game-data/icons/${id.replace(':', '/')}.png`, null, `Unreadable PNG for ${id}`);
  return { diag, pages: rendered.length, icons: atlas.order.length, source: game.source, ms: performance.now() - started };
}

// Styles, client scripts, fonts and libraries go in _app/<hash>/; the hash changes whenever any of them
// do, so browsers can cache them forever.
function writeApp(out, site, themes, atlasFile, game) {
  let css = layoutCss(site.layout);
  css += STYLE_FILES.map(f => fs.readFileSync(path.join(ROOT, 'src/styles', f), 'utf8')).join('\n');
  css += `\n/* ---- themes (generated from site/themes) ---- */\n${themeCss(themes)}`;
  css += `\n:root { --atlas-columns: ${ATLAS_COLUMNS}; --icon-source: ${site.iconSize}px; }\n`;
  if (atlasFile) css += `.mc-icon:not(.missing) { background-image: url("../${atlasFile}"); }\n`;
  css += glyphCss(game.glyphs);
  css = applyBreakpoints(css, site.layout.mobileBreakpoint);

  const sources = [...walk(path.join(ROOT, 'src/client')), ...walk(path.join(ROOT, 'src/shared')), ...walk(path.join(ROOT, 'src/fonts')), ...walk(game.glyphDir),
    ...walk(game.skillTreeDir), ...(game.skillTrees ? [path.join(ROOT, 'game-data/skilltrees.json')] : [])];
  const versions = ['minisearch', 'three'].map(name => readJson(path.join(ROOT, 'node_modules', name, 'package.json')).version);
  const app = `_app/${hash(css, hashFiles(sources), versions.join())}`;
  const dir = path.join(out, app);

  writeFile(path.join(dir, 'wiki.css'), css);
  for (const folder of ['client', 'shared', 'fonts']) copyDir(path.join(ROOT, 'src', folder), path.join(dir, folder));
  copyDir(game.glyphDir, path.join(dir, 'glyphs'));
  // Skill trees: textures, plus one JSON per tree that the skilltree client fetches next to them.
  if (game.skillTrees) {
    copyDir(game.skillTreeDir, path.join(dir, 'skilltrees'));
    const { trees, frames, screen } = game.skillTrees;
    for (const [id, tree] of Object.entries(trees)) writeFile(path.join(dir, 'skilltrees', `${id}.json`), JSON.stringify({ ...tree, frames, screen }));
  }
  for (const [from, to] of VENDOR) copyFile(path.join(ROOT, 'node_modules', from), path.join(dir, to));
  return app;
}

// Mod font icons in tooltips (private-use characters, e.g. Obscure API's hunger and damage symbols)
// become sprites. One Minecraft font unit is 0.125em, matching the pixel font's 8-unit em.
function glyphCss(glyphs) {
  const unit = n => `${+(n * 0.125).toFixed(4)}em`;
  return Object.entries(glyphs).map(([cp, g]) => {
    const scale = g.height / g.h;
    return `.mc-glyph.g-${cp} { width: ${unit(g.w * scale)}; height: ${unit(g.height)}; vertical-align: ${unit(g.ascent - g.height)};`
      + ` background-image: url("glyphs/${g.sheet}"); background-size: ${unit(g.sheetW * scale)} ${unit(g.sheetH * scale)};`
      + ` background-position: ${unit(-g.x * scale)} ${unit(-g.y * scale)}; }`;
  }).join('\n') + '\n';
}

// Hosts serve 404.html for any missing URL at any depth, so it links from the site's base path.
function write404(out, { site, themes, app, nav, searchFile, footerFor, dev }) {
  const root = site.url ? new URL(site.url).pathname : '/';
  const page = { path: '404/', title: 'Page not found', data: { summary: 'This page does not exist.' } };
  const contentHtml = `<p>There's no page here (yet). Try searching, or go back to the <a href="${esc(root)}">main page</a>.</p>`;
  writeFile(path.join(out, '404.html'), layoutHtml({
    site, themes, app, root, page,
    rendered: { contentHtml, infoboxHtml: '', text: '' },
    navHtml: navHtml(nav, null, root),
    footerHtml: footerFor(root),
    pageItems: {},
    searchIndex: searchFile,
    devScript: dev ? '<script type="module" src="/__dev/client.js"></script>' : null,
  }));
}

function writeSitemap(out, site, rendered) {
  const urls = rendered.filter(r => !r.page.hidden).map(r => `  <url><loc>${esc(new URL(r.page.path, site.url).href)}</loc></url>`);
  writeFile(path.join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
}

export function summarize(result) {
  const { diag } = result;
  diag.print();
  const errors = diag.errors.length;
  const warnings = diag.warnings.length;
  const status = errors ? `\x1b[31m${errors} error${errors === 1 ? '' : 's'}\x1b[0m` : '\x1b[32mok\x1b[0m';
  const counts = result.pages !== undefined ? `${result.pages} pages, ${result.icons} icons, ` : '';
  console.log(`${status}${warnings ? `, ${warnings} warning${warnings === 1 ? '' : 's'}` : ''} (${counts}${Math.round(result.ms)} ms)`);
  if (result.source?.recipes === 'jar scan') {
    console.log('\x1b[2mgame data: recipes come from the jar scan and miss KubeJS changes; run the in-game export for exact recipes\x1b[0m');
  }
  return errors;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const dev = args.includes('--dev');
  const outArg = args.indexOf('--out');
  const out = outArg >= 0 ? path.resolve(args[outArg + 1]) : path.join(ROOT, 'dist');
  const result = await build({ dev, out });
  const errors = summarize(result);
  // The dev server shows these in an overlay on the page.
  if (dev) writeFile(path.join(out, '__dev', 'diagnostics.json'), JSON.stringify(result.diag.items));
  process.exit(errors && !dev ? 1 : 0);
}
