---
{
  "title": "Voidshelf Golem",
  "summary": "A bookshelf golem in the Void Cathedral of the End Highlands that summons flying Void Tomes; it drops nothing.",
  "aliases": ["VoidShelf Golem"],
  "items": ["traveloptics:voidshelf_golem_spawn_egg"],
  "infobox": {
    "item": "traveloptics:voidshelf_golem_spawn_egg",
    "rows": [
      ["ID", "`traveloptics:voidshelf_golem`"],
      ["Level", "The player's level"],
      ["Health", "3,282 HP (level 180)"],
      ["Location", "Void Cathedral, End Highlands"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/traveloptics-6.3.0-1.20.1.jar VoidshelfGolemEntity.prepareAttributes (60 max health, 3 attack damage, knockback resistance 100 (clamped to 1.0), 0.25 movement speed, 0.3 flying speed, 18 follow range); animations camouflage, shelf casting, spawn void tomes; spawns VoidTomeEntity
  mods/traveloptics-6.3.0-1.20.1.jar data/traveloptics/structures/void_cathedral.nbt (holds a Voidshelf Golem)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/void_tome.json (Void Manuscript 1-2, Looting +1-2)
  mods/traveloptics-6.3.0-1.20.1.jar VoidTomeEntity.shouldDropLoot / shouldDropExperience (false when summoned); the golem calls setIsSummoned on its tomes
  mods/traveloptics-6.3.0-1.20.1.jar lang (entity.traveloptics.voidshelf_golem = "VoidShelf Golem")
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L180: health 60 × 54.7 = 3,282; attack 3 × 18.9 = 56.7
        L200: health 60 × 60.7 = 3,642; attack 3 × 20.9 = 62.7
-->
**Voidshelf Golem** (in game, **VoidShelf Golem**) is a living bookshelf that guards the Void Cathedral alongside [[The Nightwarden]]. It hides as an ordinary shelf, then summons flying Void Tomes to fight for it. No quest requires killing it.

## Location

The Voidshelf Golem is part of the Void Cathedral (`traveloptics:void_cathedral`) in the End Highlands. See [[The Nightwarden#Location]].

## Stats

The golem has no level setting, so its level matches the Soulrend level of the nearest player. The columns use the typical levels of the acts in which players reach the End (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act IV (180) | Act V (200) |
| --- | --- | --- | --- |
| Health | 60 HP | 3,282 HP | 3,642 HP |
| Attack damage | 3 | 56.7 | 62.7 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.25 (flying 0.3) | | |
| Follow range | 18 blocks | | |

## Attacks

- **Camouflage**: it hides as a bookshelf.
- **Shelf casting**: it casts spells.
- **Summon Void Tomes**: flying books that attack its target.

<!-- TODO: spells and tome count (VoidshelfGolemEntity). -->

## Drops

The golem has no loot table, so it drops nothing. The Void Tomes it summons drop nothing either: summoned tomes give no loot or experience, although a Void Tome's own loot table holds the [[item:traveloptics:void_manuscript]].
