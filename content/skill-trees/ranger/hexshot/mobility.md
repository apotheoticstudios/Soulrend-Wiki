---
{
  "title": "Ranger – Hexshot – Mobility",
  "summary": "Ranger Hexshot branch: crit damage, step height and speed."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_81.json (hub), ranger_118–125 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_8 over direct, long and one-way connections; totals sum identical bonuses
-->
**Mobility** is one of the four branches of the [[skill-trees/ranger/hexshot|Hexshot]] subclass of the Ranger tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Hexshot node to reach its hub, which gives +10% critical projectile damage with a ranged weapon equipped; +1 Step Height with a ranged weapon equipped. Three leaves branch off the hub, one point each.

Its nodes give crit damage, Step Height, Speed, Jump Height, spells, movement while drawing and Slow Falling.

{{skilltree ranger focus="ranger_81"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Hexshot node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path | 1 | ×1.1 Jump Height |
| Path | 2 | +5% Speed |
| Path ×2 | 3–4 | ×1.1 Jump Height (each) |
| Path | 5 | +5% Speed |
| **Hub** | 6 | +10% critical projectile damage with a ranged weapon equipped; +1 Step Height with a ranged weapon equipped |
| Leaf | 7 | Grants the Root spell (level 5) |
| Leaf | 7 | +3% Speed (total) per 10% current health |
| Leaf | 7 | 40% less movement penalty while using ranged weapons; gain Slow Falling for 5 s every 5 s, with a ranged weapon in hand |

## Totals

Taking all 9 nodes (9 points) gives:

- +10% critical projectile damage with a ranged weapon equipped
- +1 Step Height with a ranged weapon equipped
- +10% Speed
- ×1.3 Jump Height
- Grants the Root spell (level 5)
- +3% Speed (total) per 10% current health
- 40% less movement penalty while using ranged weapons
- Gain Slow Falling for 5 s every 5 s, with a ranged weapon in hand
