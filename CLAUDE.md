# CLAUDE.md

Notes for AI assistants working on the Soulrend Wiki. For how to *use* the wiki (page syntax, embeds, stations, deploying), read `README.md`. This file covers decisions, architecture, conventions and lessons that aren't obvious from the code. This document should be updated upon important findings.

## The project

A hand-built static wiki for **Soulrend**, the user's Forge 1.20.1 modpack (about 420 mod jars, KubeJS, Iron's Spellbooks, GeckoLib). The modpack's dev instance is at `~/Documents/curseforge/minecraft/Instances/Soulrend-Development/`. The vanilla client jar is at `~/Documents/curseforge/minecraft/Install/versions/1.20.1/1.20.1.jar`.

**Before researching the instance, read [`docs/instance-guide.md`](docs/instance-guide.md).** It says where quests, KubeJS mechanics, the Paxi datapacks (origins, skill trees, recipes), the Soulrend jars and boss data live. It also lists which files are stale, empty or misleading. When you learn something new about the instance, add it there.

**Before writing or rewriting a page, read [`docs/style-guide.md`](docs/style-guide.md).** It sets the voice, naming, sourcing rules (no unsourced numbers, a `<!-- sources: … -->` comment on every page), how mob stats scale with level, and a section template for each page type. `content/bosses/act-ii/frostmaw.md` is the worked example.

### Decisions the user made (don't re-ask)

- No premade doc systems (MkDocs, Astro Starlight, …). Everything is custom.
- A **Node build script** produces plain static files in `dist/`. Pages are rendered to HTML at build time and enhanced by browser JS. The browser never renders Markdown.
- **Small vendored libraries are fine**: markdown-it, MiniSearch and three.js at runtime; ajv, pngjs, fflate, opentype.js and wawoff2 at build time. No frameworks.
- **Markdown-first pages** with a strict-JSON header between `---` lines. Embeds can be written **both** as `{{shortcodes}}` and as fenced JSON blocks.
- **Game data is extracted from the game**, not hand-written.
- **The wiki's pixel font is original**: a Times-style pixel serif hand-drawn in `tools/font/glyphs.txt`, on Excalibur's metrics (8px em, 7px caps, 5px x-height) but sharing no glyphs with it or with Times. Don't regenerate it from the Excalibur pack or trace any other font.
- **Editors are trusted**: raw HTML is allowed in Markdown, and there's no sanitizer.
- **Pages follow `docs/style-guide.md`**: neutral encyclopedic voice for new players, American spelling (in-game names verbatim), sourced numbers only, stats scaled to the mob's level, no spoiler gating.
- **Hosting: GitHub Pages** via `.github/workflows/pages.yml` (builds on every push to `main`) at `https://soldierdonkey.github.io/Soulrend-Wiki/`, which is `site.url`. Still keep output host-agnostic (relative links, no server rewrites). Change `site.url` if the address ever changes.

### Open items (as of 2026-10-22)

- The KubeJS export scripts (`tools/kubejs/`) have been run in game: `game-data/` now comes from the export (about 14k items and 16k recipes).
- IconExporter has been run (`icon-exports-x32/`, about 17,000 files): 13,283 items have rendered icons and 136 have none (mostly tab icons, air and hidden items). Its file naming: `ns__path[__meta][__{nbt}|__md5].png`, with `/` written as `___`.
- The user mentioned a "spellbinding table", but no mod jar contains anything by that name. Ask for its slot layout before adding a station.
- **The recipe export misses every recipe that a KubeJS script adds** (see `docs/instance-guide.md`, KubeJS section). Fixing `tools/kubejs/server_scripts/wiki_export.js` needs a re-run in game; until then pages hand-write those recipes from the script.

### Record observed bugs

**When you observe a bug in the modpack** while researching the instance or writing pages (a broken or unobtainable recipe, a misconfigured mob, an item with a wrong tooltip, a crash in the logs), add an entry to `content/bugs.md` (the **Known Bugs** page, linked in the sidebar via `site.json`). Follow the template comment in that file and say where it was seen. Bugs in the wiki's own code don't go there; fix them or mention them to the user.

## Commands

```sh
npm run dev        # tools/dev.mjs: serves dist-dev/ on :4321, rebuilds on change in a child process
npm run build      # tools/build.mjs: production build into dist/, exit 1 on any error
npm run sync-game  # tools/sync-game.mjs: instance -> game-data/ (about 15 s, reads ~1.5 GB of jars twice)
npm run font       # tools/make-font.mjs: tools/font/glyphs.txt -> src/fonts/soulrend-mc.woff2
node tools/build.mjs --dev --out dist-dev   # one-off dev build, includes _drafts
```

Node 26 was installed with Homebrew for this project.

## Architecture

**Build pipeline** (`tools/build.mjs`):

