---
{
  "title": "Frostmaw",
  "summary": "A level 60 ice beast that sleeps in snowy biomes and drops one of the four seal shards that open the Nether.",
  "aliases": ["Terror of the Frosts"],
  "items": ["mowziesmobs:frostmaw_spawn_egg"],
  "infobox": {
    "item": "mowziesmobs:frostmaw_spawn_egg",
    "rows": [
      ["ID", "`mowziesmobs:frostmaw`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "60 (fixed)"],
      ["Health", "4,675 HP"],
      ["Location", "Snowy biomes, asleep"],
      { "heading": "Drops" },
      ["With crystal", "[[item:mowziesmobs:ice_crystal]], [[item:dungeons_and_combat:cryolite_shard]] ×8–20"],
      ["Crystal stolen", "[[item:mowziesmobs:music_disc_petiole]] (only in rain)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/mowziesmobs/leveling_settings/entities/frostmaw.json (starting_level 60 = max_level 60)
  mods/mowziesmobs-1.8.2.jar EntityFrostmaw.createAttributes (250 max health, 10 attack damage, 1.0 knockback resistance, 50 follow range, 0.3 movement speed; armor default 0)
  mods/mowziesmobs-1.8.2.jar EntityFrostmaw (attack conditions: ice breath target <= 13.5 blocks, ice ball >= 14.5 blocks, both need the crystal; cooldowns 260/200/500/200 ticks for breath/ball/slam/dodge; crystal stolen by an invisible player within 1.8 blocks)
  config/mowziesmobs-common.toml [mobs.frostmaw] (multipliers 1.0, heals while asleep, health reset on respawn, biome tags, height 50-100) and freeze_duration 50 ticks
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/worldgen/structure_set/frostmaw_spawns.json (spacing 25, separation 8, 10 chunks from villages)
  config/autoleveling-common.toml [Attributes] (max health 0.3, attack damage 0.1, armor 0.011 per level)
  config/soulrend_core/boss_damage.toml (mowziesmobs:frostmaw=20, windowTicks 20)
  config/paxi/datapacks/soulrend_loot/data/mowziesmobs/loot_tables/entities/frostmaw.json (drops)
  config/ftbquests/quests/chapters/mowzies_mobs.snbt "The Frostmaw" (description, rewards)
  config/ftbquests/quests/chapters/act_2.snbt "Top-Right Shard" (seal piece 2 sources)
  config/explorerscompass-common.toml (structure not blacklisted)
  calc: level 60 -> Auto Leveling level 59
        health 250 × (1 + 0.3 × 59) = 4,675; attack 10 × (1 + 0.1 × 59) = 69; armor 0 × … = 0
        damage cap 20% × 4,675 = 935 HP per second -> at least 5 s
-->
**Frostmaw** is a giant ice beast that sleeps in snowy biomes. It is one of the [[progression/act-ii-first-steps|Act II]] bosses. Killing it completes The Frostmaw quest in the [[progression/side-chapters/fallen-myths|Fallen Myths]] chapter, which rewards the [[item:nether_remastered:seal_piece_2]], one of the four seal pieces that open the Nether.

Frostmaw carries an [[item:mowziesmobs:ice_crystal]] that powers its ranged ice attacks. The crystal can be stolen before the fight, which makes Frostmaw easier to kill but changes what it drops.

## Location

Frostmaw spawns asleep at its own small structure, `mowziesmobs:frostmaw_spawn`. The structure generates:

- in snowy Overworld biomes, except oceans, rivers, beaches, forests and taigas;
- between y=50 and y=100;
- at most once per 25 × 25 chunk area, and at least 10 chunks from any village.

The [[item:explorerscompass:explorerscompass]] can search for the structure (see [[progression/act-i-awakening/explorers-compass|Explorer's Compass]]).

Frostmaw heals while it sleeps.

## Stats

Frostmaw's level is fixed at 60 whatever the player's level, so its stats never change. See [[leveling/mob-levels|Mob Levels]] for how levels scale other mobs.

| Stat | Base | Level 60 |
| --- | --- | --- |
| Health | 250 HP | **4,675 HP** (2,337.5 hearts) |
| Attack damage | 10 | **69** |
| Armor | 0 | 0 |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.3 (three times a player's) | 0.3 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 20% of max health per second (935 HP), so a kill takes at least 5 s |

Attack damage is the value its attacks are based on. Individual attacks deal different amounts.

## Attacks

| Attack | Condition | Cooldown |
| --- | --- | --- |
| Swipe, double swipe | The target is in melee range. | |
| Ice Breath | The target is within 13.5 blocks. Needs the crystal. | 13 s |
| Ice Ball | The target is 14.5 blocks or more away. Needs the crystal. | 10 s |
| Slam | | 25 s |
| Dodge | | 10 s |

Its ice attacks can freeze the target for 2.5 s. Frostmaw uses Ice Breath and Ice Ball only while it is standing on the ground or in water.

## Strategy

- **Steal the crystal to disable its ranged attacks.** While Frostmaw sleeps, a player under the Invisibility effect can walk up to the crystal and take it (it needs a free inventory slot). Frostmaw wakes up without it and can only fight in melee. The cost is the drops: without the crystal it drops no Ice Crystal and no Cryolite Shards.
- **Distance doesn't avoid ice attacks.** Frostmaw uses Ice Breath on targets within 13.5 blocks and Ice Ball on targets 14.5 blocks or more away, so backing off only changes which one it uses.
- **Sustained damage beats burst.** The damage cap blocks anything above 935 HP in a second, shared by every attacker, pet and spell.

> [!WARNING]
> Frostmaw's health resets to full when a player respawns nearby. Dying during the fight loses all progress on it.

## Drops

Drops only count when a player gets the kill.

| Item | Count | Condition |
| --- | --- | --- |
| [[item:mowziesmobs:ice_crystal]] | 1 | Frostmaw still had its crystal. |
| [[item:dungeons_and_combat:cryolite_shard]] | 8–20 | Frostmaw still had its crystal. |
| [[item:mowziesmobs:music_disc_petiole]] | 1 | The crystal was stolen, and it is raining. |

The Ice Crystal is used in these recipes:

{{uses mowziesmobs:ice_crystal}}

## Quests

**The Frostmaw** (Fallen Myths chapter) requires killing Frostmaw. Rewards:

- [[item:immersive_weathering:ice_sickle]] with one gem socket
- a level 3 **Ice Block** spell scroll
- [[item:nether_remastered:seal_piece_2]]
- [[item:skilltree:wisdom_scroll]]
- 3 XP levels

> [!LORE] The Frostmaw (Fallen Myths)
> The Frostmaw is a dangerous beast found rarely in snowy regions. Their massive size, impressive speed, and powerful ice breath make them near-impossible opponents. If, on your travels, you encounter one sleeping in your path, it's likely best to take a different route and let it lay.
>
> The beast guards a precious ice crystal that can unleash pure winter energy when wielded.

The Mysterious Shard completes the Top-Right Shard quest in [[progression/act-ii-first-steps|Act II]] (see [[progression/act-ii-first-steps/frostmaw-shard|Frostmaw Shard]]). Witches also drop the shard, rarely, so the Frostmaw kill is not the only route.
