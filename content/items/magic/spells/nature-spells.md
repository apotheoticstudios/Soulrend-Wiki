---
{
  "title": "Nature Spells",
  "summary": "The Nature spell school: 16 spells with mana costs, cooldowns and per-level values."
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

**Nature Spells** lists the 16 spells of the Nature school (`irons_spellbooks:nature`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:poisonous_potato]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Nature scrolls** drop from Apothecarist.
- **Random Nature scrolls** are in Mangrove hut chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Acid Fireball]] | Instant | 5 s | 5 | 40–80 | Loot, Item, Scroll Forge |
| [[#Acid Spit]] | Long cast | 17 s | 10 | 80–260 | Loot, Scroll Forge |
| [[#Aerial Collapse]] | Long cast | 50 s | 5 | 80–400 | Loot, Scroll Forge |
| [[#Aspect of the Spider]] | Instant | 90 s | 8 | 70–140 | Loot, Scroll Forge |
| [[#Blight]] | Long cast | 35 s | 8 | 120–400 | Loot, Item, Scroll Forge |
| [[#Fairy's Wish]] | Instant | 60 s | 5 | 100–140 | Loot, Item, Scroll Forge |
| [[#Firefly Swarm]] | Long cast | 25 s | 10 | 80–260 | Loot, Scroll Forge |
| [[#Gluttony]] | Instant | 90 s | 5 | 70 | Loot, Scroll Forge |
| [[#Oakskin]] | Instant | 70 s | 8 | 30–100 | Loot, Scroll Forge |
| [[#Poison Arrow]] | Long cast | 17 s | 10 | 80–170 | Loot, Scroll Forge |
| [[#Poison Splash]] | Long cast | 25 s | 10 | 80–260 | Loot, Scroll Forge |
| [[#Poison Spray]] | Continuous | 17 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Primal Pack]] | Long cast | 480 s | 5 | 150–450 | Boss drop |
| [[#Primordial Steed]] | Long cast | 900 s | 3 | 200–600 | Boss drop |
| [[#Root]] | Long cast | 50 s | 10 | 125–201 | Loot, Scroll Forge |
| [[#Stele Cascade]] | Long cast | 22 s | 6 | 35–160 | Loot, Boss drop, Item, Scroll Forge |

## Acid Fireball

`dacxirons:acid_ball_spell` · Instant · cooldown 5 s

> Unleash a poisonous flaming ball upon your enemies

**Obtained from:** Random scroll loot; imbued in [[item:dacxirons:corroding_flame_staff]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Damage | Block Radius |
| --- | --- | --- | --- | --- |
| 1 | Rare | 40 | 8 | 4 |
| 2 | Rare | 50 | 11 | 4 |
| 3 | Rare | 60 | 14 | 4 |
| 4 | Epic | 70 | 17 | 4 |
| 5 | Legendary | 80 | 20 | 4 |

## Acid Spit

`irons_spellbooks:acid_orb` · Long cast · cooldown 17 s

> Spit an orb of acid, splashing in a radius upon impact and rending creatures hit, melting away and reducing their armor

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Reduced Armor | Effect Length |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 80 | 0.75 s | 1.8 | 20% | 12s |
| 2 | Common | 100 | 0.75 s | 1.8 | 25% | 12s |
| 3 | Common | 120 | 0.75 s | 1.8 | 30% | 12s |
| 4 | Common | 140 | 0.75 s | 1.8 | 35% | 12s |
| 5 | Common | 160 | 0.75 s | 1.8 | 40% | 12s |
| 6 | Common | 180 | 0.75 s | 1.8 | 45% | 12s |
| 7 | Common | 200 | 0.75 s | 1.8 | 50% | 12s |
| 8 | Uncommon | 220 | 0.75 s | 1.8 | 55% | 12s |
| 9 | Rare | 240 | 0.75 s | 1.8 | 60% | 12s |
| 10 | Legendary | 260 | 0.75 s | 1.8 | 65% | 12s |

## Aerial Collapse

`traveloptics:aerial_collapse` · Long cast · cooldown 50 s

> Inflict an effect that lifts enemies into the air for 2.5 seconds before crushing them down to the floor, dealing percentage-based damage to their health. The damage dealt ignores any kind of damage cap.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Current Hp Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 0.5 s | 4 | 2% |
| 2 | Uncommon | 160 | 0.5 s | 6 | 3% |
| 3 | Rare | 240 | 0.5 s | 8 | 3% |
| 4 | Rare | 320 | 0.5 s | 10 | 4% |
| 5 | Legendary | 400 | 0.5 s | 12 | 4% |

## Aspect of the Spider

`irons_spellbooks:spider_aspect` · Instant · cooldown 90 s

> Instill yourself with poisonous magic, dealing additional melee, ranged, or spell damage creatures that are poisoned

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Additional Poisoned Damage | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Rare | 70 | 5% | 11.5s |
| 2 | Rare | 80 | 10% | 14.5s |
| 3 | Rare | 90 | 15% | 17.3s |
| 4 | Rare | 100 | 20% | 20.2s |
| 5 | Rare | 110 | 25% | 23.1s |
| 6 | Epic | 120 | 30% | 26.1s |
| 7 | Epic | 130 | 35% | 29s |
| 8 | Legendary | 140 | 40% | 31.8s |

## Blight

`irons_spellbooks:blight` · Long cast · cooldown 35 s

> Target a creature to blight them, reducing their incoming healing and outgoing damage

**Obtained from:** Random scroll loot; imbued in [[item:traveloptics:thorns_of_oblivion]] (level 8); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Reduced Healing | Reduced Damage | Effect Length |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 120 | 2.5 s | 10% | 5% | 17.3s |
| 2 | Rare | 160 | 2.5 s | 20% | 10% | 17.3s |
| 3 | Rare | 200 | 2.5 s | 30% | 15% | 17.3s |
| 4 | Rare | 240 | 2.5 s | 40% | 20% | 17.3s |
| 5 | Rare | 280 | 2.5 s | 50% | 25% | 17.3s |
| 6 | Epic | 320 | 2.5 s | 60% | 30% | 17.3s |
| 7 | Epic | 360 | 2.5 s | 70% | 35% | 17.3s |
| 8 | Legendary | 400 | 2.5 s | 80% | 40% | 17.3s |

## Fairy's Wish

`dacxirons:fairys_wish_spell` · Instant · cooldown 60 s

> Your wish has been granted, receive 2 randomly chosen positive effects

**Obtained from:** Random scroll loot; imbued in [[item:dacxirons:fairy_wand_staff]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Max Effect Level | Max Duration |
| --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 1 | 7 |
| 2 | Rare | 110 | 2 | 15 |
| 3 | Rare | 120 | 3 | 22 |
| 4 | Epic | 130 | 4 | 30 |
| 5 | Legendary | 140 | 5 | 37 |

## Firefly Swarm

`irons_spellbooks:firefly_swarm` · Long cast · cooldown 25 s

> Emanate a swarm of violent fireflies, following a targeted creature and dealing aoe damage. If the initial target dies, the last harmed creature will be targeted.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AOE Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 1.5 s | 1.1 | 2.0 |
| 2 | Uncommon | 100 | 1.5 s | 1.3 | 2.0 |
| 3 | Uncommon | 120 | 1.5 s | 1.5 | 2.0 |
| 4 | Uncommon | 140 | 1.5 s | 1.7 | 2.0 |
| 5 | Uncommon | 160 | 1.5 s | 1.9 | 2.0 |
| 6 | Rare | 180 | 1.5 s | 2.1 | 2.0 |
| 7 | Rare | 200 | 1.5 s | 2.3 | 2.0 |
| 8 | Rare | 220 | 1.5 s | 2.5 | 2.0 |
| 9 | Epic | 240 | 1.5 s | 2.7 | 2.0 |
| 10 | Legendary | 260 | 1.5 s | 2.8 | 2.0 |

## Gluttony

`irons_spellbooks:gluttony` · Instant · cooldown 90 s

> Turn your stomach into an arcane furnace, turning eaten food into mana for a duration.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Mana Recovery | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Common | 70 | 2 | 17.3s |
| 2 | Common | 70 | 2.5 | 17.3s |
| 3 | Common | 70 | 3 | 17.3s |
| 4 | Uncommon | 70 | 3.5 | 17.3s |
| 5 | Legendary | 70 | 4 | 17.3s |

## Oakskin

`irons_spellbooks:oakskin` · Instant · cooldown 70 s

> The great power of oak infuses itself into your skin, granting damage reduction of any incoming damage for a duration.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage Reduction | Speed | Effect Length |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 30 | +15% | -20% | 8s |
| 2 | Common | 40 | +20% | -20% | 9.1s |
| 3 | Common | 50 | +25% | -20% | 10.4s |
| 4 | Common | 60 | +30% | -20% | 11.6s |
| 5 | Common | 70 | +35% | -20% | 12.8s |
| 6 | Uncommon | 80 | +40% | -20% | 14s |
| 7 | Uncommon | 90 | +45% | -20% | 15.1s |
| 8 | Legendary | 100 | +50% | -20% | 16.3s |

## Poison Arrow

`irons_spellbooks:poison_arrow` · Long cast · cooldown 17 s

> Charge a powerful arrow, imbued with poison magic, that will release a poisonous cloud upon impact

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | AOE Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 80 | 1 s | 2.8 | 0.5 |
| 2 | Common | 90 | 1 s | 3.4 | 0.6 |
| 3 | Common | 100 | 1 s | 4 | 0.7 |
| 4 | Common | 110 | 1 s | 4.6 | 0.8 |
| 5 | Common | 120 | 1 s | 5.2 | 0.9 |
| 6 | Common | 130 | 1 s | 5.7 | 1 |
| 7 | Common | 140 | 1 s | 6.3 | 1.1 |
| 8 | Uncommon | 150 | 1 s | 6.9 | 1.2 |
| 9 | Rare | 160 | 1 s | 7.5 | 1.3 |
| 10 | Legendary | 170 | 1 s | 8.1 | 1.5 |

## Poison Splash

`irons_spellbooks:poison_splash` · Long cast · cooldown 25 s

> Around a targeted creature or block, conjure a wave of poisonous magic that splashes down, damaging creatures hit and leaving behind a poisonous cloud

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Effect Length |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 0.75 s | 4.63 | 7s |
| 2 | Uncommon | 100 | 0.75 s | 5.21 | 9s |
| 3 | Uncommon | 120 | 0.75 s | 5.79 | 11s |
| 4 | Uncommon | 140 | 0.75 s | 6.37 | 13s |
| 5 | Uncommon | 160 | 0.75 s | 6.96 | 15s |
| 6 | Rare | 180 | 0.75 s | 7.53 | 17s |
| 7 | Rare | 200 | 0.75 s | 8.11 | 19s |
| 8 | Rare | 220 | 0.75 s | 8.69 | 21s |
| 9 | Epic | 240 | 0.75 s | 9.27 | 23s |
| 10 | Legendary | 260 | 0.75 s | 9.85 | 25s |

## Poison Spray

`irons_spellbooks:poison_breath` · Continuous · cooldown 17 s

> Spew forth a cone of poison, damaging and poisoning creatures in its reach

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

## Primal Pack

`traveloptics:primal_pack` · Long cast · cooldown 480 s

> Summon Vallumraptors and Tremorsaurus to fight by your side. Can only be obtained by defeating Vallumraptors and Tremorsaurus.

**Obtained from:** Dropped by Tremorsaurus and Vallumraptor.

| Level | Rarity | Mana | Cast time | Summons | Vallumraptor HP | Vallumraptor Damage | Tremorsaurus HP | Tremorsaurus Damage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 150 | 4 s | Vallumraptor, Tremorsaurus [2] | 10.0 | 1 | 70.0 | 6 |
| 2 | Rare | 225 | 4 s | Vallumraptor, Tremorsaurus [3] | 15.0 | 2 | 90.0 | 8 |
| 3 | Rare | 300 | 4 s | Vallumraptor, Tremorsaurus [4] | 20.0 | 3 | 110.0 | 10 |
| 4 | Epic | 375 | 4 s | Vallumraptor, Tremorsaurus [5] | 25.0 | 4 | 130.0 | 12 |
| 5 | Legendary | 450 | 4 s | Vallumraptor, Tremorsaurus [6] | 30.0 | 5 | 150.0 | 14 |

## Primordial Steed

`traveloptics:primordial_steed` · Long cast · cooldown 900 s

> Summon a Atlatitan that will follow you around, let you ride. Also protect, and fight for you. Can only be obtained by defeating Luxtructosaurus.

**Obtained from:** Dropped by [[bosses/act-iii/luxtructosaurus|Luxtructosaurus]].

- Summons: Atlatitan

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 200 | 5 s | 130.0 | 6 |
| 2 | Legendary | 400 | 5 s | 190.0 | 8 |
| 3 | Legendary | 600 | 5 s | 250.0 | 10 |

## Root

`irons_spellbooks:root` · Long cast · cooldown 50 s

> Around a targeted creature, sprout magical roots than entangle them and completely prevent non-magical movement

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 125 | 2 s | 2s |
| 2 | Uncommon | 134 | 2 s | 2.4s |
| 3 | Uncommon | 142 | 2 s | 2.7s |
| 4 | Uncommon | 151 | 2 s | 3.2s |
| 5 | Uncommon | 159 | 2 s | 3.5s |
| 6 | Rare | 168 | 2 s | 4s |
| 7 | Rare | 176 | 2 s | 4.4s |
| 8 | Rare | 184 | 2 s | 4.8s |
| 9 | Epic | 193 | 2 s | 5.1s |
| 10 | Legendary | 201 | 2 s | 5.5s |

## Stele Cascade

`traveloptics:stele_cascade` · Long cast · cooldown 22 s

> Summons Ancient Desert Stele in a radius, crashing down and dealing damage.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/ancient-remnant|Ancient Remnant]]; imbued in [[item:traveloptics:scourge_of_the_sands]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Ring Count | Row Count |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 35 | 1 s | 8 | 1 | 2 |
| 2 | Common | 60 | 1 s | 12 | 2 | 4 |
| 3 | Common | 85 | 1 s | 16 | 3 | 6 |
| 4 | Common | 110 | 1 s | 20 | 4 | 8 |
| 5 | Uncommon | 135 | 1 s | 24 | 5 | 10 |
| 6 | Legendary | 160 | 1 s | 28 | 6 | 12 |
