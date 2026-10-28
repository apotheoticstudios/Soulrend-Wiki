---
{
  "title": "Rogue – Core – Plunder",
  "summary": "Rogue core branch: loot, movement while drawing and item use speed."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_5.json (hub), rogue_15–23, rogue_72–74 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Plunder** is one of the six spokes of the [[skill-trees/rogue/core|Rogue core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Rogue node to reach its hub, which gives 10% chance to get double chest loot. Three leaves branch off the hub, one point each.

Its nodes give loot, movement while drawing, item use speed and Luck.

{{skilltree rogue focus="rogue_5"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Rogue node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +0.2 Luck |
| Path | 2 | 1.25% chance to get double chest loot |
| Path | 3 | +0.2 Luck |
| Path | 4 | 1.25% chance to get double chest loot |
| Path ×2 | 5–6 | +0.2 Luck (each) |
| Path | 7 | 1.25% chance to get double chest loot |
| Path | 8 | +0.2 Luck |
| Path | 9 | 1.25% chance to get double chest loot |
| **Hub** | 10 | 10% chance to get double chest loot |
| Leaf | 11 | 50% less movement penalty while using items |
| Leaf | 11 | Use items 20% faster |
| Leaf | 11 | 10% chance to get triple chest loot |

## Totals

Taking all 13 nodes (13 points) gives:

- 15% chance to get double chest loot
- 50% less movement penalty while using items
- Use items 20% faster
- +1 Luck
- 10% chance to get triple chest loot
