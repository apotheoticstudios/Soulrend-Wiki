---
{
  "title": "Cataclysm Drops",
  "aliases": [
    "Ancient Metal Ingot",
    "Cursium Ingot",
    "Enderite Ingot",
    "Ignitium Ingot",
    "Witherite Ingot",
    "Altar of Abyss",
    "Altar of Amethyst",
    "Altar of Fire",
    "Altar of Void",
    "Boss Respawner"
  ],
  "summary": "Ingots, Burning Ashes, music discs and the arena altars of L_Ender's Cataclysm bosses.",
  "items": [
    "cataclysm:ancient_metal_ingot",
    "cataclysm:cursium_ingot",
    "cataclysm:enderite_ingot",
    "cataclysm:ignitium_ingot",
    "cataclysm:witherite_ingot",
    "cataclysm:burning_ashes",
    "cataclysm:music_disc_ancient_remnant",
    "cataclysm:music_disc_ender_guardian",
    "cataclysm:music_disc_ignis",
    "cataclysm:music_disc_maledictus",
    "cataclysm:music_disc_netherite_monstrosity",
    "cataclysm:music_disc_scylla",
    "cataclysm:music_disc_the_cataclysmfarer",
    "cataclysm:music_disc_the_harbinger",
    "cataclysm:music_disc_the_leviathan",
    "cataclysm:altar_of_abyss",
    "cataclysm:altar_of_amethyst",
    "cataclysm:altar_of_fire",
    "cataclysm:altar_of_void",
    "cataclysm:boss_respawner"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json (cataclysm:amethyst_bless/blessed_amethyst_crab_meat, 120 ticks)
  mods/L_Enders_Cataclysm-3.16.jar AltarOfFire_Block_Entity (Burning Ashes: Ignis), AltarOfAbyss_Block_Entity (Abyssal Sacrifice: The Leviathan), AltarOfVoid_Block_Entity.tick (spawns the Ender Guardian when a player is in range), Altar_Of_Amethyst_Block (holds an item, cataclysm:amethyst_bless recipes), Boss_Respawn_Spawner_Block.use (item matching its stored slot, consumed outside creative, respawns the stored boss)
  mods/L_Enders_Cataclysm-3.16.jar data/cataclysm/advancements/kill_all_bosses.json (Cataclysmfarer disc is the icon; reward 500 XP only)
  enderite ingot: no recipe, loot table, trade or KubeJS script names it (game-data, instance config and kubejs searched)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (Ignited Berserker: Burning Ashes, 25%)
-->

**Cataclysm Drops** covers what L_Ender's Cataclysm bosses leave behind: five boss ingots, Burning Ashes, a music disc per boss, and the altars and Boss Respawner that stand in their arenas.

## Usage

- **Ingots.** Ignitium (Ignis), Cursium (Maledictus), Witherite and Ancient Metal are crafting materials for Cataclysm gear and for many of Soulrend's Mechanical Fusion Anvil and upgrade recipes; each ingot's Used in section lists them. The **Enderite Ingot** has no source and no use in Soulrend: no loot table, recipe or trade gives it.
- **Burning Ashes** go into a few upgrade recipes and a gem recipe. The Act III quest asks for one even though the Eye of Flame no longer uses it (see [[progression/act-iii-into-the-flames/burning-ashes|Burning Ashes]]).
- **Music discs** play their boss's theme in a jukebox. Each boss has a 10% chance to drop its disc (+10% per Looting level).
- **Altars** are part of the boss arenas and can't be crafted:
  - **Altar of Fire:** using [[item:cataclysm:burning_ashes]] on it summons [[Ignis]].
  - **Altar of Abyss:** using an Abyssal Sacrifice on it summons [[The Leviathan]].
  - **Altar of Void:** summons the [[Ender Guardian]] when a player comes near.
  - **Altar of Amethyst:** holds one item and blesses it. Its only recipe turns [[item:cataclysm:amethyst_crab_meat]] into [[item:cataclysm:blessed_amethyst_crab_meat]] in 6 s.
- **Boss Respawner:** a block in the arenas that stores a boss and an item. Using that item on it while it is lit spends one and spawns the boss again.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:cataclysm:ancient_metal_ingot]] | cataclysm |  | crafting, 4 loot tables |
| [[item:cataclysm:cursium_ingot]] | cataclysm |  | crafting, 1 loot table |
| [[item:cataclysm:enderite_ingot]] | cataclysm |  |  |
| [[item:cataclysm:ignitium_ingot]] | cataclysm |  | crafting, 1 loot table |
| [[item:cataclysm:witherite_ingot]] | cataclysm |  | crafting |
| [[item:cataclysm:burning_ashes]] | cataclysm |  | crafting, 1 loot table |
| [[item:cataclysm:music_disc_ancient_remnant]] | cataclysm | Yuri_O - The Dryest Beast | 1 loot table |
| [[item:cataclysm:music_disc_ender_guardian]] | cataclysm | Yuri_O - Defender of the Outer Realm | 1 loot table |
| [[item:cataclysm:music_disc_ignis]] | cataclysm | Yuri_O - Light My Fire | 1 loot table |
| [[item:cataclysm:music_disc_maledictus]] | cataclysm | Rotch Gwylt - Maledictus | 1 loot table |
| [[item:cataclysm:music_disc_netherite_monstrosity]] | cataclysm | Yuri_O - Spawn Of Hell | 1 loot table |
| [[item:cataclysm:music_disc_scylla]] | cataclysm | Rotch Gwylt - Scylla | 1 loot table |
| [[item:cataclysm:music_disc_the_cataclysmfarer]] | cataclysm | Yuri_O - The Cataclysmfarer |  |
| [[item:cataclysm:music_disc_the_harbinger]] | cataclysm | Yuri_O - Self-Destruction Sequence | 1 loot table |
| [[item:cataclysm:music_disc_the_leviathan]] | cataclysm | Yuri_O - Predator of the Abyss | 1 loot table |
| [[item:cataclysm:altar_of_abyss]] | cataclysm |  |  |
| [[item:cataclysm:altar_of_amethyst]] | cataclysm |  |  |
| [[item:cataclysm:altar_of_fire]] | cataclysm |  |  |
| [[item:cataclysm:altar_of_void]] | cataclysm |  |  |
| [[item:cataclysm:boss_respawner]] | cataclysm |  |  |

