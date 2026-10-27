---
{
  "title": "Totems",
  "aliases": [
    "Totem of Freezing",
    "Totem of Illusion",
    "Totem Of Sacrifice"
  ],
  "summary": "Three totems that trigger in a fight: the Totem of Freezing, the Totem of Illusion and the Totem Of Sacrifice.",
  "items": [
    "friendsandfoes:totem_of_freezing",
    "friendsandfoes:totem_of_illusion",
    "dungeons_and_combat:totem_of_sacrifice"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json
  mods/friendsandfoes-forge-5.0.3+mc1.20.1.jar PlayerEntityMixin.friendsandfoes_tryUseTotems (hands or Curios slots; Speed 200 ticks after Freezing), TotemUtil.freezeEntities (living entities within 9 blocks: frozen and Slowness, 400 ticks), TotemUtil.createIllusions (illusions of the player, Invisibility 200 ticks)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar TotemOfSacrificieProcedure (LivingDeathEvent, main or off hand: cancels death, health set to 4, removes 1 totem; Regeneration II 600, Fire Resistance 1800, Water Breathing III 1800, Resistance II 1800, Blindness III 100, Strength II 600, Haste II 600, Speed 600, Fatal Oath 1000 ticks), FatalOathEffectProcedure (every tick: 2 damage while health >= max health - 8)
-->

**Totems** are held items that trigger by themselves in a fight. The two Friends&Foes totems fire when their holder drops below half health; the Dungeons and Combat **Totem Of Sacrifice** stops a death, at a price.

## Usage

| Totem | Triggers | Effect |
| --- | --- | --- |
| Totem of Freezing | a hit takes the holder below half health | freezes every living entity within 9 blocks and slows it for 20 s; the holder gets Speed for 10 s |
| Totem of Illusion | a hit takes the holder below half health | surrounds the holder with illusions of themselves and makes them invisible for 10 s |
| Totem Of Sacrifice | the holder would die | cancels the death and leaves the holder at 4 HP, with the effects below |

The Friends&Foes totems work in either hand or in a Curios slot. The Totem Of Sacrifice must be in the main hand or off hand, and one totem is used up.

**Totem Of Sacrifice effects:** Regeneration II (30 s), Strength II (30 s), Haste II (30 s), Speed (30 s), Fire Resistance (90 s), Resistance II (90 s), Water Breathing (90 s), Blindness for 5 s, and **Fatal Oath** for 50 s.

> [!WARNING]
> Fatal Oath deals 2 damage every tick while its holder's health is within 8 HP of their maximum, so for 50 s the holder can't heal above 4 hearts below full.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:friendsandfoes:totem_of_freezing]] | Friends&Foes | Triggers when taking damage and health falls below half of your max health. | 1 loot table |
| [[item:friendsandfoes:totem_of_illusion]] | Friends&Foes | Triggers when taking damage and health falls below half of your max health. | 1 loot table |
| [[item:dungeons_and_combat:totem_of_sacrifice]] | dungeons and combat |  | 1 loot table |

## Friends&Foes totems

### Totem of Freezing

[[item:friendsandfoes:totem_of_freezing]] (Friends&Foes, uncommon)

Its tooltip says:

- Triggers when taking damage and health falls below half of your max health.

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| Elite Iceologer (drop) | 100% | 1 |

### Totem of Illusion

[[item:friendsandfoes:totem_of_illusion]] (Friends&Foes, uncommon)

Its tooltip says:

- Triggers when taking damage and health falls below half of your max health.

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| Illusioner (drop) | 100% | 1 |

## Totem Of Sacrifice

[[item:dungeons_and_combat:totem_of_sacrifice]] (dungeons and combat, uncommon)

Held in either hand, it saves its holder from death once; see [[#Usage]].

### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:chests/weak_cult` (chest) | 10% | 1 |
