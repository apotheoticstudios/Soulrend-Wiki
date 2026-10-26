---
{
  "title": "Belts",
  "aliases": [
    "Bottled Fairy Dust",
    "Champion Belt",
    "Lantern",
    "Soul Lantern",
    "Paper Lantern",
    "Decorated Paper Lantern",
    "Elytra-Jetpack Component",
    "Pocket Black Hole",
    "Advanced Wireless Terminal"
  ],
  "summary": "10 items.",
  "items": [
    "dungeons_and_combat:bottled_fairy_dust",
    "dungeons_and_combat:champion_belt",
    "minecraft:lantern",
    "minecraft:soul_lantern",
    "quark:paper_lantern",
    "quark:paper_lantern_sakura",
    "supplementaries:key",
    "traveloptics:elytra_jetpack_component",
    "traveloptics:pocket_black_hole",
    "toms_storage:ts.adv_wireless_terminal"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  immersivelanterns jar: mods.toml description, data/curios/tags/items/belt.json; config/immersivelanterns-client.toml
  EpicFight x Curios Compat jar, supplementaries jar: data/curios/tags/items/belt.json
  toms_storage jar: lang tooltip.toms_storage.adv_wireless_terminal*
-->

**Belts** covers 10 items.

## Usage

Belts go in the Curios belt slot. From their tooltips and the mods that make them wearable:

- **Bottled Fairy Dust:** Jump Boost II while worn. **Champion Belt:** more maximum health, armor and knockback resistance. (Dungeons and Combat)
- **Lantern** and **Soul Lantern:** Immersive Lanterns lets them hang from the belt, where they swing with the wearer's movement and give off dynamic light. The **Paper Lanterns** (Quark) are wearable through Epic Fight x Curios Compat.
- **Key** (Supplementaries): any item in the keys tag can be worn here, so a safe's key can be carried without taking an inventory slot.
- **Elytra-Jetpack Component:** an armor augment for the Mechanized Exoskeleton. With it, the suit refuels to full from Plasma Power Cells instead of Tesla Bulbs, and its laser cannons use 50% less fuel while airborne.
- **Pocket Black Hole:** draws in nearby experience orbs.
- **Advanced Wireless Terminal** (Tom's Simple Storage): Shift-right-click a storage terminal to bind it; worn, it opens the bound terminal with a key (unbound by default). The terminal's chunk has to be loaded, and a beacon near the terminal lets it be reached from anywhere in the dimension or across dimensions.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:bottled_fairy_dust]] | dungeons and combat | Slot: Belt; Jump boost II | crafting |
| [[item:dungeons_and_combat:champion_belt]] | dungeons and combat | Slot: Belt; Increased maximum health, armor and knockback resistance | 1 loot table |
| [[item:minecraft:lantern]] | Minecraft | Slot: Belt | crafting, 9 loot tables |
| [[item:minecraft:soul_lantern]] | Minecraft | Slot: Belt | crafting, 4 loot tables |
| [[item:quark:paper_lantern]] | Quark | Slot: Belt | crafting |
| [[item:quark:paper_lantern_sakura]] | Quark | Slot: Belt | crafting |
| [[item:supplementaries:key]] | Supplementaries | Slot: Belt | crafting, 2 loot tables |
| [[item:traveloptics:elytra_jetpack_component]] | T.O Magic 'n Extras | Slot: Belt; Armor Augment: Mechanized Exoskeleton; Mechanized Exoskeleton armor uses Plasma Power Cells instead of Tesla Bulbs, recharging to full. Laser cannons consume 50% less fuel while airborne; Crafting Item | crafting |
| [[item:traveloptics:pocket_black_hole]] | T.O Magic 'n Extras | Slot: Belt; A miniature black hole that draws in experience orbs naturally | 1 loot table |
| [[item:toms_storage:ts.adv_wireless_terminal]] | Tom's Simple Storage Mod | Slot: Belt; Hold SHIFT for more info. Press the [Not Bound] key to open | crafting |

## Dungeons and Combat

### Bottled Fairy Dust

[[item:dungeons_and_combat:bottled_fairy_dust]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Jump boost II | When Equipped |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dungeons_and_combat:bottled_fairy_dust}}

### Champion Belt

