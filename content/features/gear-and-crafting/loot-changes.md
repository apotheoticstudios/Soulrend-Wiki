---
{
  "title": "Loot Changes",
  "summary": "Soulrend Core removes wizard armor, familiar trinkets, echoes and all player-crafted gear from loot, so these items come only from their intended sources.",
  "icon": "minecraft:chest"
}
---
<!-- sources:
  config/soulrend_core/loot.toml ([remove] allLoot, chestLoot, mobLoot, mobDeathDrops)
  game-data/tags.json (soulrend:all_crafted, 830 items)
-->

**Loot changes** are removals that Soulrend Core applies to loot tables. Listed items never appear as loot, so a player cannot find them in a chest or take them from a mob.

## How it works

`config/soulrend_core/loot.toml` has four lists. Each entry is an item id or an item tag, and saving the file applies it without a restart.

| List | Applies to |
| --- | --- |
| `allLoot` | Every loot table: chests, mob loot, blocks, fishing, archaeology and the rest |
| `chestLoot` | Chest loot, including Lootr chests and modded dungeon chests |
| `mobLoot` | Mob loot tables. `mobDeathDrops` also applies |
| `mobDeathDrops` | Anything a mob drops on death, whatever adds it: its loot table, equipment it spawned with, or another mod. Players are not affected |

## Details

**Removed everywhere (`allLoot`).** Iron's Spells 'n Spellbooks armor sets: Wizard, Cryomancer, Pyromancer, Electromancer, Priest, Archmage, Archevoker, Cultist, Plagued, Netherite Battlemage, Scarecrow and Shadow Walker.

**Removed from chests and mobs (`chestLoot`, `mobLoot`):**

- Everything in `#soulrend:all_crafted`, 830 items. The tag lists the weapons and armor that players are meant to craft, many of them through [[features/gear-and-crafting/equipment-upgrades|Equipment Upgrades]].
- The 13 Alshanex's Familiars trinkets.
- The ten Traveloptics echoes (aqua, blood, eldritch, ender, evocation, fire, holy, ice, lightning and nature).
- [[item:epicfightx:eternal_night_scythe]], [[item:wom:tormented_mind]], [[item:wom:agony]], [[item:epicfight:uchigatana]] and [[item:too_many_bows:stormbound_signet]].

**Removed from mob deaths (`mobDeathDrops`):** `#soulrend:all_crafted` only.

## Related

- [[features/gear-and-crafting/removed-items|Removed Items]]
- [[items/gear-progression|Gear Progression]]
