---
{
  "title": "Ancient Knight",
  "summary": "Iron's Spellbooks' animated armor that guards the Citadel and the Ancient Battleground in the Nether, wielding a Decrepit Flamberge.",
  "aliases": ["Citadel Keeper", "Keeper"],
  "items": ["irons_spellbooks:keeper_spawn_egg"],
  "infobox": {
    "item": "irons_spellbooks:keeper_spawn_egg",
    "rows": [
      ["ID", "`irons_spellbooks:citadel_keeper`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Health", "1,842 HP (level 100)"],
      ["Location", "Citadel and Ancient Battleground (Nether)"],
      { "heading": "Drops" },
      ["Player kill", "[[item:irons_spellbooks:cinder_essence]], [[item:minecraft:netherite_scrap]] (25%)"]
    ]
  }
}
---
<!-- sources:
  mods/irons_spellbooks-1.20.1-3.15.6.jar worldgen/structure/citadel.json and ancient_battleground.json (#minecraft:has_structure/bastion_remnant); structure NBT citadel, rampart, battleground, trophy pieces (citadel_keeper)
  mods/irons_spellbooks-1.20.1-3.15.6.jar KeeperEntity.prepareAttributes (60 health, 10 attack, 0.8 knockback resistance, 2 attack knockback, 0.19 speed, 25 follow range); KeeperEntity.populateDefaultEquipmentSlots (KEEPER_FLAMBERGE in the main hand, LEGIONNAIRE_FLAMBERGE if restored)
  Install/libraries/.../client-1.20.1-...-srg.jar Mob.dropCustomDeathLoot (held items drop at 8.5%, +1% per Looting level, when recently hit by a player)
  game-data/loot-tables.json irons_spellbooks:entities/citadel_keeper (Cinder Essence on a player kill; Netherite Scale 25% +5%/Looting on a player kill); game-data/items.json (irons_spellbooks:keeper_flamberge = "Decrepit Flamberge", minecraft:netherite_scrap = "Netherite Scale")
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L40: 60 × 12.7 = 762, 10 × 4.9 = 49; L100: 1,842, 109; L150: 2,742, 159
-->
The **Ancient Knight** (Iron's Spellbooks' "Citadel Keeper") is an empty suit of armor that guards the Nether's Citadel and Ancient Battleground with a huge flamberge. It is slow but hits hard and can hardly be knocked back. Players meet it in [[progression/act-iii-into-the-flames|Act III]]; no quest asks for it.

## Spawning

Ancient Knights stand in Iron's Spellbooks' **Citadel** and **Ancient Battleground**, Nether structures that generate in the same biomes as bastion remnants.

## Stats

The Ancient Knight has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act II (40) | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- | --- |
| Health | 60 HP | 762 HP | 1,842 HP | 2,742 HP |
| Attack damage | 10 | 49 | 109 | 159 |
| Armor | 0 | 0 | 0 | 0 |
| Knockback resistance | 80% | 80% | 80% | 80% |
| Movement speed | 0.19 | | | |
| Follow range | 25 blocks | | | |

It spawns holding a [[item:irons_spellbooks:keeper_flamberge]], which adds to its attack.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:cinder_essence]] | 1 | Player kill |
| [[item:minecraft:netherite_scrap]] | 1 | Player kill, 25% (+5% per Looting level) |
| [[item:irons_spellbooks:keeper_flamberge]] | 1 | Its held weapon: 8.5% (+1% per Looting level) when a player hit it |
