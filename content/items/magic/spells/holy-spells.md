---
{
  "title": "Holy Spells",
  "summary": "The Holy spell school: 21 spells with mana costs, cooldowns and per-level values."
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

**Holy Spells** lists the 21 spells of the Holy school (`irons_spellbooks:holy`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:irons_spellbooks:divine_pearl]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Holy scrolls** drop from Priest.
- **Random Holy scrolls** are in Priest house chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Angel Wings]] | Instant | 180 s | 5 | 160–320 | Loot, Scroll Forge |
| [[#Blessing of Life]] | Long cast | 12 s | 10 | 20–110 | Loot, Scroll Forge |
| [[#Cleanse]] | Long cast | 60 s | 1 | 200 | Loot, Scroll Forge |
| [[#Cloud of Regeneration]] | Continuous | 35 s | 5 | 20–44 | Disabled |
| [[#Desert Dwellers]] | Long cast | 420 s | 5 | 100–400 | Boss drop |
| [[#Divine Smite]] | Long cast | 17 s | 5 | 60–180 | Loot, Scroll Forge |
| [[#Fortify]] | Long cast | 35 s | 10 | 160–340 | Loot, Scroll Forge |
| [[#Greater Heal]] | Long cast | 50 s | 1 | 200 | Loot, Scroll Forge |
| [[#Guiding Bolt]] | Instant | 8 s | 10 | 36–117 | Loot, Scroll Forge |
| [[#Haste]] | Long cast | 80 s | 4 | 100–160 | Loot, Scroll Forge |
| [[#Heal]] | Instant | 30 s | 8 | 60–270 | Loot, Scroll Forge |
| [[#Healing Circle]] | Long cast | 30 s | 10 | 80–260 | Loot, Scroll Forge |
| [[#Nullflare]] | Long cast | 40 s | 5 | 40–160 | Loot, Boss drop, Scroll Forge |
| [[#Solar Beam]] | Instant | 17 s | 3 | 100 | Boss drop, Scroll Forge |
| [[#Solar Chorus]] | Long cast | 120 s | 3 | 40–100 | Boss drop, Scroll Forge |
| [[#Solar Storm]] | Long cast | 90 s | 8 | 80–360 | Boss drop, Scroll Forge |
| [[#Sun's Wrath]] | Long cast | 25 s | 10 | 40–130 | Loot, Scroll Forge |
| [[#Sunbeam]] | Instant | 25 s | 10 | 80–260 | Loot, Scroll Forge |
| [[#Sunleia Beam]] | Instant | 10 s | 6 | 200–300 | Loot, Item, Scroll Forge |
| [[#Sword Of The Ancients']] | Long cast | 330 s | 3 | 100–300 | Boss drop |
| [[#Wisp]] | Long cast | 4 s | 10 | 27–59 | Loot, Scroll Forge |

## Angel Wings

`irons_spellbooks:angel_wing` · Instant · cooldown 180 s

> Cast to gain wings made of holy energy, acting as an elytra, for a brief period of time.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Effect Length |
| --- | --- | --- | --- |
| 1 | Epic | 160 | 5s |
| 2 | Epic | 200 | 10s |
| 3 | Epic | 240 | 15s |
| 4 | Legendary | 280 | 20s |
| 5 | Legendary | 320 | 25s |

## Blessing of Life

`irons_spellbooks:blessing_of_life` · Long cast · cooldown 12 s

> Cast to target any creature, showing a glowing outline. Completing the cast will heal this creature.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Healing |
| --- | --- | --- | --- | --- |
| 1 | Common | 20 | 1.5 s | 3.4 |
| 2 | Common | 30 | 1.5 s | 4 |
| 3 | Common | 40 | 1.5 s | 4.6 |
| 4 | Common | 50 | 1.5 s | 5.2 |
| 5 | Common | 60 | 1.5 s | 5.7 |
| 6 | Common | 70 | 1.5 s | 6.3 |
| 7 | Common | 80 | 1.5 s | 6.9 |
| 8 | Uncommon | 90 | 1.5 s | 7.5 |
| 9 | Rare | 100 | 1.5 s | 8.1 |
| 10 | Legendary | 110 | 1.5 s | 8.6 |

## Cleanse

`irons_spellbooks:cleanse` · Long cast · cooldown 60 s

> Pray to a divine magic to cleanse yourself and nearby allies of harmful status effects.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius |
| --- | --- | --- | --- | --- |
| 1 | Epic | 200 | 3 s | 3 |

## Cloud of Regeneration

`irons_spellbooks:cloud_of_regeneration` · Continuous · cooldown 35 s · disabled

> Hold to slowly heal friendly creatures within a radius around you.

**Obtained from:** Disabled in Soulrend's spell config, so it can't be obtained or cast.

| Level | Rarity | Mana | Duration | Healing | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 20 | 10 s | 0.6 | 5 |
| 2 | Common | 26 | 10 s | 1 | 5 |
| 3 | Common | 32 | 10 s | 1.3 | 5 |
| 4 | Uncommon | 38 | 10 s | 1.7 | 5 |
| 5 | Legendary | 44 | 10 s | 2 | 5 |

## Desert Dwellers

`traveloptics:summon_desert_dwellers` · Long cast · cooldown 420 s

> Summon Koboletons and Wadjet to fight by your side. Can only be obtained by defeating Koboletons and Wadjet.

**Obtained from:** Dropped by Koboleton and [[bosses/optional-and-world/cataclysm-minibosses|Wadjet]].

| Level | Rarity | Mana | Cast time | Summons | Koboleton HP | Koboleton Damage | Wadjet HP | Wadjet Damage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 3 s | Koboleton, Wadjet [2] | 5.0 | 0.6 | 70.0 | 4 |
| 2 | Rare | 175 | 3 s | Koboleton, Wadjet [3] | 10.0 | 1.2 | 90.0 | 6 |
| 3 | Rare | 250 | 3 s | Koboleton, Wadjet [4] | 15.0 | 1.8 | 110.0 | 8 |
| 4 | Epic | 325 | 3 s | Koboleton, Wadjet [5] | 20.0 | 2.4 | 130.0 | 10 |
| 5 | Legendary | 400 | 3 s | Koboleton, Wadjet [6] | 25.0 | 3 | 150.0 | 12 |

## Divine Smite

`irons_spellbooks:divine_smite` · Long cast · cooldown 17 s

> With a fervor of holy energy, swing forth your weapon, doing a melee area attack. This spell is uninterruptible. The damage scales off of your held weapon's melee damage and enchantments.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 60 | 0.8 s | 5.1 |
| 2 | Common | 90 | 0.8 s | 7.1 |
| 3 | Common | 120 | 0.8 s | 9 |
| 4 | Uncommon | 150 | 0.8 s | 11 |
| 5 | Legendary | 180 | 0.8 s | 13 |

## Fortify

`irons_spellbooks:fortify` · Long cast · cooldown 35 s

> Upon casting, fortify every friendly creature within a radius around you, giving them temporary HP.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Temporary HP | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 160 | 3 s | 3 | 8 |
| 2 | Common | 180 | 3 s | 4 | 8 |
| 3 | Common | 200 | 3 s | 4 | 8 |
| 4 | Common | 220 | 3 s | 5 | 8 |
| 5 | Common | 240 | 3 s | 5 | 8 |
| 6 | Common | 260 | 3 s | 6 | 8 |
| 7 | Common | 280 | 3 s | 6 | 8 |
| 8 | Uncommon | 300 | 3 s | 7 | 8 |
| 9 | Rare | 320 | 3 s | 8 | 8 |
| 10 | Legendary | 340 | 3 s | 8 | 8 |

## Greater Heal

`irons_spellbooks:greater_heal` · Long cast · cooldown 50 s

> A more powerful but much slower version of heal, this spell will completely heal yourself upon being casted.

**Obtained from:** Random scroll loot; the Scroll Forge.

- Max Healing

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Rare | 200 | 6 s |

## Guiding Bolt

`irons_spellbooks:guiding_bolt` · Instant · cooldown 8 s

> Fire a slow bolt of holy energy. Creatures hit will gain the Guided effect, homing nearby projectiles in towards them

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Common | 36 | 1.74 | 25s |
| 2 | Common | 45 | 2.02 | 25s |
| 3 | Common | 54 | 2.31 | 25s |
| 4 | Common | 63 | 2.6 | 25s |
| 5 | Common | 72 | 2.89 | 25s |
| 6 | Common | 81 | 3.18 | 25s |
| 7 | Common | 90 | 3.48 | 25s |
| 8 | Uncommon | 99 | 3.76 | 25s |
| 9 | Rare | 108 | 4.05 | 25s |
| 10 | Legendary | 117 | 4.34 | 25s |

## Haste

`irons_spellbooks:haste` · Long cast · cooldown 80 s

> In a radius around a targeted creature, or yourself if no creature is targeted, apply the Hastened effect, increasing movement speed, attack speed, mining speed, mana regeneration, and cast time reduction for a duration.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Hastened | Effect Length | Max Targets |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 100 | 1.5 s | 10% | 13.5s | 5 |
| 2 | Epic | 120 | 1.5 s | 20% | 15.7s | 5 |
| 3 | Legendary | 140 | 1.5 s | 30% | 18s | 5 |
| 4 | Legendary | 160 | 1.5 s | 40% | 20.2s | 5 |

## Heal

`irons_spellbooks:heal` · Instant · cooldown 30 s

> Cast to infuse yourself with holy energy and immediately regain health.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Healing |
| --- | --- | --- | --- |
| 1 | Uncommon | 60 | 3 |
| 2 | Uncommon | 90 | 3.6 |
| 3 | Uncommon | 120 | 4.2 |
| 4 | Uncommon | 150 | 4.8 |
| 5 | Rare | 180 | 5.4 |
| 6 | Rare | 210 | 6 |
| 7 | Rare | 240 | 6.6 |
| 8 | Legendary | 270 | 7.2 |

## Healing Circle

`irons_spellbooks:healing_circle` · Long cast · cooldown 30 s

> Around a targeted creature or block, place a stationary circle of holy magic that heals allies within

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AOE Healing | Block Radius | Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 80 | 1 s | 0.34 | 5 | 10s |
| 2 | Common | 100 | 1 s | 0.52 | 5 | 10s |
| 3 | Common | 120 | 1 s | 0.69 | 5 | 10s |
| 4 | Common | 140 | 1 s | 0.87 | 5 | 10s |
| 5 | Common | 160 | 1 s | 1.04 | 5 | 10s |
| 6 | Common | 180 | 1 s | 1.22 | 5 | 10s |
| 7 | Common | 200 | 1 s | 1.39 | 5 | 10s |
| 8 | Uncommon | 220 | 1 s | 1.57 | 5 | 10s |
| 9 | Rare | 240 | 1 s | 1.75 | 5 | 10s |
| 10 | Legendary | 260 | 1 s | 1.92 | 5 | 10s |

## Nullflare

`traveloptics:nullflare` · Long cast · cooldown 40 s

> Cast to inflict Nullflare Ice on enemies, or Crouch Cast to inflict Nullflare Fire; when Ice meets Fire, or vice versa, it triggers a Nullflare Blast, dealing damage. Additional effect stacks increase the Blast damage.

**Obtained from:** Random scroll loot; dropped by Deepling Priest; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Nullflare Blast: Fire Blast Damage | Nullflare Blast: Ice Blast Damage | Nullflare Blast: Block Radius | Nullflare Blast: Damage/stack |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 40 | 0.8 s | 15 | 15 | 4 | 75% |
| 2 | Common | 70 | 0.8 s | 20 | 20 | 6 | 75% |
| 3 | Common | 100 | 0.8 s | 25 | 25 | 8 | 75% |
| 4 | Uncommon | 130 | 0.8 s | 30 | 30 | 10 | 75% |
| 5 | Legendary | 160 | 0.8 s | 35 | 35 | 12 | 75% |

## Solar Beam

`gtbcs_geomancy_plus:solar_beam` · Instant · cooldown 17 s

> Unleashes a continuous beam of solar energy in a straight line, damaging all entities caught within. Can only be obtained by defeating Umvuthi, The Sunbird.

**Obtained from:** Dropped by [[bosses/act-ii/umvuthi|Umvuthi, the Sunbird]]; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Rare | 100 | 3.44 |
| 2 | Rare | 100 | 5.03 |
| 3 | Legendary | 100 | 6.62 |

## Solar Chorus

`gtbcs_geomancy_plus:solar_chorus` · Long cast · cooldown 120 s

> Summons Umvuthana Raptors to fight for you. Each Umvuthana Raptor spawns with 2 Umvuthana Cranes. Can only be obtained from Umvuthana Raptor.

**Obtained from:** Dropped by Umvuthana Raptor; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Chance to Summon | Raptor HP | Crane HP | Damage |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 40 | 2.25 s | Umvuthana Crane, Umvuthana Raptor [3] | 12.0 | 6.0 | 1.75 |
| 2 | Rare | 70 | 2.25 s | Umvuthana Crane, Umvuthana Raptor [6] | 16.0 | 8.0 | 3.5 |
| 3 | Legendary | 100 | 2.25 s | Umvuthana Crane, Umvuthana Raptor [9] | 20.0 | 10.0 | 5.25 |

## Solar Storm

`gtbcs_geomancy_plus:solar_storm` · Long cast · cooldown 90 s

> Applies an effect that calls continuous sunstrikes onto nearby enemies, damaging them and setting them on fire. Can only be obtained by defeating Umvuthi, The Sunbird.

**Obtained from:** Dropped by [[bosses/act-ii/umvuthi|Umvuthi, the Sunbird]]; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Solar Storm Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 1.5 s | 4 | 20 | 11s |
| 2 | Uncommon | 120 | 1.5 s | 5 | 20 | 14s |
| 3 | Uncommon | 160 | 1.5 s | 5 | 20 | 17s |
| 4 | Uncommon | 200 | 1.5 s | 6 | 20 | 20s |
| 5 | Rare | 240 | 1.5 s | 7 | 20 | 23s |
| 6 | Rare | 280 | 1.5 s | 7 | 20 | 26s |
| 7 | Rare | 320 | 1.5 s | 8 | 20 | 29s |
| 8 | Legendary | 360 | 1.5 s | 8 | 20 | 32s |

## Sun's Wrath

`dacxirons:suns_wrath` · Long cast · cooldown 25 s

> Summon an AOE embodiment of Sunleia's wrath, cursing those who enter

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AOE Damage | Block Radius | Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 40 | 1 s | 0.4 | 5 | 11s |
| 2 | Common | 50 | 1 s | 0.6 | 5 | 11.5s |
| 3 | Common | 60 | 1 s | 0.8 | 5 | 12s |
| 4 | Common | 70 | 1 s | 1 | 5 | 12.5s |
| 5 | Common | 80 | 1 s | 1.2 | 5 | 13s |
| 6 | Common | 90 | 1 s | 1.39 | 5 | 13.5s |
| 7 | Common | 100 | 1 s | 1.6 | 5 | 14s |
| 8 | Uncommon | 110 | 1 s | 1.8 | 5 | 14.5s |
| 9 | Rare | 120 | 1 s | 2 | 5 | 15s |
| 10 | Legendary | 130 | 1 s | 2.2 | 5 | 15.5s |

## Sunbeam

`irons_spellbooks:sunbeam` · Instant · cooldown 25 s

> Funnel the power of the heavens into a beam of holy energy from above, smiting targets in an area.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 80 | 6.96 |
| 2 | Uncommon | 100 | 7.82 |
| 3 | Uncommon | 120 | 8.69 |
| 4 | Uncommon | 140 | 9.56 |
| 5 | Uncommon | 160 | 10.43 |
| 6 | Rare | 180 | 11.3 |
| 7 | Rare | 200 | 12.17 |
| 8 | Rare | 220 | 13.04 |
| 9 | Epic | 240 | 13.92 |
| 10 | Legendary | 260 | 14.78 |

## Sunleia Beam

`dacxirons:sunleia_beam` · Instant · cooldown 10 s

> A beam straight from the depths of the burning sun

**Obtained from:** Random scroll loot; inscribed in [[item:dacxirons:divine_manuscript_spell_book]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Rare | 200 | 6 |
| 2 | Rare | 220 | 7 |
| 3 | Rare | 240 | 8 |
| 4 | Rare | 260 | 10 |
| 5 | Epic | 280 | 11 |
| 6 | Legendary | 300 | 12 |

## Sword Of The Ancients'

`traveloptics:sword_of_the_ancients` · Long cast · cooldown 330 s

> Summon kobolediator to fight by your side and unleash devastating melee attacks upon your enemies. Can only be obtained by defeating Kobolediator.

**Obtained from:** Dropped by [[bosses/optional-and-world/cataclysm-minibosses|Kobolediator]].

- Summons: Kobolediator

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 100 | 4 s | 90.0 | 12 |
| 2 | Legendary | 200 | 4 s | 125.0 | 14 |
| 3 | Legendary | 300 | 4 s | 160.0 | 16 |

## Wisp

`irons_spellbooks:wisp` · Long cast · cooldown 4 s

> Conjure a projectile of holy energy that will float towards nearby targets and deal damage upon impact.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 27 | 1 s | 3.2 |
| 2 | Common | 30 | 1 s | 3.8 |
| 3 | Common | 34 | 1 s | 4.5 |
| 4 | Common | 37 | 1 s | 5.1 |
| 5 | Common | 41 | 1 s | 5.8 |
| 6 | Common | 45 | 1 s | 6.5 |
| 7 | Common | 48 | 1 s | 7.1 |
| 8 | Uncommon | 52 | 1 s | 7.7 |
| 9 | Rare | 55 | 1 s | 8.4 |
| 10 | Legendary | 59 | 1 s | 9 |
