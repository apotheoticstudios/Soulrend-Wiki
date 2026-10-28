---
{
  "title": "Mage – Mind – Mana Regeneration",
  "summary": "Mage Mind branch: mana regeneration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-mr.json (hub), mage-1a-mr, mage-2a-mr, mage-3a-mr, mage-4a-mr, mage-5a-mr, mage-6a-mr, mage-7a-mr, mage-8a-mr, mage-defense-mr, mage-offense-mr, mage-utility_1-mr, mage-utility_2-mr (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage over direct, long and one-way connections; totals sum identical bonuses
-->
**Mana Regeneration** is one of the six spokes of the [[skill-trees/mage/mind|Mind]], the core of the Mage tree. It takes 9 points from the Mage node to reach its hub, which gives +2.5% Mana Regeneration. Four leaves branch off the hub, one point each.

Its nodes give Mana Regeneration.

{{skilltree mage focus="mage-mr"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Mage node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×8 | 1–8 | +0.5% Mana Regeneration (each) |
| **Hub** | 9 | +2.5% Mana Regeneration |
| Leaf | 10 | +0.2% Mana Regeneration per 1% current mana |
| Leaf | 10 | +0.2% Mana Regeneration per 1% missing mana, while missing at least 75% of your mana |
| Leaf | 10 | +5% Mana Regeneration |
| Leaf | 10 | +5% Mana Regeneration |

## Totals

Taking all 13 nodes (13 points) gives:

- +16.5% Mana Regeneration
- +0.2% Mana Regeneration per 1% current mana
- +0.2% Mana Regeneration per 1% missing mana, while missing at least 75% of your mana
