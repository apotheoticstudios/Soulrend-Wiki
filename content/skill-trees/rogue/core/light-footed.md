---
{
  "title": "Rogue – Core – Light Footed",
  "summary": "Rogue core branch: weight, stun armor and movement while drawing."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_7.json (hub), rogue_33–41, rogue_78–80 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Light Footed** is one of the six spokes of the [[skill-trees/rogue/core|Rogue core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Rogue node to reach its hub, which gives −10 Weight. Three leaves branch off the hub, one point each.

Its nodes give Weight, Stun Armor, movement while drawing, Step Height and Speed.

{{skilltree rogue focus="rogue_7"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Rogue node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | −1 Weight |
| Path | 2 | +1% Speed |
| Path | 3 | −1 Weight |
| Path | 4 | +1% Speed |
| Path ×2 | 5–6 | −1 Weight (each) |
| Path | 7 | +1% Speed |
| Path | 8 | −1 Weight |
| Path | 9 | +1% Speed |
| **Hub** | 10 | −10 Weight |
| Leaf | 11 | +6 Stun Armor |
| Leaf | 11 | 20% less movement penalty while using items |
| Leaf | 11 | +1 Step Height |

## Totals

Taking all 13 nodes (13 points) gives:

- −15 Weight
- +6 Stun Armor
- 20% less movement penalty while using items
- +1 Step Height
- +4% Speed
