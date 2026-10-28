---
{
  "title": "Berserker",
  "summary": "Bloodthirsty fighter: +20% max health and +25% critical hit chance. Starts with chainmail and an iron axe.",
  "icon": "dungeons_and_combat:kamath_armor_helmet",
  "infobox": {
    "item": "dungeons_and_combat:kamath_armor_helmet",
    "itemRows": false,
    "rows": [
      [
        "ID",
        "`classes:berserker`"
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
  config/paxi/datapacks/soulrend_origins_classes/data/classes/origins/berserker.json
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/berserker/*.json (blood_bath: max health +0.2 multiply_total; fury: attributeslib:crit_chance +0.25 addition)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/functions/berserker.mcfunction (starting kit)
  config/soulrend_core/common.toml classCategories (selector tabs)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names; "battle axe" in the text, minecraft:iron_axe in the kit)
  game-data/attributes.json (Crit Chance default 0.05)
-->
The **Berserker** charges into fights with heavy weapons. It has more health than most classes and lands far more critical hits.

## Powers

| Power | Effect |
| --- | --- |
| Constitution | +20% max health. |
| Rage | +25% Critical Chance (5% → 30%). |
| Basic Items | Chainmail armor, a Soulbound [[item:minecraft:iron_axe]] with Unbreaking V, and 8 Steak. |

> [!NOTE]
> The in-game text mentions a battle axe and a Weapon Mastery power; in Soulrend the kit has an Iron Axe and the Berserker has no weapon mastery or weapon penalty.

## Playstyle

Rage makes critical hits common, which suits fast, heavy hitters. The health bonus is a percentage, so it grows with every other health bonus.

## Pairs well with

- [[origins/races/orc|Orc]]: Ravager's +25% axe damage works with the starting axe.
- [[origins/races/keres|Keres]]: life steal and bleeding on every melee hit.
- Frail races such as [[origins/races/goblin|Goblin]] and [[origins/races/corrosid|Corrosid]], which benefit from extra health.
