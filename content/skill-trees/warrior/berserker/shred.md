---
{
  "title": "Warrior – Berserker – Shred",
  "summary": "Warrior Berserker branch: attack damage, posture break and broken armor."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_berserker_shred.json (hub), warrior_100–104, warrior_150–152 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior_berserker over direct, long and one-way connections; totals sum identical bonuses
-->
**Shred** is one of the four branches of the [[skill-trees/warrior/berserker|Berserker]] subclass of the Warrior tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Berserker node to reach its hub, which gives +20% Attack Damage with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand. Three leaves branch off the hub, one point each.

Its nodes give Attack Damage, Posture Break and Broken Armor.

{{skilltree warrior focus="warrior_berserker_shred"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Berserker node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +2.5% Attack Damage (each) |
| **Hub** | 6 | +20% Attack Damage with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |
| Leaf | 7 | 10% chance to inflict Posture Break for 3 s on hit, with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |
| Leaf | 7 | 5% chance to inflict Broken Armor I for 5 s on hit, with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |
| Leaf | 7 | +30% Attack Damage with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |

## Totals

Taking all 9 nodes (9 points) gives:

- +50% Attack Damage with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- 10% chance to inflict Posture Break for 3 s on hit, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- 5% chance to inflict Broken Armor I for 5 s on hit, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- +12.5% Attack Damage
