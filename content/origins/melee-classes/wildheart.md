---
{
  "title": "Wildheart",
  "summary": "The Feral Beast's class: only fist weapons deal damage, hits build Frenzy stacks, and fist kills heal.",
  "icon": "epicfight:glove",
  "infobox": {
    "item": "epicfight:glove",
    "itemRows": false,
    "rows": [
      [
        "ID",
        "`classes:wildheart`"
      ],
      [
        "Tab",
        "Other"
      ],
      [
        "Impact",
        "Medium"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/classes/origins/wildheart.json
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/wildheart/*.json (frenzy stacks 0-10)
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/rpg_class.json (only classes:feral sees Wildheart; exclude_random)
  mods/soulrend_origins-1.2-1.20.1.jar Feral (only soulrend:gloves deal damage; soulrend:feral_forbidden_offhand blocked in the off hand; death: direct fist kill heals 0.05 max health; starter: epicfight:glove, leather armor, 8 minecraft:cooked_beef)
  mods/soulrend_origins-1.2-1.20.1.jar FeralState (MAX_STACKS 10, HIT_GRACE 160, MISS_GRACE 80, DECAY_INTERVAL 20; bonus = stacks x speed band x 0.005 x (1 + acceleration / 10))
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names and descriptions)
  game-data/tags.json (soulrend:gloves 17 items; soulrend:feral_forbidden_offhand 276 items)
  calc: 160 ticks = 8 s; 80 ticks = 4 s; full speed band 10 -> 5% per stack, x2 with full acceleration -> 10% per stack, 100% at 10 stacks
-->
**Wildheart** is the only class a [[origins/races/feral-beast|Feral Beast]] can take, and no other race can take it. It fights only with fist weapons and builds a **Frenzy** with every hit.

## Powers

| Power | Effect |
| --- | --- |
| Naturalist | Only fist weapons (the 17 items in `soulrend:gloves`) deal damage. The 276 weapons in `soulrend:feral_forbidden_offhand` can't be held in the off hand. Starts with leather armor, a [[item:epicfight:glove]] and 8 Steak. |
| Frenzy | Each fist hit adds a Frenzy stack, up to 10. Each stack adds up to 5% damage, depending on how fast the Wildheart is moving, and up to 10% with full [[origins/races/feral-beast\|Relentless Pursuit]] acceleration: 100% at 10 stacks. After a hit, stacks last 8 s; after a miss, 4 s. Then they fade one per second. |
| Gorging on the Slain | Killing a creature with a direct fist strike heals 5% of max health. Spells, projectiles and summons don't count. |

## Fist weapons

{{items tag=soulrend:gloves}}

## Playstyle

Frenzy rewards hitting while moving fast: sprint to build Relentless Pursuit, Pounce in and chain hits before the stacks fade. Missing shortens the window, so accurate hits matter. Gorging heals on every fist kill, which makes clearing weak mobs a way to recover.

## Pairs well with

Only the [[origins/races/feral-beast|Feral Beast]] can take Wildheart.
