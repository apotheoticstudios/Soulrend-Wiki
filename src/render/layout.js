import { esc, attrs } from './html.js';
import { ICONS } from './icons.js';

// Runs before first paint: restores the visitor's style and mode so the page never flashes the wrong theme.
function bootScript(styleIds) {
  return `(function(){var d=document.documentElement;d.classList.replace('no-js','js');try{var s=localStorage.getItem('wiki:style'),m=localStorage.getItem('wiki:mode');if(${JSON.stringify(styleIds)}.indexOf(s)>=0)d.dataset.style=s;if(m==='light'||m==='dark'||m==='system')d.dataset.mode=m}catch(e){}})();`;
}

// JSON inside <script> must not contain "</script>" or "<!--".
const scriptJson = value => JSON.stringify(value).replace(/</g, '\\u003c');

const MODES = [['system', 'System'], ['light', 'Light'], ['dark', 'Dark']];

// Used until site.json sets a "logo": a small teal soul flame.
const DEFAULT_FAVICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges"><path fill="#4fd1c5" d="M7 1h2v2h1v2h1v2h1v4h-1v2h-1v1H6v-1H5v-2H4V7h1V5h1V3h1z"/><path fill="#0c0a0f" d="M7 8h2v1h1v2H9v1H7v-1H6V9h1z"/></svg>')}`;

export function layoutHtml(o) {
  const { site, themes, page, root, app, rendered, navHtml, pageItems, footerHtml, searchIndex, devScript } = o;
  const isHome = page.path === '';
  const title = isHome ? site.title : `${page.title} · ${site.title}`;
  const description = page.data.summary ?? (rendered.text.slice(0, 200) || site.description || site.title);
  const canonical = site.url ? new URL(page.path, site.url).href : null;
  const ogImage = site.url && o.ogImage ? new URL(o.ogImage, site.url).href : null;
  const logo = site.logo ? `<img class="brand-logo" src="${esc(root + 'assets/' + site.logo)}" alt="">` : '';
  const category = page.data.category ? `<p class="article-category">${esc(page.data.category)}</p>` : '';

  return `<!doctype html>
<html lang="en" class="no-js"${attrs({
    'data-style': site.defaultStyle,
    'data-mode': site.defaultMode ?? 'system',
    'data-root': root,
    'data-app': app,
    'data-search': searchIndex,
  })}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:site_name" content="${esc(site.title)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
${canonical ? `<link rel="canonical" href="${esc(canonical)}">\n<meta property="og:url" content="${esc(canonical)}">\n` : ''}${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">\n` : ''}<script>${bootScript(themes.map(t => t.id))}</script>
<link rel="stylesheet" href="${esc(root + app)}/wiki.css">
<link rel="icon" href="${site.logo ? esc(root + 'assets/' + site.logo) : DEFAULT_FAVICON}">
<script type="importmap">${scriptJson({ imports: {
    three: `${root}${app}/vendor/three/three.module.js`,
    'three/addons/': `${root}${app}/vendor/three/addons/`,
  } })}</script>
<script type="module" src="${esc(root + app)}/client/main.js"></script>
</head>
<body>
<a class="skip-link" href="#content">Skip to content</a>
<header class="site-header">
  <button class="icon-button nav-toggle needs-js" type="button" aria-controls="sidebar" aria-expanded="false" aria-label="Open navigation">${ICONS.menu}</button>
  <a class="brand" href="${esc(root)}">${logo}<span>${esc(site.title)}</span></a>
  <button class="search-trigger needs-js" type="button" aria-haspopup="dialog">${ICONS.search}<span class="search-trigger-label">Search the wiki</span><kbd>/</kbd></button>
  <div class="prefs needs-js">
    <button class="icon-button prefs-toggle" type="button" aria-expanded="false" aria-controls="prefs-panel" aria-label="Display settings">${ICONS.palette}</button>
    <div class="prefs-panel" id="prefs-panel" hidden>
      <fieldset><legend>Style</legend>${themes.map(t => `<label><input type="radio" name="style" value="${esc(t.id)}"> ${esc(t.name)}</label>`).join('')}</fieldset>
      <fieldset class="mode-choice"><legend>Mode</legend>${MODES.map(([value, label]) => `<label><input type="radio" name="mode" value="${value}"> ${label}</label>`).join('')}</fieldset>
    </div>
  </div>
</header>
<div class="shell">
  <nav class="sidebar" id="sidebar" aria-label="Wiki">
${navHtml}
  </nav>
  <div class="sidebar-backdrop" hidden></div>
  <main class="article" id="content">
    <header class="article-header">${category}<h1>${esc(page.title)}</h1></header>
    ${rendered.infoboxHtml}
    <div class="prose">
${rendered.contentHtml}
    </div>
  </main>
</div>
<footer class="site-footer">${footerHtml}</footer>
<script type="application/json" id="page-items">${scriptJson(pageItems)}</script>
${devScript ?? ''}
</body>
</html>
`;
}
