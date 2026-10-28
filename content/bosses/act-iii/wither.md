---
{
  "title": "Wither",
  "summary": "The vanilla Wither at level 150–200; it drops Wither Eyes for the End portal and the Shard of Uncertainty that summons the Monarch of Chaos.",
  "aliases": ["The Wither"],
  "items": ["minecraft:wither_spawn_egg"],
  "infobox": {
    "item": "minecraft:wither_spawn_egg",
    "model": "minecraft:wither",
    "rows": [
      ["ID", "`minecraft:wither`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "150–200 (at least 150)"],
      ["Health", "13,710 HP (level 150)"],
      ["Location", "Summoned by the player"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:minecraft:nether_star]], [[item:soulsweapons:shard_of_uncertainty]], [[item:soulsweapons:lord_soul_void]]"],
      ["Chance", "[[item:endrem:wither_eye]] ×0–2"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/minecraft/leveling_settings/entities/wither.json (starting_level 150, max_level 1000)
  libraries/net/minecraft/client/1.20.1-20230612.114412 client-srg.jar WitherBoss.createAttributes (300 max health, 4 armor, 0.6 movement and flying speed, 40 follow range)
  mods/endrem_forge-5.3.3-R-1.20.1.jar data/endrem/loot_modifiers/wither.json -> loot_tables/minecraft/entities/wither.json (2 rolls, Wither Eye 90% each)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar WitherEntityMixin (drops Lord Soul (void) and Shard of Uncertainty)
  mods/Paraglider-forge-20.1.3.jar data/paraglider/loot_modifiers/wither.json (vessel on player kill) and config/paraglider-common.toml (heartContainers true, staminaVessels false)
  minecraft 1.20.1 WitherBoss (drops a Nether Star)
  config/soulrend_core/boss_damage.toml (minecraft:wither=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Prepare the Ritual", "Confront The Wither"; soulslike_champions.snbt "Defeat The Wither"
  calc: L150: health 300 × (1 + 0.3 × 149) = 13,710; armor 4 × 2.639 = 10.6; cap 2,742 HP/s
        L200: health 300 × 60.7 = 18,210; armor 4 × 3.189 = 12.8; cap 3,642 HP/s
-->
**Wither** is the three-headed undead boss of vanilla Minecraft, summoned from Soul Sand and wither skeleton skulls. In Soulrend its level is at least 150, and it is an [[progression/act-iii-into-the-flames|Act III]] boss. Several mods add drops to it: Wither Eyes ([[item:endrem:wither_eye]]) for the End portal, and the Shard of Uncertainty that summons the [[Monarch of Chaos]].

## Location

The Wither is summoned the vanilla way: four Soul Sand (or Soul Soil) in a T shape topped with three Wither Skeleton Skulls.

## Stats

The Wither has a level floor of 150: it takes the Soulrend level of the nearest player, but never less than 150. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 150 (floor) | Level 200 |
| --- | --- | --- | --- |
| Health | 300 HP | **13,710 HP** (6,855 hearts) | 18,210 HP |
| Armor | 4 | **10.6** | 12.8 |
| Movement and flying speed | 0.6 | 0.6 | 0.6 |
| Follow range | 40 blocks | 40 blocks | 40 blocks |
| Damage cap | | 20% per second (2,742 HP), at least 5 s | 20% per second (3,642 HP), at least 5 s |

The Wither attacks with wither skulls, so it has no attack damage stat.

## Attacks

The Wither behaves as in vanilla Minecraft: it fires wither skulls from its three heads and inflicts Wither.

## Strategy

- **Its level is at least 150.** A player below Soulrend level 150 still faces a level-150 Wither.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:nether_star]] | 1 | Always |
| [[item:soulsweapons:shard_of_uncertainty]] | 1 | Always |
| [[item:soulsweapons:lord_soul_void]] | 1 | Always |
| [[item:endrem:wither_eye]] | 0–2 | Two rolls, 90% each |
| [[item:paraglider:heart_container]] | 1 | A player gets the kill |

The Shard of Uncertainty summons the [[Monarch of Chaos]] at a Blackstone Pedestal. The Wither Eye is one of the eyes that fill the End portal (see [[items/progression-keys/legendary-eyes|Legendary Eyes]]).

## Quests

**Prepare the Ritual** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) asks for 4 [[item:minecraft:soul_sand]] and 3 [[item:minecraft:wither_skeleton_skull]]. Rewards: a roll on the Rare Loot reward table and 3 XP levels.

**Confront The Wither** requires summoning it. Rewards:

- 3 [[item:dungeons_and_combat:crimson_flask]]
- a roll on the Flawed Gems reward table
- 5 XP levels

See [[progression/act-iii-into-the-flames/confront-the-wither|Confront The Wither]].

In the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, **Defeat The Wither** asks for a Nether Star and the Wither's Lord Soul, and leads to the Monarch of Chaos.

> [!LORE] Prepare the Ritual (Act III)
> Legends speak of a terrible creature born from soul sand and the remains of withered skeletons.
