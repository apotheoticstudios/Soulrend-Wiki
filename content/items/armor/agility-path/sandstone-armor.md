---
{
  "title": "Sandstone Armor",
  "aliases": [
    "Sandstone Helmet",
    "Sandstone Chestplate",
    "Sandstone Leggings",
    "Sandstone Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Agility Path.",
  "infobox": {
    "item": "dungeons_and_combat:sandstone_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "15"],
      ["Toughness (all pieces)", "4"]
    ]
  },
  "items": [
    "dungeons_and_combat:sandstone_helmet",
    "dungeons_and_combat:sandstone_chestplate",
    "dungeons_and_combat:sandstone_leggings",
    "dungeons_and_combat:sandstone_boots"
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
  dungeons_and_combat jar: SandstoneBonusArmorSetProcedure
-->

**Sandstone Armor** is an armor set from dungeons and combat. It is set 2 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Damage | Speed | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:sandstone_helmet]] | Helmet | +2 | +1 | +10% | +6% | +2.5% | +2.75 | +8 |
| [[item:dungeons_and_combat:sandstone_chestplate]] | Chestplate | +6 | +1 | +10% | +6% | +2.5% | +3.25 | +12 |
| [[item:dungeons_and_combat:sandstone_leggings]] | Leggings | +5 | +1 | +10% | +6% | +2.5% | +3.25 | +12 |
| [[item:dungeons_and_combat:sandstone_boots]] | Boots | +2 | +1 | +10% | +6% | +2.5% | +2.75 | +8 |
| **Full set** |  | **+15** | **+4** | **+40%** | **+24%** | **+10%** | **+12** | **+40** |

## Usage

**Set bonus** (all four pieces): Speed II while standing on sand.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:sandstone_helmet}}

{{recipes dungeons_and_combat:sandstone_chestplate}}

{{recipes dungeons_and_combat:sandstone_leggings}}

{{recipes dungeons_and_combat:sandstone_boots}}
