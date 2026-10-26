---
{
  "title": "Geo Spells",
  "summary": "The Geo spell school: 16 spells with mana costs, cooldowns and per-level values."
}
---
<!-- sources:
  researched 2026-10-25; generated from game-data and the instance
  game-data/spells.json (school, cast type, cooldown, per-level rarity, mana cost, cast time and info lines; "lootable")
  game-data/loot-tables.json (irons_spellbooks:randomize_spell entries naming a spell or filtering by school)
  game-data/items.json (spells inscribed in spellbooks and imbued in weapons), game-data/tags.json (school focus tags)
  spell classes in the irons_spellbooks, traveloptics, dacxirons, alshanex_familiars and gtbcs_geomancy_plus jars (allowCrafting, allowLooting; Traveloptics AbstractUniqueSpell and AbstractWeaponSpell; Eldritch school needs learning)
  config/irons_spellbooks_spell_config/ (Soulrend's per-spell overrides, including disabled spells)
  config/paxi/datapacks/spell_fixes (Heartstop damage type tags); kubejs/startup_scripts/magic/spells.js (Cannibalism)
  calc: cooldown and cast time converted from ticks (20 ticks = 1 s)
-->

**Geo Spells** lists the 16 spells of the Geo school (`gtbcs_geomancy_plus:geo`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:mowziesmobs:bluff_rod]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Geo scrolls** drop from Geo Grandmaster and Geomancer.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Chunker]] | Long cast | 22 s | 6 | 140–640 | Loot, Scroll Forge |
| [[#Crystalline Conduit]] | Instant | 60 s | 4 | 30–120 | Loot, Scroll Forge |
| [[#Dripstone Bolt]] | Instant | 2 s | 10 | 17–47 | Loot, Scroll Forge |
| [[#Earthquake]] | Long cast | 16 s | 10 | 100–280 | Loot, Scroll Forge |
| [[#Eroding Boulder]] | Long cast | 30 s | 5 | 100–228 | Loot, Scroll Forge |
| [[#Fissure]] | Instant | 17 s | 8 | 30–240 | Loot, Scroll Forge |
| [[#Geo Conductor]] | Instant | 75 s | 3 | 120–360 | Loot, Item, Scroll Forge |
| [[#Petrivise]] | Instant | 30 s | 3 | 120–360 | Loot, Scroll Forge |
| [[#Pillar Of The Resounding Earth]] | Long cast | 75 s | 6 | 140–440 | Loot, Scroll Forge |
| [[#Seismic Surf]] | Long cast | 90 s | 3 | 80–240 | Loot, Scroll Forge |
| [[#Stomp]] | Long cast | 16 s | 5 | 100–180 | Loot, Scroll Forge |
| [[#Touch Dig]] | Instant | 0.5 s | 3 | 15 | Loot, Scroll Forge |
| [[#Tremor Spike]] | Long cast | 30 s | 5 | 100–340 | Loot, Scroll Forge |
| [[#Tremor Step]] | Instant | 75 s | 3 | 80–160 | Loot, Scroll Forge |
| [[#Weeping Cluster]] | Instant | 25 s | 4 | 40–160 | Loot, Scroll Forge |
| [[#Weeping Wall]] | Instant | 45 s | 5 | 20–100 | Loot, Scroll Forge |

## Chunker

`gtbcs_geomancy_plus:chunker` · Long cast · cooldown 22 s

> Summons a large rolling dirt block that moves forward, damaging and knocking back enemies in its path.

**Obtained from:** Random scroll loot; the Scroll Forge.

- On Resonance: Pulls nearby entities

| Level | Rarity | Mana | Cast time | Damage | Duration | On Resonance: Resonate Multiplier |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 140 | 1.5 s | 3.02 | 6.5s | 0.8x |
| 2 | Uncommon | 240 | 1.5 s | 5.05 | 7.5s | 0.8x |
| 3 | Uncommon | 340 | 1.5 s | 7.09 | 8.5s | 0.8x |
| 4 | Rare | 440 | 1.5 s | 9.11 | 9.5s | 0.8x |
| 5 | Rare | 540 | 1.5 s | 11.14 | 10.5s | 0.8x |
| 6 | Legendary | 640 | 1.5 s | 13.18 | 11.5s | 0.8x |

## Crystalline Conduit

`gtbcs_geomancy_plus:crystalline_conduit` · Instant · cooldown 60 s

> Creates a large amethyst cluster that pulses with geo energy, granting Geo Spell Power to the caster while inside its radius. When it resonates with Pillar of the Resounding Earth, it restores mana to the caster.

**Obtained from:** Random scroll loot; the Scroll Forge.

- On Resonance: Regenerate 2% of Max Mana

| Level | Rarity | Mana | Geo Spell Power | Duration | Shockwave Radius | On Resonance: Resonate Multiplier |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 30 | 10% | 12.5s | 4 | 0.25x |
| 2 | Rare | 60 | 20% | 17.5s | 6 | 0.25x |
| 3 | Epic | 90 | 25% | 22.5s | 8 | 0.25x |
| 4 | Legendary | 120 | 35% | 27.5s | 10 | 0.25x |

## Dripstone Bolt

`gtbcs_geomancy_plus:dripstone_bolt` · Instant · cooldown 2 s

> Fires a shard of dripstone that shatters on impact, damaging the target and 50% of its damage in a small area.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 17 | 4.19 |
| 2 | Common | 20 | 4.54 |
| 3 | Common | 23 | 4.9 |
| 4 | Common | 27 | 5.25 |
| 5 | Common | 30 | 5.59 |
| 6 | Common | 34 | 5.94 |
| 7 | Common | 37 | 6.29 |
| 8 | Uncommon | 40 | 6.65 |
| 9 | Rare | 44 | 7 |
| 10 | Legendary | 47 | 7.34 |

## Earthquake

`irons_spellbooks:earthquake` · Long cast · cooldown 16 s

> Conjure an earthquake around a targeted creature or location, causing tremors to ripple through the ground, damaging and slowing creatures in the area.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AOE Damage | Slowness | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 2 s | 1.15 | 1 | 6.3 |
| 2 | Uncommon | 120 | 2 s | 1.3 | 1 | 6.3 |
| 3 | Uncommon | 140 | 2 s | 1.44 | 1 | 6.3 |
| 4 | Uncommon | 160 | 2 s | 1.59 | 1 | 6.3 |
| 5 | Uncommon | 180 | 2 s | 1.74 | 1 | 6.3 |
| 6 | Rare | 200 | 2 s | 1.88 | 1 | 6.3 |
| 7 | Rare | 220 | 2 s | 2.02 | 1 | 6.3 |
| 8 | Rare | 240 | 2 s | 2.17 | 1 | 6.3 |
| 9 | Epic | 260 | 2 s | 2.31 | 1 | 6.3 |
| 10 | Legendary | 280 | 2 s | 2.46 | 1 | 6.3 |

## Eroding Boulder

`gtbcs_geomancy_plus:eroding_boulder` · Long cast · cooldown 30 s

> Shoots out a small boulder that explodes on contact, dealing damage to nearby enemies and applying the Erode effect.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AoE Damage | AoE Radius | Erode Amplifier |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 2 s | 8.6 | 2 | 1 |
| 2 | Uncommon | 132 | 2 s | 11.21 | 3 | 2 |
| 3 | Rare | 164 | 2 s | 13.82 | 3 | 2 |
| 4 | Rare | 196 | 2 s | 16.43 | 4 | 3 |
| 5 | Legendary | 228 | 2 s | 19.04 | 4 | 3 |

## Fissure

`gtbcs_geomancy_plus:fissure` · Instant · cooldown 17 s

> Creates a fissure that travels forward, and erupts in a small spike that deals damage.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 30 | 5.44 |
| 2 | Uncommon | 60 | 6.89 |
| 3 | Uncommon | 90 | 8.35 |
| 4 | Uncommon | 120 | 9.79 |
| 5 | Rare | 150 | 11.25 |
| 6 | Rare | 180 | 12.69 |
| 7 | Rare | 210 | 14.14 |
| 8 | Legendary | 240 | 15.59 |

## Geo Conductor

`gtbcs_geomancy_plus:geo_conductor` · Instant · cooldown 75 s

> Summons a small geo pillar that resonates with nearby allies, releasing periodic waves energy. Standing near it grants stacking bonuses to Armor and Spell Resistance to every element. Can serve as the main resonance conductor for Pillar of the Resounding Earth.

**Obtained from:** Random scroll loot; inscribed in [[item:gtbcs_geomancy_plus:codex_of_shattered_horizons]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Duration | Block Radius | Armor Gain | Spell Resist Gain | On Resonance: Resonate Multiplier |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 120 | 20s | 3 | +5% | +2.5% | 1.15x |
| 2 | Rare | 240 | 30s | 3.5 | +7.5% | +3.75% | 1.15x |
| 3 | Legendary | 360 | 40s | 4 | +10% | +5% | 1.15x |

## Petrivise

`gtbcs_geomancy_plus:petrivise` · Instant · cooldown 30 s

> Raises two massive stone walls on opposite sides that slam together, crushing enemies caught between them. The impact funnels targets toward the center, lining them up for follow-up attacks.

**Obtained from:** Random scroll loot; the Scroll Forge.

- On Resonance: Pulls nearby entities

| Level | Rarity | Mana | Damage | Pillars | On Resonance: Resonate Multiplier |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 120 | 17.89 | 20 | 1.0x |
| 2 | Rare | 240 | 20.79 | 20 | 1.0x |
| 3 | Legendary | 360 | 23.7 | 20 | 1.0x |

## Pillar Of The Resounding Earth

`gtbcs_geomancy_plus:pillar_of_the_resounding_earth` · Long cast · cooldown 75 s

> Summons a large geo pillar that sends out powerful shockwaves, damaging enemies while shredding their Armor and Spell Resistance to every element. The shockwaves resonate with nearby geo entities. Certain geo entities may trigger additional special effects when struck by a resonance shockwave.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Duration | Block Radius | Armor Shred | Spell Resist Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 140 | 1 s | 1.74 | 20s | 5 | -5% | -2.5% |
| 2 | Rare | 200 | 1 s | 3.48 | 30s | 6 | -10% | -5% |
| 3 | Rare | 260 | 1 s | 5.22 | 40s | 7 | -15% | -7.5% |
| 4 | Rare | 320 | 1 s | 6.96 | 50s | 8 | -20% | -10% |
| 5 | Epic | 380 | 1 s | 8.69 | 60s | 9 | -25% | -12.5% |
| 6 | Legendary | 440 | 1 s | 10.44 | 1.16m | 10 | -30% | -15% |

## Seismic Surf

`gtbcs_geomancy_plus:seismic_surf` · Long cast · cooldown 90 s

> Summons a large rideable boulder that rises into the air and moves forward on its own in the direction you're looking. Near the end of its duration, it'll safely drop the rider down. Rider can trigger this drop early by casting Counterspell on it.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Forward Velocity | Duration |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 80 | 1.5 s | 0.49 | 52.5s |
| 2 | Common | 160 | 1.5 s | 0.63 | 1.2m |
| 3 | Legendary | 240 | 1.5 s | 0.78 | 1.6m |

## Stomp

`irons_spellbooks:stomp` · Long cast · cooldown 16 s

> With a magic force, stomp the ground in front of you and send a short tremor forward through the ground, damaging creatures in its path.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 0.5 s | 4.63 | 4 |
| 2 | Uncommon | 120 | 0.5 s | 5.79 | 5 |
| 3 | Rare | 140 | 0.5 s | 6.96 | 5 |
| 4 | Rare | 160 | 0.5 s | 8.11 | 6 |
| 5 | Legendary | 180 | 0.5 s | 9.27 | 6 |

## Touch Dig

`irons_spellbooks:touch_dig` · Instant · cooldown 0.5 s

> Use magic to break a block. Held items affect drops.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Harvest Level | Block Range |
| --- | --- | --- | --- | --- |
| 1 | Rare | 15 | Iron | 8 |
| 2 | Rare | 15 | Diamond | 8 |
| 3 | Legendary | 15 | Netherite | 8 |

## Tremor Spike

`gtbcs_geomancy_plus:tremor_spike` · Long cast · cooldown 30 s

> Erupts multiple spikes in expanding rings around the caster, dealing damage and knocking up nearby entities.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Rings | Recast Count |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 100 | 0.8 s | 3.94 | 2 | 1 |
| 2 | Common | 160 | 0.8 s | 5.39 | 3 | 2 |
| 3 | Common | 220 | 0.8 s | 6.84 | 3 | 2 |
| 4 | Uncommon | 280 | 0.8 s | 8.29 | 4 | 3 |
| 5 | Legendary | 340 | 0.8 s | 9.75 | 4 | 3 |

## Tremor Step

`gtbcs_geomancy_plus:tremor_step` · Instant · cooldown 75 s

> Applies an effect that deals damage to nearby enemies while sprinting and grants increased movement speed to the caster.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | AoE Damage | Speed Bonus | Effect Duration |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 80 | 2 | 5.0% | 20s |
| 2 | Common | 120 | 3 | 7.5% | 30s |
| 3 | Legendary | 160 | 4 | 10.0% | 40s |

## Weeping Cluster

`gtbcs_geomancy_plus:weeping_cluster` · Instant · cooldown 25 s

> Creates a unique crying obsidian cluster that stores damage dealt to entities in its radius each 1s. If the stored damage exceeds the cluster’s capacity, or when the cluster expires, it detonates and deals the stored damage in the area.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Max Damage Possible | Duration | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 40 | 20 | 15s | 6.5 |
| 2 | Rare | 80 | 30 | 15s | 9 |
| 3 | Epic | 120 | 40 | 15s | 11.5 |
| 4 | Legendary | 160 | 50 | 15s | 14 |

## Weeping Wall

`gtbcs_geomancy_plus:weeping_wall` · Instant · cooldown 45 s

> Creates a wall of obsidian by carefully placing multiple pillars, that blocks incoming damage and acts as a shield. When the wall expires or is destroyed, it releases the stored damage in an area around it.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Per Pillar Health | Wall Width | Duration | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 20 | 10 | 6 | 15s | 15 |
| 2 | Common | 40 | 15 | 8 | 20s | 15 |
| 3 | Common | 60 | 20 | 10 | 25s | 15 |
| 4 | Uncommon | 80 | 25 | 12 | 30s | 15 |
| 5 | Legendary | 100 | 30 | 14 | 35s | 15 |
