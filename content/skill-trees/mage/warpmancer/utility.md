---
{
  "title": "Mage – Warpmancer – Utility",
  "summary": "Mage Warpmancer branch: cooldown reduction, eldritch spell power and summon damage."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_utility-eldritch.json (hub), mage-1b-nt_utility-eldritch, mage-2b-nt_utility-eldritch, mage-3b-nt_utility-eldritch, mage-4b-nt_utility-eldritch, mage-5b-nt_utility-eldritch, mage-6b-nt_utility-eldritch, mage-nt_defense-nt_utility-eldritch, mage-nt_offense-nt_utility-eldritch, mage-nt_utility-nt_utility-eldritch (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-eldritch over direct, long and one-way connections; totals sum identical bonuses
-->
**Utility** is one of the three branches of the [[skill-trees/mage/warpmancer|Warpmancer]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Warpmancer node to reach its hub, which gives +1% Cooldown Reduction per 100% Eldritch Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Cooldown Reduction, Eldritch Spell Power, Summon Damage and Mana Regeneration.

{{skilltree mage focus="mage-nt_utility-eldritch"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Warpmancer node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +0.17% Mana Regeneration per 100% Eldritch Spell Power (each) |
| **Hub** | 7 | +1% Cooldown Reduction per 100% Eldritch Spell Power |
| Leaf | 8 | +20% Eldritch Spell Power |
| Leaf | 8 | +15% Summon Damage |
| Leaf | 8 | +10% Eldritch Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +1% Cooldown Reduction per 100% Eldritch Spell Power
- +30% Eldritch Spell Power
- +15% Summon Damage
- +1.02% Mana Regeneration per 100% Eldritch Spell Power
