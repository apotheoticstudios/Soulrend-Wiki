---
{
  "title": "Plague Victim",
  "summary": "Undead plague carrier: withering aura and strikes, cheats death every 5 minutes; frail, can't regenerate, can't trade or sleep.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:plague_victim`"
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
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/origins/plague_victim.json (powers)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/plague_victim/*.json (foul_aura: wither amplifier 2 for 1 s to non-boss entities within 2 blocks every 40 ticks; plague_immunity; risk_of_transmission: weight 1 of 3 for wither amplifier 1, 200 ticks; eternal_suffering: 300 s cooldown, heal 20; skin_and_bones: -0.02 speed, -4 health; contagious; insomniac)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/plague_victim/undeadge.json (water breathing; poison and regeneration immunity)
  config/origins_server.json (sensitive_skin disabled)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 40 ticks = 2 s; 200 ticks = 10 s; -0.02 of the 0.1 base speed = -20%
-->
**Plague Victims** are half-dead carriers of a magical sickness. A withering aura eats at everything that stands next to them, their blows spread the plague, and once every five minutes death refuses to take them. They have less health, are slower, and can't heal through Regeneration.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Foul Aura | Every 2 s, gives Wither III for 1 s to every creature within 2 blocks, except bosses. Other players are affected too. | — |
| Contagious Hex | Each hit the Plague Victim lands, and each hit it takes, has a 1-in-3 chance to give the other creature Wither II for 10 s. | — |
| Eternal Suffering | Once every 5 minutes, a killing blow is prevented and the Plague Victim heals 20 health (10 hearts). | 5 min |
| Plague Immunity | Immune to Wither and Poison. | — |
| Undead | Permanent Water Breathing. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Skin and Bones | −4 max health (2 hearts) and −20% movement speed. |
| Undead | Immune to Regeneration, so regeneration potions, spells and effects don't heal. |
| Contagious | Villagers refuse to trade. |
| Insomniac | Can't sleep. Beds still set the spawn point. |

> [!NOTE]
> Soulrend turns off Sensitive Skin, so Plague Victims can wear armor.

## Playstyle

The Plague Victim wants to be in the middle of a crowd: Foul Aura and Contagious Hex wither everything nearby, and Eternal Suffering covers one mistake every five minutes. Because Regeneration doesn't work, healing has to come from food, instant healing, life steal or spells that heal directly.

## Pairs well with

- [[origins/fusion-classes/reaper|Reaper]]: Soul Reap heals on every kill, which doesn't depend on Regeneration.
- [[origins/melee-classes/tank|Tank]] and [[origins/melee-classes/berserker|Berserker]]: their extra health offsets Skin and Bones, and they stay close enough for the aura to work.
