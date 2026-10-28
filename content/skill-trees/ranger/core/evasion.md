---
{
  "title": "Ranger – Core – Evasion",
  "summary": "Ranger core branch: dodge chance, max health and armor."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_7.json (hub), ranger_39–47, ranger_138–140 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Evasion** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives +10% Dodge Chance. Three leaves branch off the hub, one point each.

Its nodes give Dodge Chance, Max Health and Armor.

{{skilltree ranger focus="ranger_7"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +1% Dodge Chance (each) |
| **Hub** | 10 | +10% Dodge Chance |
| Leaf | 11 | +5% Max Health (total) |
| Leaf | 11 | +20% Dodge Chance |
| Leaf | 11 | +5% Armor (total) |

## Totals

Taking all 13 nodes (13 points) gives:

- +39% Dodge Chance
- +5% Max Health (total)
- +5% Armor (total)
