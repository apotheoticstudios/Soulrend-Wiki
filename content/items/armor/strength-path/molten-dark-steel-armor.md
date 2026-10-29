---
{
  "title": "Molten Dark Steel Armor",
  "aliases": [
    "Molten Dark Steel Helmet",
    "Molten Dark Steel Chestplate",
    "Molten Dark Steel Leggings",
    "Molten Dark Steel Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Strength Path.",
  "infobox": {
    "item": "dungeons_and_combat:molten_dark_steel_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "37"],
      ["Toughness (all pieces)", "22"]
    ]
  },
  "items": [
    "dungeons_and_combat:molten_dark_steel_helmet",
    "dungeons_and_combat:molten_dark_steel_chestplate",
    "dungeons_and_combat:molten_dark_steel_leggings",
    "dungeons_and_combat:molten_dark_steel_boots"
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
  dungeons_and_combat jar: MoltenDarkSteelSetBonusProcedure (accepts molten_knight pieces)
-->

**Molten Dark Steel Armor** is an armor set from dungeons and combat. It is set 12 of 15 on [[items/armor/strength-path|Strength Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Max Health | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:molten_dark_steel_helmet]] | Helmet | +7 | +5.5 | +15% | +7.5 | +0.75 | +12 |
| [[item:dungeons_and_combat:molten_dark_steel_chestplate]] | Chestplate | +12 | +5.5 | +15% | +7.5 | +2.25 | +18 |
| [[item:dungeons_and_combat:molten_dark_steel_leggings]] | Leggings | +11 | +5.5 | +15% | +7.5 | +2.25 | +18 |
| [[item:dungeons_and_combat:molten_dark_steel_boots]] | Boots | +7 | +5.5 | +15% | +7.5 | +0.75 | +12 |
| **Full set** |  | **+37** | **+22** | **+60%** | **+30** | **+6** | **+60** |

## Usage

Two set bonuses (all four pieces; the molten knight pieces count too):

- **Man of Dark Steel:** +2 armor and +2 armor toughness.
- **Heart of the Forge:** Resistance II while the wearer is on fire.

## Epic Fight

Together, its 4 pieces add **60 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:molten_dark_steel_helmet}}

{{recipes dungeons_and_combat:molten_dark_steel_chestplate}}

{{recipes dungeons_and_combat:molten_dark_steel_leggings}}

{{recipes dungeons_and_combat:molten_dark_steel_boots}}
