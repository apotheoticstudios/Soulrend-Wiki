---
{
  "title": "Blessed Priest Armor",
  "aliases": [
    "Blessed Priest Hood",
    "Blessed Priest Robe",
    "Blessed Priest Leggings",
    "Blessed Priest Boots"
  ],
  "summary": "Armor set from dacxirons on the Mage Armor.",
  "infobox": {
    "item": "dacxirons:blessed_priest_robe",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "20"],
      ["Toughness (all pieces)", "8"]
    ]
  },
  "items": [
    "dacxirons:blessed_priest_hood",
    "dacxirons:blessed_priest_robe",
    "dacxirons:blessed_priest_leggings",
    "dacxirons:blessed_priest_boots"
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
  dacxirons jar: lang tooltip.dacxirons.blessedprestfullset, blessedfullset
-->

**Blessed Priest Armor** is an armor set from dacxirons. It is set 13 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Holy Spell Power | Max Mana | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dacxirons:blessed_priest_hood]] | Helmet | +3 | +2 | +20% | +125 | +1.12 | +7.5 |
| [[item:dacxirons:blessed_priest_robe]] | Chestplate | +8 | +2 | +20% | +125 | +3 | +20 |
| [[item:dacxirons:blessed_priest_leggings]] | Leggings | +6 | +2 | +20% | +125 | +2.25 | +15 |
| [[item:dacxirons:blessed_priest_boots]] | Boots | +3 | +2 | +20% | +125 | +1.12 | +7.5 |
| **Full set** |  | **+20** | **+8** | **+80%** | **+500** | **+7.49** | **+50** |

## Usage

**Full set bonus, Divine Blessing:** "The sun blesses you, granting cast speed and protection against evil magics", in the tooltip's words. The robe has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **50 Weight** and **7.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dacxirons:blessed_priest_hood}}

{{recipes dacxirons:blessed_priest_robe}}

{{recipes dacxirons:blessed_priest_leggings}}

{{recipes dacxirons:blessed_priest_boots}}
