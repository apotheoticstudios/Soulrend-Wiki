---
{
  "title": "Spellbooks",
  "aliases": [
    "Flimsy Journal",
    "Ironbound Tome",
    "Apprentice's Spell Book",
    "Enchanted Spell Book",
    "Ancient Codex",
    "Blaze Instruction Manual",
    "Necronomicon",
    "Druidic Tome",
    "Grimoire of Evokation",
    "Frostbranded Book",
    "Dragonskin Spell Book",
    "Vampiric Spellbook",
    "Rotten Spell Book",
    "Villager Bible",
    "Codex Of The Crushing Depths",
    "The Accused Codex",
    "Codex Of Shattered Horizons",
    "Dragonmancer's Oathbook",
    "Symphonic Grimoire",
    "Divine Manuscript",
    "Cave Codex"
  ],
  "summary": "Spellbooks: 21 items from the Soulrend modpack.",
  "items": [
    "irons_spellbooks:copper_spell_book",
    "irons_spellbooks:iron_spell_book",
    "irons_spellbooks:gold_spell_book",
    "irons_spellbooks:diamond_spell_book",
    "irons_spellbooks:netherite_spell_book",
    "irons_spellbooks:blaze_spell_book",
    "irons_spellbooks:necronomicon_spell_book",
    "irons_spellbooks:druidic_spell_book",
    "irons_spellbooks:evoker_spell_book",
    "irons_spellbooks:ice_spell_book",
    "irons_spellbooks:dragonskin_spell_book",
    "irons_spellbooks:cursed_doll_spell_book",
    "irons_spellbooks:rotten_spell_book",
    "irons_spellbooks:villager_spell_book",
    "traveloptics:codex_of_the_crushing_depths",
    "traveloptics:the_accused_codex",
    "gtbcs_geomancy_plus:codex_of_shattered_horizons",
    "ice_and_fire_spellbooks:dragonmancers_oathbook",
    "alshanex_familiars:sound_spell_book",
    "dacxirons:divine_manuscript_spell_book",
    "alexscaves:cave_codex"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  irons_spellbooks jar: SpellBook, CursedDollSpellbookItem (affinity +levels), InscriptionTableMenu, ArcaneAnvilMenu (unique-item improvement, SpellSlotUpgradeItem.maxSlots), Scroll; lang tooltip.irons_spellbooks.*, item.irons_spellbooks.cursed_doll_spell_book.guide
  kubejs/server_scripts/magic/magic_fixes.js (SHRIVING_UNLOCKABLES: shapeless item + Shriving Stone unlocks locked spells)
  config/paxi/datapacks/soulrend_recipes/data/soulrend/tags/items/custom_recipes_only.json (Soulrend recipes replace the mods' spellbook recipes)
  alexscaves jar: lang item.alexscaves.cave_codex.*, advancements.alexscaves.cave_codex.desc
-->

**Spellbooks** lists 21 items.

## Usage

Spellbooks are worn in the Curios **Spell Book** slot. While a book is equipped, its bonuses apply and its spells can be cast: **Cast Selected Spell** (V by default) casts the selected spell, and the spell wheel key picks another. [[items/magic/spells|Spells]] covers scrolls, mana and Soulrend's casting changes.

- **Adding spells.** At the [[items/magic/magic-stations#Inscription Table|Inscription Table]], a scroll is written into an empty slot of the book, using the scroll up. Selecting an inscribed spell takes it back out as a scroll.
- **More slots.** At the [[items/magic/magic-stations#Arcane Anvil|Arcane Anvil]], a [[item:irons_spellbooks:lesser_spell_slot_upgrade]] adds a slot to a book with fewer than 12. The [[item:traveloptics:sanctified_spell_slot_upgrade]] and [[item:traveloptics:spectral_spell_slot_upgrade]] go up to 15.
- **Unique spellbooks** come with spells inscribed and **locked**, so the Inscription Table can't take them out. At the Arcane Anvil, a scroll of one of those spells raises it by one level.
- **Unlocking.** Soulrend adds a crafting recipe for every unique book with locked spells: the book and a [[item:irons_spellbooks:shriving_stone]] in a crafting grid give the same book back with all its spells unlocked. The same recipe works for many unique weapons and staffs.
- **"+N levels to" lines** raise the named spells' level while the book is equipped.
- **Recipes.** Soulrend replaces the mods' own recipes for nearly every spellbook. The Crafting sections below show the recipes the game uses.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:copper_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 5 Spell Slots; +50 Max Mana; +4% Spell Power; 5 spell slots | crafting |
| [[item:irons_spellbooks:iron_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 6 Spell Slots; +100 Max Mana; +8% Spell Power; 6 spell slots | crafting |
| [[item:irons_spellbooks:gold_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 8 Spell Slots; +150 Max Mana; +12% Spell Power; 8 spell slots | crafting |
| [[item:irons_spellbooks:diamond_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 10 Spell Slots; +200 Max Mana; +16% Spell Power; 10 spell slots | crafting |
| [[item:irons_spellbooks:netherite_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 12 Spell Slots; +20% Cooldown Reduction; +250 Max Mana; +20% Spell Power; 12 spell slots | crafting |
| [[item:irons_spellbooks:blaze_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 10 Spell Slots; +16% Fire Spell Power; +200 Max Mana; 10 spell slots | crafting, 1 loot table |
| [[item:irons_spellbooks:necronomicon_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; Unique Spell Book 10 Spell Slots +2 levels to Raise Dead; [Blood Slash 5]; [Blood Step 5]; [Ray of Siphoning 5]; [Blaze Storm 5]; +20% Blood Spell Power; +250 Max Mana; 10 spell slots | crafting, 1 loot table |
| [[item:irons_spellbooks:druidic_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 10 Spell Slots; +250 Max Mana; +20% Nature Spell Power; 10 spell slots | crafting |
| [[item:irons_spellbooks:evoker_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; Unique Spell Book 10 Spell Slots; [Fang Strike 6]; [Fang Ward 4]; [Summon Vex 4]; +20% Evocation Spell Power; +250 Max Mana; 10 spell slots | crafting, 1 loot table |
| [[item:irons_spellbooks:ice_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 12 Spell Slots; +20% Ice Spell Power; +250 Max Mana; 12 spell slots | crafting |
| [[item:irons_spellbooks:dragonskin_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 12 Spell Slots; +18% Eldritch Spell Power; +24% Ender Spell Power; +300 Max Mana; 12 spell slots | crafting |
| [[item:irons_spellbooks:cursed_doll_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 10 Spell Slots +1 level to Blood Slash, Blood Step; +24% Blood Spell Power; +300 Max Mana; +10% Spell Resistance; 10 spell slots | crafting |
| [[item:irons_spellbooks:rotten_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 8 Spell Slots; +150 Max Mana; +12% Nature Spell Power; -15% Spell Resistance; 8 spell slots | crafting, 6 loot tables |
| [[item:irons_spellbooks:villager_spell_book]] | Iron's Spells 'n Spellbooks | Slot: Spell Book; 10 Spell Slots; +10% Cast Time Reduction; +20% Holy Spell Power; +250 Max Mana; 10 spell slots | crafting |
| [[item:traveloptics:codex_of_the_crushing_depths]] | T.O Magic 'n Extras | Slot: Spell Book; Unique Spell Book 12 Spell Slots +1 level to Vortex Of The Deep; [Aqua Missiles 6]; +10% Cooldown Reduction; +250 Max Mana; +20% Aqua Spell Power; 12 spell slots | crafting |
| [[item:traveloptics:the_accused_codex]] | T.O Magic 'n Extras | Slot: Spell Book; Unique Spell Book 12 Spell Slots +1 level to Despair; [Halberd Horizon 6]; +10% Cooldown Reduction; +24% Ice Spell Power; +300 Max Mana; 12 spell slots | crafting, 1 loot table |
| [[item:gtbcs_geomancy_plus:codex_of_shattered_horizons]] | GTBC's Geomancy Plus | Slot: Spell Book; Unique Spell Book 12 Spell Slots +1 level to Pillar Of The Resounding Earth; [Geo Conductor 3]; +24% Geo Spell Power; +10% Cooldown Reduction; +300 Max Mana; 12 spell slots | crafting |
| [[item:ice_and_fire_spellbooks:dragonmancers_oathbook]] | Ice and Fire: Spellbooks | Slot: Spell Book; 12 Spell Slots; +400 Max Mana; +32% Spell Power; 12 spell slots | crafting |
| [[item:alshanex_familiars:sound_spell_book]] | Alshanex Familiars Mod | Slot: Spell Book; Unique Spell Book 10 Spell Slots; +32% Sound Spell Power; +400 Max Mana; 10 spell slots | crafting |
| [[item:dacxirons:divine_manuscript_spell_book]] | dacxirons | Slot: Spell Book; Unique Spell Book 12 Spell Slots; [Sunleia Beam 6]; +15% Cooldown Reduction; +24% Holy Spell Power; +300 Max Mana; 12 spell slots | crafting |
| [[item:alexscaves:cave_codex]] | Alex's Caves |  |  |

## Flimsy Journal

[[item:irons_spellbooks:copper_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +50 | When equipped as Spell Book |
| Spell Power | +4% | When equipped as Spell Book |

It has 5 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:copper_spell_book}}

### Used in

{{uses irons_spellbooks:copper_spell_book}}

## Ironbound Tome

[[item:irons_spellbooks:iron_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +100 | When equipped as Spell Book |
| Spell Power | +8% | When equipped as Spell Book |

It has 6 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:iron_spell_book}}

### Used in

{{uses irons_spellbooks:iron_spell_book}}

## Apprentice's Spell Book

[[item:irons_spellbooks:gold_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +150 | When equipped as Spell Book |
| Spell Power | +12% | When equipped as Spell Book |

It has 8 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:gold_spell_book}}

### Used in

{{uses irons_spellbooks:gold_spell_book}}

## Enchanted Spell Book

[[item:irons_spellbooks:diamond_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +200 | When equipped as Spell Book |
| Spell Power | +16% | When equipped as Spell Book |

It has 10 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:diamond_spell_book}}

### Used in

{{uses irons_spellbooks:diamond_spell_book limit=6}}

## Ancient Codex

[[item:irons_spellbooks:netherite_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Cooldown Reduction | +20% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |
| Spell Power | +20% | When equipped as Spell Book |

It has 12 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:netherite_spell_book}}

### Used in

{{uses irons_spellbooks:netherite_spell_book}}

## Blaze Instruction Manual

[[item:irons_spellbooks:blaze_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Fire Spell Power | +16% | When equipped as Spell Book |
| Max Mana | +200 | When equipped as Spell Book |

It has 10 spell slots.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:entities/additional_blaze_loot` (mob drop) | 1% (player kill, +0.4% per Looting level) | 1 |

It can also be crafted (see below).

### Crafting

{{recipes irons_spellbooks:blaze_spell_book}}

### Used in

{{uses irons_spellbooks:blaze_spell_book}}

## Necronomicon

[[item:irons_spellbooks:necronomicon_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Blood Spell Power | +20% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |

A unique spellbook with 10 spell slots. It comes with [[items/magic/spells/blood-spells#Blood Slash|Blood Slash]] (level 5), [[items/magic/spells/blood-spells#Blood Step|Blood Step]] (level 5), [[items/magic/spells/blood-spells#Ray of Siphoning|Ray of Siphoning]] (level 5) and [[items/magic/spells/fire-spells#Blaze Storm|Blaze Storm]] (level 5) inscribed and locked. While it is equipped, [[items/magic/spells/blood-spells#Raise Dead|Raise Dead]] is cast 2 levels higher.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:entities/dead_king` (mob drop) | 25% (player kill, +5% per Looting level) | 1 |

It can also be crafted (see below).

### Crafting

{{recipes irons_spellbooks:necronomicon_spell_book}}

### Used in

{{uses irons_spellbooks:necronomicon_spell_book}}

## Druidic Tome

[[item:irons_spellbooks:druidic_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +250 | When equipped as Spell Book |
| Nature Spell Power | +20% | When equipped as Spell Book |

It has 10 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:druidic_spell_book}}

### Used in

{{uses irons_spellbooks:druidic_spell_book}}

## Grimoire of Evokation

[[item:irons_spellbooks:evoker_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Evocation Spell Power | +20% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |

A unique spellbook with 10 spell slots. It comes with [[items/magic/spells/evocation-spells#Fang Strike|Fang Strike]] (level 6), [[items/magic/spells/evocation-spells#Fang Ward|Fang Ward]] (level 4) and [[items/magic/spells/evocation-spells#Summon Vex|Summon Vex]] (level 4) inscribed and locked.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:entities/additional_evoker_loot` (mob drop) | 1.25% (player kill, +0.8% per Looting level) | 1 |

It can also be crafted (see below).

### Crafting

{{recipes irons_spellbooks:evoker_spell_book}}

### Used in

{{uses irons_spellbooks:evoker_spell_book}}

## Frostbranded Book

[[item:irons_spellbooks:ice_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Ice Spell Power | +20% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |

It has 12 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:ice_spell_book}}

### Used in

{{uses irons_spellbooks:ice_spell_book}}

## Dragonskin Spell Book

[[item:irons_spellbooks:dragonskin_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Eldritch Spell Power | +18% | When equipped as Spell Book |
| Ender Spell Power | +24% | When equipped as Spell Book |
| Max Mana | +300 | When equipped as Spell Book |

It has 12 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:dragonskin_spell_book}}

### Used in

{{uses irons_spellbooks:dragonskin_spell_book}}

## Vampiric Spellbook

[[item:irons_spellbooks:cursed_doll_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Blood Spell Power | +24% | When equipped as Spell Book |
| Max Mana | +300 | When equipped as Spell Book |
| Spell Resistance | +10% | When equipped as Spell Book |

It has 10 spell slots. While it is equipped, [[items/magic/spells/blood-spells#Blood Slash|Blood Slash]] and [[items/magic/spells/blood-spells#Blood Step|Blood Step]] are cast 1 level higher.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:cursed_doll_spell_book}}

## Rotten Spell Book

[[item:irons_spellbooks:rotten_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +150 | When equipped as Spell Book |
| Nature Spell Power | +12% | When equipped as Spell Book |
| Spell Resistance | -15% | When equipped as Spell Book |

It has 8 spell slots.

### Obtaining

6 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:chests/catacombs/coffin_loot` (chest) | 15% | 1 |
| `irons_spellbooks:chests/catacombs/hidden_trough_treasure` (chest) | 5% | 1 |
| `irons_spellbooks:chests/catacombs/wall_loot` (chest) | 3.5% | 1 |
| `irons_spellbooks:chests/additional_generic_loot` (chest) | 1% | 1 |
| `irons_spellbooks:chests/additional_good_loot` (chest) | 1% | 1 |
| `alshanex_familiars:archaeology/origin_island` (archaeology) | 0.45% | 1 |

It can also be crafted (see below).

### Crafting

{{recipes irons_spellbooks:rotten_spell_book}}

### Used in

{{uses irons_spellbooks:rotten_spell_book}}

## Villager Bible

[[item:irons_spellbooks:villager_spell_book]] (Iron's Spells 'n Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Cast Time Reduction | +10% | When equipped as Spell Book |
| Holy Spell Power | +20% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |

It has 10 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:villager_spell_book}}

### Used in

{{uses irons_spellbooks:villager_spell_book}}

## Codex Of The Crushing Depths

[[item:traveloptics:codex_of_the_crushing_depths]] (T.O Magic 'n Extras, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Cooldown Reduction | +10% | When equipped as Spell Book |
| Max Mana | +250 | When equipped as Spell Book |
| Aqua Spell Power | +20% | When equipped as Spell Book |

A unique spellbook with 12 spell slots. It comes with [[items/magic/spells/aqua-spells#Aqua Missiles|Aqua Missiles]] (level 6) inscribed and locked. While it is equipped, [[items/magic/spells/aqua-spells#Vortex Of The Deep|Vortex Of The Deep]] is cast 1 level higher.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes traveloptics:codex_of_the_crushing_depths}}

### Used in

{{uses traveloptics:codex_of_the_crushing_depths}}

## The Accused Codex

[[item:traveloptics:the_accused_codex]] (T.O Magic 'n Extras, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Cooldown Reduction | +10% | When equipped as Spell Book |
| Ice Spell Power | +24% | When equipped as Spell Book |
| Max Mana | +300 | When equipped as Spell Book |

A unique spellbook with 12 spell slots. It comes with [[items/magic/spells/ice-spells#Halberd Horizon|Halberd Horizon]] (level 6) inscribed and locked. While it is equipped, [[items/magic/spells/ice-spells#Despair|Despair]] is cast 1 level higher.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-iii/maledictus\|Maledictus]] (drop) | 29% | 1 |

It can also be crafted (see below).

### Crafting

{{recipes traveloptics:the_accused_codex}}

### Used in

{{uses traveloptics:the_accused_codex}}

## Codex Of Shattered Horizons

[[item:gtbcs_geomancy_plus:codex_of_shattered_horizons]] (GTBC's Geomancy Plus, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Geo Spell Power | +24% | When equipped as Spell Book |
| Cooldown Reduction | +10% | When equipped as Spell Book |
| Max Mana | +300 | When equipped as Spell Book |

A unique spellbook with 12 spell slots. It comes with [[items/magic/spells/geo-spells#Geo Conductor|Geo Conductor]] (level 3) inscribed and locked. While it is equipped, [[items/magic/spells/geo-spells#Pillar Of The Resounding Earth|Pillar Of The Resounding Earth]] is cast 1 level higher.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes gtbcs_geomancy_plus:codex_of_shattered_horizons}}

### Used in

{{uses gtbcs_geomancy_plus:codex_of_shattered_horizons}}

## Dragonmancer's Oathbook

[[item:ice_and_fire_spellbooks:dragonmancers_oathbook]] (Ice and Fire: Spellbooks, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Max Mana | +400 | When equipped as Spell Book |
| Spell Power | +32% | When equipped as Spell Book |

It has 12 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes ice_and_fire_spellbooks:dragonmancers_oathbook}}

## Symphonic Grimoire

[[item:alshanex_familiars:sound_spell_book]] (Alshanex Familiars Mod, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Sound Spell Power | +32% | When equipped as Spell Book |
| Max Mana | +400 | When equipped as Spell Book |

A unique spellbook with 10 spell slots.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes alshanex_familiars:sound_spell_book}}

## Divine Manuscript

[[item:dacxirons:divine_manuscript_spell_book]] (dacxirons, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Cooldown Reduction | +15% | When equipped as Spell Book |
| Holy Spell Power | +24% | When equipped as Spell Book |
| Max Mana | +300 | When equipped as Spell Book |

A unique spellbook with 12 spell slots. It comes with [[items/magic/spells/holy-spells#Sunleia Beam|Sunleia Beam]] (level 6) inscribed and locked.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes dacxirons:divine_manuscript_spell_book}}

### Used in

{{uses dacxirons:divine_manuscript_spell_book}}

## Cave Codex

[[item:alexscaves:cave_codex]] (Alex's Caves)

The Cave Codex isn't a spellbook. It is Alex's Caves' research item: translating a Cave Tablet (found in underground cabins) at a Spelunkery Table produces a Cave Codex, and using it adds that cave biome's entries to the Cave Compendium.
