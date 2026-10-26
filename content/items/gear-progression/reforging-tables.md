---
{
  "title": "Reforging Tables",
  "aliases": [
    "Simple Reforging Table",
    "Reforging Table",
    "Ancient Reforging Table",
    "Esoteric Reforging Table",
    "Fabled Reforging Table"
  ],
  "summary": "Reforging Tables: 5 items from the Soulrend modpack.",
  "items": [
    "apotheosis:simple_reforging_table",
    "apotheosis:reforging_table",
    "ancientreforging:ancient_reforging_table",
    "esotericreforging:esoteric_reforging_table",
    "fallen_gems_affixes:fabled_reforging_table",
    "apotheosis:salvaging_table",
    "apotheosis:augmenting_table"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json (apotheosis:reforging and fallen_gems_affixes:fabled_reforging costs, apotheosis:salvaging)
  ancientreforging and esotericreforging jars: *ReforgingTableTile.getRecipeFor (first recipe of the rarity), getMaxRarity
  fallen_gems_affixes jar: FabledReforgingTableTile (Relic of the Renowned); lang set.*, set_affix.*, set_bonus.*
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/fallen_gems_affixes/set_affixes/ (colossus, deadeye, trickster)
  Apotheosis jar: lang block.apotheosis.*_table.desc; ApotheoticAdditions: rarities/*.json (ordinals)
-->

**Reforging Tables** are the Apotheosis work blocks that reroll affix gear, from the Simple Reforging Table up to the Esoteric and Fabled tables. This page also covers the Salvaging and Augmenting Tables.

## Usage

A reforging table rerolls an affix item at a chosen rarity. Put in the item, then rarity materials, which set the rarity it is reforged to, and Sigils of Rebirth. The table offers three randomly rolled versions of the item; picking one costs the materials, the sigils and experience levels. Each table can only reach a certain rarity:

| Table | Highest rarity |
| --- | --- |
| Simple Reforging Table | Rare |
| Reforging Table | Mythic |
| Ancient Reforging Table | Ancient |
| Esoteric Reforging Table | Esoteric (through Artifact and Heirloom) |
| Fabled Reforging Table | Fabled only |

### Costs

| Rarity | Rarity materials | Sigils of Rebirth | Levels |
| --- | --- | --- | --- |
| Common | 1 | 0 | 3 |
| Uncommon | 2 | 1 | 7 |
| Rare | 2 | 2 | 20 |
| Epic | 2 | 4 | 33 |
| Mythic | 2 | 5 | 60 |
| Ancient | 3 or 2 | 10 or 5 | 125 or 150 |
| Artifact | 3 or 2 | 12 or 5 | 150 |
| Heirloom | 3 | 15 | 175 |
| Esoteric | 3 | 18 | 200 |
| Fabled | 5 Relics of the Renowned | 10 | 50 |

Ancient and Artifact each have two cost recipes, from Ancient Reforging and Esoteric Reforging and from Apotheotic Additions. The tables take the first one they find, so the cost can be either.

### Fabled reforging and set affixes

The **Fabled Reforging Table** (Fallen Gems & Affixes) sets an item's rarity to Fabled and adds a **set affix**. Soulrend has three sets, and wearing more pieces of a set unlocks bonuses at 2, 3, 4 and 5 pieces:

- **Colossus** (helmet, chestplate, leggings, boots, shield): taking damage and blocking build Bastion Orbs, which raise maximum health and are spent on shockwaves.
- **Deadeye** (helmet, chestplate, leggings, boots, bow): critical and ranged hits build Focus, which raises arrow damage and fuels bursts and executions.
- **Trickster** (helmet, chestplate, leggings, boots, weapon): taking damage spawns Shadow Clones that strike with the wearer, absorb damage and explode when they die.

### Related tables

- The **[[item:apotheosis:salvaging_table]]** breaks affix items, gems and affix scrolls into [[items/gear-progression/rarity-materials|rarity materials]] and gem dust.
- The **[[item:apotheosis:augmenting_table]]** spends Sigils of Enhancement to improve one affix on an item. An item with an Augment of Genesis can't go in it.
- The **[[item:apotheosis:gem_cutting_table]]** upgrades gems (see [[items/gear-progression/gems#Upgrading gems|Gems]]).

The [[progression/side-chapters/reforging|Reforging]] quest chapter walks through the tables in order.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheosis:simple_reforging_table]] | Apotheosis | Uses Sigils of Rebirth and Rarity Materials to reforge items Max Rarity: Rare | crafting, 1 loot table |
| [[item:apotheosis:reforging_table]] | Apotheosis | Uses Sigils of Rebirth and Rarity Materials to reforge items Max Rarity: Mythic | crafting |
| [[item:ancientreforging:ancient_reforging_table]] | Ancient Reforging | Uses Gem Dust and Rarity Materials to reroll affixes Max Rarity: Ancient | crafting |
| [[item:esotericreforging:esoteric_reforging_table]] | Esoteric Reforging | Uses Gem Dust and Rarity Materials to reroll affixes Max Rarity: Esoteric |  |
| [[item:fallen_gems_affixes:fabled_reforging_table]] | Fallen Gems & Affixes | Sets the reforged item's rarity to Fabled and adds a Set Affix to it Rarity: Fabled | crafting |

## Simple Reforging Table

[[item:apotheosis:simple_reforging_table]] (Apotheosis)

> Uses Sigils of Rebirth and Rarity Materials to reforge items Max Rarity: Rare

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `apotheotic_additions:chests/aa_spawner` (chest) | 1.67% per roll, 5–6 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes apotheosis:simple_reforging_table}}

### Used in

{{uses apotheosis:simple_reforging_table}}

## Reforging Table

[[item:apotheosis:reforging_table]] (Apotheosis, epic)

> Uses Sigils of Rebirth and Rarity Materials to reforge items Max Rarity: Mythic

### Obtaining

It is crafted (see below).

### Crafting

{{recipes apotheosis:reforging_table}}

### Used in

{{uses apotheosis:reforging_table}}

## Ancient Reforging Table

[[item:ancientreforging:ancient_reforging_table]] (Ancient Reforging)

> Uses Gem Dust and Rarity Materials to reroll affixes Max Rarity: Ancient

### Obtaining

It is crafted (see below).

### Crafting

{{recipes ancientreforging:ancient_reforging_table}}

## Esoteric Reforging Table

[[item:esotericreforging:esoteric_reforging_table]] (Esoteric Reforging)

> Uses Gem Dust and Rarity Materials to reroll affixes Max Rarity: Esoteric

## Fabled Reforging Table

[[item:fallen_gems_affixes:fabled_reforging_table]] (Fallen Gems & Affixes)

> Sets the reforged item's rarity to Fabled and adds a Set Affix to it Rarity: Fabled

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:fabled_reforging_table}}

## Salvaging Table

[[item:apotheosis:salvaging_table]] (Apotheosis)

> Breaks down Affix Items into Rarity Materials

Salvaging an affix item gives 1–4 materials of its rarity (1–2 for Artifact, Heirloom and Esoteric). Gems give gem dust, and some vanilla gear gives back its materials. [[items/gear-progression/rarity-materials|Rarity Materials]] has the full table.

### Crafting

{{recipes apotheosis:salvaging_table}}

## Augmenting Table

[[item:apotheosis:augmenting_table]] (Apotheosis, uncommon)

> Uses Sigils of Enhancement to augment individual affixes

### Crafting

{{recipes apotheosis:augmenting_table}}
