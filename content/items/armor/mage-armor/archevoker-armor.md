---
{
  "title": "Archevoker Armor",
  "aliases": [
    "Archevoker Hat",
    "Archevoker Coat",
    "Archevoker Leggings",
    "Archevoker Boots"
  ],
  "summary": "Armor set from Iron's Spells 'n Spellbooks on the Mage Armor.",
  "infobox": {
    "item": "irons_spellbooks:archevoker_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "20"]
    ]
  },
  "items": [
    "irons_spellbooks:archevoker_helmet",
    "irons_spellbooks:archevoker_chestplate",
    "irons_spellbooks:archevoker_leggings",
    "irons_spellbooks:archevoker_boots"
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

**Archevoker Armor** is an armor set from Iron's Spells 'n Spellbooks. It is set 11 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Evocation Spell Power | Max Mana | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:irons_spellbooks:archevoker_helmet]] | Helmet | +3 | +10% | +125 | +5% | +1.13 | +4.5 |
| [[item:irons_spellbooks:archevoker_chestplate]] | Chestplate | +8 | +10% | +125 | +5% | +1.63 | +6.5 |
| [[item:irons_spellbooks:archevoker_leggings]] | Leggings | +6 | +10% | +125 | +5% | +1.38 | +5.5 |
| [[item:irons_spellbooks:archevoker_boots]] | Boots | +3 | +10% | +125 | +5% | +1.13 | +4.5 |
| **Full set** |  | **+20** | **+40%** | **+500** | **+20%** | **+5.27** | **+21** |

## Usage

It is a mage set: it adds the spell attributes listed in [[#Stats]], and its chestplate has one empty imbue slot for an Iron's Spellbooks spell. It has no set bonus.

## Epic Fight

Together, its 4 pieces add **21 Weight** and **5.27 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes irons_spellbooks:archevoker_helmet}}

{{recipes irons_spellbooks:archevoker_chestplate}}

{{recipes irons_spellbooks:archevoker_leggings}}

{{recipes irons_spellbooks:archevoker_boots}}
