---
{
  "title": "Mage – Mind – Spell Power",
  "summary": "Mage Mind branch: spell power."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-sp.json (hub), mage-1a-sp, mage-2a-sp, mage-3a-sp, mage-4a-sp, mage-5a-sp, mage-6a-sp, mage-7a-sp, mage-8a-sp, mage-defense-sp, mage-offense-sp, mage-utility_1-sp, mage-utility_2-sp (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage over direct, long and one-way connections; totals sum identical bonuses
-->
**Spell Power** is one of the six spokes of the [[skill-trees/mage/mind|Mind]], the core of the Mage tree. It takes 9 points from the Mage node to reach its hub, which gives +2.5% Spell Power. Four leaves branch off the hub, one point each.

Its nodes give Spell Power.

{{skilltree mage focus="mage-sp"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Mage node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×8 | 1–8 | +0.5% Spell Power (each) |
| **Hub** | 9 | +2.5% Spell Power |
| Leaf | 10 | +0.5% Spell Power per 50 missing mana |
| Leaf | 10 | +5% Spell Power |
| Leaf | 10 | +0.5% Spell Power per 150 current mana |
| Leaf | 10 | +10% Spell Power |

## Totals

Taking all 13 nodes (13 points) gives:

- +11.5% Spell Power
- +0.5% Spell Power per 50 missing mana
- +0.5% Spell Power per 150 current mana
- +10% Spell Power
