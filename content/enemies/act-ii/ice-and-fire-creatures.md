---
{
  "title": "Ice and Fire Creatures",
  "summary": "Ice and Fire's other Overworld beasts: Death Worms in deserts, Stymphalian Birds in swamps, Amphitheres in jungles and Myrmex hives.",
  "aliases": ["Death Worm", "Stymphalian Bird", "Amphithere", "Myrmex", "Myrmex Worker", "Myrmex Soldier", "Myrmex Sentinel", "Myrmex Royal"],
  "items": [
    "iceandfire:spawn_egg_death_worm",
    "iceandfire:spawn_egg_stymphalian_bird",
    "iceandfire:spawn_egg_amphithere",
    "iceandfire:spawn_egg_myrmex_worker",
    "iceandfire:spawn_egg_myrmex_soldier",
    "iceandfire:spawn_egg_myrmex_sentinel",
    "iceandfire:spawn_egg_myrmex_royal"
  ],
  "infobox": {
    "item": "iceandfire:spawn_egg_stymphalian_bird",
    "model": ["iceandfire:deathworm", "iceandfire:stymphalian_bird", "iceandfire:amphithere", "iceandfire:myrmex_worker", "iceandfire:myrmex_soldier", "iceandfire:myrmex_sentinel", "iceandfire:myrmex_royal"],
    "rows": [
      ["ID", "`iceandfire:deathworm`, `stymphalian_bird`, `amphithere`, `myrmex_*`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Location", "Deserts, swamps, jungles"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Death Worm Base Health" 10, "Death Worm Base Attack Strength" 3, "Death Worm Spawn Weight" 30, "Death Worms Target Monsters" true; "Stymphalian Bird Feather Attack Strength" 1, "Stymphalian Bird Feather Drop Chance" 25, "Stymphalian Birds Target Animals" false; "Spawn Amphitheres" true, "Amphithere Spawn Weight" 50, "Amphithere Max Health" 50, "Amphithere Attack Strength" 7; "Myrmex Colony Gen Chance" 10000, "Myrmex Colony Max Size" 80, "Myrmex Base Attack Strength" 3)
  config/iceandfire/{deathworm,stymphalian_bird,amphithere,desert_myrmex,jungle_myrmex}_biomes.json
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar Entity*.bakeAttributes (StymphalianBird 24 health, 4 armor; Myrmex Worker 20/4 armor, Soldier 40/6, Sentinel 60/12, Royal 50/9; DeathWorm 3 armor, health and attack from config); registerGoals (StymphalianBirdAITarget and DeathWormAITarget on LivingEntity; Myrmex Soldier and Sentinel NearestAttackableTargetGoal(LivingEntity); Amphithere only AmphithereAIHurtByTarget)
  config/ysns/disabled_entities.json5 (iceandfire:cockatrice, iceandfire:hippocampus)
  game-data/loot-tables.json iceandfire:entities/{deathworm_*,stymphalian_bird,amphithere,myrmex_*}
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L10: health ×3.7, attack ×1.9, armor ×1.099; L40: ×12.7, ×4.9, ×1.429; L100: ×30.7, ×10.9, ×2.089 (Myrmex attack uses the config's 3)
-->
Besides its dragons and the monsters that [[progression/act-ii-first-steps|Act II]]'s quests ask for, **Ice and Fire** fills the Overworld with smaller beasts. None of them is a quest target, but their drops make Ice and Fire armor and tools: Death Worm chitin, Myrmex chitin and resin, and Stymphalian Bird feathers.

## Spawning

| Mob | Where | Notes |
| --- | --- | --- |
| Death Worm | Hot, dry, sandy biomes that aren't badlands | Weight 30; comes in red, tan and white, and in giant sizes |
| Stymphalian Bird | Swamps | Flies in flocks |
| Amphithere | Jungles | Weight 50; flying serpent |
| Myrmex | Hives under deserts (Desert Myrmex) and jungles (Jungle Myrmex) | Rare hives, up to 80 Myrmex each, ruled by a [[bosses/optional-and-world/myrmex-queen\|Myrmex Queen]] |

Cockatrices and Hippocampi are disabled by You Shall Not Spawn.

## Behavior

- **Death Worms** burrow through sand and attack players and other mobs.
- **Stymphalian Birds** attack players from the air and shoot bronze feathers.
- **Amphitheres** only fight back when hurt.
- **Myrmex** Soldiers and Sentinels defend their hive and attack intruders; Workers gather for the colony.

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Stymphalian Bird | 24 HP / 2 / 4 | 88.8 HP / 3.8 / 4.4 | 304.8 HP / 9.8 / 5.7 | 736.8 HP / 21.8 / 8.4 |
| Amphithere | 50 HP / 7 / 0 | 185 HP / 13.3 / 0 | 635 HP / 34.3 / 0 | 1,535 HP / 76.3 / 0 |
| Myrmex Worker | 20 HP / 3 / 4 | 74 HP / 5.7 / 4.4 | 254 HP / 14.7 / 5.7 | 614 HP / 32.7 / 8.4 |
| Myrmex Soldier | 40 HP / 3 / 6 | 148 HP / 5.7 / 6.6 | 508 HP / 14.7 / 8.6 | 1,228 HP / 32.7 / 12.5 |
| Myrmex Sentinel | 60 HP / 3 / 12 | 222 HP / 5.7 / 13.2 | 762 HP / 14.7 / 17.1 | 1,842 HP / 32.7 / 25.1 |
| Myrmex Royal | 50 HP / 3 / 9 | 185 HP / 5.7 / 9.9 | 635 HP / 14.7 / 12.9 | 1,535 HP / 32.7 / 18.8 |

Death Worms start from 10 health and 3 attack in Ice and Fire's config, with 3 armor, and grow stronger with their size.

## Drops

| Mob | Drops |
| --- | --- |
| Death Worm | Chitin in its color ([[item:iceandfire:deathworm_chitin_red]], [[item:iceandfire:deathworm_chitin_yellow]] or [[item:iceandfire:deathworm_chitin_white]]), [[item:minecraft:rotten_flesh]], [[item:iceandfire:deathworm_egg]] or [[item:iceandfire:deathworm_egg_giant]]; giants drop 5–12 chitin per roll. [[item:iceandfire:deathworm_tounge]] at 2.5% on a player kill |
| Stymphalian Bird | 3 rolls of [[item:minecraft:copper_ingot]], [[item:minecraft:iron_ingot]], [[item:iceandfire:copper_nugget]] or 2–6 [[item:iceandfire:stymphalian_bird_feather]]; skull at 2.5% |
| Amphithere | 1–7 [[item:iceandfire:amphithere_feather]]; skull at 2.5% |
| Myrmex | Chitin and resin of their hive ([[item:iceandfire:myrmex_desert_chitin]], [[item:iceandfire:myrmex_desert_resin]] or the jungle versions) or a [[item:iceandfire:myrmex_stinger]], 2–3 rolls; stingers are most common from Sentinels |

Looting adds to most of these counts.
