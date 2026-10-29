---
version: 1
slug: "dev-tools-mods-index-html"
primary_target: "dev-tools/mods/index.html"
related_targets: ["dev-tools/index.html"]
---

# Mod Planner (dev tools)

Scope: `/dev-tools/` (role overview) and `/dev-tools/mods/` (the planner). Visitor mode: Operate. Audience: the modpack author planning a pack on a desktop browser, scanning hundreds of mods per role. Task: pick a role, set version and loader once, scan, keep or reject, check against a pack, end with a shortlist and its missing requirements. Constraints: static files, inline or sibling CSS/JS, no framework; data from `npm run mods`.

## Direction contract

THESIS: The category standard played straight: a CurseForge-website-style mod browser with search on top, a facet sidebar and a dense mod list. It refuses any themed costume; the only additions are the planning layer: modpack roles, addons by base mod, a dependency filter, pack checks and a shortlist.

OWN-WORLD: Dark neutral panels by default (near-black ground, one step lighter sidebar and rows, 1px borders), light ink, a light theme from the same tokens. One blue accent owns selection, primary actions and focus. Green, amber and red appear only as pack-check states. System UI sans, tabular figures, 6px radii, drawn SVG icons.

STORY: The author opens a role from the overview, narrows by version, loader and type, scans compact rows, keeps or rejects, sees what each mod needs from their pack, and leaves with a copyable shortlist that lists missing requirements.

FIRST VIEWPORT: Top bar: product name left, search centred (max 560px), shortlist count and pack button right. Left 264px sidebar: roles with counts, addons-for list, version, loader, type checkboxes, depends-on. Main: result count, sort and show controls, then at least ten compact rows (40px icon, name and author, one-line summary, type chips, downloads and updated at right, pack status, Keep and Reject).

FORM: The category standard (standing exit), reference product the CurseForge website. seed: seed:1cf53e9c38329c4d

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
