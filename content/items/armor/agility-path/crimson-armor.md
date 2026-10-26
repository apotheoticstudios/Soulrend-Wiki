---
{
  "title": "Crimson Armor",
  "aliases": [
    "Crimson Helmet",
    "Crimson Chestplate",
    "Crimson Leggings",
    "Crimson Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Agility Path.",
  "infobox": {
    "item": "dungeons_and_combat:crimson_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "35"],
      ["Toughness (all pieces)", "20"]
    ]
  },
  "items": [
    "dungeons_and_combat:crimson_helmet",
    "dungeons_and_combat:crimson_chestplate",
    "dungeons_and_combat:crimson_leggings",
    "dungeons_and_combat:crimson_boots"
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
  dungeons_and_combat jar: CrimsonArmorBonusProcedure (Bleeding check, CRIMSON_RAGE 2 s, reapplied)
-->

**Crimson Armor** is an armor set from dungeons and combat. It is set 13 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Blood Spell Power | Crit Damage | Speed | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:crimson_helmet]] | Helmet | +7 | +5 | +15% | +5% | +9% | +4.5% | +2.75 | +8 | 693 |
| [[item:dungeons_and_combat:crimson_chestplate]] | Chestplate | +11 | +5 | +15% | +5% | +9% | +4.5% | +3.25 | +12 | 1,008 |
| [[item:dungeons_and_combat:crimson_leggings]] | Leggings | +10 | +5 | +15% | +5% | +9% | +4.5% | +3.25 | +12 | 945 |
| [[item:dungeons_and_combat:crimson_boots]] | Boots | +7 | +5 | +15% | +5% | +9% | +4.5% | +2.75 | +8 | 819 |
| **Full set** |  | **+35** | **+20** | **+60%** | **+20%** | **+36%** | **+18%** | **+12** | **+40** |  |

## Usage

**Set bonus, Crimson Rage** (all four pieces): while the wearer is Bleeding, they get the Crimson Rage effect, which the tooltip describes as Strength III, Resistance III, Speed III and Haste I. That pairs with Dungeons and Combat's Blood Oath weapons, which make the wielder bleed on purpose.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:crimson_helmet}}

{{recipes dungeons_and_combat:crimson_chestplate}}

{{recipes dungeons_and_combat:crimson_leggings}}

{{recipes dungeons_and_combat:crimson_boots}}
