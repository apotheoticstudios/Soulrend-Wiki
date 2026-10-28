---
{
  "title": "The Decaying King",
  "summary": "A level 200 demon king in the Nether's Decaying Kingdom; it drops the Darkin Blade.",
  "aliases": ["Decaying King", "Accursed Lord"],
  "items": ["soulsweapons:accursed_lord_boss_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:accursed_lord_boss_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:accursed_lord_boss`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "200"],
      ["Health", "36,420 HP"],
      ["Location", "Decaying Kingdom, Nether"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:darkin_blade]], [[item:soulsweapons:withered_demon_heart]], [[item:soulsweapons:lord_soul_red]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/accursed_lord_boss.json (starting_level 200, max_level 1000, no random bonus; players cap at 200, so always 200)
  config/soulsweapons/soulsweapons_boss_config.json decaying_king_* (health 600, armor 10, attack cooldown 20 ticks, special cooldown 60 ticks, consumes summoning item, disables shields, fire immune, inverted heal and harm)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AccursedLordBoss.createDemonAttributes (max health and armor from BossConfig, 20 attack damage, 0.15 movement speed, 1.0 knockback resistance, 2.0 attack knockback, 60 follow range); AccursedLordBoss$AccursedLordAnimations (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar BlackstonePedestal (Demonite Chunk or Withered Demon Heart summons accursed_lord_boss)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/worldgen/structure/decaying_kingdom.json (#minecraft:is_nether, y 33); structure_set/nether_structures.json (spacing 60, separation 30); structures/decaying_kingdom_main.nbt (holds the boss)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/accursed_lord_boss.json
  config/soulrend_core/boss_damage.toml (soulsweapons:accursed_lord_boss=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "The Dacaying Kingdom", "Defeat The Decaying King"
  calc: level 200 -> Auto Leveling level 199
        health 600 × (1 + 0.3 × 199) = 36,420; attack 20 × (1 + 0.1 × 199) = 418; armor 10 × (1 + 0.011 × 199) = 31.9
        damage cap 20% × 36,420 = 7,284 HP per second -> at least 5 s
-->
**The Decaying King** is a demon king that rules the Decaying Kingdom in the Nether. It is a [[progression/side-chapters/soulslike-champions|Soulslike Champions]] boss, a chapter linked from [[progression/act-ii-first-steps|Act II]], but its level floor of 200 puts it at the top of the player level range from the start.

This is the Soulslike Weaponry boss. The wither skeleton reskin in the Past with the same name is [[bosses/act-v/decaying-king-past|Decaying King (Past)]].

## Location

The Decaying King waits in the Decaying Kingdom (`soulsweapons:decaying_kingdom`), which generates in Nether biomes at y=33, at most once per 60 × 60 chunk area. The [[item:soulsweapons:boss_compass]] points to the structures of this mod.

It can also be summoned at a [[item:soulsweapons:blackstone_pedestal]] with a [[item:soulsweapons:demon_chunk]] or a [[item:soulsweapons:withered_demon_heart]]. The item is used up.

## Stats

The Decaying King has a level floor of 200. Players can't go above Soulrend level 200, so it is always level 200. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 200 |
| --- | --- | --- |
| Health | 600 HP | **36,420 HP** (18,210 hearts) |
| Attack damage | 20 | **418** |
| Armor | 10 | **31.9** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.15 | 0.15 |
| Follow range | 60 blocks | 60 blocks |
| Damage cap | | 20% of max health per second (7,284 HP), so a kill takes at least 5 s |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire. Instant Health harms it and Instant Damage heals it.

## Attacks

| Attack | Notes |
| --- | --- |
| Sword slam | |
| Spin | |
| Hand slam | |
| Pull | |
| Heatwave | |
| Fireballs | |
| Wither balls | |

Its basic attacks have a 1 s cooldown and its special attacks a 3 s cooldown. Its attacks disable shields.

## Strategy

- **Prepare for level 200.** It and the [[Monarch of Chaos]] are the only Soulslike Champions bosses that are always level 200, with 418 attack damage.
- **Don't block.** Its attacks disable shields.
- **Fire does nothing.** It is immune to fire.
- **Sustained damage beats burst.** The damage cap blocks anything above 7,284 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:darkin_blade]] | 1 | Always |
| [[item:soulsweapons:withered_demon_heart]] | 1 | Always |
| [[item:soulsweapons:lord_soul_red]] | 1 | Always |

The Withered Demon Heart summons the Decaying King again at a Blackstone Pedestal.

## Quests

**The Decaying Kingdom** ([[progression/side-chapters/soulslike-champions|Soulslike Champions]], after The Guiding Moon) requires finding the structure. Rewards: a roll on the Chipped Gems and the Common Loot reward tables.

**Defeat The Decaying King** requires holding the Lord Soul and the Withered Demon Heart it drops. Rewards:

- 5 [[item:soulsweapons:soul_ingot]]
- a roll on the Flawed Gems reward table
- a roll on the Rare Loot reward table

> [!LORE] Defeat The Decaying King (Soulslike Champions)
> A powerful soul of a fallen leader and a heart of a decaying demon. You have freed the king who couldn't die.
