---
{
  "title": "Otherside Creatures",
  "summary": "The other Deeper and Darker mobs of the Otherside: Sculk Snappers, Sculk Centipedes, Sludges, Deep Anglerfish and the Sculk Leeches hidden in sculk and vases.",
  "aliases": ["Sculk Snapper", "Sculk Centipede", "Sculk Leech", "Sludge", "Deep Anglerfish"],
  "items": ["deeperdarker:sculk_snapper_spawn_egg", "deeperdarker:sculk_centipede_spawn_egg", "deeperdarker:sculk_leech_spawn_egg", "deeperdarker:sludge_spawn_egg", "deeperdarker:angler_fish_spawn_egg"],
  "infobox": {
    "item": "deeperdarker:sculk_snapper_spawn_egg",
    "rows": [
      ["ID", "`deeperdarker:sculk_snapper`, `sculk_centipede`, `sculk_leech`, `sludge`, `angler_fish`"],
      ["Act", "[[progression/act-iii-b-deeper-and-darker|Act III-b]]"],
      ["Level", "The player's level (Deep Anglerfish never levels)"],
      ["Location", "The Otherside"],
      { "heading": "Drops" },
      ["Common", "[[item:deeperdarker:soul_dust]], [[item:deeperdarker:resonarium]]"]
    ]
  }
}
---
<!-- sources:
  mods/deeperdarker-forge-1.20.1-1.3.3.jar data/deeperdarker/worldgen/biome/{deeplands,echoing_forest,blooming_caverns}.json (deeplands: sculk_snapper 11, sculk_centipede 6, shattered 5, phantom 2; echoing_forest: shattered 17, sculk_snapper 9; blooming_caverns: angler_fish 6, sludge 6, sculk_snapper 1)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar InfestedSculkBlock.spawnAfterBreak (Sculk Leech), DeeperDarkerEvents (a fake Ancient Vase releases four Sculk Leeches or a Stalker; fakeVaseChance 0.2, stalkerSpawnChance 0.5 in config/deeperdarker-common.toml)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar attributes: SculkSnapper (12 health, 3 attack, 0.3 speed), SculkCentipede (20, 3, 0.2), SculkLeech (4, 1, 0.25), Sludge (16, 4, 0.6)
  config/deeperdarker-common.toml (snapperDropLimit 8)
  config/autoleveling-common.toml [Mobs] (deeperdarker:angler_fish never levels)
  game-data/loot-tables.json deeperdarker:entities/{sculk_snapper,sculk_centipede,sculk_leech,sludge,angler_fish}
  calc: L100: health ×30.7, attack ×10.9; L150: ×45.7, ×15.9; L180: ×54.7, ×18.9
-->
Besides the [[enemies/act-iii-b/shattered|Shattered]], [[enemies/act-iii-b/stalker|Stalker]] and [[enemies/act-iii-b/shriek-worm|Shriek Worm]], the Otherside, the dimension behind the Deep Dark explored in [[progression/act-iii-b-deeper-and-darker|Act III-b]], has a handful of smaller sculk creatures. No quest asks for them.

## Spawning

| Mob | Where |
| --- | --- |
| Sculk Snapper | Deeplands (11), Echoing Forest (9), Blooming Caverns (1) |
| Sculk Centipede | Deeplands (6) |
| Sludge | Blooming Caverns (6) |
| Deep Anglerfish | Blooming Caverns waters (6) |
| Sculk Leech | Released by breaking [[item:deeperdarker:infested_sculk]], and in fours from trap Ancient Vases (10% of vases) |

Phantoms also spawn in the Deeplands.

## Stats

All but the Deep Anglerfish have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). None has armor. The table gives health / attack damage.

| Mob | Base | Act III (100) | Act III-b (150) | Act IV (180) |
| --- | --- | --- | --- | --- |
| Sculk Snapper | 12 HP / 3 | 368.4 HP / 32.7 | 548.4 HP / 47.7 | 656.4 HP / 56.7 |
| Sculk Centipede | 20 HP / 3 | 614 HP / 32.7 | 914 HP / 47.7 | 1,094 HP / 56.7 |
| Sludge | 16 HP / 4 | 491.2 HP / 43.6 | 731.2 HP / 63.6 | 875.2 HP / 75.6 |
| Sculk Leech | 4 HP / 1 | 122.8 HP / 10.9 | 182.8 HP / 15.9 | 218.8 HP / 18.9 |

The Sludge is fast (0.6) and, like a slime, splits when killed.

## Drops

| Mob | Drops |
| --- | --- |
| Sculk Snapper | 1 [[item:deeperdarker:soul_dust]] (Looting adds 0–1) |
| Sculk Centipede | 0–1 [[item:minecraft:string]] |
| Sculk Leech | 0–1 Soul Dust |
| Sludge | 0–1 [[item:deeperdarker:resonarium]], from the smallest size only |
| Deep Anglerfish | Nothing |
