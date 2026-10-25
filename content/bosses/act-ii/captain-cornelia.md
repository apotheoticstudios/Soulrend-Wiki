---
{
  "title": "Captain Cornelia",
  "summary": "The ghost of an Aquamirae pirate captain, summoned with the Shell Horn near water in the Ice Maze; it drops the Frozen Key.",
  "aliases": ["Ghost of Captain Cornelia", "Cornelia"],
  "items": ["aquamirae:captain_cornelia_spawn_egg"],
  "infobox": {
    "item": "aquamirae:captain_cornelia_spawn_egg",
    "rows": [
      ["ID", "`aquamirae:captain_cornelia`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "2,540 HP (level 40)"],
      ["Location", "Summoned with the Shell Horn, Ice Maze"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:aquamirae:frozen_key]], [[item:aquamirae:three_bolt_helmet]]"]
    ]
  }
}
---
<!-- sources:
  mods/aquamirae-forge-1.20.1-6.4.0.jar CaptainCornelia.createAttributes (200 max health, 1 attack damage, 16 armor, 0.5 knockback resistance, 2.0 attack knockback, 0.2 movement speed, 1.1 step height, 128 follow range)
  config/Obscuria/aquamirae-common.toml [Mobs.GhostOfCaptainCornelia] (maxHealth 200, attackDamage 1)
  mods/aquamirae-forge-1.20.1-6.4.0.jar assets/aquamirae/lang/en_us.json (entity name "Ghost of Captain Cornelia")
  game-data/items.json aquamirae:shell_horn tooltip (summons Captain Cornelia; used near water in an Ice Maze)
  mods/aquamirae-forge-1.20.1-6.4.0.jar data/aquamirae/loot_tables/entities/captain_cornelia.json
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/aquamirae.snbt "Captain Cornelia's Treasure Hunt", "Call Captain back from the dead."
  calc: L40: health 200 × 12.7 = 2,540; attack 1 × 4.9 = 4.9; armor 16 × 1.429 = 22.9
        L100: health 200 × 30.7 = 6,140; attack 10.9; armor 16 × 2.089 = 33.4
-->
**Captain Cornelia** (in game, **Ghost of Captain Cornelia**) is the ghost of the captain whose ships were lost in the Ice Maze. The Shell Horn calls the ghost back to fight. It is the boss of the [[progression/side-chapters/aquamirae|Aquamirae]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]], and it drops the Frozen Key to the Ice Maze's hidden chest.

## Location

The ghost is summoned with a [[item:aquamirae:shell_horn]], used near water in an Ice Maze.

<!-- TODO: where the Shell Horn comes from (no exported recipe). -->

## Stats

Captain Cornelia has no level setting, so its level matches the Soulrend level of the player who summons it (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act II (40) | Act III (100) |
| --- | --- | --- | --- |
| Health | 200 HP | **2,540 HP** | 6,140 HP |
| Attack damage | 1 | 4.9 | 10.9 |
| Armor | 16 | 22.9 | 33.4 |
| Knockback resistance | 50% | 50% | 50% |
| Attack knockback | 2.0 | | |
| Movement speed | 0.2 | 0.2 | 0.2 |
| Damage cap | | None | None |

Its base attack damage is only 1 (the Aquamirae config default), so its attack damage stat stays low at every level.

<!-- TODO: attack list (CaptainCornelia attack goals). -->

## Strategy

- **Summon it early.** Its level is set when it is summoned, so a lower Soulrend level means a weaker ghost.
- **Expect heavy knockback.** Its attacks have 2.0 attack knockback.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:aquamirae:frozen_key]] | 1 | Always |
| [[item:aquamirae:three_bolt_helmet]] | 1 | Always, enchanted |
| [[item:aquamirae:oxygen_tank]], [[item:aquamirae:treasure_pouch]] or [[item:aquamirae:ship_graveyard_echo]] | 1 each roll | 1–2 rolls, 1 in 3 each |
| [[item:aquamirae:music_disc_forsaken_drownage]] | 1 | 10% |

The Frozen Key opens a chest hidden in the depths of the Ice Maze.

## Quests

**Call Captain back from the dead.** ([[progression/side-chapters/aquamirae|Aquamirae]], after Captain Cornelia's Treasure Hunt) requires a Shell Horn and killing the ghost ("Send her to rest"). Rewards: an [[item:minecraft:enchanted_golden_apple]] and 2 XP levels. It opens Captain Cornelia's Hideout.

> [!LORE] Captain Cornelia's Treasure Hunt (Aquamirae)
> Ah yes, Captain Cornelia, a great captain who sailed until she fell into the depths of the freezing oceans, one must be daring enough to find her ship and take her treasures away, if they can find it.
