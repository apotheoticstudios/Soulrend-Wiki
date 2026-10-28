---
{
  "title": "The GraveWatcher",
  "summary": "A level 20 guardian of the Field of the Fallen that summons Palehands; the first Dungeons and Combat boss of Act II.",
  "aliases": ["GraveWatcher", "Gravewatcher", "Grave Watcher"],
  "items": ["dungeons_and_combat:the_grave_watcher_spawn_egg"],
  "infobox": {
    "item": "dungeons_and_combat:the_grave_watcher_spawn_egg",
    "model": "dungeons_and_combat:the_grave_watcher",
    "rows": [
      ["ID", "`dungeons_and_combat:the_grave_watcher`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "20 (fixed)"],
      ["Health", "670 HP"],
      ["Location", "Field of the Fallen, forests and plains"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:dungeons_and_combat:cursed_soul]] ×4"],
      ["Chance", "[[item:dungeons_and_combat:cursed_silk]] ×0–8"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/dungeons_and_combat/leveling_settings/entities/the_grave_watcher.json (starting_level 20 = max_level 20)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar TheGraveWatcherEntity.createAttributes (100 max health, 1 attack damage, 0 armor, 0.7 knockback resistance, 0.4 attack knockback, 0.2 movement speed, 16 follow range)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar TheGraveWatcherIAProcedure (melee sweeps and crits; spawns 4 dungeons_and_combat:palehand per summon; bell sound)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar PalehandEntity.createAttributes (10 max health)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/worldgen/structure/the_field_of_the_fallen.json (dark_forest, plains, forest, snowy_taiga), structure_set (spacing 58, separation 20)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/loot_tables/entities/the_grave_watcher.json (Cursed Silk 0-8, Estus Flask 0-3, Cursed Soul 1)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (dungeons_and_combat:the_grave_watcher: 3 Cursed Souls, dropchance 1.0)
  config/soulrend_core/boss_damage.toml (dungeons_and_combat:the_grave_watcher=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: The Field Of The Fallen", GraveWatcher kill quest
  calc: level 20 -> Auto Leveling level 19
        health 100 × (1 + 0.3 × 19) = 670; attack 1 × (1 + 0.1 × 19) = 2.9
        damage cap 20% × 670 = 134 HP per second -> at least 5 s
        Palehand at level 20: 10 × 6.7 = 67 HP
-->
**The GraveWatcher** is the guardian of the Field of the Fallen, a graveyard structure. Its fixed level of 20 is the lowest of any [[progression/act-ii-first-steps|Act II]] boss, and the Dungeons and Combat branch of the act asks for its kill.

It fights alongside the Palehands it summons.

## Location

The GraveWatcher waits in the Field of the Fallen (`dungeons_and_combat:the_field_of_the_fallen`). The structure generates in Dark Forests, Plains, Forests and Snowy Taigas, at most once per 58 × 58 chunk area. The [[item:explorerscompass:explorerscompass]] can search for it.

## Stats

The GraveWatcher's level is fixed at 20, so its stats never change. See [[leveling/mob-levels|Mob Levels]] for how levels scale other mobs.

| Stat | Base | Level 20 |
| --- | --- | --- |
| Health | 100 HP | **670 HP** (335 hearts) |
| Attack damage | 1 | **2.9** |
| Armor | 0 | 0 |
| Knockback resistance | 70% | 70% |
| Movement speed | 0.2 | 0.2 |
| Follow range | 16 blocks | 16 blocks |
| Damage cap | | 20% of max health per second (134 HP), so a kill takes at least 5 s |

## Attacks

| Attack | Notes |
| --- | --- |
| Sweeping melee strikes | |
| Summon Palehands | Summons 4 Palehands at once. |

Palehands are weak on their own (10 base health, 67 HP at level 20) and have no level setting of their own, so their level follows the player's.

<!-- TODO: attack conditions and cooldowns (procedure TheGraveWatcherIA). -->

## Strategy

- **Clear the Palehands between summons.** Each summon adds four more attackers.
- **Sustained damage beats burst.** At 670 HP the damage cap is only 134 HP per second, so the fight lasts at least 5 s however hard it is hit.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:cursed_soul]] | 4 | Always (1 from its loot table, 3 added by Soulrend) |
| [[item:dungeons_and_combat:cursed_silk]] | 0–8 | Always rolled |
| [[item:dungeons_and_combat:estus_flask]] | 0–3 | Always rolled |

{{uses dungeons_and_combat:cursed_silk}}

## Quests

**Find Structure: The Field Of The Fallen** ([[progression/act-ii-first-steps|Act II]], Dungeons and Combat branch) requires finding the structure. Rewards: a roll on the Structure Loot reward table and 2 XP levels.

The next quest requires killing the GraveWatcher. Rewards:

- a roll on the Chipped Gems reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

> [!LORE] The GraveWatcher (Act II)
> Forgotten by the living, remembered only by the dead.
>
> The Gravewatcher wanders among ancient tombs, bound to a duty long after its meaning has faded. It neither speaks nor rests, striking down any who would disturb the silence of the grave.
