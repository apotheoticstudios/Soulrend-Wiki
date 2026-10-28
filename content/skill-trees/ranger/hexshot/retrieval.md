---
{
  "title": "Ranger – Hexshot – Retrieval",
  "summary": "Ranger Hexshot branch: arrow retrieval, slowness and frozen."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_84.json (hub), ranger_103–107, ranger_132–134 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_8 over direct, long and one-way connections; totals sum identical bonuses
-->
**Retrieval** is one of the four branches of the [[skill-trees/ranger/hexshot|Hexshot]] subclass of the Ranger tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Hexshot node to reach its hub, which gives 25% chance to retrieve fired arrows. Three leaves branch off the hub, one point each.

Its nodes give arrow retrieval, Slowness and Frozen.

{{skilltree ranger focus="ranger_84"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Hexshot node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | 10% chance to retrieve fired arrows (each) |
| **Hub** | 6 | 25% chance to retrieve fired arrows |
| Leaf | 7 | 25% chance to inflict Slowness for 2.5 s (stacks up to 2 times) on hit, with a ranged weapon equipped |
| Leaf | 7 | 10% chance to inflict Frozen for 5 s on hit, with a ranged weapon equipped |
| Leaf | 7 | 10% chance to inflict Slowness II for 15 s on the attacker (stacks up to 2 times) when you take damage, with a ranged weapon equipped |

## Totals

Taking all 9 nodes (9 points) gives:

- 75% chance to retrieve fired arrows
- 25% chance to inflict Slowness for 2.5 s (stacks up to 2 times) on hit, with a ranged weapon equipped
- 10% chance to inflict Frozen for 5 s on hit, with a ranged weapon equipped
- 10% chance to inflict Slowness II for 15 s on the attacker (stacks up to 2 times) when you take damage, with a ranged weapon equipped
