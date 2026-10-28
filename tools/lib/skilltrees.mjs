// Passive Skill Tree data for the skilltree embed (game-data/skilltrees.json and game-data/skilltrees/).
// Sources, later ones win:
//   1. The mod jar's own data/<ns>/skill_trees and skills (Soulrend empties its trees) and textures.
//   2. Paxi datapacks (config/paxi/datapacks), in datapack_load_order.json order.
//   3. Paxi resource packs (config/paxi/resourcepacks) for textures and lang, in resourcepack_load_order.json
//      order. Tabla's PST-I pack replaces the node frames, connections and background this way.
// Tooltips are built by tools/lib/skilltree-tooltips.mjs, a port of the mod's own tooltip code.
// Each tree's node textures are packed into one sheet; tooltip frames and screen textures are copied as they are.
import fs from 'node:fs';
import path from 'node:path';
import { unzipSync, strFromU8 } from 'fflate';
import { PNG } from 'pngjs';
import { readPng } from './atlas.mjs';
import { createTooltips } from './skilltree-tooltips.mjs';

const PST_JAR = /^PassiveSkillTree-.*\.jar$/;
const TREE_FILE = /^data\/([a-z0-9_.-]+)\/skill_trees\/([a-z0-9_./-]+)\.json$/;
const SKILL_FILE = /^data\/([a-z0-9_.-]+)\/skills\/([a-z0-9_./-]+)\.json$/;
const LANG = /^assets\/([a-z0-9_.-]+)\/lang\/en_us\.json$/;
const TEXTURE = /^assets\/([a-z0-9_.-]+)\/textures\/([a-z0-9_./-]+)\.png$/;
// The mod's screen textures (SkillTreeScreen, ScreenHelper).
const SCREEN = {
  direct: 'skilltree:screen/direct_connection',
  oneWay: 'skilltree:screen/one_way_connection',
  long: 'skilltree:screen/long_connection',
  background: 'skilltree:screen/skill_tree_background',
  overlay: 'skilltree:screen/skill_tree_overlay',
  broken: 'skilltree:icons/broken_skill',
};
const SHEET_WIDTH = 2048;
const BACKGROUND_SIZE = 1024; // the 2048px background, halved; it sits behind everything at 1/3 parallax

const bare = id => id.replace(/^skilltree:/, '');
// "skilltree:textures/icons/x.png" -> "skilltree:icons/x", the key sync-game's texture scan uses.
const textureKey = loc => {
  const [ns, p] = loc.includes(':') ? loc.split(':') : ['minecraft', loc];
  return `${ns}:${p.replace(/^textures\//, '').replace(/\.png$/, '')}`;
};

function parseJson(bytes) {
  try {
    return JSON.parse((typeof bytes === 'string' ? bytes : strFromU8(bytes)).replace(/^﻿/, ''));
  } catch {
    return null;
  }
}

// Every file of a pack folder or zip as [relative path, () => bytes], filtered by name.
function readPack(file, filter) {
  const out = [];
  if (fs.statSync(file).isDirectory()) {
    const walk = d => {
      for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, entry.name);
        const rel = path.relative(file, p).split(path.sep).join('/');
        if (entry.isDirectory()) walk(p);
        else if (filter(rel)) out.push([rel, () => fs.readFileSync(p)]);
      }
    };
    walk(file);
  } else {
    try {
      const entries = unzipSync(new Uint8Array(fs.readFileSync(file)), { filter: f => filter(f.name) });
      for (const [name, bytes] of Object.entries(entries)) out.push([name, () => bytes]);
    } catch {
      // not a zip (or unreadable): Paxi skips it too
    }
  }
  return out;
}

// Paxi packs in load order: ones the order file doesn't list first, then the listed ones.
function paxiPacks(dir, orderFile) {
  if (!fs.existsSync(dir)) return [];
  const listed = parseJson(fs.existsSync(orderFile) ? fs.readFileSync(orderFile) : '{}')?.loadOrder ?? [];
  const names = fs.readdirSync(dir).filter(n => !n.startsWith('.')).sort();
  const rank = n => listed.indexOf(n);
  return [...names.filter(n => rank(n) < 0), ...listed.filter(n => names.includes(n))].map(n => path.join(dir, n));
}

