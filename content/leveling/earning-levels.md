---
{
  "title": "Earning Levels",
  "category": "Leveling",
  "order": 1,
  "summary": "Levels come from damage dealt to mobs: 50 damage for level 1, rising to 50,000,000 for level 200.",
  "aliases": ["Skill Points from Damage", "Level Curve", "Damage Threshold"],
  "icon": "minecraft:experience_bottle"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerEvents.recordDamageProgress (causing entity must be a ServerPlayer; target not a Player; not damage type iceandfire:gorgon; not in damageExcludedTargets; thrown trident ignored when the player is more than 3 blocks (distSqr 9) from the target), meaningfulDamage (round(min(amount, health + absorption))), onLivingHurt (skips bosses under BossDamageLimit), onCappedBossDamage (counts those after the cap)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerData.applySkilltreeDamageProgress (progress kept as a running total; each level subtracts its own requirement; stops at 200), skilltreeLevelupRequirement (50 × exp(ln(1,000,000) × t)), skilltreeDecayCurve, skilltreeEarlyEasing (first 60 levels), skilltreeFinalSprintEasing (from level 179, over 20 levels)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerData.SKILLTREE_LEVELUP_MILESTONES (read by loading the class on Java 21; 200 entries, 50 to 50,000,000)
  config/soulrend_core/common.toml [skilltree] damageExcludedTargets (dummmmmmy:target_dummy, valarian_conquest:gate_entity, valarian_conquest:wooden_gate; the comment says Weapons of Miracles' Hollow is always excluded)
  calc: cumulative = running sum of the milestones; level 100 = 11,773,327; level 200 = 668,446,815; levels 191-200 = 668,446,815 - 311,061,003 = 357,385,812; growth = milestone[n] / milestone[n-1]
  note: config/skilltree-mkp.toml belongs to no installed mod and has no effect
-->
**Earning levels** works through damage: every point of damage a player deals to a mob adds to their level progress, and each level needs a set amount. The first level needs 50 damage. The requirement grows with every level, up to 50,000,000 damage for the last one, level 200. See [[leveling|Leveling]] for what each level gives.

## What counts

Damage counts toward the next level when all of these hold:

- **The player dealt it.** Melee hits, arrows and spells count, because the game credits them to the player. Damage from pets, summons and other companions doesn't count, because the game credits it to the creature.
- **The target is a mob, not a player.** PvP damage doesn't count.
- **The target isn't excluded.** Target dummies, Valarian Conquest gates and Weapons of Miracles' Hollow don't count.
- **It isn't a far-off trident.** A thrown trident only counts if the player is within 3 blocks of the target.
- **It isn't Ice and Fire's gorgon damage** (petrification).

Only damage the target could actually take counts: a hit counts for at most the target's remaining health plus absorption, so overkill is wasted. Against bosses with a [[features/combat/boss-damage-limits|damage limit]], only the damage that gets through the limit counts.

## The level curve

Progress is a running total of damage. When it reaches the requirement for the next level, the player levels up, the requirement is subtracted and any extra carries over. One big hit can give several levels at once.

Each level's requirement follows the formula

```
requirement = 50 × 1,000,000^t
```

where *t* runs from 0 for level 1 to 1 for level 200. The game shapes *t* so that the requirement grows by about 36% per level at the start, easing to about 7% by level 25. It speeds up to 8–10% per level between levels 40 and 60, then slows: about 5% per level at level 100 and 1.5% from level 150 to 180. Over the last twenty levels it steepens again, by up to 18% per level.

| Level | Damage for this level | Total damage from level 0 |
| --- | --- | --- |
| 1 | 50 | 50 |
| 5 | 157 | 486 |
| 10 | 492 | 2,166 |
| 20 | 1,917 | 14,288 |
| 25 | 2,833 | 26,575 |
| 30 | 3,959 | 43,984 |
| 40 | 8,442 | 104,460 |
| 50 | 21,527 | 249,836 |
| 60 | 52,153 | 617,073 |
| 75 | 156,073 | 2,100,356 |
| 100 | 690,496 | 11,773,327 |
| 125 | 1,758,768 | 42,052,700 |
| 150 | 3,070,633 | 102,838,365 |
| 175 | 4,565,484 | 198,358,637 |
| 180 | 4,918,913 | 222,235,450 |
| 185 | 7,301,064 | 252,262,000 |
| 190 | 15,875,620 | 311,061,003 |
| 195 | 34,310,406 | 442,069,757 |
| 200 | 50,000,000 | 668,446,815 |

Reaching level 200 takes about 669 million damage in total. More than half of that (357 million) goes into the last ten levels.

> [!TIP]
> Mob health grows with the player's level (see [[leveling/mob-levels|Mob Levels]]), so stronger mobs also give more progress per kill. Bosses with a fixed high level are worth the most.

## Details

- The Levelling screen shows progress as "Progress *damage* / *requirement*".
- A chat message announces each level-up. Every 50th level adds "I must commend you for your persistence, traveler...".
- At level 200 progress stops; further damage is not stored.
- Skill points can also come from a [[item:skilltree:wisdom_scroll]]. These don't raise the Soulrend level.

## Related

- [[leveling/stats|Stats]]
- [[skill-trees|Skill Trees]]
- [[faq/skills-and-levelling/how-do-i-earn-skill-points|How do I earn skill points?]]
