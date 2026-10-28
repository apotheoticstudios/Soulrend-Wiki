---
{
  "title": "Tank",
  "summary": "Shield bearer: +30% max health and +20% armor. Starts with chainmail, a wooden shield and a wooden sword.",
  "icon": "fantasy_armor:forgotten_trace_helmet",
  "infobox": {
    "item": "fantasy_armor:forgotten_trace_helmet",
    "itemRows": false,
    "rows": [
      [
        "ID",
        "`classes:tank`"
      ],
      [
        "Tab",
        "Melee"
      ],
      [
        "Impact",
        "Low"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/classes/origins/tank.json
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/tank/*.json (health: max health +0.3 multiply_total; ignore_pain: armor +0.2 multiply_total)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/functions/tank.mcfunction (starting kit)
  config/soulrend_core/common.toml classCategories (selector tabs)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names; "Stand Behind Me!" is not in the origin)
-->
The **Tank** charges in behind a shield and absorbs punishment for the group. It has the largest health bonus of any class.

## Powers

| Power | Effect |
| --- | --- |
| Healthy | +30% max health. |
| Ignore Pain | +20% armor. |
| Basic Items | Chainmail armor, a Soulbound [[item:dungeons_and_combat:wooden_shield]] and [[item:minecraft:wooden_sword]] (both with Unbreaking V), and 8 Steak. |

> [!NOTE]
> The in-game text lists "Stand Behind Me!" (double armor with a shield). That power isn't part of the Tank in Soulrend.

## Playstyle

Both bonuses are percentages, so they scale with better armor and other health sources. Blocking with the shield and holding the front line is the Tank's job in a group.

## Pairs well with

- [[origins/races/shulk|Shulk]], [[origins/races/yeti|Yeti]] and [[origins/races/dwarf|Dwarf]]: races with extra armor or health stack well. (The Shulk can't use the vanilla Shield but can use the Wooden Shield.)
- Fragile races such as [[origins/races/ungoliant|Ungoliant]] and [[origins/races/corrosid|Corrosid]], to cancel their health penalty.
