---
{
  "title": "Healing",
  "aliases": [
    "Huge Estus Flask",
    "Blessed Bandages",
    "Evasion Elixir",
    "Greater Evasion Elixir",
    "Greater Potion of Healing",
    "Greater Invisibility Elixir",
    "Greater Oakskin Elixir",
    "Invisibility Elixir",
    "Oakskin Elixir",
    "Life Fruit",
    "Golden Life Fruit",
    "Draconic Life Fruit"
  ],
  "summary": "Estus Flasks, Iron's Spellbooks elixirs, Blessed Bandages and the familiar Life Fruits.",
  "items": [
    "dungeons_and_combat:estus_flask",
    "dungeons_and_combat:crimson_flask",
    "dungeons_and_combat:blessed_bandages",
    "irons_spellbooks:evasion_elixir",
    "irons_spellbooks:greater_evasion_elixir",
    "irons_spellbooks:greater_healing_potion",
    "irons_spellbooks:greater_invisibility_elixir",
    "irons_spellbooks:greater_oakskin_elixir",
    "irons_spellbooks:invisibility_elixir",
    "irons_spellbooks:oakskin_elixir",
    "alshanex_familiars:life_fruit_tier_1",
    "alshanex_familiars:life_fruit_tier_2",
    "alshanex_familiars:life_fruit_tier_3"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json (kubejs:estus_flask, minecraft:kjs/dungeons_and_combat_crimson_flask), game-data/effects.json (Evasion, True Invisibility, Oakskin)
  kubejs/server_scripts/minor_features/estus_flask_healing.js (heal 25% / 75% of max health)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar EstusFlaskPlayerFinishesUsingItemProcedure, CrimsonFlaskPlayerFinishesUsingItemProcedure (80-tick item cooldown; Regeneration IV for 60 / 100 ticks), EstusFlaskItem (stacks to 16, drink)
  mods/familiarslib-1.20.1-1.6.jar lang (consumable_item_desc "Right click a Familiar to use", max_reached, tier_too_high)
-->

**Healing** covers the pack's healing and defensive drinks: the two Estus Flasks, Iron's Spellbooks elixirs, the Blessed Bandages and the Life Fruits that strengthen familiars.

## Usage

- **Estus Flask** and **Huge Estus Flask:** drinkable at any hunger level. Soulrend's KubeJS makes them heal a share of maximum health at once, and Dungeons and Combat adds Regeneration IV and a 4 s cooldown on that flask. Each drink uses up one flask; Estus Flasks stack to 16.

  | Flask | Instant healing | Regeneration IV | Cooldown |
  | --- | --- | --- | --- |
  | Estus Flask | 25% of max health | 3 s | 4 s |
  | Huge Estus Flask | 75% of max health | 5 s | 4 s |

- **Elixirs** (Iron's Spellbooks) give one effect each:
  - **Evasion:** the drinker teleports away from an attack and takes no damage, for as many hits as the elixir says (2 or 4).
  - **True Invisibility:** hides the body, armor and held items too.
  - **Oakskin:** damage reduction, 15% plus 5% per level (+20% and +40% for these elixirs).
- **Greater Potion of Healing:** Instant Health III.
- **Blessed Bandages:** worn in the hands Curios slot, they make the wearer immune to Bleeding.
- **Life Fruits** aren't eaten by the player. Right-clicking a familiar with one raises the familiar's maximum health by the fruit's Bonus, up to its Tier Limit. A familiar past a fruit's tier can't use it.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:estus_flask]] | dungeons and combat | 0 hunger, 0 saturation | 16 loot tables |
| [[item:dungeons_and_combat:crimson_flask]] | dungeons and combat | 0 hunger, 0 saturation |  |
| [[item:dungeons_and_combat:blessed_bandages]] | dungeons and combat | Slot: Hands; Bleeding Immunity | crafting |
| [[item:irons_spellbooks:evasion_elixir]] | Iron's Spells 'n Spellbooks | Evasion II (01:00); Allows 2 Hits to be Evaded | crafting, 1 loot table |
| [[item:irons_spellbooks:greater_evasion_elixir]] | Iron's Spells 'n Spellbooks | Evasion IV (01:00); Allows 4 Hits to be Evaded | crafting, 1 loot table |
| [[item:irons_spellbooks:greater_healing_potion]] | Iron's Spells 'n Spellbooks | Instant Health III | crafting, 2 loot tables |
| [[item:irons_spellbooks:greater_invisibility_elixir]] | Iron's Spells 'n Spellbooks | True Invisibility (00:40) | crafting, 1 loot table |
| [[item:irons_spellbooks:greater_oakskin_elixir]] | Iron's Spells 'n Spellbooks | Oakskin VI (01:30); +40% Damage Reduction | crafting, 1 loot table |
| [[item:irons_spellbooks:invisibility_elixir]] | Iron's Spells 'n Spellbooks | True Invisibility (00:15) | crafting, 2 loot tables |
| [[item:irons_spellbooks:oakskin_elixir]] | Iron's Spells 'n Spellbooks | Oakskin II (00:45); +20% Damage Reduction | crafting, 2 loot tables |
| [[item:alshanex_familiars:life_fruit_tier_1]] | Alshanex Familiars Mod | Type: Health Bonus: 10% Tier Limit: 50% Tier: 1 | crafting |
| [[item:alshanex_familiars:life_fruit_tier_2]] | Alshanex Familiars Mod | Type: Health Bonus: 25% Tier Limit: 100% Tier: 2 | crafting |
| [[item:alshanex_familiars:life_fruit_tier_3]] | Alshanex Familiars Mod | Type: Health Bonus: 50% Tier Limit: 150% Tier: 3 | crafting |

## Estus Flask

[[item:dungeons_and_combat:estus_flask]] (dungeons and combat, uncommon)

Drinking it heals 25% of maximum health and gives Regeneration IV for 3 s, then puts the flask on a 4 s cooldown. It can be drunk at full hunger.

### Obtaining

16 loot tables drop it (the 12 most likely are shown):

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/soleia` (mob drop) | 100% | 0–3 |
| `dungeons_and_combat:chests/hermit_house` (chest) | 100% | 0–3 |
| `dungeons_and_combat:chests/remanent_camp` (chest) | 100% | 0–3 |
| [[bosses/act-iii/high-priest\|High Priest]] (drop) | 100% | 0–3 |
| [[bosses/act-ii/kamath\|Kamath]] (drop) | 100% | 0–3 |
| [[bosses/optional-and-world/dungeons-and-combat-minibosses\|Pyro Knight]] (drop) | 100% | 1–3 |
| [[bosses/act-ii/sunleia\|Sunleia]] (drop) | 100% | 0–3 |
| [[bosses/act-ii/the-gravewatcher\|The GraveWatcher]] (drop) | 100% | 0–3 |
| `dungeons_and_combat:chests/forgotten_sand_treasure` (chest) | 33.3% | 0–3 |
| `dungeons_and_combat:chests/infernal_fortress` (chest) | 25% | 0–2 |
| `dungeons_and_combat:chests/weak_cult` (chest) | 21.1% | 0–2 |
| `dungeons_and_combat:blocks/field_of_fallen` (chest) | 20% | 1–2 |

It can also be crafted:

{{recipes dungeons_and_combat:estus_flask}}

## Huge Estus Flask

[[item:dungeons_and_combat:crimson_flask]] (dungeons and combat, uncommon)

Drinking it heals 75% of maximum health and gives Regeneration IV for 5 s, then puts the flask on a 4 s cooldown. It can be drunk at full hunger.

### Obtaining

It is crafted.

### Crafting

{{recipes dungeons_and_combat:crimson_flask}}

## Blessed Bandages

[[item:dungeons_and_combat:blessed_bandages]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Bleeding Immunity | When Equipped |

### Obtaining

It is crafted (see below).

### Crafting

{{recipes dungeons_and_combat:blessed_bandages}}

## Iron's Spellbooks elixirs

### Evasion Elixir

[[item:irons_spellbooks:evasion_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- Evasion II (01:00)

| Stat | Value | When |
| --- | --- | --- |
|  | Allows 2 Hits to be Evaded | When Applied |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 20% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:evasion_elixir}}

#### Used in

{{uses irons_spellbooks:evasion_elixir}}

### Greater Evasion Elixir

[[item:irons_spellbooks:greater_evasion_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- Evasion IV (01:00)

| Stat | Value | When |
| --- | --- | --- |
|  | Allows 4 Hits to be Evaded | When Applied |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 10% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:greater_evasion_elixir}}

#### Used in

{{uses irons_spellbooks:greater_evasion_elixir}}

### Greater Potion of Healing

[[item:irons_spellbooks:greater_healing_potion]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- Instant Health III

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `alshanex_familiars:chests/origin_island/workshop/potions` (chest) | 25% per roll, 2 rolls | 1 |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 10% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:greater_healing_potion}}

#### Used in

{{uses irons_spellbooks:greater_healing_potion}}

### Greater Invisibility Elixir

[[item:irons_spellbooks:greater_invisibility_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- True Invisibility (00:40)

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 10% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:greater_invisibility_elixir}}

#### Used in

{{uses irons_spellbooks:greater_invisibility_elixir}}

### Greater Oakskin Elixir

[[item:irons_spellbooks:greater_oakskin_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- Oakskin VI (01:30)

| Stat | Value | When |
| --- | --- | --- |
| Damage Reduction | +40% | When Applied |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 10% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:greater_oakskin_elixir}}

#### Used in

{{uses irons_spellbooks:greater_oakskin_elixir}}

### Invisibility Elixir

[[item:irons_spellbooks:invisibility_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- True Invisibility (00:15)

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 20% | 1 |
| `irons_spellbooks:chests/ice_spider_den/dungeon` (chest) | 15% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:invisibility_elixir}}

#### Used in

{{uses irons_spellbooks:invisibility_elixir}}

### Oakskin Elixir

[[item:irons_spellbooks:oakskin_elixir]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- Oakskin II (00:45)

| Stat | Value | When |
| --- | --- | --- |
| Damage Reduction | +20% | When Applied |

#### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `alshanex_familiars:chests/origin_island/workshop/potions` (chest) | 25% per roll, 2 rolls | 1 |
| `irons_spellbooks:magic_items/random_elixir` (loot table) | 20% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:oakskin_elixir}}

#### Used in

{{uses irons_spellbooks:oakskin_elixir}}

## Familiar life fruits

### Life Fruit

[[item:alshanex_familiars:life_fruit_tier_1]] (Alshanex Familiars Mod)

Its tooltip says:

- Type: Health
- Bonus: 10%
- Tier Limit: 50%
- Tier: 1

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes alshanex_familiars:life_fruit_tier_1}}

#### Used in

{{uses alshanex_familiars:life_fruit_tier_1}}

### Golden Life Fruit

[[item:alshanex_familiars:life_fruit_tier_2]] (Alshanex Familiars Mod, rare)

Its tooltip says:

- Type: Health
- Bonus: 25%
- Tier Limit: 100%
- Tier: 2

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes alshanex_familiars:life_fruit_tier_2}}

#### Used in

{{uses alshanex_familiars:life_fruit_tier_2}}

### Draconic Life Fruit

[[item:alshanex_familiars:life_fruit_tier_3]] (Alshanex Familiars Mod, epic)

Its tooltip says:

- Type: Health
- Bonus: 50%
- Tier Limit: 150%
- Tier: 3

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes alshanex_familiars:life_fruit_tier_3}}
