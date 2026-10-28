---
{
  "title": "Warrior – Core – Healthy",
  "summary": "Warrior core branch: max health and healing."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_5.json (hub), warrior_8–16, warrior_62–64 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior over direct, long and one-way connections; totals sum identical bonuses
-->
**Healthy** is one of the six spokes of the [[skill-trees/warrior/core|Warrior core]]. It takes 10 points from the Warrior node to reach its hub, which gives +10 Max Health. Three leaves branch off the hub, one point each.

Its nodes give Max Health and healing.

{{skilltree warrior focus="warrior_5"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Warrior node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +3 Max Health (each) |
| **Hub** | 10 | +10 Max Health |
| Leaf | 11 | +20% incoming healing |
| Leaf | 11 | +10% Max Health |
| Leaf | 11 | +10% Max Health |

## Totals

Taking all 13 nodes (13 points) gives:

- +37 Max Health
- +20% incoming healing
- +20% Max Health
