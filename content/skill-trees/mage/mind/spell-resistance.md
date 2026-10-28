---
{
  "title": "Mage – Mind – Spell Resistance",
  "summary": "Mage Mind branch: spell resistance."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-sr.json (hub), mage-1a-sr, mage-2a-sr, mage-3a-sr, mage-4a-sr, mage-5a-sr, mage-6a-sr, mage-7a-sr, mage-8a-sr, mage-defense-sr, mage-offense-sr, mage-utility_1-sr, mage-utility_2-sr (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage over direct, long and one-way connections; totals sum identical bonuses
-->
**Spell Resistance** is one of the six spokes of the [[skill-trees/mage/mind|Mind]], the core of the Mage tree. It takes 9 points from the Mage node to reach its hub, which gives +10% Spell Resistance. Four leaves branch off the hub, one point each.

Its nodes give Spell Resistance.

{{skilltree mage focus="mage-sr"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Mage node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×8 | 1–8 | +1% Spell Resistance (each) |
| **Hub** | 9 | +10% Spell Resistance |
| Leaf | 10 | +0.5% Spell Resistance per 100 current mana |
| Leaf | 10 | +0.5% Spell Resistance per 25 missing mana |
| Leaf | 10 | +15% Spell Resistance |
| Leaf | 10 | +15% Spell Resistance |

## Totals

Taking all 13 nodes (13 points) gives:

- +48% Spell Resistance
- +0.5% Spell Resistance per 100 current mana
- +0.5% Spell Resistance per 25 missing mana
