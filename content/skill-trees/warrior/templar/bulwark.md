---
{
  "title": "Warrior – Templar – Bulwark",
  "summary": "Warrior Templar branch: overheal, stunned and frostbite."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_87.json (hub), warrior_130–137 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from warrior_85 over direct, long and one-way connections; totals sum identical bonuses
-->
**Bulwark** is one of the four branches of the [[skill-trees/warrior/templar|Templar]] subclass of the Warrior tree. It takes 6 points from the Templar node to reach its hub, which gives +20% Overheal with heavy armor equipped. Three leaves branch off the hub, one point each.

Its nodes give Overheal, Stunned and Frostbite.

{{skilltree warrior focus="warrior_87"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Templar node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +5% Overheal (each) |
| **Hub** | 6 | +20% Overheal with heavy armor equipped |
| Leaf | 7 | ×1.2 Overheal with heavy armor equipped |
| Leaf | 7 | 10% chance to inflict Stunned for 1 s on the attacker when you take damage, with heavy armor equipped |
| Leaf | 7 | 20% chance to inflict Frostbite for 3 s on the attacker when you take damage, with heavy armor equipped |

## Totals

Taking all 9 nodes (9 points) gives:

- +20% Overheal with heavy armor equipped
- ×1.2 Overheal with heavy armor equipped
- 10% chance to inflict Stunned for 1 s on the attacker when you take damage, with heavy armor equipped
- 20% chance to inflict Frostbite for 3 s on the attacker when you take damage, with heavy armor equipped
- +25% Overheal
