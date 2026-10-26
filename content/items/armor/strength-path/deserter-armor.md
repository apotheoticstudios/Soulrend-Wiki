---
{
  "title": "Deserter Armor",
  "aliases": [
    "Deserter Helmet",
    "Deserter Chestplate",
    "Deserter Leggings",
    "Deserter Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Strength Path.",
  "infobox": {
    "item": "dungeons_and_combat:deserter_armor_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "15.5"],
      ["Toughness (all pieces)", "4.5"]
    ]
  },
  "items": [
    "dungeons_and_combat:deserter_armor_helmet",
    "dungeons_and_combat:deserter_armor_chestplate",
    "dungeons_and_combat:deserter_armor_leggings",
    "dungeons_and_combat:deserter_armor_boots"
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
  game-data/items.json (tooltip)
  dungeons_and_combat jar: SteelArmorSetBonusProcedure, ManOfSteelEffectStartedappliedProcedure (+3 armor)
-->

**Deserter Armor** is an armor set from dungeons and combat. It is set 7 of 15 on [[items/armor/strength-path|Strength Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Max Health | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:deserter_armor_helmet]] | Helmet | +2 | +1 | +10% | +1 | +0.75 | +12 | 320 |
| [[item:dungeons_and_combat:deserter_armor_chestplate]] | Chestplate | +6.5 | +1.5 | +10% | +1 | +2.25 | +18 | 420 |
| [[item:dungeons_and_combat:deserter_armor_leggings]] | Leggings | +5 | +1 | +10% | +1 | +2.25 | +18 | 360 |
| [[item:dungeons_and_combat:deserter_armor_boots]] | Boots | +2 | +1 | +10% | +1 | +0.75 | +12 | 320 |
| **Full set** |  | **+15.5** | **+4.5** | **+40%** | **+4** | **+6** | **+60** |  |

## Usage

**Set bonus, Man of Steel** (all four pieces): +3 armor. Dungeons and Combat's steel, Kamath's remains and royal steel sets share the same bonus.

## Epic Fight

Together, its 4 pieces add **60 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:deserter_armor_helmet}}

{{recipes dungeons_and_combat:deserter_armor_chestplate}}

{{recipes dungeons_and_combat:deserter_armor_leggings}}

{{recipes dungeons_and_combat:deserter_armor_boots}}
