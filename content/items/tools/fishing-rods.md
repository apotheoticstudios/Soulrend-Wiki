---
{
  "title": "Fishing Rods",
  "aliases": [
    "Diamond Fishing Rod",
    "Golden Fishing Rod",
    "Iron Fishing Rod",
    "Neptunium Fishing Rod",
    "Fishing Rod",
    "Candy Cane Hook",
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
    "alexscaves:candy_cane_hook",
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
  first pass from the game-data dumps (durability, obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  mods/Aquaculture-1.20.1-2.5.7.jar lang (aquaculture.<item>.tooltip.title/.desc: the Shift text)
-->

**Fishing Rods** covers vanilla and Aquaculture 2 fishing gear: rods of five materials and the hooks, lines and bobbers that customize them.

## Usage

Aquaculture rods take a **hook**, a **line** and a **bobber**, which change how the rod fishes. The hook's effect is hidden behind Shift in game:

| Hook | Effect |
| --- | --- |
| [[item:aquaculture:iron_hook]] | Durable: 20% chance not to use durability |
| [[item:aquaculture:diamond_hook]] | Super Durable: 50% chance not to use durability |
| [[item:aquaculture:gold_hook]] | Lucky: increased luck |
| [[item:aquaculture:nether_star_hook]] | Otherworldly: 50% chance not to use durability, and increased luck |
| [[item:aquaculture:light_hook]] | Light: casts further |
| [[item:aquaculture:heavy_hook]] | Heavy: casts shorter |
| [[item:aquaculture:double_hook]] | Double Barb: a chance to catch two things |
| [[item:aquaculture:redstone_hook]] | Enticing: more time to reel in a fish |
| [[item:aquaculture:note_hook]] | Alert: plays a sound when a fish approaches |

The **Neptunium Fishing Rod** has Neptune's Song: fish are more likely to bite. A rod with more durability (Iron 125, Gold 55, Diamond 450, Neptunium 1,000) lasts longer than the vanilla rod's 64.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:aquaculture:diamond_fishing_rod]] | Aquaculture 2 | 450 durability | crafting |
| [[item:aquaculture:gold_fishing_rod]] | Aquaculture 2 | 55 durability | crafting |
| [[item:aquaculture:iron_fishing_rod]] | Aquaculture 2 | 125 durability | crafting |
| [[item:aquaculture:neptunium_fishing_rod]] | Aquaculture 2 | Neptune's Song [SHIFT]; 1,000 durability | crafting, 1 loot table |
| [[item:minecraft:fishing_rod]] | Minecraft | 64 durability | crafting, 30 loot tables |
| [[item:alexscaves:candy_cane_hook]] | Alex's Caves | 200 durability | crafting |
| [[item:aquaculture:diamond_hook]] | Aquaculture 2 | Super Durable [SHIFT] | crafting |
| [[item:aquaculture:double_hook]] | Aquaculture 2 | Double Barb [SHIFT] | crafting |
| [[item:aquaculture:gold_hook]] | Aquaculture 2 | Lucky [SHIFT] | crafting |
| [[item:aquaculture:heavy_hook]] | Aquaculture 2 | Heavy [SHIFT] | crafting |
| [[item:aquaculture:iron_hook]] | Aquaculture 2 | Durable [SHIFT] | crafting |
| [[item:aquaculture:light_hook]] | Aquaculture 2 | Light [SHIFT] | crafting |
| [[item:aquaculture:nether_star_hook]] | Aquaculture 2 | Otherworldly [SHIFT] | crafting |
| [[item:aquaculture:note_hook]] | Aquaculture 2 | Alert [SHIFT] | crafting |
| [[item:aquaculture:redstone_hook]] | Aquaculture 2 | Enticing [SHIFT] | crafting |
| [[item:aquaculture:fishing_line]] | Aquaculture 2 |  | crafting |
| [[item:aquaculture:bobber]] | Aquaculture 2 |  | crafting |

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

30 loot tables drop it (the 12 most likely are shown):

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

### Candy Cane Hook

[[item:alexscaves:candy_cane_hook]] (Alex's Caves)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes alexscaves:candy_cane_hook}}

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
