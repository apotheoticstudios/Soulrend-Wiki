---
{
  "title": "Endermaptera",
  "summary": "L_Ender's Cataclysm's End insect; Soulrend gives it a level floor of 50, but nothing in the pack spawns it naturally.",
  "items": ["cataclysm:endermaptera_spawn_egg"],
  "infobox": {
    "item": "cataclysm:endermaptera_spawn_egg",
    "model": "cataclysm:endermaptera",
    "rows": [
      ["ID", "`cataclysm:endermaptera`"],
      ["Level", "At least 50"],
      ["Health", "251.2 HP (level 50)"],
      ["Location", "No natural spawn"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/L_Enders_Cataclysm-3.16.jar CMWorldRegistry (natural spawns only for deeplings, coral golem, amethyst crab, koboleton and, in fortresses, the ignited berserker); no structure NBT or template pool places cataclysm:endermaptera; no class outside its own entity, registration and client code references ModEntities.ENDERMAPTERA
  mods/L_Enders_Cataclysm-3.16.jar Endermaptera_Entity.endermaptera (16 health, 4 attack, 6 armor, 0.25 knockback resistance, 0.27 speed, 16 follow range)
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/endermaptera.json (starting_level 50, max 1000)
  game-data/loot-tables.json cataclysm:entities/endermaptera (empty)
  calc: L50: 16 × 15.7 = 251.2, 4 × 5.9 = 23.6, armor 6 × 1.539 = 9.2; L100: 491.2, 43.6, 12.5; L180: 875.2, 75.6, 17.8
-->
The **Endermaptera** is an End-themed insect from L_Ender's Cataclysm. Soulrend gives it a level floor of 50, but in Cataclysm 3.16 nothing spawns it: it has no natural spawn rule, no structure places it, and no boss summons it. It only appears from its spawn egg.

## Stats

Its level is at least 50 and otherwise follows the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Level | Stats |
| --- | --- |
| Base | 16 HP / 4 / 6 |
| 50 (floor) | 251.2 HP / 23.6 / 9.2 |
| 100 | 491.2 HP / 43.6 / 12.5 |
| 180 | 875.2 HP / 75.6 / 17.8 |

## Drops

Its loot table is empty, so it drops nothing.

The Ender Golem, which guards the [[Ender Guardian]]'s Ruined Citadel, is on [[bosses/optional-and-world/cataclysm-minibosses|Cataclysm Minibosses]].
