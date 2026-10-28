---
{
  "title": "Ranger – Sharpshooter – Velocity",
  "summary": "Ranger Sharpshooter branch: arrow velocity, draw speed and damage conversion."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_75.json (hub), ranger_98–102, ranger_162–164 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_9 over direct, long and one-way connections; totals sum identical bonuses
-->
**Velocity** is one of the four branches of the [[skill-trees/ranger/sharpshooter|Sharpshooter]] subclass of the Ranger tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Sharpshooter node to reach its hub, which gives +35% Arrow Velocity with a ranged weapon equipped. Three leaves branch off the hub, one point each.

Its nodes give Arrow Velocity, Draw Speed, damage conversion, damage reduction and damage avoidance.

{{skilltree ranger focus="ranger_75"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Sharpshooter node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +0.5% Arrow Velocity per 3 blocks between you and the target; −1% Draw Speed per 3 blocks between you and the target (each) |
| **Hub** | 6 | +35% Arrow Velocity with a ranged weapon equipped |
| Leaf | 7 | 50% of projectile damage is converted to fire damage |
| Leaf | 7 | +10% melee damage taken; 20% chance to avoid melee damage |
| Leaf | 7 | −25% melee damage taken with a ranged weapon in hand |

## Totals

Taking all 9 nodes (9 points) gives:

- +35% Arrow Velocity with a ranged weapon equipped
- +2.5% Arrow Velocity per 3 blocks between you and the target
- −5% Draw Speed per 3 blocks between you and the target
- 50% of projectile damage is converted to fire damage
- +10% melee damage taken
- 20% chance to avoid melee damage
- −25% melee damage taken with a ranged weapon in hand
