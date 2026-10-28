---
{
  "title": "Ranger – Sharpshooter – Precision",
  "summary": "Ranger Sharpshooter branch: arrow damage, damage reduction and arrow velocity."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_76.json (hub), ranger_93–97, ranger_159–161 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_9 over direct, long and one-way connections; totals sum identical bonuses
-->
**Precision** is one of the four branches of the [[skill-trees/ranger/sharpshooter|Sharpshooter]] subclass of the Ranger tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Sharpshooter node to reach its hub, which gives +5% Arrow Damage per 0.5 blocks between you and the target, if the target is at most 10 blocks away. Three leaves branch off the hub, one point each.

Its nodes give Arrow Damage, damage reduction and Arrow Velocity.

{{skilltree ranger focus="ranger_76"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Sharpshooter node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +1% Arrow Damage per block between you and the target, if the target is at most 15 blocks away (each) |
| **Hub** | 6 | +5% Arrow Damage per 0.5 blocks between you and the target, if the target is at most 10 blocks away |
| Leaf | 7 | +2.5% Arrow Damage per block between you and the target, if the target is at most 15 blocks away |
| Leaf | 7 | −50% magic damage taken |
| Leaf | 7 | +7.5% Arrow Velocity per 0.5 blocks between you and the target, if the target is at most 15 blocks away |

## Totals

Taking all 9 nodes (9 points) gives:

- +5% Arrow Damage per 0.5 blocks between you and the target, if the target is at most 10 blocks away
- +7.5% Arrow Damage per block between you and the target, if the target is at most 15 blocks away
- −50% magic damage taken
- +7.5% Arrow Velocity per 0.5 blocks between you and the target, if the target is at most 15 blocks away
