---
{
  "title": "Keres",
  "summary": "Soul-eating death spirit: flight, Souls that heal and shield, bleeding fangs, life steal and a reel-in; no natural regeneration, Souls fade in sunlight.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:keres`"
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
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/origins/keres.json (powers)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/keres/*.json (daughter_of_nyx: icarus:black_feathered_wings; bloodthirst: +1 blood spell power, souls 0-50, +1 per kill, +1 per 100 ticks out of the sun after minecraft:end/kill_dragon, sneaking highlight; soul_devourer: +0.05 life steal; vicious_fangs; eternal_craving: food above 14 drained, bones heal 2; primary_active cooldown 20; secondary_active: 40-block raycast, costs 5 souls, cooldown 4; unholy: -0.5 holy spell power, -1 soul per 50 ticks in sunlight without Mirroring before the dragon kill)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/functions/keres/*.mcfunction (third hit -> attributeslib:bleeding 30 s; reel-in: Darkness 1 s, Weakness III 5 s, pulled 2 blocks in front, caster Speed III 30 s; sneaking glow within 40 blocks)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/revenant/undeadge.json (water breathing; poison and regeneration immunity)
  mods/soulrend_origins-1.2-1.20.1.jar SimpleOrigins.consumeSouls (each soul heals 4% max health; leftover souls -> absorption via OriginMath.keresAbsorption, 1% max health per soul x 1.25 x (1.25 max - current absorption) / max; Absorption effect 6000 ticks)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names, descriptions)
  calc: 50 ticks = 2.5 s; 100 ticks = 5 s; 6000 ticks = 5 min; empty absorption: 1.25 x 1.25 = 1.5625% max health per soul
-->
**Keres** are winged death spirits, daughters of Nyx. They gather **Souls** from everything they kill and spend them to heal or to shield themselves. Their bites make enemies bleed, every hit steals life, and they can drag a target to them from 40 blocks away. They can't regenerate naturally, and daylight drains their Souls.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Daughter of Nyx | Flies on black feathered wings (Icarus wings, no item needed). | — |
| Eternal Hunger | Collects Souls (up to 50): +1 per kill. After the Ender Dragon has been killed, +1 more every 5 s out of direct sunlight. While sneaking, every non-player creature within 40 blocks glows. +1 Blood Spell Power (+100%). | — |
| Devour Souls | Primary ability key: spends Souls to heal 4% of max health each, until health is full. Souls left over become Absorption (lasting 5 minutes): about 1.56% of max health per Soul with no absorption, less the more absorption there already is, and none at 125% of max health. All Souls are used. | 1 s |
| No Escape | Secondary ability key, 5 Souls: pulls a creature within 40 blocks to 2 blocks in front of the Keres and gives it Darkness for 1 s and Weakness III for 5 s. The Keres gets Speed III for 30 s. | 0.2 s |
| Vicious Fangs | Every third hit against the same target makes it bleed for 30 s. | — |
| Soul Devourer | +5% life steal. | — |
| Bone eater | Bones can be eaten: each heals 2 health (1 heart). | — |
| Undead | Immune to Poison; permanent Water Breathing. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Eternal Craving | Food is drained to 14 points (7 drumsticks), too low for natural regeneration. |
| Undead | Immune to Regeneration, so regeneration potions, spells and effects don't heal. |
| Unholy | −0.5 Holy Spell Power. In direct sunlight the Keres loses 1 Soul every 2.5 s, unless its helmet has the Mirroring enchantment or it has killed the Ender Dragon. |

## Playstyle

The Keres heals by killing: Souls build up during a fight and Devour Souls turns them into health, or into a large shield when already at full health. Life steal and bleeding hits keep it going between Soul spends. No Escape pulls archers and casters into melee. Fighting at night, underground or with a Mirroring helmet protects the Soul reserve.

## Pairs well with

- [[origins/fusion-classes/reaper|Reaper]] and [[origins/mage-classes/warlock|Warlock]]: their Blood Spell Power bonuses stack with Eternal Hunger's +100%.
- Melee classes such as [[origins/melee-classes/berserker|Berserker]]: Vicious Fangs and life steal work on every melee hit.
