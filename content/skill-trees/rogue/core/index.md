---
{
  "title": "Rogue – Core",
  "summary": "The Rogue root node and its six spokes: armor negation, stealth, vitality, plunder, stamina and light footed."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_1.json (root)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
The **Rogue core** is the part of the [[skill-trees/rogue|Rogue skill tree]] that every Rogue build starts from: the root node, six spokes and the core keystones. The root is the tree's starting point and costs 1 point like every other node.

> [!WARNING]
> Bonuses marked † check for an item in `#my_tags:weapons/dualwield`, a tag that no file in the pack defines, so they never apply. See [[bugs|Known Bugs]].

{{skilltree rogue focus="rogue_1, rogue_2, rogue_8, rogue_9, rogue_10, rogue_11, rogue_12, rogue_7, rogue_5, rogue_6, rogue_3, rogue_4"}}

## Root

The Rogue root gives:

- +5% Attack Speed with a dual-wield weapon† in hand

## Spokes

Each spoke is a path of Minor nodes that ends in a hub; three leaves branch off each hub.

| Spoke | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/rogue/core/armour-negation\|Armor Negation]] | 10 | +6 Armor Negation | 13 |
| [[skill-trees/rogue/core/stealth\|Stealth]] | 10 | 10% harder to detect while holding weapons in both hands | 13 |
| [[skill-trees/rogue/core/vitality\|Vitality]] | 10 | +10% Max Health (total) | 13 |
| [[skill-trees/rogue/core/plunder\|Plunder]] | 10 | 10% chance to get double chest loot | 13 |
| [[skill-trees/rogue/core/stamina\|Stamina]] | 10 | +10% Max Stamina | 13 |
| [[skill-trees/rogue/core/light-footed\|Light Footed]] | 10 | −10 Weight | 13 |

## Keystones

The root also connects to five keystones, of which a player can take three. They need a picked-up [[item:nether_remastered:seal_crystal]]. See [[skill-trees/rogue/core/keystones|Rogue – Core – Keystones]].
