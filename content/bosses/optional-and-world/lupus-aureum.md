---
{
  "title": "Lupus Aureum",
  "summary": "A rare, heavily armored golden wolf from Weapons of Miracles that roams old-growth taigas and can be tamed and ridden.",
  "aliases": ["Lupus Rex"],
  "items": ["wom:lupus_rex_spawn_egg"],
  "infobox": {
    "item": "wom:lupus_rex_spawn_egg",
    "rows": [
      ["ID", "`wom:lupus_rex`"],
      ["Level", "The player's level"],
      ["Health", "1,270 HP (level 40)"],
      ["Location", "Old-growth taigas"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar LupusRex.createAttributes (100 max health, 30 armor, 15 armor toughness, 0.45 movement speed, 4.0 swim speed, 2,048 follow range; Epic Fight: 8 max strikes, 6 impact); goals LupusRexOwnerHurtByTargetGoal, LupusRexOwnerHurtTargetGoal, RiddableFollowOwnerGoal, RangeBreedGoal; isFood: porkchop, cod, salmon, beef, chicken, mutton (raw and cooked), rotten flesh
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar data/wom/forge/biome_modifier/spawn_lupus_rex.json (old_growth_pine_taiga, old_growth_spruce_taiga; weight 2, groups of 1)
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar assets/wom/lang/en_us.json (entity.wom.lupus_rex = "Lupus Aureum"); no loot tables in the jar
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L10: health 100 × 3.7 = 370, armor 30 × 1.099 = 33.0; L40: 1,270, armor 42.9; L100: 3,070, armor 62.7
-->
**Lupus Aureum** (`wom:lupus_rex`) is a golden wolf from Weapons of Miracles. It is rare, very well armored, and, unlike the other bosses in this section, it can be tamed: a tamed Lupus Aureum follows and defends its owner, can be ridden, and can be bred. No quest asks for it.

## Spawning

Lupus Aureum spawns alone in Old Growth Pine Taigas and Old Growth Spruce Taigas, with a low spawn weight of 2.

## Stats

It has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 100 HP | 370 HP | 1,270 HP | 3,070 HP |
| Armor | 30 | 33.0 | 42.9 | 62.7 |
| Armor toughness | 15 | 15 | 15 | 15 |
| Movement speed | 0.45 | 0.45 | 0.45 | 0.45 |
| Swim speed | 4.0 | | | |

It fights with Epic Fight animations.

## Taming

A tamed Lupus Aureum attacks whatever hurts its owner or whatever its owner attacks, follows its owner and can be ridden. It eats raw and cooked pork, beef, chicken, mutton, cod and salmon, as well as rotten flesh.

<!-- TODO: taming item and chance (LupusRex.mobInteract). -->

## Drops

Weapons of Miracles gives Lupus Aureum no loot table, so it drops nothing.
