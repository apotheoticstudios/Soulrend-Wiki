---
{
  "title": "Sound Spells",
  "summary": "The Sound spell school: 8 spells with mana costs, cooldowns and per-level values."
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

**Sound Spells** lists the 8 spells of the Sound school (`familiarslib:sound`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:note_block]]. Only spells marked "Scroll Forge" below can be crafted.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Celestial Chant]] | Long cast | 90 s | 4 | 80–140 | Loot, Scroll Forge |
| [[#Chord Blast]] | Instant | 30 s | 5 | 90–130 | Scroll Forge |
| [[#Clef]] | Instant | 8 s | 10 | 20–65 | Loot, Scroll Forge |
| [[#Crescendo]] | Long cast | 15 s | 3 | 110–210 | Scroll Forge |
| [[#Grand Finale]] | Long cast | 20 s | 5 | 60–120 | Loot, Scroll Forge |
| [[#Rhapsody]] | Long cast | 80 s | 4 | 50–80 | Scroll Forge |
| [[#Serenade]] | Continuous | 40 s | 1 | 7 | Loot |
| [[#Sonata]] | Continuous | 40 s | 5 | 5–9 | Loot, Scroll Forge |

## Celestial Chant

`alshanex_familiars:guardian_angel` · Long cast · cooldown 90 s

> Calls the angels to play an angelic melody that will heal and protect you and your allies.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Regeneration | Damage Reduction | Speed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 80 | 1.5 s | 4 | 1 | +15% | -20% |
| 2 | Legendary | 100 | 1.5 s | 4 | 2 | +20% | -40% |
| 3 | Legendary | 120 | 1.5 s | 4 | 3 | +25% | -60% |
| 4 | Legendary | 140 | 1.5 s | 4 | 3 | +30% | -80% |

## Chord Blast

`alshanex_familiars:default_note` · Instant · cooldown 30 s

> Perform a simple melody to hurt enemies, known to be so catchy that people can't get away from it.

**Obtained from:** The Scroll Forge.

| Level | Rarity | Mana | Damage | Blasts | Effect Length |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 90 | 10 | 3 | 25s |
| 2 | Rare | 100 | 11 | 4 | 25s |
| 3 | Rare | 110 | 12 | 5 | 25s |
| 4 | Epic | 120 | 13 | 6 | 25s |
| 5 | Legendary | 130 | 14 | 7 | 25s |

## Clef

`alshanex_familiars:music_bolt` · Instant · cooldown 8 s

> Shoots a simple note towards the enemy.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Common | 20 | 3 | 25s |
| 2 | Common | 25 | 3.5 | 25s |
| 3 | Common | 30 | 4 | 25s |
| 4 | Common | 35 | 4.5 | 25s |
| 5 | Common | 40 | 5 | 25s |
| 6 | Common | 45 | 5.5 | 25s |
| 7 | Common | 50 | 6 | 25s |
| 8 | Uncommon | 55 | 6.5 | 25s |
| 9 | Rare | 60 | 7 | 25s |
| 10 | Legendary | 65 | 7.5 | 25s |

## Crescendo

`alshanex_familiars:harp_symphony` · Long cast · cooldown 15 s

> Performs a rumbling melody that hurts and stuns the enemy.

**Obtained from:** The Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Epic | 110 | 1.5 s | 12 |
| 2 | Epic | 160 | 1.5 s | 16.8 |
| 3 | Legendary | 210 | 1.5 s | 21.6 |

## Grand Finale

`alshanex_familiars:explosion_melody` · Long cast · cooldown 20 s

> Performs an outrageous melody that traps the enemies and annihilates them with an explosive climax.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 60 | 1.5 s | 7 | 4 |
| 2 | Rare | 75 | 1.5 s | 10.5 | 4 |
| 3 | Rare | 90 | 1.5 s | 14 | 4 |
| 4 | Epic | 105 | 1.5 s | 17.5 | 4 |
| 5 | Legendary | 120 | 1.5 s | 21 | 4 |

## Rhapsody

`alshanex_familiars:birds_spell` · Long cast · cooldown 80 s

> Summons little birds that will cheer you and your allies, giving you a little boost for some time.

**Obtained from:** The Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | Hastened | Effect Length |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 50 | 1.5 s | 1 | 10% | 60s |
| 2 | Epic | 60 | 1.5 s | 2 | 10% | 60s |
| 3 | Legendary | 70 | 1.5 s | 3 | 20% | 60s |
| 4 | Legendary | 80 | 1.5 s | 4 | 30% | 60s |

## Serenade

`alshanex_familiars:lullaby` · Continuous · cooldown 40 s

> Start playing a slow-paced, harmonious melody to make your enemies sleepy.

**Obtained from:** Random scroll loot.

| Level | Rarity | Mana | Duration | Block Radius |
| --- | --- | --- | --- | --- |
| 1 | Legendary | 7 | 15 s | 15 |

## Sonata

`alshanex_familiars:sonata` · Continuous · cooldown 40 s

> Start playing a fast-paced song for everyone to hear, an harmonious melody to hurt your enemies.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Block Radius | Damage | Projectiles |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 5 | 15 s | 12 | 6 | 4 |
| 2 | Epic | 6 | 15 s | 14 | 6.4 | 5 |
| 3 | Epic | 7 | 15 s | 16 | 6.8 | 6 |
| 4 | Legendary | 8 | 15 s | 18 | 7.2 | 7 |
| 5 | Legendary | 9 | 15 s | 20 | 7.59 | 8 |
