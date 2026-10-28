---
{
  "title": "Moon Elf",
  "summary": "Stealthy elf: +50% damage with daggers, invisibility while sneaking in the dark and a heavy stealth opener; 5 fewer hearts.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:moon_elf`"
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
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/origins/moon_elf.json (powers)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/moon_elf/moonlight_rogue.json (+50% with medievalorigins:daggers in either hand), stealth.json (invisible while sneaking at brightness <= 0.5; meter 0-200, -1 per tick moving while stealthed, +1 per tick otherwise; stealth hit x2, x3 with a dagger in the main hand; 100-tick cooldown), fragile.json (-10 max health, +15% non-magic damage taken), ethereal.json, towering.json (height 1.2)
  config/origins_server.json (crazed, elegant, nimble disabled)
  game-data/tags.json (medievalorigins:daggers: 167 items, including knives, sais and cutlasses)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 200 ticks = 10 s; 100 ticks = 5 s
-->
**Moon Elves** are pale, slightly translucent elves from another world. In the dark they vanish while sneaking, and their first strike from the shadows hits hard, especially with a dagger. They have 5 fewer hearts and take extra damage from weapons.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| To the Shadows | Sneaking in darkness (light at half or less) makes the Moon Elf invisible. A stealth meter allows 10 s of moving while invisible and refills when not stealthed. The first attack from stealth deals double damage, or triple with a dagger in the main hand, and ends the invisibility. | 5 s after a stealth attack |
| Moonlight Rogue | +50% damage while holding a dagger in either hand. Daggers are the 167 items in `medievalorigins:daggers`, which include knives, sais and cutlasses. | — |
| Towering | 20% taller than a human. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Fragile | −10 max health (5 hearts) and +15% damage taken from non-magic sources. |

> [!NOTE]
> Soulrend turns off Foreign World, Elegant and Nimble: Moon Elves can sleep, wear heavy armor without slowing down, and have no innate dodge chance.

## Playstyle

The Moon Elf opens fights from the shadows: sneak up in the dark, land a dagger stealth attack for triple damage, then finish the target before it recovers. Fragile makes long brawls risky, so retreating into darkness to reset matters.

## Pairs well with

- [[origins/melee-classes/rogue|Rogue]]: starts with two Flint Knives (daggers), and its dodge chance and silent footsteps fit a stealth build.
- [[origins/melee-classes/blade-dancer|Blade Dancer]]: armor negation adds to the stealth opener.
