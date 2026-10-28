---
{
  "title": "Ranger – Core – Lightweight",
  "summary": "Ranger core branch: weight, max stamina and stamina regen."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_5.json (hub), ranger_21–29, ranger_150–152 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Lightweight** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives −10 Weight. Three leaves branch off the hub, one point each.

Its nodes give Weight, Max Stamina and Stamina Regen.

{{skilltree ranger focus="ranger_5"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | −1 Weight (each) |
| **Hub** | 10 | −10 Weight |
| Leaf | 11 | +30% Max Stamina |
| Leaf | 11 | −10% Weight |
| Leaf | 11 | +30% Stamina Regen with a ranged weapon equipped |

## Totals

Taking all 13 nodes (13 points) gives:

- −19 Weight
- +30% Max Stamina
- −10% Weight
- +30% Stamina Regen with a ranged weapon equipped
