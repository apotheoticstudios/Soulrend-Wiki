---
{
  "title": "Fire Spells",
  "summary": "The Fire spell school: 24 spells with mana costs, cooldowns and per-level values."
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

**Fire Spells** lists the 24 spells of the Fire school (`irons_spellbooks:fire`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:blaze_rod]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Fire scrolls** drop from Pyromancer.
- **Random Fire scrolls** are in Additional nether loot chests, Citadel chests and Pyromancer tower chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Annihilation]] | Long cast | 90 s | 3 | 400–600 | Boss drop, Chest |
| [[#Blaze Storm]] | Continuous | 25 s | 10 | 10–28 | Loot, Item, Scroll Forge |
| [[#Burning Dash]] | Instant | 12 s | 10 | 40–76 | Loot, Scroll Forge |
| [[#Burning Judgment]] | Long cast | 18 s | 6 | 40–240 | Boss drop, Item |
| [[#Extinction]] | Long cast | 120 s | 1 | 600 | Item, Scroll Forge |
| [[#Fire Arrow]] | Long cast | 8 s | 10 | 40–85 | Loot, Scroll Forge |
| [[#Fire Breath]] | Continuous | 17 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Fire Fist]] | Long cast | 20 s | 5 | 60–120 | — |
| [[#Fireball]] | Long cast | 30 s | 5 | 120–240 | Loot, Scroll Forge |
| [[#Firebolt]] | Instant | 2 s | 10 | 19–53 | Loot, Scroll Forge |
| [[#Flames Reborn]] | Long cast | 1800 s | 3 | 50–200 | Loot, Scroll Forge |
| [[#Flaming Barrage]] | Instant | 17 s | 5 | 160–200 | Loot, Scroll Forge |
| [[#Flaming Strike]] | Long cast | 17 s | 5 | 60–180 | Loot, Item, Scroll Forge |
| [[#Gyro Slash]] | Long cast | 30 s | 1 | 180 | Item, Scroll Forge |
| [[#Heat Surge]] | Long cast | 50 s | 8 | 100–240 | Loot, Scroll Forge |
| [[#Ignited Onslaught]] | Long cast | 360 s | 5 | 50–350 | Boss drop |
| [[#Lava Bomb]] | Long cast | 18 s | 3 | 40–80 | Loot, Boss drop, Scroll Forge |
| [[#Magma Bomb]] | Long cast | 17 s | 8 | 60–130 | Loot, Scroll Forge |
| [[#Meteor Storm]] | Long cast | 90 s | 6 | 50–200 | Loot, Boss drop, Item, Scroll Forge |
| [[#Raise Hell]] | Long cast | 25 s | 5 | 90–270 | Chest, Item, Scroll Forge |
| [[#Scorch]] | Long cast | 17 s | 10 | 100–190 | Loot, Scroll Forge |
| [[#Summon Pyro Knight]] | Long cast | 150 s | 6 | 100–200 | Loot, Scroll Forge |
| [[#Triple Fireball]] | Long cast | 50 s | 5 | 120–240 | Loot, Item, Scroll Forge |
| [[#Wall of Fire]] | Instant | 30 s | 5 | 60–100 | Loot, Scroll Forge |

## Annihilation

`traveloptics:annihilation` · Long cast · cooldown 90 s

> Targets enemies and nukes them with a devastating spell that deals massive damage. Survivors are inflicted with a radiation effect, preventing incoming healing. Can only be  found from Toxic Caves ruins and by slaying Nucleepers.

**Obtained from:** Dropped by Nucleeper; found in Toxic ruins chests.

- Crouch cast to destroy blocks

| Level | Rarity | Mana | Cast time | AoE Damage | AoE Radius | Irradiated Effect | Range |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 400 | 4.4 s | 19.8 | 8.0 | 5s | 30.0 |
| 2 | Legendary | 500 | 4.4 s | 29.7 | 10.0 | 10s | 35.0 |
| 3 | Legendary | 600 | 4.4 s | 39.6 | 12.0 | 15s | 40.0 |

## Blaze Storm

`irons_spellbooks:blaze_storm` · Continuous · cooldown 25 s

> Hold to unleash a barrage of blaze fireballs, shooting rapidly but wildly in front of you and igniting any creatures or blocks hit.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:necronomicon_spell_book]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 10 | 3 s | 1.15 |
| 2 | Common | 12 | 3.25 s | 1.39 |
| 3 | Common | 14 | 3.5 s | 1.62 |
| 4 | Common | 16 | 3.75 s | 1.85 |
| 5 | Common | 18 | 4 s | 2.08 |
| 6 | Common | 20 | 4.25 s | 2.31 |
| 7 | Common | 22 | 4.5 s | 2.55 |
| 8 | Uncommon | 24 | 4.75 s | 2.78 |
| 9 | Rare | 26 | 5 s | 3.01 |
| 10 | Legendary | 28 | 5.25 s | 3.24 |

## Burning Dash

`irons_spellbooks:burning_dash` · Instant · cooldown 12 s

> Quickly launch yourself forward in a haze of fire, searing creatures you pass through while in a blaze.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 40 | 5 |
| 2 | Common | 44 | 6 |
| 3 | Common | 48 | 6 |
| 4 | Common | 52 | 7 |
| 5 | Common | 56 | 7 |
| 6 | Common | 60 | 8 |
| 7 | Common | 64 | 9 |
| 8 | Uncommon | 68 | 9 |
| 9 | Rare | 72 | 10 |
| 10 | Legendary | 76 | 10 |

## Burning Judgment

`traveloptics:burning_judgment` · Long cast · cooldown 18 s

> Creates Ignis flame strikes on the ground in a straight line for a duration. If the caster's health falls below 50%, the strikes transform into soul-fired flame strikes. Can only be obtained by defeating Ignis.

**Obtained from:** Dropped by [[bosses/act-iii/ignis|Ignis]]; imbued in [[item:traveloptics:flames_of_eldritch]] (level 6).

| Level | Rarity | Mana | Cast time | Damage | Flame Strikes | Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 40 | 2.5 s | 3 | 2 | 2s |
| 2 | Common | 80 | 2.5 s | 6 | 3 | 4s |
| 3 | Common | 120 | 2.5 s | 9 | 4 | 6s |
| 4 | Common | 160 | 2.5 s | 12 | 5 | 8s |
| 5 | Uncommon | 200 | 2.5 s | 15 | 6 | 10s |
| 6 | Legendary | 240 | 2.5 s | 18 | 7 | 12s |

## Extinction

`traveloptics:extinction` · Long cast · cooldown 120 s

> Calls down a massive asteroid, smashing into the ground with incredible force. The impact devastates a large area, leaving a crater that erupts with searing heat, turning all within to ash. Only cast-able from Gauntlet Of Extinction.

**Obtained from:** Imbued in [[item:traveloptics:gauntlet_of_extinction]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast time | impact Damage | Impact Radius | Shockwave Damage | Shockwave Radius | Eruption damage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 600 | 1.9 s | 65 | 15 | 32.5 | 30 | 8 |

## Fire Arrow

`irons_spellbooks:fire_arrow` · Long cast · cooldown 8 s

> Aim an arrow made of fiery magic that will deal direct damage on impact and explode for half damage in a small radius around it. It flies straight for a duration before gravity affects it.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | AOE Damage |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 40 | 1 s | 11 | 3 | 5.5 |
| 2 | Rare | 45 | 1 s | 12 | 3 | 6 |
| 3 | Rare | 50 | 1 s | 13 | 3 | 6.5 |
| 4 | Rare | 55 | 1 s | 14 | 3 | 7 |
| 5 | Rare | 60 | 1 s | 15 | 3 | 7.5 |
| 6 | Rare | 65 | 1 s | 16 | 3 | 8 |
| 7 | Rare | 70 | 1 s | 17 | 3 | 8.5 |
| 8 | Epic | 75 | 1 s | 18 | 3 | 9 |
| 9 | Epic | 80 | 1 s | 19 | 3 | 9.5 |
| 10 | Legendary | 85 | 1 s | 20 | 3 | 10 |

## Fire Breath

`irons_spellbooks:fire_breath` · Continuous · cooldown 17 s

> Hold to spew a cone of fire outwards, igniting creatures and blocks in its path.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 10 | 5 s | 1 |
| 2 | Common | 12 | 5 s | 1.45 |
| 3 | Common | 14 | 5 s | 1.9 |
| 4 | Common | 16 | 5 s | 2.34 |
| 5 | Common | 18 | 5 s | 2.8 |
| 6 | Common | 20 | 5 s | 3.25 |
| 7 | Common | 22 | 5 s | 3.7 |
| 8 | Uncommon | 24 | 5 s | 4.15 |
| 9 | Rare | 26 | 5 s | 4.6 |
| 10 | Legendary | 28 | 5 s | 5.05 |

## Fire Fist

`alshanex_familiars:fire_fist` · Long cast · cooldown 20 s

> Strike with a powerful fire fist burning everything in the way.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Rare | 60 | 0.5 s | 3.33 |
| 2 | Rare | 75 | 0.5 s | 5 |
| 3 | Rare | 90 | 0.5 s | 6.66 |
| 4 | Epic | 105 | 0.5 s | 8.33 |
| 5 | Legendary | 120 | 0.5 s | 10 |

## Fireball

`irons_spellbooks:fireball` · Long cast · cooldown 30 s

> Manifest and throw a ball of fire, exploding and dealing massive damage on impact.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 120 | 2 s | 7.89 | 2 |
| 2 | Rare | 150 | 2 s | 10.79 | 3 |
| 3 | Rare | 180 | 2 s | 13.69 | 3 |
| 4 | Epic | 210 | 2 s | 16.59 | 4 |
| 5 | Legendary | 240 | 2 s | 19.5 | 4 |

## Firebolt

`irons_spellbooks:firebolt` · Instant · cooldown 2 s

> Shoot a small projectile of fire, igniting whatever it hits.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 19 | 3.3 |
| 2 | Common | 22 | 3.57 |
| 3 | Common | 26 | 3.85 |
| 4 | Common | 30 | 4.12 |
| 5 | Common | 34 | 4.4 |
| 6 | Common | 38 | 4.67 |
| 7 | Common | 41 | 4.95 |
| 8 | Uncommon | 45 | 5.22 |
| 9 | Rare | 49 | 5.5 |
| 10 | Legendary | 53 | 5.77 |

## Flames Reborn

`traveloptics:flames_reborn` · Long cast · cooldown 1800 s

> Ignite a wave of fire, marking your place in time. If you fall, the flames will resurrect you at your marked spot, restoring you to the health you had when it was cast.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Effect Duration |
| --- | --- | --- | --- | --- |
| 1 | Rare | 50 | 0.5 s | 11.5s |
| 2 | Rare | 125 | 0.5 s | 16s |
| 3 | Legendary | 200 | 0.5 s | 16s |

## Flaming Barrage

`irons_spellbooks:flaming_barrage` · Instant · cooldown 17 s

> Repeatedly cast to shoot individual small fireballs, which home towards your cursor, or the creature your cursor is targeting.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Projectiles |
| --- | --- | --- | --- | --- |
| 1 | Rare | 160 | 1.8 | 5 |
| 2 | Rare | 170 | 3 | 5 |
| 3 | Rare | 180 | 4.2 | 5 |
| 4 | Epic | 190 | 5.4 | 5 |
| 5 | Legendary | 200 | 6.6 | 5 |

## Flaming Strike

`irons_spellbooks:flaming_strike` · Long cast · cooldown 17 s

> Unleash a sweeping melee attack in the form of a wreath of flames. This spell is uninterruptible. The damage scales off of your held weapon's melee damage and enchantments.

**Obtained from:** Random scroll loot; inscribed in [[item:traveloptics:chronicles_of_the_firelord]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 60 | 0.5 s | 3 |
| 2 | Common | 90 | 0.5 s | 4.2 |
| 3 | Common | 120 | 0.5 s | 5.4 |
| 4 | Uncommon | 150 | 0.5 s | 6.6 |
| 5 | Legendary | 180 | 0.5 s | 7.8 |

## Gyro Slash

`traveloptics:gyro_slash` · Long cast · cooldown 30 s

> Transform the Infernal Devastator into Blade Mode, slashing entities in front of you. Using an Infernal Devastator Evo 2 or higher creates a slash projectile that pulls in nearby entities with a fiery vacuum effect before bursting into flame jets. Only cast-able from Infernal Devastator.

**Obtained from:** Imbued in [[item:traveloptics:infernal_devastator]] (level 1); the Scroll Forge.

- Requires Infernal Devastator Evo 2 or above to trigger Flame Jet damage

| Level | Rarity | Mana | Cast time | Damage | Flame Jet Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 180 | 1.25 s | 24 | 12 |

## Heat Surge

`irons_spellbooks:heat_surge` · Long cast · cooldown 50 s

> Emanate a surge of fiery magic, igniting and rending creatures in a radius around you. Rended creatures have reduced armor.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Reduced Armor | Effect Length | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 100 | 1 s | 15% | 5.75s | 6.5 |
| 2 | Common | 120 | 1 s | 20% | 6.94s | 7 |
| 3 | Common | 140 | 1 s | 25% | 8.1s | 7.5 |
| 4 | Common | 160 | 1 s | 30% | 9.25s | 8 |
| 5 | Common | 180 | 1 s | 35% | 10.39s | 8.5 |
| 6 | Uncommon | 200 | 1 s | 40% | 11.55s | 9 |
| 7 | Uncommon | 220 | 1 s | 45% | 12.75s | 9.5 |
| 8 | Legendary | 240 | 1 s | 50% | 13.89s | 10 |

## Ignited Onslaught

`traveloptics:ignited_onslaught` · Long cast · cooldown 360 s

> Cast to summon a Ignited Revenant & Berserker to protect you and fight for you. Can only be obtained by defeating Ignited Revenant and Ignited Berserker.

**Obtained from:** Dropped by [[enemies/act-iii/ignited-berserker|Ignited Berserker]] and [[bosses/optional-and-world/cataclysm-minibosses|Ignited Revenant]].

| Level | Rarity | Mana | Cast time | Summons | Berserker HP | Berserker Damage | Revenant HP | Revenant Damage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 50 | 3 s | Ignited Berserker, Ignited Revenant [2] | 33.0 | 3.2 | 40.0 | 3 |
| 2 | Rare | 125 | 3 s | Ignited Berserker, Ignited Revenant [2] | 41.0 | 4.4 | 50.0 | 4 |
| 3 | Rare | 200 | 3 s | Ignited Berserker, Ignited Revenant [2] | 49.0 | 5.6 | 60.0 | 5 |
| 4 | Epic | 275 | 3 s | Ignited Berserker, Ignited Revenant [2] | 57.0 | 6.8 | 70.0 | 6 |
| 5 | Legendary | 350 | 3 s | Ignited Berserker, Ignited Revenant [2] | 65.0 | 8 | 80.0 | 7 |

## Lava Bomb

`traveloptics:lava_bomb` · Long cast · cooldown 18 s

> Launches projectiles at a 45° angle in front of the caster, that explodes upon impact, creating lava pools. When cast, the spell absorbs nearby lava.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]]; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Lava Bombs | Motion Scale |
| --- | --- | --- | --- | --- | --- |
| 1 | Epic | 40 | 2.5 s | 1 | 1.0x |
| 2 | Epic | 60 | 2.5 s | 2 | 1.0x |
| 3 | Legendary | 80 | 2.5 s | 3 | 1.0x |

## Magma Bomb

`irons_spellbooks:magma_bomb` · Long cast · cooldown 17 s

> Launch a bomb made from magma, exploding on impact and leaving a field of fire where it lands

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | AOE Damage | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 60 | 1 s | 4.8 | 1.4 | 3.5 |
| 2 | Uncommon | 70 | 1 s | 4.8 | 1.6 | 3.5 |
| 3 | Uncommon | 80 | 1 s | 4.8 | 1.8 | 3.5 |
| 4 | Uncommon | 90 | 1 s | 4.8 | 2 | 3.5 |
| 5 | Rare | 100 | 1 s | 4.8 | 2.2 | 3.5 |
| 6 | Rare | 110 | 1 s | 4.8 | 2.3 | 3.5 |
| 7 | Rare | 120 | 1 s | 4.8 | 2.5 | 3.5 |
| 8 | Legendary | 130 | 1 s | 4.8 | 2.7 | 3.5 |

## Meteor Storm

`traveloptics:meteor_storm` · Long cast · cooldown 90 s

> Summons Ignis fireballs to rain down from the sky. If the caster's health falls below 50%, the fireballs transform into soul-fired projectiles.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/ignis|Ignis]]; inscribed in [[item:traveloptics:chronicles_of_the_firelord]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Meteor Storm Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 50 | 0.75 s | 6 | 9 | 11s |
| 2 | Epic | 80 | 0.75 s | 8 | 12 | 14s |
| 3 | Epic | 110 | 0.75 s | 10 | 15 | 17s |
| 4 | Epic | 140 | 0.75 s | 12 | 18 | 20s |
| 5 | Legendary | 170 | 0.75 s | 14 | 21 | 23s |
| 6 | Legendary | 200 | 0.75 s | 16 | 24 | 26s |

## Raise Hell

`irons_spellbooks:raise_hell` · Long cast · cooldown 25 s

> Slam down your weapon to wreath a fiery shockwave in a large radius around you. Damage scales based on the held weapon.

**Obtained from:** Found in Citadel chests; imbued in [[item:irons_spellbooks:hellrazor]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Casts |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 90 | 0.8 s | 15 | 8 | 1 |
| 2 | Legendary | 135 | 0.8 s | 15 | 8 | 2 |
| 3 | Legendary | 180 | 0.8 s | 15 | 8 | 3 |
| 4 | Legendary | 225 | 0.8 s | 15 | 8 | 4 |
| 5 | Legendary | 270 | 0.8 s | 15 | 8 | 5 |

## Scorch

`irons_spellbooks:scorch` · Long cast · cooldown 17 s

> In a targeted area, erupt a scorch of fiery magic, damaging creatures in the zone and leaving a field of fire.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 1 s | 6.07 | 2.5 |
| 2 | Uncommon | 110 | 1 s | 6.84 | 2.5 |
| 3 | Uncommon | 120 | 1 s | 7.59 | 2.5 |
| 4 | Uncommon | 130 | 1 s | 8.35 | 2.5 |
| 5 | Uncommon | 140 | 1 s | 9.11 | 2.5 |
| 6 | Rare | 150 | 1 s | 9.88 | 2.5 |
| 7 | Rare | 160 | 1 s | 10.63 | 2.5 |
| 8 | Rare | 170 | 1 s | 11.39 | 2.5 |
| 9 | Epic | 180 | 1 s | 12.15 | 2.5 |
| 10 | Legendary | 190 | 1 s | 12.92 | 2.5 |

## Summon Pyro Knight

`dacxirons:summon_pyro_knight` · Long cast · cooldown 150 s

> A blazing guard comes to your defense

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | Summon hp | Summon duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 100 | 1.5 s | 1 | 12 | 38s |
| 2 | Epic | 120 | 1.5 s | 1 | 16 | 49s |
| 3 | Epic | 140 | 1.5 s | 1 | 19 | 60s |
| 4 | Epic | 160 | 1.5 s | 1 | 23 | 71s |
| 5 | Legendary | 180 | 1.5 s | 1 | 26 | 83s |
| 6 | Legendary | 200 | 1.5 s | 1 | 30 | 94s |

## Triple Fireball

`dacxirons:triple_fireball_spell` · Long cast · cooldown 50 s

> Unleash three consecutive balls of fire

**Obtained from:** Random scroll loot; imbued in [[item:dacxirons:pyromancer_staff]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Fireballs | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 120 | 2 s | 3 | 10 | 3 |
| 2 | Rare | 150 | 2 s | 3 | 15 | 4 |
| 3 | Rare | 180 | 2 s | 3 | 20 | 5 |
| 4 | Epic | 210 | 2 s | 3 | 25 | 6 |
| 5 | Legendary | 240 | 2 s | 3 | 30 | 7 |

## Wall of Fire

`irons_spellbooks:wall_of_fire` · Instant · cooldown 30 s

> Recast to place anchor points, which erupts into a wall of fire when the cast finishes, or when the maximum length is reached. This wall blocks projectiles and ignites creatures that pass through it.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | AOE Damage | Block Range |
| --- | --- | --- | --- | --- |
| 1 | Common | 60 | 2.31 | 11.7 |
| 2 | Common | 70 | 2.89 | 13.4 |
| 3 | Common | 80 | 3.48 | 15.2 |
| 4 | Uncommon | 90 | 4.05 | 16.9 |
| 5 | Legendary | 100 | 4.63 | 18.7 |
