---
{
  "title": "Deepling Mage Armor",
  "aliases": [
    "Deepling Mage Hood",
    "Deepling Mage Robe",
    "Deepling Mage Leggings",
    "Deepling Mage Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:deepling_mage_armor_robe",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "20"],
      ["Toughness (all pieces)", "6"]
    ]
  },
  "items": [
    "traveloptics:deepling_mage_armor_helmet",
    "traveloptics:deepling_mage_armor_robe",
    "traveloptics:deepling_mage_armor_leggings",
    "traveloptics:deepling_mage_armor_boots"
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
  traveloptics jar: lang item.traveloptics.deepling_mage_armor.*
-->

**Deepling Mage Armor** is an armor set from T.O Magic 'n Extras. It is set 17 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Aqua Spell Power | Max Mana | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:deepling_mage_armor_helmet]] | Helmet | +3 | +1.5 | +10% | +125 | +5% | +10 | +8 | 418 |
| [[item:traveloptics:deepling_mage_armor_robe]] | Chestplate | +8 | +1.5 | +10% | +125 | +5% | +20 | +22 | 608 |
| [[item:traveloptics:deepling_mage_armor_leggings]] | Leggings | +6 | +1.5 | +10% | +125 | +5% | +12.5 | +12 | 570 |
| [[item:traveloptics:deepling_mage_armor_boots]] | Boots | +3 | +1.5 | +10% | +125 | +5% | +5 | +6.5 | 494 |
| **Full set** |  | **+20** | **+6** | **+40%** | **+500** | **+20%** | **+47.5** | **+48.5** |  |

## Usage

**Full set passive, Gills:** Water Breathing while underwater, and 30% less damage from the Hullbreaker. The robe has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **48.5 Weight** and **47.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:deepling_mage_armor_helmet}}

{{recipes traveloptics:deepling_mage_armor_robe}}

{{recipes traveloptics:deepling_mage_armor_leggings}}

{{recipes traveloptics:deepling_mage_armor_boots}}