## Ignitium, cursium, witherite, enderite and ancient metal ingots

### Ancient Metal Ingot

[[item:cataclysm:ancient_metal_ingot]] (cataclysm, uncommon)

#### Obtaining

4 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/optional-and-world/cataclysm-minibosses\|Kobolediator]] (drop) | 100% | 1–3 |
| [[bosses/optional-and-world/cataclysm-minibosses\|Wadjet]] (drop) | 100% | 2–4 |
| `cataclysm:chests/cursed_pyramid/cursed_pyramid_treasure` (chest) | 3.16% per roll, 5–8 rolls | 1–3 |
| Koboleton (drop) | 2.5% (player kill, +1% per Looting level) | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes cataclysm:ancient_metal_ingot}}

#### Used in

{{uses cataclysm:ancient_metal_ingot limit=6}}

### Cursium Ingot

[[item:cataclysm:cursium_ingot]] (cataclysm, epic)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/maledictus\|Maledictus]] (drop) | 100% | 3–4 |

It can also be crafted (see below).

#### Crafting

{{recipes cataclysm:cursium_ingot}}

#### Used in

{{uses cataclysm:cursium_ingot limit=6}}

### Enderite Ingot

[[item:cataclysm:enderite_ingot]] (cataclysm, epic)

Nothing in Soulrend drops or crafts it, and no recipe uses it.

### Ignitium Ingot

[[item:cataclysm:ignitium_ingot]] (cataclysm, epic)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/ignis\|Ignis]] (drop) | 100% per roll, 3 rolls | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes cataclysm:ignitium_ingot}}

#### Used in

{{uses cataclysm:ignitium_ingot limit=6}}

### Witherite Ingot

[[item:cataclysm:witherite_ingot]] (cataclysm, epic)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes cataclysm:witherite_ingot}}

