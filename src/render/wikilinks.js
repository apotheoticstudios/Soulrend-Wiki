// Inline [[...]] syntax: [[Page Title]], [[path/to/page|label]], [[Title#Section]], [[item:ns:id]], [[item:ns:id|label]].
// Rendering is delegated to env.ctx.wikilink so the build can resolve links against the page index.

export function wikilinks(md) {
  md.inline.ruler.before('link', 'wikilink', (state, silent) => {
    const { src, pos } = state;
    if (src.charCodeAt(pos) !== 0x5b || src.charCodeAt(pos + 1) !== 0x5b) return false;
    const end = src.indexOf(']]', pos + 2);
    if (end < 0) return false;
    const raw = src.slice(pos + 2, end);
    if (!raw.trim() || /[\n[\]]/.test(raw)) return false;
    if (!silent) {
      const token = state.push('wikilink', '', 0);
      token.meta = { raw, lineOffset: src.slice(0, pos).split('\n').length - 1 };
    }
    state.pos = end + 2;
    return true;
  });

  // Inline tokens don't carry line numbers; copy them from the enclosing block for error messages.
  md.core.ruler.after('inline', 'wikilink_lines', state => {
    for (const block of state.tokens) {
      if (block.type !== 'inline' || !block.children) continue;
      for (const child of block.children) {
        if (child.type === 'wikilink' && block.map) child.meta.line = block.map[0] + child.meta.lineOffset;
      }
    }
  });

  md.renderer.rules.wikilink = (tokens, idx, _options, env) =>
    env.ctx.wikilink(tokens[idx].meta.raw, env, tokens[idx].meta.line);
}
