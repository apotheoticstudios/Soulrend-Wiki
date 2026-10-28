---
{
  "title": "Pixie",
  "summary": "Tiny flier that spends Flight Power to hover and dash, glides freely and never takes fall damage; frail, and villagers refuse to trade.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:pixie`"
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
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/origins/pixie.json (powers)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/pixie/flight.json (Flight Power 0-150, start 100; +1 per 10 ticks off-wing, +1 per 10 ticks after minecraft:end/kill_dragon; hover -1 per 5 ticks; hover speed -40%; jump +0.15)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/pixie/*.json (food_restore, pixie_properties, feather_footed, wings, mount, good_fortunes 0.025, mischief_maketh_man cooldown 600, troublemaker)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/functions/mdvlorigins/pixie_callon.mcfunction (height 0.166, reach 2, mining speed 0.75)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (badges.medievalorigins.pixie.* — dash costs 50/25 FP)
  config/origins_server.json (all Pixie powers enabled)
  calc: 10 ticks = 0.5 s -> 2 FP/s; 5 ticks -> 4 FP/s drain; 600 ticks = 30 s
-->
**Pixies** are about a sixth of a human's height. They glide on their wings, hover and dash by spending **Flight Power** (FP), and can never take fall damage. They have little health, and villagers won't trade with them.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| On the Dusts | Flight with a Flight Power bar (0–150 FP, starting at 100). Jumps reach 2 blocks, and the Pixie falls slowly. **Glide:** press Jump in the air; costs no FP. **Hover:** double-tap Jump for a slow creative-style flight that drains 4 FP per second. **Dash:** press the Tertiary Active key twice to dash forward, or press it and then Jump to dash upward; each dash costs 50 FP while gliding and 25 FP otherwise. | — |
| FP recovery | FP refills by 2 per second while not hovering or gliding. After the Ender Dragon is killed, it refills by another 2 per second. Eating [[item:minecraft:glow_berries]] restores 10 FP, and [[item:minecraft:dragon_breath]] can be drunk for 150 FP. | — |
| Bitesize | +20% movement speed and twice the normal reach. | — |
| Feather Footed | Immune to fall damage and to damage from flying into walls. | — |
| Shortcut | Right-click another player with both hands empty to ride on their head. | — |
| Good Fortunes | Mining natural stone has a 2.5% chance to drop bonus loot (a different table in the Nether). | — |
| Mischief Maketh Man | Secondary ability key: plays a random prank, such as a creeper's hiss or a knock on a door played to a nearby player. | 30 s |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Bitesize | −10 max health (5 hearts), 25% slower mining, slower flight while hovering (−40%). |
| Troublemaker | Villagers refuse to trade. |

## Playstyle

The Pixie trades health for mobility. Gliding is free, so FP is best saved for hovering over gaps and dashing out of danger. Since it can't trade with villagers, gear comes from loot, crafting and quests.

## Pairs well with

- [[origins/ranged-classes/hunter|Hunter]] and the [[origins/mage-classes|mage classes]], which fight from range and can use the Pixie's mobility to keep their distance.
- [[origins/melee-classes/rogue|Rogue]]: its dodge chance makes up a little for the Pixie's low health.
