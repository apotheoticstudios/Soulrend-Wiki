---
{
  "title": "Rogue – Core – Stamina",
  "summary": "Rogue core branch: max stamina, attack knockback and stamina regen."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_6.json (hub), rogue_24–32, rogue_75–77 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Stamina** is one of the six spokes of the [[skill-trees/rogue/core|Rogue core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Rogue node to reach its hub, which gives +10% Max Stamina. Three leaves branch off the hub, one point each.

Its nodes give Max Stamina, Attack Knockback and Stamina Regen.

{{skilltree rogue focus="rogue_6"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Rogue node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +1% Max Stamina (each) |
| **Hub** | 10 | +10% Max Stamina |
| Leaf | 11 | +0.5 Attack Knockback |
| Leaf | 11 | +20% Max Stamina |
| Leaf | 11 | +20% Stamina Regen |

## Totals

Taking all 13 nodes (13 points) gives:

- +39% Max Stamina
- +0.5 Attack Knockback
- +20% Stamina Regen