#### Used in

{{uses cataclysm:witherite_ingot limit=6}}

## Burning Ashes

[[item:cataclysm:burning_ashes]] (cataclysm, rare)

### Obtaining

Two sources drop it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/optional-and-world/cataclysm-minibosses\|Ignited Revenant]] (drop) | 100% | 1 |
| [[Ignited Berserker]] (extra mob drop) | 25% | 1 |

It can also be crafted (see below).

### Crafting

{{recipes cataclysm:burning_ashes}}

### Used in

{{uses cataclysm:burning_ashes}}

## Boss music discs

### Music Disc (Music Disc Ancient Remnant)

[[item:cataclysm:music_disc_ancient_remnant]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - The Dryest Beast

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/ancient-remnant\|Ancient Remnant]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_ancient_remnant}}

### Music Disc (Music Disc Ender Guardian)

[[item:cataclysm:music_disc_ender_guardian]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - Defender of the Outer Realm

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/ender-guardian\|Ender Guardian]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_ender_guardian}}

### Music Disc (Music Disc Ignis)

[[item:cataclysm:music_disc_ignis]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - Light My Fire

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/ignis\|Ignis]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_ignis}}

### Music Disc (Music Disc Maledictus)

[[item:cataclysm:music_disc_maledictus]] (cataclysm, epic)

Its tooltip says:

- Rotch Gwylt - Maledictus

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/maledictus\|Maledictus]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_maledictus}}

### Music Disc (Music Disc Netherite Monstrosity)

[[item:cataclysm:music_disc_netherite_monstrosity]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - Spawn Of Hell

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/netherite-monstrosity\|Netherite Monstrosity]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_netherite_monstrosity}}

### Music Disc (Music Disc Scylla)

[[item:cataclysm:music_disc_scylla]] (cataclysm, epic)

Its tooltip says:

- Rotch Gwylt - Scylla

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/scylla\|Scylla]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_scylla}}

### Music Disc (Music Disc The Cataclysmfarer)

[[item:cataclysm:music_disc_the_cataclysmfarer]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - The Cataclysmfarer

Nothing drops it. It is the icon of Cataclysm's advancement for killing every boss, which rewards only experience.

#### Used in

{{uses cataclysm:music_disc_the_cataclysmfarer}}

### Music Disc (Music Disc The Harbinger)

[[item:cataclysm:music_disc_the_harbinger]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - Self-Destruction Sequence

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/the-harbinger\|The Harbinger]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_the_harbinger}}

### Music Disc (Music Disc The Leviathan)

[[item:cataclysm:music_disc_the_leviathan]] (cataclysm, epic)

Its tooltip says:

- Yuri_O - Predator of the Abyss

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/the-leviathan\|The Leviathan]] (drop) | 10% (+10% per Looting level) | 1 |

#### Used in

{{uses cataclysm:music_disc_the_leviathan}}

## Boss respawner and altars

### Altar of Abyss

[[item:cataclysm:altar_of_abyss]] (cataclysm, epic)

Using an Abyssal Sacrifice on it summons [[The Leviathan]]. It generates in the arena and has no recipe.

### Altar of Amethyst

[[item:cataclysm:altar_of_amethyst]] (cataclysm, epic)

It holds one item and blesses it: [[item:cataclysm:amethyst_crab_meat]] becomes [[item:cataclysm:blessed_amethyst_crab_meat]] after 6 s. It generates in the arena and has no recipe.

### Altar of Fire

[[item:cataclysm:altar_of_fire]] (cataclysm, epic)

Using [[item:cataclysm:burning_ashes]] on it summons [[Ignis]]. It generates in the arena and has no recipe.

### Altar of Void

[[item:cataclysm:altar_of_void]] (cataclysm, epic)

It summons the [[Ender Guardian]] when a player comes within range. It generates in the arena and has no recipe.

### Boss Respawner

[[item:cataclysm:boss_respawner]] (cataclysm, epic)

It stores a boss and an item. Using that item on it while it is lit spends one and spawns the boss again. It generates in the arena and has no recipe.
