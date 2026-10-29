---
{
  "title": "Soul Eater Armor",
  "aliases": [
    "Soul Eater Helmet",
    "Soul Eater Chestplate",
    "Soul Eater Leggings",
    "Soul Eater Boots"
  ],
  "summary": "Armor set from Marium's Soulslike Weaponry on the Agility Path.",
  "infobox": {
    "item": "soulsweapons:soul_robes_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "38.5"],
      ["Toughness (all pieces)", "23"]
    ]
  },
  "items": [
    "soulsweapons:soul_robes_helmet",
    "soulsweapons:soul_robes_chestplate",
    "soulsweapons:soul_robes_leggings",
    "soulsweapons:soul_robes_boots"
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
  soulsweapons jar: SoulRobesArmor class (SET_BONUS, MAGIC_RESISTANCE; config soul_robes_armor_fortified_night_vision_*), lang tooltip.soulsweapons.fortified.*, set_bonus.*
-->

**Soul Eater Armor** is an armor set from Marium's Soulslike Weaponry. It is set 8 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Chance | Speed | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:soulsweapons:soul_robes_helmet]] | Helmet | +8 | +6 | +15% | +4.5% | +4.5% | +2.75 | +8 |
| [[item:soulsweapons:soul_robes_chestplate]] | Chestplate | +12 | +6 | +15% | +4.5% | +4.5% | +3.25 | +12 |
| [[item:soulsweapons:soul_robes_leggings]] | Leggings | +11 | +6 | +15% | +4.5% | +4.5% | +3.25 | +12 |
| [[item:soulsweapons:soul_robes_boots]] | Boots | +7.5 | +5 | +15% | +4.5% | +4.5% | +2.75 | +8 |
| **Full set** |  | **+38.5** | **+23** | **+60%** | **+18%** | **+18%** | **+12** | **+40** |

## Usage

**Set bonus, Fortified** (tooltip under Left Alt): with all four pieces worn, the wearer has continuous Night Vision. The set also has a magic resistance ability. Soulslike Weaponry checks only the helmet's item level for set abilities.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes soulsweapons:soul_robes_helmet}}

{{recipes soulsweapons:soul_robes_chestplate}}

{{recipes soulsweapons:soul_robes_leggings}}

{{recipes soulsweapons:soul_robes_boots}}
