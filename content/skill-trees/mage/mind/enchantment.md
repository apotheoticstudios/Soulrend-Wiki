---
{
  "title": "Mage – Mind – Enchantment",
  "summary": "Mage Mind branch: effect duration and experience."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage-ctr.json (hub), mage-1a-ctr, mage-2a-ctr, mage-3a-ctr, mage-4a-ctr, mage-5a-ctr, mage-6a-ctr, mage-7a-ctr, mage-8a-ctr, mage-defense-ctr, mage-offense-ctr, mage-utility_1-ctr, mage-utility_2-ctr (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from mage over direct, long and one-way connections; totals sum identical bonuses
-->
**Enchantment** is one of the six spokes of the [[skill-trees/mage/mind|Mind]], the core of the Mage tree. It takes 9 points from the Mage node to reach its hub, which gives +5% duration of effects on you. Four leaves branch off the hub, one point each.

Its nodes give effect duration and experience.

{{skilltree mage focus="mage-ctr"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Mage node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | +2.5% duration of beneficial effects on you |
| Path | 2 | +1% experience from mobs |
| Path | 3 | +2.5% duration of beneficial effects on you |
| Path | 4 | +1% experience from mobs |
| Path | 5 | +2.5% duration of beneficial effects on you |
| Path | 6 | +1% experience from mobs |
| Path | 7 | +2.5% duration of beneficial effects on you |
| Path | 8 | +1% experience from mobs |
| **Hub** | 9 | +5% duration of effects on you |
| Leaf | 10 | +15% duration of beneficial effects on you |
| Leaf | 10 | 1% chance to gain 1,000 experience points on kill |
| Leaf | 10 | +10% duration of harmful effects you inflict |
| Leaf | 10 | +10% duration of harmful effects you inflict; +10% duration of harmful effects on you |

## Totals

Taking all 13 nodes (13 points) gives:

- +5% duration of effects on you
- +25% duration of beneficial effects on you
- 1% chance to gain 1,000 experience points on kill
- +20% duration of harmful effects you inflict
- +10% duration of harmful effects on you
- +4% experience from mobs
