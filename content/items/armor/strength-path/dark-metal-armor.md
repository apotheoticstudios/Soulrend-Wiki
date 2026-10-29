---
{
  "title": "Dark Metal Armor",
  "aliases": [
    "Dark Metal Helmet",
    "Dark Metal Chestplate",
    "Dark Metal Leggings",
    "Dark Metal Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Strength Path.",
  "infobox": {
    "item": "dungeons_and_combat:dark_metal_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "46"],
      ["Toughness (all pieces)", "28"]
    ]
  },
  "items": [
    "dungeons_and_combat:dark_metal_helmet",
    "dungeons_and_combat:dark_metal_chestplate",
    "dungeons_and_combat:dark_metal_leggings",
    "dungeons_and_combat:dark_metal_boots"
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
  dungeons_and_combat jar: DarkMetalArmorSetProcedure (checks all four slots)
-->

**Dark Metal Armor** is an armor set from dungeons and combat. It is set 15 of 15 on [[items/armor/strength-path|Strength Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Max Health | Attack Damage | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:dark_metal_helmet]] | Helmet | +10 | +7 | +20% | +8.75 | +2.5 | +0.75 | +12 |
| [[item:dungeons_and_combat:dark_metal_chestplate]] | Chestplate | +14 | +7 | +20% | +8.75 | +2.5 | +2.25 | +18 |
| [[item:dungeons_and_combat:dark_metal_leggings]] | Leggings | +13 | +7 | +20% | +8.75 | +2.5 | +2.25 | +18 |
| [[item:dungeons_and_combat:dark_metal_boots]] | Boots | +9 | +7 | +20% | +8.75 | +2.5 | +0.75 | +12 |
| **Full set** |  | **+46** | **+28** | **+80%** | **+35** | **+10** | **+6** | **+60** |

## Usage

**Set bonus, Rampage** (all four pieces): at low health the wearer gets Hunger III, Strength V and Speed V.

## Epic Fight

Together, its 4 pieces add **60 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:dark_metal_helmet}}

{{recipes dungeons_and_combat:dark_metal_chestplate}}

{{recipes dungeons_and_combat:dark_metal_leggings}}

{{recipes dungeons_and_combat:dark_metal_boots}}
