---
{
  "title": "Silver Armor",
  "aliases": [
    "Silver Helmet",
    "Silver Chestplate",
    "Silver Leggings",
    "Silver Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Wisdom Path.",
  "infobox": {
    "item": "dungeons_and_combat:silver_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "16"],
      ["Toughness (all pieces)", "2.5"]
    ]
  },
  "items": [
    "dungeons_and_combat:silver_helmet",
    "dungeons_and_combat:silver_chestplate",
    "dungeons_and_combat:silver_leggings",
    "dungeons_and_combat:silver_boots"
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
  game-data/items.json (tooltip)
-->

**Silver Armor** is an armor set from dungeons and combat. It is set 7 of 13 on [[items/armor/wisdom-path|Wisdom Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Attack Damage | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:silver_helmet]] | Helmet | +2 | +0.5 | +0.1 | +1% | +1.25 | +10 |
| [[item:dungeons_and_combat:silver_chestplate]] | Chestplate | +6.5 | +1 | +0.1 | +1% | +1.75 | +12 |
| [[item:dungeons_and_combat:silver_leggings]] | Leggings | +5.5 | +0.5 | +0.1 | +1% | +1.75 | +12 |
| [[item:dungeons_and_combat:silver_boots]] | Boots | +2 | +0.5 | +0.1 | +1% | +1.25 | +10 |
| **Full set** |  | **+16** | **+2.5** | **+0.4** | **+4%** | **+6** | **+44** |

## Usage

**Set bonus** (all four pieces): resistance against undead, as the tooltip puts it.

## Epic Fight

Together, its 4 pieces add **44 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:silver_helmet}}

{{recipes dungeons_and_combat:silver_chestplate}}

{{recipes dungeons_and_combat:silver_leggings}}

{{recipes dungeons_and_combat:silver_boots}}
