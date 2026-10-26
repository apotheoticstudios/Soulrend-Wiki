---
{
  "title": "Create Armor",
  "aliases": [
    "Cardboard Boots",
    "Cardboard Chestplate",
    "Cardboard Helmet",
    "Cardboard Leggings",
    "Copper Backtank",
    "Copper Diving Boots",
    "Copper Diving Helmet",
    "Netherite Backtank",
    "Netherite Diving Boots",
    "Netherite Diving Helmet"
  ],
  "summary": "Create Armor: 10 armor pieces and their stats.",
  "items": [
    "create:cardboard_boots",
    "create:cardboard_chestplate",
    "create:cardboard_helmet",
    "create:cardboard_leggings",
    "create:copper_backtank",
    "create:copper_diving_boots",
    "create:copper_diving_helmet",
    "create:netherite_backtank",
    "create:netherite_diving_boots",
    "create:netherite_diving_helmet"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  game-data/item-stats.json (armor slot, durability)
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  create jar: lang item.create.*_backtank.tooltip.*, *_diving_helmet.tooltip.*, *_diving_boots.tooltip.*
-->

**Create Armor** lists 10 armor pieces. Values are the tooltip modifiers of each piece.

## Usage

Create's diving gear works as a set:

- **Backtank** (copper or netherite): holds pressurized air for equipment that needs it, and refills when placed and powered by rotation.
- **Diving Helmet:** Water Breathing while worn, draining air pressure from the backtank.
- **Diving Boots:** the wearer sinks faster in liquids, can walk and jump underwater, and isn't moved by mechanical belts. The netherite versions also work in lava.
- **Cardboard** pieces: no ability.

## Epic Fight

The Stun Armor and Weight columns are Epic Fight stats. In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Create

| Piece | Slot | Armor | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- |
| [[item:create:cardboard_helmet]] | Helmet | +1 | +0.38 | +2.5 | 44 |
| [[item:create:cardboard_chestplate]] | Chestplate | +1 | +0.38 | +2.5 | 64 |
| [[item:create:cardboard_leggings]] | Leggings | +1 | +0.38 | +2.5 | 60 |
| [[item:create:cardboard_boots]] | Boots | +1 | +0.38 | +2.5 | 52 |
| **Full set** |  | **+4** | **+1.52** | **+10** |  |

| Piece | Slot | Armor | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- |
| [[item:create:copper_diving_helmet]] | Helmet | +2 | +0.75 | +5 | 77 |
| [[item:create:copper_backtank]] | Chestplate | +4 | +1.5 | +10 |  |
| [[item:create:copper_diving_boots]] | Boots | +1 | +0.38 | +2.5 | 91 |
| **Full set** |  | **+7** | **+2.63** | **+17.5** |  |

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:create:netherite_diving_helmet]] | Helmet | +3 | +3 | +10% | +1.12 | +7.5 | 407 |
| [[item:create:netherite_backtank]] | Chestplate | +8 | +3 | +10% | +3 | +20 |  |
| [[item:create:netherite_diving_boots]] | Boots | +3 | +3 | +10% | +1.12 | +7.5 | 481 |
| **Full set** |  | **+14** | **+9** | **+30%** | **+5.24** | **+35** |  |

