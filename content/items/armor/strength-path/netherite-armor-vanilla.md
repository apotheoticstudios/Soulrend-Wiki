---
{
  "title": "Netherite Armor (Vanilla)",
  "summary": "Armor set from Minecraft on the Strength Path.",
  "infobox": {
    "item": "minecraft:netherite_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "37"],
      ["Toughness (all pieces)", "19"]
    ]
  },
  "items": [
    "minecraft:netherite_helmet",
    "minecraft:netherite_chestplate",
    "minecraft:netherite_leggings",
    "minecraft:netherite_boots"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json (durability)
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
-->

**Netherite Armor (Vanilla)** is an armor set from Minecraft. It is set 11 of 15 on [[items/armor/strength-path|Strength Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Max Health | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:minecraft:netherite_helmet]] | Helmet | +7 | +4.5 | +15% | +5 | +0.75 | +12 | 407 |
| [[item:minecraft:netherite_chestplate]] | Chestplate | +12 | +5.5 | +15% | +5 | +2.25 | +18 | 592 |
| [[item:minecraft:netherite_leggings]] | Leggings | +11 | +4.5 | +15% | +5 | +2.25 | +18 | 555 |
| [[item:minecraft:netherite_boots]] | Boots | +7 | +4.5 | +15% | +5 | +0.75 | +12 | 481 |
| **Full set** |  | **+37** | **+19** | **+60%** | **+20** | **+6** | **+60** |  |

## Usage

The set has no set bonus or ability of its own: its tooltips list only stats (see [[#Stats]]).

## Epic Fight

Together, its 4 pieces add **60 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

[[item:minecraft:netherite_helmet]] drops from 6 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| `incendium:artifact/patron/scouts_battle_helm` (loot table) | 100% | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_normal` (chest) | 16.7% per roll, 2 rolls | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_elite` (chest) | 12.5% per roll, 2 rolls | 1 |
| `dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure` (chest) | 11.1% per roll, 1–3 rolls | 1 |
| `dungeons_arise:chests/keep_kayra/keep_kayra_library_treasure` (chest) | 1.89% | 1 |
| `incendium:castle/stand/helmet` (selector) | 0.71% | 1 |

[[item:minecraft:netherite_chestplate]] drops from 4 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| `incendium:castle/blacksmith/chestplate` (chest) | 100% | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_elite` (chest) | 12.5% per roll, 1–3 rolls | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_normal` (chest) | 12.5% per roll, 2–3 rolls | 1 |
| `incendium:castle/stand/chestplate` (selector) | 0.71% | 1 |

[[item:minecraft:netherite_leggings]] drops from 2 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| `incendium:castle/stand/leggings` (selector) | 0.71% | 1 |
| `dungeons_arise:chests/keep_kayra/keep_kayra_garden_treasure` (chest) | 0.44% | 1 |

[[item:minecraft:netherite_boots]] drops from 7 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_normal` (chest) | 16.7% per roll, 2 rolls | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_elite` (chest) | 12.5% per roll, 2 rolls | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_elite` (chest) | 12.5% per roll, 1–3 rolls | 1 |
| `dungeons_arise:chests/shiraz_palace/shiraz_palace_normal` (chest) | 12.5% per roll, 2–3 rolls | 1 |
| `dungeons_arise:chests/heavenly_challenger/heavenly_challenger_treasure` (chest) | 11.1% per roll, 1–3 rolls | 1 |
| `dungeons_arise:chests/keep_kayra/keep_kayra_treasure` (chest) | 1.75% | 1 |
| `incendium:castle/stand/boots` (selector) | 0.71% | 1 |

## Crafting

{{recipes minecraft:netherite_helmet}}

{{recipes minecraft:netherite_chestplate}}

{{recipes minecraft:netherite_leggings}}

{{recipes minecraft:netherite_boots}}
