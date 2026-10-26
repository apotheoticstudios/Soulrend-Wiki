---
{
  "title": "Ebony Armor",
  "aliases": [
    "Ebony Helmet",
    "Ebony Chestplate",
    "Ebony Leggings",
    "Ebony Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Agility Path.",
  "infobox": {
    "item": "dungeons_and_combat:ebony_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "28"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "dungeons_and_combat:ebony_helmet",
    "dungeons_and_combat:ebony_chestplate",
    "dungeons_and_combat:ebony_leggings",
    "dungeons_and_combat:ebony_boots"
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
  dungeons_and_combat jar: EbonyArmorBonusArmorSetProcedure
-->

**Ebony Armor** is an armor set from dungeons and combat. It is set 12 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Damage | Speed | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:ebony_helmet]] | Helmet | +5 | +4 | +10% | +8% | +3.75% | +2.75 | +8 | 462 |
| [[item:dungeons_and_combat:ebony_chestplate]] | Chestplate | +10 | +4 | +10% | +8% | +3.75% | +3.25 | +12 | 672 |
| [[item:dungeons_and_combat:ebony_leggings]] | Leggings | +8 | +4 | +10% | +8% | +3.75% | +3.25 | +12 | 630 |
| [[item:dungeons_and_combat:ebony_boots]] | Boots | +5 | +4 | +10% | +8% | +3.75% | +2.75 | +8 | 546 |
| **Full set** |  | **+28** | **+16** | **+40%** | **+32%** | **+15%** | **+12** | **+40** |  |

## Usage

**Set bonus, Deadly Aura** (all four pieces): anything that attacks the wearer gets Wither I for 5 s.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:ebony_helmet}}

{{recipes dungeons_and_combat:ebony_chestplate}}

{{recipes dungeons_and_combat:ebony_leggings}}

{{recipes dungeons_and_combat:ebony_boots}}
