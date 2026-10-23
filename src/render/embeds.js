// Two ways to embed a toolbox, both producing an `embed` token with { type, ... }:
//   {{recipes output=soulrend_core:soul_blade}}      one line, key=value or positional args
//   ```recipe                                         fenced block, body is JSON
//   { "output": "soulrend_core:soul_blade" }
//   ```
// Rendering is delegated to env.ctx.embed, which looks the type up in src/render/embeds/.

const SHORTCODE = /^\{\{\s*([a-z][\w-]*)(?:\s+(.*?))?\s*\}\}$/;

export function embeds(md, { types }) {
  md.block.ruler.before('paragraph', 'shortcode', (state, startLine, _endLine, silent) => {
    if (state.sCount[startLine] - state.blkIndent >= 4) return false;
    const line = state.src.slice(state.bMarks[startLine] + state.tShift[startLine], state.eMarks[startLine]).trim();
    const match = SHORTCODE.exec(line);
    if (!match) return false;
    if (silent) return true;
    const token = state.push('embed', '', 0);
    token.map = [startLine, startLine + 1];
    token.meta = { type: match[1], source: 'shortcode', args: parseArgs(match[2] ?? '') };
    state.line = startLine + 1;
    return true;
  }, { alt: ['paragraph'] });

  md.core.ruler.after('block', 'fenced_embeds', state => {
    for (const token of state.tokens) {
      if (token.type !== 'fence') continue;
      const type = token.info.trim().split(/\s+/)[0];
      if (!types.has(type)) continue;
      token.type = 'embed';
      token.meta = { type, source: 'fence', body: token.content };
    }
  });

  // A {{shortcode}} inside a sentence isn't an embed; it would silently show as text, so flag it.
  md.core.ruler.after('inline', 'inline_shortcodes', state => {
    for (const block of state.tokens) {
      if (block.type !== 'inline' || !block.map) continue;
      for (const child of block.children ?? []) {
        const match = child.type === 'text' && /\{\{\s*([a-z][\w-]*)[^}]*\}\}/.exec(child.content);
        if (match && types.has(match[1])) {
          state.env.ctx?.warnAt(state.env, block.map[0], `{{${match[1]} …}} must be on a line of its own to become an embed`);
        }
      }
    }
  });

  md.renderer.rules.embed = (tokens, idx, _options, env) =>
    env.ctx.embed(tokens[idx].meta, env, tokens[idx].map?.[0]);
}

// `a=1 b="two words" c bare` -> { named: { a: 1, b: 'two words' }, positional: ['c', 'bare'] }
export function parseArgs(text) {
  const named = {};
  const positional = [];
  const pattern = /([a-zA-Z_][\w-]*)=(?:"([^"]*)"|'([^']*)'|(\S+))|"([^"]*)"|'([^']*)'|(\S+)/g;
  for (const m of text.matchAll(pattern)) {
    if (m[1]) named[m[1]] = coerce(m[2] ?? m[3] ?? m[4], m[4] !== undefined);
    else positional.push(coerce(m[5] ?? m[6] ?? m[7], m[7] !== undefined));
  }
  return { named, positional };
}

function coerce(value, bare) {
  if (!bare) return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value;
}
