---
{
  "title": "Overworld Monsters",
  "summary": "The other vanilla hostile mobs of the Overworld and what Soulrend changes about them: no Creepers, non-levelling Phantoms and fleeing wounded mobs.",
  "aliases": ["Creeper", "Slime", "Phantom (mob)", "Pillager", "Vindicator"],
  "items": ["minecraft:slime_spawn_egg", "minecraft:phantom_spawn_egg", "minecraft:pillager_spawn_egg", "minecraft:vindicator_spawn_egg"],
  "infobox": {
    "item": "minecraft:pillager_spawn_egg",
    "rows": [
      ["ID", "`minecraft:witch`, `slime`, `phantom`, `pillager`, `vindicator`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level (Phantoms never level)"],
      ["Location", "Overworld"]
    ]
  }
}
---
<!-- sources:
  config/ysns/disabled_entities.json5 (minecraft:creeper, plus seven modded mobs)
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Witch m_34155_ (26 health, 0.25 speed), Pillager m_33307_ (24 health, 5 attack, 0.35 speed, 32 follow), Vindicator m_34104_ (24 health, 5 attack, 0.35 speed, 12 follow)
  config/autoleveling-common.toml [Mobs] (minecraft:phantom never levels)
  game-data/loot-tables.json minecraft:entities/{witch,slime,phantom,pillager,vindicator} (unchanged from vanilla)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (minecraft:witch: nether_remastered:seal_piece_2 at 10%)
  config/awakenedmobs-common.toml [flee] (fleeHealthFraction 0.1, fleeChance 0.05, fleeSpeedBonus 0.15); [general] weaponChance 0, armorEnabled false; data/awakenedmobs/awakened_mobs/*.json (no chance field) -> no mob is armed, so guard/parry/dodge never apply
  mods/awakenedmobs-1.1.3.jar FleeHandler (any PathfinderMob hit by a player)
  config/improvedmobs/common.toml ("Enable difficulty scaling" false, "Breaker Chance" 0)
  mods/friendsandfoes-forge-5.0.3+mc1.20.1.jar PatrolSpawnerMixin (Iceologer in snowy patrols, Illusioner in taiga patrols)
  soulrend_apotheosis_rebalance bosses/overworld/{witch,vindicator}.json; forge/biome_modifier/boss_dungeon*.json
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L10: health ×3.7, attack ×1.9; L40: ×12.7, ×4.9; L100: ×30.7, ×10.9
-->
Besides [[enemies/act-i/zombie|Zombies]], [[enemies/act-i/skeleton|Skeletons]], [[enemies/act-i/spider|Spiders]] and [[enemies/act-i/enderman|Endermen]], the Overworld has the rest of Minecraft's usual hostile mobs. Soulrend leaves most of them as they are in vanilla, with a few changes covered here. No quest asks for them, except the Witch's Nether seal shard.

## Changes in Soulrend

- **No Creepers.** You Shall Not Spawn blocks Creepers everywhere, so they never spawn. It also blocks Skeleton Creepers, Cockatrices, Hippocampi, Alex's Mobs Crocodiles and Cosmaws, and Samurai Dynasty's Kawauso and Komainu.
- **Phantoms never level.** They are on Auto Leveling's never-level list and keep their vanilla stats at every Soulrend level.
- **Wounded mobs may flee.** Awakened Mobs gives any mob a player hits a 5% chance to run away, 15% faster, once it is below 10% health. Its guard, parry and dodge only apply to mobs it arms, and Soulrend sets the weapon chance to 0, so no mob uses them.
- **Improved Mobs** is installed, but its difficulty scaling is off and mobs never break blocks.

## Mobs

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Witch | 26 HP / 2 | 96.2 HP / 3.8 | 330.2 HP / 9.8 | 798.2 HP / 21.8 |
| Pillager | 24 HP / 5 | 88.8 HP / 9.5 | 304.8 HP / 24.5 | 736.8 HP / 54.5 |
| Vindicator | 24 HP / 5 | 88.8 HP / 9.5 | 304.8 HP / 24.5 | 736.8 HP / 54.5 |

The table gives health / attack damage; none of them has armor. Slimes and Phantoms follow vanilla's size rules, and Phantoms keep their vanilla stats.

- **Witch:** besides its vanilla drops, every Witch gets two separate 10% rolls for the Top-Right shard of the Nether seal. See [[enemies/act-ii/witch-and-evoker|Witch & Evoker]].
- **Pillager patrols:** in snowy biomes a patrol brings an Iceologer, and in taigas an Illusioner (see [[enemies/misc/friends-and-foes-mobs|Friends & Foes Mobs]]).
- **Slime** and **Phantom** behave and drop as in vanilla.

## Apothic variants

Apotheosis **Boss Dungeons**, found in every Overworld biome except oceans and the Deep Dark, can summon an Apothic Witch or Vindicator boss when a player comes near, as well as Zombies, Husks, Skeletons and Strays (see their pages).
