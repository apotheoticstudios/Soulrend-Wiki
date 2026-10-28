---
{
  "title": "Yeti (Race)",
  "summary": "Frost tank: Glacial Slam, +12 health, slows mobs that get close, immune to Slowness and freezing; double fire damage.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:yeti_new`"
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
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/origins/yeti_new.json (powers)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/yeti_new/*.json (frigid_pulse "Glacial Slam" cooldown 300; from_whence_you_came: +0.03 speed and -50% fall damage in biomes at temperature <= 0.4 or medievalorigins:cold_biomes, freezing immunity; frosty_breath: Slowness II 2 s to non-players within 1 block every 20 ticks; titanic +12 max health; unstoppable; winter_body height 1.08; flammable: fire damage +100%; spell_power +1 ice)
  mods/soulrend_origins-1.2-1.20.1.jar Yeti.release (level = OriginMath.yetiLevel(Ice Spell Power) = min(5, 1 + floor((power - 2) / 0.25)); rings = 2 + level / 2, ring i at 2.5 + 1.5 i blocks with 6 + 6 i Tremor Spikes; then Frostwave at the same level; then a circular Earthquake, radius 2.5 + 1.5 (rings - 1) + 1, 120 ticks)
  game-data/spells.json (gtbcs_geomancy_plus:tremor_spike, irons_spellbooks:frostwave, irons_spellbooks:earthquake)
  config/origins_server.json (medievalorigins:yeti disabled; yeti_new enabled)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 300 ticks = 15 s; 120 ticks = 6 s; at Ice Spell Power 2.0: level 1, 2 rings (6 + 12 spikes), earthquake radius 5
-->
**Yetis** are large, thick-furred beasts from frozen woods. They have 6 extra hearts, shrug off Slowness and cold, chill anything that comes close, and can smash the ground with **Glacial Slam**. Fire is their weakness.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Glacial Slam | Primary ability key: rings of Tremor Spikes burst from the ground around the Yeti, followed by a Frostwave and a lingering earthquake that lasts 6 s and slows enemies. Its level (1–5) comes from Ice Spell Power; see below. | 15 s |
| Titanic | +12 max health (6 hearts). | — |
| Frosty Breath | Every second, creatures within 1 block (not players) get Slowness II for 2 s. | — |
| Unstoppable | Immune to Slowness. | — |
| From Whence You Came | In cold biomes: +30% movement speed and half fall damage. Immune to freezing damage everywhere. | — |
| Frost affinity | +1 Ice Spell Power (+100%). | — |
| Winter Body | 8% taller than a human, and wider. | — |

**Glacial Slam's level** starts at 1 at the Yeti's starting Ice Spell Power of 2.0 and rises by 1 for every further +0.25, up to level 5 at 3.0. Each level is used for the Frostwave and the spikes; every two levels add another ring of spikes (2 rings at level 1, 4 at level 5) and widen the earthquake. Damage scales with spell power.

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Flammable | Fire damage is doubled. |

## Playstyle

The Yeti is a tank that controls the space around it: Frosty Breath slows anything in melee range, Glacial Slam knocks up and freezes crowds, and Slowness can't be used against it. Fire Resistance potions cover its one weakness.

## Pairs well with

- [[origins/mage-classes/cryomancer|Cryomancer]]: +30% Ice Spell Power raises Glacial Slam toward its maximum level.
- [[origins/melee-classes/tank|Tank]] and [[origins/melee-classes/warrior|Warrior]] for a pure melee build.
