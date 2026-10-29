---
{
  "title": "Warrior – Berserker – Bloodthirsty",
  "summary": "Warrior Berserker branch: max health, bleed and slowness."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_berserker_bloodthirsty.json (hub), warrior_105–109, warrior_153–155 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior_berserker over direct, long and one-way connections; totals sum identical bonuses
-->
**Bloodthirsty** is one of the four branches of the [[skill-trees/warrior/berserker|Berserker]] subclass of the Warrior tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Berserker node to reach its hub, which gives +10% Max Health. Three leaves branch off the hub, one point each.

Its nodes give Max Health, Bleed and Slowness.

{{skilltree warrior focus="warrior_berserker_bloodthirsty"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Berserker node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +5% Max Health (each) |
| **Hub** | 6 | +10% Max Health |
| Leaf | 7 | 20% chance to inflict Bleed for 7.5 s on melee hit, with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |
| Leaf | 7 | +20% Max Health |
| Leaf | 7 | 10% chance to inflict Slowness for 5 s on melee hit, with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand |

## Totals

Taking all 9 nodes (9 points) gives:

- +55% Max Health
- 20% chance to inflict Bleed for 7.5 s on melee hit, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
- 10% chance to inflict Slowness for 5 s on melee hit, with a [[features/combat/two-handed-weapons|two-handed weapon]] in hand
