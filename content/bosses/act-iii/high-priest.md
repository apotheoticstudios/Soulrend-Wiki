---
{
  "title": "High Priest",
  "summary": "A level 150 blood priest in the Nether's Cathedral that teleports, heals itself and summons Failures.",
  "items": ["dungeons_and_combat:high_priest_spawn_egg"],
  "infobox": {
    "item": "dungeons_and_combat:high_priest_spawn_egg",
    "model": "dungeons_and_combat:high_priest",
    "rows": [
      ["ID", "`dungeons_and_combat:high_priest`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "150 (fixed)"],
      ["Health", "14,624 HP"],
      ["Location", "The Cathedral, Nether"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:dungeons_and_combat:blood_orb]], [[item:dungeons_and_combat:blood_vial]] ×3–6, [[item:dungeons_and_combat:ritual_bone]] ×3–6"],
      ["Chance", "[[item:dungeons_and_combat:crimson_smithing_template]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/dungeons_and_combat/leveling_settings/entities/high_priest.json (starting_level 150 = max_level 150)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar HighPriestEntity.createAttributes (320 max health, 0 attack damage, 12 armor, 0.6 knockback resistance, 0.2 movement speed, 16 follow range)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar HighPriestOnEntityTickUpdateProcedure (teleport with enderman sound; summons dungeons_and_combat:failure and weakness_despawn ("Weakness") with evoker summon sound; drinks (witch drink sound) and gains Regeneration)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/worldgen/structure/the_cathedral.json (crimson_forest, nether_wastes; start y >= 30), structure_set (spacing 41, separation 30); structures/the_cathedral.nbt and the_church.nbt (both hold a High Priest); the_church.json (crimson_forest; spacing 52, separation 21)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/loot_tables/entities/high_priest.json
  config/soulrend_core/boss_damage.toml (dungeons_and_combat:high_priest=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Find Structure: The Cathedral", "Defeat The High Priest"
  calc: level 150 -> Auto Leveling level 149
        health 320 × (1 + 0.3 × 149) = 14,624; armor 12 × (1 + 0.011 × 149) = 31.7
        damage cap 20% × 14,624 = 2,924.8 HP per second -> at least 5 s
-->
**High Priest** is the master of the Cathedral, a Nether structure. It is an [[progression/act-iii-into-the-flames|Act III]] boss, and it doesn't fight with weapons: it teleports around, heals itself and lets summoned creatures do the fighting.

## Location

The High Priest waits in the Cathedral (`dungeons_and_combat:the_cathedral`), which generates in Crimson Forests and Nether Wastes, at most once per 41 × 41 chunk area. A second High Priest, together with an Aberrator, lives in the Church (`dungeons_and_combat:the_church`) in Crimson Forests. The [[item:explorerscompass:explorerscompass]] can search for both.

Only the Cathedral counts for the quest that finds the structure, but killing either High Priest completes the kill quest.

## Stats

The High Priest's level is fixed at 150, so its stats never change. See [[leveling/mob-levels|Mob Levels]] for how levels scale other mobs.

| Stat | Base | Level 150 |
| --- | --- | --- |
| Health | 320 HP | **14,624 HP** (7,312 hearts) |
| Attack damage | 0 | 0 |
| Armor | 12 | **31.7** |
| Knockback resistance | 60% | 60% |
| Movement speed | 0.2 | 0.2 |
| Follow range | 16 blocks | 16 blocks |
| Damage cap | | 20% of max health per second (2,924.8 HP), so a kill takes at least 5 s |

## Attacks

The High Priest has no melee attack of its own. Instead it:

- **teleports**;
- **summons Failures** and **Weakness** creatures to attack;
- **drinks** to gain Regeneration.

<!-- TODO: summon counts, conditions and cooldowns (procedure HighPriestOnEntityTickUpdate). -->

## Strategy

- **Stop the healing.** Regeneration undoes damage between bursts; keep up constant pressure.
- **Deal with the summons.** The priest has no attack damage of its own, so its summons do the fighting.
- **Sustained damage beats burst.** The damage cap blocks anything above 2,924.8 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:blood_orb]] | 1 | Always |
| [[item:dungeons_and_combat:blood_vial]] | 3–6 | Always |
| [[item:dungeons_and_combat:ritual_bone]] | 3–6 | Always |
| [[item:dungeons_and_combat:crimson_smithing_template]] | 0–1 | Always rolled |
| [[item:dungeons_and_combat:fleshy_cloth]] | 0–6 | Always rolled |
| [[item:dungeons_and_combat:estus_flask]] | 0–3 | Always rolled |

{{uses dungeons_and_combat:crimson_smithing_template}}

## Quests

**Find Structure: The Cathedral** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) requires finding the Cathedral. Rewards: a roll on the Structure Loot reward table and 2 XP levels.

**Defeat The High Priest** requires killing a High Priest. Rewards: a roll on the Flawed Gems reward table and 3 XP levels. See [[progression/act-iii-into-the-flames/defeat-the-high-priest|Defeat The High Priest]].
