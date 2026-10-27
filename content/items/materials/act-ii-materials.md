---
{
  "title": "Act II Materials",
  "aliases": [
    "Titanium Ingot",
    "Ancient Sapphire",
    "Forest Troll Leather",
    "Frost Troll Leather",
    "Mountain Troll Leather",
    "Tan Death Worm Chitin",
    "White Death Worm Chitin",
    "Red Death Worm Chitin",
    "Mithril Ingot",
    "Mithril Ore",
    "Mithril Scrap",
    "Mithril Weave",
    "Cryonic Ingot",
    "Subliminal Ingot",
    "Tidal Ingot",
    "Grotesque Ingot",
    "Enchanted Ingot"
  ],
  "summary": "Act II materials: titanium, Ice and Fire monster parts, mithril and the first Astral Calamity armor ingots.",
  "items": [
    "dungeons_and_combat:titanium_ingot",
    "iceandfire:sapphire_gem",
    "iceandfire:troll_leather_forest",
    "iceandfire:troll_leather_frost",
    "iceandfire:troll_leather_mountain",
    "iceandfire:deathworm_chitin_yellow",
    "iceandfire:deathworm_chitin_white",
    "iceandfire:deathworm_chitin_red",
    "iceandfire:sea_serpent_scales_blue",
    "iceandfire:sea_serpent_scales_bronze",
    "iceandfire:sea_serpent_scales_deepblue",
    "iceandfire:sea_serpent_scales_green",
    "iceandfire:sea_serpent_scales_purple",
    "iceandfire:sea_serpent_scales_red",
    "iceandfire:sea_serpent_scales_teal",
    "irons_spellbooks:mithril_ingot",
    "irons_spellbooks:mithril_ore",
    "irons_spellbooks:mithril_scrap",
    "irons_spellbooks:mithril_weave",
    "astral_calamity_extras:cryonic_ingot",
    "astral_calamity_extras:subliminal_ingot",
    "astral_calamity_extras:tidal_ingot",
    "astral_calamity_extras:grotesque_ingot",
    "astral_calamity_extras:enchanted_ingot"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json, game-data/tags.json (tag-based uses: forge:ingots/steel, forge:ingots/silver, forge:gems/<gem>)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (Astral Calamity, Duskfire and HF ingot recipes)
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/worldgen/placed_feature/ore_mithril_placement.json (7 per chunk, y -63 to -38), configured_feature/ore_mithril_feature.json (size 3, never exposed to air), loot_tables/blocks/mithril_ore.json (Silk Touch keeps the ore)
-->

**Act II Materials** come from the monsters and dungeons of Act II: Dungeons and Combat titanium, Ice and Fire monster parts, Iron's Spellbooks mithril, and five Astral Calamity ingots that Soulrend uses to upgrade armor sets.

## Usage

- **Titanium Ingot** makes Dungeons and Combat's titanium tools, weapons, shield and armor.
- **Ancient Sapphire** goes into most Ice and Fire dragon armor upgrades and the Heart of the Deep.
- **Troll Leather** (three kinds) makes the matching troll leather armor. **Death Worm Chitin** (three colors) makes chitin armor and the Death Worm Gauntlet. **Sea Serpent Scales** of any color make the Tide Guardian armor.
- **Mithril:** Mithril Ore generates deep underground (y=−63 to −38) in small veins that never touch air. Mining it gives Mithril Scrap, or the ore itself with Silk Touch. Scrap crafts into the Mithril Ingot, and both go into Iron's Spellbooks rings and amulets and several armor upgrades. Mithril Weave is used for the top mage chestplates and some magic weapons.
- **Astral Calamity ingots** are made with Soulrend's own recipes (shown in each section) and upgrade one armor set each:

  | Ingot | Made from | Upgrades into |
  | --- | --- | --- |
  | Cryonic Ingot | Wrought Ingot and Cryolite Shards | Bounty Hunter armor; also the Subliminal Ingot |
  | Subliminal Ingot | Cryonic Ingot, Frozen Bones and an Echo Shard | Warden armor |
  | Tidal Ingot | Wrought Ingot and two Essences Of Kamath | Kamath's Remains armor |
  | Grotesque Ingot | Magic Cloth and a Stuffed Pumpkin | Scarecrow armor |
  | Enchanted Ingot | Magic Cloth and an Arcane Ingot | Wizard armor |

  The tooltips' descriptions (for example "combining the ancient ice artifact and steel") come from the mod and don't match Soulrend's recipes.


## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:titanium_ingot]] | dungeons and combat |  | crafting, 1 loot table |
| [[item:iceandfire:sapphire_gem]] | Ice and Fire |  | crafting, 9 loot tables |
| [[item:iceandfire:troll_leather_forest]] | Ice and Fire |  | 1 loot table |
| [[item:iceandfire:troll_leather_frost]] | Ice and Fire |  | 4 loot tables |
| [[item:iceandfire:troll_leather_mountain]] | Ice and Fire |  | 1 loot table |
| [[item:iceandfire:deathworm_chitin_yellow]] | Ice and Fire |  | 3 loot tables |
| [[item:iceandfire:deathworm_chitin_white]] | Ice and Fire |  | 3 loot tables |
| [[item:iceandfire:deathworm_chitin_red]] | Ice and Fire |  | 3 loot tables |
| [[item:iceandfire:sea_serpent_scales_blue]] | Ice and Fire | Blue | crafting, 1 loot table |
| [[item:iceandfire:sea_serpent_scales_bronze]] | Ice and Fire | Bronze | crafting |
| [[item:iceandfire:sea_serpent_scales_deepblue]] | Ice and Fire | Deep Blue | crafting |
| [[item:iceandfire:sea_serpent_scales_green]] | Ice and Fire | Green | crafting |
| [[item:iceandfire:sea_serpent_scales_purple]] | Ice and Fire | Purple | crafting |
| [[item:iceandfire:sea_serpent_scales_red]] | Ice and Fire | Red | crafting |
| [[item:iceandfire:sea_serpent_scales_teal]] | Ice and Fire | Teal | crafting |
| [[item:irons_spellbooks:mithril_ingot]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:mithril_ore]] | Iron's Spells 'n Spellbooks |  |  |
| [[item:irons_spellbooks:mithril_scrap]] | Iron's Spells 'n Spellbooks |  | crafting, 2 loot tables |
| [[item:irons_spellbooks:mithril_weave]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:astral_calamity_extras:cryonic_ingot]] | Astral Calamity Extras | A cold metal that can be created by combining the ancient ice artifact and steel. |  |
| [[item:astral_calamity_extras:subliminal_ingot]] | Astral Calamity Extras | A material so cold that it freezes anything that is touching it. |  |
| [[item:astral_calamity_extras:tidal_ingot]] | Astral Calamity Extras | A material rarely created in the deep pressure of the abyss. |  |
| [[item:astral_calamity_extras:grotesque_ingot]] | Astral Calamity Extras | A special metal that is possessed with the soul of Lord Pumpkinhead. |  |
| [[item:astral_calamity_extras:enchanted_ingot]] | Astral Calamity Extras | A special material that was forged by the Ancient Builders. |  |

