---
{
  "title": "Leveling",
  "navTitle": "Overview",
  "category": "Leveling",
  "order": 0,
  "summary": "Soulrend levels: dealing damage raises your level to 200, and each level gives a skill point and an attribute point.",
  "aliases": ["Soulrend Level", "Levelling", "Level Up"]
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerData (MAX_SKILLTREE_POINTS 200, SKILLTREE_POINTS_PER_MILESTONE 1, attribute points only while the new level is <= 180, getSoulrendLevel = SkilltreePointProgress, copySoulrendData on PlayerEvent.Clone)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerEvents (onLivingHurt / onCappedBossDamage -> recordDamageProgress -> grantPassiveSkillPoints; onPlayerClone)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendStats (6 stats, MAX_STAT_LEVEL 30)
  mods/soulrend_core-2.7-1.20.1.jar CompanionLeveling.applyOwnerLevel (owned companions take the owner's Soulrend level)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendCommands ("/soulrend level|skillpoints set|reset", permission level 2, level 0-200)
  mods/soulrend_core-2.7-1.20.1.jar assets/soulrend_core/lang/en_us.json (screen and menu names)
  config/soulrend_core/common.toml [mobLeveling] (mob levels follow the player's Soulrend level)
  config/ftbquests/quests/chapters/the_realms.snbt "Leveling Up" (leveling screen is a tab in the inventory)
-->
**Leveling** is Soulrend's main progression system. Dealing damage to mobs fills a progress bar, and each time it fills the player gains a **Soulrend level**. Levels run from 0 to 200. Each level gives one skill point for the [[skill-trees|skill trees]], and levels 1 to 180 also give one attribute point for the six [[leveling/stats|stats]].

The Soulrend level also sets how strong mobs are: most new mobs take the level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Companions a player owns take their owner's level too.

## How it works

| Step | What happens |
| --- | --- |
| Deal damage | Damage to mobs adds to the level progress. See [[leveling/earning-levels|Earning Levels]] for what counts. |
| Level up | When the progress reaches the level's requirement, the player gains a level. Extra damage carries over to the next level. |
| Rewards | 1 skill point every level, up to 200. 1 attribute point every level up to 180. |
| Spend | Skill points go into the [[skill-trees|skill trees]] (O key). Attribute points go into the six stats on the Levelling screen. |

The Prologue quest [[progression/prologue/leveling-up|Leveling Up]] introduces the system.

## The Levelling screen

The Levelling screen is a tab in the inventory, next to the Origins, Skill Tree, Quests and Combat Skills tabs. It shows the player's level, rank, progress toward the next level ("Progress *damage* / *requirement*") and the skill points earned so far. Its menus are:

- **Attributes:** the player's current attribute values, grouped into sections (Core, Combat, Defense, Vigor, Resist, Spell, Utility and others).
- **Stats:** where attribute points are spent. See [[leveling/stats|Stats]].
- **Titles:** where a title is chosen. See [[leveling/titles-and-ranks|Titles & Ranks]].
- **Skills**, **Perks**, **Origins** and **Factions**.

## Details

- **Death doesn't reset anything.** Level, progress, stats and title are copied to the respawned player.
- **The cap is 200.** At level 200 damage stops counting.
- **Attribute points stop at 180.** That is exactly enough to raise all six stats to their maximum of 30.
- **Server operators** can set or reset a level with `/soulrend level set <players> <level>` and `/soulrend level reset <players>` (`/soulrend skillpoints` works the same way). Both need permission level 2.

## In this section

- [[leveling/earning-levels|Earning Levels]]: what damage counts and how much each level needs.
- [[leveling/stats|Stats]]: the six stats and what each point gives.
- [[leveling/titles-and-ranks|Titles & Ranks]]: titles to display and the rank shown on the Levelling screen.
- [[leveling/mob-levels|Mob Levels]]: how mobs take the level of nearby players, and which bosses have fixed levels.
