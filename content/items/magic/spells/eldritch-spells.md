---
{
  "title": "Eldritch Spells",
  "summary": "The Eldritch spell school: 19 spells with mana costs, cooldowns and per-level values."
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

**Eldritch Spells** lists the 19 spells of the Eldritch school (`irons_spellbooks:eldritch`). Values are per spell level, read with an unequipped caster.

## Obtaining

Spells are found and crafted as scrolls; see [[items/magic/spells|Spells]] for how scrolls, spellbooks and the Scroll Forge work.

- **Scroll Forge focus:** [[item:minecraft:echo_shard]]. Only spells marked "Scroll Forge" below can be crafted.
- **Random Eldritch scrolls** are in Summoner lab chests.
- Spells marked "Loot" can also come from any loot table that rolls a random scroll of any school.
- **Eldritch spells must be learned.** An unlearned Eldritch scroll can't be cast or crafted ("You can't understand this spell..."). Right-clicking an [[item:irons_spellbooks:eldritch_manuscript]] opens a research screen, where holding a spell learns it for one manuscript. Apart from Cannibalism, Eldritch spells never come from random loot.

## Overview

| Spell | Cast type | Cooldown | Levels | Mana (first–last level) | Obtained from |
| --- | --- | --- | --- | --- | --- |
| [[#Abyssal Blast]] | Long cast | 20 s | 3 | 80–330 | Boss drop |
| [[#Abyssal Shroud]] | Instant | 15000 s | 1 | 900 | Disabled |
| [[#Apex Harvest]] | Instant | 10 s | 1 | 50 | Item, Scroll Forge |
| [[#Blackout]] | Long cast | 120 s | 3 | 100–200 | Boss drop |
| [[#Cannibalism]] | Long cast | 400 s | 3 | 40–640 | Loot, Scroll Forge |
| [[#Eldritch Blast]] | Instant | 7 s | 5 | 153–255 | Scroll Forge |
| [[#Eldritch Champion]] | Long cast | 120 s | 8 | 1200–1550 | Scroll Forge |
| [[#Eldritch Slash]] | Long cast | 15 s | 5 | 30–90 | Scroll Forge |
| [[#Paralyzing Skreech]] | Continuous | 25 s | 8 | 10–24 | Scroll Forge |
| [[#Planar Sight]] | Instant | 200 s | 3 | 300–500 | Scroll Forge |
| [[#Pocket Dimension]] | Long cast | 60 s | 1 | 300 | Scroll Forge |
| [[#Psychic Bolt]] | Instant | 40 s | 3 | 50–90 | Scroll Forge |
| [[#Reversal]] | Instant | 3 s | 3 | 50–150 | Scroll Forge |
| [[#Sculk Tentacles]] | Long cast | 30 s | 4 | 300–600 | Scroll Forge |
| [[#Shadowed Miasma]] | Long cast | 45 s | 3 | 20–80 | Boss drop, Item, Scroll Forge |
| [[#Sonic Boom]] | Long cast | 30 s | 3 | 220–420 | Scroll Forge |
| [[#Spectral Blink]] | Instant | 12 s | 3 | 20–60 | Scroll Forge |
| [[#Telekinesis]] | Continuous | 35 s | 5 | 50 | Scroll Forge |
| [[#The Forgotten Beast]] | Long cast | 600 s | 2 | 300–575 | Boss drop |

## Abyssal Blast

`traveloptics:abyssal_blast` · Long cast · cooldown 20 s

> Cast to fire a devastating beam of abyssal energy in a straight line. While active, caster cannot move or look around. Can only be found by defeating The Leviathan.

**Obtained from:** Dropped by [[bosses/act-iii/the-leviathan|The Leviathan]]. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Epic | 80 | 2.5 s | 17.5 |
| 2 | Epic | 205 | 2.5 s | 25 |
| 3 | Legendary | 330 | 2.5 s | 32.5 |

## Abyssal Shroud

`irons_spellbooks:abyssal_shroud` · Instant · cooldown 15000 s · disabled

> Cloak yourself with the shadows of the abyss, granting the ability to evade any attack for a short duration of time.

**Obtained from:** Disabled in Soulrend's spell config, so it can't be obtained or cast.

| Level | Rarity | Mana | Effect Length |
| --- | --- | --- | --- |
| 1 | Legendary | 900 | 2.4s |

## Apex Harvest

`traveloptics:apex_harvest` · Instant · cooldown 10 s

> Cast to consume up to 5 nearby Soul Apex and recharges the Cursed Wraithblade, instantly switching it into its Apex-Shot mode. Requires Cursed Wraithblade to cast this spell.

**Obtained from:** Imbued in [[item:traveloptics:cursed_wraithblade]] (level 1); the Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Soul Apex Collection Radius |
| --- | --- | --- | --- |
| 1 | Legendary | 50 | 20 |

## Blackout

`traveloptics:blackout` · Long cast · cooldown 120 s

> Creates a lingering anti-magic field that suppresses abilities within its radius. Players caught in the zone are unable to cast spells and use items. Moving within the field inflicts small damage. Can only be obtained by defeating the Enraged Dead King.

**Obtained from:** Dropped by [[bosses/act-ii/enraged-dead-king|Enraged Dead King]]. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Block Radius | Effect Duration | Anti Magic Zone Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 100 | 1.95 s | 8 | 1.5s | 8s |
| 2 | Legendary | 150 | 1.95 s | 10 | 1.5s | 10s |
| 3 | Legendary | 200 | 1.95 s | 12 | 1.5s | 12s |

## Cannibalism

`kubejs:cannibalism` · Long cast · cooldown 400 s

> Rend your very own flesh from your very own body.

**Obtained from:** Random scroll loot; the Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

Cannibalism is a Soulrend spell. Casting it drops the caster to 1 health and gives one [[item:kubejs:raw_human_flesh]] per 10 health lost (rounded up), multiplied by the spell level. Raw Human Flesh restores 5 hunger; cooked into "Steak" it restores 10. Both stack to 256.

| Level | Rarity | Mana | Cast time | Flesh Fragments | Self Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 40 | 10 s | 2 | 19 |
| 2 | Legendary | 340 | 10 s | 4 | 19 |
| 3 | Legendary | 640 | 10 s | 6 | 19 |

## Eldritch Blast

`irons_spellbooks:eldritch_blast` · Instant · cooldown 7 s

> Fire rays of pure, devastating energy.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Damage | Blasts | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 153 | 7.5 | 3 | 30 |
| 2 | Legendary | 178 | 7.5 | 4 | 30 |
| 3 | Legendary | 204 | 7.5 | 5 | 30 |
| 4 | Legendary | 229 | 7.5 | 6 | 30 |
| 5 | Legendary | 255 | 7.5 | 7 | 30 |

## Eldritch Champion

`dacxirons:summonkamath` · Long cast · cooldown 120 s

> Summon the eldritch champion, Kamath himself

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Summons | Summon hp | Summon duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 1200 | 10 s | 1 | 54 | 24s |
| 2 | Legendary | 1250 | 10 s | 1 | 59 | 26s |
| 3 | Legendary | 1300 | 10 s | 1 | 65 | 29s |
| 4 | Legendary | 1350 | 10 s | 1 | 70 | 31s |
| 5 | Legendary | 1400 | 10 s | 1 | 76 | 34s |
| 6 | Legendary | 1450 | 10 s | 1 | 81 | 36s |
| 7 | Legendary | 1500 | 10 s | 1 | 86 | 38s |
| 8 | Legendary | 1550 | 10 s | 1 | 92 | 41s |

## Eldritch Slash

`dacxirons:eldritch_slash` · Long cast · cooldown 15 s

> Unleash an uninterruptible slash infused by Kamath himself

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Damage |
| --- | --- | --- | --- | --- |
| 1 | Common | 30 | 0.5 s | 6.7 |
| 2 | Common | 45 | 0.5 s | 9.4 |
| 3 | Common | 60 | 0.5 s | 12.1 |
| 4 | Uncommon | 75 | 0.5 s | 14.8 |
| 5 | Legendary | 90 | 0.5 s | 17.5 |

## Paralyzing Skreech

`traveloptics:violent_skreech` · Continuous · cooldown 25 s

> Continuously pulsate sound blast to Shred Armor, Damage Nearby enemies and Applying Chilled effect. 2% of damage deal converted into lifesteal.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Duration | Direct Damage | AoE Damage | Direct Sundering Duration | AoE Chilled Duration | Lifesteal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Uncommon | 10 | 5 s | 1 | 0.5 | 5s | 2.5s | 2% |
| 2 | Uncommon | 12 | 5 s | 2 | 1 | 5s | 2.5s | 2% |
| 3 | Uncommon | 14 | 5 s | 3 | 1.5 | 5s | 2.5s | 2% |
| 4 | Uncommon | 16 | 5 s | 4 | 2 | 5s | 2.5s | 2% |
| 5 | Rare | 18 | 5 s | 5 | 2.5 | 5s | 2.5s | 2% |
| 6 | Rare | 20 | 5 s | 6 | 3 | 5s | 2.5s | 2% |
| 7 | Rare | 22 | 5 s | 7 | 3.5 | 5s | 2.5s | 2% |
| 8 | Legendary | 24 | 5 s | 8 | 4 | 5s | 2.5s | 2% |

## Planar Sight

`irons_spellbooks:planar_sight` · Instant · cooldown 200 s

> Shift your vision in between planes, gaining the ability to see creatures through solid material.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Effect Length |
| --- | --- | --- | --- |
| 1 | Legendary | 300 | 23.1s |
| 2 | Legendary | 400 | 34.7s |
| 3 | Legendary | 500 | 46.3s |

## Pocket Dimension

`irons_spellbooks:pocket_dimension` · Long cast · cooldown 60 s

> Cast to transport yourself into a personal pocket dimension only you can access, giving a small free range area.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time |
| --- | --- | --- | --- |
| 1 | Legendary | 300 | 2 s |

## Psychic Bolt

`traveloptics:psychic_bolt` · Instant · cooldown 40 s

> Select multiple targets on cast. On recast end, fires small projectiles that confuse targets on hit, making them prioritize attacking nearby non-player entities.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Recast Count | Duration |
| --- | --- | --- | --- | --- |
| 1 | Epic | 50 | 5 | 10s |
| 2 | Epic | 70 | 5 | 15s |
| 3 | Legendary | 90 | 5 | 20s |

## Reversal

`traveloptics:reversal` · Instant · cooldown 3 s

> Reverses any incoming damage with increased power. Additionally, it can copy incoming projectiles.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Reversed Damage Multiplier |
| --- | --- | --- | --- |
| 1 | Rare | 50 | 1.3x |
| 2 | Rare | 100 | 1.5x |
| 3 | Legendary | 150 | 1.8x |

## Sculk Tentacles

`irons_spellbooks:sculk_tentacles` · Long cast · cooldown 30 s

> From where you look, erupt a mass of sculk energy in the form of wailing tentacles, damaging and blinding creatures caught in the chaos.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Damage | Block Radius |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 300 | 1 s | 4.63 | 2.5 |
| 2 | Legendary | 400 | 1 s | 4.63 | 3.8 |
| 3 | Legendary | 500 | 1 s | 4.63 | 5.1 |
| 4 | Legendary | 600 | 1 s | 4.63 | 6.5 |

## Shadowed Miasma

`traveloptics:shadowed_miasma` · Long cast · cooldown 45 s

> Inflicts nearby enemies with the abyssal curse effect and infuses your weapon with the same curse. Dealing damage to an enemy during the effect has a chance to spread the effect to nearby enemies.

**Obtained from:** Dropped by [[bosses/act-iii/the-leviathan|The Leviathan]]; inscribed in [[item:traveloptics:archive_of_abyssal_secrets]] (level 3); imbued in [[item:traveloptics:abyssal_tidecaller]] (level 3) and [[item:traveloptics:the_obliterator]] (level 3); the Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Block Radius | Abyssal Strike Amplifier | Effect Duration |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Rare | 20 | 1.25 s | 8 | 0 | 17s |
| 2 | Rare | 50 | 1.25 s | 10 | 0 | 24.5s |
| 3 | Legendary | 80 | 1.25 s | 12 | 0 | 32s |

## Sonic Boom

`irons_spellbooks:sonic_boom` · Long cast · cooldown 30 s

> Blast forth a sonic boom of immense power, passing through solid material and harming all creatures in its path.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Cast time | Damage | Block Range |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 220 | 1.5 s | 11.59 | 20 |
| 2 | Legendary | 320 | 1.5 s | 16.23 | 25 |
| 3 | Legendary | 420 | 1.5 s | 20.87 | 30 |

## Spectral Blink

`traveloptics:spectral_blink` · Instant · cooldown 12 s

> After activation, the caster has 3 seconds. During this time, they can teleport to any entity they are looking at, even through walls. Any entities within the teleportation range will be revealed to the caster.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Range |
| --- | --- | --- | --- |
| 1 | Legendary | 20 | 35 |
| 2 | Legendary | 40 | 52 |
| 3 | Legendary | 60 | 70 |

## Telekinesis

`irons_spellbooks:telekinesis` · Continuous · cooldown 35 s

> Reach out with a spectral force and grip a creature, forcing them towards your gaze. Creatures are susceptible to kinetic damage.

**Obtained from:** The Scroll Forge. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

| Level | Rarity | Mana | Duration | Block Range |
| --- | --- | --- | --- | --- |
| 1 | Legendary | 50 | 7 s | 12 |
| 2 | Legendary | 50 | 8 s | 14 |
| 3 | Legendary | 50 | 9 s | 16 |
| 4 | Legendary | 50 | 10 s | 18 |
| 5 | Legendary | 50 | 11 s | 20 |

## The Forgotten Beast

`traveloptics:the_forgotten_beast` · Long cast · cooldown 600 s

> Summon Forsaken, a powerful, rideable creature that fight alongside you. However, beware: its will is not fully tameable, and its ferocity may prove unpredictable. Can only be obtained by defeating Forsaken.

**Obtained from:** Dropped by [[bosses/act-iii/forsaken|Forsaken]]. It has to be learned with an Eldritch Manuscript before it can be crafted or cast.

- Summons: Forsaken

| Level | Rarity | Mana | Cast time | HP | Damage |
| --- | --- | --- | --- | --- | --- |
| 1 | Legendary | 300 | 4.5 s | 140.0 | 13 |
| 2 | Legendary | 575 | 4.5 s | 200.0 | 15 |
