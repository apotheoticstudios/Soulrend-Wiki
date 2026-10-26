---
{
  "title": "Thief Armor",
  "aliases": [
    "Thief Helmet",
    "Thief Chestplate",
    "Thief Leggings",
    "Thief Boots"
  ],
  "summary": "Armor set from Fantasy Armor on the Agility Path.",
  "infobox": {
    "item": "fantasy_armor:thief_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "13"],
      ["Toughness (all pieces)", "2"]
    ]
  },
  "items": [
    "fantasy_armor:thief_helmet",
    "fantasy_armor:thief_chestplate",
    "fantasy_armor:thief_leggings",
    "fantasy_armor:thief_boots"
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
  fantasy_armor jar: lang item.fantasy_armor.thief_*.tooltip
-->

**Thief Armor** is an armor set from Fantasy Armor. It is set 1 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Attack Speed | Luck | Speed | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:fantasy_armor:thief_helmet]] | Helmet | +2 |  | +10% | +0.1 | +1 | +1.5% | +2.75 | +8 | 320 |
| [[item:fantasy_armor:thief_chestplate]] | Chestplate | +5 | +1 | +10% | +0.1 |  | +2.5% | +3.25 | +12 | 420 |
| [[item:fantasy_armor:thief_leggings]] | Leggings | +4 | +1 | +10% | +0.1 |  | +1.5% | +3.25 | +12 | 360 |
| [[item:fantasy_armor:thief_boots]] | Boots | +2 |  | +10% | +0.1 |  | +1.5% | +2.75 | +8 | 320 |
| **Full set** |  | **+13** | **+2** | **+40%** | **+0.4** | **+1** | **+7%** | **+12** | **+40** |  |

## Usage

Its tooltip carries only lore: armor for those who live in shadows, with a black mask that hides the face. The set has no set bonus or ability of its own: its tooltips list only stats (see [[#Stats]]).

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes fantasy_armor:thief_helmet}}

{{recipes fantasy_armor:thief_chestplate}}

{{recipes fantasy_armor:thief_leggings}}

{{recipes fantasy_armor:thief_boots}}