// Pass 1 (before sync-game's texture scan): the trees and skills, and which textures they need.
export function readSkillTrees(instance) {
  const trees = new Map();
  const skills = new Map();
  const jar = fs.readdirSync(path.join(instance, 'mods')).find(f => PST_JAR.test(f));
  const sources = [
    ...(jar ? [path.join(instance, 'mods', jar)] : []),
    ...paxiPacks(path.join(instance, 'config/paxi/datapacks'), path.join(instance, 'config/paxi/datapack_load_order.json')),
  ];
  for (const source of sources) {
    for (const [name, bytes] of readPack(source, n => TREE_FILE.test(n) || SKILL_FILE.test(n))) {
      let m;
      const json = parseJson(bytes());
      if (!json) continue;
      if ((m = TREE_FILE.exec(name))) trees.set(`${m[1]}:${m[2]}`, json);
      else if ((m = SKILL_FILE.exec(name))) skills.set(`${m[1]}:${m[2]}`, { ...json, id: `${m[1]}:${m[2]}` });
    }
  }
  for (const [id, tree] of trees) if (!tree.skillIds?.length) trees.delete(id);

  const needed = new Set(Object.values(SCREEN));
  for (const tree of trees.values()) {
    for (const id of tree.skillIds) {
      const s = skills.get(id);
      if (!s) continue;
      for (const loc of [s.backgroundTexture, s.iconTexture, s.borderTexture]) if (loc) needed.add(textureKey(loc));
    }
  }
  return { trees, skills, needed, found: !!jar };
}

// Groups for the embed's focus: removing the root and every limited node (subclasses, keystones,
// school nodes) splits a tree into one cluster per branch.
function clusters(tree, skills) {
  const limited = new Set(Object.entries(tree.skillLimitations ?? {}).filter(([, n]) => n > 0).map(([tag]) => tag));
  const ids = tree.skillIds.filter(id => skills.has(id));
  const isAnchor = id => skills.get(id).isStartingPoint || (skills.get(id).tags ?? []).some(t => limited.has(t));
  const adjacent = new Map(ids.map(id => [id, new Set()]));
  for (const id of ids) {
    const s = skills.get(id);
    for (const other of [...s.directConnections ?? [], ...s.longConnections ?? [], ...s.oneWayConnections ?? []]) {
      if (!adjacent.has(other)) continue;
      adjacent.get(id).add(other);
      adjacent.get(other).add(id);
    }
  }
  const cluster = new Map();
  let next = 0;
  for (const start of ids) {
    if (isAnchor(start) || cluster.has(start)) continue;
    const stack = [start];
    cluster.set(start, next);
    while (stack.length) {
      for (const n of adjacent.get(stack.pop())) {
        if (cluster.has(n) || isAnchor(n)) continue;
        cluster.set(n, next);
        stack.push(n);
      }
    }
    next++;
  }
  return cluster;
}

const MISSING = (() => {
  // Minecraft's missing texture: magenta and black checks.
  const png = new PNG({ width: 16, height: 16 });
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    const i = (y * 16 + x) * 4;
    const on = (x < 8) !== (y < 8);
    png.data[i] = on ? 248 : 0; png.data[i + 1] = 0; png.data[i + 2] = on ? 248 : 0; png.data[i + 3] = 255;
  }
  return png;
})();

// Shelf packing, tallest first. Returns key -> [x, y, w, h] and the sheet PNG.
function packSheet(images) {
  const order = [...images.keys()].sort((a, b) => images.get(b).height - images.get(a).height || a.localeCompare(b));
  const rects = new Map();
  let x = 0, y = 0, row = 0, width = 0;
  for (const key of order) {
    const { width: w, height: h } = images.get(key);
    if (x + w > SHEET_WIDTH) {
      x = 0;
      y += row;
      row = 0;
    }
    rects.set(key, [x, y, w, h]);
    x += w;
    row = Math.max(row, h);
    width = Math.max(width, x);
  }
  const sheet = new PNG({ width: Math.max(width, 1), height: Math.max(y + row, 1) });
  for (const key of order) {
    const [ox, oy] = rects.get(key);
    PNG.bitblt(images.get(key), sheet, 0, 0, images.get(key).width, images.get(key).height, ox, oy);
  }
  return { rects, sheet };
}

function halve(png) {
  const out = new PNG({ width: png.width >> 1, height: png.height >> 1 });
  for (let y = 0; y < out.height; y++) {
    for (let x = 0; x < out.width; x++) {
      for (let c = 0; c < 4; c++) {
        let sum = 0;
        for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) sum += png.data[((y * 2 + dy) * png.width + x * 2 + dx) * 4 + c];
        out.data[(y * out.width + x) * 4 + c] = sum >> 2;
      }
    }
  }
  return out;
}

