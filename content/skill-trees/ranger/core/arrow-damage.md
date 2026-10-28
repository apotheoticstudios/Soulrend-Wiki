---
{
  "title": "Ranger – Core – Arrow Damage",
  "summary": "Ranger core branch: arrow damage, crit damage and invisibility."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_2.json (hub), ranger_48–56, ranger_141–143 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Arrow Damage** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives +10% Arrow Damage (total) while crouching. Three leaves branch off the hub, one point each.

Its nodes give Arrow Damage, Crit Damage and Invisibility.

{{skilltree ranger focus="ranger_2"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×9 | 1–9 | +1% Arrow Damage (total) while crouching (each) |
| **Hub** | 10 | +10% Arrow Damage (total) while crouching |
| Leaf | 11 | ×1.2 Crit Damage with a ranged weapon equipped |
| Leaf | 11 | ×1.2 Crit Damage with a ranged weapon equipped |
| Leaf | 11 | Gain Invisibility for 8 s on kill |

## Totals

Taking all 13 nodes (13 points) gives:

- +19% Arrow Damage (total) while crouching
- ×1.4 Crit Damage with a ranged weapon equipped
- Gain Invisibility for 8 s on kill
