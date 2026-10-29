---
{
  "title": "Dragon Utility",
  "aliases": [
    "Dragon Meal",
    "Dragon Bone Flute",
    "Dragon Horn",
    "Dragon Command Staff",
    "Dormant Radar",
    "Fire Radar",
    "Ice Radar",
    "Lightning Radar",
    "Master Radar"
  ],
  "summary": "Items for raising and controlling tamed dragons, and the Dragon Radar mod's trackers.",
  "items": [
    "iceandfire:dragon_meal",
    "iceandfire:dragon_flute",
    "iceandfire:dragon_horn",
    "iceandfire:dragon_stick",
    "dragonradarmod:dormant_radar",
    "dragonradarmod:fire_radar",
    "dragonradarmod:ice_radar",
    "dragonradarmod:lightning_radar",
    "dragonradarmod:master_radar"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json (iceandfire:entities/dragon/*: scales 60, flesh 40, egg 2 on females; customize_to_dragon), game-data/recipes.json
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar lang (jei_desc, advancements), EntityDragonBase.interact (corpse: Glass Bottle gives blood; skull and heart by death stage; dragon meal, sickly dragon meal)
  config/iceandfire-common.toml ("Dragon Egg Hatch Time" = 7200, "Dragon Flute Distance" = 4, "Dragons Drop Skull/Heart/Blood" = true, dragonsteel base stats)
  game-data/items.json (dragonradarmod tooltips: activation process, Stage 4-5 dragons)
  mods/dragonradarmod-2.2.0.jar LightningRadarScreen and its Fire/Ice counterparts (DRAGONS FOUND list, Filter: Stages / Genders, Sort, Search Settings radius slider 100-15000 default 7500, "Limited Mode | Stage 1-3 Only", Teleport button), LightningRadarHud (X/Y/Z of the tracked dragon), ServerDiskDragonScanner.scanDragons (reads saved entities, skips Health <= 0, Tamed and Owner), DragonScanner$TeleportRequestPacket (teleports only if the player is in creative), DragonKillHandler (purification messages)
-->

**Dragon Utility** covers the items for keeping tamed dragons, plus the Dragon Radar mod's trackers for finding wild ones.

## Usage

- **Dragon Meal:** fed to a baby dragon, it makes it grow fast. The Sickly Dragon Meal made from it does the opposite and stunts growth.
- **Dragon Bone Flute:** calls back runaway dragons within 4 chunks.
- **Dragon Horn:** stores a dragon inside it, so it can be carried and released elsewhere.
- **Dragon Command Staff:** sets a tamed dragon's mode: Wandering, Following, Staying or Sleeping.
- **Dragon radars** track wild dragons. The Fire, Ice and Lightning Radars each track their own element. Merging all three into a **Dormant Radar** at an anvil, then holding it in the off hand while killing stage 4–5 dragons, purifies it into the **Master Radar**, which tracks every dragon. The Master Radar also goes into the Dragonmancer's Oathbook.

### Using a radar

Using a radar opens its search screen, which lists the wild dragons around the player with their stage, gender and position ("DRAGONS FOUND"). Picking one from the list makes the radar's on-screen display point toward it and show its coordinates.

- **Search radius:** set with a slider in Search Settings, from 100 to 15,000 blocks (7,500 by default). The search also finds dragons in chunks that aren't loaded.
- **Filters and sorting:** filter by stage and gender, and sort the list by distance.
- **Wild dragons only.** Tamed and owned dragons, and dead ones, aren't listed.
- **The element radars are limited to stages 1–3** ("Limited Mode | Stage 1-3 Only"). Only the Master Radar finds stage 4–5 dragons, the ones that drop the most.
- **Teleport** on the list only works in creative mode.

The [[progression/side-chapters/dragonslayer|Dragonslayer]] chapter has quests for the radars and for hatching an egg. To teleport a tamed dragon to you, see [[items/dragons/summoning-crystals|Summoning Crystals]].

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:iceandfire:dragon_meal]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragon_flute]] | Ice and Fire |  | crafting, 3 loot tables |
| [[item:iceandfire:dragon_horn]] | Ice and Fire |  | crafting |
| [[item:iceandfire:dragon_stick]] | Ice and Fire |  | crafting |
| [[item:dragonradarmod:dormant_radar]] | Dragon Radar Mod | ⚙ ACTIVATION PROCESS Once merged, equip in offhand and slay Stage 4-5 dragons to purify.; Fire Radar: ✘; Ice Radar: ✘; Lightning Radar: ✘ | crafting |
| [[item:dragonradarmod:fire_radar]] | Dragon Radar Mod | Tracks Fire Dragons Merge with Dormant Radar in anvil to begin purification process | crafting |
| [[item:dragonradarmod:ice_radar]] | Dragon Radar Mod | Tracks Ice Dragons Merge with Dormant Radar in anvil to begin purification process | crafting |
| [[item:dragonradarmod:lightning_radar]] | Dragon Radar Mod | Tracks Lightning Dragons Merge with Dormant Radar in anvil to begin purification process | crafting |
| [[item:dragonradarmod:master_radar]] | Dragon Radar Mod | Ultimate Dragon Radar Tracks ALL Dragons Created by purifying a fully merged Dormant Radar |  |

## Dragon Meal

[[item:iceandfire:dragon_meal]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragon_meal}}

### Used in

{{uses iceandfire:dragon_meal}}

## Dragon Bone Flute

[[item:iceandfire:dragon_flute]] (Ice and Fire)

### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 9.38% per roll, 1–2 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 8.11% per roll, 1–2 rolls | 1 |
| `iceandfire:chest/mausoleum_chest` (chest) | 1% per roll, 1–9 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes iceandfire:dragon_flute}}

### Used in

{{uses iceandfire:dragon_flute}}

## Dragon Horn

[[item:iceandfire:dragon_horn]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragon_horn limit=4}}

## Dragon Command Staff

[[item:iceandfire:dragon_stick]] (Ice and Fire)

### Obtaining

It is crafted (see below).

### Crafting

{{recipes iceandfire:dragon_stick}}

## Dragon radars

### Dormant Radar

[[item:dragonradarmod:dormant_radar]] (Dragon Radar Mod)

Its tooltip says:

- ⚙ ACTIVATION PROCESS
- Once merged, equip in offhand and
- slay Stage 4-5 dragons to purify.

| Stat | Value | When |
| --- | --- | --- |
|  | Fire Radar: ✘ | Merge each radar in an anvil |
|  | Ice Radar: ✘ | Merge each radar in an anvil |
|  | Lightning Radar: ✘ | Merge each radar in an anvil |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dragonradarmod:dormant_radar limit=4}}

### Fire Radar

[[item:dragonradarmod:fire_radar]] (Dragon Radar Mod)

Its tooltip says:

- Tracks Fire Dragons
- Merge with Dormant Radar in anvil
- to begin purification process

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dragonradarmod:fire_radar}}

### Ice Radar

[[item:dragonradarmod:ice_radar]] (Dragon Radar Mod)

Its tooltip says:

- Tracks Ice Dragons
- Merge with Dormant Radar in anvil
- to begin purification process

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dragonradarmod:ice_radar}}

### Lightning Radar

[[item:dragonradarmod:lightning_radar]] (Dragon Radar Mod)

Its tooltip says:

- Tracks Lightning Dragons
- Merge with Dormant Radar in anvil
- to begin purification process

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dragonradarmod:lightning_radar}}

### Master Radar

[[item:dragonradarmod:master_radar]] (Dragon Radar Mod)

Its tooltip says:

- Ultimate Dragon Radar
- Tracks ALL Dragons
- Created by purifying a
- fully merged Dormant Radar

#### Used in

{{uses dragonradarmod:master_radar}}
