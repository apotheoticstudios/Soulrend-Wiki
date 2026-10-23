import { createMarkdown } from './markdown.js';
import { embedTypes } from './embeds/index.js';
import { esc, slugify } from './html.js';
import { ITEM_ID, icon, itemRef, itemName } from './items.js';
import { jsonErrorLine } from '../../tools/lib/diagnostics.mjs';

class EmbedError extends Error {}

// "guides/Getting-Started.md", "/guides/getting-started/" -> "guides/getting-started/"; "index" -> "".
export function normalizePath(value) {
  let p = value.trim().replace(/\\/g, '/').replace(/^\.?\/+/, '').replace(/\.md$/, '').replace(/\/+$/, '');
  p = p.replace(/(^|\/)index$/, '');
  return p ? p + '/' : '';
}

// Relative prefix from a page back to the site root, so links work on any host or sub-folder.
export function rootFor(pagePath) {
  const depth = pagePath.split('/').filter(Boolean).length;
  return depth ? '../'.repeat(depth) : './';
}

// Site-wide rendering context: link/item resolution, embed dispatch and error reporting.
export function createContext({ site, pages, game, atlas, stations, diag }) {
  const md = createMarkdown(new Set(Object.keys(embedTypes)));
  const byPath = new Map(pages.map(p => [p.path, p]));
  const byName = new Map();
  const owners = new Map();

  for (const page of pages) {
    for (const name of [page.title, ...(page.data.aliases ?? [])]) {
      const key = name.trim().toLowerCase();
      const other = byName.get(key);
      if (other && other !== page) diag.error(page.file, 2, `Title or alias "${name}" is already used by ${other.file}`);
      else byName.set(key, page);
    }
    for (const id of page.data.items ?? []) {
      const other = owners.get(id);
      if (other && other !== page) diag.error(page.file, 2, `Item ${id} is already claimed by ${other.file}`);
      else owners.set(id, page);
    }
  }

  const fileLine = (env, line) => (line === undefined || line === null ? undefined : env.bodyLine + line + 1);
  const report = (env, line, message) => diag.error(env.page.file, fileLine(env, line), message);
  const errorHtml = message => `<span class="render-error" role="alert">${esc(message)}</span>`;

  const ctx = {
    site, pages, game, atlas, stations, md, diag,

    itemOwner: id => owners.get(id) ?? null,

    warnAt: (env, line, message) => diag.warn(env.page.file, fileLine(env, line), message),

    // Finds a page by path, title or alias. Returns { page, anchor } or null.
    resolve(target, fromPage) {
      const hash = target.indexOf('#');
      const name = (hash < 0 ? target : target.slice(0, hash)).trim();
      const anchor = hash < 0 ? '' : target.slice(hash + 1).trim();
      const page = !name ? fromPage : byPath.get(normalizePath(name)) ?? byName.get(name.toLowerCase());
      return page ? { page, anchor, byTitle: byName.get(name.toLowerCase()) === page } : null;
    },

    wikilink(raw, env, line) {
      const bar = raw.indexOf('|');
      const target = (bar < 0 ? raw : raw.slice(0, bar)).trim();
      const label = bar < 0 ? '' : raw.slice(bar + 1).trim();

      if (/^item:/i.test(target)) {
        const id = target.slice(5).trim();
        if (!ITEM_ID.test(id)) {
          report(env, line, `[[${raw}]]: "${id}" is not a valid item id (expected namespace:path)`);
          return errorHtml(raw);
        }
        if (game.present && !game.items.has(id)) diag.warn(env.page.file, fileLine(env, line), `Unknown item ${id} (not in game-data/items.json)`);
        return itemRef(id, label, ctx, env);
      }

      const found = ctx.resolve(target, env.page);
      if (!found) {
        report(env, line, `Broken link [[${raw}]]: no page has that title, alias or path`);
        return `<a class="wikilink broken" title="Page does not exist yet">${esc(label || target)}</a>`;
      }
      const { page, anchor, byTitle } = found;
      const href = (page === env.page && anchor ? '' : env.root + page.path) + (anchor ? '#' + slugify(anchor) : '');
      const name = target.split('#')[0].trim();
      const text = label || (name ? (byTitle ? name : page.title) : anchor);
      return `<a class="wikilink" href="${esc(href)}">${esc(text)}</a>`;
    },

    embed(meta, env, line) {
      const def = embedTypes[meta.type];
      if (!def) {
        report(env, line, `Unknown embed "${meta.type}". Available: ${Object.keys(embedTypes).join(', ')}`);
        return errorHtml(`Unknown embed "${meta.type}"`);
      }
      let props;
      if (meta.source === 'fence') {
        try {
          props = JSON.parse(meta.body);
        } catch (error) {
          report(env, line + jsonErrorLine(error, meta.body), `Invalid JSON in \`\`\`${meta.type} block: ${error.message}`);
          return errorHtml(`Invalid JSON in ${meta.type} block`);
        }
        if (Array.isArray(props) && def.variadic) props = { [def.positional]: props };
      } else {
        props = { ...meta.args.named };
        const positional = meta.args.positional;
        if (positional.length && !def.positional) {
          report(env, line, `{{${meta.type}}} only takes key=value arguments`);
        } else if (positional.length) {
          props[def.positional] = def.variadic ? positional : positional[0];
          if (positional.length > 1 && !def.variadic) report(env, line, `{{${meta.type}}} takes one positional argument`);
        }
      }
      if (typeof props !== 'object' || props === null || Array.isArray(props)) {
        report(env, line, `${meta.type} embed expects a JSON object`);
        return errorHtml(`${meta.type}: expected an object`);
      }
      try {
        return def.render(props, ctx.helpers(env, line));
      } catch (error) {
        if (!(error instanceof EmbedError)) throw error;
        report(env, line, `${meta.type}: ${error.message}`);
        return errorHtml(`${meta.type}: ${error.message}`);
      }
    },

    // The toolkit handed to every embed's render(props, h).
    helpers(env, line) {
      return {
        ctx, env,
        fail(message) { throw new EmbedError(message); },
        warn(message) { diag.warn(env.page.file, fileLine(env, line), message); },
        markdown: text => md.render(text, env),
        inline: text => md.renderInline(text, env),
        icon: (id, size) => icon(id, ctx, env, size),
        itemRef: (id, label) => itemRef(id, label, ctx, env),
        itemName: id => itemName(id, ctx),
        asset: p => env.root + 'assets/' + p.replace(/^\/+/, '').replace(/^assets\//, ''),
        embed: (type, props) => embedTypes[type].render(props, ctx.helpers(env, line)),
      };
    },
  };
  return ctx;
}
