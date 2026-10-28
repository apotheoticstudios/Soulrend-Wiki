---
{
  "title": "Mage – Evoker – Defense",
  "summary": "Mage Evoker branch: evocation magic resistance, evocation spell power and spell resistance."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_defense-evocation.json (hub), mage-1b-nt_defense-evocation, mage-2b-nt_defense-evocation, mage-3b-nt_defense-evocation, mage-4b-nt_defense-evocation, mage-5b-nt_defense-evocation, mage-6b-nt_defense-evocation, mage-nt_defense-nt_defense-evocation, mage-nt_offense-nt_defense-evocation, mage-nt_utility-nt_defense-evocation (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-evocation over direct, long and one-way connections; totals sum identical bonuses
-->
**Defense** is one of the three branches of the [[skill-trees/mage/evoker|Evoker]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Evoker node to reach its hub, which gives +25% Evocation Magic Resistance. Three leaves branch off the hub, one point each.

Its nodes give Evocation Magic Resistance, Evocation Spell Power and Spell Resistance.

{{skilltree mage focus="mage-nt_defense-evocation"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Evoker node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +1% Spell Resistance per 50% Evocation Spell Power (each) |
| **Hub** | 7 | +25% Evocation Magic Resistance |
| Leaf | 8 | +20% Evocation Spell Power |
| Leaf | 8 | +20% Evocation Spell Power |
| Leaf | 8 | +15% Evocation Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +25% Evocation Magic Resistance
- +55% Evocation Spell Power
- +6% Spell Resistance per 50% Evocation Spell Power
