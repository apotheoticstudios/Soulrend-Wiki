# Soulrend Wiki

A static wiki for the Soulrend modpack. Pages are Markdown files; a Node build script turns them into plain HTML, CSS and JS in `dist/`, which any static host can serve.

```sh
npm install          # once
npm run dev          # preview at http://localhost:4321, rebuilds and reloads on save
npm run build        # production build into dist/ (fails on any error)
npm run sync-game    # refresh game-data/ from the modpack instance
npm run font         # rebuild the pixel font from tools/font/glyphs.txt
```

`npm run dev` also prints an address you can open on a phone on the same Wi-Fi. Build errors show up in the terminal (as `file:line`, clickable in VS Code) and as a red box on the page.

## Folders

| Folder | What's in it |
| --- | --- |
| `content/` | Pages. `content/items/soul_blade.md` becomes `/items/soul_blade/`. Files or folders starting with `_` are drafts: built by `npm run dev`, skipped by `npm run build`. |
| `assets/` | Images, models and the logo, referenced from pages. `_` folders here are dev-only too. |
| `site/site.json` | Site title, sidebar, layout sizes, default style. |
| `site/themes/` | Styles (colour tokens for light and dark, fonts, optional extra CSS). |
| `site/stations/` | Recipe diagram layouts (crafting table, furnace, …). |
| `site/schemas/` | JSON Schemas. VS Code uses them for autocomplete in the JSON files above. |
| `game-data/` | Item names, icons, recipes and tags from the modpack (written by `npm run sync-game`). |
| `src/` | The renderer (`render/`), browser scripts (`client/`), styles and the generated font. |
| `tools/` | Build, dev server, game-data sync, font converter, and the in-game KubeJS export scripts. |

## Writing a page

```md
---
{
  "title": "Arcane Essence",
  "category": "Items",
  "aliases": ["Essence"],
  "items": ["irons_spellbooks:arcane_essence"],
  "summary": "A magical crafting material.",
  "infobox": {
    "item": "irons_spellbooks:arcane_essence",
    "rows": [["Type", "Material"], { "heading": "Used in" }, ["Blocks", "[[Inscription Table]]"]]
  }
}
---
**Arcane Essence** is used in [[Inscription Table|inscription tables]].

{{uses irons_spellbooks:arcane_essence}}
```

The header between the `---` lines is strict JSON (no comments, no trailing commas). Only `title` is required.

| Field | Meaning |
| --- | --- |
| `title` | Page title. Also what `[[links]]` match. |
| `navTitle` | Shorter title for the sidebar. |
| `category` | Puts the page in sidebar sections that list this category. |
| `order` | Sort position within its category (lowest first). |
| `aliases` | Other names that links and search accept. |
| `items` | Item ids this page covers. Every `[[item:…]]` and recipe slot for these items links here. |
| `icon` | Item whose icon represents the page (sidebar, search, link previews). Defaults to the first of `items`. |
| `summary` | Shown in search results and link previews. |
| `hidden` | Build the page but leave it out of the sidebar and search. |
| `infobox` | `title`, `item` (big icon), `image`, `model` (3D), `caption`, and `rows` of `["Label", "markdown"]` or `{ "heading": "…" }`. The mod name and item id are added automatically. |

### Links and items

| Syntax | Result |
| --- | --- |
| `[[Getting Started]]` | Link by title or alias (case-insensitive). |
| `[[guides/getting-started\|the guide]]` | Link by path, with custom text. |
| `[[Getting Started#Learning magic]]`, `[[#Usage]]` | Link to a section. |
| `[[item:minecraft:diamond]]` | Icon, name and tooltip, linked to the page that lists the item in `items`. |
| `[link](/assets/maps/world.png)` | Paths starting with `/` are site-relative. |

Broken links fail the production build.

### Callouts

```md
> [!NOTE]
> Also TIP, IMPORTANT, WARNING, CAUTION, and LORE (an in-world quote).

> [!WARNING] Custom title
> Text after the marker replaces the title.
```

### Embeds

