---
{
  "title": "Corrosid",
  "summary": "Small acid-breathing flier: flight, a spinning wing dash, an Acid Fireball and poison immunity; fragile, eats only bread, swims poorly.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:bird`"
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
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/origins/bird.json (name "Corrosid", powers, description)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/bird/*.json (natural_flight; dragon_wings icarus:green_dragon_wings; fall_immunity; wing_dash cooldown 20, ground velocity 1.5 forward / 0.15 up, air 2.0 / 0.5; acid_spit cooldown 300; poison_immunity; wet_wings ignore_water; tailwind +20% base speed; small_stature; bread_only; fragile -12 max health)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/functions/bird/apply_size.mcfunction (height and width 0.5)
  mods/soulrend_origins-1.2-1.20.1.jar SimpleOrigins.bird (Acid Fireball: casts dacxirons:acid_ball_spell at level min(5, 1 + floor((Nature Spell Power - 1) / 0.25)); Wing Dash: 30-tick riptide spin with acid particles)
  game-data/spells.json (dacxirons:acid_ball_spell "Acid Fireball", level 1: 8 damage, 4-block radius)
  game-data/tags.json (origins:ignore_diet: Estus Flask, Crimson Flask)
  calc: 20 ticks = 1 s; 300 ticks = 15 s; 30 ticks = 1.5 s; 20 - 12 = 8 max health
-->
**Corrosids** are small, sharp-winged creatures with venom in their blood and acid fire in their throats. They fly on dragon-like wings, never take fall damage, dart around with a spinning dash and spit Acid Fireballs. Their hollow bones leave them with very little health, they can only eat bread, and water drags them down.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Natural Flight | Flies like with an elytra, without wearing one (shown with green dragon wings). | — |
| Wing Dash | Primary ability key: a burst forward (higher and farther in the air), spinning like Riptide for 1.5 s. | 1 s |
| Acid Fireball | Secondary ability key: casts the [[items/magic/spells/nature-spells#Acid Fireball\|Acid Fireball]] spell. Its level is 1 at Nature Spell Power 1.0 and rises by 1 for every +0.25, up to 5. | 15 s |
| Soft Landing | Immune to fall damage. | — |
| Poisonous Constitution | Immune to Poison. | — |
| Tailwind | +20% movement speed. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Fragile | −12 max health: 8 health (4 hearts) before other bonuses. |
| Bread Only | Can only eat [[item:minecraft:bread]], plus [[item:dungeons_and_combat:estus_flask]] and [[item:dungeons_and_combat:crimson_flask]]. |
| Wet Wings | Can't swim: water doesn't hold the Corrosid up. |
| Small Stature | Half the height and width of a human. |

## Playstyle

The Corrosid stays out of reach: it flies, dashes and spits acid from above, and its small size makes it harder to hit. With only 4 hearts, health bonuses from its class and gear matter a lot. Bread is easy to farm, which makes the diet manageable.

## Pairs well with

- [[origins/mage-classes/druid|Druid]]: +30% Nature Spell Power raises Acid Fireball's level.
- [[origins/melee-classes/tank|Tank]] or [[origins/melee-classes/berserker|Berserker]]: percentage health bonuses offset Fragile.
