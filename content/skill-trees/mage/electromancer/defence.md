---
{
  "title": "Mage – Electromancer – Defense",
  "summary": "Mage Electromancer branch: lightning spell power, lightning magic resistance and spell resistance."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_defense-lightning.json (hub), mage-1b-nt_defense-lightning, mage-2b-nt_defense-lightning, mage-3b-nt_defense-lightning, mage-4b-nt_defense-lightning, mage-5b-nt_defense-lightning, mage-6b-nt_defense-lightning, mage-nt_defense-nt_defense-lightning, mage-nt_offense-nt_defense-lightning, mage-nt_utility-nt_defense-lightning (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-lightning over direct, long and one-way connections; totals sum identical bonuses
-->
**Defense** is one of the three branches of the [[skill-trees/mage/electromancer|Electromancer]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Electromancer node to reach its hub, which gives +5% Lightning Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Lightning Spell Power, Lightning Magic Resistance and Spell Resistance.

{{skilltree mage focus="mage-nt_defense-lightning"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Electromancer node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +1% Spell Resistance per 100% Lightning Spell Power (each) |
| **Hub** | 7 | +5% Lightning Spell Power |
| Leaf | 8 | +15% Lightning Spell Power |
| Leaf | 8 | +15% Lightning Spell Power |
| Leaf | 8 | +25% Lightning Magic Resistance |

## Totals

Taking all 10 nodes (10 points) gives:

- +35% Lightning Spell Power
- +25% Lightning Magic Resistance
- +6% Spell Resistance per 100% Lightning Spell Power
