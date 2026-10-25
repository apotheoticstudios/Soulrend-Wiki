---
{
  "title": "Esoteric Material",
  "summary": "Act V quest for a Galactic Core, which the Past's Decaying King drops half the time; it also unlocks the Esoteric Reforging Table.",
  "aliases": ["Galactic Core (Quest)", "The final frontier."],
  "infobox": {
    "item": "apotheotic_additions:esoteric_material",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-v-duties|Act V – Duties]]"],
      ["Requires", "[[progression/act-v-duties/visit-the-past|Visit the Past]]"],
      ["Task", "[[item:apotheotic_additions:esoteric_material]]"],
      ["Rewards", "Three rolls on Rare Loot"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/duties.snbt quest 675050C79C731CCA (subtitle "The final frontier."; description "Find Decaying King"; task apotheotic_additions:esoteric_material; three Rare Loot rolls)
  kubejs/server_scripts/dimension/past.js (KING_DROP apotheotic_additions:esoteric_material, KING_DROP_CHANCE 0.5)
  config/ftbquests/quests/chapters/affix_enchanting.snbt Esoteric Reforging Table (depends on Ancient Reforging Table and this quest)
  kubejs/server_scripts/magic/dacxoptics_recipes.js (kubejs:esoteric_reforging_table)
-->
**Esoteric Material** is the [[progression/act-v-duties|Act V]] quest for a [[item:apotheotic_additions:esoteric_material]] (called Galactic Core in game). Its description is just "Find Decaying King": the [[bosses/act-v/decaying-king-past|Decaying King (Past)]], a wither skeleton reskin that roams the Past, has a 50% chance to drop one.

## Requirements

- [[progression/act-v-duties/visit-the-past|Visit the Past]]

## Objectives

Have a Galactic Core.

## Rewards

- Three rolls on [[progression/reward-tables#Rare Loot|Rare Loot]]

## Walkthrough

1. Explore the Dead Wasteland of the Past until a Decaying King appears. Only one can exist within 256 blocks, so cover ground rather than waiting. See [[bosses/act-v/decaying-king-past#Location|Decaying King (Past)]].
2. Kill it. Half of the kills drop a Galactic Core.

## Usage

The Galactic Core is the top ingredient of the **Esoteric Reforging Table**, the last quest of the [[progression/side-chapters/reforging|Reforging]] chapter, which depends on this quest:

```recipe
{ "station": "crafting_table", "grid": [" A ", "BDB", "CCC"], "key": { "A": "apotheotic_additions:esoteric_material", "B": "apotheosis:ancient_material", "C": "deeperdarker:gloomslate_bricks", "D": "ancientreforging:ancient_reforging_table" }, "output": "esotericreforging:esoteric_reforging_table" }
```