1. Load and validate `site/site.json`, `site/themes/*.json` and `site/stations/*.json` against `site/schemas/` (ajv).
2. Load `game-data/`.
3. Load pages (`tools/lib/content.mjs`) and pre-place page icons in the atlas.
4. Create the render context (`src/render/context.js`) and build the sidebar (`src/render/nav.js`).
5. Render every page (`src/render/page.js`).
6. Build the search index.
7. Pack the atlas (`tools/lib/atlas.mjs`), then write `_app/<hash>/` (CSS, client JS and fonts; the hash covers all of them).
8. Write each page with `src/render/layout.js`, plus `404.html` and `sitemap.xml` (the sitemap only when `site.url` is set).
9. Build into `dist.tmp` and rename it to `dist`, so the dev server never serves a half-built site.

**Directories:**

- `src/render/`: Node-only. It runs at build time and imports markdown-it.
- `src/client/`: browser-only ES modules, served without a bundler.
- `src/shared/`: used by both: §-code formatting (`mctext.js`) and the MiniSearch options. The build and the browser must use identical search options, or the serialized index won't load.

**Key mechanisms:**

- **Links are relative to the current page.** `rootFor(path)` returns `./`, `../../` and so on, which lets the site work on any host or in a sub-folder. Site-relative `/foo` links in Markdown are rewritten. `404.html` is the exception: it uses `new URL(site.url).pathname`, or `/`.
- **Atlas.** `Atlas.place(id)` assigns a grid cell the first time an icon is used, so pages render before the sheet exists. HTML carries the cell as `style="--x;--y"`, and CSS does the positioning. Only icons that pages actually use are packed. Missing icons get Minecraft's magenta checkerboard.
- **Tooltip data.** Each page embeds `<script type="application/json" id="page-items">` holding only the items drawn on that page, so tooltips need no extra request.
- **Themes.** Each style compiles to `:root[data-style][data-mode]` rules. `data-mode="system"` uses a media query, so it works without JS. An inline `<head>` script restores the visitor's choice from localStorage before first paint. Extra CSS in `site/themes/<id>.css` is nested under the style's selector automatically.
- **Embeds.** Each module in `src/render/embeds/` exports `{ render(props, h), positional?, variadic? }`, and `h` comes from `ctx.helpers()`. Call `h.fail(msg)` for page errors (it shows the message inline and records a build error) and `h.warn(msg)` for warnings.
- **Recipes.** Adapters are keyed by *format*, not by mod: `shaped`, `shapeless`, `cooking`, `single`, `smithing` and `generic`, all in `src/render/recipes/adapters/index.js`. Station JSON maps recipe types to an adapter. Types no station claims fall back to the `generic` adapter with an automatic "flow" layout.
- **Diagnostics.** Report problems with `diag.error(file, line, msg)` / `diag.warn(...)` (`tools/lib/diagnostics.mjs`). Duplicates are suppressed. Line numbers are 1-based file lines; Markdown token lines map back through `env.bodyLine`. The dev server shows errors as an overlay, read from `dist-dev/__dev/diagnostics.json`.
- **Drafts.** `_`-prefixed content and asset folders are built only in dev. They are hidden from the sidebar, search and the sitemap.

**game-data sources** (later ones win):

1. The jar scan. Items come from **item models** plus `item.*` lang keys; lang keys alone miss items like smithing templates. Flat icons come from the texture each model resolves to.
2. The KubeJS export in `kubejs/exported/wiki/*.json`.
3. Rendered icons from an icon-export mod.

`game-data/source.json` records which source was used. The build prints a reminder while recipes still come from the jar scan.

## Conventions

- ES modules everywhere. Use 2-space indentation, single quotes and semicolons in the wiki code.
- Comments explain *why* in one line. Match the existing sparse density.
- The KubeJS scripts in `tools/kubejs/` follow the modpack's own style: a `// priority:` header, 4-space indentation, and no semicolons. They must stay gated on `kubejs/exported/wiki/enabled.json` so they do nothing for players.
- CSS gets its breakpoint from `site.json`. Write `@media (--mobile)` / `@media (--desktop)`, which the build replaces (`applyBreakpoints`).
- The layout variables from `site.json` are emitted **before** `src/styles/*.css`, so media queries there can override them.
- Accented letters are composed by `tools/lib/bitmap-font.mjs` from Unicode decompositions; draw base letters and `mark:` entries, not precomposed letters.
- Glyph review: render the bitmaps straight from `loadGlyphs()` into a PNG; browser screenshots blur rows at fractional positions.
- Pixel font styles: `make-font` writes regular, `-bold`, `-italic` and `-bolditalic` files, all registered in `base.css`. Bold skips pixels that would close a 1px gap (otherwise u/v/w fill in). Italic slanting detaches up-right diagonals (M read as N), so check new glyphs in italic at 16px and add an `@italic` variant drawn slanted if needed.
- The pixel font sits on an 8px grid. Keep sizes that use it at multiples of 8 (16/24/32px).
- Invalid page-header fields are reported and then **dropped**, so the rest of the page still renders.
- **Section trees and stubs.** The planned structure is in `content/_outline.md` (dev-only). It covers progression, origins, skill-trees, bosses, enemies, items, features, mods, build-guides and faq. Tree index and level-2 pages are visible and carry the section's `category`. Deeper stubs have `"hidden": true`. Generated stubs start with an `<!-- outline-stub … -->` comment: remove it and `hidden` once a page is written. Page titles must be unique site-wide (a duplicate is a build error), so stubs that share a name are qualified, e.g. "Yeti (Boss)" and "Yeti (Race)". Link them by path: `[[bosses/act-ii/yeti|Yeti]]`.

