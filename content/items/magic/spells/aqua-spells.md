---
{
  "title": "Aqua Spells",
  "summary": "The Aqua spell school: 17 spells with mana costs, cooldowns and per-level values."
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

**Aqua Spells** lists the 17 spells of the Aqua school (`traveloptics:aqua`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:alexscaves:pearl]]. Only spells marked "Scroll Forge" below can be crafted.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Aqua Missiles]] | Continuous | 25 s | 5 | 5–17 | Loot, Item, Scroll Forge |
| [[#Bubble Spray]] | Continuous | 13 s | 10 | 5–14 | Loot, Scroll Forge |
| [[#Coral Barrage]] | Instant | 16 s | 5 | 80–100 | Loot, Boss drop, Scroll Forge |
| [[#Echo Of The Abyss]] | Long cast | 540 s | 2 | 300–550 | Boss drop |
| [[#Flood Slash]] | Instant | 12 s | 5 | 20–40 | Loot, Scroll Forge |
| [[#Floodgate]] | Instant | 1800 s | 8 | 45–150 | Loot, Scroll Forge |
| [[#Herald Of Acropolis]] | Long cast | 600 s | 3 | 250–650 | Boss drop |
| [[#Hydroshot]] | Instant | 1 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Jet Steam]] | Instant | 10 s | 1 | 50 | Loot, Scroll Forge |
| [[#Overflow]] | Long cast | 60 s | 4 | 40–130 | Loot, Scroll Forge |
| [[#Rainfall]] | Long cast | 60 s | 3 | 40–80 | Loot, Scroll Forge |
| [[#Serpentide]] | Long cast | 35 s | 4 | 45–195 | Boss drop |
| [[#Skypiercer]] | Long cast | 60 s | 1 | 140 | Item, Scroll Forge |
| [[#The Howling Tempest]] | Continuous | 60 s | 3 | 5–11 | Boss drop |
| [[#Tidal Grasp]] | Long cast | 20 s | 6 | 40–240 | Loot, Scroll Forge |
| [[#Tsunami]] | Long cast | 25 s | 4 | 80–245 | Loot, Scroll Forge |
| [[#Vortex Of The Deep]] | Long cast | 60 s | 6 | 100–600 | Loot, Scroll Forge |

## Aqua Missiles

`traveloptics:aqua_missiles` · Continuous · cooldown 25 s

> Fires a rapid succession of water bolts that deal damage and home in on nearby entities.

**Obtained from:** Random scroll loot; inscribed in [[item:traveloptics:codex_of_the_crushing_depths]] (level 6); the Scroll Forge.

| Level | Rarity | Mana | Duration | Multi Hit AoE Damage | Seeking Distance | AoE Radius | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 5 | 6 s | 5.5 | 20 | 3 | 1 | 10% | 5% |
| 2 | Rare | 8 | 6 s | 7 | 25 | 3 | 1 | 10% | 5% |
| 3 | Rare | 11 | 6 s | 8.5 | 30 | 3 | 1 | 10% | 5% |
| 4 | Epic | 14 | 6 s | 10 | 35 | 3 | 1 | 10% | 5% |
| 5 | Legendary | 17 | 6 s | 11.5 | 40 | 3 | 1 | 10% | 5% |

## Bubble Spray

`traveloptics:bubble_spray` · Continuous · cooldown 13 s

> Sprays a stream of bubbles that deals damage, slows affected entities, and applies the Wet effect.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 5 | 5 s | 1.79 | 3 | 20% | 10% |
| 2 | Common | 6 | 5 s | 2.59 | 3 | 20% | 10% |
| 3 | Common | 7 | 5 s | 3.4 | 3 | 20% | 10% |
| 4 | Common | 8 | 5 s | 4.19 | 3 | 20% | 10% |
| 5 | Common | 9 | 5 s | 5 | 3 | 20% | 10% |
| 6 | Common | 10 | 5 s | 5.8 | 3 | 20% | 10% |
| 7 | Common | 11 | 5 s | 6.59 | 3 | 20% | 10% |
| 8 | Uncommon | 12 | 5 s | 7.4 | 3 | 20% | 10% |
| 9 | Rare | 13 | 5 s | 8.2 | 3 | 20% | 10% |
| 10 | Legendary | 14 | 5 s | 9 | 3 | 20% | 10% |

## Coral Barrage

`traveloptics:coral_barrage` · Instant · cooldown 16 s

> Cast to mark targets, unleashing a barrage of coral bolts at the end of recasting. Bolts damage, pierce, and shatter into shrapnel, dealing AoE damage within a 2-block radius.

**Obtained from:** Random scroll loot; dropped by [[bosses/optional-and-world/cataclysm-minibosses|Coralssus]] and Deepling Priest; the Scroll Forge.

| Level | Rarity | Mana | Damage | Projectiles |
| --- | --- | --- | --- | --- |
| 1 | Rare | 80 | 4 | 5 |
| 2 | Rare | 85 | 6 | 5 |
| 3 | Rare | 90 | 8 | 5 |
| 4 | Epic | 95 | 10 | 5 |
| 5 | Legendary | 100 | 12 | 5 |

## Echo Of The Abyss

`traveloptics:echo_of_the_abyss` · Long cast · cooldown 540 s

> Summons a Hullbreaker to fight and protect the caster. Can be used as an underwater mount, granting water breathing while ridden. Can only be obtained from defeating Hullbreaker.

**Obtained from:** Dropped by [[bosses/act-iii/hullbreaker|Hullbreaker]].

- Summons: Hullbreaker

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 300 | 4.5 s | 120.0 | 13 |
| 2 | Legendary | 550 | 4.5 s | 180.0 | 15 |

## Flood Slash

`traveloptics:flood_slash` · Instant · cooldown 12 s

> Unleashes a aqua-infused slash projectile that deals damage and converts damage dealt into Mana for the caster. Hitting multiple entities increases the caster's Mana regeneration temporarily.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Mana Steal | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 20 | 11.19 | 60.0% | 1 | 10% | 5% |
| 2 | Rare | 25 | 12.39 | 70.0% | 1 | 10% | 5% |
| 3 | Rare | 30 | 13.6 | 80.0% | 1 | 10% | 5% |
| 4 | Epic | 35 | 14.8 | 90.0% | 1 | 10% | 5% |
| 5 | Legendary | 40 | 16 | 100.0% | 1 | 10% | 5% |

## Floodgate

`traveloptics:floodgate` · Instant · cooldown 1800 s

> Imposes a damage cap on the caster, ensuring that any incoming damage exceeding the threshold is reduced to the cap. When damage surpasses the threshold, waves surge outward in all directions, dealing damage.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage Cap | Damage | Effect Duration | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 45 | 30.0% Max health | 2 | 12s | 1 | 10% | 5% |
| 2 | Epic | 60 | 30.0% Max health | 3 | 14s | 1 | 10% | 5% |
| 3 | Epic | 75 | 30.0% Max health | 3 | 16s | 1 | 10% | 5% |
| 4 | Epic | 90 | 30.0% Max health | 4 | 18s | 1 | 10% | 5% |
| 5 | Epic | 105 | 30.0% Max health | 5 | 20s | 1 | 10% | 5% |
| 6 | Legendary | 120 | 30.0% Max health | 5 | 22s | 1 | 10% | 5% |
| 7 | Legendary | 135 | 30.0% Max health | 6 | 24s | 1 | 10% | 5% |
| 8 | Legendary | 150 | 30.0% Max health | 6 | 26s | 1 | 10% | 5% |

## Herald Of Acropolis

`traveloptics:herald_of_acropolis` · Long cast · cooldown 600 s

> Conjures a loyal Clawdian to fight and protect you. Can only be obtained by defeating a Clawdian.

**Obtained from:** Dropped by [[bosses/optional-and-world/cataclysm-minibosses|Clawdian]].

- Summons: Clawdian

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 250 | 5 s | 125.0 | 10.5 |
| 2 | Legendary | 450 | 5 s | 175.0 | 12.3 |
| 3 | Legendary | 650 | 5 s | 225.0 | 14 |

## Hydroshot

`traveloptics:hydroshot` · Instant · cooldown 1 s

> Fires a small water bolt that deals damage, slows enemies, and applies the wet effect.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Slowness Amplifier | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 10 | 6 | 0 | 0 | 5% | 2.5% |
| 2 | Common | 12 | 6.5 | 0 | 0 | 5% | 2.5% |
| 3 | Common | 14 | 7 | 0 | 0 | 5% | 2.5% |
| 4 | Common | 16 | 7.5 | 0 | 0 | 5% | 2.5% |
| 5 | Common | 18 | 8 | 0 | 0 | 5% | 2.5% |
| 6 | Common | 20 | 8.5 | 0 | 0 | 5% | 2.5% |
| 7 | Common | 22 | 9 | 0 | 0 | 5% | 2.5% |
| 8 | Uncommon | 24 | 9.5 | 0 | 0 | 5% | 2.5% |
| 9 | Rare | 26 | 10 | 0 | 0 | 5% | 2.5% |
| 10 | Legendary | 28 | 10.5 | 1 | 0 | 5% | 2.5% |

## Jet Steam

`traveloptics:jet_steam` · Instant · cooldown 10 s

> Generates a powerful surge that propels the caster at high speed while using elytra or swimming underwater, granting temporary water breathing.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Boost Duration: Fall Flying | Boost Duration: Swimming | Recast Count |
| --- | --- | --- | --- | --- | --- |
| 1 | Epic | 50 | 2s | 4s | 5 |

## Overflow

`traveloptics:overflow` · Long cast · cooldown 60 s

> Causes water to erupt from the ground that spreads into a wide pool. The pool continuously applies Aqua Spell Power scaling Wet effect to anything inside it. The Wet effect grows stronger over the spell’s duration, reaching its maximum intensity as the spell ends.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Duration | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 40 | 0.85 s | 10 | 15s | 3-9 | 20% - 50% | 10% - 25% |
| 2 | Uncommon | 70 | 0.85 s | 15 | 20s | 3-9 | 20% - 50% | 10% - 25% |
| 3 | Rare | 100 | 0.85 s | 20 | 25s | 3-9 | 20% - 50% | 10% - 25% |
| 4 | Legendary | 130 | 0.85 s | 25 | 30s | 3-9 | 20% - 50% | 10% - 25% |

## Rainfall

`traveloptics:rainfall` · Long cast · cooldown 60 s

> Calls down a rainstorm that grants immunity to negative effects for the caster and applies the Wet effect to everyone within.

**Obtained from:** Random scroll loot; the Scroll Forge.

- Cleanses the caster

| Level | Rarity | Mana | Cast time | Block Radius | Harmful Effect Immunity Duration | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 40 | 2 s | 4 | 5s | 2 | 15% | 7.5% |
| 2 | Epic | 60 | 2 s | 6 | 5s | 4 | 25% | 12.5% |
| 3 | Legendary | 80 | 2 s | 8 | 5s | 6 | 35% | 17.5% |

## Serpentide

`traveloptics:serpentide` · Long cast · cooldown 35 s

> Summons a cascade of Storm Serpents that strike down in a straight line one after another, dealing damage and applying Wet effect. Damage ignores i-frames. Can only be obtained by defeating Scylla.

**Obtained from:** Dropped by [[bosses/act-iii/scylla|Scylla]].

| Level | Rarity | Mana | Cast time | Multi Hit AoE Damage | Storm Serpents | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 45 | 1 s | 3.75 | 4 | 0 | 5% | 2.5% |
| 2 | Rare | 95 | 1 s | 7.5 | 6 | 1 | 10% | 5% |
| 3 | Epic | 145 | 1 s | 11.25 | 8 | 1 | 10% | 5% |
| 4 | Legendary | 195 | 1 s | 15 | 10 | 2 | 15% | 7.5% |

## Skypiercer

`traveloptics:skypiercer` · Long cast · cooldown 60 s

> Calls down a phantom Trident Of Eternal Maelstrom from the sky, dealing impact damage in an area. The trident remains, pulsing for 50% of the impact damage at intervals and inflicting Tidal Torment, causing thrown Trident Of Eternal Maelstrom to explode in an area and slowing affected enemies. Requires Trident Of The Eternal Maelstrom to cast this spell.

**Obtained from:** Imbued in [[item:traveloptics:trident_of_the_eternal_maelstrom]] (level 1); the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Damage | Duration | Applies Tidal Torment | Applies Tidal Torment: Slowness |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 140 | 0.6 s | 12 | 25 | 12s | 1 | 20% |

## The Howling Tempest

`traveloptics:the_howling_tempest` · Continuous · cooldown 60 s

> After a 3s charge, conjures a raging tempest that rains down water spears, dealing damage and applying Wet effect. Each hit has a 50% chance to either increase the Wet amplifier (up to 10x) or extend its duration by 2s. Can only be obtained by defeating Scylla.

**Obtained from:** Dropped by [[bosses/act-iii/scylla|Scylla]].

| Level | Rarity | Mana | Duration | Range | Multi Hit Direct Damage | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 5 | 10 s | 32 | 10 | 1 | 10% | 5% |
| 2 | Epic | 8 | 10 s | 32 | 15 | 1 | 10% | 5% |
| 3 | Legendary | 11 | 10 s | 32 | 20 | 1 | 10% | 5% |

## Tidal Grasp

`traveloptics:tidal_grasp` · Long cast · cooldown 20 s

> Pulls a targeted entity toward the caster, striking them with force to deal damage while applying a Stun and the Wet effect.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage | Stun Duration | Range | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 40 | 0.75 s | 13 | 3s | 30 | 2 | 15% | 7.5% |
| 2 | Uncommon | 80 | 0.75 s | 16 | 3s | 30 | 2 | 15% | 7.5% |
| 3 | Uncommon | 120 | 0.75 s | 19 | 3s | 30 | 2 | 15% | 7.5% |
| 4 | Rare | 160 | 0.75 s | 22 | 3s | 30 | 2 | 15% | 7.5% |
| 5 | Rare | 200 | 0.75 s | 25 | 3s | 30 | 2 | 15% | 7.5% |
| 6 | Legendary | 240 | 0.75 s | 28 | 3s | 30 | 2 | 15% | 7.5% |

## Tsunami

`traveloptics:tsunami` · Long cast · cooldown 25 s

> Call forth an unstoppable tide that surges forward, slamming into enemies, dealing damage, sweeping them away, and applying wet effect.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Single Hit AoE Damage | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 80 | 0.75 s | 20 | 3 | 20% | 10% |
| 2 | Rare | 135 | 0.75 s | 25 | 4 | 25% | 12.5% |
| 3 | Epic | 190 | 0.75 s | 30 | 5 | 30% | 15% |
| 4 | Legendary | 245 | 0.75 s | 35 | 6 | 35% | 17.5% |

## Vortex Of The Deep

`traveloptics:vortex_of_the_deep` · Long cast · cooldown 60 s

> Conjures a massive water vortex that pulls entities toward its center, slowing them and applying Wet effect. The vortex periodically discharges Boltstrikes to devastate those within it's radius.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | AoE Damage | Boltstrike Damage | Block Radius | Duration | Applies Wet | Applies Wet: Lightning Res Shred | Applies Wet: Ice Res Shred |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 100 | 2 s | 3.5 | 7 | 10 | 20s | 1 | 10% | 5% |
| 2 | Legendary | 200 | 2 s | 5 | 10 | 12 | 20s | 1 | 10% | 5% |
| 3 | Legendary | 300 | 2 s | 6.5 | 13 | 14 | 20s | 1 | 10% | 5% |
| 4 | Legendary | 400 | 2 s | 8 | 16 | 16 | 20s | 1 | 10% | 5% |
| 5 | Legendary | 500 | 2 s | 9.5 | 19 | 18 | 20s | 1 | 10% | 5% |
| 6 | Legendary | 600 | 2 s | 11 | 22 | 20 | 20s | 1 | 10% | 5% |