Write embeds on a line of their own, as a one-line shortcode or a fenced JSON block. The two forms are equivalent.

```md
{{recipes minecraft:torch}}

    ```recipe
    { "id": "minecraft:torch" }
    ```
```

| Embed | Example | Notes |
| --- | --- | --- |
| `recipes` | `{{recipes minecraft:torch limit=6}}` | Every recipe that makes the item. |
| `uses` | `{{uses minecraft:diamond limit=6}}` | Every recipe that uses the item. |
| | `{{recipes output=minecraft:torch input=minecraft:charcoal}}` | `recipes` and `uses` both take `output=` and `input=`; given both, only recipes matching both are shown. |
| `recipe` | `{{recipe minecraft:netherite_sword_smithing}}` | One exported recipe by id, or a hand-written one (below). |
| `items` | `{{items minecraft:diamond minecraft:emerald}}`, `{{items tag=minecraft:planks}}` | A grid of items with tooltips. |
| `image` | `{{image mobs/wraith.png caption="A wraith" align=right width=240 pixelated=true}}` | Path under `assets/`. |
| `model` | `{{model mobs/wraith.glb animation=idle poster=mobs/wraith.png}}` | 3D viewer (see below). |

Hand-written recipes use any station in `site/stations/`. `#tag` ingredients cycle through the tag's items.

```recipe
{ "station": "crafting_table", "grid": ["P P", "PSP", " P "],
  "key": { "P": "#minecraft:planks", "S": "minecraft:stick" }, "output": "minecraft:chest", "count": 2 }
```

```recipe
{ "station": "crafting_table", "ingredients": ["minecraft:stick", "#minecraft:coals"], "output": "minecraft:torch", "count": 4 }
```

```recipe
{ "station": "cutting_board", "label": "Spellbinding", "inputs": ["minecraft:book", "#forge:gems"],
  "outputs": [{ "item": "minecraft:enchanted_book" }], "info": "Costs **5** levels" }
```

`content/_test/kitchen-sink.md` uses every feature. Open `/_test/kitchen-sink/` in `npm run dev`.

## Styles and layout

Visitors choose a style and light/dark/system mode from the palette button. Their choice is remembered.

- `site/themes/<id>.json` defines one style: `name`, `order`, `fonts` (`sans`, `serif`, `mono`, `minecraft`, or any CSS font list), shared `vars`, and the same colour tokens for `light` and `dark`. The schema lists every required token.
- An optional `site/themes/<id>.css` adds style-specific CSS. It is scoped to that style automatically, so plain selectors like `.infobox { … }` are safe.
- Sidebar sections, layout sizes and the mobile breakpoint are in `site/site.json`.

## Recipe stations

A station is a diagram layout in Minecraft GUI pixels (slots are 18×18, drawn at 2×). Its `recipes` map says which recipe types it shows and which adapter reads them:

```json
{
  "label": "Crafting Table", "icon": "minecraft:crafting_table",
  "size": [120, 54],
  "inputs": [{ "at": [0, 0], "grid": [3, 3] }],
  "outputs": [{ "at": [94, 14], "large": true }],
  "decorations": [{ "type": "arrow", "at": [62, 19] }],
  "recipes": { "minecraft:crafting_shaped": "shaped", "minecraft:crafting_shapeless": "shapeless" }
}
```

The adapters are `shaped`, `shapeless`, `cooking`, `single`, `smithing` and `generic`, all in `src/render/recipes/adapters/index.js`. If a mod's recipe format matches one of them, map its type in a station. For a mod with an unusual format, add a small adapter function there.

Use `"flow": true` instead of `size`/`inputs`/`outputs` for an automatic row layout. Recipe types no station claims are still shown with the generic row layout, labelled from the type name.

## Game data

`npm run sync-game` reads the instance at `~/Documents/curseforge/minecraft/Instances/Soulrend-Development` (override with `--instance <dir>`) and writes `game-data/`. It combines three sources, later ones winning:

