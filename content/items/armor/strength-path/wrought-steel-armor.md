---
{
  "title": "Wrought Steel Armor",
  "aliases": [
    "Wrought Steel Helmet",
    "Wrought Steel Chestplate",
    "Wrought Steel Leggings",
    "Wrought Steel Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Strength Path.",
  "infobox": {
    "item": "dungeons_and_combat:steel_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "19"],
      ["Toughness (all pieces)", "8"]
    ]
  },
  "items": [
    "dungeons_and_combat:steel_helmet",
    "dungeons_and_combat:steel_chestplate",
    "dungeons_and_combat:steel_leggings",
    "dungeons_and_combat:steel_boots"
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

**Wrought Steel Armor** is an armor set from dungeons and combat. It is set 8 of 15 on [[items/armor/strength-path|Strength Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Max Health | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:steel_helmet]] | Helmet | +2.5 | +2 | +10% | +1 | +0.75 | +12 | 350 |
| [[item:dungeons_and_combat:steel_chestplate]] | Chestplate | +7.5 | +2 | +10% | +2 | +2.25 | +18 | 450 |
| [[item:dungeons_and_combat:steel_leggings]] | Leggings | +6.5 | +2 | +10% | +2 | +2.25 | +18 | 400 |
| [[item:dungeons_and_combat:steel_boots]] | Boots | +2.5 | +2 | +10% | +1 | +0.75 | +12 | 350 |
| **Full set** |  | **+19** | **+8** | **+40%** | **+6** | **+6** | **+60** |  |

## Usage

**Set bonus, Man of Steel** (all four pieces): +3 armor. Dungeons and Combat's deserter, Kamath's remains and royal steel sets share the same bonus.

## Epic Fight

Together, its 4 pieces add **60 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:steel_helmet}}

{{recipes dungeons_and_combat:steel_chestplate}}

{{recipes dungeons_and_combat:steel_leggings}}

{{recipes dungeons_and_combat:steel_boots}}
