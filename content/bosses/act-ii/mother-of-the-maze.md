---
{
  "title": "Mother of the Maze",
  "summary": "An Aquamirae sea monster of the Ice Maze; in Soulrend it ambushes players at midnight by taking the place of a nearby Anglerfish.",
  "aliases": ["Maze Mother"],
  "items": ["aquamirae:maze_mother_spawn_egg"],
  "infobox": {
    "item": "aquamirae:maze_mother_spawn_egg",
    "model": "aquamirae:maze_mother",
    "rows": [
      ["ID", "`aquamirae:maze_mother`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "Not levelled"],
      ["Health", "100 HP"],
      ["Location", "Ice Maze waters, at midnight"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:aquamirae:abyssal_amethyst]] ×2–4, [[item:aquamirae:sharp_bones]] ×6–24"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/progression/aquamirae.js (CONFIG.DEEP_SEA: at day time 18000-18099, for each Overworld player with no Maze Mother within 256 blocks, an Anglerfish in water within 256 blocks is replaced by a Maze Mother; 30 s Glowing; thunder sound; pink "Maze Mother" boss bar for players within 256 blocks)
  mods/aquamirae-forge-1.20.1-6.4.0.jar MazeMother.createAttributes (100 max health, 5 attack damage, 6 armor, 0.2 knockback resistance, 0.5 attack knockback, 3.0 swim speed, 128 follow range)
  config/Obscuria/aquamirae-common.toml [Mobs.MotherOfTheMaze] (maxHealth 100, attackDamage 5)
  config/autoleveling-common.toml [Mobs] ("List of mobs that shouldn't be able to level up" includes aquamirae:maze_mother)
  mods/aquamirae-forge-1.20.1-6.4.0.jar data/aquamirae/loot_tables/entities/maze_mother.json
  config/soulrend_core/boss_damage.toml (not listed)
  config/ftbquests/quests/chapters/aquamirae.snbt "Captain Cornelia's Treasure Hunt", "Terrors of the Ice Maze"; act_2.snbt "Aquamirae" (chapter link after Soulslike Champions)
-->
**Mother of the Maze** is a giant sea creature from Aquamirae that lives in the frozen waters of the Ice Maze. In Soulrend it doesn't wait to be found: every midnight it can rise out of an ordinary Anglerfish near a player. Killing one completes part of the Terrors of the Ice Maze quest in the [[progression/side-chapters/aquamirae|Aquamirae]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]].

## Location

Soulrend replaces the Maze Mother's spawning with a midnight ambush:

- Every night at midnight (day time 18000, for 5 s), the game checks each player in the Overworld.
- If no Mother of the Maze is within 256 blocks of the player, an Anglerfish swimming within 256 blocks turns into one.
- The new Mother of the Maze glows for 30 s, and thunder sounds where it appears.

Anglerfish live in the Ice Maze, so that is where the ambush happens. While a Mother of the Maze is within 256 blocks, players see a pink "Maze Mother" boss bar.

## Stats

The Mother of the Maze is on Auto Leveling's list of mobs that never level up, so it keeps its base stats at every stage of the game (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Value |
| --- | --- |
| Health | 100 HP (50 hearts) |
| Attack damage | 5 |
| Armor | 6 |
| Knockback resistance | 20% |
| Swim speed | 3.0 |
| Follow range | 128 blocks |
| Damage cap | None |

## Strategy

- **Be near water at midnight.** The ambush only turns Anglerfish that are in water.
- **It doesn't scale.** At 100 HP it is far weaker than other bosses of its act, at any player level.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:aquamirae:abyssal_amethyst]] | 2–4 | Always |
| [[item:aquamirae:sharp_bones]] | 6–24 | Always |
| [[item:minecraft:prismarine_crystals]] | 4–24 | Always |
| [[item:aquamirae:ship_graveyard_echo]] | 0–2 | Rolled 0–1 times |

## Quests

**Captain Cornelia's Treasure Hunt** ([[progression/side-chapters/aquamirae|Aquamirae]]) requires entering the Ice Maze biome. Reward: 1 XP level.

**Terrors of the Ice Maze** requires killing a Mother of the Maze and 10 Anglerfish. Rewards: 5 [[item:aquamirae:abyssal_amethyst]] and 5 XP levels.

> [!LORE] Terrors of the Ice Maze (Aquamirae)
> The Ice Maze is not only freezing and massive, but it also contains the scary depths of the ocean. Will you be able to take them down and return with the spoils?
