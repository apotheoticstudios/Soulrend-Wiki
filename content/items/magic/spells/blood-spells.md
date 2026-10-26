---
{
  "title": "Blood Spells",
  "summary": "The Blood spell school: 20 spells with mana costs, cooldowns and per-level values."
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

**Blood Spells** lists the 20 spells of the Blood school (`irons_spellbooks:blood`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:irons_spellbooks:blood_vial]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Blood scrolls** drop from Cultist.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Acupuncture]] | Instant | 25 s | 10 | 50–140 | Loot, Scroll Forge |
| [[#Blood Howl]] | Instant | 20 s | 5 | 70–150 | Loot, Boss drop, Scroll Forge |
| [[#Blood Needles]] | Instant | 12 s | 10 | 45–126 | Loot, Scroll Forge |
| [[#Blood Slash]] | Instant | 12 s | 5 | 50–90 | Loot, Item, Scroll Forge |
| [[#Blood Step]] | Instant | 6 s | 5 | 75–175 | Loot, Item, Scroll Forge |
| [[#Bloody Arrow]] | Instant | 3 s | 5 | 30–70 | Loot, Item, Scroll Forge |
| [[#Bloody Magical Reinforcements]] | Long cast | 150 s | 6 | 100–200 | Loot, Scroll Forge |
| [[#Call Forth The Dead King]] | Long cast | 3600 s | 1 | 25000 | Chest |
| [[#Call the Shadows]] | Long cast | 150 s | 6 | 50–100 | — |
| [[#Crimson Oath]] | Instant | 60 s | 5 | 30–70 | Loot, Scroll Forge |
| [[#Devour]] | Instant | 25 s | 10 | 50–122 | Loot, Scroll Forge |
| [[#Eek]] | Instant | 20 s | 1 | 100 | Loot, Scroll Forge |
| [[#Heartstop]] | Instant | 1800 s | 10 | 400–760 | Loot, Scroll Forge |
| [[#Nocturnal Swarm]] | Long cast | 150 s | 8 | 45–150 | Loot, Scroll Forge |
| [[#Raise Dead]] | Long cast | 140 s | 6 | 100–200 | Loot, Scroll Forge |
| [[#Ray of Siphoning]] | Continuous | 17 s | 10 | 16–34 | Loot, Item, Scroll Forge |
| [[#Sacrifice]] | Instant | 2 s | 5 | 42–76 | Loot, Scroll Forge |
| [[#Summon Weakness]] | Long cast | 150 s | 6 | 50–100 | Loot, Scroll Forge |
| [[#Vigor Siphon]] | Long cast | 300 s | 3 | 60–160 | Loot, Chest, Scroll Forge |
| [[#Wither Skull]] | Instant | 2 s | 10 | 34–64 | Loot, Item, Scroll Forge |

## Acupuncture

`irons_spellbooks:acupuncture` · Instant · cooldown 25 s

> Around a targeted creature, create a field of blood needles in every direction, shooting down and healing you for 25% of damage done

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Projectiles |
| --- | --- | --- | --- | --- |
| 1 | Rare | 50 | 1.6 | 3 |
| 2 | Rare | 60 | 1.6 | 3 |
| 3 | Rare | 70 | 1.6 | 4 |
| 4 | Rare | 80 | 1.6 | 4 |
| 5 | Rare | 90 | 1.6 | 5 |
| 6 | Rare | 100 | 1.6 | 6 |
| 7 | Rare | 110 | 1.6 | 6 |
| 8 | Epic | 120 | 1.6 | 7 |
| 9 | Epic | 130 | 1.6 | 7 |
| 10 | Legendary | 140 | 1.6 | 8 |

## Blood Howl

`traveloptics:blood_howl` · Instant · cooldown 20 s

> Cast to shoot wither howitzer projectiles at your target. This spell has recasts.

**Obtained from:** Random scroll loot; dropped by [[bosses/act-iii/the-harbinger|The Harbinger]]; the Scroll Forge.

| Level | Rarity | Mana | AoE Damage | Shots |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 70 | 6.5 | 2 |
| 2 | Uncommon | 90 | 9 | 3 |
| 3 | Rare | 110 | 11.5 | 4 |
| 4 | Rare | 130 | 14 | 5 |
| 5 | Legendary | 150 | 16.5 | 6 |

## Blood Needles

`irons_spellbooks:blood_needles` · Instant · cooldown 12 s

> Create a ring of needles made from blood and fire them forward, skewering targets and healing you for 25% of damage done

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Projectiles |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 45 | 1.2 | 5 |
| 2 | Uncommon | 54 | 1.35 | 5 |
| 3 | Uncommon | 63 | 1.5 | 5 |
| 4 | Uncommon | 72 | 1.65 | 5 |
| 5 | Uncommon | 81 | 1.8 | 5 |
| 6 | Rare | 90 | 1.95 | 5 |
| 7 | Rare | 99 | 2.1 | 5 |
| 8 | Rare | 108 | 2.25 | 5 |
| 9 | Epic | 117 | 2.4 | 5 |
| 10 | Legendary | 126 | 2.55 | 5 |

## Blood Slash

`irons_spellbooks:blood_slash` · Instant · cooldown 12 s

> Slash forward to send out a concentrated blade of blood, slicing through creatures and healing for 15% of damage done.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:necronomicon_spell_book]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Rare | 50 | 6 |
| 2 | Rare | 60 | 6.6 |
| 3 | Rare | 70 | 7.2 |
| 4 | Epic | 80 | 7.8 |
| 5 | Legendary | 90 | 8.4 |

## Blood Step

`irons_spellbooks:blood_step` · Instant · cooldown 6 s

> Instantaneously teleport to where you are looking, or directly behind any targeted creature. Gain a short duration of true invisibility upon reaching your destination.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:necronomicon_spell_book]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Block Range |
| --- | --- | --- | --- |
| 1 | Uncommon | 75 | 4.3 |
| 2 | Uncommon | 100 | 5.7 |
| 3 | Rare | 125 | 7.2 |
| 4 | Rare | 150 | 8.6 |
| 5 | Legendary | 175 | 10 |

## Bloody Arrow

`dacxirons:bloody_arrow` · Instant · cooldown 3 s

> Projectile full of dread and gore, inflicts bleeding

**Obtained from:** Random scroll loot; imbued in [[item:dacxirons:sanguine_scepter_staff]] (level 3); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 30 | 5 |
| 2 | Uncommon | 40 | 5 |
| 3 | Rare | 50 | 5 |
| 4 | Rare | 60 | 5 |
| 5 | Legendary | 70 | 5 |

## Bloody Magical Reinforcements

`dacxirons:summon_bloodymancer_cultist` · Long cast · cooldown 150 s

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | Summon hp | Summon duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 100 | 1.5 s | 1 | 1 | 45s |
| 2 | Epic | 120 | 1.5 s | 1 | 1 | 59s |
| 3 | Epic | 140 | 1.5 s | 2 | 2 | 72s |
| 4 | Epic | 160 | 1.5 s | 2 | 2 | 86s |
| 5 | Legendary | 180 | 1.5 s | 3 | 2 | 99s |
| 6 | Legendary | 200 | 1.5 s | 3 | 3 | 113s |

## Call Forth The Dead King

`traveloptics:call_forth_the_dead_king` · Long cast · cooldown 3600 s

> Summons an Enraged Dead King boss to challenge you. Defeating it grants a higher chance of obtaining high-quality loot, including the exclusive spell Blackout. The Enraged Dead King can cast additional powerful spells. The high mana cost is intentional to make it only cast-able from scrolls. Can only be found in Catacombs Chests.

**Obtained from:** Found in Catacombs chests.

- Cast this spell directly from its scroll

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Legendary | 25000 | 15 s |

## Call the Shadows

`alshanex_familiars:summon_shadows` · Long cast · cooldown 150 s

> Call shadow knights into your world, they are invulnerable and will pursue the enemy relentlessly.

**Obtained from:** No loot table, recipe or item in Soulrend gives this spell.

| Level | Rarity | Mana | Cast time | Summons |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 50 | 1.5 s | 1 |
| 2 | Uncommon | 60 | 1.5 s | 2 |
| 3 | Uncommon | 70 | 1.5 s | 3 |
| 4 | Rare | 80 | 1.5 s | 4 |
| 5 | Rare | 90 | 1.5 s | 5 |
| 6 | Legendary | 100 | 1.5 s | 6 |

## Crimson Oath

`dacxirons:crimson_oath` · Instant · cooldown 60 s

> Reduce your health critically and begin to bleed, but your blood empowers your spells

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Percent Health Reduction | Percent Blood Power | Duration |
| --- | --- | --- | --- | --- | --- |
| 1 | Epic | 30 | 70 | 20 | 30s |
| 2 | Epic | 40 | 60 | 30 | 50s |
| 3 | Epic | 50 | 50 | 40 | 70s |
| 4 | Legendary | 60 | 40 | 50 | 90s |
| 5 | Legendary | 70 | 30 | 60 | 110s |

## Devour

`irons_spellbooks:devour` · Instant · cooldown 25 s

> Pull in a nearby creature and attack them with a bite, leeching 15% of damage done as health. If the creature is killed, you temporarily gain additional max HP. Created by the Ancient Magician known as Yorhavich.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Damage | Max HP on Kill |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 50 | 3.48 | 0 |
| 2 | Uncommon | 58 | 4.05 | 2 |
| 3 | Uncommon | 66 | 4.63 | 2 |
| 4 | Uncommon | 74 | 5.21 | 2 |
| 5 | Uncommon | 82 | 5.79 | 2 |
| 6 | Rare | 90 | 6.37 | 2 |
| 7 | Rare | 98 | 6.96 | 2 |
| 8 | Rare | 106 | 7.53 | 2 |
| 9 | Epic | 114 | 8.11 | 4 |
| 10 | Legendary | 122 | 8.69 | 4 |

## Eek

`traveloptics:eek` · Instant · cooldown 20 s

> Eek yourself and eek targeted entity.

**Obtained from:** Random scroll loot; the Scroll Forge.

- You have a warning!

| Level | Rarity | Mana | Range |
| --- | --- | --- | --- |
| 1 | Legendary | 100 | 20 |

## Heartstop

`irons_spellbooks:heartstop` · Instant · cooldown 1800 s

> Cast to inflict yourself with Heartstop, an effect that makes you temporarily invulnerable. However, once it wears off, you take 50% of all damage accumulated while under its effects.

**Obtained from:** Random scroll loot; the Scroll Forge.

In Soulrend, the damage Heartstop releases when it wears off ignores armor, shields, enchantments, effects, Resistance and invulnerability (the `spell_fixes` datapack adds its damage type to every bypass tag).

| Level | Rarity | Mana | Effect Length |
| --- | --- | --- | --- |
| 1 | Common | 400 | 3s |
| 2 | Common | 440 | 3.4s |
| 3 | Common | 480 | 3.9s |
| 4 | Common | 520 | 4.3s |
| 5 | Common | 560 | 4.8s |
| 6 | Common | 600 | 5.2s |
| 7 | Common | 640 | 5.7s |
| 8 | Uncommon | 680 | 6.1s |
| 9 | Rare | 720 | 6.5s |
| 10 | Legendary | 760 | 7s |

## Nocturnal Swarm

`traveloptics:nocturnal_swarm` · Long cast · cooldown 150 s

> Cast to summon deadly swarm of Vesper.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | HP | Damage |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Common | 45 | 1.75 s | Vesper [3] | 4.5 | 1.5 |
| 2 | Common | 60 | 1.75 s | Vesper [4] | 6.0 | 2 |
| 3 | Common | 75 | 1.75 s | Vesper [5] | 7.5 | 2.5 |
| 4 | Common | 90 | 1.75 s | Vesper [6] | 9.0 | 3 |
| 5 | Common | 105 | 1.75 s | Vesper [7] | 10.5 | 3.5 |
| 6 | Uncommon | 120 | 1.75 s | Vesper [8] | 12.0 | 4 |
| 7 | Uncommon | 135 | 1.75 s | Vesper [9] | 13.5 | 4.5 |
| 8 | Legendary | 150 | 1.75 s | Vesper [10] | 15.0 | 5 |

## Raise Dead

`irons_spellbooks:raise_dead` · Long cast · cooldown 140 s

> Cast to summon undead minions from the earth beneath you. The higher the power, the better equipment they will have.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons |
| --- | --- | --- | --- | --- |
| 1 | Uncommon | 100 | 1.5 s | 3 |
| 2 | Uncommon | 120 | 1.5 s | 4 |
| 3 | Uncommon | 140 | 1.5 s | 5 |
| 4 | Rare | 160 | 1.5 s | 6 |
| 5 | Rare | 180 | 1.5 s | 7 |
| 6 | Legendary | 200 | 1.5 s | 8 |

## Ray of Siphoning

`irons_spellbooks:ray_of_siphoning` · Continuous · cooldown 17 s

> Hold to cast a ray of necrotic energy that siphons health from creatures it hits, damaging them and healing you for 100% of damage done.

**Obtained from:** Random scroll loot; inscribed in [[item:irons_spellbooks:necronomicon_spell_book]] (level 5); the Scroll Forge.

| Level | Rarity | Mana | Duration | Damage | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Common | 16 | 5 s | 0.57 | 12 |
| 2 | Common | 18 | 5 s | 0.72 | 12 |
| 3 | Common | 20 | 5 s | 0.87 | 12 |
| 4 | Common | 22 | 5 s | 1.01 | 12 |
| 5 | Common | 24 | 5 s | 1.15 | 12 |
| 6 | Common | 26 | 5 s | 1.3 | 12 |
| 7 | Common | 28 | 5 s | 1.44 | 12 |
| 8 | Uncommon | 30 | 5 s | 1.59 | 12 |
| 9 | Rare | 32 | 5 s | 1.74 | 12 |
| 10 | Legendary | 34 | 5 s | 1.88 | 12 |

## Sacrifice

`irons_spellbooks:sacrifice` · Instant · cooldown 2 s

> Target one of your magic summons to cause them to explode, killing them instantly, and dealing large damage in the area around them. The summon's remaining health boosts the damage dealt and radius of explosion.

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Base Damage | Block Radius |
| --- | --- | --- | --- | --- |
| 1 | Rare | 42 | 11.15 | 3 |
| 2 | Rare | 51 | 11.73 | 3 |
| 3 | Rare | 59 | 12.31 | 3 |
| 4 | Epic | 68 | 12.89 | 3 |
| 5 | Legendary | 76 | 13.47 | 3 |

## Summon Weakness

`dacxirons:summon_weakness` · Long cast · cooldown 150 s

> These spider-like critters come to your bloody aid

**Obtained from:** Random scroll loot; the Scroll Forge.

| Level | Rarity | Mana | Cast time | Summons | Summon hp | Summon damage |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 50 | 1.5 s | 1 | 11 | 3 |
| 2 | Uncommon | 60 | 1.5 s | 2 | 14 | 4 |
| 3 | Uncommon | 70 | 1.5 s | 3 | 18 | 5 |
| 4 | Rare | 80 | 1.5 s | 4 | 21 | 6 |
| 5 | Rare | 90 | 1.5 s | 5 | 24 | 7 |
| 6 | Legendary | 100 | 1.5 s | 6 | 28 | 8 |

## Vigor Siphon

`traveloptics:vigor_siphon` · Long cast · cooldown 300 s

> Cast to connect with your nearest summon. Damage dealt by the summon heals you, and your damage heals the summon in return. If you die while tethered, the linked summon is sacrificed to restore you with 8hp

**Obtained from:** Random scroll loot; found in Forlorn ruins chests; the Scroll Forge.

- If owner dies, sacrifice the tethered summon to keep owner alive and heal them

| Level | Rarity | Mana | Cast time | Tether Range | Max Hp Healing | Effect Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Epic | 60 | 1.5 s | 15.0 | 9% | 30s |
| 2 | Epic | 110 | 1.5 s | 15.0 | 13% | 60s |
| 3 | Legendary | 160 | 1.5 s | 15.0 | 16% | 1.5m |

## Wither Skull

`irons_spellbooks:wither_skull` · Instant · cooldown 2 s

> Launch a wither skull forward that explodes in a small radius around the impact. The higher the level, the faster the projectile.

**Obtained from:** Random scroll loot; imbued in [[item:irons_spellbooks:misery]] (level 8); the Scroll Forge.

| Level | Rarity | Mana | Damage |
| --- | --- | --- | --- |
| 1 | Uncommon | 34 | 3.48 |
| 2 | Uncommon | 37 | 3.76 |
| 3 | Uncommon | 40 | 4.05 |
| 4 | Uncommon | 44 | 4.34 |
| 5 | Uncommon | 47 | 4.63 |
| 6 | Rare | 51 | 4.92 |
| 7 | Rare | 54 | 5.21 |
| 8 | Rare | 57 | 5.5 |
| 9 | Epic | 61 | 5.79 |
| 10 | Legendary | 64 | 6.08 |