1. **Jar scan** (automatic). Item names, flat icons, recipes and tags straight from the mod jars. This works without starting the game, but it misses KubeJS recipe changes, tooltips, rarities and 3D block icons.
2. **In-game export** (exact data). To set it up:
   1. Copy `tools/kubejs/server_scripts/wiki_export.js` and `tools/kubejs/client_scripts/wiki_export.js` into the instance's `kubejs/` folders.
   2. Create `kubejs/exported/wiki/enabled.json` containing `{}`. Without this file the scripts do nothing, so they're harmless if they ever ship with the pack.
   3. Start the game and open a single-player world. On load, the server script writes `recipes.json` and `tags.json`. When you join, the client script writes `items.json` and tells you in chat.
   4. Run `npm run sync-game`.
3. **Rendered icons** (exact inventory icons, including 3D items and Every Compat's runtime-generated blocks). Use [IconExporter](https://www.curseforge.com/minecraft/mc-mods/iconexporter), in the dev instance only:
   1. Download **IconExporter** and its required library **Cyclops Core** for Forge 1.20.1, and put both jars in the instance's `mods/` folder. The CurseForge page shows newer versions first, so open the full Files list and filter to 1.20.1.
   2. Launch the game, open any world, and run `/iconexporter export 32`. The `32` matches `iconSize` in `site.json`; without it the mod uses 64. Wait for it to finish (Escape cancels). With about 14,000 items this takes a while.
   3. The icons land in `icon-exports-x32/` next to `screenshots/` in the instance. Run `npm run sync-game`. It picks up the newest instance folder with "icon" and "export" in its name (or pass `--icons <dir>`), and its summary should show a large "rendered" count.
   4. Remove the two jars again, or keep them only in your dev copy. Re-export after adding or updating mods that add items.

   IconExporter names files like `minecraft__oak_slab.png` (`/` in item paths becomes `___`, and items with NBT data get a `__{…}` suffix). `sync-game` uses the plain icon when one exists, otherwise the item's first NBT variant (for example tools exported only as `{Damage:0}`).

   **Turn off any FPS or HUD overlay first** (for example `[fpsDisplay] mode = "OFF"` in `config/chloride-client.toml`). IconExporter captures the icons from the screen, so an overlay drawn in the top-left corner gets baked into them as a black box with a number.

   Without rendered icons, the jar scan falls back to the flat texture an item model points at. Items the game draws in 3D with code (GeckoLib weapons, banners, chests, …) and Every Compat items have no usable flat texture, so they show the magenta "missing" checkerboard until you export.

Re-run the export (open a world with `enabled.json` present, then `npm run sync-game`) whenever recipes, items or tags change. If a script errors, the KubeJS log says where.

## Font

`npm run font` rebuilds `src/fonts/soulrend-mc.woff2` from `tools/font/glyphs.txt`, an original Times-style pixel serif drawn for this wiki. Each glyph is a grid of `#` and `.` (rows 0-6 above the baseline, 7-8 for descenders); edit the grid and rerun. Accented Latin letters (Latin-1 and Latin Extended-A) are composed from a base letter and an accent mark, so only new base letters or marks need drawing. Bold, italic and bold italic files are generated from the same drawings: bold doubles each pixel one to the right, and italic slants the rows in whole-pixel steps. A glyph that doesn't survive the slant can get an `@italic` variant, drawn already slanted (see the italic section of the file). Characters the font lacks fall back to the UI font. The font is drawn on an 8px grid, so it is sharpest at 8, 16, 24 and 32 px.

## 3D models

Export models from Blockbench as glTF (`File → Export → Export glTF Model`, binary `.glb`), put them in `assets/`, and embed them with `{{model path.glb}}`. GeckoLib models open directly in Blockbench. Mobs that are defined in Java code need to be rebuilt or exported by other means; until then, use a `poster` image. three.js only downloads on pages that have a model.

## Deploying

Upload the contents of `dist/` to any static host (GitHub Pages, Cloudflare Pages, Netlify, …). Links are relative, so the site also works from a sub-folder. Once the address is known, set `"url"` in `site/site.json` (for example `"https://wiki.example.com/"`). That adds `sitemap.xml`, canonical links and icon images for Discord link previews.
