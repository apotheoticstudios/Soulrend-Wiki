---
{
  "title": "Lightning Spells",
  "summary": "The Lightning spell school: 17 spells with mana costs, cooldowns and per-level values."
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

**Lightning Spells** lists the 17 spells of the Lightning school (`irons_spellbooks:lightning`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:irons_spellbooks:lightning_bottle]]. Only spells marked "Scroll Forge" below can be crafted.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Ascension]] | Instant | 17 s | 10 | 100–118 | Loot, Scroll Forge |
| [[#Ball Lightning]] | Instant | 3.5 s | 10 | 60–168 | Loot, Scroll Forge |
| [[#Chain Lightning]] | Instant | 35 s | 10 | 75–264 | Loot, Scroll Forge |
| [[#Charge]] | Instant | 50 s | 3 | 100–200 | Loot, Scroll Forge |
| [[#Death Laser]] | Long cast | 16 s | 3 | 80–180 | Loot, Boss drop, Scroll Forge |
| [[#Electric Rain]] | Long cast | 20 s | 10 | 25–88 | — |
| [[#Electrocute]] | Continuous | 17 s | 10 | 6–24 | Loot, Scroll Forge |
| [[#EM-Pulse]] | Long cast | 45 s | 5 | 0–200 | Loot, Boss drop, Chest, Item, Scroll Forge |
| [[#Galena Shatter]] | Long cast | 20 s | 1 | 200 | Item, Scroll Forge |
| [[#Lightning Bolt]] | Instant | 30 s | 10 | 150–420 | Loot, Scroll Forge |
| [[#Lightning Lance]] | Long cast | 8 s | 10 | 100–280 | Loot, Item, Scroll Forge |
| [[#Magnetron Deployment]] | Long cast | 270 s | 1 | 250 | Boss drop |
| [[#Mechanized Predators]] | Long cast | 540 s | 5 | 100–500 | Boss drop |
| [[#Rapid Laser]] | Continuous | 12 s | 10 | 4–13 | Loot, Boss drop, Item, Scroll Forge |
| [[#Shockwave]] | Long cast | 30 s | 8 | 140–210 | Loot, Scroll Forge |
| [[#Thunderstorm]] | Long cast | 140 s | 8 | 175–350 | Loot, Scroll Forge |
| [[#Volt Strike]] | Instant | 10 s | 10 | 30–75 | Loot, Item, Scroll Forge |

## Ascension

`irons_spellbooks:ascension` · Instant · cooldown 17 s

> Cast to strike lightning at your feet and ascend quickly into the air, and gain reduced gravity for a short duration. The lightning bolt deals damage and knocks back creatures struck.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Rare | 100 | 2.8 |
| 2 | Rare | 102 | 3.4 |
| 3 | Rare | 104 | 4 |
| 4 | Rare | 106 | 4.6 |
| 5 | Rare | 108 | 5.2 |
| 6 | Rare | 110 | 5.7 |
| 7 | Rare | 112 | 6.3 |
| 8 | Epic | 114 | 6.9 |
| 9 | Epic | 116 | 7.5 |
| 10 | Legendary | 118 | 8.1 |

## Ball Lightning

`irons_spellbooks:ball_lightning` · Instant · cooldown 3.5 s

> Conjure an orb of lightning that slowly moves forward, damaging creatures it phases through and bouncing off blocks.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 60 | 2.75 |
| 2 | Common | 72 | 3.02 |
| 3 | Common | 84 | 3.3 |
| 4 | Common | 96 | 3.57 |
| 5 | Common | 108 | 3.85 |
| 6 | Common | 120 | 4.12 |
| 7 | Common | 132 | 4.4 |
| 8 | Uncommon | 144 | 4.67 |
| 9 | Rare | 156 | 4.95 |
| 10 | Legendary | 168 | 5.22 |

## Chain Lightning

`irons_spellbooks:chain_lightning` · Instant · cooldown 35 s

> Start a chain of lightning from a targeted creature, causing waves of zapping magic to cascade to nearby creatures

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Max Targets | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 75 | 2.51 | 4 | 2.2 |
| 2 | Rare | 96 | 2.93 | 5 | 2.4 |
| 3 | Rare | 117 | 3.35 | 6 | 2.6 |
| 4 | Rare | 138 | 3.77 | 7 | 2.8 |
| 5 | Rare | 159 | 4.19 | 8 | 3 |
| 6 | Rare | 180 | 4.61 | 9 | 3.3 |
| 7 | Rare | 201 | 5.03 | 10 | 3.5 |
| 8 | Epic | 222 | 5.46 | 11 | 3.7 |
| 9 | Epic | 243 | 5.87 | 12 | 3.9 |
| 10 | Legendary | 264 | 6.29 | 13 | 4.1 |

## Charge

`irons_spellbooks:charge` · Instant · cooldown 50 s

> Imbue yourself with the power of lightning, increasing your speed and combat abilities.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Effect Length | Speed | Attack Damage | Spell Power |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 17.3s | +20% | +10% | +5% |
| 2 | Rare | 150 | 22s | +40% | +20% | +10% |
| 3 | Legendary | 200 | 26.6s | +60% | +30% | +15% |

## Death Laser

`traveloptics:death_laser` · Long cast · cooldown 16 s

> Cast to shoot The Harbinger Laser beam in a straight line. While active, caster cannot move or look around.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-harbinger|The Harbinger]]; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 80 | 1 s | 7.5 |
| 2 | Rare | 130 | 1 s | 15 |
| 3 | Legendary | 180 | 1 s | 22.5 |

## Electric Rain

`alshanex_familiars:megido` · Long cast · cooldown 20 s

> Summon the wrath of the heavens, striking with lightnings every entity that dares to come around.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Block Range |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 25 | 0.5 s | 6 | 10 | 15 |
| 2 | Uncommon | 32 | 0.5 s | 7 | 10 | 15 |
| 3 | Uncommon | 39 | 0.5 s | 8 | 10 | 15 |
| 4 | Uncommon | 46 | 0.5 s | 9 | 10 | 15 |
| 5 | Uncommon | 53 | 0.5 s | 10 | 10 | 15 |
| 6 | Rare | 60 | 0.5 s | 11 | 10 | 15 |
| 7 | Rare | 67 | 0.5 s | 12 | 10 | 15 |
| 8 | Rare | 74 | 0.5 s | 13 | 10 | 15 |
| 9 | Epic | 81 | 0.5 s | 14 | 10 | 15 |
| 10 | Legendary | 88 | 0.5 s | 15 | 10 | 15 |

## Electrocute

`irons_spellbooks:electrocute` · Continuous · cooldown 17 s

> Hold to manifest a cone of electrical energy, damaging creatures in its path.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 6 | 5 s | 1.43 |
| 2 | Common | 8 | 5 s | 1.87 |
| 3 | Common | 10 | 5 s | 2.3 |
| 4 | Common | 12 | 5 s | 2.74 |
| 5 | Common | 14 | 5 s | 3.17 |
| 6 | Common | 16 | 5 s | 3.61 |
| 7 | Common | 18 | 5 s | 4.04 |
| 8 | Uncommon | 20 | 5 s | 4.48 |
| 9 | Rare | 22 | 5 s | 4.91 |
| 10 | Legendary | 24 | 5 s | 5.34 |

## EM-Pulse

`traveloptics:em_pulse` · Long cast · cooldown 45 s

> Cast to stun nearby entities for a short duration. Stunned enemies has a visual indicator.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-harbinger|The Harbinger]]; found in Magnetic ruins chests; imbued in [[item:traveloptics:harbingers_wrath]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Stun Duration | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 0 | 1 s | 1s | 4 |
| 2 | Common | 50 | 1 s | 2s | 6 |
| 3 | Common | 100 | 1 s | 3s | 8 |
| 4 | Uncommon | 150 | 1 s | 4s | 10 |
| 5 | Legendary | 200 | 1 s | 5s | 12 |

## Galena Shatter

`traveloptics:galena_shatter` · Long cast · cooldown 20 s

> Slams the ground with Galena energy, releasing a magnetic shockwave that damages enemies and converts any Scarlet or Azure Charges into corresponding Marks. Marked targets take continuous damage over 1.5s, ignoring i-frames. When the effect ends, a final magnetic burst triggers, pulling opposite-marked entities and pushing away those with the same mark. Requires Galenic Polarizer to cast this spell.

**Obtained from:** Imbued in [[item:traveloptics:galenic_polarizer]] (level 1); the Scroll Forge.

- Evo 3: Crouch cast to gain additional boosts

| Level | Rarity | Mana | Cast time | Single Hit AoE Damage | Damage Per Magnetic Charge | Block Radius |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 200 | 0.8 s | 2 | 3 | 12.0 |

## Lightning Bolt

`irons_spellbooks:lightning_bolt` · Instant · cooldown 30 s

> Down from the heavens, summon a bolt of lightning.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Epic | 150 | 6 |
| 2 | Epic | 180 | 7.2 |
| 3 | Epic | 210 | 8.4 |
| 4 | Epic | 240 | 9.6 |
| 5 | Epic | 270 | 10.8 |
| 6 | Epic | 300 | 12 |
| 7 | Legendary | 330 | 13.2 |
| 8 | Legendary | 360 | 14.4 |
| 9 | Legendary | 390 | 15.6 |
| 10 | Legendary | 420 | 16.8 |

## Lightning Lance

`irons_spellbooks:lightning_lance` · Long cast · cooldown 8 s

> Hold to charge a spear made of lightning. Release to throw it like a javelin, dealing high damage to the creature it hits.

**Obtained from:** Random scroll loot; imbued in [[item:traveloptics:charged_sands]] (level 10); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 2 s | 8.1 |
| 2 | Uncommon | 120 | 2 s | 9.2 |
| 3 | Uncommon | 140 | 2 s | 10.4 |
| 4 | Uncommon | 160 | 2 s | 11.5 |
| 5 | Uncommon | 180 | 2 s | 12.7 |
| 6 | Rare | 200 | 2 s | 13.9 |
| 7 | Rare | 220 | 2 s | 15 |
| 8 | Rare | 240 | 2 s | 16.2 |
| 9 | Epic | 260 | 2 s | 17.3 |
| 10 | Legendary | 280 | 2 s | 18.5 |

## Magnetron Deployment

`traveloptics:magnetron_deployment` · Long cast · cooldown 270 s

> Cast to deploy a Magnetron that will follow, protect, and fight for you. Can only be obtained by defeating Magnetron.

**Obtained from:** Dropped by [[bosses/act-iii/magnetron|Magnetron]].

- Summons: Magnetron

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Epic | 250 | 3 s |

## Mechanized Predators

`traveloptics:mechanized_predator` · Long cast · cooldown 540 s

> Cast to deploy Watchers and The Prowler that will follow, protect, and fight for you. Can only be obtained by defeating The Watcher and The Prowler.

**Obtained from:** Dropped by [[bosses/optional-and-world/cataclysm-minibosses|The Prowler]] and [[bosses/optional-and-world/cataclysm-minibosses|The Watcher]].

- Summons: The Watcher, The Prowler

| Level | Rarity | Mana | Cast time | Watcher HP | Watcher Damage | Prowler HP | Prowler Damage |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 4 s | 5.0 | 1 | 80.0 | 7 |
| 2 | Rare | 200 | 4 s | 10.0 | 2 | 100.0 | 9 |
| 3 | Rare | 300 | 4 s | 15.0 | 3 | 120.0 | 11 |
| 4 | Epic | 400 | 4 s | 20.0 | 4 | 140.0 | 13 |
| 5 | Legendary | 500 | 4 s | 25.0 | 5 | 160.0 | 15 |

## Rapid Laser

`traveloptics:rapid_laser` · Continuous · cooldown 12 s

> Continuously shoots Harbinger's pew-pew laser to targeted entities.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-harbinger|The Harbinger]]; imbued in [[item:traveloptics:mechanized_wraithblade]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Duration | Direct Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 4 | 5 s | 6 |
| 2 | Common | 5 | 5 s | 7 |
| 3 | Common | 6 | 5 s | 8 |
| 4 | Common | 7 | 5 s | 9 |
| 5 | Common | 8 | 5 s | 10 |
| 6 | Common | 9 | 5 s | 11 |
| 7 | Common | 10 | 5 s | 12 |
| 8 | Uncommon | 11 | 5 s | 13 |
| 9 | Rare | 12 | 5 s | 14 |
| 10 | Legendary | 13 | 5 s | 15 |

## Shockwave

`irons_spellbooks:shockwave` · Long cast · cooldown 30 s

> Coalesce a surge of electrical power, and unleash it in a devastating shockwave, blasting exposed creatures.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 140 | 0.8 s | 7.48 | 9 |
| 2 | Common | 150 | 0.8 s | 7.91 | 10 |
| 3 | Common | 160 | 0.8 s | 8.35 | 11 |
| 4 | Common | 170 | 0.8 s | 8.78 | 12 |
| 5 | Common | 180 | 0.8 s | 9.22 | 13 |
| 6 | Uncommon | 190 | 0.8 s | 9.65 | 14 |
| 7 | Uncommon | 200 | 0.8 s | 10.09 | 15 |
| 8 | Legendary | 210 | 0.8 s | 10.52 | 16 |

## Thunderstorm

`irons_spellbooks:thunderstorm` · Long cast · cooldown 140 s

> Cast to conjure a thunderstorm centered around yourself, which strikes nearby creatures within sight with a small bolt of lightning every 2 seconds for the spell's duration.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Block Radius | Effect Length |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 175 | 2 s | 7.5 | 20 | 20s |
| 2 | Rare | 200 | 2 s | 7.5 | 20 | 21s |
| 3 | Rare | 225 | 2 s | 8 | 20 | 22s |
| 4 | Rare | 250 | 2 s | 8 | 20 | 23s |
| 5 | Rare | 275 | 2 s | 8.5 | 20 | 24s |
| 6 | Epic | 300 | 2 s | 8.5 | 20 | 25s |
| 7 | Epic | 325 | 2 s | 9 | 20 | 26s |
| 8 | Legendary | 350 | 2 s | 9 | 20 | 27s |

## Volt Strike

`irons_spellbooks:volt_strike` · Instant · cooldown 10 s

> Leap forward in a spinning voltaic attack, striking the first creature or surface you hit, and dealing a residual blast in a small area around around the impact.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:twilight_gale]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 30 | 6 |
| 2 | Common | 35 | 7 |
| 3 | Common | 40 | 8 |
| 4 | Common | 45 | 9 |
| 5 | Common | 50 | 10 |
| 6 | Common | 55 | 11 |
| 7 | Common | 60 | 12 |
| 8 | Uncommon | 65 | 13 |
| 9 | Rare | 70 | 14 |
| 10 | Legendary | 75 | 15 |
