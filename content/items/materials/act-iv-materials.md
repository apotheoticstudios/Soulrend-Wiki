---
{
  "title": "Act IV Materials",
  "aliases": [
    "Shulker Shell",
    "Dragon's Breath",
    "Duskfire Ingot",
    "High-frequency Alloy",
    "High-frequency Alloy-Re"
  ],
  "summary": "Act IV materials: End drops and the Nightfall Duskfire and High-frequency ingots.",
  "items": [
    "minecraft:shulker_shell",
    "minecraft:dragon_breath",
    "efn:duskfire_ingot",
    "efn:hf_ingot",
    "efn:hf_ingot_b"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json, game-data/tags.json (tag-based uses: forge:ingots/steel, forge:ingots/silver, forge:gems/<gem>)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (Astral Calamity, Duskfire and HF ingot recipes)
-->

**Act IV Materials** are End drops and the Nightfall ingots: the Duskfire Ingot and the two High-frequency Alloys.

## Usage

- **Shulker Shell** and **Dragon's Breath** work as in vanilla. A Shulker Shell can also be worn on the head (+1 Armor Toughness, +20% Knockback Resistance).
- **Duskfire Ingot:** a drop of [[bosses/act-v/arterius-the-last-watcher|Arterius]], or crafted from Soulslike Crimson Ingots and Netherite Ingots. It upgrades a weapon into [Duskfire] and teaches a skill book.
- **High-frequency Alloy** (Soulrend recipe) makes the HF Murasama blade, the Kusabimaru and the Universium Ingot. At a Smithing Table it becomes **High-frequency Alloy-Re**, which upgrades the HF-Blade, Thunderbrand and the Arcane Bow.


## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:minecraft:shulker_shell]] | Minecraft | +1 Armor Toughness; +20% Knockback Resistance | 10 loot tables |
| [[item:minecraft:dragon_breath]] | Minecraft |  | 8 loot tables |
| [[item:efn:duskfire_ingot]] | EpicFight Nightfall |  | 1 loot table |
| [[item:efn:hf_ingot]] | EpicFight Nightfall |  |  |
| [[item:efn:hf_ingot_b]] | EpicFight Nightfall |  | crafting |

## End Materials

### Shulker Shell

[[item:minecraft:shulker_shell]] (Minecraft)

| Stat | Value | When |
| --- | --- | --- |
| Armor Toughness | +1 | When on Head |
| Knockback Resistance | +20% | When on Head |

#### Obtaining

10 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| Shulker (drop) | 50% (+6.25% per Looting level) | 1 |
| `traveloptics:chests/void_cathedral/hidden_treasure_place` (chest) | 50% | 2–5 |
| `realmrpg_skeletons:blocks/lucky_skeleton` (block drop) | 10.6% | 1 |
| `mes:end_rare` (chest) | 9.52% per roll, 4–7 rolls | 1–3 |
| `medievalend:end_castle` (chest) | 9.43% per roll, 4–8 rolls | 1 |
| `mes:end_uncommon` (chest) | 7.27% per roll, 3–5 rolls | 1–2 |
| `mes:mega_ship_crate` (chest) | 6.35% per roll, 3–5 rolls | 1–2 |
| `mes:archaeology/end_sand` (chest) | 2.71% | 1 |
| `mes:end_common` (chest) | 1.79% per roll, 2–4 rolls | 1 |
| `alexsmobs:gameplay/transmutation_table_rare` (loot table) | 0.81% | 1 |

#### Used in

{{uses minecraft:shulker_shell limit=6}}

### Dragon's Breath

[[item:minecraft:dragon_breath]] (Minecraft, uncommon)

#### Obtaining

8 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `realmrpg_skeletons:blocks/dragon_burnt_skeleton` (block drop) | 100% | 1–3 |
| `mes:end_rare` (chest) | 10% per roll, 0–1 rolls | 1–3 |
| `endlessbiomes:chests/radon_loot` (chest) | 6.67% per roll, 1–3 rolls | 2–5 |
| `graveyard:chests/brewing_loot` (chest) | 5.56% | 1–4 |
| `mes:end_uncommon` (chest) | 5% per roll, 0 rolls | 1–2 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 4.44% per roll, 1–3 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 4.17% per roll, 2–4 rolls | 1 |
| `iceandfire:chest/mausoleum_chest` (chest) | 0.2% per roll, 1–9 rolls | 1 |

#### Used in

{{uses minecraft:dragon_breath limit=6}}

## Duskfire and HF ingots

### Duskfire Ingot

[[item:efn:duskfire_ingot]] (EpicFight Nightfall, epic)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-v/arterius-the-last-watcher\|Arterius]] (drop) | 100% per roll, 2–6 rolls (player kill) | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes efn:duskfire_ingot}}

#### Used in

{{uses efn:duskfire_ingot}}

### High-frequency Alloy

[[item:efn:hf_ingot]] (EpicFight Nightfall, epic)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes efn:hf_ingot}}

#### Used in

{{uses efn:hf_ingot}}

### High-frequency Alloy-Re

[[item:efn:hf_ingot_b]] (EpicFight Nightfall, epic)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes efn:hf_ingot_b}}

#### Used in

{{uses efn:hf_ingot_b}}
