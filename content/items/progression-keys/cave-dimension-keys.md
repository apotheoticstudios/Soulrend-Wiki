---
{
  "title": "Cave Dimension Keys",
  "aliases": [
    "Abyssal Reef",
    "Witch Candy",
    "Pagan Round Medallion",
    "Square Lead Magnet",
    "Ancestral Original Mine",
    "Emerald Arsenic Copper Uranium"
  ],
  "summary": "Six keys that teleport between the Overworld and the Alex's Caves biomes, each made in Soulrend from that cave's boss drops.",
  "items": [
    "alex_caves_dimensions:abyssal_chasm_key",
    "alex_caves_dimensions:candy_cavity_key",
    "alex_caves_dimensions:forlorn_hollows_key",
    "alex_caves_dimensions:magnetic_caves_key",
    "alex_caves_dimensions:primordial_caves_key",
    "alex_caves_dimensions:toxic_caves_key"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json
  mods/Dimensions-of-Alex's-Caves-1.20.1-1.0.4.jar ItemCaveKey.use (in its cave: back to the Overworld; elsewhere: into its cave), RecipeCaveKey + data/alex_caves_dimensions/recipes/cave_keys.json (Cave Codex of the biome with Ender Pearls and Blaze Powder)
  kubejs/server_scripts/recipes/cave_dim_keys_recipes.js (Soulrend recipes for five keys; none for the Candy Cavity)
  config/ftbquests/quests/chapters/the_caverns.snbt (one "Item which teleports you to ..." quest per key except the Candy Cavity)
-->

**Cave Dimension Keys** are the six items of Dimensions of Alex's Caves. Each turns one Alex's Caves biome into its own dimension and carries its user there and back.

## Usage

Using a key outside its cave teleports the user into that cave dimension; using it inside teleports them back to the Overworld. The keys have in-game names that don't say which cave they open:

| Key | Opens |
| --- | --- |
| [[item:alex_caves_dimensions:magnetic_caves_key]] | Magnetic Caves |
| [[item:alex_caves_dimensions:primordial_caves_key]] | Primordial Caves |
| [[item:alex_caves_dimensions:abyssal_chasm_key]] | Abyssal Chasm |
| [[item:alex_caves_dimensions:toxic_caves_key]] | Toxic Caves |
| [[item:alex_caves_dimensions:forlorn_hollows_key]] | Forlorn Hollows |
| [[item:alex_caves_dimensions:candy_cavity_key]] | Candy Cavity |

**Crafting.** Every key can be made with the mod's own recipe: a Cave Codex of that biome with Ender Pearls and Blaze Powder. Soulrend adds a second recipe for five of them, built from materials of other bosses (shown in each section). The Candy Cavity key has only the Cave Codex recipe, which the wiki can't draw because its result depends on the codex.

**Quests.** The Caverns side chapter has one quest for each key except the Candy Cavity's.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alex_caves_dimensions:abyssal_chasm_key]] | Dimensions of Alex's Caves |  |  |
| [[item:alex_caves_dimensions:candy_cavity_key]] | Dimensions of Alex's Caves |  |  |
| [[item:alex_caves_dimensions:forlorn_hollows_key]] | Dimensions of Alex's Caves |  |  |
| [[item:alex_caves_dimensions:magnetic_caves_key]] | Dimensions of Alex's Caves |  |  |
| [[item:alex_caves_dimensions:primordial_caves_key]] | Dimensions of Alex's Caves |  |  |
| [[item:alex_caves_dimensions:toxic_caves_key]] | Dimensions of Alex's Caves |  |  |

## Abyssal Reef

[[item:alex_caves_dimensions:abyssal_chasm_key]] (Dimensions of Alex's Caves)

{{recipes alex_caves_dimensions:abyssal_chasm_key}}

## Witch Candy

[[item:alex_caves_dimensions:candy_cavity_key]] (Dimensions of Alex's Caves)

## Pagan Round Medallion

[[item:alex_caves_dimensions:forlorn_hollows_key]] (Dimensions of Alex's Caves)

{{recipes alex_caves_dimensions:forlorn_hollows_key}}

## Square Lead Magnet

[[item:alex_caves_dimensions:magnetic_caves_key]] (Dimensions of Alex's Caves)

{{recipes alex_caves_dimensions:magnetic_caves_key}}

## Ancestral Original Mine

[[item:alex_caves_dimensions:primordial_caves_key]] (Dimensions of Alex's Caves)

{{recipes alex_caves_dimensions:primordial_caves_key}}

## Emerald Arsenic Copper Uranium

[[item:alex_caves_dimensions:toxic_caves_key]] (Dimensions of Alex's Caves)

{{recipes alex_caves_dimensions:toxic_caves_key}}
