---
{
  "title": "Orc",
  "summary": "Huge brute: +50% health, +25% axe damage, Bloodlust, a leaping shockwave and wall climbing; much slower, very hungry, no shields.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:orc`"
      ],
      [
        "Impact",
        "High"
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
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/origins/orc.json (powers)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/orc/*.json (bloodlust: Speed III and Haste XI 100 ticks, Instant Damage II, needs health > 12, cooldown 600; bloodlust_camera; ravager: +25% attack damage with medievalorigins:axes in either hand; lead_belly: poison and hunger immunity; ravenous +80% exhaustion; sluggish -0.04 speed, -0.1 attack speed; unwieldy: no origins:shields; ogre_properties: +50% base max health, break speed +25%, saturation x2; orc_leap: jump while airborne, sprinting and not sneaking, cooldown 300; wall climb while not sneaking)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/ungoliant/fall_immunity.json (granted to the Orc)
  mods/soulrend_origins-1.2-1.20.1.jar SimpleOrigins.orc (scale 2.22, 1.11 while sneaking; crushes soft blocks while not sneaking via soulrend_core OrcCrush; +0.08 exhaustion every 5 ticks while sprinting), SimpleOrigins.leap, SimpleOrigins.slam (12 damage to creatures within 5 x 2 x 5 blocks, knockback, Slowness, Weakness and Mining Fatigue VI for 40 ticks)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names; Colossal Physique text claims +50% attack damage and a -75% crawl penalty that the data doesn't apply)
  calc: 600 ticks = 30 s; 300 ticks = 15 s; 100 ticks = 5 s; 40 ticks = 2 s; -0.04 of the 0.1 base speed = -40%; Instant Damage II = 12 damage
-->
**Orcs** are towering brutes more than twice a human's height. They have half again as much health, hit harder with axes, smash through soft blocks just by running into them, and can leap into a crowd to land with a shockwave. They are slow, always hungry, and can't hold a shield.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Colossal Physique | +50% max health, +25% mining speed, double saturation from food. Crouching shrinks the Orc to half its size to fit through gaps. | — |
| Ravager | +25% attack damage while holding an axe in either hand. While not sneaking, running into leaves, fences and other soft blocks breaks them. | — |
| Bloodlust | Primary ability key: Speed III and Haste XI for 5 s, at the cost of Instant Damage II (12 damage). Needs more than 12 health. The screen turns red while it lasts. | 30 s |
| Orc Leap & Shockwave | Jump while sprinting in the air (not sneaking) to launch forward. On landing: 12 damage to every creature within 5 blocks, heavy knockback, and Slowness, Weakness and Mining Fatigue VI for 2 s. | 15 s |
| Climber | Climbs walls while not sneaking. | — |
| Lead Belly | Immune to Poison and Hunger. | — |
| Fall immunity | Immune to fall damage. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Sluggish | −40% movement speed and −0.1 attack speed. |
| Ravenous | +80% exhaustion, plus extra exhaustion while sprinting. |
| Unwieldy Hands | Can't use a [[item:minecraft:shield]] (the only item in `origins:shields`). |
| Size | About 2.2 times human size, so many doors and tunnels need crouching. |

## Playstyle

The Orc closes distance with Orc Leap rather than speed, landing in a crowd to stun it, then uses Bloodlust for a burst of speed. Food runs out fast, but Lead Belly makes rotten flesh and other risky foods safe.

## Pairs well with

- [[origins/melee-classes/berserker|Berserker]]: starts with an [[item:minecraft:iron_axe]], which Ravager boosts.
- [[origins/melee-classes/tank|Tank]]: +30% max health on top of Colossal Physique.
