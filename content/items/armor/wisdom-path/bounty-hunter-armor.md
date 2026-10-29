---
{
  "title": "Bounty Hunter Armor",
  "aliases": [
    "Bounty Hunter Helmet",
    "Bounty Hunter Chestplate",
    "Bounty Hunter Leggings",
    "Bounty Hunter Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Wisdom Path.",
  "infobox": {
    "item": "dungeons_and_combat:bounty_hunter_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "22"],
      ["Toughness (all pieces)", "6.5"]
    ]
  },
  "items": [
    "dungeons_and_combat:bounty_hunter_helmet",
    "dungeons_and_combat:bounty_hunter_chestplate",
    "dungeons_and_combat:bounty_hunter_leggings",
    "dungeons_and_combat:bounty_hunter_boots"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
-->

**Bounty Hunter Armor** is an armor set from dungeons and combat. It is set 9 of 13 on [[items/armor/wisdom-path|Wisdom Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Attack Damage | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:bounty_hunter_helmet]] | Helmet | +3.5 | +1.5 | +0.3 | +3% | +1.25 | +10 |
| [[item:dungeons_and_combat:bounty_hunter_chestplate]] | Chestplate | +8 | +2 | +0.3 | +3% | +1.75 | +12 |
| [[item:dungeons_and_combat:bounty_hunter_leggings]] | Leggings | +7 | +1.5 | +0.3 | +3% | +1.75 | +12 |
| [[item:dungeons_and_combat:bounty_hunter_boots]] | Boots | +3.5 | +1.5 | +0.3 | +3% | +1.25 | +10 |
| **Full set** |  | **+22** | **+6.5** | **+1.2** | **+12%** | **+6** | **+44** |

## Usage

The set has no set bonus or ability of its own: its tooltips list only stats (see [[#Stats]]).

## Epic Fight

Together, its 4 pieces add **44 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

[[item:dungeons_and_combat:bounty_hunter_helmet]] drops from 1 loot table:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 9.09% | 0–1 |

[[item:dungeons_and_combat:bounty_hunter_chestplate]] drops from 1 loot table:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 9.09% | 0–1 |

[[item:dungeons_and_combat:bounty_hunter_leggings]] drops from 1 loot table:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 10% | 0–1 |

[[item:dungeons_and_combat:bounty_hunter_boots]] drops from 1 loot table:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 10% | 0–1 |

## Crafting

{{recipes dungeons_and_combat:bounty_hunter_helmet}}

{{recipes dungeons_and_combat:bounty_hunter_chestplate}}

{{recipes dungeons_and_combat:bounty_hunter_leggings}}

{{recipes dungeons_and_combat:bounty_hunter_boots}}
