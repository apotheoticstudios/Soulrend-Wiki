---
{
  "title": "Soulslike Drops",
  "aliases": [
    "Lost Soul",
    "Essence of Eventide",
    "Essence of Luminescence",
    "Chaos Orb",
    "Shard of Uncertainty",
    "Arkenstone"
  ],
  "summary": "Lord Souls, essences and summoning items dropped by Soulslike Weaponry bosses, and what each one unlocks.",
  "items": [
    "soulsweapons:lord_soul_dark",
    "soulsweapons:lord_soul_day_stalker",
    "soulsweapons:lord_soul_night_prowler",
    "soulsweapons:lord_soul_purple",
    "soulsweapons:lord_soul_red",
    "soulsweapons:lord_soul_rose",
    "soulsweapons:lord_soul_void",
    "soulsweapons:lord_soul_white",
    "soulsweapons:lost_soul",
    "soulsweapons:essence_of_eventide",
    "soulsweapons:essence_of_luminescence",
    "soulsweapons:chaos_orb",
    "soulsweapons:shard_of_uncertainty",
    "soulsweapons:arkenstone"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar assets/soulsweapons/lang/en_us.json (tooltip.soulsweapons.<item>.part_N: the Ctrl and Alt text)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AltarBlock.spawnBoss (Lost Soul tag: Returning Knight; Draugr: Old Champion's Remains; Essence of Eventide: Fallen Icon), BlackstonePedestal.spawnBoss (Shard of Uncertainty: Monarch of Chaos; Demon Chunk or Withered Demon Heart: Decaying King), ChaosOrbEntity (Night Prowler and Day Stalker)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar WitherEntityMixin.dropEquipment (Lord Soul void + Shard of Uncertainty, every kill), EnderDragonEntityMixin.updatePostDeath (Lord Soul purple, once per dragon)
  config/soulsweapons/soulsweapons_boss_config.json (*_consume_item_on_summoning: true except old_champions_remains)
-->

**Soulslike Drops** are the boss materials of Marium's Soulslike Weaponry: eight **Lord Souls**, the Lost Soul, two essences, the Chaos Orb, the Shard of Uncertainty and the Arkenstone. Most are crafting materials for the mod's boss weapons. Four of them summon another boss.

## Usage

**Lord Souls** are boss trophies. Each boss drops its own, and every one is named "Lord Soul" in game, so the table tells them apart. They do nothing on their own and go into weapon recipes (see each soul's Used in section).

| Lord Soul | Dropped by |
| --- | --- |
| [[item:soulsweapons:lord_soul_dark]] | [[Frenzied Shade]] |
| [[item:soulsweapons:lord_soul_day_stalker]] | [[Day Stalker]] |
| [[item:soulsweapons:lord_soul_night_prowler]] | [[Night Prowler]] |
| [[item:soulsweapons:lord_soul_purple]] | the [[Ender Dragon]], once per dragon |
| [[item:soulsweapons:lord_soul_red]] | [[The Decaying King]]; also a Chungus barter |
| [[item:soulsweapons:lord_soul_rose]] | [[Returning Knight]] |
| [[item:soulsweapons:lord_soul_void]] | [[Monarch of Chaos]] and the [[Wither]] |
| [[item:soulsweapons:lord_soul_white]] | [[Fallen Icon]] |

**Summoning items.** Four items call up a boss. Each is used up, except the Draugr at the altar:

| Item | Used on | Summons |
| --- | --- | --- |
| [[item:soulsweapons:lost_soul]] | an Old Moon Altar | [[Returning Knight]] |
| [[item:soulsweapons:essence_of_eventide]] | an Old Moon Altar | [[Fallen Icon]] |
| [[item:soulsweapons:shard_of_uncertainty]] | a Blackstone Pedestal | [[Monarch of Chaos]] |
| [[item:soulsweapons:chaos_orb]] | thrown into the sky | [[Night Prowler]] and [[Day Stalker]] together |

The Old Moon Altar and the Blackstone Pedestal also take the Old Champion's Draugr and the Decaying King's hearts; see [[Old Champion's Remains]] and [[The Decaying King]].

**Other materials.** The Lost Soul also forges the Translucent weapons. The Essence of Luminescence and the Arkenstone both go into the Chaos Orb and several moonlight weapons.

The **Ctrl** text on these items is lore only. The **Alt** text on the Essence of Eventide and the Shard of Uncertainty hints at the altar and the pedestal.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:soulsweapons:lord_soul_dark]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lord_soul_day_stalker]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lord_soul_night_prowler]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lord_soul_purple]] | Marium's Soulslike Weaponry |  |  |
| [[item:soulsweapons:lord_soul_red]] | Marium's Soulslike Weaponry |  | 2 loot tables |
| [[item:soulsweapons:lord_soul_rose]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lord_soul_void]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lord_soul_white]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:lost_soul]] | Marium's Soulslike Weaponry |  | crafting, 4 loot tables |
| [[item:soulsweapons:essence_of_eventide]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:essence_of_luminescence]] | Marium's Soulslike Weaponry |  | 1 loot table |
| [[item:soulsweapons:chaos_orb]] | Marium's Soulslike Weaponry | All the colors of light and dark pass through this orb. Throw it into the sky to summon deities of night and day. | crafting |
| [[item:soulsweapons:shard_of_uncertainty]] | Marium's Soulslike Weaponry |  |  |
| [[item:soulsweapons:arkenstone]] | Marium's Soulslike Weaponry |  | 1 loot table |

## Lord Soul (Lord Soul Dark)