## Titanium Ingot

[[item:dungeons_and_combat:titanium_ingot]] (dungeons and combat)

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 12% | 0–2 |

It can also be crafted (see below).

### Crafting

{{recipes dungeons_and_combat:titanium_ingot limit=4}}

### Used in

{{uses dungeons_and_combat:titanium_ingot limit=6}}

## Ice and Fire

### Ancient Sapphire

[[item:iceandfire:sapphire_gem]] (Ice and Fire)

#### Obtaining

9 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:blocks/sapphire_ore` (block drop) | 50% | 1 |
| `iceandfire:entities/troll_frost` (mob drop) | 25% per roll, 2 rolls | -5–1 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 22.2% per roll, 1–3 rolls | 1–5 |
| `idas:chests/labyrinth/if_labyrinth_tomb` (chest) | 7.69% per roll, 4–6 rolls | 5–8 |
| `iceandfire:chest/mausoleum_chest` (chest) | 5% per roll, 1–9 rolls | 1–5 |
| `iceandfire:chest/ice_dragon_female_cave` (chest) | 4% per roll, 1–4 rolls | 1–4 |
| `iceandfire:chest/ice_dragon_roost` (chest) | 4% per roll, 1–4 rolls | 1–4 |
| `iceandfire:chest/myrmex_trash_chest` (chest) | 1.45% per roll, 1–4 rolls | 1 |
| `iceandfire:chest/ice_dragon_male_cave` (chest) | 1.42% per roll, 1–6 rolls | 1–4 |

It can also be crafted (see below).

#### Crafting

{{recipes iceandfire:sapphire_gem}}

#### Used in

{{uses iceandfire:sapphire_gem limit=6}}

### Forest Troll Leather

[[item:iceandfire:troll_leather_forest]] (Ice and Fire)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/troll_forest` (mob drop) | 25% per roll, 3 rolls | 1–4 |

