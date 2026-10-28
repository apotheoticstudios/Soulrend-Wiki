---
{
  "title": "Mage – Priest – Offense",
  "summary": "Mage Priest branch: holy spell power, healing received and max mana."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_offense-holy.json (hub), mage-1b-nt_offense-holy, mage-2b-nt_offense-holy, mage-3b-nt_offense-holy, mage-4b-nt_offense-holy, mage-5b-nt_offense-holy, mage-6b-nt_offense-holy, mage-nt_defense-nt_offense-holy, mage-nt_offense-nt_offense-holy, mage-nt_utility-nt_offense-holy (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-holy over direct, long and one-way connections; totals sum identical bonuses
-->
**Offense** is one of the three branches of the [[skill-trees/mage/priest|Priest]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 3 points from the Priest node to reach its hub, which gives +2.5% Holy Spell Power (total). Three leaves branch off the hub, one point each.

Its nodes give Holy Spell Power, Healing Received and Max Mana.

{{skilltree mage focus="mage-nt_offense-holy"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Priest node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×2 | 1–2 | +1% Max Mana per 100% Holy Spell Power (each) |
| **Hub** | 3 | +2.5% Holy Spell Power (total) |
| Path ×4 | 3–5 | +1% Max Mana per 100% Holy Spell Power (each) |
| Leaf | 4 | +15% Holy Spell Power |
| Leaf | 4 | +10% Holy Spell Power |
| Leaf | 4 | +25% Healing Received |

## Totals

Taking all 10 nodes (10 points) gives:

- +2.5% Holy Spell Power (total)
- +25% Holy Spell Power
- +25% Healing Received
- +6% Max Mana per 100% Holy Spell Power
