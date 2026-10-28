---
{
  "title": "Mage – Druid – Utility",
  "summary": "Mage Druid branch: nature spell power, nature school level and mana regeneration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_utility-nature.json (hub), mage-1b-nt_utility-nature, mage-2b-nt_utility-nature, mage-3b-nt_utility-nature, mage-4b-nt_utility-nature, mage-5b-nt_utility-nature, mage-6b-nt_utility-nature, mage-nt_defense-nt_utility-nature, mage-nt_offense-nt_utility-nature, mage-nt_utility-nt_utility-nature (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-nature over direct, long and one-way connections; totals sum identical bonuses
-->
**Utility** is one of the three branches of the [[skill-trees/mage/druid|Druid]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Druid node to reach its hub, which gives +5% Nature Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Nature Spell Power, Nature School Level and Mana Regeneration.

{{skilltree mage focus="mage-nt_utility-nature"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Druid node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +0.17% Mana Regeneration per 100% Nature Spell Power (each) |
| **Hub** | 7 | +5% Nature Spell Power |
| Leaf | 8 | +1 Nature School Level |
| Leaf | 8 | +15% Nature Spell Power |
| Leaf | 8 | +20% Nature Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +40% Nature Spell Power
- +1 Nature School Level
- +1.02% Mana Regeneration per 100% Nature Spell Power
