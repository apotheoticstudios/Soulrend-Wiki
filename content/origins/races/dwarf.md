---
{
  "title": "Dwarf",
  "summary": "One-block-tall miner: double mining speed with pickaxes, +10 health, +5 armor, a healing Brew and gems from ore; blinded by daylight, sinks in water.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:dwarff`"
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
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/origins/dwarff.json (powers)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/dwarff/*.json (dwarven_tech: break speed x2 with #minecraft:pickaxes; miniature: +10 max health, +5 armor, jump +0.13; nocturnal_eyes: Night Vision at or below Y 0; darkness_dweller: Blindness 60 ticks, 30 s recovery, Mirroring helmet; dense: ignore water unless all four pieces are medievalorigins:water_protection_gear; potent_brew: Resistance II 300 ticks, cooldown 1200; mythril_resonance +1 attack damage; pickaxeless_stone)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/functions/dwarff/scale.mcfunction (height 0.5556, width 0.69)
  mods/soulrend_origins-1.2-1.20.1.jar Dwarf (Brew heals 1% max health every 20 ticks for 300 ticks; breaking natural iron, gold or diamond ore: 1% chance of an Apotheosis gem, 20% Uncommon else Common)
  config/origins_server.json (helmet_spawn, mountains_core disabled)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 60 ticks = 3 s; 300 ticks = 15 s; 1200 ticks = 60 s
-->
**Dwarves** are sturdy miners one block tall. They dig twice as fast with a pickaxe, have more health and natural armor, sometimes find gems in ore, and can take a swig of Brew to heal. They need a moment to adjust to daylight and sink like a stone in water.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Dwarven Tech | Double mining speed while holding a pickaxe. Breaking a natural (not player-placed) iron, gold or diamond ore has a 1% chance to drop a random Apotheosis [[items/gear-progression/gems\|gem]]: Uncommon 20% of the time, otherwise Common. | — |
| Stocky | +10 max health (5 hearts) and +5 armor. Jumps onto 2-block ledges. | — |
| Dwarven Might | +1 attack damage. | — |
| Brew | Primary ability key: Resistance II for 15 s, and heals 1% of max health every second for 15 s. | 60 s |
| Nocturnal Eyes | Night Vision at or below Y = 0. | — |
| Bare-handed mining | Stone and other blocks that need no better than a wooden pickaxe drop when broken by hand. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Darkness Dweller | Stepping into direct daylight causes Blindness for 3 s, at most once every 30 s. A helmet with the Mirroring enchantment prevents it. |
| Dense | Sinks in water and can't swim up, unless all four armor pieces are water-protection gear. |
| Miniature | One block tall. |

## Playstyle

The Dwarf is the best miner in Soulrend: double pickaxe speed and occasional gems make caving profitable, and Night Vision below Y = 0 removes the need for torches deep down. Brew is a strong emergency button in fights. On the surface, a Mirroring helmet stops the daylight blindness.

## Pairs well with

- [[origins/melee-classes/berserker|Berserker]]: an axe-wielding Dwarf gets +20% max health on top of Stocky.
- [[origins/melee-classes/tank|Tank]]: Stocky's armor and Brew's Resistance stack with Tank's health and armor.
