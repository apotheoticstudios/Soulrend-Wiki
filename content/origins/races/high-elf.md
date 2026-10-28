---
{
  "title": "High Elf",
  "summary": "Magic-focused elf: +25% magic damage, +50 max mana and a mana-regeneration burst; less health and weak to physical damage.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:high_elf`"
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
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/origins/high_elf.json (powers)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/high_elf/mystic_affinity.json (+25% dealt, medievalorigins:is_magic), fragile.json (-4 max health, +25% non-magic damage taken), mana_irons.json (+50 max mana; active sets an 11-step counter, -1 per 25 ticks, +15 mana regen while >= 1; cooldown 3000), towering.json (height 1.05)
  config/origins_server.json (ebonbreath, elegant, instant_cure, glacial_step, extrusive_movement, blazenbreath, void_warp disabled; mana_irons enabled; mana_ars/mana_irons_ars/mana_rpgmana not loaded)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  calc: 11 x 25 ticks = 275 ticks = 13.75 s; 3000 ticks = 150 s
-->
**High Elves** are born spellcasters. Their magic hits harder and they carry a deeper mana pool, but they are slightly frail and take more damage from weapons.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Mystic Affinity | +25% damage dealt with magic. | — |
| Highborne | +50 max mana. Secondary ability key: +15 mana regeneration for about 14 s. | 150 s |
| Towering | 5% taller than a human. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Fragile | −4 max health (2 hearts) and +25% damage taken from non-magic sources. |

> [!NOTE]
> Soulrend turns off the High Elf's Draw Essence powers (Glacial Step, Extrusive Movement, Instant Cure, Void Warp, Blazenbreath and Ebonbreath) and its Elegant armor slowdown, so High Elves can wear heavy armor at full speed. The Magic Specialization layer (Arcanist, Pyromancer, Cryomancer) is empty in Soulrend.

## Playstyle

The High Elf is a caster race: Mystic Affinity multiplies every spell, and Highborne's burst refills mana in the middle of a fight. The extra physical damage taken makes armor worth wearing, which Soulrend allows without a speed penalty.

## Pairs well with

All [[origins/mage-classes|mage classes]], [[origins/fusion-classes/spellblade|Spellblade]] and [[origins/fusion-classes/paladin|Paladin]]: they all deal magic damage, and the mage classes' +50% max mana multiplies Highborne's flat +50.
