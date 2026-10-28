---
{
  "title": "Feral Beast",
  "summary": "Momentum hunter: speed that builds while sprinting, Pounce and Blood Scent; less health. Its class is always Wildheart.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`classes:feral`"
      ],
      [
        "Impact",
        "Medium"
      ],
      [
        "Classes",
        "[[origins/melee-classes/wildheart|Wildheart]] only"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/classes/origins/feral.json (powers), feral_beast.json (unchoosable legacy origin), feral_lock.json
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/feral/*.json (predatory_physique: +20% base speed, -20% max health; relentless_pursuit: 10 steps of +3% base speed; blood_scent: wounded non-player creatures within 30 blocks glow; pounce: primary key, cooldown 60, not while riding)
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/rpg_class.json (classes:feral sees only classes:wildheart)
  mods/soulrend_origins-1.2-1.20.1.jar Feral.tick (feral_beast is converted to classes:feral; Wildheart is set as the class), FeralState (running +3 per tick while sprinting, max 300, acceleration = running / 30; 30-tick grace, then -5 per tick; pounceDistance = 3 + 0.7 x speed band, speed band 0-10)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (origin and power names; the long origin.classes.feral_beast description belongs to the unchoosable legacy origin)
  calc: 300 / 3 = 100 ticks = 5 s to full acceleration; 30 ticks = 1.5 s grace; 300 / 5 = 60 ticks = 3 s to lose it; 60 ticks = 3 s
-->
**Feral Beasts** are hunters that live on momentum. Sprinting builds up speed, wounded prey glows through walls, and Pounce hurls them at a target. Their bodies are fragile, and their class is always [[origins/melee-classes/wildheart|Wildheart]], which only fights with fist weapons.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Predatory Physique | +20% movement speed. | — |
| Relentless Pursuit | Sprinting builds up to +30% more movement speed over 5 s (+3% per step, 10 steps). Pausing keeps the pace for 1.5 s; after that it drains over 3 s. Acceleration also raises Wildheart's Frenzy damage. | — |
| Blood Scent | Every creature within 30 blocks that has lost health glows red, except players. | — |
| Pounce | Primary ability key: leaps forward 3 to 10 blocks; the faster the Feral Beast is moving, the farther it goes. Not while riding. | 3 s |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Predatory Physique | −20% max health. |
| Class lock | The class layer only offers Wildheart. |

> [!NOTE]
> The race picker may show an older "Feral Beast" entry with a long warning text. That entry can't be chosen; a character that has it is moved to this Feral Beast automatically.

## Playstyle

The Feral Beast never wants to stop moving: sprint between targets to keep Relentless Pursuit full, Pounce in, strike, and move on. Blood Scent finds wounded enemies to chase down. See [[origins/melee-classes/wildheart|Wildheart]] for the fist-weapon rules and the Frenzy bonus.

## Pairs well with

Only [[origins/melee-classes/wildheart|Wildheart]] is available.