[[item:soulsweapons:lord_soul_dark]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> The last will of the old champion resides in this soul.
> 'Put me back. Let me protect my people.'

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/frenzied-shade\|Frenzied Shade]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:lord_soul_dark limit=6}}

## Lord Soul (Lord Soul Day Stalker)

[[item:soulsweapons:lord_soul_day_stalker]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> Deity of the daylight. Long ago, a group of ancients prayed to her and her sister.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/day-stalker\|Day Stalker]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:lord_soul_day_stalker limit=6}}

## Lord Soul (Lord Soul Night Prowler)

[[item:soulsweapons:lord_soul_night_prowler]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> Deity of night and dark. She promised godhood if she was summoned. Destruction and annihilation was what she gave.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/night-prowler\|Night Prowler]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:lord_soul_night_prowler limit=6}}

## Lord Soul (Lord Soul Purple)

[[item:soulsweapons:lord_soul_purple]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> A rare form of souls, thought to be extinct. It's dark, but balanced color, suggests the user has lived for centuries.

### Obtaining

The [[Ender Dragon]] drops one when it dies. Soulslike Weaponry adds the drop in code, so it isn't in any loot table, and each dragon drops it only once.

### Used in

{{uses soulsweapons:lord_soul_purple limit=6}}

## Lord Soul (Lord Soul Red)

[[item:soulsweapons:lord_soul_red]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> Soul of the old, forgotten demon king. Even when the heart was cursed with decay, his soul never gave in as his undying hatred for revenge still lingers on.

### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/the-decaying-king\|The Decaying King]] (drop) | 100% | 1 |
| `soulsweapons:gameplay/chungus_bartering` (Piglin bartering) | 0.1% | 1 |

### Used in

{{uses soulsweapons:lord_soul_red limit=6}}

## Lord Soul (Lord Soul Rose)

[[item:soulsweapons:lord_soul_rose]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> A combination of many lost souls. What is strange is how many of these souls are of the demon kind.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/returning-knight\|Returning Knight]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:lord_soul_rose limit=6}}

## Lord Soul (Lord Soul Void)

[[item:soulsweapons:lord_soul_void]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> Soul of an ancient one, corrupted by dark soul energy that would turn any sane soul to a mindless husk, immune to the passage of time.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/monarch-of-chaos\|Monarch of Chaos]] (drop) | 100% | 1 |

The [[Wither]] also drops one on every death (added in code, with a Shard of Uncertainty).

### Used in

{{uses soulsweapons:lord_soul_void limit=6}}

## Lord Soul (Lord Soul White)

[[item:soulsweapons:lord_soul_white]] (Marium's Soulslike Weaponry, epic)

> [!LORE] Ctrl text
> True soul of the old champion. So powerful that it shattered the Arkenstone containing it.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/fallen-icon\|Fallen Icon]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:lord_soul_white limit=6}}

## Lost Soul

[[item:soulsweapons:lost_soul]] (Marium's Soulslike Weaponry, rare)

> [!LORE] Ctrl text
> It didn't take long for the discovery of soul energy after the ancients traversed into the basal. There is an altar that seems to crave something akin to this power...

### Obtaining

4 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| Dark Sorcerer (drop) | 100% (player kill) | 0–1 |
| Soulmass (drop) | 100% (player kill) | 2–5 |
| `soulsweapons:chests/cathedral_loot` (chest) | 27% per roll, 1–4 rolls | 1–4 |
| `soulsweapons:chests/cathedral_good_loot` (chest) | 8.06% per roll, 2–5 rolls | 1–3 |

It can also be crafted (see below).

### Crafting

{{recipes soulsweapons:lost_soul}}

### Used in

{{uses soulsweapons:lost_soul limit=6}}

## Essence of Eventide

[[item:soulsweapons:essence_of_eventide]] (Marium's Soulslike Weaponry, rare)

> [!LORE] Alt text
> You feel a strong sense of longing, as if it desperately wants to return to something. Perhaps bringing it to the Old Moon Altar may do something...

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/frenzied-shade\|Frenzied Shade]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:essence_of_eventide}}

## Essence of Luminescence

[[item:soulsweapons:essence_of_luminescence]] (Marium's Soulslike Weaponry, rare)

> [!LORE] Ctrl text
> The old champion could only listen in horror from his tomb as his people were slaughtered by unknown entities.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/fallen-icon\|Fallen Icon]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:essence_of_luminescence}}

## Chaos Orb

[[item:soulsweapons:chaos_orb]] (Marium's Soulslike Weaponry, epic)

Its tooltip says:

- All the colors of light and dark pass through
- this orb. Throw it into the sky to summon
- deities of night and day.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes soulsweapons:chaos_orb}}

## Shard of Uncertainty

[[item:soulsweapons:shard_of_uncertainty]] (Marium's Soulslike Weaponry, rare)

> [!LORE] Alt text
> It seems to perfectly fit in a certain pedestal...

### Obtaining

The [[Wither]] drops one Shard of Uncertainty on every death, along with a void Lord Soul. Soulslike Weaponry adds both drops in code.

### Usage

Using it on a [[item:soulsweapons:blackstone_pedestal]] summons the [[Monarch of Chaos]] and uses the shard up.

## Arkenstone

[[item:soulsweapons:arkenstone]] (Marium's Soulslike Weaponry, rare)

> [!LORE] Ctrl text
> It is unknown how the Arkenstone came to be. Nevertheless, it inherits the unique ability to contain close to infinite amounts of soul energy. In theory, that energy could fuel a golem for centuries.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/returning-knight\|Returning Knight]] (drop) | 100% | 1 |

### Used in

{{uses soulsweapons:arkenstone limit=6}}
