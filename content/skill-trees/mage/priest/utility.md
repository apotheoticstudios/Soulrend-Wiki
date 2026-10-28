---
{
  "title": "Mage – Priest – Utility",
  "summary": "Mage Priest branch: holy spell power, holy school level and mana regeneration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_utility-holy.json (hub), mage-1b-nt_utility-holy, mage-2b-nt_utility-holy, mage-3b-nt_utility-holy, mage-4b-nt_utility-holy, mage-5b-nt_utility-holy, mage-6b-nt_utility-holy, mage-nt_defense-nt_utility-holy, mage-nt_offense-nt_utility-holy, mage-nt_utility-nt_utility-holy (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-holy over direct, long and one-way connections; totals sum identical bonuses
-->
**Utility** is one of the three branches of the [[skill-trees/mage/priest|Priest]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Priest node to reach its hub, which gives +2.5% Holy Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Holy Spell Power, Holy School Level and Mana Regeneration.

{{skilltree mage focus="mage-nt_utility-holy"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Priest node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +0.17% Mana Regeneration per 100% Holy Spell Power (each) |
| **Hub** | 7 | +2.5% Holy Spell Power |
| Leaf | 8 | +20% Holy Spell Power |
| Leaf | 8 | +1 Holy School Level |
| Leaf | 8 | +20% Holy Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +42.5% Holy Spell Power
- +1 Holy School Level
- +1.02% Mana Regeneration per 100% Holy Spell Power
