---
{
  "title": "Ranger – Core – Arrow Retrieval",
  "summary": "Ranger core branch: arrow retrieval, jump height and slowness."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_6.json (hub), ranger_30–38, ranger_135–137 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Arrow Retrieval** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives 25% chance to retrieve fired arrows. Three leaves branch off the hub, one point each.

Its nodes give arrow retrieval, jump height, Slowness, Crit Damage and spells.

{{skilltree ranger focus="ranger_6"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | ×1.03 Crit Damage with a ranged weapon equipped (each) |
| **Hub** | 10 | 25% chance to retrieve fired arrows |
| Leaf | 11 | +30% jump height while crouching |
| Leaf | 11 | 25% chance to inflict Slowness V for 0.5 s on hit, with a ranged weapon in hand |
| Leaf | 11 | Grants the Shield spell (level 3) |

## Totals

Taking all 13 nodes (13 points) gives:

- 25% chance to retrieve fired arrows
- +30% jump height while crouching
- 25% chance to inflict Slowness V for 0.5 s on hit, with a ranged weapon in hand
- ×1.27 Crit Damage with a ranged weapon equipped
- Grants the Shield spell (level 3)
