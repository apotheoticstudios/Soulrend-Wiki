---
{
  "title": "Deeplings",
  "summary": "L_Ender's Cataclysm's fish-folk and Coral Golems, which rise from the Overworld's oceans and the Abyssal Chasm; Deeplings never level up.",
  "aliases": ["Deepling", "Deepling Brute", "Deepling Angler", "Deepling Priest", "Deepling Warlock", "Coral Golem"],
  "items": [
    "cataclysm:deepling_spawn_egg",
    "cataclysm:deepling_brute_spawn_egg",
    "cataclysm:deepling_angler_spawn_egg",
    "cataclysm:deepling_priest_spawn_egg",
    "cataclysm:deepling_warlock_spawn_egg",
    "cataclysm:coral_golem_spawn_egg"
  ],
  "infobox": {
    "item": "cataclysm:deepling_spawn_egg",
    "model": ["cataclysm:deepling", "cataclysm:deepling_brute", "cataclysm:deepling_angler", "cataclysm:deepling_priest", "cataclysm:deepling_warlock", "cataclysm:coral_golem"],
    "rows": [
      ["ID", "`cataclysm:deepling`, `deepling_brute`, `deepling_angler`, `deepling_priest`, `deepling_warlock`, `coral_golem`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "Deeplings never level; Coral Golem: the player's level"],
      ["Location", "Overworld oceans; the Abyssal Chasm"],
      { "heading": "Drops" },
      ["Priest, Warlock", "[[item:cataclysm:athame]]"]
    ]
  }
}
---
<!-- sources:
  config/cataclysm.toml [spawning] (DeeplingSpawnWeight 2 rolls 30, DeeplingBruteSpawnWeight 1 rolls 50, DeeplingAnglerSpawnWeight 2 rolls 30, DeeplingPriestSpawnWeight 1 rolls 70, DeeplingWarlockSpawnWeight 1 rolls 70, CoralgolemSpawnWeight 1 rolls 70; "Higher number = lower chance")
  config/cataclysm/{deepling,deepling_angler,deepling_brute,deepling_priest,deepling_warlock,coral_golem}_spawns.json (ocean, deep_ocean, lukewarm, deep_lukewarm, warm, deep_cold oceans; alexscaves:abyssal_chasm)
  mods/traveloptics-6.3.0-1.20.1.jar structure NBT aqua_mage_tower (deepling_brute, deepling_warlock)
  mods/L_Enders_Cataclysm-3.16.jar Deepling_Entity (26 health, 4 attack, 0.25 knockback resistance), Deepling_Angler_Entity (30, 4), Deepling_Brute_Entity (60, 5, 8 armor, 0.35), Deepling_Priest_Entity and Deepling_Warlock_Entity (45, 4), Coral_Golem_Entity (110, 11, 5 armor, 0.8 knockback resistance)
  config/autoleveling-common.toml [Mobs] (cataclysm:deepling, deepling_brute, deepling_angler, deepling_priest, deepling_warlock never level); no soulrend_mob_leveling file for these or the coral golem
  game-data/loot-tables.json cataclysm:entities/{deepling,deepling_brute,deepling_angler,deepling_priest,deepling_warlock,coral_golem}
  calc: Coral Golem L10: 110 × 3.7 = 407, 11 × 1.9 = 20.9, armor 5.5; L40: 1,397, 53.9, 7.1; L100: 3,377, 119.9, 10.4
-->
The **Deeplings** are L_Ender's Cataclysm's fish-folk, servants of [[the Leviathan]]. Unlike Cataclysm's structure guards, they spawn in the Overworld's oceans, so players can meet them long before [[progression/act-iii-into-the-flames|Act III]]. They also roam Alex's Caves' Abyssal Chasm. Deeplings never level up, but the **Coral Golems** that spawn with them do. No quest asks for them.

## Spawning

All six spawn in Overworld oceans (Ocean, Deep Ocean and their lukewarm, warm and cold variants) and in the Abyssal Chasm. They are rare: each has a low weight and an extra roll that makes it less likely still.

| Mob | Weight | Rarity roll (higher = rarer) |
| --- | --- | --- |
| Deepling | 2 | 30 |
| Deepling Angler | 2 | 30 |
| Deepling Brute | 1 | 50 |
| Deepling Priest | 1 | 70 |
| Deepling Warlock | 1 | 70 |
| Coral Golem | 1 | 70 |

Deepling Brutes and Warlocks also guard Traveloptics' Aqua Mage Tower with its Aquamancer (see [[enemies/act-ii/spellcasters|Spellcasters]]).

## Stats

The five Deeplings are on Auto Leveling's never-level list, so they keep their base stats:

| Mob | Health | Attack | Armor | Knockback resistance |
| --- | --- | --- | --- | --- |
| Deepling | 26 HP | 4 | 0 | 25% |
| Deepling Angler | 30 HP | 4 | 0 | 25% |
| Deepling Brute | 60 HP | 5 | 8 | 35% |
| Deepling Priest | 45 HP | 4 | 0 | 25% |
| Deepling Warlock | 45 HP | 4 | 0 | 25% |

The **Coral Golem** has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]):

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 110 HP | 407 HP | 1,397 HP | 3,377 HP |
| Attack damage | 11 | 20.9 | 53.9 | 119.9 |
| Armor | 5 | 5.5 | 7.1 | 10.4 |
| Knockback resistance | 80% | 80% | 80% | 80% |

## Drops

| Mob | Drops |
| --- | --- |
| Deepling, Deepling Angler | [[item:minecraft:nautilus_shell]] at 2.5% |
| Deepling Brute | Nautilus Shell at 5% |
| Deepling Priest, Deepling Warlock | Always an [[item:cataclysm:athame]] |
| Coral Golem | [[item:cataclysm:crystallized_coral_fragments]] |
