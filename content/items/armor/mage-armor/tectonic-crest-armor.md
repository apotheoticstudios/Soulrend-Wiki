---
{
  "title": "Tectonic Crest Armor",
  "aliases": [
    "Tectonic Crest Helmet",
    "Tectonic Crest Chestplate",
    "Tectonic Crest Leggings",
    "Tectonic Crest Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:tectonic_crest_armor_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:tectonic_crest_armor_helmet",
    "traveloptics:tectonic_crest_armor_chestplate",
    "traveloptics:tectonic_crest_armor_leggings",
    "traveloptics:tectonic_crest_armor_boots"
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
  traveloptics jar: lang item.traveloptics.tectonic_crest_armor.*
-->

**Tectonic Crest Armor** is an armor set from T.O Magic 'n Extras. It is set 3 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Fire Spell Power | Geo Spell Power | Max Mana | Nature Spell Power | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:tectonic_crest_armor_helmet]] | Helmet | +6 | +4 | +15% | +10% | +10% | +150 | +10% | +5% | +20 | +8 |
| [[item:traveloptics:tectonic_crest_armor_chestplate]] | Chestplate | +11 | +4 | +15% | +10% | +10% | +150 | +10% | +5% | +35 | +30 |
| [[item:traveloptics:tectonic_crest_armor_leggings]] | Leggings | +9 | +4 | +15% | +10% | +10% | +150 | +10% | +5% | +27.5 | +20 |
| [[item:traveloptics:tectonic_crest_armor_boots]] | Boots | +6 | +4 | +15% | +10% | +10% | +150 | +10% | +5% | +15 | +9 |
| **Full set** |  | **+32** | **+16** | **+60%** | **+40%** | **+40%** | **+600** | **+40%** | **+20%** | **+97.5** | **+67** |

## Usage

**Full set ability, Tectonic Ward:** each hit the wearer takes triggers a shockwave that knocks back enemies within 7 blocks, damages them and sets them on fire. The shockwave adds damage based on the hit taken and scales with generic and Fire spell power. Cooldown 20 s. A key (B by default, shown in the tooltip) switches it on or off.

**Passive:** unlimited Fire Resistance while the full set is worn. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **67 Weight** and **97.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:tectonic_crest_armor_helmet}}

{{recipes traveloptics:tectonic_crest_armor_chestplate}}

{{recipes traveloptics:tectonic_crest_armor_leggings}}

{{recipes traveloptics:tectonic_crest_armor_boots}}
