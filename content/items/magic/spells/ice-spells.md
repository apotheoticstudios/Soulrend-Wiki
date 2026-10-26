---
{
  "title": "Ice Spells",
  "summary": "The Ice spell school: 18 spells with mana costs, cooldowns and per-level values."
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

**Ice Spells** lists the 18 spells of the Ice school (`irons_spellbooks:ice`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:irons_spellbooks:frozen_bone]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Ice scrolls** drop from Cryomancer.
- **Random Ice scrolls** are in Ice spider den chests and Mountain tower chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Axe Of The Doomed]] | Long cast | 360 s | 3 | 120–320 | Boss drop |
| [[#Cone of Cold]] | Continuous | 17 s | 10 | 10–28 | Loot, Scroll Forge |
| [[#Cursed Revenants]] | Long cast | 150 s | 5 | 40–160 | Loot, Chest, Scroll Forge |
| [[#Despair]] | Instant | 18 s | 10 | 18–180 | Loot, Boss drop, Chest, Scroll Forge |
| [[#Frost Step]] | Instant | 12 s | 8 | 30–100 | Loot, Scroll Forge |
| [[#Frostbite]] | Instant | 0 s | 5 | 160–240 | Loot, Item, Scroll Forge |
| [[#Frostwave]] | Long cast | 50 s | 8 | 100–170 | Loot, Scroll Forge |
| [[#Halberd Horizon]] | Long cast | 20 s | 6 | 30–230 | Boss drop, Item |
| [[#Ice Age]] | Continuous | 20 s | 10 | 5–14 | — |
| [[#Ice Block]] | Long cast | 17 s | 6 | 80–180 | Loot, Scroll Forge |
| [[#Ice Chamber]] | Long cast | 15 s | 5 | 25–85 | — |
| [[#Ice Spikes]] | Instant | 15 s | 10 | 30–120 | Loot, Scroll Forge |
| [[#Ice Tomb]] | Instant | 30 s | 8 | 30–135 | Loot, Scroll Forge |
| [[#Icicle]] | Instant | 2 s | 10 | 26–72 | Loot, Scroll Forge |
| [[#Ray of Frost]] | Instant | 17 s | 5 | 50–170 | Loot, Scroll Forge |
| [[#Snowball]] | Long cast | 12 s | 5 | 40–48 | Loot, Scroll Forge |
| [[#Sticky Steed Summon]] | Long cast | 1200 s | 3 | 500–900 | Boss drop |
| [[#Summon Polar Bear]] | Long cast | 200 s | 10 | 100–280 | Loot, Scroll Forge |

## Axe Of The Doomed

`traveloptics:axe_of_the_doomed` · Long cast · cooldown 360 s

> Summon a Aptrgangr to fight by your side and unleash devastating melee attacks upon your enemies. Can only be obtained by defeating Aptrgangr.

**Obtained from:** Dropped by [[bosses/optional-and-world/cataclysm-minibosses|Aptrgangr]].

- Summons: Aptrgangr

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 120 | 4 s | 70.0 | 14 |
| 2 | Legendary | 220 | 4 s | 115.0 | 16 |
| 3 | Legendary | 320 | 4 s | 160.0 | 18 |

## Cone of Cold

`irons_spellbooks:cone_of_cold` · Continuous · cooldown 17 s

> Hold to cast out a cone of cold energy, freezing creatures in its path.

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

## Cursed Revenants

`traveloptics:cursed_revenants` · Long cast · cooldown 150 s

> Cast to summon random Draugr variants that'll protect you and fight for you.

**Obtained from:** Random scroll loot; found in Frosted prison treasure chests; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Chance to Summon | HP | Damage |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 40 | 2.25 s | Draugr, Royal Draugr, Elite Draugr [1] | 8.0 | 0.8 |
| 2 | Common | 70 | 2.25 s | Draugr, Royal Draugr, Elite Draugr [2] | 13.0 | 1.6 |
| 3 | Common | 100 | 2.25 s | Draugr, Royal Draugr, Elite Draugr [3] | 18.0 | 2.4 |
| 4 | Uncommon | 130 | 2.25 s | Draugr, Royal Draugr, Elite Draugr [4] | 23.0 | 3.2 |
| 5 | Legendary | 160 | 2.25 s | Draugr, Royal Draugr, Elite Draugr [5] | 28.0 | 4.0 |

## Despair

`traveloptics:despair` · Instant · cooldown 18 s

> Launches a magical Axe Blade forward on the look direction piercing through entities in its path. Deals damage to all caught in its trajectory.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/maledictus|Maledictus]]; found in Frosted prison treasure chests; the Scroll Forge.

| Level | Rarity | Mana | Damage | Recast Count |
| --- | --- | --- | --- | --- |
| 1 | Common | 18 | 4.5 | 2 |
| 2 | Common | 36 | 6 | 3 |
| 3 | Common | 54 | 7.5 | 3 |
| 4 | Common | 72 | 9 | 4 |
| 5 | Common | 90 | 10.5 | 4 |
| 6 | Common | 108 | 12 | 5 |
| 7 | Common | 126 | 13.5 | 5 |
| 8 | Uncommon | 144 | 15 | 6 |
| 9 | Rare | 162 | 16.5 | 6 |
| 10 | Legendary | 180 | 18 | 7 |

## Frost Step

`irons_spellbooks:frost_step` · Instant · cooldown 12 s

> Teleport to where you are looking, leaving behind a shadow of ice. This shadow will take nearby aggro, and shatter into icicles after 5 seconds or upon taking any damage.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Block Range | Shatter Damage |
| --- | --- | --- | --- | --- |
| 1 | Rare | 30 | 9.8 | 2.3 |
| 2 | Rare | 40 | 10.7 | 2.8 |
| 3 | Rare | 50 | 11.6 | 3.4 |
| 4 | Rare | 60 | 12.4 | 4 |
| 5 | Rare | 70 | 13.3 | 4.6 |
| 6 | Epic | 80 | 14.2 | 5.2 |
| 7 | Epic | 90 | 15 | 5.7 |
| 8 | Legendary | 100 | 15.9 | 6.3 |

## Frostbite

`irons_spellbooks:frostbite` · Instant · cooldown 0 s

> Imbue yourself with a magical Frostbiting power, making any fully-frozen creature you kill turn into an Ice Shadow. Ice Shadows shatter into icicles after 5 seconds or upon taking any damage.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:boreal_blade]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Shatter Damage | Effect Length |
| --- | --- | --- | --- | --- |
| 1 | Common | 160 | 3 | 17.3s |
| 2 | Common | 180 | 4 | 17.3s |
| 3 | Common | 200 | 4 | 17.3s |
| 4 | Uncommon | 220 | 5 | 17.3s |
| 5 | Legendary | 240 | 5 | 17.3s |

## Frostwave

`irons_spellbooks:frostwave` · Long cast · cooldown 50 s

> Cascade a wave of frost magic in a radius around you, afflicting creatures with chilled. Chilled creatures become entombed in ice when fully frozen.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Effect Length | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 100 | 1 s | 5.75s | 6.75 |
| 2 | Common | 110 | 1 s | 7.5s | 7.5 |
| 3 | Common | 120 | 1 s | 9.25s | 8.25 |
| 4 | Common | 130 | 1 s | 11s | 9 |
| 5 | Common | 140 | 1 s | 12.75s | 9.75 |
| 6 | Uncommon | 150 | 1 s | 14.5s | 10.5 |
| 7 | Uncommon | 160 | 1 s | 16.2s | 11.25 |
| 8 | Legendary | 170 | 1 s | 17.95s | 12 |

## Halberd Horizon

`traveloptics:halberd_horizon` · Long cast · cooldown 20 s

> Summons Phantom Halberds in the battlefield around the caster, damaging entities caught in it. Can only be obtained by defeating Maledictus.

**Obtained from:** Dropped by [[bosses/act-iii/maledictus|Maledictus]]; inscribed in [[item:traveloptics:the_accused_codex]] (level 6).

| Level | Rarity | Mana | Cast time | AoE Damage | Rings |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 30 | 1.05 s | 22 | 2 |
| 2 | Rare | 70 | 1.05 s | 26 | 3 |
| 3 | Rare | 110 | 1.05 s | 30 | 4 |
| 4 | Rare | 150 | 1.05 s | 34 | 5 |
| 5 | Epic | 190 | 1.05 s | 38 | 6 |
| 6 | Legendary | 230 | 1.05 s | 42 | 7 |

## Ice Age

`alshanex_familiars:ice_age` · Continuous · cooldown 20 s

> Freeze everything around you, covering the world in ice.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell.

| Level | Rarity | Mana | Duration | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 5 | 3 s | 3 | 7.5 |
| 2 | Common | 6 | 3.25 s | 3.4 | 9 |
| 3 | Common | 7 | 3.5 s | 3.79 | 10.5 |
| 4 | Common | 8 | 3.75 s | 4.19 | 12 |
| 5 | Common | 9 | 4 s | 4.6 | 13.5 |
| 6 | Common | 10 | 4.25 s | 5 | 15 |
| 7 | Common | 11 | 4.5 s | 5.4 | 16.5 |
| 8 | Uncommon | 12 | 4.75 s | 5.8 | 18 |
| 9 | Rare | 13 | 5 s | 6.2 | 19.5 |
| 10 | Legendary | 14 | 5.25 s | 6.59 | 21 |

## Ice Block

`irons_spellbooks:ice_block` · Long cast · cooldown 17 s

> Conjure a giant chunk of ice above a targeted creature or block. After a short delay, it will fall down and explode for area frost damage, doing additional damage to any creatures hit on the way down.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Rare | 80 | 1.5 s | 8.1 |
| 2 | Rare | 100 | 1.5 s | 9.2 |
| 3 | Rare | 120 | 1.5 s | 10.4 |
| 4 | Rare | 140 | 1.5 s | 11.5 |
| 5 | Epic | 160 | 1.5 s | 12.7 |
| 6 | Legendary | 180 | 1.5 s | 13.9 |

## Ice Chamber

`alshanex_familiars:ice_chamber` · Long cast · cooldown 15 s

> Shoot a freezing ray that will freeze an area around the impact and sometimes even the enemy itself.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell. Frostling Familiars cast it.

| Level | Rarity | Mana | Cast time | Damage | Freeze Time | Block Range |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 25 | 0.5 s | 9 | 4.5s | 30 |
| 2 | Epic | 40 | 0.5 s | 10.5 | 5.25s | 30 |
| 3 | Epic | 55 | 0.5 s | 12 | 6s | 30 |
| 4 | Legendary | 70 | 0.5 s | 13.5 | 6.75s | 30 |
| 5 | Legendary | 85 | 0.5 s | 15 | 7.5s | 30 |

## Ice Spikes

`irons_spellbooks:ice_spikes` · Instant · cooldown 15 s

> Unleash a cascading line of ice magic, creating ice crystals that emerge from the ground. The final spike does full damage, and will emerge early if a creature within range is targeted.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Spikes |
| --- | --- | --- | --- | --- |
| 1 | Common | 30 | 12 | 8 |
| 2 | Common | 40 | 13 | 10 |
| 3 | Common | 50 | 14 | 11 |
| 4 | Common | 60 | 15 | 13 |
| 5 | Common | 70 | 16 | 14 |
| 6 | Common | 80 | 17 | 16 |
| 7 | Common | 90 | 18 | 17 |
| 8 | Uncommon | 100 | 19 | 19 |
| 9 | Rare | 110 | 20 | 20 |
| 10 | Legendary | 120 | 21 | 22 |

## Ice Tomb

`irons_spellbooks:ice_tomb` · Instant · cooldown 30 s

> Encase yourself in a protective tomb of ice, providing healing while within, absorbing one hit or counterspell before breaking. Dismount to leave the tomb.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Healing | Duration |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 30 | 1 | 5s |
| 2 | Uncommon | 45 | 1 | 6s |
| 3 | Uncommon | 60 | 1 | 7s |
| 4 | Uncommon | 75 | 1 | 8s |
| 5 | Rare | 90 | 1 | 9s |
| 6 | Rare | 105 | 1 | 10s |
| 7 | Rare | 120 | 1 | 11s |
| 8 | Legendary | 135 | 1 | 12s |

## Icicle

`irons_spellbooks:icicle` · Instant · cooldown 2 s

> Fire a piercing bolt of cold energy in the form of an icicle, freezing those it touches.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Common | 26 | 3 |
| 2 | Common | 31 | 3.25 |
| 3 | Common | 36 | 3.5 |
| 4 | Common | 41 | 3.75 |
| 5 | Common | 46 | 4 |
| 6 | Common | 52 | 4.25 |
| 7 | Common | 57 | 4.5 |
| 8 | Uncommon | 62 | 4.75 |
| 9 | Rare | 67 | 5 |
| 10 | Legendary | 72 | 5.25 |

## Ray of Frost

`irons_spellbooks:ray_of_frost` · Instant · cooldown 17 s

> Fire a beam of cold energy, dealing low damage but immediately applying freeze to the creature hit.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Freeze Time | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 50 | 8.22 | 2.59s | 30 |
| 2 | Common | 80 | 9.09 | 3s | 30 |
| 3 | Common | 110 | 9.96 | 3.45s | 30 |
| 4 | Uncommon | 140 | 10.82 | 3.9s | 30 |
| 5 | Legendary | 170 | 11.69 | 4.3s | 30 |

## Snowball

`irons_spellbooks:snowball` · Long cast · cooldown 12 s

> Conjure a giant snowball and throw it forward, bursting into a frosty field and Chilling creatures in a surrounding radius on impact. Chilled creatures become entombed in ice when fully frozen.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Block Radius | Duration |
| --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 40 | 1 s | 4 | 10s |
| 2 | Uncommon | 42 | 1 s | 4.5 | 10s |
| 3 | Rare | 44 | 1 s | 5 | 10s |
| 4 | Rare | 46 | 1 s | 5.5 | 10s |
| 5 | Legendary | 48 | 1 s | 6 | 10s |

## Sticky Steed Summon

`traveloptics:sticky_steed_summon` · Long cast · cooldown 1200 s

> Conjure a Gum Worm that will follow you around, let you ride. Also protect, and fight for you. Can only be obtained by defeating Gum Worm.

**Obtained from:** Dropped by Gum Worm.

- Summons: Gum Worm

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 500 | 5 s | 60.0 | 14 |
| 2 | Legendary | 700 | 5 s | 90.0 | 16 |
| 3 | Legendary | 900 | 5 s | 120.0 | 18 |

## Summon Polar Bear

`irons_spellbooks:summon_polar_bear` · Long cast · cooldown 200 s

> Cast to summon a polar bear who will follow, protect, and fight for you, as well as providing a mount.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Rare | 100 | 1 s | 28.8 | 4.8 |
| 2 | Rare | 120 | 1 s | 33.6 | 6 |
| 3 | Rare | 140 | 1 s | 38.4 | 7.2 |
| 4 | Rare | 160 | 1 s | 43.2 | 8.4 |
| 5 | Rare | 180 | 1 s | 48 | 9.6 |
| 6 | Rare | 200 | 1 s | 52.8 | 10.8 |
| 7 | Rare | 220 | 1 s | 57.6 | 12 |
| 8 | Epic | 240 | 1 s | 62.4 | 13.2 |
| 9 | Epic | 260 | 1 s | 67.2 | 14.4 |
| 10 | Legendary | 280 | 1 s | 72 | 15.6 |
