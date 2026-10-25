---
{
  "title": "Battle Tower Golems",
  "summary": "The six Battle Towers guardians, awakened at the top of their towers with three Monolith Keys; each drops its eye.",
  "aliases": ["Bahryn'muul, Entombed Watcher", "Moraizu'un, Idol of the Drowned", "Obthu'ryn, God of the Core", "Infuur'niir, Blaze King Tyrant", "Shul'losniir, Warped Guardian", "Veyhz'kriin, Sky Goddess", "Land Golem", "Ocean Golem", "Core Golem", "Nether Golem", "End Golem", "Sky Golem"],
  "icon": "ba_bt:land_golem_eye"
}
---
<!-- sources:
  mods/ba_bt-1.20.1-3.0.0-beta3.2.1.jar *Golem.createBattleGolemAttributes (land 200 HP / 10 attack, ocean 250 / 12, core 500 / 15, nether 550 / 18, end 600 / 21, sky 650 / 21; all 4 armor, knockback resistance 2.0 (clamped to 1.0), 60 follow range)
  config/ba_bt-common.toml (landGolemHealth 250 ... skyGolemHealth 500 are read only by BattleTowersConfig; the golem classes use their own values; collapse timers land 30 s, others 45 s)
  mods/ba_bt-1.20.1-3.0.0-beta3.2.1.jar assets/ba_bt/lang/en_us.json (golem names); data/ba_bt/worldgen/structure (land_tower, core_tower, ocean_tower only) and structure_set (land spacing 24 / separation 20, core 36 / 24, ocean 44 / 36); tags/worldgen/biome/has_structure (land and core: #minecraft:is_overworld; ocean: #minecraft:is_ocean)
  mods/ba_bt-1.20.1-3.0.0-beta3.2.1.jar data/ba_bt/loot_tables/entities/*_golem.json (one golem eye each)
  config/autoleveling-common.toml [Mobs] (ba_bt:land_golem, ba_bt:ocean_golem and ba_bt:sky_golem can't level up)
  config/paxi/datapacks/soulrend_mob_leveling/data/ba_bt/leveling_settings/entities/{core,nether,end}_golem.json (starting_level 20, max_level 1000)
  config/paxi/datapacks/soulrend_ef_mobpatches/data/ba_bt/epicfight_mobpatch/*_golem.json (Epic Fight patches for all six)
  config/soulrend_core/boss_damage.toml (none listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_overworld.snbt ("Battle Towers", key quests, golem kill quests)
  calc: core L40: 500 × 12.7 = 6,350, 15 × 4.9 = 73.5, armor 4 × 1.429 = 5.7; L100: 15,350, 163.5, 8.4
        nether L40: 6,985, 88.2; L100: 16,885, 196.2
        end L40: 7,620, 102.9; L100: 18,420, 228.9
-->
**Battle Tower golems** are the six guardians of the Battle Towers mod. Each sleeps at the top of its tower, beside a monolith; bringing three Monolith Keys found inside the tower awakens it. No main-line quest needs them, but the [[progression/side-chapters/fabled-realms|Fabled Realms]] Overworld chapter has a quest for each.

## Comparison

| Golem | Tower | Base health | Base attack | Levels? |
| --- | --- | --- | --- | --- |
| **Bahryn'muul, Entombed Watcher** (`ba_bt:land_golem`) | Land Tower | 200 HP | 10 | No |
| **Moraizu'un, Idol of the Drowned** (`ba_bt:ocean_golem`) | Ocean Tower | 250 HP | 12 | No |
| **Obthu'ryn, God of the Core** (`ba_bt:core_golem`) | Core Tower | 500 HP | 15 | Yes, at least 20 |
| **Infuur'niir, Blaze King Tyrant** (`ba_bt:nether_golem`) | Nether Tower | 550 HP | 18 | Yes, at least 20 |
| **Shul'losniir, Warped Guardian** (`ba_bt:end_golem`) | End Tower | 600 HP | 21 | Yes, at least 20 |
| **Veyhz'kriin, Sky Goddess** (`ba_bt:sky_golem`) | Sky Tower | 650 HP | 21 | No |

All six have 4 armor and full knockback resistance, and fight with Epic Fight animations. None has a damage cap.

The Land, Ocean and Sky golems are on Auto Leveling's list of mobs that never level up, so they keep their base stats. The other three take the nearest player's Soulrend level, but never less than 20 (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]):

| Golem | Level 40 health | Level 40 attack | Level 100 health | Level 100 attack |
| --- | --- | --- | --- | --- |
| Obthu'ryn, God of the Core | 6,350 HP | 73.5 | 15,350 HP | 163.5 |
| Infuur'niir, Blaze King Tyrant | 6,985 HP | 88.2 | 16,885 HP | 196.2 |
| Shul'losniir, Warped Guardian | 7,620 HP | 102.9 | 18,420 HP | 228.9 |

## Towers

This version of Battle Towers generates only three towers:

- the **Land Tower**, in any Overworld biome, at most once per 24 × 24 chunk area;
- the **Core Tower**, in any Overworld biome, at most once per 36 × 36 chunk area;
- the **Ocean Tower**, in ocean biomes, at most once per 44 × 44 chunk area.

The mod has no Nether, End or Sky tower data, so those three golems don't generate in Soulrend even though they have quests.

## Drops

Each golem drops its own eye:

| Golem | Drop |
| --- | --- |
| Bahryn'muul, Entombed Watcher | [[item:ba_bt:land_golem_eye]] |
| Moraizu'un, Idol of the Drowned | [[item:ba_bt:ocean_golem_eye]] |
| Obthu'ryn, God of the Core | [[item:ba_bt:core_golem_eye]] |
| Infuur'niir, Blaze King Tyrant | [[item:ba_bt:nether_golem_eye]] |
| Shul'losniir, Warped Guardian | [[item:ba_bt:end_golem_eye]] |
| Veyhz'kriin, Sky Goddess | [[item:ba_bt:sky_golem_eye]] |

## Quests

In the Overworld chapter of [[progression/side-chapters/fabled-realms|Fabled Realms]], **Battle Towers** (after Adventurer's Refuges) asks to find a tower.

For each tower, a quest asks for two Monolith Keys and gives the third ("Can't find the last key? Don't worry, it happens to the best of us."), for example [[item:ba_bt:land_monolith_key]]. The quest after it asks for that golem's kill and rewards a roll on the Chipped Gems reward table and 5 XP levels.

> [!LORE] Battle Towers (Fabled Realms)
> Ah, the good old Battle Towers. Many adventurers remember them as simple challenges filled with loot and danger.
>
> Times have changed, however. These towers have undergone significant renovations, turning them into far deadlier and more rewarding adventures than before.
>
> Search every floor carefully and recover the keys hidden throughout the tower. You'll need three keys to awaken the Guardian waiting at the top.
