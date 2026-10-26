---
{
  "title": "Polished Ice Dragonsteel Armor",
  "summary": "Armor set from dungeons and combat on the Wisdom Path.",
  "infobox": {
    "item": "dungeons_and_combat:ice_dragonsteel_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "52"],
      ["Toughness (all pieces)", "32"]
    ]
  },
  "items": [
    "dungeons_and_combat:ice_dragonsteel_helmet",
    "dungeons_and_combat:ice_dragonsteel_chestplate",
    "dungeons_and_combat:ice_dragonsteel_leggings",
    "dungeons_and_combat:ice_dragonsteel_boots"
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
  dungeons_and_combat jar: DragonsteelIceArmorBonusSetProcedure
-->

**Polished Ice Dragonsteel Armor** is an armor set from dungeons and combat. It is set 4 of 13 on [[items/armor/wisdom-path|Wisdom Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:ice_dragonsteel_helmet]] | Helmet | +10 | +8 | +5% | +1.25 | +10 | 1,980 |
| [[item:dungeons_and_combat:ice_dragonsteel_chestplate]] | Chestplate | +16 | +8 | +5% | +1.75 | +12 | 2,880 |
| [[item:dungeons_and_combat:ice_dragonsteel_leggings]] | Leggings | +16 | +8 | +5% | +1.75 | +12 | 2,700 |
| [[item:dungeons_and_combat:ice_dragonsteel_boots]] | Boots | +10 | +8 | +5% | +1.25 | +10 | 2,340 |
| **Full set** |  | **+52** | **+32** | **+20%** | **+6** | **+44** |  |

## Usage

**Set bonus** (all four pieces): resistance to ice and to Slowness, as the tooltip puts it.

## Epic Fight

Together, its 4 pieces add **44 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:ice_dragonsteel_helmet}}

{{recipes dungeons_and_combat:ice_dragonsteel_chestplate}}

{{recipes dungeons_and_combat:ice_dragonsteel_leggings}}

{{recipes dungeons_and_combat:ice_dragonsteel_boots}}
