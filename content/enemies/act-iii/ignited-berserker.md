---
{
  "title": "Ignited Berserker",
  "summary": "L_Ender's Cataclysm's armored fire warrior of Nether fortresses; always level 200, and Soulrend makes it drop Burning Ashes a quarter of the time.",
  "items": ["cataclysm:ignited_berserker_spawn_egg"],
  "infobox": {
    "item": "cataclysm:ignited_berserker_spawn_egg",
    "rows": [
      ["ID", "`cataclysm:ignited_berserker`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "200 (floor)"],
      ["Health", "3,945.5 HP"],
      ["Location", "Nether fortresses"],
      { "heading": "Drops" },
      ["Common", "0–2 [[item:cataclysm:dying_ember]]"],
      ["Chance", "[[item:cataclysm:burning_ashes]] (25%)"]
    ]
  }
}
---
<!-- sources:
  config/cataclysm.toml [spawning] (IgnitedBerserkerSpawnWeight 5, IgnitedBerserkerSpawnRolls 2)
  mods/L_Enders_Cataclysm-3.16.jar CMWorldRegistry (adds the Berserker to structure spawns tagged #cataclysm:berserker_spawn); data/cataclysm/tags/worldgen/structure/berserker_spawn.json (minecraft:fortress)
  mods/L_Enders_Cataclysm-3.16.jar Ignited_Berserker_Entity.ignited_berserker (65 health, 7.5 attack, 8 armor, 1 knockback resistance, 0.32 speed, 20 follow range)
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/ignited_berserker.json (starting_level 200, max_level 1000; players cap at 200, so always 200)
  game-data/loot-tables.json cataclysm:entities/ignited_berserker (0-2 Dying Ember, Looting +0-1)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (cataclysm:ignited_berserker: cataclysm:burning_ashes at 0.25)
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt (Burning Ashes item quest); game-data/recipes.json (Burning Ashes uses)
  calc: L200: health 65 × 60.7 = 3,945.5, attack 7.5 × 20.9 = 156.75, armor 8 × 3.189 = 25.5
-->
The **Ignited Berserker** is a burning, heavily armored warrior from L_Ender's Cataclysm that patrols Nether fortresses. Like Cataclysm's other regular mobs it has a level floor of 200, so it hits as hard as an [[progression/act-iii-into-the-flames|Act III]] boss whatever the player's level. Soulrend makes it the source of [[item:cataclysm:burning_ashes]], which an Act III quest asks for.

## Spawning

Ignited Berserkers spawn inside **Nether fortresses**, added to the fortress's own spawn list (weight 5).

## Stats

The Ignited Berserker's level floor is 200, and the player's level stops at 200, so in practice it is always level 200.

| Stat | Base | Level 200 |
| --- | --- | --- |
| Health | 65 HP | 3,945.5 HP |
| Attack damage | 7.5 | 156.8 |
| Armor | 8 | 25.5 |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.32 | |
| Follow range | 20 blocks | |

> [!CAUTION]
> At level 200 a single hit deals about 157 damage before armor. Fight Berserkers one at a time.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:dying_ember]] | 0–2 | Looting adds 0–1 |
| [[item:cataclysm:burning_ashes]] | 1 | 25% (added by Soulrend) |

{{uses cataclysm:burning_ashes}}

## Quests

- **Burning Ashes** (Act III): have Burning Ashes. See [[progression/act-iii-into-the-flames/burning-ashes|Burning Ashes]].

Cataclysm's other Burning Arena mob, the Ignited Revenant, is on [[bosses/optional-and-world/cataclysm-minibosses|Cataclysm Minibosses]].
