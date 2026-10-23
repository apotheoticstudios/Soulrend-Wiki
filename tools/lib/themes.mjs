import fs from 'node:fs';
import path from 'node:path';
import { validate, lineOfPointer } from './validate.mjs';
import { jsonErrorLine } from './diagnostics.mjs';

const FONT_STACKS = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif',
  mono: 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  minecraft: '"Soulrend MC", ui-monospace, "SF Mono", Menlo, monospace',
};

export const LAYOUT_DEFAULTS = {
  sidebarWidth: '250px',
  contentMaxWidth: '880px',
  infoboxWidth: '300px',
  gutter: '24px',
  mobileBreakpoint: '900px',
};

const kebab = key => key.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
const declarations = (obj, indent = '  ') =>
  Object.entries(obj).map(([k, v]) => `${indent}--${kebab(k)}: ${v};`).join('\n');

// Reads site/themes/*.json (+ optional matching .css), validating each against the theme schema.
export function loadThemes(root, diag) {
  const dir = path.join(root, 'site/themes');
  const themes = [];
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
    const rel = `site/themes/${file}`;
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      diag.error(rel, jsonErrorLine(error, text), `Invalid JSON: ${error.message}`);
      continue;
    }
    const problems = validate('theme', data, root);
    for (const p of problems) diag.error(rel, lineOfPointer(text, p.pointer), p.message);
    if (problems.length) continue;
    const cssFile = path.join(dir, file.replace(/\.json$/, '.css'));
    themes.push({
      id: file.replace(/\.json$/, ''),
      name: data.name,
      order: data.order ?? 0,
      data,
      extraCss: fs.existsSync(cssFile) ? fs.readFileSync(cssFile, 'utf8') : '',
    });
  }
  return themes.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

// Layout sizes from site.json as CSS variables. Emitted first so media queries in src/styles can override them.
export function layoutCss(layout) {
  const { mobileBreakpoint, ...vars } = layout;
  return `:root {\n${declarations(vars)}\n}\n`;
}

// Compiles every style into one stylesheet keyed on <html data-style data-mode>.
// data-mode="system" follows the OS via a media query, so it also works without JavaScript.
export function themeCss(themes) {
  let css = '';
  for (const theme of themes) {
    const sel = `:root[data-style="${theme.id}"]`;
    const fonts = theme.data.fonts ?? {};
    const shared = {
      fontBody: FONT_STACKS[fonts.body ?? 'sans'] ?? fonts.body,
      fontHeading: FONT_STACKS[fonts.heading ?? fonts.body ?? 'sans'] ?? fonts.heading,
      fontUi: FONT_STACKS[fonts.ui ?? fonts.body ?? 'sans'] ?? fonts.ui,
      fontMono: FONT_STACKS.mono,
      ...theme.data.vars,
    };
    css += `${sel} {\n${declarations(shared)}\n}\n`;
    css += `${sel}[data-mode="light"], ${sel}[data-mode="system"] {\n  color-scheme: light;\n${declarations(theme.data.light)}\n}\n`;
    css += `${sel}[data-mode="dark"] {\n  color-scheme: dark;\n${declarations(theme.data.dark)}\n}\n`;
    css += `@media (prefers-color-scheme: dark) {\n  ${sel}[data-mode="system"] {\n    color-scheme: dark;\n${declarations(theme.data.dark, '    ')}\n  }\n}\n`;
    // Style-specific CSS is nested under the style selector so it can't leak into other styles.
    if (theme.extraCss.trim()) css += `${sel} {\n${theme.extraCss}\n}\n`;
  }
  return css;
}

// Source CSS writes `@media (--mobile)` / `@media (--desktop)`; swap in the configured breakpoint.
export function applyBreakpoints(css, breakpoint) {
  const px = parseInt(breakpoint, 10);
  return css
    .replaceAll('(--mobile)', `(max-width: ${px}px)`)
    .replaceAll('(--desktop)', `(min-width: ${px + 1}px)`);
}
