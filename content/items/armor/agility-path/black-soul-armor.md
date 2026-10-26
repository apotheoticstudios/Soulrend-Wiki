---
{
  "title": "Black Soul Armor",
  "aliases": [
    "Black Soul Helmet",
    "Black Soul Chestplate",
    "Black Soul Leggings",
    "Black Soul Boots"
  ],
  "summary": "Armor set from Marium's Soulslike Weaponry on the Agility Path.",
  "infobox": {
    "item": "soulsweapons:soul_ingot_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "23"],
      ["Toughness (all pieces)", "12"]
    ]
  },
  "items": [
    "soulsweapons:soul_ingot_helmet",
    "soulsweapons:soul_ingot_chestplate",
    "soulsweapons:soul_ingot_leggings",
    "soulsweapons:soul_ingot_boots"
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
  soulsweapons jar: SoulIngotArmor class (SET_BONUS, RESISTANCE; config soul_ingot_armor_fortified_resistance_*), lang tooltip.soulsweapons.fortified.*, set_bonus.*
-->

**Black Soul Armor** is an armor set from Marium's Soulslike Weaponry. It is set 5 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Chance | Speed | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:soulsweapons:soul_ingot_helmet]] | Helmet | +4 | +3 | +10% | +3% | +3.25% | +2.75 | +8 | 380 |
| [[item:soulsweapons:soul_ingot_chestplate]] | Chestplate | +8 | +3 | +10% | +3% | +3.25% | +3.25 | +12 | 480 |
| [[item:soulsweapons:soul_ingot_leggings]] | Leggings | +7 | +3 | +10% | +3% | +3.25% | +3.25 | +12 | 600 |
| [[item:soulsweapons:soul_ingot_boots]] | Boots | +4 | +3 | +10% | +3% | +3.25% | +2.75 | +8 | 350 |
| **Full set** |  | **+23** | **+12** | **+40%** | **+12%** | **+13%** | **+12** | **+40** |  |

## Usage

**Set bonus, Fortified** (tooltip under Left Alt): with all four pieces worn, the wearer has continuous Resistance. Soulslike Weaponry checks only the helmet's item level for set abilities.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes soulsweapons:soul_ingot_helmet}}

{{recipes soulsweapons:soul_ingot_chestplate}}

{{recipes soulsweapons:soul_ingot_leggings}}

{{recipes soulsweapons:soul_ingot_boots}}
