---
{
  "title": "Ungoliant",
  "summary": "Spider folk: wall climbing, a silk grapple that pins targets, webbing hits, fall immunity and +25% katana damage; 30% less health and hungry.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:ungoliant`"
      ],
      [
        "Impact",
        "Medium"
      ],
      [
        "Classes",
        "Any"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/origins/ungoliant.json (powers)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/ungoliant/*.json (climber toggle on tertiary key; web_slinger: silk 0-500, start 150, +1 per 2 ticks, katanas +25%, scythes -60%; fall_immunity; grappler primary key; bottomless_stomach +20% exhaustion; fragile_exoskeleton -30% max health; many_eyes empty)
  mods/Origins-1.10.2+mc.1.20.x.jar data/origins/powers/master_of_webs.json (hit places a temporary cobweb, cooldown 120 ticks; no web slowdown; climb in webs; sense entities in webs; 2 string -> cobweb), arthropod.json
  mods/soulrend_origins-1.2-1.20.1.jar Ungoliant (web shot; 1 silk per block of zip distance; target hit: Slowness IV and Weakness II for 100 ticks; web expires after 60 ticks)
  game-data/tags.json (soulrend:katanas 50 items, soulrend:all_scythes 45 items)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 2 ticks -> 10 silk per second; 120 ticks = 6 s; 100 ticks = 5 s; 60 ticks = 3 s
-->
**Ungoliant** are spider folk who walk upright and wield weapons. They climb walls, swing on silk, wrap their targets in webs and never take fall damage. Their exoskeleton leaves them with less health, and they need a lot of food.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Climber | Climbs walls by walking into them. Tertiary Active key: toggles climbing. | — |
| Grappler | Primary ability key: shoots a silk line. If it hits a block, the Ungoliant zips to it; if it hits a creature, that creature gets Slowness IV and Weakness II for 5 s and the Ungoliant zips to it. The line costs 1 silk per block traveled and is lost if it hasn't hit anything after 3 s. | — |
| Web Slinger | Silk reserve of up to 500 (starting at 150), refilling 10 per second. Silken Blade: +25% damage with katanas. | — |
| Master of Webs | Hitting a creature traps it in a temporary cobweb (once every 6 s). Cobwebs don't slow the Ungoliant, it can climb in them, and it senses creatures caught in webs. Two [[item:minecraft:string]] craft a [[item:minecraft:cobweb]]. | 6 s (webbing) |
| Reinforced Bone Structure | Immune to fall damage. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Fragile | −30% max health. |
| Bottomless Stomach | +20% exhaustion. |
| Entangled Blade | −60% damage with scythes. |
| Arthropod | Counts as an arthropod, so Bane of Arthropods deals extra damage to it. |

> [!NOTE]
> Many Eyes appears in the power list but has no effect in Soulrend.

## Playstyle

The Ungoliant controls fights: the grapple pins a target with Slowness IV and pulls the Ungoliant straight to it, and webbing hits keep it there. Walls and ceilings are always an escape route. Katanas are its best weapons, and scythes its worst.

## Pairs well with

- [[origins/melee-classes/samurai|Samurai]]: +50% katana damage stacks with Silken Blade's +25%.
- [[origins/melee-classes/tank|Tank]]: +30% max health cancels Fragile.
