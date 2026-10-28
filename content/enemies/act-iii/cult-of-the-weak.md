---
{
  "title": "Cult of the Weak",
  "summary": "Dungeons and Combat's blood cultists and their creations, which fill the Cathedral and the Church in the Nether where the High Priest waits.",
  "aliases": ["Bloody Cultist", "Bloodymancer", "Weakness", "Failure"],
  "items": [
    "dungeons_and_combat:bloody_cultist_spawn_egg",
    "dungeons_and_combat:bloodymancer_cultist_spawn_egg",
    "dungeons_and_combat:weakness_spawn_egg",
    "dungeons_and_combat:failure_spawn_egg"
  ],
  "infobox": {
    "item": "dungeons_and_combat:bloody_cultist_spawn_egg",
    "rows": [
      ["ID", "`dungeons_and_combat:bloody_cultist`, `bloodymancer_cultist`, `weakness`, `failure`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "The Cathedral and the Church (Crimson Forest, Nether Wastes)"],
      { "heading": "Drops" },
      ["Weakness, Failure", "[[item:dungeons_and_combat:blood_vial]] or [[item:dungeons_and_combat:ritual_bone]]"]
    ]
  }
}
---
<!-- sources:
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar worldgen/structure/the_cathedral.json (crimson_forest, nether_wastes), the_church.json (crimson_forest); structure NBT the_cathedral, the_church, the_cult_of_the_weak (bloody_cultist, bloodymancer_cultist, weakness, failure, the_aberrator, high_priest)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar BloodyCultistEntity.createAttributes (20 health, 1 attack, 0.3 knockback resistance, 0.28 speed), BloodymancerCultistEntity (20, 1, 0.3, 0.2), FailureEntity (18, 4, 0.3, 0.25), WeaknessEntity (22, 3, 5 armor, 0.8 knockback resistance, 2 attack knockback, 0.2)
  game-data/loot-tables.json dungeons_and_combat:entities/{weakness,failure} (0-1 Blood Vial or 0-1 Ritual Bone); no tables for bloody_cultist or bloodymancer_cultist
  config/paxi/datapacks/soulrend_mob_leveling (no files for these: level = player level; high_priest pinned at 150)
  calc: L40: health ×12.7, attack ×4.9, armor ×1.429; L100: ×30.7, ×10.9, ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Cult of the Weak** is the blood cult of Dungeons and Combat's Nether structures. Bloody Cultists and Bloodymancers fill the **Cathedral** and the **Church**, together with Weakness and Failure, the twisted creatures of their rituals. The [[High Priest]], an [[progression/act-iii-into-the-flames|Act III]] boss, leads them; The Aberrator guards the Church and is covered on [[bosses/optional-and-world/dungeons-and-combat-minibosses|Dungeons and Combat Minibosses]]. No quest asks for the cultists themselves.

## Spawning

None of them spawns naturally. They are placed inside two Nether structures when those generate:

| Structure | Biomes |
| --- | --- |
| The Cathedral | Crimson Forest, Nether Wastes |
| The Church | Crimson Forest |

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act II (40) | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- | --- |
| Bloody Cultist | 20 HP / 1 / 0 | 254 HP / 4.9 / 0 | 614 HP / 10.9 / 0 | 914 HP / 15.9 / 0 |
| Bloodymancer | 20 HP / 1 / 0 | 254 HP / 4.9 / 0 | 614 HP / 10.9 / 0 | 914 HP / 15.9 / 0 |
| Failure | 18 HP / 4 / 0 | 228.6 HP / 19.6 / 0 | 552.6 HP / 43.6 / 0 | 822.6 HP / 63.6 / 0 |
| Weakness | 22 HP / 3 / 5 | 279.4 HP / 14.7 / 7.1 | 675.4 HP / 32.7 / 10.4 | 1,005.4 HP / 47.7 / 13.2 |

The Weakness is the sturdiest: 5 armor, 80% knockback resistance and a strong knockback of its own. The cultists have 30% knockback resistance.

## Drops

| Mob | Drops |
| --- | --- |
| Weakness, Failure | 0–1 [[item:dungeons_and_combat:blood_vial]] or 0–1 [[item:dungeons_and_combat:ritual_bone]] |
| Bloody Cultist, Bloodymancer | Nothing (no loot table) |
