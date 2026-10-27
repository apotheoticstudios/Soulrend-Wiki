---
{
  "title": "Bosses'Rise Drops",
  "aliases": [
    "Sandworm Dart",
    "Ancient Iron Ingot",
    "Dragon Guard Shield",
    "Sandworm Scale"
  ],
  "summary": "Materials and gear dropped by the Bosses'Rise bosses: the Infernal Dragon, the Sandworm and the Dragon Guards.",
  "items": [
    "block_factorys_bosses:dragon_bone",
    "block_factorys_bosses:sandworm_dart",
    "block_factorys_bosses:ancient_iron_ingot",
    "block_factorys_bosses:dragon_guard_shield",
    "astral_calamity_extras:sandworm_scale"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar lang (sandworm_dart.description_0-4), BossCancelDie2Procedure (LivingAttackEvent: an Ender Dragon taking a lethal hit from an attacker holding the Knight Sword drops 12 Dragon Shanks)
  config/soulsweapons/soulsweapons.json (enable_shield_parry, shield_parry_cooldown 40: the shield's "Hold [LEFT ALT]" line)
-->

**Bosses'Rise Drops** covers the materials and gear that Bosses'Rise bosses drop: Dragon Bones from the [[Infernal Dragon]], the Sandworm Dart and Sandworm Scale from the [[Sandworm]], and Ancient Iron and the Dragon Guard Shield from Bosses'Rise chests (Ancient Iron also drops from the [[bosses/optional-and-world/wither-knight|Wither Knight]]).

## Usage

- **Dragon Bone** makes the Dragon Bones armor and the Dragon Guard Shield, and goes into Soulrend's Titanium armor upgrades.
- **Ancient Iron Ingot** makes the Knight armor, the Enhanced Shield and the Warrior Sword.
- **Sandworm Scale** upgrades armor into the Centinel set.
- **Sandworm Dart:** left-click fires a poisonous dart. Right-click reloads it by spending the holder's health; a poisoned holder spends the poison instead.
- **Dragon Guard Shield:** an off-hand shield (+1 Armor, +2 Armor Toughness, −10% Speed while held). Its "Hold [LEFT ALT]" line is Soulslike Weaponry's parry, which every shield has: the parry key parries an attack, with a 2 s cooldown.
- **Dragon Shank** (food, on [[items/consumables/food|Food]]) comes from the [[Ender Dragon]], not from a Bosses'Rise boss: a dragon killed by a hit from someone holding the [[item:block_factorys_bosses:knight_sword]] drops 12 Dragon Shanks.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:block_factorys_bosses:dragon_bone]] | Bosses'Rises |  | 1 loot table |
| [[item:block_factorys_bosses:sandworm_dart]] | Bosses'Rises | Shoot Poisonous Dart; Consume health to recharge; (Consume poison if poisoned) | 2 loot tables |
| [[item:block_factorys_bosses:ancient_iron_ingot]] | Bosses'Rises |  | crafting, 4 loot tables |
| [[item:block_factorys_bosses:dragon_shank]] | Bosses'Rises | 4 hunger, 2 saturation |  |
| [[item:block_factorys_bosses:dragon_guard_shield]] | Bosses'Rises | +1 Armor; +2 Armor Toughness; -10% Speed; 1 Targets per swing | crafting, 1 loot table |
| [[item:astral_calamity_extras:sandworm_scale]] | Astral Calamity Extras | A tough scale of the desert predator. | 1 loot table |

[[item:block_factorys_bosses:dragon_shank]] has its own entry on another page.

## Dragon Bone

[[item:block_factorys_bosses:dragon_bone]] (Bosses'Rises, uncommon)

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `block_factorys_bosses:bosses/infernal_dragon` (mob drop) | 100% | 8–19 |

### Used in

{{uses block_factorys_bosses:dragon_bone limit=6}}

## Sandworm Dart

[[item:block_factorys_bosses:sandworm_dart]] (Bosses'Rises, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Shoot Poisonous Dart | On Left-Click |
|  | Consume health to recharge | On Right-Click |
|  | (Consume poison if poisoned) | On Right-Click |

### Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `block_factorys_bosses:bosses/sandworm` (mob drop) | 100% | 1 |
| [[bosses/act-ii/sandworm\|Sandworm]] (drop) | 100% | 1 |

## Ancient Iron Ingot

[[item:block_factorys_bosses:ancient_iron_ingot]] (Bosses'Rises)

### Obtaining

4 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `block_factorys_bosses:chests/dragon_trial` (chest) | 11.8% | 2–3 |
| [[bosses/optional-and-world/wither-knight\|Wither Knight]] (drop) | 8.82% per roll, 0–1 rolls | 0–1 |
| `block_factorys_bosses:chests/undead_arena_rare` (chest) | 8.33% per roll, 1–2 rolls | 1–2 |
| `block_factorys_bosses:chests/dragon_tower_common` (chest) | 4% per roll, 0–1 rolls | 0–1 |

It can also be crafted (see below).

### Crafting

{{recipes block_factorys_bosses:ancient_iron_ingot}}

### Used in

{{uses block_factorys_bosses:ancient_iron_ingot limit=6}}

## Dragon Guard Shield

[[item:block_factorys_bosses:dragon_guard_shield]] (Bosses'Rises, uncommon)

| Stat | Value | When |
| --- | --- | --- |
| Armor | +1 | When in Off Hand |
| Armor Toughness | +2 | When in Off Hand |
| Speed | -10% | When in Off Hand |
| Targets per swing | 1 | Epic Fight Attributes |

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `block_factorys_bosses:chests/dragon_tower_common` (chest) | 4% per roll, 0–1 rolls | 0–1 |

It can also be crafted (see below).

### Crafting

{{recipes block_factorys_bosses:dragon_guard_shield}}

## Sandworm Scale

[[item:astral_calamity_extras:sandworm_scale]] (Astral Calamity Extras, uncommon)

Its tooltip says:

- A tough scale of the desert predator.

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/sandworm\|Sandworm]] (drop) | 100% | 4 |

### Used in

{{uses astral_calamity_extras:sandworm_scale}}
