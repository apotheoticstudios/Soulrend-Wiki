---
{
  "title": "Dungeons and Combat Drops",
  "aliases": [
    "Essence Of Kamath",
    "Essence Of Sunleia",
    "Armor Plate",
    "Cursed Silk",
    "Cursed Lamp",
    "Ernos Fang",
    "Ammit Fang",
    "Horuso Feather"
  ],
  "summary": "Boss essences, fangs and other Dungeons and Combat drops, and the necklaces and gear made from them.",
  "items": [
    "dungeons_and_combat:essence_of_kamath",
    "dungeons_and_combat:essence_of_sunleia",
    "dungeons_and_combat:armor_plate",
    "dungeons_and_combat:cursed_silk",
    "dungeons_and_combat:cursed_lamp",
    "dungeons_and_combat:ernos_fang",
    "dungeons_and_combat:ammit_fang",
    "dungeons_and_combat:horuso_feather"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json (minecraft:kjs/dungeons_and_combat_* for the Sunleia Hand, Ammit Fang and Klauen necklaces)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar DungeonsAndCombatModTrades (Forger of Essences: 1 essence per armor piece; Kamath set at levels 1-2, Sunleia set at levels 3-4), CursedLampOffHandProcedure (player attack while the lamp is in the off hand: Weakness II, 100 ticks), lang (Forger Of Essences, Forging Of Essences)
  ernos fang necklace: no recipe in the jar or in Soulrend, no loot table (Known Bugs)
-->

**Dungeons and Combat Drops** covers the materials that Dungeons and Combat bosses and minibosses drop: the essences of [[Kamath]] and [[Sunleia]], fangs, feathers, plates and silk, plus the accessories made from them.

## Usage

- **Essences.** The tooltip's "essence forger" is the **Forger Of Essences**, a villager profession whose job block is the Forging Of Essences. It trades one essence for one armor piece: Essence Of Kamath for a piece of the Kamath set (Novice and Apprentice trades) and Essence Of Sunleia for a piece of the Sunleia set (Journeyman and Expert trades). Both essences are also crafting materials (see Used in).
- **Cursed Lamp:** held in the off hand, it gives Weakness II for 5 s to whatever the holder hits.
- **Fangs, feather, plate and silk** are crafting materials. The Ammit Fang makes the Ammit Fang Necklace, and the Klauen Necklace and Hand of Sunleia use Essence Of Sunleia. The [[items/curios-and-accessories/necklaces|Necklaces]] page describes the necklaces.
- **Ernos Fang Necklace:** no recipe or loot table gives it in Soulrend (see [[bugs|Known Bugs]]).

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:essence_of_kamath]] | dungeons and combat | Trade this soul with the essence forger | 1 loot table |
| [[item:dungeons_and_combat:essence_of_sunleia]] | dungeons and combat | Trade this soul with the essence forger | 1 loot table |
| [[item:dungeons_and_combat:sunleia_hand]] | dungeons and combat | Slot: Hands; Attacking will give you Haste II |  |
| [[item:dungeons_and_combat:champion_belt]] | dungeons and combat | Slot: Belt; Increased maximum health, armor and knockback resistance | 1 loot table |
| [[item:dungeons_and_combat:armor_plate]] | dungeons and combat |  | 5 loot tables |
| [[item:dungeons_and_combat:steel_shoulder]] | dungeons and combat | Slot: Hands; Additional Armor Toughness | crafting |
| [[item:dungeons_and_combat:cursed_silk]] | dungeons and combat |  | 2 loot tables |
| [[item:dungeons_and_combat:cursed_lamp]] | dungeons and combat | Applies Weakness II on hit | crafting |
| [[item:dungeons_and_combat:ernos_fang]] | dungeons and combat |  | 1 loot table |
| [[item:dungeons_and_combat:ernos_fang_necklace]] | dungeons and combat | Slot: Necklace; Attack Damage Bonus |  |
| [[item:dungeons_and_combat:ammit_fang]] | dungeons and combat |  | 1 loot table |
| [[item:dungeons_and_combat:fang_necklace]] | dungeons and combat | Slot: Necklace; Attacks will leave the Broken Armor effect |  |
| [[item:dungeons_and_combat:horuso_feather]] | dungeons and combat |  | 2 loot tables |
| [[item:dungeons_and_combat:klauen_necklace]] | dungeons and combat | Slot: Necklace; Attack Speed Bonus |  |
| [[item:dungeons_and_combat:blessed_beetle]] | dungeons and combat | This will illuminate the light of Sunleia | crafting |

