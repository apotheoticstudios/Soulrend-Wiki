// Loads the hand-drawn glyph source (tools/font/glyphs.txt) and composes accented letters from it.
// Coordinates are texels with y pointing down; row 0 is cap height, row 6 sits on the baseline.
import fs from 'node:fs';

const MARKS = {
  0x0300: 'grave', 0x0301: 'acute', 0x0302: 'circumflex', 0x0303: 'tilde', 0x0304: 'macron',
  0x0306: 'breve', 0x0307: 'dot', 0x0308: 'diaeresis', 0x030A: 'ring', 0x030B: 'doubleacute',
  0x030C: 'caron', 0x0326: 'commabelow', 0x0327: 'cedilla', 0x0328: 'ogonek',
};
const BELOW = new Set(['commabelow', 'cedilla', 'ogonek']);
const DOTLESS = { i: 'ı', j: 'ȷ' };
// Ascender letters take the caron as an apostrophe beside the stem (ď ľ Ľ ť).
const CARON_SIDE = new Set(['d', 'l', 'L', 't']);
// Composed ranges: Latin-1 Supplement and Latin Extended-A.
const COMPOSE = [[0x00C0, 0x017F]];

// Italic leans two texels over the cap height: rows 4-6 stay put, 2-3 shift one, 0-1 two, descenders lean back one.
// One step in the middle of the x-height keeps lowercase strokes from fragmenting.
export const ITALIC_ANGLE = -Math.atan(2 / 7) * 180 / Math.PI;
const slant = y => y < 4 ? Math.floor((5 - y) / 2) : y > 6 ? -1 : 0;

// Returns Map<codepoint, glyph>, where glyph = { pixels: Set<"x,y">, width, advance }.
// Bold and italic are derived from the same drawings: italic swaps in "@italic" variants and slants every
// glyph; bold doubles pixels one texel to the right and widens the advance, like the game's bold.
export function loadGlyphs(file, { bold = false, italic = false } = {}) {
  const { upright, variants, marks } = parse(fs.readFileSync(file, 'utf8'), file);
  const glyphs = new Map(upright);
  if (italic) for (const [cp, glyph] of variants.italic) glyphs.set(cp, glyph);
  for (const [from, to] of COMPOSE) {
    for (let cp = from; cp <= to; cp++) {
      if (glyphs.has(cp)) continue;
      const composed = compose(String.fromCodePoint(cp), glyphs, marks);
      if (composed) glyphs.set(cp, composed);
    }
  }
  if (italic) for (const glyph of glyphs.values()) glyph.pixels = shift(glyph.pixels, slant);
  if (bold) {
    for (const glyph of glyphs.values()) {
      // Skip pixels that would close a one-texel gap (serifs on u, arms of v), which would turn letters into blobs.
      const has = (x, y) => glyph.pixels.has(`${x},${y}`);
      const extra = [...glyph.pixels].map(p => p.split(',').map(Number))
        .filter(([x, y]) => has(x + 1, y) || !has(x + 2, y)).map(([x, y]) => `${x + 1},${y}`);
      glyph.pixels = new Set([...glyph.pixels, ...extra]);
      glyph.advance += 1;
    }
  }
  return glyphs;
}

// Italic variants are drawn slanted; undo the slant so they compose and embolden like upright glyphs.
function unslant(drawn) {
  const pixels = shift(drawn, y => -slant(y));
  const { left, right } = bounds(pixels);
  const aligned = shift(pixels, () => -left);
  return { pixels: aligned, width: right - left + 1, advance: right - left + 2 };
}

function shift(pixels, dx) {
  return new Set([...pixels].map(p => {
    const [x, y] = p.split(',').map(Number);
    return `${x + dx(y)},${y}`;
  }));
}

