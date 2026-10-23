import MarkdownIt from 'markdown-it';
import { wikilinks } from './wikilinks.js';
import { embeds } from './embeds.js';
import { esc, slugify } from './html.js';

export function createMarkdown(embedTypes) {
  const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
  md.use(wikilinks).use(embeds, { types: embedTypes }).use(callouts).use(headingAnchors).use(siteLinks);

  // Wide tables scroll sideways on phones instead of stretching the page.
  md.renderer.rules.table_open = () => '<div class="table-wrap"><table>\n';
  md.renderer.rules.table_close = () => '</table></div>\n';

  const image = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet('loading', 'lazy');
    return image(tokens, idx, options, env, self);
  };
  return md;
}

// GitHub-style callouts: a blockquote starting with [!NOTE], [!TIP], [!IMPORTANT], [!WARNING], [!CAUTION] or [!LORE].
// Text after the marker on the same line replaces the default title.
const CALLOUTS = { note: 'Note', tip: 'Tip', important: 'Important', warning: 'Warning', caution: 'Caution', lore: '' };

function callouts(md) {
  md.core.ruler.after('block', 'callouts', state => {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      const open = tokens[i];
      const inline = tokens[i + 2];
      if (open.type !== 'blockquote_open' || tokens[i + 1]?.type !== 'paragraph_open' || inline?.type !== 'inline') continue;
      const match = /^\[!(\w+)\][ \t]*([^\n]*)\n?/.exec(inline.content);
      const kind = match?.[1].toLowerCase();
      if (!match || !(kind in CALLOUTS)) continue;

      const close = tokens.slice(i).find(t => t.type === 'blockquote_close' && t.level === open.level);
      open.tag = close.tag = 'div';
      open.attrSet('class', `callout callout-${kind}`);
      inline.content = inline.content.slice(match[0].length);
      if (!inline.content.trim()) tokens.splice(i + 1, 3);

      const titleText = match[2].trim() || CALLOUTS[kind];
      if (titleText) {
        const title = new state.Token('html_block', '', 0);
        title.content = `<p class="callout-title">${esc(titleText)}</p>\n`;
        tokens.splice(i + 1, 0, title);
      }
    }
  });
}

// Gives h2-h4 stable ids and a hover anchor, and records them in env.headings for search.
function headingAnchors(md) {
  md.core.ruler.after('inline', 'heading_anchors', state => {
    const used = new Set();
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      const open = tokens[i];
      if (open.type !== 'heading_open' || !['h2', 'h3', 'h4'].includes(open.tag)) continue;
      const inline = tokens[i + 1];
      const text = inline.children.filter(t => t.type === 'text' || t.type === 'code_inline').map(t => t.content).join('');
      let id = slugify(text);
      for (let n = 2; used.has(id); n++) id = `${slugify(text)}-${n}`;
      used.add(id);
      open.attrSet('id', id);
      state.env.headings?.push({ level: Number(open.tag[1]), text, id });
      const anchor = new state.Token('html_inline', '', 0);
      anchor.content = `<a class="heading-anchor" href="#${id}" aria-label="Link to this section">#</a>`;
      inline.children.push(anchor);
    }
  });
}

// Links and images starting with "/" are site-relative; rewrite them relative to the current page
// so the built site works from any folder or host. External links get a class for styling.
function siteLinks(md) {
  md.core.ruler.after('inline', 'site_links', state => {
    const root = state.env.root ?? '';
    for (const block of state.tokens) {
      for (const token of block.children ?? []) {
        const attr = token.type === 'link_open' ? 'href' : token.type === 'image' ? 'src' : null;
        if (!attr) continue;
        const value = token.attrGet(attr) ?? '';
        if (value.startsWith('/') && !value.startsWith('//')) token.attrSet(attr, root + value.slice(1));
        else if (attr === 'href' && /^https?:/.test(value)) {
          token.attrJoin('class', 'external');
          token.attrSet('rel', 'noopener');
        }
      }
    }
  });
}
