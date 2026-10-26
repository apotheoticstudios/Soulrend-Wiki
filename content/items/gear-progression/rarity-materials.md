---
{
  "title": "Rarity Materials",
  "aliases": [
    "Mysterious Scrap Metal",
    "Timeworn Fabric",
    "Luminous Crystal Shard",
    "Arcane Sands",
    "Core of the Family",
    "Godforged Pearl",
    "Artifact Shards",
    "Manifestation of Infinity",
    "Galactic Core"
  ],
  "summary": "Rarity Materials: 9 items from the Soulrend modpack.",
  "items": [
    "apotheosis:common_material",
    "apotheosis:uncommon_material",
    "apotheosis:rare_material",
    "apotheosis:epic_material",
    "apotheotic_additions:heirloom_material",
    "apotheosis:mythic_material",
    "apotheotic_additions:artifact_material",
    "apotheosis:ancient_material",
    "apotheotic_additions:esoteric_material",
    "fallen_gems_affixes:fabled_material"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json (apotheosis:salvaging, apotheosis:reforging, rarity apple recipes)
  fallen_gems_affixes jar: data/fallen_gems_affixes/loot_modifiers/universal_boss_loot.json (rarity_drops)
  ApotheoticAdditions jar: data/apotheotic_additions/wanderer_trades/*.json (coin trades, conditions checked against the installed mods)
  kubejs/server_scripts/dimension/past.js (Decaying King drops a Galactic Core 50% of the time); kubejs/server_scripts/magic/dacxoptics_recipes.js (Esoteric Reforging Table)
-->

**Rarity Materials** are the crafting currency of Apotheosis gear: one material per rarity, from Common to Esoteric, plus Fallen Gems & Affixes' Fabled.

## Usage

Every Apotheosis rarity has a rarity material. Materials pay for working on gear of that rarity:

- **Reforging:** each reforge costs materials of the target rarity (see [[items/gear-progression/reforging-tables|Reforging Tables]]).
- **Gem cutting:** raising a gem a rarity costs 3 materials of its current rarity, 1 of the next or 9 of the one below (see [[items/gear-progression/gems#Upgrading gems|Gems]]).
- **Other uses:**
  - eight of a material around an apple make a [[items/gear-progression/coins-and-apples|rarity apple]];
  - Common, Uncommon and Rare materials trade for Apotheotic Coins;
  - the Galactic Core goes into the Esoteric Reforging Table.

| Rarity | Material | Salvaging an affix item of this rarity gives | Other sources |
| --- | --- | --- | --- |
| Common | Mysterious Scrap Metal | 1–4 | universal bosses; salvaging an Uncommon material |
| Uncommon | Timeworn Fabric | 1–4 | universal bosses; salvaging a Rare material |
| Rare | Luminous Crystal Shard | 1–4 | universal bosses; salvaging an Epic material or a Core of the Family |
| Epic | Arcane Sands | 1–4 | universal bosses; salvaging a Mythic material |
| Mythic | Godforged Pearl | 1–4 | universal bosses; salvaging an Ancient material or Artifact Shards |
| Ancient | Manifestation of Infinity | 1–3 or 1–4 (two recipes) | universal bosses; 5 Ascended Coins at a Wandering Trader |
| Artifact | Artifact Shards | 1–2 | salvaging a Galactic Core; 5 Ascended Coins at a Wandering Trader |
| Heirloom | Core of the Family | 1–2 | none known |
| Esoteric | Galactic Core | 1–2 | the [[bosses/act-v/decaying-king-past\|Decaying King (Past)]], 50% per kill |
| Fabled | Relic of the Renowned | — | Fabled universal bosses |

- **Salvaging** happens at the Salvaging Table (see [[items/gear-progression/reforging-tables|Reforging Tables]]). Affix scrolls salvage into 1–2 materials of their rarity. A material salvaged on its own turns into 1–2 of the rarity below, as the last column shows.
- **Universal bosses** (see [[items/gear-progression|Gear Progression]]) have a 15% chance to drop 1–2 materials of their own rarity, and a 25% chance to drop gem dust.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheosis:common_material]] | Apotheosis | Rarity Material (Common) | crafting, 1 loot table |
| [[item:apotheosis:uncommon_material]] | Apotheosis | Rarity Material (Uncommon) | 1 loot table |
| [[item:apotheosis:rare_material]] | Apotheosis | Rarity Material (Rare) |  |
| [[item:apotheosis:epic_material]] | Apotheosis | Rarity Material (Epic) |  |
| [[item:apotheotic_additions:heirloom_material]] | Apotheotic Additions | Rarity Material (Heirloom) |  |
| [[item:apotheosis:mythic_material]] | Apotheosis | Rarity Material (Mythic) |  |
| [[item:apotheotic_additions:artifact_material]] | Apotheotic Additions | Rarity Material (Artifact) |  |
| [[item:apotheosis:ancient_material]] | Apotheosis | Rarity Material (Ancient) |  |
| [[item:apotheotic_additions:esoteric_material]] | Apotheotic Additions | Rarity Material (Esoteric) |  |

## Mysterious Scrap Metal

[[item:apotheosis:common_material]] (Apotheosis)

It is the Common rarity material.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `apotheotic_additions:chests/aa_spawner` (chest) | 25% per roll, 5–6 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes apotheosis:common_material}}

### Used in

{{uses apotheosis:common_material limit=6}}

## Timeworn Fabric

[[item:apotheosis:uncommon_material]] (Apotheosis)

It is the Uncommon rarity material.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `apotheotic_additions:chests/aa_spawner` (chest) | 16.7% per roll, 5–6 rolls | 1 |

### Used in

{{uses apotheosis:uncommon_material}}

## Luminous Crystal Shard

[[item:apotheosis:rare_material]] (Apotheosis)

It is the Rare rarity material.

### Used in

{{uses apotheosis:rare_material}}

## Arcane Sands

[[item:apotheosis:epic_material]] (Apotheosis)

It is the Epic rarity material.

### Used in

{{uses apotheosis:epic_material}}

## Core of the Family

[[item:apotheotic_additions:heirloom_material]] (Apotheotic Additions)

It is the Heirloom rarity material.

### Used in

{{uses apotheotic_additions:heirloom_material}}

## Godforged Pearl

[[item:apotheosis:mythic_material]] (Apotheosis)

It is the Mythic rarity material.

### Used in

{{uses apotheosis:mythic_material limit=6}}

## Artifact Shards

[[item:apotheotic_additions:artifact_material]] (Apotheotic Additions)

It is the Artifact rarity material.

### Used in

{{uses apotheotic_additions:artifact_material limit=6}}

## Manifestation of Infinity

[[item:apotheosis:ancient_material]] (Apotheosis)

It is the Ancient rarity material.

### Used in

{{uses apotheosis:ancient_material}}

## Galactic Core

[[item:apotheotic_additions:esoteric_material]] (Apotheotic Additions, epic)

It is the Esoteric rarity material.

### Used in

{{uses apotheotic_additions:esoteric_material limit=6}}

## Relic of the Renowned

[[item:fallen_gems_affixes:fabled_material]] (Fallen Gems & Affixes)

It is the Fabled rarity material. Fabled universal bosses have a 15% chance to drop 1–2. The [[items/gear-progression/reforging-tables#Fabled Reforging Table|Fabled Reforging Table]] uses it.

### Used in

{{uses fallen_gems_affixes:fabled_material}}
