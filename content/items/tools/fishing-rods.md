---
{
  "title": "Fishing Rods",
  "aliases": [
    "Diamond Fishing Rod",
    "Golden Fishing Rod",
    "Iron Fishing Rod",
    "Neptunium Fishing Rod",
    "Fishing Rod",
    "Diamond Hook",
    "Double Hook",
    "Gold Hook",
    "Heavy Hook",
    "Iron Hook",
    "Light Hook",
    "Nether Star Hook",
    "Note Hook",
    "Redstone Hook",
    "Fishing Line",
    "Bobber"
  ],
  "summary": "Fishing rods, hooks, lines and bobbers, and what each Aquaculture hook does.",
  "items": [
    "aquaculture:diamond_fishing_rod",
    "aquaculture:gold_fishing_rod",
    "aquaculture:iron_fishing_rod",
    "aquaculture:neptunium_fishing_rod",
    "minecraft:fishing_rod",
    "aquaculture:diamond_hook",
    "aquaculture:double_hook",
    "aquaculture:gold_hook",
    "aquaculture:heavy_hook",
    "aquaculture:iron_hook",
    "aquaculture:light_hook",
    "aquaculture:nether_star_hook",
    "aquaculture:note_hook",
    "aquaculture:redstone_hook",
    "aquaculture:fishing_line",
    "aquaculture:bobber"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  game-data/tags.json (alexscaves:candy_cane_hook is in #soulrend:deleted_items, so it is left out)
  mods/Aquaculture-1.20.1-2.5.7.jar lang (aquaculture.<item>.tooltip.title/.desc: the Shift text)
-->

**Fishing Rods** covers vanilla and Aquaculture 2 fishing gear: rods of five materials and the hooks, lines and bobbers that customize them.

## Usage

Aquaculture rods take a **hook**, a **line** and a **bobber**, which change how the rod fishes. The hook's effect is hidden behind Shift in game:

| Hook | Effect |
| --- | --- |
| [[item:aquaculture:iron_hook]] | Durable: no effect (items no longer break) |
| [[item:aquaculture:diamond_hook]] | Super Durable: no effect (items no longer break) |
| [[item:aquaculture:gold_hook]] | Lucky: increased luck |
| [[item:aquaculture:nether_star_hook]] | Otherworldly: increased luck |
| [[item:aquaculture:light_hook]] | Light: casts further |
| [[item:aquaculture:heavy_hook]] | Heavy: casts shorter |
| [[item:aquaculture:double_hook]] | Double Barb: a chance to catch two things |
| [[item:aquaculture:redstone_hook]] | Enticing: more time to reel in a fish |
| [[item:aquaculture:note_hook]] | Alert: plays a sound when a fish approaches |

The **Neptunium Fishing Rod** has Neptune's Song: fish are more likely to bite.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:aquaculture:diamond_fishing_rod]] | Aquaculture 2 | — | [[craft:aquaculture:diamond_fishing_rod]] |
| [[item:aquaculture:gold_fishing_rod]] | Aquaculture 2 | — | [[craft:aquaculture:gold_fishing_rod]] |
| [[item:aquaculture:iron_fishing_rod]] | Aquaculture 2 | — | [[craft:aquaculture:iron_fishing_rod]] |
| [[item:aquaculture:neptunium_fishing_rod]] | Aquaculture 2 | Neptune's Song [SHIFT] | [[craft:aquaculture:neptunium_fishing_rod]], [[loot:aquaculture:neptunium_fishing_rod]] |
| [[item:minecraft:fishing_rod]] | Minecraft | — | [[craft:minecraft:fishing_rod]], [[loot:minecraft:fishing_rod]] |
| [[item:aquaculture:diamond_hook]] | Aquaculture 2 | Super Durable [SHIFT] | [[craft:aquaculture:diamond_hook]] |
| [[item:aquaculture:double_hook]] | Aquaculture 2 | Double Barb [SHIFT] | [[craft:aquaculture:double_hook]] |
| [[item:aquaculture:gold_hook]] | Aquaculture 2 | Lucky [SHIFT] | [[craft:aquaculture:gold_hook]] |
| [[item:aquaculture:heavy_hook]] | Aquaculture 2 | Heavy [SHIFT] | [[craft:aquaculture:heavy_hook]] |
| [[item:aquaculture:iron_hook]] | Aquaculture 2 | Durable [SHIFT] | [[craft:aquaculture:iron_hook]] |
| [[item:aquaculture:light_hook]] | Aquaculture 2 | Light [SHIFT] | [[craft:aquaculture:light_hook]] |
| [[item:aquaculture:nether_star_hook]] | Aquaculture 2 | Otherworldly [SHIFT] | [[craft:aquaculture:nether_star_hook]] |
| [[item:aquaculture:note_hook]] | Aquaculture 2 | Alert [SHIFT] | [[craft:aquaculture:note_hook]] |
| [[item:aquaculture:redstone_hook]] | Aquaculture 2 | Enticing [SHIFT] | [[craft:aquaculture:redstone_hook]] |
| [[item:aquaculture:fishing_line]] | Aquaculture 2 |  | [[craft:aquaculture:fishing_line]] |
| [[item:aquaculture:bobber]] | Aquaculture 2 |  | [[craft:aquaculture:bobber]] |

## Fishing rods

### Diamond Fishing Rod

[[item:aquaculture:diamond_fishing_rod]] (Aquaculture 2)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:diamond_fishing_rod}}

### Golden Fishing Rod

[[item:aquaculture:gold_fishing_rod]] (Aquaculture 2)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:gold_fishing_rod}}

