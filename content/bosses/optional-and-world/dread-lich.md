---
{
  "title": "Dread Lich",
  "summary": "An Ice and Fire undead caster of snowy biomes that summons Dread minions and drops the Gravemaster's Key.",
  "aliases": ["Lich (Ice and Fire)"],
  "items": ["iceandfire:spawn_egg_lich"],
  "infobox": {
    "item": "iceandfire:spawn_egg_lich",
    "rows": [
      ["ID", "`iceandfire:dread_lich`"],
      ["Level", "The player's level"],
      ["Health", "635 HP (level 40)"],
      ["Location", "Snowy Overworld biomes"],
      { "heading": "Drops" },
      ["Chance", "[[item:iceandfire:dread_key]] (10%), [[item:iceandfire:dread_shard]]"]
    ]
  }
}
---
<!-- sources:
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDreadLich.bakeAttributes (50 max health, 1 attack damage, 2 armor, 0.3 movement speed, 128 follow range); summons Dread Thralls, Ghouls, Beasts and Scuttlers; fires Dread Lich Skulls; spawn check uses lichSpawnChance
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar IafEntityRegistry (monster spawn in mausoleum biomes when spawnLiches, weight lichSpawnRate)
  config/iceandfire-common.toml ("Spawn Liches" true, "Lich Spawn Weight" 2, "Lich Spawn Chance" 30)
  config/iceandfire/mausoleum_biomes.json (Overworld snowy, not wet or water; Terralith wintry forest and lowlands)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/loot_tables/entities/dread_lich.json
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L10: health 50 × 3.7 = 185; L40: 50 × 12.7 = 635, attack 4.9, armor 2 × 1.429 = 2.9; L100: 1,535, attack 10.9, armor 4.2
-->
**Dread Lich** is an undead sorcerer from Ice and Fire that roams snowy lands. It fights from a distance with flying skulls and raises Dread minions to fight for it. No quest requires killing one, but it is the source of the [[item:iceandfire:dread_key]] (Gravemaster's Key).

## Spawning

Dread Liches spawn naturally as rare hostile mobs (spawn weight 2) in snowy Overworld biomes that aren't wet or watery, plus Terralith's Wintry Forest and Wintry Lowlands. A further 1-in-30 check makes natural spawns rarer still.

## Stats

The Dread Lich has no level setting, so its level matches the Soulrend level of the nearest player (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 50 HP | 185 HP | 635 HP | 1,535 HP |
| Attack damage | 1 | 1.9 | 4.9 | 10.9 |
| Armor | 2 | 2.2 | 2.9 | 4.2 |
| Movement speed | 0.3 | 0.3 | 0.3 | 0.3 |
| Follow range | 128 blocks | | | |

## Attacks

| Attack | Notes |
| --- | --- |
| Dread Lich Skull | A flying skull projectile. |
| Summon minions | Raises Dread Thralls, Dread Ghouls, Dread Beasts and Dread Scuttlers. |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:bone]] or [[item:iceandfire:dread_shard]] | 0–2 each roll | Two rolls, 50% each; Looting adds 0–1 |
| [[item:iceandfire:dread_key]] | 1 | Player kill; 10% (+5% per Looting level) |
