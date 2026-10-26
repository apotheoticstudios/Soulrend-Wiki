---
{
  "title": "Forgotten Armor",
  "aliases": [
    "Forgotten Helmet",
    "Forgotten Chestplate",
    "Forgotten Leggings",
    "Forgotten Boots"
  ],
  "summary": "Armor set from Fantasy Armor on the Mage Armor.",
  "infobox": {
    "item": "fantasy_armor:wandering_wizard_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "20"]
    ]
  },
  "items": [
    "fantasy_armor:wandering_wizard_helmet",
    "fantasy_armor:wandering_wizard_chestplate",
    "fantasy_armor:wandering_wizard_leggings",
    "fantasy_armor:wandering_wizard_boots"
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
  fantasy_armor jar: lang item.fantasy_armor.wandering_wizard_*.tooltip
-->

**Forgotten Armor** is an armor set from Fantasy Armor. It is set 30 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Knockback Resistance | Eldritch Spell Power | Max Mana | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:fantasy_armor:wandering_wizard_helmet]] | Helmet | +3 |  | +10% | +125 | +5% | +1.12 | +7.5 | 407 |
| [[item:fantasy_armor:wandering_wizard_chestplate]] | Chestplate | +8 |  | +10% | +125 | +5% | +3 | +20 | 592 |
| [[item:fantasy_armor:wandering_wizard_leggings]] | Leggings | +6 | +10% | +10% | +125 | +5% | +2.25 | +15 | 555 |
| [[item:fantasy_armor:wandering_wizard_boots]] | Boots | +3 | +10% | +10% | +125 | +5% | +1.12 | +7.5 | 481 |
| **Full set** |  | **+20** | **+20%** | **+40%** | **+500** | **+20%** | **+7.49** | **+50** |  |

## Usage

Its tooltip carries only lore: garments infused with ancient magic that bind the wearer to "the curse of eternal wandering". The set has no set bonus or ability of its own: its tooltips list only stats (see [[#Stats]]).

## Epic Fight

Together, its 4 pieces add **50 Weight** and **7.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes fantasy_armor:wandering_wizard_helmet}}

{{recipes fantasy_armor:wandering_wizard_chestplate}}

{{recipes fantasy_armor:wandering_wizard_leggings}}

{{recipes fantasy_armor:wandering_wizard_boots}}
