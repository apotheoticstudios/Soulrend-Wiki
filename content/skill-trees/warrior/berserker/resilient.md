---
{
  "title": "Warrior – Berserker – Resilient",
  "summary": "Warrior Berserker branch: crit damage, crit chance and attack speed."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_berserker_resilient.json (hub), warrior_95–99, warrior_147–149 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior_berserker over direct, long and one-way connections; totals sum identical bonuses
-->
**Resilient** is one of the four branches of the [[skill-trees/warrior/berserker|Berserker]] subclass of the Warrior tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Berserker node to reach its hub, which gives ×1.3 Crit Damage with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand. Three leaves branch off the hub, one point each.

Its nodes give Crit Damage, Crit Chance and Attack Speed.

{{skilltree warrior focus="warrior_berserker_resilient"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Berserker node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | ×1.03 Crit Chance with a melee weapon in hand (each) |
| **Hub** | 6 | ×1.3 Crit Damage with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand |
| Leaf | 7 | ×1.05 Crit Damage per 10% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] equipped |
| Leaf | 7 | ×1.03 Crit Chance per 5% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand |
| Leaf | 7 | +10% Attack Speed per 40% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] equipped |

## Totals

Taking all 9 nodes (9 points) gives:

- ×1.3 Crit Damage with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- ×1.05 Crit Damage per 10% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] equipped
- ×1.03 Crit Chance per 5% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- +10% Attack Speed per 40% missing health, with a [[features/combat/two-handed-weapons|two-handed weapon]] equipped
- ×1.15 Crit Chance with a melee weapon in hand
