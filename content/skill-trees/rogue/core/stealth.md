---
{
  "title": "Rogue – Core – Stealth",
  "summary": "Rogue core branch: stealth and damage avoidance."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_3.json (hub), rogue_51–59, rogue_84–86 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Stealth** is one of the six spokes of the [[skill-trees/rogue/core|Rogue core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Rogue node to reach its hub, which gives 10% harder to detect while holding weapons in both hands. Three leaves branch off the hub, one point each.

Its nodes give stealth and damage avoidance.

{{skilltree rogue focus="rogue_3"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Rogue node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | 1.1% harder to detect (each) |
| **Hub** | 10 | 10% harder to detect while holding weapons in both hands |
| Leaf | 11 | 15% harder to detect while crouching |
| Leaf | 11 | 20% harder to detect while holding weapons in both hands |
| Leaf | 11 | 10% chance to avoid damage while at 80% health or more |

## Totals

Taking all 13 nodes (13 points) gives:

- 30% harder to detect while holding weapons in both hands
- 15% harder to detect while crouching
- 10% chance to avoid damage while at 80% health or more
- 9.9% harder to detect
