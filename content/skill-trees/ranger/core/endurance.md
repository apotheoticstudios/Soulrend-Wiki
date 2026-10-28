---
{
  "title": "Ranger – Core – Endurance",
  "summary": "Ranger core branch: arrow damage, healing and dodge chance."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_4.json (hub), ranger_66–74, ranger_147–149 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Endurance** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives +50% Arrow Damage while riding (the [[features/combat/mounted-combat|Mounted]] effect). Three leaves branch off the hub, one point each.

Its nodes give Arrow Damage, healing, Dodge Chance and Stamina Regen.

{{skilltree ranger focus="ranger_4"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +4% Arrow Damage while riding (the [[features/combat/mounted-combat|Mounted]] effect) (each) |
| **Hub** | 10 | +50% Arrow Damage while riding (the [[features/combat/mounted-combat|Mounted]] effect) |
| Leaf | 11 | +15% incoming healing with a ranged weapon in hand |
| Leaf | 11 | +8% Dodge Chance with a ranged weapon in hand |
| Leaf | 11 | +20% Stamina Regen while riding (the [[features/combat/mounted-combat|Mounted]] effect) |

## Totals

Taking all 13 nodes (13 points) gives:

- +86% Arrow Damage while riding (the [[features/combat/mounted-combat|Mounted]] effect)
- +15% incoming healing with a ranged weapon in hand
- +8% Dodge Chance with a ranged weapon in hand
- +20% Stamina Regen while riding (the [[features/combat/mounted-combat|Mounted]] effect)
