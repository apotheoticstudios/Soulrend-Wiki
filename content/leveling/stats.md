---
{
  "title": "Stats",
  "category": "Leveling",
  "order": 2,
  "summary": "The six leveling stats (CON, STR, AGI, INT, LCK, FOC): what each point gives, the cap of 30 and how to respec.",
  "aliases": ["Levelling Stats", "Leveling Stats", "Attribute Points", "Constitution", "Strength", "Agility", "Intelligence", "Luckiness", "Focus"]
}
---
<!-- sources:
  config/soulrend_core/stats.toml [bonuses] (per-point bonuses; the file's comment: saving it updates online players without a restart)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendStats (order constitution, strength, agility, intelligence, luckiness, focus; MAX_STAT_LEVEL 30; bonuses applied as ADDITION modifiers of amount × points)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerData.applyStatAllocations (adds up to 30 per stat; negative allocations refund points), applySkilltreeDamageProgress (1 attribute point per level while the new level is <= 180), MAX_STAT_POINT_LEVEL 180
  mods/soulrend_core-2.7-1.20.1.jar LevellingScreen.canQueueStatPoint / canRemoveStatPoint (− allowed while a stat is above 0), applyStatPoint -> SoulrendNetwork.sendApplyLevelling
  mods/soulrend_core-2.7-1.20.1.jar assets/soulrend_core/lang/en_us.json (stat names and CON/STR/AGI/INT/LCK/FOC abbreviations)
  game-data/attributes.json (attribute names; Arrow Damage, Spell Power, Experience Gained and Mana Regeneration start at 1.0 = 100%)
  calc: at 30 points = per-point amount × 30
-->
The **stats** are six character attributes raised with attribute points from [[leveling|leveling]]: Constitution, Strength, Agility, Intelligence, Luckiness and Focus. Each point in a stat adds a fixed bonus to two attributes. Each stat goes up to 30, and a character earns 180 attribute points in total (one per level from 1 to 180), enough to max all six.

## What each stat gives

| Stat | Each point gives | At 30 points |
| --- | --- | --- |
| **Constitution** (CON) | +1 Max Health, +0.05 Armor Toughness | +30 Max Health (15 hearts), +1.5 Armor Toughness |
| **Strength** (STR) | +0.15 Attack Damage, +1.5% Armor Shred | +4.5 Attack Damage, +45% Armor Shred |
| **Agility** (AGI) | +0.002 Speed, +1.5% Arrow Damage | +0.06 Speed, +45% Arrow Damage |
| **Intelligence** (INT) | +0.5% Spell Power, +1 Max Mana | +15% Spell Power, +30 Max Mana |
| **Luckiness** (LCK) | +0.04 Luck, +1% Experience Gained | +1.2 Luck, +30% Experience Gained |
| **Focus** (FOC) | +1 Max Mana, +15% Mana Regeneration | +30 Max Mana, +450% Mana Regeneration |

All bonuses are flat additions. Percentages are added to stats that start at 100%: +45% Arrow Damage takes Arrow Damage from 100% to 145%.

## Spending points

Points are spent in the **Stats** menu of the Levelling screen (a tab in the inventory). The + and − buttons queue changes and the **Level Up** button applies them.

- A stat can't go above 30.
- **Respeccing is free.** The − button takes a point out of any stat above 0 and returns it, so points can be moved between stats at any time.
- Unspent points are kept.

## Titles from stats

Reaching 16 and 30 points in a stat unlocks a title:

| Stat | 16 points | 30 points |
| --- | --- | --- |
| Constitution | Warrior | Great Warrior |
| Strength | Fighter | Great Fighter |
| Agility | Ranger | Great Ranger |
| Intelligence | Alchemist | Great Alchemist |
| Luckiness | Lucky One | Great Lucky One |
| Focus | Magician | Great Magician |

See [[leveling/titles-and-ranks|Titles & Ranks]].

## Related

- [[leveling/earning-levels|Earning Levels]]
- [[faq/skills-and-levelling/what-do-the-levelling-stats-do|What do the levelling stats do?]]