#### Used in

{{uses iceandfire:troll_leather_forest}}

### Frost Troll Leather

[[item:iceandfire:troll_leather_frost]] (Ice and Fire)

#### Obtaining

4 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/troll_frost` (mob drop) | 25% per roll, 2 rolls | 1–4 |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 3.42% per roll, 5–8 rolls | 1–3 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 2.47% per roll, 4–7 rolls | 1–3 |
| `iceandfire:chest/mausoleum_chest` (chest) | 1.6% per roll, 1–9 rolls | 1–3 |

#### Used in

{{uses iceandfire:troll_leather_frost}}

### Mountain Troll Leather

[[item:iceandfire:troll_leather_mountain]] (Ice and Fire)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/troll_mountain` (mob drop) | 33.3% per roll, 2 rolls | 1–4 |

#### Used in

{{uses iceandfire:troll_leather_mountain}}

### Tan Death Worm Chitin

[[item:iceandfire:deathworm_chitin_yellow]] (Ice and Fire)

#### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/deathworm_tan` (mob drop) | 46.2% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_tan` (mob drop) | 42.9% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_tan_giant` (mob drop) | 33.3% per roll, 3 rolls | 5–12 |

#### Used in

{{uses iceandfire:deathworm_chitin_yellow}}

### White Death Worm Chitin

[[item:iceandfire:deathworm_chitin_white]] (Ice and Fire)

#### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/deathworm_white` (mob drop) | 46.2% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_white` (mob drop) | 42.9% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_white_giant` (mob drop) | 33.3% per roll, 3 rolls | 5–12 |

#### Used in

{{uses iceandfire:deathworm_chitin_white}}

### Red Death Worm Chitin

[[item:iceandfire:deathworm_chitin_red]] (Ice and Fire)

#### Obtaining

