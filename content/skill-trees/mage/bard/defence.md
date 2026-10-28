---
{
  "title": "Mage – Bard – Defense",
  "summary": "Mage Bard branch: sound spell power, mana regeneration and max mana."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-nt_defense-sound.json (hub), mage-1b-nt_defense-sound, mage-2b-nt_defense-sound, mage-3b-nt_defense-sound, mage-4b-nt_defense-sound, mage-5b-nt_defense-sound, mage-6b-nt_defense-sound, mage-nt_defense-nt_defense-sound, mage-nt_offense-nt_defense-sound, mage-nt_utility-nt_defense-sound (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage-sound over direct, long and one-way connections; totals sum identical bonuses
-->
**Defense** is one of the three branches of the [[skill-trees/mage/bard|Bard]] school node in the Mage tree. The name is the wiki's; in game the hub is titled "Sentience". It takes 7 points from the Bard node to reach its hub, which gives +5% Sound Spell Power. Three leaves branch off the hub, one point each.

Its nodes give Sound Spell Power, Mana Regeneration, Max Mana, Summon Damage and Spell Resistance.

{{skilltree mage focus="mage-nt_defense-sound"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Bard node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×6 | 1–6 | +1% Spell Resistance per 100% Sound Spell Power (each) |
| **Hub** | 7 | +5% Sound Spell Power |
| Leaf | 8 | +4% Mana Regeneration per 25% Sound Spell Power |
| Leaf | 8 | +4% Max Mana per 25% Sound Spell Power |
| Leaf | 8 | +15% Summon Damage per 25% Sound Spell Power |

## Totals

Taking all 10 nodes (10 points) gives:

- +5% Sound Spell Power
- +4% Mana Regeneration per 25% Sound Spell Power
- +4% Max Mana per 25% Sound Spell Power
- +15% Summon Damage per 25% Sound Spell Power
- +6% Spell Resistance per 100% Sound Spell Power
