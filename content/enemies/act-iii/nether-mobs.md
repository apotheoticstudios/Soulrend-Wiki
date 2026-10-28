---
{
  "title": "Nether Mobs",
  "summary": "The Nether's common hostile mobs once the seal is broken: vanilla Blazes, Ghasts, Hoglins and Zombified Piglins, plus the modded mobs that join them.",
  "aliases": ["Blaze", "Ghast", "Hoglin", "Magma Cube", "Zombified Piglin", "Fractured Vex", "Evil Skeleton", "Soul Vulture", "Straddler"],
  "items": [
    "minecraft:blaze_spawn_egg",
    "minecraft:ghast_spawn_egg",
    "minecraft:hoglin_spawn_egg",
    "minecraft:magma_cube_spawn_egg",
    "minecraft:zombified_piglin_spawn_egg",
    "dungeons_and_combat:fractured_vex_spawn_egg",
    "dungeons_and_combat:ghoul_spawn_egg",
    "wom:evil_skeleton_spawn_egg",
    "alexsmobs:spawn_egg_soul_vulture",
    "alexsmobs:spawn_egg_straddler"
  ],
  "infobox": {
    "item": "minecraft:blaze_spawn_egg",
    "model": ["minecraft:blaze", "minecraft:ghast", "minecraft:hoglin", "minecraft:magma_cube", "minecraft:zombified_piglin", "dungeons_and_combat:fractured_vex", "dungeons_and_combat:ghoul", "wom:evil_skeleton"],
    "rows": [
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level (Ghasts, Soul Vultures and Straddlers never level)"],
      ["Location", "The Nether"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Blaze m_32238_ (20 health, 6 attack, 48 follow), Ghast m_32752_ (10 health, 100 follow), Hoglin m_34551_ (40 health, 6 attack, 0.6 knockback resistance), ZombifiedPiglin m_34470_ (20 health, 5 attack, 2 armor)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar biome_modifier (soul_sand_valley: fractured_vex 14, 1-3; ghoul 13, 1-2); FracturedVexEntity (16 health, 3 attack, flying), GhoulEntity (12 health, 4 attack, flying, 0.4 knockback resistance)
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar biome_modifier (minecraft:soul_sand_valley: wom:evil_skeleton weight 1); EvilSkeleton (80 health, 8 attack, 10 armor, 10 toughness, 0.2 knockback resistance)
  mods/samurai_dynasty-0.0.51-1.20.1-forge.jar biome_modifier (#is_nether: oni 1, akaname 2)
  config/alexsmobs/soul_vulture_spawns.json (soul_sand_valley), straddler_spawns.json (basalt_deltas); config/alexsmobs.toml (soulVultureSpawnWeight 30, straddlerSpawnWeight 70); EntitySoulVulture (12 health, 4 attack), EntityStraddler (28 health, 2 attack, 5 armor, 0.8 knockback resistance); both target players
  config/autoleveling-common.toml [Mobs] (ghast, alexsmobs:soul_vulture, alexsmobs:straddler never level)
  config/nether remastered.toml "Nether Essence" (zombified_piglin, zoglin among the listed mobs)
  game-data/loot-tables.json dungeons_and_combat:entities/{fractured_vex,ghoul}, alexsmobs:entities/{soul_vulture,straddler}; no wom:evil_skeleton table
  config/apotheosis/adventure.cfg (minecraft:the_nether|0.025|ANY); soulrend_apotheosis_rebalance bosses/the_nether/{blaze,zoglin,zombified_piglin}.json
  config/paxi/datapacks/soulrend_mob_leveling (no files for these: level = player level)
  calc: L40: health ×12.7, attack ×4.9, armor ×1.429; L100: ×30.7, ×10.9, ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Nether** is sealed in Soulrend until a player uses the Seal of the Underworld at the end of Act II. Beyond that seal, [[progression/act-iii-into-the-flames|Act III]] players meet Minecraft's usual Nether mobs and several modded ones. Mobs with their own pages: [[enemies/act-iii/wither-skeleton|Wither Skeleton]], [[enemies/act-iii/piglin-and-piglin-brute|Piglin & Piglin Brute]], [[enemies/act-iii/forlorn-and-withered-demon|Forlorn & Withered Demon]], [[enemies/act-iii/ignited-berserker|Ignited Berserker]], [[enemies/act-iii/ancient-knight|Ancient Knight]] and the [[enemies/act-iii/cult-of-the-weak|Cult of the Weak]]. Samurai Dynasty's Oni and Akaname are covered with the other [[enemies/misc/samurai-dynasty-yokai|yokai]].

## Spawning

| Mob | Where | Mod |
| --- | --- | --- |
| Blaze, Ghast, Hoglin, Magma Cube, Zombified Piglin | As in vanilla Minecraft | Vanilla |
| Fractured Vex | Soul Sand Valley (weight 14, groups of 1–3) | Dungeons and Combat |
| Ghoul | Soul Sand Valley (weight 13, groups of 1–2) | Dungeons and Combat |
| Evil Skeleton | Soul Sand Valley (weight 1) | Weapons of Miracles |
| Oni, Akaname | Every Nether biome | Samurai Dynasty |
| Soul Vulture | Soul Sand Valley (weight 30) | Alex's Mobs |
| Straddler | Basalt Deltas (weight 70) | Alex's Mobs |

The Nether's structures add more: the Blazing Fortress and the Church have their [[bosses/optional-and-world/dungeons-and-combat-minibosses|Dungeons and Combat guardians]], the Underworld Arena its [[enemies/act-ii/dragon-guards|Soul Skeletons]] and [[bosses/optional-and-world/wither-knight|Wither Knights]], and Friends & Foes' Citadel its [[enemies/misc/friends-and-foes-mobs|Wildfire]].

## Stats

These mobs have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act II (40) | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- | --- |
| Blaze | 20 HP / 6 / 0 | 254 HP / 29.4 / 0 | 614 HP / 65.4 / 0 | 914 HP / 95.4 / 0 |
| Hoglin | 40 HP / 6 / 0 | 508 HP / 29.4 / 0 | 1,228 HP / 65.4 / 0 | 1,828 HP / 95.4 / 0 |
| Zombified Piglin | 20 HP / 5 / 2 | 254 HP / 24.5 / 2.9 | 614 HP / 54.5 / 4.2 | 914 HP / 79.5 / 5.3 |
| Fractured Vex | 16 HP / 3 / 0 | 203.2 HP / 14.7 / 0 | 491.2 HP / 32.7 / 0 | 731.2 HP / 47.7 / 0 |
| Ghoul (Dungeons and Combat) | 12 HP / 4 / 0 | 152.4 HP / 19.6 / 0 | 368.4 HP / 43.6 / 0 | 548.4 HP / 63.6 / 0 |
| Evil Skeleton | 80 HP / 8 / 10 | 1,016 HP / 39.2 / 14.3 | 2,456 HP / 87.2 / 20.9 | 3,656 HP / 127.2 / 26.4 |

**Never level:** Ghasts (10 HP), Soul Vultures (12 HP, 4 attack) and Straddlers (28 HP, 2 attack, 5 armor, 80% knockback resistance) keep their base stats at every Soulrend level. Magma Cubes follow vanilla's size rules.

The **Evil Skeleton** is by far the toughest of these: rare, but with 10 armor, 10 armor toughness and Epic Fight attacks. Soul Vultures and Straddlers attack players on sight.

## Drops

| Mob | Drops |
| --- | --- |
| Fractured Vex | 0–1 [[item:dungeons_and_combat:fractured_soul]] |
| Ghoul (Dungeons and Combat) | 0–1 [[item:dungeons_and_combat:cursed_soul]] |
| Evil Skeleton | Nothing (no loot table) |
| Soul Vulture | 0–2 [[item:minecraft:bone]]; up to 1 [[item:minecraft:coal]] |
| Straddler | [[item:alexsmobs:straddlite]] at 20% (+5% per Looting level); 0–3 [[item:minecraft:basalt]] |

The vanilla mobs keep their vanilla drops. **Zombified Piglins and Zoglins** fill [[item:nether_remastered:bottled_nether_essence]] when killed with an [[item:nether_remastered:obsidian_infused_bottle]] in the off hand.

## Apothic variants

Each Nether spawn has a 2.5% chance to become an Apothic boss. Besides [[enemies/act-iii/wither-skeleton#Apothic variants|Wither Skeletons]] and [[enemies/act-iii/piglin-and-piglin-brute#Apothic variants|Piglins]], Soulrend's candidates are Zombified Piglins (Rare or Epic, weight 100), Blazes (Epic, weight 30) and Zoglins (Epic, weight 30). Epic ones gain +60–140 health (Zoglin +100–140), about +30–70% attack, +4–6 armor and +50–85% knockback resistance, plus Nether gear with random affixes.