[[item:dungeons_and_combat:sunleia_hand]], [[item:dungeons_and_combat:champion_belt]], [[item:dungeons_and_combat:steel_shoulder]], [[item:dungeons_and_combat:ernos_fang_necklace]], [[item:dungeons_and_combat:fang_necklace]], [[item:dungeons_and_combat:klauen_necklace]] and [[item:dungeons_and_combat:blessed_beetle]] have their own entry on another page.

## Essence Of Kamath

[[item:dungeons_and_combat:essence_of_kamath]] (dungeons and combat, rare)

Its tooltip says:

- Trade this soul with the essence forger

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/kamath\|Kamath]] (drop) | 100% | 1–6 |

### Used in

{{uses dungeons_and_combat:essence_of_kamath limit=6}}

## Essence Of Sunleia

[[item:dungeons_and_combat:essence_of_sunleia]] (dungeons and combat, rare)

Its tooltip says:

- Trade this soul with the essence forger

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/sunleia\|Sunleia]] (drop) | 100% | 1–6 |

### Used in

{{uses dungeons_and_combat:essence_of_sunleia limit=6}}

## Armor Plate

[[item:dungeons_and_combat:armor_plate]] (dungeons and combat)

### Obtaining

5 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:blocks/soleia` (mob drop) | 100% | 0–2 |
| [[bosses/act-ii/kamath\|Kamath]] (drop) | 100% | 0–6 |
| [[bosses/optional-and-world/dungeons-and-combat-minibosses\|Pyro Knight]] (drop) | 100% | 1–2 |
| Skull Deserter (drop) | 16.7% | 1 |
| `dungeons_and_combat:chests/catacumbs` (chest) | 6.67% | 0–1 |

### Used in

{{uses dungeons_and_combat:armor_plate limit=6}}

## Cursed Silk

[[item:dungeons_and_combat:cursed_silk]] (dungeons and combat)

### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/the-gravewatcher\|The GraveWatcher]] (drop) | 100% | 0–8 |
| `dungeons_and_combat:chests/catacumbs` (chest) | 20% | 0–4 |

### Used in

{{uses dungeons_and_combat:cursed_silk}}

## Cursed Lamp

[[item:dungeons_and_combat:cursed_lamp]] (dungeons and combat, rare)

| Stat | Value | When |
| --- | --- | --- |
|  | Applies Weakness II on hit | Off-Hand Effect |

Each hit by its holder gives the target Weakness II for 5 s.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes dungeons_and_combat:cursed_lamp}}

## Ernos Fang

[[item:dungeons_and_combat:ernos_fang]] (dungeons and combat)

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| Ernos (drop) | 33.3% | 0–2 |

### Used in

{{uses dungeons_and_combat:ernos_fang}}

## Ammit Fang

[[item:dungeons_and_combat:ammit_fang]] (dungeons and combat)

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/optional-and-world/dungeons-and-combat-minibosses\|Ammit]] (drop) | 14.3% | 0–3 |

### Used in

{{uses dungeons_and_combat:ammit_fang}}

## Horuso Feather

[[item:dungeons_and_combat:horuso_feather]] (dungeons and combat)

### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/sunleia\|Sunleia]] (drop) | 100% | 0–3 |
| [[bosses/optional-and-world/dungeons-and-combat-minibosses\|Horuso]] (drop) | 26.1% | 0–2 |

### Used in

{{uses dungeons_and_combat:horuso_feather}}
