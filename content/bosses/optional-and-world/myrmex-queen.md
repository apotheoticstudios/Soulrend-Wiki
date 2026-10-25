---
{
  "title": "Myrmex Queen",
  "summary": "The giant queen at the heart of each Ice and Fire Myrmex hive, in deserts and jungles; its level follows the player's.",
  "items": ["iceandfire:spawn_egg_myrmex_queen"],
  "infobox": {
    "item": "iceandfire:spawn_egg_myrmex_queen",
    "rows": [
      ["ID", "`iceandfire:myrmex_queen`"],
      ["Level", "The player's level"],
      ["Health", "1,524 HP (level 40)"],
      ["Location", "Myrmex hives, deserts and jungles"],
      { "heading": "Drops" },
      ["Chance", "Myrmex chitin and resin, [[item:iceandfire:myrmex_stinger]]"]
    ]
  }
}
---
<!-- sources:
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityMyrmexQueen.bakeAttributes (120 max health, attack damage = Myrmex Base Attack Strength × 3.5, 15 armor, 0.2 movement speed, 128 follow range)
  config/iceandfire-common.toml [Mobs.Myrmex] ("Myrmex Base Attack Strength" 3.0, "Myrmex Colony Gen Chance" 10000, "Myrmex Colony Max Size" 80)
  config/iceandfire/desert_myrmex_biomes.json (dry, hot, sandy, not badlands; some Terralith and BYG deserts) and jungle_myrmex_biomes.json (jungles; some BYG rainforests)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/loot_tables/entities/myrmex_queen_desert.json and myrmex_queen_jungle.json
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: base attack 3 × 3.5 = 10.5
        L40: health 120 × 12.7 = 1,524; attack 10.5 × 4.9 = 51.5; armor 15 × 1.429 = 21.4
        L100: health 120 × 30.7 = 3,684; attack 10.5 × 10.9 = 114.5; armor 15 × 2.089 = 31.3
-->
**Myrmex Queen** is the ruler of an Ice and Fire Myrmex hive, a colony of giant insects that lives underground in deserts and jungles. No quest requires killing one.

## Location

Myrmex hives generate under desert biomes (dry, hot and sandy, but not badlands) and jungle biomes, each with its own Desert or Jungle Myrmex. A colony can grow up to 80 Myrmex.

## Stats

The Myrmex Queen has no level setting, so its level matches the Soulrend level of the nearest player (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act II (40) | Act III (100) |
| --- | --- | --- | --- |
| Health | 120 HP | 1,524 HP | 3,684 HP |
| Attack damage | 10.5 | 51.5 | 114.5 |
| Armor | 15 | 21.4 | 31.3 |
| Movement speed | 0.2 | 0.2 | 0.2 |
| Follow range | 128 blocks | | |

Its base attack damage is 3.5 times the configured Myrmex base attack strength (3).

## Drops

Desert queens drop desert chitin and resin; jungle queens drop jungle chitin and resin. Three rolls, each picking one of:

| Item | Count | Chance per roll |
| --- | --- | --- |
| Myrmex chitin ([[item:iceandfire:myrmex_desert_chitin]] or [[item:iceandfire:myrmex_jungle_chitin]]) | 5–12; Looting adds 0–3 | 1 in 3 |
| Myrmex resin ([[item:iceandfire:myrmex_desert_resin]] or [[item:iceandfire:myrmex_jungle_resin]]) | 5–12; Looting adds 0–1 | 1 in 3 |
| [[item:iceandfire:myrmex_stinger]] | 0–1 | 1 in 3 |
