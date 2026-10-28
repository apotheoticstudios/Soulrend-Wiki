---
{
  "title": "Mage – Cultist – Offense",
  "summary": "Mage Cultist branch: summon damage, blood spell power and devour spell level."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_offense-blood.json (hub), mage-1b-nt_offense-blood, mage-2b-nt_offense-blood, mage-3b-nt_offense-blood, mage-4b-nt_offense-blood, mage-5b-nt_offense-blood, mage-6b-nt_offense-blood, mage-nt_defense-nt_offense-blood, mage-nt_offense-nt_offense-blood, mage-nt_utility-nt_offense-blood (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-blood over direct, long and one-way connections; totals sum identical bonuses
-->
**Offense** is one of the three branches of the [[skill-trees/mage/cultist|Cultist]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Cultist node to reach its hub, which gives +15% Summon Damage per 25% Blood Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Summon Damage, Blood Spell Power, Devour Spell Level and Max Mana.

{{skilltree mage focus="mage-nt_offense-blood"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Cultist node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +1% Max Mana per 100% Blood Spell Power (each) |
| **Hub** | 7 | +15% Summon Damage per 25% Blood Spell Power |
| Leaf | 8 | +15% Blood Spell Power |
| Leaf | 8 | +10% Blood Spell Power |
| Leaf | 8 | +1 Devour Spell Level |

## Totals

Taking all 10 nodes (10 points) gives:

- +15% Summon Damage per 25% Blood Spell Power
- +25% Blood Spell Power
- +1 Devour Spell Level
- +6% Max Mana per 100% Blood Spell Power
