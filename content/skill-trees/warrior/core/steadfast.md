---
{
  "title": "Warrior – Core – Steadfast",
  "summary": "Warrior core branch: knockback resistance, stun armor and weight."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_3.json (hub), warrior_26–34, warrior_74–76 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior over direct, long and one-way connections; totals sum identical bonuses
-->
**Steadfast** is one of the six spokes of the [[skill-trees/warrior/core|Warrior core]]. It takes 10 points from the Warrior node to reach its hub, which gives ×1.1 Knockback Resistance (total). Three leaves branch off the hub, one point each.

Its nodes give Knockback Resistance, Stun Armor, Weight and Attack Knockback.

{{skilltree warrior focus="warrior_3"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Warrior node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +10% Knockback Resistance |
| Path | 2 | +0.25 Attack Knockback |
| Path | 3 | +10% Knockback Resistance |
| Path | 4 | +0.25 Attack Knockback |
| Path ×2 | 5–6 | +10% Knockback Resistance (each) |
| Path | 7 | +0.25 Attack Knockback |
| Path | 8 | +10% Knockback Resistance |
| Path | 9 | +0.25 Attack Knockback |
| **Hub** | 10 | ×1.1 Knockback Resistance (total) |
| Leaf | 11 | +10 Stun Armor |
| Leaf | 11 | −20% Weight (total) |
| Leaf | 11 | +2 Attack Knockback |

## Totals

Taking all 13 nodes (13 points) gives:

- ×1.1 Knockback Resistance (total)
- +10 Stun Armor
- −20% Weight (total)
- +3 Attack Knockback
- +50% Knockback Resistance