function parse(text, file) {
  const upright = new Map();
  const variants = { italic: new Map() };
  const marks = new Map();
  let current = null;
  const finish = () => {
    if (!current) return;
    const { rows, line } = current;
    const [name, variant] = current.name.split(/\s+@/);
    const width = rows[0]?.length ?? 0;
    const fail = msg => { throw new Error(`${file}:${line}: ${name}: ${msg}`); };
    if (rows.some(r => r.length !== width)) fail('rows have different lengths');
    const pixels = new Set();
    rows.forEach((row, y) => Array.from(row).forEach((ch, x) => { if (ch === '#') pixels.add(`${x},${y}`); }));
    const glyph = { pixels, width, advance: width + 1 };
    if (name.startsWith('mark:')) {
      marks.set(name.slice(5), { ...glyph, height: rows.length });
    } else {
      if (rows.length < 7 || rows.length > 9) fail(`expected 7-9 rows, got ${rows.length}`);
      const target = variant ? variants[variant] : upright;
      if (!target) fail(`unknown variant "@${variant}"`);
      if (variant === 'italic') Object.assign(glyph, unslant(pixels));
      const cp = name.startsWith('U+') ? parseInt(name.slice(2), 16) : name.codePointAt(0);
      if (target.has(cp)) fail('defined twice');
      target.set(cp, glyph);
    }
    current = null;
  };

  text.split('\n').forEach((raw, i) => {
    const line = raw.trimEnd();
    if (line.startsWith('==')) {
      finish();
      current = { name: line.slice(2).trim(), rows: [], line: i + 1 };
    } else if (line === '' || line.startsWith('//')) {
      finish();
    } else if (current && /^[#.]+$/.test(line)) {
      current.rows.push(line);
    } else {
      throw new Error(`${file}:${i + 1}: unexpected line "${line}"`);
    }
  });
  finish();
  return { upright, variants, marks };
}

function compose(char, glyphs, marks) {
  const [baseChar, ...markCps] = Array.from(char.normalize('NFD'));
  const names = markCps.map(c => MARKS[c.codePointAt(0)]);
  if (!names.length || names.some(n => !n)) return null;
  const above = names.some(n => !BELOW.has(n));
  const dotless = above && DOTLESS[baseChar];
  const base = glyphs.get((dotless || baseChar).codePointAt(0));
  if (!base) return null;
  // Marks over ı/ȷ centre on the stem, where the dot was.
  const dotX = dotless && Number([...glyphs.get(baseChar.codePointAt(0)).pixels].find(p => p.endsWith(',0')).split(',')[0]);

  const pixels = new Set(base.pixels);
  let width = base.width;
  for (const name of names) {
    const ink = bounds(pixels);
    if (name === 'caron' && CARON_SIDE.has(baseChar)) {
      const mark = marks.get('caronside');
      const x = Math.max(...[...pixels].map(p => p.split(',').map(Number)).filter(([, y]) => y <= 1).map(([x]) => x)) + 2;
      place(pixels, mark, x, 0);
      width = Math.max(width, x + mark.width);
      continue;
    }
    const mark = marks.get(name);
    if (BELOW.has(name)) {
      if (ink.bottom > 6) return null; // no room under a descender (ģ)
      const x = name === 'ogonek' ? ink.right - 1 : centre((ink.left + ink.right) / 2, mark);
      place(pixels, mark, x, 7);
    } else {
      const gap = name === 'ring' ? 0 : 1; // a ring rests on the letter, like Å
      const x = centre(dotless ? dotX : (ink.left + ink.right) / 2, mark);
      place(pixels, mark, x, ink.top - gap - mark.height);
    }
  }
  return { pixels, width, advance: width + 1 };
}

const centre = (mid, mark) => Math.floor(mid - (mark.width - 1) / 2 + 0.5);

function place(pixels, mark, dx, dy) {
  for (const p of mark.pixels) {
    const [x, y] = p.split(',').map(Number);
    pixels.add(`${x + dx},${y + dy}`);
  }
}

export function bounds(pixels) {
  const pts = [...pixels].map(p => p.split(',').map(Number));
  return {
    left: Math.min(...pts.map(p => p[0])),
    right: Math.max(...pts.map(p => p[0])),
    top: Math.min(...pts.map(p => p[1])),
    bottom: Math.max(...pts.map(p => p[1])),
  };
}
