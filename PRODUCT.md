# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Soulrend players**, new and returning, who read the wiki to learn the Forge 1.20.1 modpack: bosses, progression, items, origins, skill trees and leveling.
- **The modpack author** (the project owner), who uses the dev tools at `/dev-tools/` to plan future modpacks: finding CurseForge mods for a version and loader, shortlisting them, and checking them against a pack's mod list.

## Product Purpose

The Soulrend Wiki is the reference for the Soulrend modpack, with game data extracted from the game itself rather than written by hand. The dev tools are a separate workbench on the same site that turns CurseForge's mod catalog into something the author can plan a pack with: browse by the role a mod plays in a pack, narrow by version, loader and dependency, mark mods Keep or Reject, and see declared incompatibilities and missing requirements against an existing pack.

## Positioning

- The wiki's numbers, recipes, models and skill trees come from the modpack's own jars and an in-game export, not from community guesswork.
- The dev tools work from a full snapshot of CurseForge's Minecraft mods (about 266,000, of which about 73,000 have 1,000+ downloads), grouped by modpack role and by the base mod an addon extends, which CurseForge's own site does not offer.

## Operating Context

- The author plans packs on a desktop browser, going through hundreds of candidate mods per category; the dev tools must stay fast to scan at that volume.
- Compatibility checks read a CurseForge `minecraftinstance.json` or a modpack `manifest.json` dropped onto the page.
- Data is refreshed by running `npm run mods` locally (CurseForge API key in `.env`), then committing and pushing; a Cloudflare Worker deploys `main` to soulrend.wiki.

## Capabilities and Constraints

- Static site: a Node build writes plain HTML, CSS and JS; no framework, no server code. The dev tools are standalone pages with their own inline CSS and JS, copied into the build untouched.
- Small vendored libraries only (markdown-it, MiniSearch, three.js); no frameworks.
- The dev tools are visually separate from the wiki: they do not use the wiki's themes or pixel font.
- Compatibility only covers what mod authors declare on CurseForge (required and incompatible projects). Dependencies are the union over each mod's latest files, not per version.
- Mods under 1,000 downloads are left out of the dev tools' data.
- Keep and Reject marks live in the visitor's browser (localStorage) and are shared across categories.

## Brand Commitments

- The wiki has its own pixel font (an original Times-style pixel serif) and Soulrend, Minecraft and plain themes; the dev tools deliberately do not share them.
- The dev tools follow the category standard, played straight: a mod browser at the craft level of the CurseForge website (search on top, facet sidebar, dense mod list), with no themed costume (user's choice, 2026-10-29).

## Evidence on Hand

- `dev-tools/mods/data/*.json`: real CurseForge data per category, from `npm run mods`.
- `game-data/`: the modpack's extracted items, recipes, tags, models and skill trees.
- No user testimonials, usage metrics or external audience for the dev tools; it is a single-user planning tool.

## Product Principles

- Truth from the source: show what the game or CurseForge actually says, and say where a check stops (declared relations only).
- Built for scanning volume: the author compares hundreds of mods, so density and speed beat decoration.
- Group by how packs are planned (the role a mod plays, the mod an addon extends), not by CurseForge's legacy taxonomy.
