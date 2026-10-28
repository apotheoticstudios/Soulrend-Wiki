---
{
  "title": "Warrior – Core – Experienced",
  "summary": "Warrior core branch: experience, loot and stamina regen."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_2.json (hub), warrior_35–43, warrior_71–73 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior over direct, long and one-way connections; totals sum identical bonuses
-->
**Experienced** is one of the six spokes of the [[skill-trees/warrior/core|Warrior core]]. It takes 10 points from the Warrior node to reach its hub, which gives 10% chance to gain 5 experience points on hit; +20% experience from ores. Three leaves branch off the hub, one point each.

Its nodes give experience, loot, Stamina Regen and Max Stamina.

{{skilltree warrior focus="warrior_2"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Warrior node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +5 Max Stamina |
| Path | 2 | +5% Stamina Regen |
| Path | 3 | +5 Max Stamina |
| Path | 4 | +5% Stamina Regen |
| Path ×2 | 5–6 | +5 Max Stamina (each) |
| Path | 7 | +5% Stamina Regen |
| Path | 8 | +5 Max Stamina |
| Path | 9 | +5% Stamina Regen |
| **Hub** | 10 | 10% chance to gain 5 experience points on hit; +20% experience from ores |
| Leaf | 11 | 20% chance to get double ore loot |
| Leaf | 11 | 20% chance to get double ore loot |
| Leaf | 11 | +10% Stamina Regen; +20 Max Stamina |

## Totals

Taking all 13 nodes (13 points) gives:

- 10% chance to gain 5 experience points on hit
- +20% experience from ores
- 40% chance to get double ore loot
- +30% Stamina Regen
- +45 Max Stamina
