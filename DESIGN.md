---
name: Mod Planner (Soulrend Wiki dev tools)
description: A dense, CurseForge-style mod browser with a planning layer, for the dev tools under dev-tools/ only.
colors:
  accent: "#2f6fe0"
  accent-text: "#7eabff"
  accent-soft: "rgba(79, 140, 255, 0.14)"
  ok: "#4cc265"
  ok-soft: "rgba(76, 194, 101, 0.12)"
  warn: "#dba53a"
  warn-soft: "rgba(219, 165, 58, 0.13)"
  bad: "#f2716b"
  bad-soft: "rgba(242, 113, 107, 0.13)"
  bg: "#0e1013"
  panel: "#15181d"
  raised: "#1c2027"
  hover: "#232832"
  border: "#2a2f38"
  border-strong: "#3a414d"
  text: "#e7e9ec"
  muted: "#a3aab5"
  faint: "#868e9a"
  on-accent: "#ffffff"
typography:
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.45
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
  body-small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.05em"
  button:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    fontSize: "13px"
    fontWeight: 600
rounded:
  sm: "4px"
  md: "6px"
  pill: "13px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  gutter: "28px"
components:
  button:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "34px"
  button-hover:
    backgroundColor: "{colors.hover}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "34px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  button-small:
    padding: "0 9px"
    height: "28px"
  input:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0 10px"
    height: "34px"
  nav-item:
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "6px 8px"
  nav-item-current:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
  segment-selected:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.md}"
    padding: "5px 10px"
  filter-chip:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "0 4px 0 10px"
    height: "26px"
  status-ok:
    backgroundColor: "{colors.ok-soft}"
    textColor: "{colors.ok}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "24px"
  status-warn:
    backgroundColor: "{colors.warn-soft}"
    textColor: "{colors.warn}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "24px"
  status-bad:
    backgroundColor: "{colors.bad-soft}"
    textColor: "{colors.bad}"
    rounded: "{rounded.pill}"
    padding: "0 9px"
    height: "24px"
  badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "0 6px"
    height: "20px"
  mod-row:
    rounded: "{rounded.sm}"
    padding: "5px 8px"
  sheet:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    width: "min(440px, 100vw)"
---

# Design System: Mod Planner

Scope: this system applies to `dev-tools/` only (served at `/dev-tools/`: the role overview and the planner). The Soulrend wiki itself has a separate theme system (`site/themes/`, `src/styles/`, the original pixel font) that this file does not describe and that the dev tools deliberately do not share. Tokens live in `dev-tools/shared.css`; page layout lives in `dev-tools/mods/planner.css` and the overview's inline style block.

## Overview

**Creative North Star: "The Straight Catalog"**

The category standard played straight: a mod browser at the craft level of the CurseForge website, with search on top, a facet sidebar and a dense list of mods. It refuses any themed costume. What it adds is a planning layer (roles, addons by base mod, a dependency filter, pack checks and a shortlist) expressed with the same neutral parts as everything else, never with new decoration.

The surface is dark neutral by default: a near-black ground, the sidebar, top bar and sheet one step lighter, 1px borders between everything, and light ink. A light scheme comes from the same tokens through `prefers-color-scheme`. One blue accent carries selection, primary actions and focus. Green, amber and red exist only to report pack-check results and declared conflicts. Density serves volume: the author scans hundreds of mods per role, so a row is about 64px tall and carries icon, name, author, summary, type chips, stats, pack status and Keep/Reject.

**Key Characteristics:**
- Neutral dark panels with tonal steps and 1px borders; no texture, no gradient, no imagery beyond mod icons.
- One accent hue (blue) for state and action; semantic colors only for pack checks.
- A single system UI sans at small sizes; tabular figures for every count and statistic.
- 6px corners on controls, pills for status and chips, drawn 24-unit SVG line icons.
- Shadow only on surfaces that float over the page (the shortlist sheet and the mobile filter drawer).

## Colors

A neutral blue-gray ramp with one blue accent and three muted semantic states; every value has a light-scheme counterpart in `shared.css`.

### Primary
- **Planner Blue** (`accent`): the fill of primary buttons, the pressed Kept button, the shortlist count badge, checked tag boxes and checkbox accents.
- **Link Blue** (`accent-text`): text-weight accent: links, the current role in the sidebar, the selected loader segment, hovered mod names, the brand icon and the focus outline.
- **Blue Wash** (`accent-soft`): the background of the current nav item, the selected segment and kept rows.

