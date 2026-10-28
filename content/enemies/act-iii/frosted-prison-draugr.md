---
{
  "title": "Frosted Prison Draugr",
  "summary": "L_Ender's Cataclysm's undead Draugr, Royal Draugr and Elite Draugr that guard the Frosted Prison, Maledictus's structure; always level 200.",
  "aliases": ["Draugr", "Royal Draugr", "Elite Draugr"],
  "items": ["cataclysm:draugr_spawn_egg", "cataclysm:royal_draugr_spawn_egg", "cataclysm:elite_draugr_spawn_egg"],
  "infobox": {
    "item": "cataclysm:royal_draugr_spawn_egg",
    "model": ["cataclysm:draugr", "cataclysm:royal_draugr", "cataclysm:elite_draugr"],
    "rows": [
      ["ID", "`cataclysm:draugr`, `royal_draugr`, `elite_draugr`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "200 (floor)"],
      ["Location", "The Frosted Prison (Cataclysm dimension)"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:bone]], [[item:minecraft:rotten_flesh]], [[item:cataclysm:black_steel_nugget]]"],
      ["Rare", "[[item:cataclysm:black_steel_ingot]] (2.5%)"]
    ]
  }
}
---
<!-- sources:
  mods/L_Enders_Cataclysm-3.16.jar data/cataclysm/worldgen/template_pool/frosted_prison/mob/{draugr,royal_draugr,elite_draugr,aptrgangr}.json (mob pieces of the Frosted Prison)
  config/cataclysm_dimension/cataclysm_dimension.json (keep_structures_in_original_dimensions false: Cataclysm structures generate in the Cataclysm dimensions)
  mods/L_Enders_Cataclysm-3.16.jar Draugr_Entity.draugr (28 health, 4 attack, 3 armor, 0.05 knockback resistance, 0.25 speed, 30 follow), Royal_Draugr_Entity (30, 5, 5 armor, 0.1, 0.27), Elite_Draugr_Entity (32, 5, 3 armor, 0.1, 0.27); no health or damage multiplier in config/cataclysm.toml
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/{draugr,royal_draugr,elite_draugr}.json (starting_level 200, max 1000; players cap at 200)
  game-data/loot-tables.json cataclysm:entities/{draugr,royal_draugr,elite_draugr} (identical tables)
  calc: L200: health ×60.7, attack ×20.9, armor ×3.189
-->
The **Draugr** are the undead Norse warriors of L_Ender's Cataclysm. Plain Draugr, Royal Draugr and Elite Draugr guard the **Frosted Prison**, where [[Maledictus]] waits, one of the bosses of [[progression/act-iii-into-the-flames|Act III]]. Like Cataclysm's other regular mobs they have a level floor of 200. The prison's Aptrgangr is on [[bosses/optional-and-world/cataclysm-minibosses|Cataclysm Minibosses]].

## Spawning

The Draugr don't spawn naturally. They are placed in the Frosted Prison when it generates; in Soulrend, Cataclysm's structures generate in the Cataclysm dimensions rather than the Overworld.

## Stats

The Draugr's level floor is 200, and the player's level stops at 200, so in practice they are always level 200. The table gives health / attack damage / armor.

| Mob | Base | Level 200 |
| --- | --- | --- |
| Draugr | 28 HP / 4 / 3 | 1,699.6 HP / 83.6 / 9.6 |
| Royal Draugr | 30 HP / 5 / 5 | 1,821 HP / 104.5 / 15.9 |
| Elite Draugr | 32 HP / 5 / 3 | 1,942.4 HP / 104.5 / 9.6 |

The Draugr moves at 0.25 and the other two at 0.27; all notice players from 30 blocks. They fight with the weapons they carry, which adds to their attack.

## Drops

All three share one loot table:

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:bone]] | 0–2 | Looting adds 0–1 |
| [[item:minecraft:rotten_flesh]] | 0–2 | Looting adds 0–1 |
| [[item:cataclysm:black_steel_nugget]] | 0–1 | Looting adds 0–1 |
| [[item:cataclysm:black_steel_ingot]] | 1 | Player kill, 2.5% (+1% per Looting level) |
