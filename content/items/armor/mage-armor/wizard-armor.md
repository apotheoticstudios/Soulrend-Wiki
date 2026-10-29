---
{
  "title": "Wizard Armor",
  "aliases": [
    "Wizard Hood",
    "Wizard Robes",
    "Wizard Leggings",
    "Wizard Boots"
  ],
  "summary": "Armor set from Iron's Spells 'n Spellbooks on the Mage Armor.",
  "infobox": {
    "item": "irons_spellbooks:wizard_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "20"]
    ]
  },
  "items": [
    "irons_spellbooks:wizard_helmet",
    "irons_spellbooks:wizard_chestplate",
    "irons_spellbooks:wizard_leggings",
    "irons_spellbooks:wizard_boots"
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
-->

**Wizard Armor** is an armor set from Iron's Spells 'n Spellbooks. It is set 18 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Max Mana | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:irons_spellbooks:wizard_helmet]] | Helmet | +3 | +125 | +5% | +1.12 | +7.5 |
| [[item:irons_spellbooks:wizard_chestplate]] | Chestplate | +8 | +125 | +5% | +3 | +20 |
| [[item:irons_spellbooks:wizard_leggings]] | Leggings | +6 | +125 | +5% | +2.25 | +15 |
| [[item:irons_spellbooks:wizard_boots]] | Boots | +3 | +125 | +5% | +1.12 | +7.5 |
| **Full set** |  | **+20** | **+500** | **+20%** | **+7.49** | **+50** |

## Usage

It is a mage set: it adds the spell attributes listed in [[#Stats]], and its chestplate has one empty imbue slot for an Iron's Spellbooks spell. It has no set bonus.

## Epic Fight

Together, its 4 pieces add **50 Weight** and **7.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes irons_spellbooks:wizard_helmet}}

{{recipes irons_spellbooks:wizard_chestplate}}

{{recipes irons_spellbooks:wizard_leggings}}

{{recipes irons_spellbooks:wizard_boots}}
