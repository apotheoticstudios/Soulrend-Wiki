---
{
  "title": "Primordial Crest Armor",
  "aliases": [
    "Primordial Crest Helmet",
    "Primordial Crest Chestplate",
    "Primordial Crest Leggings",
    "Primordial Crest Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:primordial_crest_armor_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "22"],
      ["Toughness (all pieces)", "6"]
    ]
  },
  "items": [
    "traveloptics:primordial_crest_armor_helmet",
    "traveloptics:primordial_crest_armor_chestplate",
    "traveloptics:primordial_crest_armor_leggings",
    "traveloptics:primordial_crest_armor_boots"
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
  traveloptics jar: lang item.traveloptics.primordial_crest_armor.*
-->

**Primordial Crest Armor** is an armor set from T.O Magic 'n Extras. It is set 5 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Geo Spell Power | Max Mana | Nature Spell Power | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:primordial_crest_armor_helmet]] | Helmet | +4 | +1.5 | +10% | +125 | +10% | +5% | +15 | +11 | 440 |
| [[item:traveloptics:primordial_crest_armor_chestplate]] | Chestplate | +8 | +1.5 | +10% | +125 | +10% | +5% | +30 | +27 | 640 |
| [[item:traveloptics:primordial_crest_armor_leggings]] | Leggings | +6 | +1.5 | +10% | +125 | +10% | +5% | +25 | +18 | 600 |
| [[item:traveloptics:primordial_crest_armor_boots]] | Boots | +4 | +1.5 | +10% | +125 | +10% | +5% | +12 | +8 | 520 |
| **Full set** |  | **+22** | **+6** | **+40%** | **+500** | **+40%** | **+20%** | **+82** | **+64** |  |

## Usage

**Full set ability, Seismic Ward:** each time the wearer is hit, a shockwave knocks back and damages nearby entities within 5 blocks. The damage scales with Nature and generic spell power. Cooldown 20 s. A key (B by default, shown in the tooltip) switches the response on or off. While the ability is on cooldown, long-cast spells imbued in the armor are interrupted. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **64 Weight** and **82 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:primordial_crest_armor_helmet}}

{{recipes traveloptics:primordial_crest_armor_chestplate}}

{{recipes traveloptics:primordial_crest_armor_leggings}}

{{recipes traveloptics:primordial_crest_armor_boots}}
