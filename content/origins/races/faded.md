---
{
  "title": "Faded",
  "summary": "Ghostly caster: +30% spell power, +50% max mana, block phasing and a Pocket Dimension; −90% attack damage, half health. Mage classes only.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:faded`"
      ],
      [
        "Impact",
        "High"
      ],
      [
        "Classes",
        "[[origins/mage-classes|Mage classes]] only"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/origins/faded.json (powers)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/faded/smart.json (multiply_total: max mana +0.5, mana regen +0.2, spell power +0.3, cooldown reduction +0.1, cast time reduction +0.1), weak.json (attack damage -0.9), sickly.json (max health -0.5), ghostly.json (phasing except origins:unphasable, energy 30, toggle cooldown 5 ticks), unreal.json (learnSpell pocket_dimension; secondary key casts pocket_dimension 1)
  mods/soulrend_origins-1.2-1.20.1.jar SimpleOrigins.faded (energy -1 per second inside a block, +1 per second otherwise, form collapses at 1), SimpleOrigins.travel (form turned off on dimension change)
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/rpg_class.json (Faded excluded from non-mage classes)
  game-data/spells.json (irons_spellbooks:pocket_dimension)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
-->
**Faded** are beings who have withdrawn from the material world. They connect to magic more easily than anyone, can drift through walls and step into a pocket dimension of their own. Their bodies are weak: half the health of a human and almost no strength. A Faded can only pick a [[origins/mage-classes|mage class]].

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Smart | +30% Spell Power, +50% max mana, +20% mana regeneration, +10% Cooldown Reduction, +10% Cast Time Reduction. | — |
| Ghostly | Primary ability key: toggles block phasing. Phasing energy (30) drains by 1 per second while inside a block and refills by 1 per second otherwise; at 0 the form collapses. Sneaking on a block sinks through it. Changing dimension ends the form. | — |
| Unreal | Learns the [[items/magic/spells/eldritch-spells#Pocket Dimension\|Pocket Dimension]] spell automatically. Secondary ability key: casts it. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Sickly | −50% max health. |
| Weak | −90% attack damage. |
| Mage only | The class layer only offers mage classes. |

## Playstyle

The Faded is a pure caster: its melee is almost useless, and with half the health of other races it has to keep its distance. Ghostly lets it pass through walls to escape or reposition, as long as it leaves a block before 30 s of phasing run out.

## Pairs well with

Every mage class is open to it. Classes with defensive or movement spells in their starting book help most: [[origins/mage-classes/voidmancer|Voidmancer]] (Teleport), [[origins/mage-classes/cryomancer|Cryomancer]] (Frost Step) and [[origins/mage-classes/druid|Druid]] (Oakskin).
