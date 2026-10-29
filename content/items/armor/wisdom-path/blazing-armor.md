---
{
  "title": "Blazing Armor",
  "aliases": [
    "Blazing Helmet",
    "Blazing Chestplate",
    "Blazing Leggings",
    "Blazing Boots"
  ],
  "summary": "Armor set from dungeons and combat on the Wisdom Path.",
  "infobox": {
    "item": "dungeons_and_combat:molten_blazing_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "40"],
      ["Toughness (all pieces)", "27"]
    ]
  },
  "items": [
    "dungeons_and_combat:molten_blazing_helmet",
    "dungeons_and_combat:molten_blazing_chestplate",
    "dungeons_and_combat:molten_blazing_leggings",
    "dungeons_and_combat:molten_blazing_boots"
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
  dungeons_and_combat jar: MoltenBlazingArmorBonusSetProcedure
-->

**Blazing Armor** is an armor set from dungeons and combat. It is set 13 of 13 on [[items/armor/wisdom-path|Wisdom Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Attack Damage | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:molten_blazing_helmet]] | Helmet | +8 | +6.5 | +10% | +2.5 | +8.75% | +1.12 | +7.5 |
| [[item:dungeons_and_combat:molten_blazing_chestplate]] | Chestplate | +13 | +7 | +10% | +2.5 | +8.75% | +3 | +20 |
| [[item:dungeons_and_combat:molten_blazing_leggings]] | Leggings | +12 | +7 | +10% | +2.5 | +8.75% | +2.62 | +17.5 |
| [[item:dungeons_and_combat:molten_blazing_boots]] | Boots | +7 | +6.5 | +10% | +2.5 | +8.75% | +1.12 | +7.5 |
| **Full set** |  | **+40** | **+27** | **+40%** | **+10** | **+35%** | **+7.86** | **+52.5** |

## Usage

**Set bonus, Burning Aura and Fire Resistance** (all four pieces): the wearer has Fire Resistance, and anything that attacks them is set on fire for 10 s.

## Epic Fight

Together, its 4 pieces add **52.5 Weight** and **7.88 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes dungeons_and_combat:molten_blazing_helmet}}

{{recipes dungeons_and_combat:molten_blazing_chestplate}}

{{recipes dungeons_and_combat:molten_blazing_leggings}}

{{recipes dungeons_and_combat:molten_blazing_boots}}
