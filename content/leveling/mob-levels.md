---
{
  "title": "Mob Levels",
  "category": "Leveling",
  "order": 4,
  "summary": "Most mobs spawn at the Soulrend level of the nearest player, so the world grows stronger as you level. Some bosses have a level floor or a fixed level.",
  "aliases": ["Mob Levelling", "Mob Leveling", "Mob Scaling", "Auto Leveling"]
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendAutoLeveling.resolveAutoLevel (floor, cap and random bonus from the entity's leveling settings), resolvePlayerLevel (nearest eligible player in the mob's dimension; average of eligible players within playerAverageRadius of that player; no eligible player -> 0), isEligible (alive, not spectator, not a FakePlayer), averagePlayerLevel (rounded, clamped 0-200), presetVisibleLevel (max(starting, player) + roll, min max_level if > 0, at least 1), randomBonusRoll (0..random_level_bonus inclusive), clampSavedLevel / storedLevelCeiling (saved levels above the mob's ceiling are lowered on load; owned companions skipped)
  mods/soulrend_core-2.7-1.20.1.jar MobsLevelingEventsMixin (replaces Auto Leveling's createLevelForEntity while [mobLeveling] enabled; owned companions handled by CompanionLeveling)
  mods/soulrend_core-2.7-1.20.1.jar CompanionLeveling (owned companions take the online owner's Soulrend level and are re-checked while loaded)
  config/soulrend_core/common.toml [mobLeveling] (enabled = true, applyAutoLevelingBonuses = false, playerAverageRadius = 60.0)
  config/paxi/datapacks/soulrend_mob_leveling/data/*/leveling_settings/entities/*.json (70 files: 22 with starting_level == max_level, 48 with a floor only; 5 with random_level_bonus)
  config/autoleveling-common.toml [Attributes] (attack 0.1, armor 0.011, max health 0.3, projectile and explosion damage 0.1 per level), [Mobs] (never-level list, "Only show levels when you look at the mob" = true, "Bonus experience per level" = 0.35)
  calc: health 1 + 0.3 × (level - 1): level 10 = ×3.7, 40 = ×12.7, 100 = ×30.7, 200 = ×60.7; attack 1 + 0.1 × (level - 1): ×1.9, ×4.9, ×10.9, ×20.9
-->
**Mob levels** decide how strong a mob is. In Soulrend, most mobs don't get their level from where they spawn or from the act you are in. Instead, a new mob usually takes the **Soulrend level** of the nearest player (the level earned from damage, see [[leveling|Leveling]]). A level 40 player mostly meets level 40 mobs, and the world keeps pace as the player levels up.

Soulrend Core does this by replacing Auto Leveling's usual calculation, which raises levels with distance from spawn. Auto Leveling still turns the level into stats.

## How a mob's level is chosen

When a mob spawns, it picks its level once:

1. **Find the nearest player** in the mob's dimension. Dead players, spectators and fake players (machines that act as players) are skipped. Creative-mode players count.
2. **Average with that player's group.** Every eligible player within 60 blocks of that player is averaged in, rounded to a whole level. A solo player sets the level alone. Players exploring far apart are never averaged together.
3. **Apply the mob's own settings.** Some mobs have a floor, a cap or a random bonus (see below).

The result is always at least level 1. If no eligible player is in the dimension, the mob takes its floor, or level 1.

The level is kept for the mob's whole life. It doesn't change when a stronger or weaker player walks up to it later, so mobs that spawned while a low-level friend was nearest stay weak. This also covers mobs in structures that generate at the edge of view distance: they take the level of the player who loaded them.

Hovering the crosshair over a mob shows its level.

## Floors, caps and fixed levels

Soulrend gives 70 mobs, mostly bosses, their own settings. The level is worked out as:

```
level = min(max(floor, player level) + random bonus, cap)
```

| Setting | Effect | Example |
| --- | --- | --- |
| **Floor** | The mob is never below this level, but it still follows players above it. 48 mobs have only a floor. | The [[bosses/act-iii/wither|Wither]] is at least level 150. |
| **Fixed level** | Floor and cap are the same, so the player's level doesn't matter. 22 mobs are fixed. | [[bosses/act-ii/frostmaw|Frostmaw]] is always level 60. |
| **Random bonus** | Adds 0 to the bonus value on top of the floor, up to the cap. 5 mobs have one. | The [[bosses/act-iii/forsaken|Forsaken]] is level 400 to 440. |

The player's level stops at 200, but these settings don't. Some fixed bosses are far above it, such as the [[bosses/act-iv/ender-dragon|Ender Dragon]] at level 467. Each boss page states its level setting.

Some mobs never level up at all and keep their base stats: most passive animals and fish, Iron's Spellbooks summons, and a few bosses such as the [[bosses/act-ii/mother-of-the-maze|Mother of the Maze]] and three of the [[bosses/optional-and-world/battle-tower-golems|Battle Tower golems]].

## Companions

Tamed animals, pets and other companions a player owns don't use the nearest player. They take their **owner's** Soulrend level, and keep following it as the owner levels up, as long as the owner is online.

## What a level does

Auto Leveling raises a mob's stats by a fixed share of its base value for every level above 1:

| Stat | Bonus per level | Level 10 | Level 40 | Level 100 | Level 200 |
| --- | --- | --- | --- | --- | --- |
| Max health | +30% | ×3.7 | ×12.7 | ×30.7 | ×60.7 |
| Attack damage | +10% | ×1.9 | ×4.9 | ×10.9 | ×20.9 |
| Projectile and explosion damage | +10% | ×1.9 | ×4.9 | ×10.9 | ×20.9 |
| Armor | +1.1% | ×1.1 | ×1.4 | ×2.1 | ×3.2 |

Higher-level mobs also drop more experience (a bonus of 0.35 per level in Auto Leveling's config) and resist bleed buildup better.

Because mob health grows with the player, every kill keeps giving damage toward the next level (see [[leveling/earning-levels|Earning Levels]]).

## Details

- **Saved mobs are corrected.** When an old mob loads with a level higher than its settings allow (for example from Auto Leveling's distance formula, which reaches very high levels near the world border), it is lowered to the highest level it could have. Companions are left alone.
- **Dimension settings do nothing.** Soulrend's datapack also has per-dimension level settings, but they are ignored while Soulrend's mob leveling is on.
- **World and day bonuses are off.** Auto Leveling's `/autoleveling` level bonus and its "level bonus per day" setting are ignored in Soulrend's config.
