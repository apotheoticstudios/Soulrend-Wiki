---
{
  "title": "Evocation Spells",
  "summary": "The Evocation spell school: 18 spells with mana costs, cooldowns and per-level values."
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

**Evocation Spells** lists the 18 spells of the Evocation school (`irons_spellbooks:evocation`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:emerald]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Evocation scrolls** drop from [[bosses/optional-and-world/archevoker|Archevoker]].
- **Random Evocation scrolls** are in Evoker fort chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Arcane Arrow]] | Instant | 3 s | 5 | 30–70 | Loot, Item, Scroll Forge |
| [[#Arrow Volley]] | Long cast | 17 s | 6 | 80–180 | Loot, Scroll Forge |
| [[#Ashen Breath]] | Continuous | 15 s | 10 | 5–23 | Loot, Boss drop, Scroll Forge |
| [[#Chain Creeper]] | Long cast | 17 s | 6 | 80–180 | Loot, Scroll Forge |
| [[#Fang Strike]] | Long cast | 7 s | 10 | 60–114 | Loot, Item, Scroll Forge |
| [[#Fang Ward]] | Long cast | 17 s | 8 | 90–160 | Loot, Item, Scroll Forge |
| [[#Firecracker]] | Instant | 2 s | 10 | 40–76 | Loot, Scroll Forge |
| [[#Gust]] | Long cast | 17 s | 10 | 60–150 | Loot, Scroll Forge |
| [[#Invisibility]] | Long cast | 50 s | 6 | 70–150 | Loot, Scroll Forge |
| [[#Lingering Strain]] | Instant | 120 s | 3 | 50–150 | Loot, Chest, Scroll Forge |
| [[#Lob Creeper]] | Instant | 3 s | 10 | 40–76 | Loot, Scroll Forge |
| [[#Shield]] | Instant | 8 s | 10 | 70–160 | Loot, Scroll Forge |
| [[#Slow]] | Long cast | 80 s | 4 | 100–160 | Loot, Scroll Forge |
| [[#Spectral Hammer]] | Instant | 6 s | 5 | 37–87 | Loot, Scroll Forge |
| [[#Summon Horse]] | Long cast | 60 s | 5 | 100–116 | Loot, Scroll Forge |
| [[#Summon Vex]] | Long cast | 160 s | 5 | 100–180 | Loot, Item, Scroll Forge |
| [[#Throw]] | Long cast | 8 s | 5 | 10–30 | Loot, Scroll Forge |
| [[#Wololo]] | Long cast | 12 s | 1 | 20 | Loot, Scroll Forge |

## Arcane Arrow

`dacxirons:arcane_arrow` · Instant · cooldown 3 s

> The classic magical arrow

**Obtained from:** Random scroll loot; imbued in [[item:dacxirons:scepter_of_compensation_staff]] (level 1) and [[item:dacxirons:scepter_of_over_compensation]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 30 | 5 |
| 2 | Uncommon | 40 | 5 |
| 3 | Rare | 50 | 5 |
| 4 | Rare | 60 | 5 |
| 5 | Legendary | 70 | 5 |

## Arrow Volley

`irons_spellbooks:arrow_volley` · Long cast · cooldown 17 s

> Around a targeted creature or block, summon a rolling wave of magical arrows from the sky.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Projectiles |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 1.5 s | 1.2 | 25 |
| 2 | Uncommon | 100 | 1.5 s | 1.2 | 36 |
| 3 | Uncommon | 120 | 1.5 s | 1.2 | 42 |
| 4 | Rare | 140 | 1.5 s | 1.2 | 56 |
| 5 | Rare | 160 | 1.5 s | 1.2 | 63 |
| 6 | Legendary | 180 | 1.5 s | 1.2 | 80 |

## Ashen Breath

`traveloptics:ashen_breath` · Continuous · cooldown 15 s

> Exhale a cloud of darkening ash, damaging and blinding creatures in its reach.

**Obtained from:** Random scroll loot; dropped by [[enemies/act-iii/ignited-berserker|Ignited Berserker]] and [[bosses/optional-and-world/cataclysm-minibosses|Ignited Revenant]]; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 5 | 5 s | 1 |
| 2 | Common | 7 | 5 s | 2 |
| 3 | Common | 9 | 5 s | 3 |
| 4 | Common | 11 | 5 s | 4 |
| 5 | Common | 13 | 5 s | 5 |
| 6 | Common | 15 | 5 s | 6 |
| 7 | Common | 17 | 5 s | 7 |
| 8 | Uncommon | 19 | 5 s | 8 |
| 9 | Rare | 21 | 5 s | 9 |
| 10 | Legendary | 23 | 5 s | 10 |

## Chain Creeper

`irons_spellbooks:chain_creeper` · Long cast · cooldown 17 s

> Around a targeted creature or block, conjure a ring of creeper heads that falls to the ground and explodes. Any creature killed by this blast will conjure another, smaller, ring of creeper heads. This can chain multiple times.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Projectiles |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 1.5 s | 2.8 | 3 |
| 2 | Uncommon | 100 | 1.5 s | 2.8 | 4 |
| 3 | Uncommon | 120 | 1.5 s | 2.8 | 5 |
| 4 | Rare | 140 | 1.5 s | 2.8 | 6 |
| 5 | Rare | 160 | 1.5 s | 2.8 | 7 |
| 6 | Legendary | 180 | 1.5 s | 2.8 | 8 |

## Fang Strike

`irons_spellbooks:fang_strike` · Long cast · cooldown 7 s

> Conjure a line of evoker fangs in front of you, in classic illager fashion.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:evoker_spell_book]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Fangs | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 60 | 0.75 s | 8 | 3.89 |
| 2 | Common | 66 | 0.75 s | 9 | 4.54 |
| 3 | Common | 72 | 0.75 s | 10 | 5.19 |
| 4 | Common | 78 | 0.75 s | 11 | 5.84 |
| 5 | Common | 84 | 0.75 s | 12 | 6.5 |
| 6 | Common | 90 | 0.75 s | 13 | 7.14 |
| 7 | Common | 96 | 0.75 s | 14 | 7.79 |
| 8 | Uncommon | 102 | 0.75 s | 15 | 8.44 |
| 9 | Rare | 108 | 0.75 s | 16 | 9.09 |
| 10 | Legendary | 114 | 0.75 s | 17 | 9.75 |

## Fang Ward

`irons_spellbooks:fang_ward` · Long cast · cooldown 17 s

> Conjure protective rings of evoker fangs around you, in classic illager fashion.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:evoker_spell_book]] (level 4); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Rings | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 90 | 0.75 s | 2 | 5.19 |
| 2 | Common | 100 | 0.75 s | 2 | 5.84 |
| 3 | Common | 110 | 0.75 s | 2 | 6.5 |
| 4 | Common | 120 | 0.75 s | 3 | 7.14 |
| 5 | Common | 130 | 0.75 s | 3 | 7.79 |
| 6 | Uncommon | 140 | 0.75 s | 3 | 8.44 |
| 7 | Uncommon | 150 | 0.75 s | 4 | 9.09 |
| 8 | Legendary | 160 | 0.75 s | 4 | 9.75 |

## Firecracker

`irons_spellbooks:firecracker` · Instant · cooldown 2 s

> Instantaneously conjure a firework where you look that explodes in a small radius around it.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 40 | 2.3 |
| 2 | Common | 44 | 2.8 |
| 3 | Common | 48 | 3.4 |
| 4 | Common | 52 | 4 |
| 5 | Common | 56 | 4.6 |
| 6 | Common | 60 | 5.2 |
| 7 | Common | 64 | 5.7 |
| 8 | Uncommon | 68 | 6.3 |
| 9 | Rare | 72 | 6.9 |
| 10 | Legendary | 76 | 7.5 |

## Gust

`irons_spellbooks:gust` · Long cast · cooldown 17 s

> Conjure a strong gust of wind, knocking back creatures in a conical shape, causing damage if they impact a wall

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Strength | Impact Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 60 | 0.75 s | 100% | 4.5 |
| 2 | Uncommon | 70 | 0.75 s | 109% | 5 |
| 3 | Uncommon | 80 | 0.75 s | 120% | 5.5 |
| 4 | Uncommon | 90 | 0.75 s | 130% | 6 |
| 5 | Uncommon | 100 | 0.75 s | 140% | 6.5 |
| 6 | Rare | 110 | 0.75 s | 150% | 7 |
| 7 | Rare | 120 | 0.75 s | 160% | 7.5 |
| 8 | Rare | 130 | 0.75 s | 170% | 8 |
| 9 | Epic | 140 | 0.75 s | 180% | 8.5 |
| 10 | Legendary | 150 | 0.75 s | 190% | 9 |

## Invisibility

`irons_spellbooks:invisibility` · Long cast · cooldown 50 s

> Cast to briefly grant yourself true invisibility, which hides armor and held items, but immediately wears off upon dealing damage. Mobs also lose aggro.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Rare | 70 | 2 s | 5s |
| 2 | Rare | 86 | 2 s | 7.5s |
| 3 | Rare | 102 | 2 s | 10s |
| 4 | Rare | 118 | 2 s | 12.5s |
| 5 | Epic | 134 | 2 s | 15s |
| 6 | Legendary | 150 | 2 s | 17.5s |

## Lingering Strain

`traveloptics:lingering_strain` · Instant · cooldown 120 s

> Grants a effect; During that any burst damage you get will be split into 4 different smaller damage and will be dealt over time giving the caster time to recover.

**Obtained from:** Random scroll loot; found in Forlorn ruins chests; the Scroll Forge.

| Level | Rarity | Mana | Effect Duration |
| --- | --- | --- | --- |
| 1 | Epic | 50 | 16s |
| 2 | Epic | 100 | 20.5s |
| 3 | Legendary | 150 | 25s |

## Lob Creeper

`irons_spellbooks:lob_creeper` · Instant · cooldown 3 s

> Lob the head of a creeper forward that explodes in a medium radius around the impact. The higher the level, the faster the projectile.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 40 | 4.5 |
| 2 | Uncommon | 44 | 4.87 |
| 3 | Uncommon | 48 | 5.25 |
| 4 | Uncommon | 52 | 5.62 |
| 5 | Uncommon | 56 | 6 |
| 6 | Rare | 60 | 6.37 |
| 7 | Rare | 64 | 6.75 |
| 8 | Rare | 68 | 7.12 |
| 9 | Epic | 72 | 7.5 |
| 10 | Legendary | 76 | 7.87 |

## Shield

`irons_spellbooks:shield` · Instant · cooldown 8 s

> Conjure a stationary shield of arcane energy where you look that will block projectiles and prevent creatures from passing.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | HP |
| --- | --- | --- | --- |
| 1 | Common | 70 | 12.8 |
| 2 | Common | 80 | 18.7 |
| 3 | Common | 90 | 24.5 |
| 4 | Common | 100 | 30.2 |
| 5 | Common | 110 | 36 |
| 6 | Common | 120 | 41.9 |
| 7 | Common | 130 | 47.7 |
| 8 | Uncommon | 140 | 53.5 |
| 9 | Rare | 150 | 59.2 |
| 10 | Legendary | 160 | 65 |

## Slow

`irons_spellbooks:slow` · Long cast · cooldown 80 s

> In a radius around a targeted creature, apply the Slowed effect to enemies, decreasing movement speed, attack speed, mining speed, mana regeneration, and cast time for a duration.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Slowed | Effect Length | Max Targets |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 100 | 1.5 s | 10% | 11.5s | 5 |
| 2 | Epic | 120 | 1.5 s | 20% | 13.8s | 5 |
| 3 | Legendary | 140 | 1.5 s | 30% | 16.2s | 5 |
| 4 | Legendary | 160 | 1.5 s | 40% | 18.5s | 5 |

## Spectral Hammer

`irons_spellbooks:spectral_hammer` · Instant · cooldown 6 s

> Conjure a spectral hammer out from where you look that will mine all connected stone-type blocks in a cube where it hits, leaving only ores and rubble behind.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Dimensions | Block Range |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 37 | 3x3x1 | 16 |
| 2 | Uncommon | 50 | 3x3x1 | 16 |
| 3 | Rare | 62 | 3x3x1 | 16 |
| 4 | Rare | 75 | 3x3x1 | 16 |
| 5 | Legendary | 87 | 3x3x1 | 16 |

## Summon Horse

`irons_spellbooks:summon_horse` · Long cast · cooldown 60 s

> Conjure a spectral steed that will follow you around and only let you ride. The horse's speed, health, and jump height scales with spell power.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Common | 100 | 1 s |
| 2 | Common | 104 | 1 s |
| 3 | Common | 108 | 1 s |
| 4 | Uncommon | 112 | 1 s |
| 5 | Legendary | 116 | 1 s |

## Summon Vex

`irons_spellbooks:summon_vex` · Long cast · cooldown 160 s

> Cast to conjure vexes that will follow, protect, and fight for you.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:evoker_spell_book]] (level 4); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons |
| --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 1 s | 3 |
| 2 | Rare | 120 | 1 s | 4 |
| 3 | Rare | 140 | 1 s | 5 |
| 4 | Epic | 160 | 1 s | 6 |
| 5 | Legendary | 180 | 1 s | 7 |

## Throw

`irons_spellbooks:throw` · Long cast · cooldown 8 s

> Cast to throw your held item, dealing a base damage plus damage normally inflicted by the item.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 10 | 0.25 s | 1 |
| 2 | Common | 15 | 0.25 s | 2 |
| 3 | Common | 20 | 0.25 s | 3 |
| 4 | Uncommon | 25 | 0.25 s | 4 |
| 5 | Legendary | 30 | 0.25 s | 5 |

## Wololo

`irons_spellbooks:wololo` · Long cast · cooldown 12 s

> Wololo!

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Legendary | 20 | 1.5 s |
