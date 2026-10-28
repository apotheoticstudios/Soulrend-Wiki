---
{
  "title": "Ó Brolacháin, the Scarlet Hunter",
  "summary": "The NightFall boss of the Ancient Church in the Past; Soulrend raises its base health to 12,000, and it drops two Epic Fight skill books.",
  "aliases": ["Scarlet Hunter", "Brad", "Ó Brolacháin", "O Brolachain"],
  "items": ["nightfall_invade:scarlet_hunter_spawn_egg"],
  "infobox": {
    "item": "nightfall_invade:scarlet_hunter_spawn_egg",
    "model": "nightfall_invade:scarlet_hunter",
    "rows": [
      ["ID", "`nightfall_invade:scarlet_hunter`"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Health", "728,400 HP (level 200)"],
      ["Location", "Ancient Church, the Past"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:nightfall_invade:disaster_fragment_red]], Blood Boom and Blood Slash skill books"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (CONFIG.PAST.BOSSES: renamed "Ó Brolacháin, The Scarlet Hunter" in red; max health base 12,000, attack damage base 2,000, health set to 12,000 on spawn; no soldiers within 96 blocks)
  mods/nightfall_invade-1.3.3.jar ScarletHunter.createAttributes (350 max health, 1 attack damage, 10 armor, 10 armor toughness, 1.0 knockback resistance, 0.3 movement speed, 64 follow range; Epic Fight: 20 stun armor, 60 max stamina); lang ("<Scarlet Hunter - Brad>"); skills BloodBoomSkill, BloodSlashSkill
  config/nightfall_invade-common.toml ["Scarlet Hunter Config"] (single hits capped at 4% of max health; damage reduction reaches 90% after 6% of max health taken and decays over 160 ticks; blood shield lasts 2,400 ticks with a 2,400-tick cooldown)
  mods/nightfall_invade-1.3.3.jar AncientChurch$Piece (spawns NFIEntities.SCARLET_HUNTER and Fallen Knights); config/paxi/datapacks/soulrend_worldgen/data/nightfall_invade/worldgen/structure/ancient_church.json (biome soulrend:dead_wasteland) and the jar's structure_set (spacing 50, separation 30, 10 chunks from villages)
  mods/nightfall_invade-1.3.3.jar data/nightfall_invade/loot_tables/entities/scarlet_hunter.json (player kill: Disaster Fragment - Red, Blood Boom skill book, Blood Slash skill book)
  config/soulrend_core/boss_damage.toml (not listed)
  config/ftbquests/quests/chapters/duties.snbt (Enter Ancient Church, Defeat Scarlet Hunter Ó Brolacháin, Blessing of Mortusest)
  calc: Past base × level 200 multipliers (health × 60.7, attack × 20.9, armor × 3.189)
        L200: health 12,000 × 60.7 = 728,400; attack 2,000 × 20.9 = 41,800; armor 10 × 3.189 = 31.9
        hit cap 4% = 29,136; maximum reduction at 6% = 43,704
-->
**Ó Brolacháin, the Scarlet Hunter** is a blood-magic hunter from NightFall: Invade who rules the Ancient Church. The mod itself names it "Brad"; Soulrend renames it **Ó Brolacháin, The Scarlet Hunter**. The church only exists in the Past, the dimension of [[progression/act-v-duties|Act V]], and the Scarlet Hunter is one of the act's two bosses.

## Location

The Scarlet Hunter waits in the Ancient Church (`nightfall_invade:ancient_church`), which Soulrend places only in the Dead Wasteland biome of the Past, at most once per 50 × 50 chunk area. [[Fallen Knight|Fallen Knights]] guard the church. The Past is reached with the [[item:kubejs:emblem_of_the_past]] (see [[features/mobs-and-world/the-past|The Past]]).

No Past soldiers spawn within 96 blocks of the Scarlet Hunter.

## Stats

The NightFall mod gives the Scarlet Hunter 350 health and 1 attack damage. In the Past, Soulrend replaces those bases with 12,000 health and 2,000 attack damage when it spawns, and the level bonus then multiplies the new bases. It has no level setting, so its level is the nearest player's Soulrend level. The last column uses Act V's typical level, the player cap of 200 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Mod base | Past base | Level 200 |
| --- | --- | --- | --- |
| Health | 350 HP | 12,000 HP | **728,400 HP** (364,200 hearts) |
| Attack damage | 1 | 2,000 | **41,800** |
| Armor | 10 | 10 | **31.9** |
| Armor toughness | 10 | 10 | 10 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.3 | 0.3 | 0.3 |

It isn't on Soulrend's boss damage list, but the NightFall config gives it its own defenses:

- A single hit can't take more than 4% of its maximum health (29,136 HP at level 200).
- Damage it takes builds up a damage reduction that reaches 90% once it has taken 6% of its maximum health (43,704 HP), then fades over 8 s.

## Attacks

The Scarlet Hunter fights with Epic Fight animations and blood magic:

- **Blood Slash** and **Blood Boom**, the two skills it drops as skill books;
- a **blood shield** that lasts 2 minutes, with a 2-minute cooldown.

<!-- TODO: attack list (ScarletHunterAI and its Epic Fight patch). -->

## Strategy

- **Expect a long fight.** With a 4% per-hit cap and up to 90% damage reduction, steady damage over time works far better than big hits.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:nightfall_invade:disaster_fragment_red]] | 1 | Player kill |
| [[item:epicfight:skillbook]] (Blood Boom) | 1 | Player kill |
| [[item:epicfight:skillbook]] (Blood Slash) | 1 | Player kill |

## Quests

In the [[progression/act-v-duties|Act V – Duties]] chapter, **Enter Ancient Church** (after Visit the Past) rewards 5 XP levels.

**Defeat Scarlet Hunter Ó Brolacháin** requires killing it. Rewards:

- [[item:efn:yamato_dmc_in_sheath]]
- a roll on the Perfect Gems reward table
- 50 XP levels

Together with [[Arterius, the Last Watcher]] it opens **Blessing of Mortusest**, which rewards the [[item:cataclysm:zweiender]]. See [[progression/act-v-duties/defeat-the-scarlet-hunter|Defeat The Scarlet Hunter]].
