// Builds the wiki's pixel font (src/fonts/soulrend-mc*.woff2: regular, bold, italic, bold italic) from the hand-drawn glyphs in tools/font/glyphs.txt.
// Run after editing the glyphs:
//   npm run font
//   npm run font -- --out path/to/font.woff2
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import wawoff2 from 'wawoff2';
import { loadGlyphs, bounds, ITALIC_ANGLE } from './lib/bitmap-font.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const SOURCE = arg('glyphs', path.join(ROOT, 'tools/font/glyphs.txt'));
const OUT = arg('out', path.join(ROOT, 'src/fonts/soulrend-mc.woff2'));

const UNIT = 128; // font units per texel; 8 texels = 1024 units = 1em, so 16px text draws each texel as 2px
const ASCENT = 7; // texel rows above the baseline
const FAMILY = 'Soulrend MC';

const STYLES = [
  { suffix: '', styleName: 'Regular' },
  { suffix: '-bold', styleName: 'Bold', bold: true },
  { suffix: '-italic', styleName: 'Italic', italic: true },
  { suffix: '-bolditalic', styleName: 'Bold Italic', bold: true, italic: true },
];

for (const style of STYLES) {
  const glyphs = [new opentype.Glyph({ name: '.notdef', unicode: 0, advanceWidth: 4 * UNIT, path: new opentype.Path() })];
  for (const [cp, glyph] of [...loadGlyphs(SOURCE, style)].sort((a, b) => a[0] - b[0])) {
    const path = new opentype.Path();
    if (glyph.pixels.size) {
      const filled = (x, y) => glyph.pixels.has(`${x},${y}`);
      for (const loop of traceOutline(filled, bounds(glyph.pixels))) {
        loop.forEach(([x, y], i) => {
          const fx = x * UNIT;
          const fy = (ASCENT - y) * UNIT;
          if (i === 0) path.moveTo(fx, fy);
          else path.lineTo(fx, fy);
        });
        path.close();
      }
    }
    glyphs.push(new opentype.Glyph({ name: `uni${hex(cp)}`, unicode: cp, advanceWidth: glyph.advance * UNIT, path }));
  }

  const font = new opentype.Font({
    familyName: FAMILY,
    styleName: style.styleName,
    unitsPerEm: 8 * UNIT,
    ascender: 8 * UNIT,
    descender: -2 * UNIT,
    weightClass: style.bold ? 700 : 400,
    italicAngle: style.italic ? ITALIC_ANGLE : 0,
    // Both lines are one texel thick: strikeout through the middle of the x-height (row 4), underline on row 8.
    tables: {
      os2: { yStrikeoutPosition: (ASCENT - 4) * UNIT, yStrikeoutSize: UNIT },
      post: { underlinePosition: (ASCENT - 8) * UNIT, underlineThickness: UNIT },
    },
    glyphs,
  });
  const file = OUT.replace(/\.woff2$/, `${style.suffix}.woff2`);
  const woff2 = await wawoff2.compress(new Uint8Array(font.toArrayBuffer()));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, woff2);
  console.log(`Wrote ${path.relative(ROOT, file)}: ${glyphs.length - 1} glyphs, ${(woff2.length / 1024).toFixed(1)} KB`);
}

function hex(cp) {
  return cp.toString(16).toUpperCase().padStart(4, '0');
}

// Traces the boundary of the filled pixels into closed loops of corner points (y pointing down).
// Edges run clockwise around filled pixels; where two pixels only touch at a corner the trace turns
// right, keeping them as separate loops. Straight runs are merged into single segments.
function traceOutline(filled, { left, right, top, bottom }) {
  const edges = new Map(); // "x,y" -> list of [toX, toY]
  const add = (x1, y1, x2, y2) => {
    const key = `${x1},${y1}`;
    if (!edges.has(key)) edges.set(key, []);
    edges.get(key).push([x2, y2]);
  };
  for (let y = top; y <= bottom; y++) {
    for (let x = left; x <= right; x++) {
      if (!filled(x, y)) continue;
      if (!filled(x, y - 1)) add(x, y, x + 1, y);
      if (!filled(x + 1, y)) add(x + 1, y, x + 1, y + 1);
      if (!filled(x, y + 1)) add(x + 1, y + 1, x, y + 1);
      if (!filled(x - 1, y)) add(x, y + 1, x, y);
    }
  }

  const loops = [];
  for (const [startKey, outs] of edges) {
    while (outs.length) {
      const [sx, sy] = startKey.split(',').map(Number);
      let [nx, ny] = outs.pop();
      const loop = [[sx, sy]];
      let [px, py] = [sx, sy];
      while (nx !== sx || ny !== sy) {
        loop.push([nx, ny]);
        const options = edges.get(`${nx},${ny}`);
        const dx = nx - px, dy = ny - py;
        // Prefer a right turn (clockwise in y-down space), then straight, then left.
        const order = [[-dy, dx], [dx, dy], [dy, -dx]];
        const pick = order.map(([ox, oy]) => options.findIndex(([tx, ty]) => tx - nx === ox && ty - ny === oy)).find(i => i >= 0);
        const [tx, ty] = options.splice(pick, 1)[0];
        [px, py, nx, ny] = [nx, ny, tx, ty];
      }
      loops.push(simplify(loop));
    }
  }
  return loops;
}

// Drops points that sit in the middle of a straight line.
function simplify(loop) {
  return loop.filter((point, i) => {
    const prev = loop[(i - 1 + loop.length) % loop.length];
    const next = loop[(i + 1) % loop.length];
    return (point[0] - prev[0]) * (next[1] - point[1]) !== (point[1] - prev[1]) * (next[0] - point[0]);
  });
}
