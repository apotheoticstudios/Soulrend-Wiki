---
{
  "title": "Troll",
  "summary": "Ice and Fire's club-wielding Forest, Mountain and Frost Trolls, which roam the Overworld at night and turn to stone in daylight.",
  "aliases": ["Forest Troll", "Mountain Troll", "Frost Troll"],
  "items": ["iceandfire:spawn_egg_troll"],
  "infobox": {
    "item": "iceandfire:spawn_egg_troll",
    "rows": [
      ["ID", "`iceandfire:troll`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "185 HP (level 10)"],
      ["Location", "Forests, mountains and hills, snowy biomes"],
      { "heading": "Drops" },
      ["Common", "Troll leather, [[item:iceandfire:troll_tusk]]"],
      ["Chance", "Its weapon (1 in 3), [[item:iceandfire:troll_skull]] (2.5%)"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Spawn Trolls" true, "Troll Spawn Weight" 60, "Troll Max Health" 50, "Troll Attack Strength" 10, "Trolls Drop Weapon" true)
  config/iceandfire/{forest,mountain,snowy}_troll_biomes.json (Overworld + #minecraft:is_forest; #forge:is_mountain or #minecraft:is_hill; #forge:is_snowy)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityTroll.bakeAttributes (health and attack from config, 9 armor, 1 knockback resistance, 0.35 speed, 16 follow range); EntityTroll.tickDeath (trollsDropWeapon: 1 in 3 chance, weapon damaged by 0-249); EntityTroll.aiStep (turns into an EntityStoneStatue when brightness > 0.5 and it can see the sky); EnumTroll (forest: trunk, mossy column, axe, hammer; frost: frosted column, frosted trunk, axe, hammer; mountain: column, axe, hammer)
  game-data/loot-tables.json iceandfire:entities/troll_{forest,frost,mountain}
  mods/valarian_conquest-4.2.2-forge-1.20.1.jar (valarian_conquest:troll: no biome modifier, no structure placement)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 50 × 3.7 = 185, attack 10 × 1.9 = 19, armor 9 × 1.099 = 9.9; L40: 635, 49, 12.9; L100: 1,535, 109, 18.8
-->
**Trolls** are large Ice and Fire brutes that swing tree trunks, stone columns, axes and hammers. They come in three kinds, Forest, Mountain and Frost, and are one of the hardest-hitting mobs a new player meets in the Overworld. Sunlight turns them to stone. No quest asks for them, but their leather makes Ice and Fire's troll armor.

## Spawning

Trolls spawn with a weight of 60 in three groups of Overworld biomes:

| Type | Biomes | Weapons |
| --- | --- | --- |
| Forest Troll | Forests | [[item:iceandfire:troll_weapon_trunk]], [[item:iceandfire:troll_weapon_column_forest]], [[item:iceandfire:troll_weapon_axe]], [[item:iceandfire:troll_weapon_hammer]] |
| Mountain Troll | Mountains and hills | [[item:iceandfire:troll_weapon_column]], Axe, Hammer |
| Frost Troll | Snowy biomes | [[item:iceandfire:troll_weapon_column_frost]], [[item:iceandfire:troll_weapon_trunk_frost]], Axe, Hammer |

A troll caught under open sky in bright light turns into a stone statue.

> [!NOTE]
> Valarian Conquest also registers a Troll, but it has no spawn rule and isn't placed in any structure, so it never appears naturally.

## Stats

The Troll has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health and attack come from Ice and Fire's config (50 and 10).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 50 HP | 185 HP | 635 HP | 1,535 HP |
| Attack damage | 10 | 19 | 49 | 109 |
| Armor | 9 | 9.9 | 12.9 | 18.8 |
| Knockback resistance | 100% | 100% | 100% | 100% |
| Movement speed | 0.35 | | | |
| Follow range | 16 blocks | | | |

## Drops

| Type | Drops (each roll picks one) |
| --- | --- |
| Forest Troll | 3 rolls: 1–4 [[item:iceandfire:troll_leather_forest]], up to 2 [[item:iceandfire:troll_tusk]], 1–2 [[item:minecraft:brown_mushroom]] or 1–2 [[item:minecraft:red_mushroom]] |
| Mountain Troll | 2 rolls: 1–4 [[item:iceandfire:troll_leather_mountain]], up to 2 Troll Tusks, or up to 1 [[item:minecraft:emerald]] |
| Frost Troll | 2 rolls: 1–4 [[item:iceandfire:troll_leather_frost]], up to 2 Troll Tusks, 1–8 [[item:minecraft:snowball]] or up to 1 [[item:iceandfire:sapphire_gem]] |

Looting adds 0–1 to the leather, tusks, mushrooms and snowballs. All three also drop a [[item:iceandfire:troll_skull]] on a player kill, at 2.5% (+1% per Looting level), and have a 1 in 3 chance to drop the weapon they carried, damaged.