### Tertiary (pack-check states)
- **In-Pack Green** (`ok`, `ok-soft`): "In pack" status pills and requirements the pack or shortlist already has.
- **Needs Amber** (`warn`, `warn-soft`): "Needs N" pills, missing-requirement links and the shortlist's Missing requirements heading.
- **Conflict Red** (`bad`, `bad-soft`): declared conflicts, the pressed Reject button and excluded type tags.

### Neutral
- **Night Ground** (`bg`): page background and the sticky toolbar.
- **Panel** (`panel`): top bar, sidebar, shortlist sheet and row hover.
- **Raised** (`raised`): inputs, buttons, chips, type tags and icon placeholders.
- **Hover** (`hover`): hover fill for buttons, nav items and tags.
- **Hairline** (`border`) and **Strong Hairline** (`border-strong`): dividers and control strokes; the strong one on hover and for checkbox boxes and scrollbars.
- **Ink** (`text`), **Muted Ink** (`muted`), **Faint Ink** (`faint`): primary text; secondary text (summaries, counts in headings, labels); tertiary text (authors, nav counts, placeholders, stat icons). In the light scheme faint is darkened to near muted for legibility.

### Named Rules
**The One Accent Rule.** Blue is the only hue for selection, primary action and focus. Nothing else is tinted blue, and no second accent exists.

**The States-Only Rule.** Green, amber and red appear only as pack-check and conflict states (status pills, requirement links, Reject, excluded tags, shortlist warnings). They never decorate.

## Typography

**Body Font:** system-ui (with -apple-system, Segoe UI, Roboto, Helvetica Neue, sans-serif)

**Character:** One native UI sans, sized small and set with weight and ink tone rather than size jumps. It reads as the tool it is, matching the CurseForge reference.

### Hierarchy
- **Headline** (700, 20px; 24px on the overview page): the page title only, followed on the same baseline by a muted blurb.
- **Title** (600, 15px, 1.2): mod names in rows and role names on the overview; the brand name at 700, 15px.
- **Body** (400, 14px, 1.45): the base size for the page and nav items.
- **Body small** (400, 13px, 1.35): summaries, field labels, segmented options, stats; 12px for authors, meta lines, counts and chips.
- **Label** (700, 12px, 0.05em tracking, uppercase): group headings of lists only (sidebar groups, overview sections at 13px, shortlist groups).
- **Button** (600, 13px; 12px small).

### Named Rules
**The Tabular Counts Rule.** Every count, download figure and date sits in tabular figures (`.num` or the stats column) so columns of numbers align while scanning.

**The Labels-Head-Lists Rule.** Uppercase tracked labels name a group of items directly below them. They never sit above a headline as an eyebrow.

## Layout

A sticky 56px top bar (brand left, search centred at max 560px, pack and shortlist buttons right) over a two-column grid: a 272px sticky sidebar and a fluid main column with 28px side padding. Under the page head, a sticky toolbar (result count left, pack toggles, Show and Sort selects) bleeds to the column edges on the ground color, then removable filter chips, then the list.

Mod rows are a five-column grid: 40px icon, flexible body, 128px stats, 112px status, actions; gaps 16px, padding 5px 8px, one hairline below each. The overview is a centred 1120px column with a two-column role list and a four-column addon list, both ruled by hairlines.

Spacing runs on 4/8/12/16/20/28px; tight 2px and 6px gaps appear inside rows and chips.

Responsive: at 1180px the stats column drops. At 900px the sidebar becomes an off-canvas drawer (max 320px, 88vw) behind a Filters button with a 45% black scrim, and labels and the search shortcut hint hide. At 640px rows collapse to icon plus a stacked body (summary clamps to two lines, status and actions below), the toolbar stops sticking and the brand shows its icon only. The overview's roles go to one column and addons to two.

## Elevation & Depth