[[item:dungeons_and_combat:champion_belt]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Increased maximum health, armor and knockback resistance | When Equipped |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/kamath\|Kamath]] (drop) | 100% | 0–1 |

## Minecraft

### Lantern

[[item:minecraft:lantern]] (Minecraft)

#### Obtaining

9 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `furnish:blocks/lantern_bunting` (block drop) | 100% | 1 |
| `irons_spellbooks:chests/citadel/rampart_chest` (chest) | 100% | 0–8 |
| `irons_spellbooks:chests/citadel/rampart_supplies` (chest) | 100% | 0–8 |
| `realmrpg_skeletons:blocks/explorer_skeleton` (block drop) | 49% | 1–8 |
| `abridged:chests/badlands_mining` (chest) | 20% per roll, 1–2 rolls | 2–4 |
| `dungeons_arise:chests/mechanical_nest/mechanical_nest_equipment` (chest) | 10% per roll, 2 rolls | 2–6 |
| `dungeons_arise:chests/mechanical_nest/mechanical_nest_normal` (chest) | 10% per roll, 2 rolls | 2–6 |
| `abridged:chests/pillager_bridge` (chest) | 6.67% per roll, 2–4 rolls | 1–3 |
| `idas:chests/wacky_wares/wacky_wares_misc` (chest) | 5.41% per roll, 5–7 rolls | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes minecraft:lantern}}

#### Used in

{{uses minecraft:lantern}}

### Soul Lantern

[[item:minecraft:soul_lantern]] (Minecraft)

#### Obtaining

4 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `furnish:blocks/soul_lantern_bunting` (block drop) | 100% | 1 |
| `dungeons_arise:chests/keep_kayra/keep_kayra_garden_normal` (chest) | 33.3% per roll, 2 rolls | 1 |
| `dungeons_arise:chests/keep_kayra/keep_kayra_garden_treasure` (chest) | 33.3% per roll, 2 rolls | 1 |
| `block_factorys_bosses:chests/undead_arena_common` (chest) | 2.78% per roll, 2–3 rolls | 1–2 |

It can also be crafted (see below).

#### Crafting

{{recipes minecraft:soul_lantern}}

#### Used in

{{uses minecraft:soul_lantern}}

## Quark

### Paper Lantern

[[item:quark:paper_lantern]] (Quark)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes quark:paper_lantern}}

#### Used in

{{uses quark:paper_lantern}}

### Decorated Paper Lantern

[[item:quark:paper_lantern_sakura]] (Quark)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes quark:paper_lantern_sakura}}

## Key

[[item:supplementaries:key]] (Supplementaries)

### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `integrated_villages:chests/mossy_mounds/mossy_mounds_bedroom` (chest) | 25% per roll, 1–1 rolls | 1 |
| `integrated_stronghold:chests/sanctorum` (chest) | 12.5% per roll, 1–1 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes supplementaries:key}}

## T.O Magic 'n Extras

### Elytra-Jetpack Component

[[item:traveloptics:elytra_jetpack_component]] (T.O Magic 'n Extras, traveloptics:mechanized)

| Stat | Value | When |
| --- | --- | --- |
|  | Armor Augment: Mechanized Exoskeleton | When worn as belt |
|  | Mechanized Exoskeleton armor uses Plasma Power Cells instead of Tesla Bulbs, recharging to full. Laser cannons consume 50% less fuel while airborne | When worn as belt |
|  | Crafting Item | When worn as belt |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes traveloptics:elytra_jetpack_component}}

#### Used in

{{uses traveloptics:elytra_jetpack_component}}

### Pocket Black Hole

[[item:traveloptics:pocket_black_hole]] (T.O Magic 'n Extras, traveloptics:void)

| Stat | Value | When |
| --- | --- | --- |
|  | A miniature black hole that draws in experience orbs naturally | When worn as belt |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `traveloptics:chests/void_cathedral/hidden_treasure_place` (chest) | 50% | 1 |

#### Used in

{{uses traveloptics:pocket_black_hole limit=6}}

## Advanced Wireless Terminal

[[item:toms_storage:ts.adv_wireless_terminal]] (Tom's Simple Storage Mod)

Its tooltip says:

- Hold SHIFT for more info.
- Press the [Not Bound] key to open

### Obtaining

It is crafted (see below).

### Crafting

{{recipes toms_storage:ts.adv_wireless_terminal}}
