---
{
  "title": "Warrior – Templar – Restoration",
  "summary": "Warrior Templar branch: healing, healing received and bleeding."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_90.json (hub), warrior_115–119, warrior_144–146 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior_85 over direct, long and one-way connections; totals sum identical bonuses
-->
**Restoration** is one of the four branches of the [[skill-trees/warrior/templar|Templar]] subclass of the Warrior tree. It takes 6 points from the Templar node to reach its hub, which gives +10% incoming healing with heavy armor equipped. Three leaves branch off the hub, one point each.

Its nodes give healing, Healing Received, Bleeding and Max Health.

{{skilltree warrior focus="warrior_90"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Templar node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +2.5% incoming healing (each) |
| **Hub** | 6 | +10% incoming healing with heavy armor equipped |
| Leaf | 7 | +15% Healing Received with heavy armor equipped |
| Leaf | 7 | 15% chance to inflict Bleeding for 10 s on the attacker (stacks up to 3 times) when you take damage, with heavy armor equipped |
| Leaf | 7 | +50% Max Health with heavy armor equipped |

## Totals

Taking all 9 nodes (9 points) gives:

- +10% incoming healing with heavy armor equipped
- +15% Healing Received with heavy armor equipped
- 15% chance to inflict Bleeding for 10 s on the attacker (stacks up to 3 times) when you take damage, with heavy armor equipped
- +50% Max Health with heavy armor equipped
- +12.5% incoming healing
