---
{
  "title": "Decaying King (Past)",
  "summary": "A giant reskinned wither skeleton with 6,000 base health that roams the Past; it drops the Galactic Core half of the time.",
  "icon": "minecraft:wither_skeleton_skull",
  "infobox": {
    "item": "minecraft:wither_skeleton_spawn_egg",
    "rows": [
      ["ID", "`minecraft:wither_skeleton`"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Health", "364,200 HP (level 200)"],
      ["Location", "Dead Wasteland, the Past"],
      { "heading": "Drops" },
      ["Chance", "[[item:apotheotic_additions:esoteric_material]] (50%)"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (CONFIG.PAST.SOLDIERS["minecraft:wither_skeleton"]: every wither skeleton spawning in the Past becomes "Decaying King" in blue: Ancient Spear, Blessed Gold Shield, Golden Execution armor, scale 5, max health 6,000, attack damage 200, movement speed 0.6 / 5 = 0.12, attack knockback resistance 1.0, health 6,000; only one within 256 blocks; spawn cancelled with more than 3 Past soldiers within 24 blocks or within 96 blocks of a Past boss; 50% chance to drop apotheotic_additions:esoteric_material on death)
  config/paxi/datapacks/soulrend_worldgen/data/soulrend/worldgen/biome/dead_wasteland.json (monster spawns: zombie 950, zombie villager 50, skeleton 990, wither skeleton 10)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (minecraft:wither_skeleton: endrem:wither_eye 10%)
  game-data/items.json (apotheotic_additions:esoteric_material is named "Galactic Core")
  config/ftbquests/quests/chapters/duties.snbt (Galactic Core quest: "The final frontier", "Find Decaying King")
  calc: Past base × level 200 multipliers (health × 60.7, attack × 20.9, armor × 3.189)
        L200: health 6,000 × 60.7 = 364,200; attack 200 × 20.9 = 4,180
-->
**Decaying King** is what Soulrend turns wither skeletons into in the Past, the dimension of [[progression/act-v-duties|Act V]]. Every wither skeleton that spawns there becomes a five-times-scale king in golden armor with 6,000 base health. It is the source of the [[item:apotheotic_additions:esoteric_material]] (Galactic Core), the item for Act V's last quest.

This is not the Soulslike Weaponry boss of the same name; see [[The Decaying King]].

## Location

Wither skeletons spawn rarely in the Dead Wasteland biome of the Past (spawn weight 10, against nearly 2,000 for zombies and skeletons). Each one becomes a Decaying King, with these limits:

- only one Decaying King within 256 blocks;
- no spawn if more than 3 other Past soldiers are within 24 blocks;
- no spawn within 96 blocks of [[Arterius, the Last Watcher]], [[Ó Brolacháin, the Scarlet Hunter]] or [[The Nightlord]].

The Past is reached with the [[item:kubejs:emblem_of_the_past]] (see [[features/mobs-and-world/the-past|The Past]]).

## Stats

Soulrend gives the Decaying King base health of 6,000 and base attack damage of 200 when it spawns, and the level bonus then multiplies them. Wither skeletons have no level setting, so its level is the nearest player's Soulrend level. The last column uses Act V's typical level, the player cap of 200 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Past base | Level 200 |
| --- | --- | --- |
| Health | 6,000 HP | **364,200 HP** (182,100 hearts) |
| Attack damage | 200 | **4,180** |
| Movement speed | 0.12 | 0.12 |
| Knockback resistance | 100% | 100% |
| Size | 5× a wither skeleton | |

It carries a [[item:cataclysm:ancient_spear]], a [[item:dungeons_and_combat:blessed_gold_shield]] and a full set of Golden Execution armor.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:apotheotic_additions:esoteric_material]] | 1 | 50% |
| [[item:endrem:wither_eye]] | 1 | 10% |

It also drops what a wither skeleton normally drops.

## Quests

A quest in the [[progression/act-v-duties|Act V – Duties]] chapter ("The final frontier", "Find Decaying King") asks for a Galactic Core. Rewards: three rolls on the Rare Loot reward table. See [[progression/act-v-duties/esoteric-material|Esoteric Material]].
