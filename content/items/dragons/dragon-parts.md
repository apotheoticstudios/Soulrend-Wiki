---
{
  "title": "Dragon Parts",
  "aliases": [
    "Fire Dragon Blood",
    "Ice Dragon Blood",
    "Lightning Dragon Blood",
    "Fire Dragon Flesh",
    "Fire Dragon Heart",
    "Ice Dragon Flesh",
    "Ice Dragon Heart",
    "Lightning Dragon Flesh",
    "Lightning Dragon Heart",
    "Witherbone"
  ],
  "summary": "What a dead Ice and Fire dragon gives: blood, flesh, hearts, skulls and bones, and what each is for.",
  "items": [
    "iceandfire:fire_dragon_blood",
    "iceandfire:ice_dragon_blood",
    "iceandfire:lightning_dragon_blood",
    "iceandfire:fire_dragon_flesh",
    "iceandfire:fire_dragon_heart",
    "iceandfire:ice_dragon_flesh",
    "iceandfire:ice_dragon_heart",
    "iceandfire:lightning_dragon_flesh",
    "iceandfire:lightning_dragon_heart",
    "iceandfire:dragon_skull_fire",
    "iceandfire:dragon_skull_ice",
    "iceandfire:dragon_skull_lightning",
    "iceandfire:dragonbone",
    "iceandfire:witherbone"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json (iceandfire:entities/dragon/*: scales 60, flesh 40, egg 2 on females; customize_to_dragon), game-data/recipes.json
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar lang (jei_desc, advancements), EntityDragonBase.interact (corpse: Glass Bottle gives blood; skull and heart by death stage; dragon meal, sickly dragon meal)
  config/iceandfire-common.toml ("Dragon Egg Hatch Time" = 7200, "Dragon Flute Distance" = 4, "Dragons Drop Skull/Heart/Blood" = true, dragonsteel base stats)
-->

**Dragon Parts** are what a dead Ice and Fire dragon leaves: its blood, flesh, heart, skull and bones. They are the raw materials for dragonsteel, Dragonforges and dragon-bone weapons. Ice and Fire dragons are covered on the [[Fire Dragon]], [[Ice Dragon]] and [[Lightning Dragon]] pages.

## Usage

**Harvesting a corpse.** A killed dragon doesn't vanish; it leaves a corpse that is harvested by right-clicking it, in stages:

- With a **Glass Bottle**, the corpse fills it with that dragon's **blood** (Fire, Ice or Lightning).
- Otherwise each harvest rolls the dragon's loot: its **scales** (in the dragon's color) or its **flesh**, and for a female a small chance of an **egg** (see [[items/dragons/dragon-eggs-and-scales|Dragon Eggs & Scales]]).
- Later stages give the dragon's **skull** and its **heart**.

**Uses:**

- **Dragon blood** turns iron into dragonsteel in a Dragonforge of the same element (see [[items/dragons/dragonforges|Dragonforges]]), and upgrades dragon-bone weapons into their Flamed, Iced and Lightning versions. All three bloods go into the Dormant Radar.
- **Dragon hearts** craft the Dragonforge core of their element, and go into Soulrend's Solar Flare, Cyroheart Bow and Galeforce upgrades and the elemental Dragon Bone Swords.
- **Dragon flesh** is food (8 hunger). Soulrend also uses one of each in the Solar Flare, Cyroheart Bow and Galeforce upgrades.
- **Dragon skulls** are trophies: they can be placed on the ground or on a wall. The fire skull also goes into the Titanlord's Scepter.
- **Dragon Bone** makes the dragon-bone tools, weapons, arrows and dragon shields. **Witherbone** goes into dragonsteel long swords and several bone greatswords.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:iceandfire:fire_dragon_blood]] | Ice and Fire |  |  |
| [[item:iceandfire:ice_dragon_blood]] | Ice and Fire |  | 3 loot tables |
| [[item:iceandfire:lightning_dragon_blood]] | Ice and Fire |  |  |
| [[item:iceandfire:fire_dragon_flesh]] | Ice and Fire | 8 hunger, 0.8 saturation | 2 loot tables |
| [[item:iceandfire:fire_dragon_heart]] | Ice and Fire |  |  |
| [[item:iceandfire:ice_dragon_flesh]] | Ice and Fire | 8 hunger, 0.8 saturation | 5 loot tables |
| [[item:iceandfire:ice_dragon_heart]] | Ice and Fire |  | 3 loot tables |
| [[item:iceandfire:lightning_dragon_flesh]] | Ice and Fire | 8 hunger, 0.8 saturation | 2 loot tables |
| [[item:iceandfire:lightning_dragon_heart]] | Ice and Fire |  |  |
| [[item:iceandfire:dragon_skull_fire]] | Ice and Fire | Fire |  |
| [[item:iceandfire:dragon_skull_ice]] | Ice and Fire | Ice |  |
| [[item:iceandfire:dragon_skull_lightning]] | Ice and Fire | Lightning |  |
| [[item:iceandfire:dragonbone]] | Ice and Fire |  | crafting, 8 loot tables |
| [[item:iceandfire:witherbone]] | Ice and Fire |  | 7 loot tables |

## Dragon blood

### Fire Dragon Blood

[[item:iceandfire:fire_dragon_blood]] (Ice and Fire)

#### Used in

{{uses iceandfire:fire_dragon_blood limit=6}}

### Ice Dragon Blood

[[item:iceandfire:ice_dragon_blood]] (Ice and Fire)

#### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 11.1% per roll, 1–3 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 10.4% per roll, 2–4 rolls | 1 |
| `iceandfire:chest/mausoleum_chest` (chest) | 1.4% per roll, 1–9 rolls | 1 |

#### Used in

{{uses iceandfire:ice_dragon_blood limit=6}}

### Lightning Dragon Blood

[[item:iceandfire:lightning_dragon_blood]] (Ice and Fire)

#### Used in

{{uses iceandfire:lightning_dragon_blood limit=6}}

## Dragon flesh and hearts

### Fire Dragon Flesh

[[item:iceandfire:fire_dragon_flesh]] (Ice and Fire)

Eating it restores 8 hunger and 0.8 saturation.

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/dragon/fire_dragon_male` (mob drop) | 40% | 1 |
| `iceandfire:entities/dragon/fire_dragon_female` (mob drop) | 39.2% | 1 |

#### Used in

{{uses iceandfire:fire_dragon_flesh}}

### Fire Dragon Heart

[[item:iceandfire:fire_dragon_heart]] (Ice and Fire)

#### Used in

{{uses iceandfire:fire_dragon_heart}}

### Ice Dragon Flesh

[[item:iceandfire:ice_dragon_flesh]] (Ice and Fire)

Eating it restores 8 hunger and 0.8 saturation.

#### Obtaining

5 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/dragon/ice_dragon_male` (mob drop) | 40% | 1 |
| `iceandfire:entities/dragon/ice_dragon_female` (mob drop) | 39.2% | 1 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 11.1% per roll, 1–3 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 10.4% per roll, 2–4 rolls | 1 |
| `iceandfire:chest/mausoleum_chest` (chest) | 1% per roll, 1–9 rolls | 1 |

#### Used in

{{uses iceandfire:ice_dragon_flesh}}

### Ice Dragon Heart

[[item:iceandfire:ice_dragon_heart]] (Ice and Fire)

#### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 11.1% per roll, 1–3 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 10.4% per roll, 2–4 rolls | 1 |
| `iceandfire:chest/mausoleum_chest` (chest) | 1% per roll, 1–9 rolls | 1 |

#### Used in

{{uses iceandfire:ice_dragon_heart}}

### Lightning Dragon Flesh

[[item:iceandfire:lightning_dragon_flesh]] (Ice and Fire)

Eating it restores 8 hunger and 0.8 saturation.

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/dragon/lightning_dragon_male` (mob drop) | 40% | 1 |
| `iceandfire:entities/dragon/lightning_dragon_female` (mob drop) | 39.2% | 1 |

#### Used in

{{uses iceandfire:lightning_dragon_flesh}}

### Lightning Dragon Heart

[[item:iceandfire:lightning_dragon_heart]] (Ice and Fire)

#### Used in

{{uses iceandfire:lightning_dragon_heart}}

## Dragon skulls

### Dragon Skull (Dragon Skull Fire)

[[item:iceandfire:dragon_skull_fire]] (Ice and Fire)

Its tooltip says:

- Fire

#### Used in

{{uses iceandfire:dragon_skull_fire}}

### Dragon Skull (Dragon Skull Ice)

[[item:iceandfire:dragon_skull_ice]] (Ice and Fire)

Its tooltip says:

- Ice

#### Used in

{{uses iceandfire:dragon_skull_ice}}

### Dragon Skull (Dragon Skull Lightning)

[[item:iceandfire:dragon_skull_lightning]] (Ice and Fire)

Its tooltip says:

- Lightning

#### Used in

{{uses iceandfire:dragon_skull_lightning}}

## Dragon Bone

[[item:iceandfire:dragonbone]] (Ice and Fire)

### Obtaining

8 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/dragon/fire_dragon_skeleton` (mob drop) | 100% | 1 |
| `iceandfire:entities/dragon/ice_dragon_skeleton` (mob drop) | 100% | 1 |
| `iceandfire:entities/dragon/lightning_dragon_skeleton` (mob drop) | 100% | 1 |
| `idas:chests/labyrinth/if_labyrinth_tomb` (chest) | 15.9% per roll, 4 rolls | 1–8 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 5.13% per roll, 5–8 rolls | 1–5 |
| `iceandfire:chest/village_scribe` (chest) | 4.2% per roll, 1–10 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 3.7% per roll, 4–7 rolls | 1–5 |
| `iceandfire:chest/mausoleum_chest` (chest) | 2.4% per roll, 1–9 rolls | 1–5 |

It can also be crafted (see below).

### Crafting

{{recipes iceandfire:dragonbone}}

### Used in

{{uses iceandfire:dragonbone limit=6}}

## Witherbone

[[item:iceandfire:witherbone]] (Ice and Fire)

### Obtaining

7 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| Cockatrice (drop) | 100% | 0–2 |
| Gorgon (drop) | 100% | 1 |
| `idas:chests/labyrinth/if_labyrinth_tomb` (chest) | 19.2% per roll, 4–6 rolls | 4–6 |
| `idas:chests/labyrinth/if_labyrinth_tomb` (chest) | 15.9% per roll, 4 rolls | 1–8 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 6.41% per roll, 5–8 rolls | 1–8 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 4.63% per roll, 4–7 rolls | 1–8 |
| `iceandfire:chest/mausoleum_chest` (chest) | 3% per roll, 1–9 rolls | 1–8 |

### Used in

{{uses iceandfire:witherbone limit=6}}
