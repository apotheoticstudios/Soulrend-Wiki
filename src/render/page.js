import { rootFor } from './context.js';
import { stripHtml } from './html.js';
import { infoboxHtml } from './infobox.js';

// Renders one page's Markdown and infobox. `env` carries per-page state that embeds add to
// (headings for search, items for tooltips, whether a 3D viewer is needed).
export function renderPage(page, ctx) {
  const env = {
    page,
    ctx,
    root: rootFor(page.path),
    bodyLine: page.bodyLine,
    headings: [],
    usedItems: new Set(),
    usesModels: false,
  };
  const contentHtml = ctx.md.render(page.body, env);
  const infobox = infoboxHtml(page, env, ctx);
  return { env, contentHtml, infoboxHtml: infobox, text: stripHtml(contentHtml) };
}
