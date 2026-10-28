---
{
  "title": "Ranger – Core",
  "summary": "The Ranger root node and its six spokes: arrow damage, bounty, endurance, lightweight, arrow retrieval and evasion."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_1.json (root)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
The **Ranger core** is the part of the [[skill-trees/ranger|Ranger skill tree]] that every Ranger build starts from: the root node, six spokes and the core keystones. The root is the tree's starting point and costs 1 point like every other node.

{{skilltree ranger focus="ranger_1, ranger_2, ranger_6, ranger_3, ranger_4, ranger_7, ranger_10, ranger_11, ranger_12, ranger_13, ranger_14, ranger_5"}}

## Root

The Ranger root gives:

- +5% Speed
- 5% less movement penalty while using bows

## Spokes

Each spoke is a path of Minor nodes that ends in a hub; three leaves branch off each hub.

| Spoke | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/ranger/core/arrow-damage\|Arrow Damage]] | 10 | +10% Arrow Damage (total) while crouching | 13 |
| [[skill-trees/ranger/core/bounty\|Bounty]] | 10 | +50% experience from mobs | 13 |
| [[skill-trees/ranger/core/endurance\|Endurance]] | 10 | +50% Arrow Damage while riding (the [[features/combat/mounted-combat|Mounted]] effect) | 13 |
| [[skill-trees/ranger/core/lightweight\|Lightweight]] | 10 | −10 Weight | 13 |
| [[skill-trees/ranger/core/arrow-retrieval\|Arrow Retrieval]] | 10 | 25% chance to retrieve fired arrows | 13 |
| [[skill-trees/ranger/core/evasion\|Evasion]] | 10 | +10% Dodge Chance | 13 |

## Keystones

The root also connects to five keystones, of which a player can take three. They need a picked-up [[item:nether_remastered:seal_crystal]]. See [[skill-trees/ranger/core/keystones|Ranger – Core – Keystones]].