3 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `iceandfire:entities/deathworm_red` (mob drop) | 46.2% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_red` (mob drop) | 42.9% per roll, 3 rolls | 0–2 |
| `iceandfire:entities/deathworm_red_giant` (mob drop) | 33.3% per roll, 3 rolls | 5–12 |

#### Used in

{{uses iceandfire:deathworm_chitin_red}}

### Sea Serpent Scales (Sea Serpent Scales Blue)

[[item:iceandfire:sea_serpent_scales_blue]] (Ice and Fire)

Its tooltip says:

- Blue

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| Sea Serpent (drop) | 100% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_blue}}

#### Used in

{{uses iceandfire:sea_serpent_scales_blue limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Bronze)

[[item:iceandfire:sea_serpent_scales_bronze]] (Ice and Fire)

Its tooltip says:

- Bronze

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_bronze}}

#### Used in

{{uses iceandfire:sea_serpent_scales_bronze limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Deepblue)

[[item:iceandfire:sea_serpent_scales_deepblue]] (Ice and Fire)

Its tooltip says:

- Deep Blue

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_deepblue}}

#### Used in

{{uses iceandfire:sea_serpent_scales_deepblue limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Green)

[[item:iceandfire:sea_serpent_scales_green]] (Ice and Fire)

Its tooltip says:

- Green

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_green}}

#### Used in

{{uses iceandfire:sea_serpent_scales_green limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Purple)

[[item:iceandfire:sea_serpent_scales_purple]] (Ice and Fire)

Its tooltip says:

- Purple

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_purple}}

#### Used in

{{uses iceandfire:sea_serpent_scales_purple limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Red)

[[item:iceandfire:sea_serpent_scales_red]] (Ice and Fire)

Its tooltip says:

- Red

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_red}}

#### Used in

{{uses iceandfire:sea_serpent_scales_red limit=6}}

### Sea Serpent Scales (Sea Serpent Scales Teal)

[[item:iceandfire:sea_serpent_scales_teal]] (Ice and Fire)

Its tooltip says:

- Teal

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes iceandfire:sea_serpent_scales_teal}}

#### Used in

{{uses iceandfire:sea_serpent_scales_teal limit=6}}

## Mithril

### Mithril Ingot

[[item:irons_spellbooks:mithril_ingot]] (Iron's Spells 'n Spellbooks, rare)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes irons_spellbooks:mithril_ingot}}

#### Used in

{{uses irons_spellbooks:mithril_ingot limit=6}}

### Mithril Ore

[[item:irons_spellbooks:mithril_ore]] (Iron's Spells 'n Spellbooks)

The ore generates 7 times per chunk between y=−63 and y=−38, in veins of up to 3 blocks that are never exposed to air (a deepslate variant replaces deepslate). It drops Mithril Scrap, or itself when mined with Silk Touch.

### Mithril Scrap

[[item:irons_spellbooks:mithril_scrap]] (Iron's Spells 'n Spellbooks, rare)

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:chests/citadel/citadel_vault` (chest) | 13.5% per roll, 4 rolls | 1–2 |
| `alshanex_familiars:chests/origin_island/workshop/rings` (chest) | 11.1% per roll, 5 rolls | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:mithril_scrap}}

#### Used in

{{uses irons_spellbooks:mithril_scrap limit=6}}

### Mithril Weave

[[item:irons_spellbooks:mithril_weave]] (Iron's Spells 'n Spellbooks, rare)

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes irons_spellbooks:mithril_weave}}

#### Used in

{{uses irons_spellbooks:mithril_weave limit=6}}

## Cryonic Ingot

[[item:astral_calamity_extras:cryonic_ingot]] (Astral Calamity Extras, uncommon)

Its tooltip says:

- A cold metal that can be created by combining the ancient ice artifact and steel.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes astral_calamity_extras:cryonic_ingot}}

### Used in

{{uses astral_calamity_extras:cryonic_ingot}}

## Subliminal Ingot

[[item:astral_calamity_extras:subliminal_ingot]] (Astral Calamity Extras, uncommon)

Its tooltip says:

- A material so cold that it freezes anything that is touching it.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes astral_calamity_extras:subliminal_ingot}}

### Used in

{{uses astral_calamity_extras:subliminal_ingot}}

## Tidal Ingot

[[item:astral_calamity_extras:tidal_ingot]] (Astral Calamity Extras, uncommon)

Its tooltip says:

- A material rarely created in the deep pressure of the abyss.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes astral_calamity_extras:tidal_ingot}}

### Used in

{{uses astral_calamity_extras:tidal_ingot}}

## Grotesque Ingot

[[item:astral_calamity_extras:grotesque_ingot]] (Astral Calamity Extras, rare)

Its tooltip says:

- A special metal that is possessed with the soul of Lord Pumpkinhead.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes astral_calamity_extras:grotesque_ingot}}

### Used in

{{uses astral_calamity_extras:grotesque_ingot}}

## Enchanted Ingot

[[item:astral_calamity_extras:enchanted_ingot]] (Astral Calamity Extras, uncommon)

Its tooltip says:

- A special material that was forged by the Ancient Builders.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes astral_calamity_extras:enchanted_ingot}}

### Used in

{{uses astral_calamity_extras:enchanted_ingot}}