// Pass 2 (after the texture scan). `textures` holds jar PNGs by texture key; `lang` holds jar en_us strings.
export function writeSkillTrees({ instance, read, textures, lang, names, outDir, warn = console.warn }) {
  const { trees, skills, needed } = read;
  // Resource packs win over jars, for both textures and lang.
  const fullLang = new Map(lang);
  const packTextures = new Map(textures);
  for (const pack of paxiPacks(path.join(instance, 'config/paxi/resourcepacks'), path.join(instance, 'config/paxi/resourcepack_load_order.json'))) {
    for (const [name, bytes] of readPack(pack, n => LANG.test(n) || (TEXTURE.test(n) && needed.has(textureKey(n.replace(TEXTURE, '$1:textures/$2.png')))))) {
      if (LANG.test(name)) {
        for (const [k, v] of Object.entries(parseJson(bytes()) ?? {})) if (typeof v === 'string') fullLang.set(k, v);
      } else {
        const m = TEXTURE.exec(name);
        packTextures.set(`${m[1]}:${m[2]}`, bytes());
      }
    }
  }
  const decoded = new Map();
  const missingTextures = new Set();
  const image = key => {
    if (!decoded.has(key)) {
      const bytes = packTextures.get(key);
      const png = bytes ? readPng(Buffer.from(bytes)) : null;
      if (!png) missingTextures.add(key);
      decoded.set(key, png ?? MISSING);
    }
    return decoded.get(key);
  };

  const dir = path.join(outDir, 'skilltrees');
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, 'frames'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'screen'), { recursive: true });

  const { skillTooltip, missing: missingKeys } = createTooltips({ lang: fullLang, names });
  const frames = {};
  const out = { trees: {}, frames, screen: {} };
  const errors = [];

  for (const [treeId, tree] of trees) {
    const ids = tree.skillIds.filter(id => {
      if (!skills.has(id)) warn(`  skill tree ${treeId}: missing skill ${id}`);
      return skills.has(id);
    });
    const images = new Map();
    for (const id of ids) {
      const s = skills.get(id);
      for (const loc of [s.backgroundTexture, s.iconTexture]) if (loc) images.set(textureKey(loc), image(textureKey(loc)));
    }
    const { rects, sheet } = packSheet(images);
    const file = `${bare(treeId).replace(/[/:]/g, '_')}.png`;
    fs.writeFileSync(path.join(dir, file), PNG.sync.write(sheet));

    const cluster = clusters(tree, skills);
    const nodes = {};
    const links = [];
    const seen = new Set();
    for (const id of ids) {
      const s = skills.get(id);
      let tooltip = [];
      let broken = false;
      try {
        ({ lines: tooltip, broken } = skillTooltip(s, tree));
      } catch (error) {
        errors.push(`${id}: ${error.message}`);
      }
      const frame = s.borderTexture ? textureKey(s.borderTexture) : null;
      const frameName = frame?.split('/').pop();
      if (frame && !frames[frameName]) {
        const png = image(frame);
        fs.writeFileSync(path.join(dir, 'frames', `${frameName}.png`), PNG.sync.write(png));
        frames[frameName] = { file: `frames/${frameName}.png`, w: png.width, h: png.height };
      }
      nodes[bare(id)] = {
        x: s.positionX ?? 0,
        y: s.positionY ?? 0,
        size: s.buttonSize ?? 16,
        bg: s.backgroundTexture ? rects.get(textureKey(s.backgroundTexture)) : null,
        icon: s.iconTexture ? rects.get(textureKey(s.iconTexture)) : null,
        frame: frameName ?? null,
        tooltip,
        ...(broken ? { broken: true } : {}),
        ...(cluster.has(id) ? { cluster: cluster.get(id) } : {}),
      };
      // SkillButtons.addSkillConnections; the same pair listed from both ends is drawn once.
      for (const [list, type] of [[s.directConnections, 'direct'], [s.longConnections, 'long'], [s.oneWayConnections, 'oneWay']]) {
        for (const to of list ?? []) {
          if (!skills.has(to) || !ids.includes(to)) continue;
          const key = type === 'oneWay' ? `${type} ${id} ${to}` : `${type} ${[id, to].sort().join(' ')}`;
          if (seen.has(key)) continue;
          seen.add(key);
          links.push([bare(id), bare(to), type]);
        }
      }
    }
    out.trees[bare(treeId)] = {
      title: fullLang.get(treeId) ?? bare(treeId),
      limits: tree.skillLimitations ?? {},
      sheet: file,
      sheetSize: [sheet.width, sheet.height],
      nodes,
      links,
    };
  }

  for (const [name, key] of Object.entries(SCREEN)) {
    if (!packTextures.has(key)) continue;
    let png = image(key);
    if (name === 'background' && png.width > BACKGROUND_SIZE) png = halve(png);
    fs.writeFileSync(path.join(dir, 'screen', `${name}.png`), PNG.sync.write(png));
    out.screen[name] = { file: `screen/${name}.png`, w: png.width, h: png.height, source: decoded.get(key).width };
  }
  fs.writeFileSync(path.join(outDir, 'skilltrees.json'), JSON.stringify(out));

  for (const e of errors) warn(`  skill tree tooltip: ${e}`);
  if (missingTextures.size) warn(`  skill trees: ${missingTextures.size} textures not found (drawn as missing): ${[...missingTextures].slice(0, 5).join(', ')}`);
  const untranslated = [...missingKeys];
  const counts = Object.entries(out.trees).map(([id, t]) => `${id} ${Object.keys(t.nodes).length}`).join(', ');
  return {
    summary: `${counts}${untranslated.length ? `; ${untranslated.length} untranslated keys shown raw, as in game (${untranslated.slice(0, 3).join(', ')}${untranslated.length > 3 ? ', …' : ''})` : ''}`,
    untranslated,
  };
}