Flat by default. Depth comes from tonal steps (ground, panel, raised, hover) and 1px hairlines. The one shadow is reserved for surfaces that float above the page.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3)`; light scheme `0 12px 32px rgba(20, 30, 45, 0.16), 0 2px 6px rgba(20, 30, 45, 0.08)`): the shortlist sheet and the mobile filter drawer, always paired with a `rgba(0, 0, 0, 0.45)` scrim.

### Named Rules
**The Float-Only Shadow Rule.** Rows, cards, buttons and the top bar never carry shadows; only a sheet or drawer that covers the page does.

## Shapes

Gently rounded rectangles: 6px on controls, nav items, segments and mod icons; 4px on rows, type chips, checkbox boxes, skeleton bars and the shortcut hint. Pills (radius half the height) for the count badge, status pills and filter chips. Strokes are 1px everywhere except the 2px focus outline and the dashed drop target.

Icons are drawn on a 24-unit grid as 2px round-capped, round-joined strokes with no fill, defined once as SVG symbols in `shared.js` and sized 16px (12-14px inline in meta and chips, 20px for the brand, 28px in the drop target).

## Components

### Buttons
Neutral and compact; color only when the button is the main action or a pressed mark.
- **Shape:** 34px tall, 6px corners, 1px border; small variant 28px.
- **Default:** raised fill, hairline border, 600 13px text; hover moves to the hover fill and the strong hairline.
- **Primary:** accent fill and border, white text; hover brightens by 8%. Used for Copy list and the pressed Kept state.
- **Ghost:** no fill or border until hover. Used for Reset, Close and remove buttons.
- **Reject:** a square 34px icon button; pressed it takes the conflict-red wash and stroke.
- **Disabled:** 50% opacity.

### Chips
- **Filter chips:** 26px pills on raised fill with a hairline and a 20px round remove button; an excluded filter is struck through in muted ink. A text-only "clear" link in Link Blue follows them.
- **Type chips:** inline 4px-cornered tags on raised fill in muted ink inside the row meta line.
- **Status pills:** 24px pills, 600 12px text with a 13px icon, on the soft wash of their state color.

### Inputs / Fields
- **Style:** 34px tall, raised fill, hairline border, 6px corners, 10px padding; placeholders in faint ink. Selects draw their chevron with two gradient triangles.
- **Hover:** border moves to the strong hairline.
- **Focus:** the global 2px Link Blue outline at 2px offset.
- **Search:** leading 16px search icon and a trailing `/` key hint.
- **Segmented:** wrapped bordered options; the checked one takes the blue wash, accent border and Link Blue 600 text.
- **Tri-state tags:** a 16px box beside the name and count; included fills accent with a check, excluded fills red and strikes the name.

### Navigation
- **Sidebar nav:** full-width rows (6px 8px) with name left and a faint tabular count right; hover fills; the current item takes the blue wash with Link Blue 600 text. Overflow sits behind a "All base mods" disclosure.
- **Overview lists:** hairline-ruled rows with name, count and muted blurb; hover fills with the panel tone and turns the name Link Blue.

### Mod Row (signature)
The unit of scanning: icon, name with author, one-line summary, meta line (type chips, loaders, requirements colored by pack status), stats with download and clock icons, status pill, Keep and Reject. Hover fills with the panel tone; kept rows wear the blue wash; rejected rows drop to 55% opacity. Loading shows pulsing skeleton bars in the same grid.

### Shortlist Sheet (signature)
A right-hand modal `dialog`, min(440px, 100vw) wide and full height, on the panel tone with a left hairline and the Float shadow; it slides in 24px over 0.2s (`cubic-bezier(0.16, 1, 0.3, 1)`). Header with title and count, body grouped under uppercase labels (conflicts in red, missing requirements in amber, then kept mods per role), footer with Copy list (primary) and Clear all.

## Do's and Don'ts

### Do:
- **Do** take every color from the `shared.css` custom properties so the light scheme follows automatically.
- **Do** keep blue for selection, primary action and focus, and keep green, amber and red for pack checks and conflicts.
- **Do** set counts, downloads and dates in tabular figures.
- **Do** draw new icons as 24-unit, 2px round stroke SVG symbols in `shared.js`.
- **Do** keep controls at 34px (28px small) with 6px corners.
- **Do** honor `prefers-reduced-motion`: the sheet, drawer and skeleton pulse switch off their motion.

### Don't:
- **Don't** borrow the wiki's themes, pixel font or Soulrend/Minecraft styling; the dev tools are visually separate.
- **Don't** add a themed costume, texture, gradient or illustration to the planner surfaces.
- **Don't** put shadows on rows, buttons or bars; shadow belongs only to a sheet or drawer over a scrim.
- **Don't** use green, amber or red for decoration or emphasis.
- **Don't** place uppercase tracked labels above headlines as eyebrows.