## Lessons learned (bugs already hit once)

- **Strikethrough thickness.** Chrome ignores the font's OS/2 strikeout size, so `mctext.js` sets `text-decoration: … 0.125em` (one texel) explicitly. The underline position comes from the font via `text-underline-position: from-font` on `.mc-tooltip`.
- **Class-name collisions.** Recipe slots were originally `.slot`, which collided with the icon size modifier `.mc-icon.slot`. Recipe slots are now `.recipe-slot`. Check for overlaps before adding generic class names.
- **Floated infobox overlap.** Boxes next to the floated infobox ran underneath it. Elements with backgrounds or borders in the article need `display: flow-root` (see `prose.css`).
- **Malformed PNGs.** Some mod PNGs have junk after the `IEND` chunk, which pngjs rejects. `readPng` in `atlas.mjs` trims after IEND and retries.
- **mods.toml quoting.** `displayName` values can contain the other quote character (`"Iron's Spells 'n Spellbooks"`), so match each quote style separately.
- **forge:conditional recipes** wrap their alternatives. `activeRecipe()` unwraps them and evaluates `mod_loaded`, `item_exists`, `not`, `and`, `or` and `false`.
- **Item model quirks (jar scan icons).** Forge's `separate_transforms` loader keeps the inventory icon under `perspectives.gui`, often as a reference to `models/displaysettings/…`, so every `models/**` folder must be loaded. Models whose parent chain reaches `builtin/entity` (GeckoLib or Java 3D items) have only UV-map textures; give them no flat icon rather than a scrambled one. Every Compat (`everycomp:*`, about 1,700 items) generates its assets at runtime, so only an icon export can cover it.
- **Screen overlays get baked into IconExporter icons.** The mod renders icons in the top-left of the actual frame, so the user's Chloride FPS display (`config/chloride-client.toml`, `[fpsDisplay] mode`) put a black box and an FPS number into about 9,000 icons. To check an export, look for icons where more than 50% of pixels are opaque near-black. A clean export has about 3, and those are genuinely dark blocks.
- **Tooltip icons are font glyphs.** Mods such as Obscure API draw hunger, saturation and damage icons as private-use characters (U+E000 to U+F8FF) in a bitmap font. `sync-game` copies those font sheets to `game-data/glyphs/` with a `glyphs.json` map, the build emits a `.mc-glyph.g-<codepoint>` sprite class for each, and `src/shared/mctext.js` swaps the characters for those spans. Internal tooltip lines (such as Apotheosis's `APOTH_REMOVE_MARKER`) are filtered by `TOOLTIP_BLACKLIST` in `sync-game.mjs`.
- **§-codes in item names.** About 300 exported names contain formatting codes: `§#rrggbb` hex colours (e.g. Simply Swords uniques), normal codes, and Apotheosis's own `§rainbow`. Plain-text uses (link labels, search) go through `itemName()` → `stripMcCodes()`. The tooltip keeps the raw name and renders it with `mcTextToHtml()`.
- **Recipe types without a namespace** (`"crafting_shaped"`, e.g. Explorer's Compass) are read as `minecraft:` by the game; `normalizeRecipe` does the same.
- **Quest pages borrow item icons.** `"itemRows": false` in an infobox drops the automatic Mod and ID rows.
- **Angle brackets in Markdown.** In Markdown the user views rendered (plans, READMEs), wrap `<placeholders>` in backticks. A bare `<style>` was parsed as HTML and broke the rendering of a plan.

## Verifying changes

- **Screenshots.** Use `puppeteer-core` driving `/Applications/Google Chrome.app`. Install it in the session scratchpad, **not** as a project dependency. Wait for `load` plus a short delay, not `networkidle0`: the dev server's live-reload EventSource keeps the network busy forever. Useful checks:
  - set `localStorage['wiki:style']`;
  - emulate `prefers-color-scheme`;
  - use a mobile viewport (390×844, touch);
  - disable JavaScript to confirm the build-time rendering.
- **Checking that bad content fails the build.** Do it in a scratch copy of the repo (rsync it, symlink `node_modules`) so the user's `content/` isn't touched, then confirm `node tools/build.mjs` exits 1 with `file:line` messages.
- **Coverage.** `content/_test/kitchen-sink.md` exercises every feature; extend it when adding one.
