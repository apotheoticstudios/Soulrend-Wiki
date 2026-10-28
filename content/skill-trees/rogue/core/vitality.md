---
{
  "title": "Rogue – Core – Vitality",
  "summary": "Rogue core branch: max health, armor and regeneration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_4.json (hub), rogue_60–71 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Vitality** is one of the six spokes of the [[skill-trees/rogue/core|Rogue core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Rogue node to reach its hub, which gives +10% Max Health (total). Three leaves branch off the hub, one point each.

Its nodes give Max Health, Armor, Regeneration, Healing Power and Attack Knockback.

{{skilltree rogue focus="rogue_4"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Rogue node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +1 Attack Knockback (each) |
| **Hub** | 10 | +10% Max Health (total) |
| Leaf | 11 | +10 Armor |
| Leaf | 11 | 25% chance to gain Regeneration for 10 s on kill |
| Leaf | 11 | +10% Healing Power (total) |

## Totals

Taking all 13 nodes (13 points) gives:

- +10% Max Health (total)
- +10 Armor
- 25% chance to gain Regeneration for 10 s on kill
- +10% Healing Power (total)
- +9 Attack Knockback
