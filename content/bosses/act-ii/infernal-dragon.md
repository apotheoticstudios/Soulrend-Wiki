---
{
  "title": "Infernal Dragon",
  "summary": "A fire-breathing dragon at the top of the mountain Dragon Tower; one of the Bosses' Rise bosses behind the Bottom-Right Shard.",
  "items": ["block_factorys_bosses:infernal_dragon_spawn_egg"],
  "infobox": {
    "item": "block_factorys_bosses:infernal_dragon_spawn_egg",
    "rows": [
      ["ID", "`block_factorys_bosses:infernal_dragon`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "3,810 HP (level 40)"],
      ["Location", "Dragon Tower, meadows and peaks"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:block_factorys_bosses:dragon_bone]] ×8–19, [[item:block_factorys_bosses:dragon_skull]], [[item:endrem:evil_eye]]"]
    ]
  }
}
---
<!-- sources:
  config/bosses_rise_config.toml ["Boss Health"] Dragon 300, ["Boss Armor"] 30, ["Base Boss Damages"] 20 (applied as base values by InfernalDragonEntity on spawn)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar InfernalDragonEntity.createAttributes (0.4 movement speed, 1.6 flying speed, 64 follow range, 0.8 knockback resistance); fireImmune; hurt ignores fire, cactus and fall damage
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar assets/block_factorys_bosses/sounds.json (dragon bite, claw, tail swipe, flame, fireballs, takeoff)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/worldgen/structure/dragon_tower.json (biome tag #block_factorys_bosses:dragon_tower = meadow, stony_peaks, jagged_peaks), structure_set/dragon_tower.json (spacing 25, separation 20); structure/dragon_high_4.nbt (holds the dragon)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar InfernalDragonEntityDiesProcedure -> loot_tables/bosses/infernal_dragon.json (Dragon Bone 8-19, Dragon Skull 1)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (block_factorys_bosses:infernal_dragon: endrem:evil_eye, dropchance 1.0)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/autoleveling-common.toml [Attributes]
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: Dragon Tower", "Defeat The Infernal Dragon", "Titanium Bar", "Bottom-Right Shard"
  calc: L40: health 300 × 12.7 = 3,810; attack 20 × 4.9 = 98; armor 30 × 1.429 = 42.9
        L200: health 300 × 60.7 = 18,210; attack 20 × 20.9 = 418; armor 30 × 3.189 = 95.7
-->
**Infernal Dragon** is a fire-breathing dragon that nests at the top of the Dragon Tower. It is one of the three Bosses' Rise bosses of [[progression/act-ii-first-steps|Act II]]: killing two of the three earns the [[item:nether_remastered:seal_piece_4]], one of the four seal pieces that open the Nether. It always drops the [[item:endrem:evil_eye]], one of the eyes that open the End portal.

## Location

The Infernal Dragon waits at the top of the Dragon Tower (`block_factorys_bosses:dragon_tower`). The tower generates in Meadows, Stony Peaks and Jagged Peaks, at most once per 25 × 25 chunk area. The [[item:explorerscompass:explorerscompass]] can search for it.

## Stats

The Infernal Dragon has no level floor or cap, so its level matches the Soulrend level of the nearest player when it spawns. The columns show a typical Act II level and the player cap (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Level 40 | Level 200 |
| --- | --- | --- | --- |
| Health | 300 HP | **3,810 HP** (1,905 hearts) | 18,210 HP |
| Attack damage | 20 | **98** | 418 |
| Armor | 30 | **42.9** | 95.7 |
| Knockback resistance | 80% | 80% | 80% |
| Movement speed | 0.4 (flying 1.6) | | |
| Follow range | 64 blocks | 64 blocks | 64 blocks |
| Damage cap | | None | None |

The base health, armor and damage come from the Bosses' Rise config, which replaces the mod's built-in values. Attack damage is the value its attacks are based on; not all of its attacks use it.

The dragon is immune to fire, and takes no damage from cacti or falling.

## Attacks

The dragon fights both on the ground and in the air. Its attacks are:

- **Bite**, **claw** and **tail swipe** in melee
- **Flame breath**
- **Fireballs**

<!-- TODO: attack conditions, flight phases and cooldowns; the MCreator tick procedure is a large state machine. -->

## Strategy

- **Fire does nothing.** Fire Aspect, fire spells and lava don't hurt it.
- **Its armor is the highest of the three Bosses' Rise bosses.** Armor-piercing damage helps against it.
- **Its stats follow the player's level.** Fighting it early in Act II keeps its health and damage low.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:block_factorys_bosses:dragon_bone]] | 8–19 | Always |
| [[item:block_factorys_bosses:dragon_skull]] | 1 | Always |
| [[item:endrem:evil_eye]] | 1 | Always |

Dragon Bones are an armor material:

{{uses block_factorys_bosses:dragon_bone}}

## Quests

**Find Structure: Dragon Tower** ([[progression/act-ii-first-steps|Act II]], after the [[progression/act-ii-first-steps/estus-flask|Estus Flask]] quest) requires finding the tower. Reward: 2 XP levels.

**Defeat The Infernal Dragon** requires killing the dragon. Rewards:

- a roll on the Chipped Gems reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

It also opens the Titanium Bar quest, which gives [[item:dungeons_and_combat:titanium_deepslate_ore]].

**Bottom-Right Shard** completes once two of the three Bosses' Rise bosses are dead (the Infernal Dragon, the [[Sandworm]] and the [[bosses/act-ii/yeti|Yeti]]). It rewards the [[item:nether_remastered:seal_piece_4]] and a [[item:skilltree:wisdom_scroll]]. See [[progression/act-ii-first-steps/bosses-rise|Bosses' Rise]].

> [!LORE] Defeat The Infernal Dragon (Act II)
> Fire and destruction follow wherever this beast roams.
>
> The Infernal Dragon is a living catastrophe, cloaked in flames and fueled by endless fury. Few creatures can rival its power, and fewer still have survived to tell the tale.
