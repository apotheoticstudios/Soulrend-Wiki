---
{
  "title": "Ranger – Core – Bounty",
  "summary": "Ranger core branch: experience, looting and loot."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_3.json (hub), ranger_57–65, ranger_144–146 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_1 over direct, long and one-way connections; totals sum identical bonuses
-->
**Bounty** is one of the six spokes of the [[skill-trees/ranger/core|Ranger core]]. The name is the wiki's; in game the hub is titled "Notable". It takes 10 points from the Ranger node to reach its hub, which gives +50% experience from mobs. Three leaves branch off the hub, one point each.

Its nodes give experience, Looting, loot and Fishing Luck.

{{skilltree ranger focus="ranger_3"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Ranger node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | 5% chance to get double mob loot |
| Path | 2 | +1 Fishing Luck |
| Path | 3 | 5% chance to get double mob loot |
| Path | 4 | +10% Fishing Luck |
| Path ×2 | 5–6 | 5% chance to get double mob loot (each) |
| Path | 7 | +1 Fishing Luck |
| Path | 8 | 5% chance to get double mob loot |
| Path | 9 | +10% Fishing Luck |
| **Hub** | 10 | +50% experience from mobs |
| Leaf | 11 | +3 Looting |
| Leaf | 11 | 5% chance to get triple fishing loot |
| Leaf | 11 | 5% chance to get +500% mob loot |

## Totals

Taking all 13 nodes (13 points) gives:

- +50% experience from mobs
- +3 Looting
- 5% chance to get triple fishing loot
- 5% chance to get +500% mob loot
- +20% Fishing Luck
- 25% chance to get double mob loot
- +2 Fishing Luck
