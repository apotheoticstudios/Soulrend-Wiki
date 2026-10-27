---
{
  "title": "Dragonforges",
  "aliases": [
    "Dragonforge Fire Brick",
    "Dragonforge Fire Core",
    "Dragonforge Fire Aperture",
    "Dragonforge Ice Brick",
    "Dragonforge Ice Core",
    "Dragonforge Ice Aperture",
    "Dragonforge Lightning Brick",
    "Dragonforge Lightning Core",
    "Dragonforge Lightning Aperture"
  ],
  "summary": "Dragonforge bricks, cores and apertures: the Ice and Fire multiblock that a dragon powers to make dragonsteel.",
  "items": [
    "iceandfire:dragonforge_fire_brick",
    "iceandfire:dragonforge_fire_core",
    "iceandfire:dragonforge_fire_input",
    "iceandfire:dragonforge_ice_brick",
    "iceandfire:dragonforge_ice_core",
    "iceandfire:dragonforge_ice_input",
    "iceandfire:dragonforge_lightning_brick",
    "iceandfire:dragonforge_lightning_core",
    "iceandfire:dragonforge_lightning_input"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json (iceandfire:entities/dragon/*: scales 60, flesh 40, egg 2 on females; customize_to_dragon), game-data/recipes.json
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar lang (jei_desc, advancements), EntityDragonBase.interact (corpse: Glass Bottle gives blood; skull and heart by death stage; dragon meal, sickly dragon meal)
  config/iceandfire-common.toml ("Dragon Egg Hatch Time" = 7200, "Dragon Flute Distance" = 4, "Dragons Drop Skull/Heart/Blood" = true, dragonsteel base stats)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar TileEntityDragonforge (assembled: checkBrickCorners and checkBrickSlots with the core's element brick)
  game-data/recipes.json (iceandfire:dragonforge: dragonsteel 1,000 ticks; Apotheotic Additions rarity-material forge recipes)
-->

**Dragonforges** are Ice and Fire's forges for dragonsteel. Each element has its own set of bricks, a core and an aperture, and only a dragon of that element can heat it.

## Usage

- **Building one:** the **core** sits in the middle and must be enclosed, corners included, by **bricks** of its element. The **aperture** takes the place of a brick and is where the dragon breathes into the forge. A core that isn't fully enclosed stays inactive.
- **Using it:** put iron in the core with dragon blood of the same element, then have a dragon of that element breathe into the aperture. The forge cooks while it receives breath. A dragonsteel ingot takes 1,000 ticks (50 s) of breath.
- **Recipes:** one iron ingot and one blood make a dragonsteel ingot of that element. Apotheotic Additions adds forge recipes that turn iron into rarity materials.
- **Cores** are crafted from that element's **dragon heart** (see [[items/dragons/dragon-parts|Dragon Parts]]), and bricks from Stone Bricks and blocks of dragon scales of that element. A crafted core is the inactive "disabled" block until the forge is assembled.

The [[progression/side-chapters/dragonslayer|Dragonslayer]] chapter has a quest for each forge.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:iceandfire:dragonforge_fire_brick]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragonforge_fire_core]] | Ice and Fire |  |  |
| [[item:iceandfire:dragonforge_fire_input]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragonforge_ice_brick]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragonforge_ice_core]] | Ice and Fire |  |  |
| [[item:iceandfire:dragonforge_ice_input]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragonforge_lightning_brick]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragonforge_lightning_core]] | Ice and Fire |  |  |
| [[item:iceandfire:dragonforge_lightning_input]] | Ice and Fire |  | crafting |

## Dragonforge Fire Brick

[[item:iceandfire:dragonforge_fire_brick]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_fire_brick}}

### Used in

{{uses iceandfire:dragonforge_fire_brick}}

## Dragonforge Fire Core

[[item:iceandfire:dragonforge_fire_core]] (Ice and Fire)

## Dragonforge Fire Aperture

[[item:iceandfire:dragonforge_fire_input]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_fire_input}}

## Dragonforge Ice Brick

[[item:iceandfire:dragonforge_ice_brick]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_ice_brick}}

### Used in

{{uses iceandfire:dragonforge_ice_brick}}

## Dragonforge Ice Core

[[item:iceandfire:dragonforge_ice_core]] (Ice and Fire)

## Dragonforge Ice Aperture

[[item:iceandfire:dragonforge_ice_input]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_ice_input}}

## Dragonforge Lightning Brick

[[item:iceandfire:dragonforge_lightning_brick]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_lightning_brick}}

### Used in

{{uses iceandfire:dragonforge_lightning_brick}}

## Dragonforge Lightning Core

[[item:iceandfire:dragonforge_lightning_core]] (Ice and Fire)

## Dragonforge Lightning Aperture

[[item:iceandfire:dragonforge_lightning_input]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragonforge_lightning_input}}
