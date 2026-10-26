---
{
  "title": "Blessed Gold Armor",
  "aliases": [
    "Blessed Gold Helmet",
    "Blessed Gold Chestplate",
    "Blessed Gold Leggings",
    "Blessed Gold Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Agility Path.",
  "infobox": {
    "item": "dungeons_and_combat:blessed_gold_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "19"],
      ["Toughness (all pieces)", "6"]
    ]
  },
  "items": [
    "dungeons_and_combat:blessed_gold_helmet",
    "dungeons_and_combat:blessed_gold_chestplate",
    "dungeons_and_combat:blessed_gold_leggings",
    "dungeons_and_combat:blessed_gold_boots"
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
  dungeons_and_combat jar: BlessedGoldArmorSetProcedure
-->

**Blessed Gold Armor** is an armor set from dungeons and combat. It is set 10 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Damage | Speed | Holy Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:blessed_gold_helmet]] | Helmet | +3 | +1.5 | +10% | +7% | +2% | +5% | +2.75 | +8 | 520 |
| [[item:dungeons_and_combat:blessed_gold_chestplate]] | Chestplate | +7 | +2 | +10% | +7% | +2% | +5% | +3.25 | +12 | 780 |
| [[item:dungeons_and_combat:blessed_gold_leggings]] | Leggings | +6 | +1.5 | +10% | +7% | +2.5% | +5% | +3.25 | +12 | 720 |
| [[item:dungeons_and_combat:blessed_gold_boots]] | Boots | +3 | +1 | +10% | +7% | +2.5% | +5% | +2.75 | +8 | 520 |
| **Full set** |  | **+19** | **+6** | **+40%** | **+28%** | **+9%** | **+20%** | **+12** | **+40** |  |

## Usage

**Set bonus, Sun Bless Me** (all four pieces): during the day the wearer gets Speed I, Haste I and Resistance II.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:blessed_gold_helmet}}

{{recipes dungeons_and_combat:blessed_gold_chestplate}}

{{recipes dungeons_and_combat:blessed_gold_leggings}}

{{recipes dungeons_and_combat:blessed_gold_boots}}
