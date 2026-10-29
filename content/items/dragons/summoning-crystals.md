---
{
  "title": "Summoning Crystals",
  "aliases": [
    "Fire Dragon Summoning Crystal",
    "Ice Dragon Summoning Crystal",
    "Lightning Dragon Summoning Crystal"
  ],
  "summary": "Summoning Crystals bind a tamed dragon and call it to you; Soulrend makes them reusable.",
  "items": [
    "iceandfire:summoning_crystal_fire",
    "iceandfire:summoning_crystal_ice",
    "iceandfire:summoning_crystal_lightning"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json (iceandfire:entities/dragon/*: scales 60, flesh 40, egg 2 on females; customize_to_dragon), game-data/recipes.json
  kubejs/startup_scripts/dragon_summoning.js (also: recall lands at the clicked face; sneak-interact the bound dragon removes only the Dragon tag) (owner and element checks; loaded dragons any distance in the dimension; unloaded dragons within 500 blocks of their last known position; 200-tick cooldown; crystal kept)
-->

**Summoning Crystals** link to one tamed dragon of their element and call it to their user. Soulrend replaces Ice and Fire's behavior with its own script, which makes the crystals reusable.

## Usage

- **Binding:** right-click a dragon with the crystal of its element (fire, ice or lightning). Only the dragon's owner can bind and summon it.
- **Summoning:** using a bound crystal teleports the dragon to its user, and the crystal stays bound for next time. After each call the crystal has a 10 s cooldown.
- **Where it lands:** right-click a block with the bound crystal; the dragon appears against the clicked face. The call does nothing where the player can't use items, such as inside spawn protection.
- **Unbinding:** sneak-right-click the bound dragon with its crystal to clear the binding. The crystal keeps its custom name, and the dragon's other crystals stay bound.
- **Range:** a dragon that is loaded comes from anywhere in the same dimension. One that isn't loaded can still be called from within 500 blocks of where it was last seen. A dragon in another dimension or stored in a Dragon Horn doesn't answer.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:iceandfire:summoning_crystal_fire]] | Ice and Fire | Right click on a dragon to bind it Use when bound to teleport dragon |  |
| [[item:iceandfire:summoning_crystal_ice]] | Ice and Fire | Right click on a dragon to bind it Use when bound to teleport dragon | crafting |
| [[item:iceandfire:summoning_crystal_lightning]] | Ice and Fire | Right click on a dragon to bind it Use when bound to teleport dragon |  |

## Fire Dragon Summoning Crystal

[[item:iceandfire:summoning_crystal_fire]] (Ice and Fire)

Its tooltip says:

- Right click on a dragon to bind it
- Use when bound to teleport dragon

### Used in

{{uses iceandfire:summoning_crystal_fire}}

## Ice Dragon Summoning Crystal

[[item:iceandfire:summoning_crystal_ice]] (Ice and Fire)

Its tooltip says:

- Right click on a dragon to bind it
- Use when bound to teleport dragon

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:summoning_crystal_ice}}

### Used in

{{uses iceandfire:summoning_crystal_ice limit=6}}

## Lightning Dragon Summoning Crystal

[[item:iceandfire:summoning_crystal_lightning]] (Ice and Fire)

Its tooltip says:

- Right click on a dragon to bind it
- Use when bound to teleport dragon

### Used in

{{uses iceandfire:summoning_crystal_lightning}}
