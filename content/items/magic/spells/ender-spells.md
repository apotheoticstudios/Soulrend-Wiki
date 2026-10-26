---
{
  "title": "Ender Spells",
  "summary": "The Ender spell school: 25 spells with mana costs, cooldowns and per-level values."
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

**Ender Spells** lists the 25 spells of the Ender school (`irons_spellbooks:ender`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:ender_pearl]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Ender scrolls** are in Additional end city loot chests and Additional library loot chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Astral Sense]] | Instant | 120 s | 3 | 100–200 | Loot, Scroll Forge |
| [[#Black Hole]] | Long cast | 120 s | 6 | 600–1600 | Loot, Scroll Forge |
| [[#Blink]] | Long cast | 1.5 s | 3 | 5–9 | Loot, Scroll Forge |
| [[#Conjure Void Tomes]] | Long cast | 150 s | 5 | 30–150 | Chest |
| [[#Counterspell]] | Instant | 12 s | 1 | 100 | Loot, Item, Scroll Forge |
| [[#Cursed Minefield]] | Long cast | 30 s | 8 | 10–150 | Loot, Boss drop, Scroll Forge |
| [[#Dragon's Breath]] | Continuous | 17 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Echoing Strikes]] | Instant | 60 s | 5 | 100–180 | Loot, Item, Scroll Forge |
| [[#End's Mayhem]] | Long cast | 120 s | 8 | 70–140 | — |
| [[#Eternal Sentinel]] | Long cast | 330 s | 3 | 100–300 | Boss drop |
| [[#Evasion]] | Instant | 420 s | 5 | 80–240 | Loot, Scroll Forge |
| [[#Magic Arrow]] | Long cast | 8 s | 10 | 80–170 | Loot, Scroll Forge |
| [[#Magic Missile]] | Instant | 2 s | 10 | 20–56 | Loot, Scroll Forge |
| [[#Orbital Void]] | Long cast | 25 s | 5 | 40–200 | Loot, Boss drop, Item, Scroll Forge |
| [[#Portal]] | Instant | 180 s | 3 | 400–440 | Loot, Item, Scroll Forge |
| [[#Recall]] | Long cast | 300 s | 1 | 200 | Loot, Scroll Forge |
| [[#Shadow Slash]] | Instant | 15 s | 5 | 30–90 | Loot, Scroll Forge |
| [[#Shear Of The Stars]] | Long cast | 60 s | 1 | 200 | Item, Scroll Forge |
| [[#Starfall]] | Continuous | 16 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Summon Ender Chest]] | Instant | 5 s | 1 | 50 | Loot, Scroll Forge |
| [[#Summon Swords]] | Long cast | 150 s | 5 | 80–140 | Loot, Scroll Forge |
| [[#Supernova]] | Long cast | 180 s | 1 | 600 | Item, Scroll Forge |
| [[#Teleport]] | Instant | 3 s | 5 | 40–80 | Loot, Scroll Forge |
| [[#Void Eruption]] | Long cast | 25 s | 3 | 70–180 | Loot, Boss drop, Scroll Forge |
| [[#Vortex Uppercut]] | Long cast | 18 s | 3 | 70–210 | Loot, Item, Scroll Forge |

## Astral Sense

`traveloptics:astral_sense` · Instant · cooldown 120 s

> Reveals the pathfinder of nearby entities in a radius. Normal casting alerts the caster about nearby threats, while crouch casting helps sense loot, traps, and valuables like Arcane Debris.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Block Radius | Duration |
| --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 25 | 45s |
| 2 | Rare | 150 | 30 | 50s |
| 3 | Legendary | 200 | 35 | 55s |

## Black Hole

`irons_spellbooks:black_hole` · Long cast · cooldown 120 s

> Around a targeted location, create a fissure into the void, manifesting a black hole that will suck in nearby creatures and slowly crush them to death

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AOE Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 600 | 5 s | 1.1 | 6 |
| 2 | Legendary | 800 | 5 s | 1.1 | 8 |
| 3 | Legendary | 1000 | 5 s | 1.1 | 10 |
| 4 | Legendary | 1200 | 5 s | 1.1 | 12 |
| 5 | Legendary | 1400 | 5 s | 1.1 | 14 |
| 6 | Legendary | 1600 | 5 s | 1.1 | 16 |

## Blink

`traveloptics:blink` · Long cast · cooldown 1.5 s

> Low-cost, short-ranged teleport in the direction you're moving. Works omni-directionally.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Distance |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 5 | 0.15 s | 3.65 |
| 2 | Rare | 7 | 0.15 s | 4.3 |
| 3 | Legendary | 9 | 0.15 s | 4.95 |

## Conjure Void Tomes

`traveloptics:conjure_void_tomes` · Long cast · cooldown 150 s

> Summon magical Void Tomes to fight by your side and unleash spell attacks upon your enemies. Can be found in Void Cathedral.

**Obtained from:** Found in Void cathedral chests.

| Level | Rarity | Mana | Cast time | Summons | HP | Spell Power |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 30 | 2.5 s | Void Tome [3] | 20.0 | 20% |
| 2 | Uncommon | 60 | 2.5 s | Void Tome [3] | 25.0 | 40% |
| 3 | Rare | 90 | 2.5 s | Void Tome [3] | 30.0 | 60% |
| 4 | Rare | 120 | 2.5 s | Void Tome [3] | 35.0 | 80% |
| 5 | Legendary | 150 | 2.5 s | Void Tome [3] | 40.0 | 100% |

## Counterspell

`irons_spellbooks:counterspell` · Instant · cooldown 12 s

> Cast to interrupt any targeted magical process, such as a casting creature or a magical projectile.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:spellbreaker]] (level 1); the Scroll Forge.

| Level | Rarity | Mana |
| --- | --- | --- |
| 1 | Rare | 100 |

## Cursed Minefield

`traveloptics:cursed_minefield` · Long cast · cooldown 30 s

> On cast, summons Leviathan’s abyssal mines in a radius around the player. The mine placement is random, but they cannot go below the caster’s Y level.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-leviathan|The Leviathan]] and Deepling Priest; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Abyssal Mines |
| --- | --- | --- | --- | --- |
| 1 | Common | 10 | 2.25 s | 4 |
| 2 | Common | 30 | 2.25 s | 8 |
| 3 | Common | 50 | 2.25 s | 12 |
| 4 | Common | 70 | 2.25 s | 16 |
| 5 | Common | 90 | 2.25 s | 20 |
| 6 | Uncommon | 110 | 2.25 s | 24 |
| 7 | Uncommon | 130 | 2.25 s | 28 |
| 8 | Legendary | 150 | 2.25 s | 32 |

## Dragon's Breath

`irons_spellbooks:dragon_breath` · Continuous · cooldown 17 s

> Hold to spew a cone of dragon breath forwards. Each time a creature is hit, there is a chance to create a pool of dragon breath at their feet.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 10 | 5 s | 1 |
| 2 | Common | 12 | 5 s | 1.43 |
| 3 | Common | 14 | 5 s | 1.87 |
| 4 | Common | 16 | 5 s | 2.3 |
| 5 | Common | 18 | 5 s | 2.74 |
| 6 | Common | 20 | 5 s | 3.17 |
| 7 | Common | 22 | 5 s | 3.61 |
| 8 | Uncommon | 24 | 5 s | 4.04 |
| 9 | Rare | 26 | 5 s | 4.48 |
| 10 | Legendary | 28 | 5 s | 4.91 |

## Echoing Strikes

`irons_spellbooks:echoing_strikes` · Instant · cooldown 60 s

> While under the effects of the spell, non-magical attacks will leave an echo of ender energy behind, shortly thereafter exploding with an echo of the original attack's damage.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:amethyst_rapier]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Damage | Block Radius | Effect Length |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 2% | 2.0 | 12s |
| 2 | Rare | 120 | 2% | 2.0 | 15s |
| 3 | Rare | 140 | 2% | 2.0 | 18s |
| 4 | Epic | 160 | 2% | 2.0 | 21s |
| 5 | Legendary | 180 | 2% | 2.0 | 24s |

## End's Mayhem

`alshanex_familiars:end_mayhem` · Long cast · cooldown 120 s

> This spell allows you to become the ruler of the end while casting it, allowing you to use the full power of the end dimension to kill your target.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Effect Length |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 70 | 2 s | 8 | 10 | 20s |
| 2 | Rare | 80 | 2 s | 9 | 10 | 22s |
| 3 | Rare | 90 | 2 s | 10 | 10 | 24s |
| 4 | Rare | 100 | 2 s | 11 | 10 | 26s |
| 5 | Rare | 110 | 2 s | 12 | 10 | 28s |
| 6 | Epic | 120 | 2 s | 13 | 10 | 30s |
| 7 | Epic | 130 | 2 s | 14 | 10 | 32s |
| 8 | Legendary | 140 | 2 s | 15 | 10 | 34s |

## Eternal Sentinel

`traveloptics:eternal_sentinel` · Long cast · cooldown 330 s

> Conjure a friendly Ender Golem to protect and fight by your side. Can only be obtained by defeating Ender Golem.

**Obtained from:** Dropped by [[bosses/optional-and-world/cataclysm-minibosses|Ender Golem]].

- Summons: Ender Golem

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Epic | 100 | 4 s | 90.0 | 10 |
| 2 | Epic | 200 | 4 s | 135.0 | 12 |
| 3 | Legendary | 300 | 4 s | 180.0 | 14 |

## Evasion

`irons_spellbooks:evasion` · Instant · cooldown 420 s

> Cast to imbue yourself with ender energy. Upon being attacked while under its effects, you will immediately teleport within a short radius and avoid taking any damage. Only a finite amount of hits can be dodged before the effect immediately wears off.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Hits Dodged |
| --- | --- | --- | --- |
| 1 | Epic | 80 | 1 |
| 2 | Epic | 120 | 1 |
| 3 | Epic | 160 | 2 |
| 4 | Legendary | 200 | 2 |
| 5 | Legendary | 240 | 3 |

## Magic Arrow

`irons_spellbooks:magic_arrow` · Long cast · cooldown 8 s

> Hold to charge a piercing arrow made of arcane energy. This arrow has no gravity and can travel through blocks.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Rare | 80 | 1.5 s | 5.7 |
| 2 | Rare | 90 | 1.5 s | 6.9 |
| 3 | Rare | 100 | 1.5 s | 8.1 |
| 4 | Rare | 110 | 1.5 s | 9.2 |
| 5 | Rare | 120 | 1.5 s | 10.4 |
| 6 | Rare | 130 | 1.5 s | 11.5 |
| 7 | Rare | 140 | 1.5 s | 12.7 |
| 8 | Epic | 150 | 1.5 s | 13.9 |
| 9 | Epic | 160 | 1.5 s | 15 |
| 10 | Legendary | 170 | 1.5 s | 16.2 |

## Magic Missile

`irons_spellbooks:magic_missile` · Instant · cooldown 2 s

> Shoot a bolt of concentrated arcane magic. Also a trademark of every wizard.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 20 | 3.6 |
| 2 | Common | 24 | 3.9 |
| 3 | Common | 28 | 4.2 |
| 4 | Common | 32 | 4.5 |
| 5 | Common | 36 | 4.8 |
| 6 | Common | 40 | 5.1 |
| 7 | Common | 44 | 5.4 |
| 8 | Uncommon | 48 | 5.7 |
| 9 | Rare | 52 | 6 |
| 10 | Legendary | 56 | 6.3 |

## Orbital Void

`traveloptics:orbital_void` · Long cast · cooldown 25 s

> Shoots Abyssal Orbs in a circular pattern around the caster. These orbs home in on the nearest enemy, relentlessly tracking and damaging them. Crouch cast to spread orbs across multiple random targets.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-leviathan|The Leviathan]]; inscribed in [[item:traveloptics:archive_of_abyssal_secrets]] (level 5); the Scroll Forge.

- Crouch cast to target multiple entities

| Level | Rarity | Mana | Cast time | Damage | Abyssal Orbs |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 40 | 2 s | 7.5 | 3 |
| 2 | Rare | 80 | 2 s | 10 | 6 |
| 3 | Rare | 120 | 2 s | 12.5 | 9 |
| 4 | Epic | 160 | 2 s | 15 | 12 |
| 5 | Legendary | 200 | 2 s | 17.5 | 15 |

## Portal

`irons_spellbooks:portal` · Instant · cooldown 180 s

> Creates two portals that allows players to travel back and forth between them.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:hither_thither_wand]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast Range | Portal Duration |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 400 | 48 | 1.75m |
| 2 | Rare | 420 | 48 | 2.45m |
| 3 | Legendary | 440 | 48 | 3.15m |

## Recall

`irons_spellbooks:recall` · Long cast · cooldown 300 s

> Warps you back to your spawn location, or world spawn if there is none.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Uncommon | 200 | 4 s |

## Shadow Slash

`irons_spellbooks:shadow_slash` · Instant · cooldown 15 s

> Dash forward with a arcing slash of arcane energy, striking creatures in an area. Projectiles hit are deflected. Scales off held weapon's melee damage and enchantments.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 30 | 5 |
| 2 | Common | 45 | 6 |
| 3 | Common | 60 | 7 |
| 4 | Uncommon | 75 | 8 |
| 5 | Legendary | 90 | 9 |

## Shear Of The Stars

`traveloptics:shear_of_the_stars` · Long cast · cooldown 60 s

> Summons a Dragon Spirit that flies forward, passing through blocks and damaging enemies it hits. It leaves behind a Stellar Trail that deals damage over time to nearby enemies. Dragon damage ignores I-Frames. Requires Stellothorn to cast this spell.

**Obtained from:** Imbued in [[item:traveloptics:stellothorn]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Dragon Spirit Damage | Stellar Trail Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 200 | 3 s | 6.66 /0.1s | 5 /0.5s |

## Starfall

`irons_spellbooks:starfall` · Continuous · cooldown 16 s

> Target a single area and continuously rain down arcane comets from above for the duration of the spell

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 10 | 8 s | 2.31 | 6 |
| 2 | Uncommon | 12 | 8 s | 2.6 | 6 |
| 3 | Uncommon | 14 | 8 s | 2.89 | 6 |
| 4 | Uncommon | 16 | 8 s | 3.18 | 6 |
| 5 | Uncommon | 18 | 8 s | 3.48 | 6 |
| 6 | Rare | 20 | 8 s | 3.76 | 6 |
| 7 | Rare | 22 | 8 s | 4.05 | 6 |
| 8 | Rare | 24 | 8 s | 4.34 | 6 |
| 9 | Epic | 26 | 8 s | 4.63 | 6 |
| 10 | Legendary | 28 | 8 s | 4.92 | 6 |

## Summon Ender Chest

`irons_spellbooks:summon_ender_chest` · Instant · cooldown 5 s

> Apparate your Ender Chest inventory upon casting.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana |
| --- | --- | --- |
| 1 | Rare | 50 |

## Summon Swords

`irons_spellbooks:summon_swords` · Long cast · cooldown 150 s

> Conjure a trio of spectral armaments to aid in battle: a brawling shortsword, a quick rapier, and a tanking claymore. Created by the Ancient Magician known as Hazentouvel.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | Damage | Health |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 80 | 1 s | 3 | 100% | 100% |
| 2 | Rare | 95 | 1 s | 3 | 110% | 120% |
| 3 | Rare | 110 | 1 s | 3 | 120% | 140% |
| 4 | Epic | 125 | 1 s | 3 | 130% | 160% |
| 5 | Legendary | 140 | 1 s | 3 | 140% | 180% |

## Supernova

`traveloptics:supernova` · Long cast · cooldown 180 s

> Summon a collapsing star that builds in intensity over time. After a short delay, it erupts in a massive explosion, dealing heavy damage and gives birth to a supermassive black hole. The black hole pulls in nearby entities and continues to deal damage within its radius. Requires Wand of Final Light to cast this spell.

**Obtained from:** Imbued in [[item:traveloptics:wand_of_final_light]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Supernova Explosion Damage | Supernova Explosion Radius | Supermassive Black hole Damage | Supermassive Blackhole Radius |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 600 | 5 s | 80 | 22 | 2.2 | 32 |

## Teleport

`irons_spellbooks:teleport` · Instant · cooldown 3 s

> Instantaneously teleport to where you are looking, leaving nothing but a cloud of ender energy behind.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Block Range |
| --- | --- | --- | --- |
| 1 | Uncommon | 40 | 3.3 |
| 2 | Uncommon | 50 | 6.7 |
| 3 | Rare | 60 | 10 |
| 4 | Rare | 70 | 13.4 |
| 5 | Legendary | 80 | 16.8 |

## Void Eruption

`traveloptics:void_eruption` · Long cast · cooldown 25 s

> Shoots Void Howitzer Projectiles that explode and summon void runes in a radius. This spell can be recast.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/ender-guardian|Ender Guardian]]; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AoE Damage | Shots | Falloff Distance |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 70 | 0.4 s | 16 | 1 | 20 |
| 2 | Epic | 125 | 0.4 s | 19 | 2 | 20 |
| 3 | Legendary | 180 | 0.4 s | 22 | 3 | 20 |

## Vortex Uppercut

`traveloptics:vortex_punch` · Long cast · cooldown 18 s

> Create a Void Vortex, pulling enemies in. Teleport into it and unleash a crushing uppercut, dealing damage and sending foes flying upward.

**Obtained from:** Random scroll loot; imbued in [[item:traveloptics:voidstrike_reaper]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Cast time | AoE Damage | Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 70 | 0.75 s | 20 | 20 |
| 2 | Legendary | 140 | 0.75 s | 30 | 20 |
| 3 | Legendary | 210 | 0.75 s | 40 | 20 |
