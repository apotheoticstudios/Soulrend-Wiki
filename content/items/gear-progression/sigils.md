---
{
  "title": "Sigils",
  "aliases": [
    "Sigil of Socketing",
    "Sigil of Withdrawal",
    "Sigil of Enhancement",
    "Sigil of Rebirth",
    "Sigil of Unnaming",
    "Sigil of Awakening",
    "Sigil of Ascension",
    "Sigil of Confluence",
    "Sigil of Elevation",
    "Sigil of Erasure",
    "Sigil of Prismatic Conversion",
    "Sigil of Severance",
    "Sigil of Transmutation"
  ],
  "summary": "Sigils: 13 items from the Soulrend modpack.",
  "items": [
    "apotheosis:sigil_of_socketing",
    "apotheosis:sigil_of_withdrawal",
    "apotheosis:sigil_of_enhancement",
    "apotheosis:sigil_of_rebirth",
    "apotheosis:sigil_of_unnaming",
    "apotheotic_additions:gemboundsigil",
    "fallen_gems_affixes:sigil_of_ascension",
    "fallen_gems_affixes:sigil_of_confluence",
    "fallen_gems_affixes:sigil_of_elevation",
    "fallen_gems_affixes:sigil_of_erasure",
    "fallen_gems_affixes:sigil_of_prismatic_conversion",
    "fallen_gems_affixes:sigil_of_severance",
    "fallen_gems_affixes:sigil_of_transmutation"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json (apotheosis:add_sockets max_sockets 3; apotheosis:enchanting infusions; fallen_gems_affixes:* smithing recipe types)
  fallen_gems_affixes jar: AugmentRecipe and the sigil recipe classes; lang
  config/ftbquests/quests/chapters/affix_enchanting.snbt (what the quests say each sigil does)
-->

**Sigils** lists 13 items.

## Usage

Sigils are Apotheosis and Fallen Gems & Affixes consumables for working on [[items/gear-progression|affix gear]]:

- **Fuel:** the Sigil of Rebirth for the reforging tables, and the Sigil of Enhancement for the Augmenting Table.
- **Smithing Table:** most others are combined with an item in a Smithing Table to change its sockets, gems, affixes or augments.
- **Infusion:** the Sigils of Ascension, Severance and Erasure are made by infusing another sigil in an enchanting table that has enough Eterna, Quanta and Arcana.
- **Crafting:** the Sigil of Awakening goes into the crafted boss gem recipes.

The [[progression/side-chapters/reforging|Reforging]] quest chapter introduces most of them.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheosis:sigil_of_socketing]] | Apotheosis | Adds one socket to an item | crafting, 9 loot tables |
| [[item:apotheosis:sigil_of_withdrawal]] | Apotheosis | Removes all socketed gems from an item | crafting |
| [[item:apotheosis:sigil_of_enhancement]] | Apotheosis | Used to fuel the Augmentation Table | crafting |
| [[item:apotheosis:sigil_of_rebirth]] | Apotheosis | Used to fuel the Reforging Table | crafting |
| [[item:apotheosis:sigil_of_unnaming]] | Apotheosis | Removes the affixed name from an item | crafting, 6 loot tables |
| [[item:apotheotic_additions:gemboundsigil]] | Apotheotic Additions | Used to craft boss jewels | crafting |
| [[item:fallen_gems_affixes:sigil_of_ascension]] | Fallen Gems & Affixes | Converts a Socket slot into an Augment slot Only untiered sockets can get converted | crafting |
| [[item:fallen_gems_affixes:sigil_of_confluence]] | Fallen Gems & Affixes | Combine two identical items in a Smithing Table: affixes and unique gems from the addition item are merged into the base item Shared affixes are combined into … | crafting |
| [[item:fallen_gems_affixes:sigil_of_elevation]] | Fallen Gems & Affixes | Elevates all Tiered Socket slots to the next rarity | crafting |
| [[item:fallen_gems_affixes:sigil_of_erasure]] | Fallen Gems & Affixes | Removes all scroll-applied affixes from an item | crafting |
| [[item:fallen_gems_affixes:sigil_of_prismatic_conversion]] | Fallen Gems & Affixes | Unifies all sockets into a single Catalyst Socket Gem power scales with the number of consumed sockets. Requires all sockets to be empty. | crafting |
| [[item:fallen_gems_affixes:sigil_of_severance]] | Fallen Gems & Affixes | Removes all socketed augments from an item | crafting |
| [[item:fallen_gems_affixes:sigil_of_transmutation]] | Fallen Gems & Affixes | Transfers affixes, sockets and gems between gear. Base gear must not have any affix / augment / sockets. Source gear must have the same LootCategory with base … | crafting |

## Sigil of Socketing

[[item:apotheosis:sigil_of_socketing]] (Apotheosis, uncommon)

> Adds one socket to an item

Combine it with an item in a Smithing Table to add one socket. This works until the item has 3 sockets.

### Obtaining

