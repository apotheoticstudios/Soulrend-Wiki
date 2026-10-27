---
{
  "title": "Nether Seal",
  "aliases": [
    "Mysterious Shard",
    "Nether Crystal",
    "Obsidian Infused Bottle",
    "Seal Of The Underworld"
  ],
  "summary": "The four seal pieces, the crystal and the Seal of the Underworld that open the Nether.",
  "items": [
    "nether_remastered:seal_piece_1",
    "nether_remastered:seal_crystal",
    "nether_remastered:obsidian_infused_bottle",
    "nether_remastered:bottled_nether_essence",
    "nether_remastered:seal_of_the_underworld_item"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json
  content/progression/act-ii-first-steps/the-seal-of-the-underworld.md and bottled-nether-essence.md (shard sources, essence mobs, seal rules; their sources comments cite act_2.snbt, config/nether remastered.toml and CaptureEssenceProcedure)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (Warden: Nether Crystal, 50%)
-->

The **Nether Seal** items open the Nether, which is sealed in Soulrend. Four Mysterious Shards, a Nether Crystal and four Bottled Nether Essence craft the **Seal Of The Underworld**, the goal of [[progression/act-ii-first-steps|Act II]].

## Usage

- **Seal Of The Underworld:** hold right-click for 5 s to use it. After that, Nether portals take the player to the Nether; before, they only show a message. Each player has to use a seal, but it isn't used up, so one seal can be passed around a team.
- **Mysterious Shards:** all four share that name; the quests call them by position (Top-Left, Top-Right, Bottom-Left, Bottom-Right). Each comes from an Act II boss line or a rare chest or mob drop; see [[progression/act-ii-first-steps/the-seal-of-the-underworld|The Seal Of The Underworld]].
- **Nether Crystal:** the [[Warden]] drops it 50% of the time (the quest says 30%). It also unlocks the core keystones of every skill tree once picked up.
- **Obsidian Infused Bottle → Bottled Nether Essence:** held in the off hand, a bottle fills with essence when its holder kills an undead mob (zombies, skeletons and their variants, zombified piglins, zoglins). Spiders don't count, despite the quest text. The seal needs four.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:nether_remastered:seal_piece_1]] | Nether Remastered | A strange fragment of a magical seal | 1 loot table |
| [[item:nether_remastered:seal_crystal]] | Nether Remastered | It feels warm to the touch... | 6 loot tables |
| [[item:nether_remastered:obsidian_infused_bottle]] | Nether Remastered |  | crafting |
| [[item:nether_remastered:bottled_nether_essence]] | Nether Remastered | Something about this essence is haunting.. |  |
| [[item:nether_remastered:seal_of_the_underworld_item]] | Nether Remastered | The holder of this seal is deemed worthy of entering The Nether | crafting |

## Mysterious Shard

[[item:nether_remastered:seal_piece_1]] (Nether Remastered, uncommon)

Its tooltip says:

- A strange fragment of a magical seal

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `nether_remastered:chests/top_left_piece` (chest) | 10% | 1 |

### Used in

{{uses nether_remastered:seal_piece_1}}

## Nether Crystal

[[item:nether_remastered:seal_crystal]] (Nether Remastered, epic)

Its tooltip says:

- It feels warm to the touch...

### Obtaining

6 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `minecraft:archaeology/desert_pyramid` (archaeology) | 11.1% | 1 |
| `minecraft:archaeology/desert_well` (archaeology) | 11.1% | 1 |
| `minecraft:trailruinsrare` (archaeology) | 7.69% | 1 |
| `minecraft:oceanruincold` (archaeology) | 6.25% | 1 |
| `minecraft:oceanruinwarm` (archaeology) | 6.25% | 1 |
| `minecraft:trailruinscommon` (archaeology) | 2.17% | 1 |

### Used in

{{uses nether_remastered:seal_crystal}}

## Obsidian Infused Bottle

[[item:nether_remastered:obsidian_infused_bottle]] (Nether Remastered)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes nether_remastered:obsidian_infused_bottle}}

## Bottled Nether Essence

[[item:nether_remastered:bottled_nether_essence]] (Nether Remastered)

Its tooltip says:

- Something about this essence is haunting..

### Used in

{{uses nether_remastered:bottled_nether_essence}}

## Seal Of The Underworld

[[item:nether_remastered:seal_of_the_underworld_item]] (Nether Remastered, epic)

Its tooltip says:

- The holder of this seal is deemed worthy of entering The Nether

### Obtaining

It is crafted (see below).

### Crafting

{{recipes nether_remastered:seal_of_the_underworld_item}}
