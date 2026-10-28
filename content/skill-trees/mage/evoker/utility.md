---
{
  "title": "Mage – Evoker – Utility",
  "summary": "Mage Evoker branch: evocation spell power, evocation school level and mana regeneration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_utility-evocation.json (hub), mage-1b-nt_utility-evocation, mage-2b-nt_utility-evocation, mage-3b-nt_utility-evocation, mage-4b-nt_utility-evocation, mage-5b-nt_utility-evocation, mage-6b-nt_utility-evocation, mage-nt_defense-nt_utility-evocation, mage-nt_offense-nt_utility-evocation, mage-nt_utility-nt_utility-evocation (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-evocation over direct, long and one-way connections; totals sum identical bonuses
-->
**Utility** is one of the three branches of the [[skill-trees/mage/evoker|Evoker]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 2 points from the Evoker node to reach its hub, which gives +2.5% Evocation Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Evocation Spell Power, Evocation School Level and Mana Regeneration.

{{skilltree mage focus="mage-nt_utility-evocation"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Evoker node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +0.17% Mana Regeneration per 100% Evocation Spell Power |
| **Hub** | 2 | +2.5% Evocation Spell Power |
| Path ×5 | 2–5 | +0.17% Mana Regeneration per 100% Evocation Spell Power (each) |
| Leaf | 3 | +20% Evocation Spell Power |
| Leaf | 3 | +1 Evocation School Level |
| Leaf | 3 | +10% Evocation Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +32.5% Evocation Spell Power
- +1 Evocation School Level
- +1.02% Mana Regeneration per 100% Evocation Spell Power