9 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `apotheotic_additions:chests/aa_spawner` (chest) | 1.67% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/ars_spawner` (chest) | 1.64% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/caves_spawner` (chest) | 1.54% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/ie_spawner` (chest) | 1.01% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/ender_spawner` (chest) | 0.96% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/create_spawner` (chest) | 0.93% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/witherstorm_spawner` (chest) | 0.88% per roll, 4–8 rolls | 1 |
| `apotheotic_additions:chests/born_in_chaos_spawner` (chest) | 0.83% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/eidolon_spawner` (chest) | 0.76% per roll, 5–6 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes apotheosis:sigil_of_socketing}}

### Used in

{{uses apotheosis:sigil_of_socketing}}

## Sigil of Withdrawal

[[item:apotheosis:sigil_of_withdrawal]] (Apotheosis, uncommon)

> Removes all socketed gems from an item

Combine it with an item in a Smithing Table to take out every socketed gem.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes apotheosis:sigil_of_withdrawal}}

### Used in

{{uses apotheosis:sigil_of_withdrawal}}

## Sigil of Enhancement

[[item:apotheosis:sigil_of_enhancement]] (Apotheosis, uncommon)

> Used to fuel the Augmentation Table

It is the fuel of the Augmenting Table, which improves a single affix on an item.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes apotheosis:sigil_of_enhancement}}

### Used in

{{uses apotheosis:sigil_of_enhancement}}

## Sigil of Rebirth

[[item:apotheosis:sigil_of_rebirth]] (Apotheosis, uncommon)

> Used to fuel the Reforging Table

It is the fuel of the reforging tables; [[items/gear-progression/reforging-tables|Reforging Tables]] lists how many each rarity costs.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes apotheosis:sigil_of_rebirth}}

### Used in

{{uses apotheosis:sigil_of_rebirth}}

## Sigil of Unnaming

[[item:apotheosis:sigil_of_unnaming]] (Apotheosis, uncommon)

> Removes the affixed name from an item

Combine it with an affix item in a Smithing Table to remove the item's generated affix name.

### Obtaining

6 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `apotheotic_additions:chests/ie_spawner` (chest) | 3.03% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/ender_spawner` (chest) | 2.88% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/create_spawner` (chest) | 2.8% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/witherstorm_spawner` (chest) | 2.65% per roll, 4–8 rolls | 1 |
| `apotheotic_additions:chests/born_in_chaos_spawner` (chest) | 2.5% per roll, 5–6 rolls | 1 |
| `apotheotic_additions:chests/eidolon_spawner` (chest) | 2.29% per roll, 5–6 rolls | 1 |

It can also be crafted (see below).

### Crafting

{{recipes apotheosis:sigil_of_unnaming}}

### Used in

{{uses apotheosis:sigil_of_unnaming}}

## Sigil of Awakening

[[item:apotheotic_additions:gemboundsigil]] (Apotheotic Additions, uncommon)

> Used to craft boss jewels

It is the core of every [[items/gear-progression/gems/crafted-boss-gems|crafted boss gem]] recipe, together with a boss's materials and Artifact Shards.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes apotheotic_additions:gemboundsigil}}

### Used in

{{uses apotheotic_additions:gemboundsigil limit=6}}

## Sigil of Ascension

[[item:fallen_gems_affixes:sigil_of_ascension]] (Fallen Gems & Affixes, uncommon)

> Converts a Socket slot into an Augment slot Only untiered sockets can get converted

Combine it with an item in a Smithing Table to turn an empty untiered socket into an augment slot for an [[items/gear-progression/augments|augment]]. It is made by infusing a Sigil of Socketing in an enchanting table.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_ascension}}

## Sigil of Confluence

[[item:fallen_gems_affixes:sigil_of_confluence]] (Fallen Gems & Affixes, uncommon)

> Combine two identical items in a Smithing Table: affixes and unique gems from the addition item are merged into the base item Shared affixes are combined into one, stronger affix (max affix level sensitive) Unique gems from the addition item fill the base item's empty sockets; gems that don't fit are lost Neither item can have Augments, and the resulting item can never receive Augments

Two identical items go in a Smithing Table with it, and the addition's affixes and unique gems move to the base item.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_confluence}}

## Sigil of Elevation

[[item:fallen_gems_affixes:sigil_of_elevation]] (Fallen Gems & Affixes, uncommon)

> Elevates all Tiered Socket slots to the next rarity

Combine it with an item in a Smithing Table to raise every tiered socket one rarity, so it takes better gems.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_elevation}}

### Used in

{{uses fallen_gems_affixes:sigil_of_elevation}}

## Sigil of Erasure

[[item:fallen_gems_affixes:sigil_of_erasure]] (Fallen Gems & Affixes, uncommon)

> Removes all scroll-applied affixes from an item

Combine it with an item in a Smithing Table to remove affixes added by affix scrolls. It is made by infusing a Sigil of Severance in an enchanting table.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_erasure}}

## Sigil of Prismatic Conversion

[[item:fallen_gems_affixes:sigil_of_prismatic_conversion]] (Fallen Gems & Affixes, uncommon)

> Unifies all sockets into a single Catalyst Socket Gem power scales with the number of consumed sockets. Requires all sockets to be empty.

Combine it with an item whose sockets are all empty, in a Smithing Table, to merge them into one Catalyst Socket. A gem in that socket gets stronger for each socket merged.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_prismatic_conversion}}

## Sigil of Severance

[[item:fallen_gems_affixes:sigil_of_severance]] (Fallen Gems & Affixes, uncommon)

> Removes all socketed augments from an item

Combine it with an item in a Smithing Table to remove its augments. It is made by infusing a Sigil of Withdrawal in an enchanting table.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_severance}}

### Used in

{{uses fallen_gems_affixes:sigil_of_severance}}

## Sigil of Transmutation

[[item:fallen_gems_affixes:sigil_of_transmutation]] (Fallen Gems & Affixes, uncommon)

> Transfers affixes, sockets and gems between gear. Base gear must not have any affix / augment / sockets. Source gear must have the same LootCategory with base gear.

Combine it with two items in a Smithing Table to move affixes, sockets and gems from one to the other. The receiving item must have no affixes, augments or sockets, and both must be the same kind of item.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes fallen_gems_affixes:sigil_of_transmutation}}

### Used in

{{uses fallen_gems_affixes:sigil_of_transmutation}}
