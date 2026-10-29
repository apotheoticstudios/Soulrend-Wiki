---
{
  "title": "Ignitium Armor",
  "aliases": [
    "Ignitium Helmet",
    "Ignitium Chestplate",
    "Ignitium Leggings",
    "Ignitium Boots"
  ],
  "summary": "Armor set from cataclysm on the Wisdom Path.",
  "infobox": {
    "item": "cataclysm:ignitium_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "48"],
      ["Toughness (all pieces)", "30"]
    ]
  },
  "items": [
    "cataclysm:ignitium_helmet",
    "cataclysm:ignitium_chestplate",
    "cataclysm:ignitium_leggings",
    "cataclysm:ignitium_boots"
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
  game-data/items.json (tooltips)
  cataclysm jar: lang item.cataclysm.ignitium_*.desc*
-->

**Ignitium Armor** is an armor set from cataclysm. It is set 6 of 13 on [[items/armor/wisdom-path|Wisdom Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Attack Damage | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:cataclysm:ignitium_helmet]] | Helmet | +10 | +7 | +15% | +3.75 | +6% | +1.25 | +10 |
| [[item:cataclysm:ignitium_chestplate]] | Chestplate | +15 | +8 | +15% | +3.75 | +6% | +1.75 | +12 |
| [[item:cataclysm:ignitium_leggings]] | Leggings | +13 | +8 | +15% | +3.75 | +6% | +1.75 | +12 |
| [[item:cataclysm:ignitium_boots]] | Boots | +10 | +7 | +15% | +3.75 | +6% | +1.25 | +10 |
| **Full set** |  | **+48** | **+30** | **+60%** | **+15** | **+24%** | **+6** | **+44** |

## Usage

Each Cataclysm ignitium piece has its own ability, named in its tooltip:

- **Helmet, Gaze of Heat:** pressing C gives the Blazing Brand effect to the living entity the wearer looks at.
- **Chestplate:** it can be combined with an elytra.
- **Leggings:** Flame Reflex.
- **Boots:** Lava Walker.

<!-- TODO: describe Flame Reflex and Lava Walker; their tooltips give only the names. -->

## Epic Fight

Together, its 4 pieces add **44 Weight** and **6 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes cataclysm:ignitium_helmet}}

{{recipes cataclysm:ignitium_chestplate}}

{{recipes cataclysm:ignitium_leggings}}

{{recipes cataclysm:ignitium_boots}}
