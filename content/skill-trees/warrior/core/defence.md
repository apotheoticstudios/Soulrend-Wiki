---
{
  "title": "Warrior – Core – Defence",
  "summary": "Warrior core branch: armor and armor toughness."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_6.json (hub), warrior_53–61, warrior_65–67 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior over direct, long and one-way connections; totals sum identical bonuses
-->
**Defence** is one of the six spokes of the [[skill-trees/warrior/core|Warrior core]]. It takes 10 points from the Warrior node to reach its hub, which gives +10 Armor. Three leaves branch off the hub, one point each.

Its nodes give Armor and Armor Toughness.

{{skilltree warrior focus="warrior_6"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Warrior node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +2 Armor (each) |
| **Hub** | 10 | +10 Armor |
| Leaf | 11 | +5% Armor |
| Leaf | 11 | +10% Armor |
| Leaf | 11 | +10 Armor Toughness |

## Totals

Taking all 13 nodes (13 points) gives:

- +28 Armor
- +15% Armor
- +10 Armor Toughness
