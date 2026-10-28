---
{
  "title": "Returning Knight",
  "summary": "A fallen knight summoned with a Lost Soul at an Old Moon Altar; it is immune to projectiles and drops the Nightfall greatsword.",
  "items": ["soulsweapons:returning_knight_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:returning_knight_spawn_egg",
    "model": "soulsweapons:returning_knight",
    "rows": [
      ["ID", "`soulsweapons:returning_knight`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "50–200 (at least 50)"],
      ["Health", "7,850 HP (level 50)"],
      ["Location", "Old Moon Altar, Cathedral of Resurrection"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:nightfall]], [[item:soulsweapons:arkenstone]], [[item:soulsweapons:soul_ingot]] ×2, [[item:soulsweapons:lord_soul_rose]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/returning_knight.json (starting_level 50, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json returning_knight_* (health 500, armor 15, attack cooldown 40 ticks, special cooldown 80 ticks, summon cooldown 200 ticks, consumes summoning item, projectile immunity whitelist empty, disables shields, fire immune, inverted heal and harm, immune to Poison)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar ReturningKnight.createBossAttributes (max health and armor from BossConfig, 15 attack damage, 0.15 movement speed, 1.0 knockback resistance, 50 follow range); ReturningKnight data flags (Mace of Spades, Obliterate, Summon, Rupture, Blind, Unbreakable); ReturningKnight.hurt (projectiles not on the whitelist are ignored)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AltarBlock (item in the soulsweapons Lost Soul tag on an Old Moon Altar summons returning_knight)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/worldgen/structure/cathedral_of_resurrection.json (#minecraft:is_hill), corrupt_altar.json (savanna, plains); structure_set/overworld_structures.json (spacing 60, separation 30); structures/cathedral_of_resurrection.nbt and corrupt_altar_main.nbt (hold an altar_block)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/returning_knight.json
  config/soulrend_core/boss_damage.toml (soulsweapons:returning_knight=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "Find the Cathedral of Resurrection", "Defeat The Returning Knight"
  calc: L50: health 500 × 15.7 = 7,850; attack 15 × 5.9 = 88.5; armor 15 × 1.539 = 23.1; cap 1,570 HP/s
        L100: health 15,350; attack 163.5; armor 31.3; cap 3,070 HP/s
        L200: health 30,350; attack 313.5; armor 47.8; cap 6,070 HP/s
-->
**Returning Knight** is a fallen knight bound to the Old Moon Altar, summoned back with a Lost Soul. It is a [[progression/side-chapters/soulslike-champions|Soulslike Champions]] boss, a chapter linked from [[progression/act-ii-first-steps|Act II]], and killing it opens the fight against its former self, the [[Fallen Icon]].

## Location

The Returning Knight is summoned by using a [[item:soulsweapons:lost_soul]] on an [[item:soulsweapons:altar_block]]. The Lost Soul is used up.

Old Moon Altars stand in the Cathedral of Resurrection (`soulsweapons:cathedral_of_resurrection`), which generates in hill biomes. The cathedral shares one placement grid with the Champion's Grave, so between them they generate at most once per 60 × 60 chunk area. The Corrupt Altar structure (savannas and plains) also holds one. The [[item:soulsweapons:boss_compass]] points to these structures.

The Guiding Moon quest gives 2 Lost Souls, and they can be crafted:

{{recipes soulsweapons:lost_soul}}

## Stats

The Returning Knight has a level floor of 50: it takes the nearest player's Soulrend level, but never less than 50. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 50 (floor) | Level 100 | Level 200 |
| --- | --- | --- | --- | --- |
| Health | 500 HP | **7,850 HP** (3,925 hearts) | 15,350 HP | 30,350 HP |
| Attack damage | 15 | **88.5** | 163.5 | 313.5 |
| Armor | 15 | **23.1** | 31.3 | 47.8 |
| Knockback resistance | 100% | 100% | 100% | 100% |
| Movement speed | 0.15 | 0.15 | 0.15 | 0.15 |
| Follow range | 50 blocks | | | |
| Damage cap | | 20% per second (1,570 HP) | 20% per second (3,070 HP) | 20% per second (6,070 HP) |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire, Poison and projectiles. Instant Health harms it and Instant Damage heals it.

## Attacks

| Attack | Notes |
| --- | --- |
| Mace of Spades | |
| Obliterate | |
| Rupture | |
| Blinding light | |
| Summon | 10 s cooldown |
| Unbreakable | |

Its basic attacks have a 2 s cooldown and its special attacks a 4 s cooldown. Its attacks disable shields.

## Strategy

- **Use melee or spells.** Arrows, tridents and other projectiles don't hurt it.
- **Don't block.** Its attacks disable shields.
- **Poison and fire don't work.** It is immune to both.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:nightfall]] | 1 | Always |
| [[item:soulsweapons:arkenstone]] | 1 | Always |
| [[item:soulsweapons:soul_ingot]] | 2 | Always |
| [[item:soulsweapons:lord_soul_rose]] | 1 | Always |

## Quests

**Find the Cathedral of Resurrection** ([[progression/side-chapters/soulslike-champions|Soulslike Champions]], after The Guiding Moon) requires an Old Moon Altar in the inventory. Rewards: a roll on the Chipped Gems and the Common Loot reward tables.

**Defeat The Returning Knight** requires killing the knight and holding its Lord Soul, an Old Moon Altar and a Lost Soul. Rewards: a roll on the Flawed Gems and the Enchanted Books reward tables. It opens Defeat The Fallen Icon.

> [!LORE] Defeat The Returning Knight (Soulslike Champions)
> A powerful soul who was under control of a dark force and a pure moonstone radiating with powerful energy. But couldn't we have done anything else?
>
> Summoned with a Lost Soul in an Old Moon Altar.
