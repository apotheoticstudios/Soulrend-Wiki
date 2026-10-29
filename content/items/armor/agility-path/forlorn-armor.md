---
{
  "title": "Forlorn Armor",
  "aliases": [
    "Forlorn Helmet",
    "Forlorn Chestplate",
    "Forlorn Leggings",
    "Forlorn Boots"
  ],
  "summary": "Armor set from Marium's Soulslike Weaponry on the Agility Path.",
  "infobox": {
    "item": "soulsweapons:forlorn_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "28"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "soulsweapons:forlorn_helmet",
    "soulsweapons:forlorn_chestplate",
    "soulsweapons:forlorn_leggings",
    "soulsweapons:forlorn_boots"
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
  soulsweapons jar: ForlornArmor class (SET_BONUS, SOUL_FEAST), lang tooltip.soulsweapons.soul_feast.*, set_bonus.*
-->

**Forlorn Armor** is an armor set from Marium's Soulslike Weaponry. It is set 6 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Chance | Speed | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:soulsweapons:forlorn_helmet]] | Helmet | +5 | +4 | +10% | +3.5% | +3.75% | +2.75 | +8 |
| [[item:soulsweapons:forlorn_chestplate]] | Chestplate | +10 | +4 | +10% | +3.5% | +3.75% | +3.25 | +12 |
| [[item:soulsweapons:forlorn_leggings]] | Leggings | +8 | +4 | +10% | +3.5% | +3.75% | +3.25 | +12 |
| [[item:soulsweapons:forlorn_boots]] | Boots | +5 | +4 | +10% | +3.5% | +3.75% | +2.75 | +8 |
| **Full set** |  | **+28** | **+16** | **+40%** | **+14%** | **+15%** | **+12** | **+40** |

## Usage

**Set bonus, Soul Feast** (tooltip under Left Alt): with all four pieces worn, the wearer heals whenever an entity dies nearby. Soulslike Weaponry checks only the helmet's item level for set abilities.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes soulsweapons:forlorn_helmet}}

{{recipes soulsweapons:forlorn_chestplate}}

{{recipes soulsweapons:forlorn_leggings}}

{{recipes soulsweapons:forlorn_boots}}
