---
{
  "title": "Mage – Mind – Cooldown Reduction",
  "summary": "Mage Mind branch: cooldown reduction, cast time reduction and aqua spell power."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-cdr.json (hub), mage-1a-cdr, mage-2a-cdr, mage-3a-cdr, mage-4a-cdr, mage-5a-cdr, mage-6a-cdr, mage-7a-cdr, mage-8a-cdr, mage-defense-cdr, mage-offense-cdr, mage-utility_1-cdr, mage-utility_2-cdr (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage over direct, long and one-way connections; totals sum identical bonuses
-->
**Cooldown Reduction** is one of the six spokes of the [[skill-trees/mage/mind|Mind]], the core of the Mage tree. It takes 9 points from the Mage node to reach its hub, which gives +2.5% Cooldown Reduction. Four leaves branch off the hub, one point each.

Its nodes give Cooldown Reduction, Cast Time Reduction and Aqua Spell Power.

{{skilltree mage focus="mage-cdr"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Mage node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +0.5% Cooldown Reduction |
| Path | 2 | +0.5% Cast Time Reduction |
| Path | 3 | +0.5% Aqua Spell Power |
| Path | 4 | +0.5% Cast Time Reduction |
| Path | 5 | +0.5% Cooldown Reduction |
| Path | 6 | +0.5% Cast Time Reduction |
| Path | 7 | +0.5% Cooldown Reduction |
| Path | 8 | +0.5% Cast Time Reduction |
| **Hub** | 9 | +2.5% Cooldown Reduction |
| Leaf | 10 | +0.5% Cast Time Reduction per 500 current mana |
| Leaf | 10 | +1% Cooldown Reduction per 500 current mana |
| Leaf | 10 | +5% Cooldown Reduction |
| Leaf | 10 | +5% Cast Time Reduction |

## Totals

Taking all 13 nodes (13 points) gives:

- +9% Cooldown Reduction
- +0.5% Cast Time Reduction per 500 current mana
- +1% Cooldown Reduction per 500 current mana
- +7% Cast Time Reduction
- +0.5% Aqua Spell Power
