// Minecraft §-formatting codes -> HTML spans. Shared by the build and the browser tooltip.

export const COLORS = {
  0: '#000000', 1: '#0000AA', 2: '#00AA00', 3: '#00AAAA', 4: '#AA0000', 5: '#AA00AA', 6: '#FFAA00', 7: '#AAAAAA',
  8: '#555555', 9: '#5555FF', a: '#55FF55', b: '#55FFFF', c: '#FF5555', d: '#FF55FF', e: '#FFFF55', f: '#FFFFFF',
};

export const RARITY_COLORS = { common: COLORS.f, uncommon: COLORS.e, rare: COLORS.b, epic: COLORS.d };

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const escape = s => s.replace(/[&<>"]/g, c => ESCAPES[c]);
// Private-use characters are mod font icons; the build turns each known one into a .g-<codepoint> sprite.
const withGlyphs = s => escape(s).replace(/[\uE000-\uF8FF]/g, c => `<span class="mc-glyph g-${c.codePointAt(0).toString(16)}" aria-hidden="true"></span>`);

export function mcTextToHtml(text) {
  let html = '';
  let style = {};
  for (const [i, part] of String(text).split('§').entries()) {
    let chunk = part;
    if (i > 0 && part.length) {
      const code = part[0].toLowerCase();
      chunk = part.slice(1);
      const hex = /^#[0-9a-f]{6}/i.exec(part);
      if (hex) {
        // §#rrggbb: hex colour, written by the KubeJS export for colours outside the 16 named ones.
        style = { color: hex[0] };
        chunk = part.slice(7);
      } else if (code in COLORS) style = { color: COLORS[code] };
      else if (code === 'r') style = {};
      else if (code === 'l') style = { ...style, bold: true };
      else if (code === 'o') style = { ...style, italic: true };
      else if (code === 'n') style = { ...style, underline: true };
      else if (code === 'm') style = { ...style, strike: true };
      else if (code === 'k') style = { ...style, obfuscated: true };
    }
    if (!chunk) continue;
    const css = [];
    if (style.color) css.push(`color:${style.color}`);
    if (style.bold) css.push('font-weight:bold');
    if (style.italic) css.push('font-style:italic');
    const deco = [style.underline && 'underline', style.strike && 'line-through'].filter(Boolean).join(' ');
    // One texel thick (0.125em in the pixel font); browsers ignore the font's strikeout thickness.
    if (deco) css.push(`text-decoration:${deco} 0.125em`);
    html += css.length || style.obfuscated
      ? `<span${style.obfuscated ? ' class="mc-obfuscated"' : ''}${css.length ? ` style="${css.join(';')}"` : ''}>${withGlyphs(chunk)}</span>`
      : withGlyphs(chunk);
  }
  return html;
}
