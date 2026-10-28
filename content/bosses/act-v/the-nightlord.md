---
{
  "title": "The Nightlord",
  "summary": "The Souls Like Bosses boss in the Tree of Light, which Soulrend places only in the Past's dead oceans; it drops the Dark Moon Greatsword. No quest asks for it.",
  "aliases": ["Nightlord", "Night Lord"],
  "items": ["souls_like_bosses:nightlord_spawn_egg"],
  "infobox": {
    "item": "souls_like_bosses:nightlord_spawn_egg",
    "model": "souls_like_bosses:nightlord",
    "rows": [
      ["ID", "`souls_like_bosses:nightlord`"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Health", "728,400 HP (level 200)"],
      ["Location", "Tree of Light, the Past"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:souls_like_bosses:dark_moon_greatsword]]"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (CONFIG.PAST.BOSSES: "The Nightlord" in dark purple, "Lives in the Tree of Light, which only generates in the Past"; max health base 12,000, attack damage base 2,000, health set to 12,000 on spawn; no soldiers within 96 blocks)
  mods/souls_like_bosses-1.0.3.jar NightLordEntity.createAttributes (500 max health, 8 attack damage, 10 armor, 0.25 movement speed, 50 follow range); applyConfigAttributes; NightLordPhaseChangeGoal; NightLordAttacks (light, heavy, gael, abyss and their teleport variants, jump back, heavy backflip, scream, lightning catch, lightning jump, lightning smash, giant lightning bolt, "kamehameha" beam; "aw_" awakened versions)
  mods/souls_like_bosses-1.0.3.jar NightLordEntity.dropDarkMoonGreatsword (on death: Dark Moon Greatsword with Unbreaking III, Sharpness V, Mending)
  config/souls_like_bosses-common.toml (health, damage, armor and speed multipliers 1.0; 5 attacks per combo; Dark Moon Greatsword: 12 damage, 2,031 durability, 120-tick cooldown, 3 charges, 7 wave damage)
  config/paxi/datapacks/soulrend_worldgen/data/souls_like_bosses/worldgen/structure/tree_of_light.json (biome soulrend:dead_ocean, start y -30) and the jar's structure_set (spacing 100, separation 99)
  config/soulrend_core/boss_damage.toml (not listed)
  config/ftbquests (no quest kills souls_like_bosses:nightlord)
  calc: Past base × level 200 multipliers (health × 60.7, attack × 20.9, armor × 3.189)
        L200: health 12,000 × 60.7 = 728,400; attack 2,000 × 20.9 = 41,800; armor 10 × 3.189 = 31.9
-->
**The Nightlord** is the boss of the Souls Like Bosses mod. It lives in the Tree of Light, which Soulrend moves into the Past, the dimension of [[progression/act-v-duties|Act V]]. No quest asks for it; its reward is its own weapon, the [[item:souls_like_bosses:dark_moon_greatsword]].

## Location

The Tree of Light (`souls_like_bosses:tree_of_light`) generates only in the Dead Ocean biome of the Past, at most once per 100 × 100 chunk area, which makes it very rare. The Past is reached with the [[item:kubejs:emblem_of_the_past]] (see [[features/mobs-and-world/the-past|The Past]]).

No Past soldiers spawn within 96 blocks of the Nightlord.

## Stats

Souls Like Bosses gives the Nightlord 500 health and 8 attack damage. In the Past, Soulrend replaces those bases with 12,000 health and 2,000 attack damage when it spawns, and the level bonus then multiplies the new bases. It has no level setting, so its level is the nearest player's Soulrend level. The last column uses Act V's typical level, the player cap of 200 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Mod base | Past base | Level 200 |
| --- | --- | --- | --- |
| Health | 500 HP | 12,000 HP | **728,400 HP** (364,200 hearts) |
| Attack damage | 8 | 2,000 | **41,800** |
| Armor | 10 | 10 | **31.9** |
| Movement speed | 0.25 | 0.25 | 0.25 |
| Follow range | 50 blocks | 50 blocks | 50 blocks |
| Damage cap | | | None |

## Attacks

The Nightlord strings up to 5 attacks into each combo, and it has a phase change partway through the fight that unlocks "awakened" versions of its moves.

| Attack | Notes |
| --- | --- |
| Light and heavy attacks | Some with a heavy backflip. |
| Gael and abyss attacks | Can teleport in and out. |
| Jump back | |
| Scream | |
| Lightning catch, jump and smash | |
| Giant lightning bolt | |
| Beam | Charged from a jump back. |

<!-- TODO: attack damage values (AttackTuning) and the phase threshold (NightLordPhaseChangeGoal). -->

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:souls_like_bosses:dark_moon_greatsword]] | 1 | Always, with Unbreaking III, Sharpness V and Mending |

The Dark Moon Greatsword deals 12 damage, has 2,031 durability, and holds 3 charges of a wave attack (7 damage, 6 s cooldown).
