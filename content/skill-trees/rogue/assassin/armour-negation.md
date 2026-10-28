---
{
  "title": "Rogue – Assassin – Armor Negation",
  "summary": "Rogue Assassin branch: armor negation, blindness and bleed."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_96.json (hub), rogue_97–98, rogue_100–101, rogue_105, rogue_153–155 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_14 over direct, long and one-way connections; totals sum identical bonuses
-->
**Armor Negation** is one of the four branches of the [[skill-trees/rogue/assassin|Assassin]] subclass of the Rogue tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Assassin node to reach its hub, which gives +30% Armor Negation while affected by Invisibility. Three leaves branch off the hub, one point each.

Its nodes give Armor Negation, Blindness, Bleed and Attack Damage.

{{skilltree rogue focus="rogue_96"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Assassin node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +5% Attack Damage (each) |
| **Hub** | 6 | +30% Armor Negation while affected by Invisibility |
| Leaf | 7 | 20% chance to inflict Blindness for 15 s on hit, while affected by Invisibility |
| Leaf | 7 | 20% chance to inflict Bleed for 5 s (stacks up to 5 times) on hit, while affected by Invisibility |
| Leaf | 7 | 10% chance to inflict Blindness for 15 s on hit, while affected by Invisibility |

## Totals

Taking all 9 nodes (9 points) gives:

- +30% Armor Negation while affected by Invisibility
- 20% chance to inflict Blindness for 15 s on hit, while affected by Invisibility
- 20% chance to inflict Bleed for 5 s (stacks up to 5 times) on hit, while affected by Invisibility
- 10% chance to inflict Blindness for 15 s on hit, while affected by Invisibility
- +25% Attack Damage