#### Used in

{{uses aquaculture:gold_fishing_rod}}

### Iron Fishing Rod

[[item:aquaculture:iron_fishing_rod]] (Aquaculture 2)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:iron_fishing_rod}}

#### Used in

{{uses aquaculture:iron_fishing_rod}}

### Neptunium Fishing Rod

[[item:aquaculture:neptunium_fishing_rod]] (Aquaculture 2)

Its tooltip says:

- Neptune's Song [SHIFT]

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `aquaculture:box/neptunes_bounty` (loot table) | 7.14% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes aquaculture:neptunium_fishing_rod}}

#### Used in

{{uses aquaculture:neptunium_fishing_rod}}

### Fishing Rod

[[item:minecraft:fishing_rod]] (Minecraft)

#### Obtaining

Dropped by [[loot:minecraft:fishing_rod]] (the 12 most likely are shown):

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:chests/impaled_icebreaker/food_barrel` (chest) | 100% | 1 |
| `u_sea:island/cooled_fish` (chest) | 100% per roll, 0–1 rolls (one roll at 33%) | 1 |
| `u_sea:raft/cooled_fish` (chest) | 100% per roll, 0–1 rolls (one roll at 33%) | 1 |
| `minecraft:chests/underwater_ruin_small` (chest) | 41.7% | 1 |
| `alshanex_familiars:chests/origin_island/fishing` (chest) | 40% | 1 |
| `minecraft:chests/underwater_ruin_big` (chest) | 21.7% | 1 |
| `dungeons_arise:chests/fishing_hut/fishing_hut_barrels` (chest) | 21% | 1 |
| `minecraft:gameplay/fishing/treasure` (fishing) | 16.7% | 1 |
| `idas:chests/wacky_wares/wacky_wares_fishing` (chest) | 8.47% per roll, 5–7 rolls | 1 |
| `idas:chests/fishermans_lodge/fishermans_lodge_tools` (chest) | 7.69% per roll, 2 rolls | 1 |
| `cataclysm:chests/sunken_city/sunken_city_tools` (chest) | 7.14% per roll, 2 rolls | 1 |
| `idas:chests/haunted_manor/haunted_manor_tools` (chest) | 7.14% per roll, 2 rolls | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes minecraft:fishing_rod}}

#### Used in

{{uses minecraft:fishing_rod}}

## Hooks

### Diamond Hook

[[item:aquaculture:diamond_hook]] (Aquaculture 2)

Its tooltip says:

- Super Durable [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:diamond_hook}}

#### Used in

{{uses aquaculture:diamond_hook}}

### Double Hook

[[item:aquaculture:double_hook]] (Aquaculture 2)

Its tooltip says:

- Double Barb [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:double_hook}}

### Gold Hook

[[item:aquaculture:gold_hook]] (Aquaculture 2)

Its tooltip says:

- Lucky [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:gold_hook}}

### Heavy Hook

[[item:aquaculture:heavy_hook]] (Aquaculture 2)

Its tooltip says:

- Heavy [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:heavy_hook}}

### Iron Hook

[[item:aquaculture:iron_hook]] (Aquaculture 2)

Its tooltip says:

- Durable [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:iron_hook}}

#### Used in

{{uses aquaculture:iron_hook limit=6}}

### Light Hook

[[item:aquaculture:light_hook]] (Aquaculture 2)

Its tooltip says:

- Light [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:light_hook}}

### Nether Star Hook

[[item:aquaculture:nether_star_hook]] (Aquaculture 2)

Its tooltip says:

- Otherworldly [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:nether_star_hook}}

### Note Hook

[[item:aquaculture:note_hook]] (Aquaculture 2)

Its tooltip says:

- Alert [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:note_hook}}

### Redstone Hook

[[item:aquaculture:redstone_hook]] (Aquaculture 2)

Its tooltip says:

- Enticing [SHIFT]

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:redstone_hook}}

## Lines and bobbers

### Fishing Line

[[item:aquaculture:fishing_line]] (Aquaculture 2)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:fishing_line}}

### Bobber

[[item:aquaculture:bobber]] (Aquaculture 2)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes aquaculture:bobber}}
