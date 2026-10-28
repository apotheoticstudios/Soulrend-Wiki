---
{
  "title": "Siren (Race)",
  "summary": "Water-dweller: breathes and heals underwater, swims fast and charms mobs with Sirens' Song; fire hits hurt much more.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:siren`"
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
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/origins/siren.json (powers)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/siren/amphibious.json (+40 air per second in water, break speed x5 underwater or floating without Aqua Affinity, swim speed +50%), holy_water.json (heal 1 every 25 ticks in water or rain), flammable.json (+6 per fire damage hit), water_vision.json, siren_ignore.json (iceandfire:siren), siren_song.json (radius 48, not bosses or players, cooldown 1500), captivated.json (ends after 19 one-second steps)
  mods/Origins-1.10.2+mc.1.20.x.jar data/origins/powers/aquatic.json (aquatic entity group)
  config/origins_server.json (out_of_your_depth, seduce disabled)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 25 ticks = 1.25 s; 1500 ticks = 75 s
-->
**Sirens** are merfolk. Underwater they breathe, see clearly, swim fast and heal quickly, and their song can stop a whole area of mobs from attacking. Fire is their weakness: every burn hurts much more.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Amphibious | Breathes underwater, swims 50% faster, and mines at normal speed underwater (or while floating) without Aqua Affinity. Night Vision while submerged. | — |
| Holy Water | Heals 1 health every 1.25 s while in water or rain. | — |
| Sirens' Song | Primary ability key: every mob within 48 blocks, except bosses and players, stops targeting the Siren for 19 s. | 75 s |
| Siren kin | Ice and Fire's Sirens ignore the Siren. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Flammable | +6 damage from every fire damage hit, including each tick of burning. |
| Aquatic | Counts as an aquatic mob, so Impaling deals extra damage to it. |

> [!NOTE]
> Soulrend turns off Out of Your Depth and Captivating, so Sirens heal normally on land and have no villager trade bonus.

## Playstyle

The Siren is strongest near water, where it can retreat to heal. Sirens' Song is an escape and a crowd-control tool: it covers a large area for 19 s. Fire Resistance and avoiding fire-using enemies matter more for a Siren than for any other race.

## Pairs well with

- [[origins/mage-classes/tideweaver|Tideweaver]]: aqua spells fit the water theme.
- [[origins/mage-classes/cryomancer|Cryomancer]]: ice magic keeps enemies away, which suits a race that can't afford to be set on fire.
