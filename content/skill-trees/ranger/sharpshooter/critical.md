---
{
  "title": "Ranger – Sharpshooter – Critical",
  "summary": "Ranger Sharpshooter branch: crit chance, arrow velocity and overheal."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_77.json (hub), ranger_88–92, ranger_156–158 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from ranger_9 over direct, long and one-way connections; totals sum identical bonuses
-->
**Critical** is one of the four branches of the [[skill-trees/ranger/sharpshooter|Sharpshooter]] subclass of the Ranger tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Sharpshooter node to reach its hub, which gives ×1.15 Crit Chance with a ranged weapon equipped. Three leaves branch off the hub, one point each.

Its nodes give Crit Chance, Arrow Velocity, Overheal, Bleed and Crit Damage.

> [!WARNING]
> Bonuses marked † check for an item in `#soulrend:ranged_weapons`, a tag that no file in the pack defines, so they never apply. See [[bugs|Known Bugs]].

{{skilltree ranger focus="ranger_77"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Sharpshooter node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | ×1.05 Crit Damage with a ranged weapon† in hand (each) |
| **Hub** | 6 | ×1.15 Crit Chance with a ranged weapon equipped |
| Leaf | 7 | +20% Arrow Velocity with a ranged weapon equipped |
| Leaf | 7 | ×1.2 Overheal with a ranged weapon equipped; +1% Overheal |
| Leaf | 7 | 10% chance to inflict Bleed for 30 s (stacks up to 5 times) on hit, with a ranged weapon in hand |

## Totals

Taking all 9 nodes (9 points) gives:

- ×1.15 Crit Chance with a ranged weapon equipped
- +20% Arrow Velocity with a ranged weapon equipped
- ×1.2 Overheal with a ranged weapon equipped
- +1% Overheal
- 10% chance to inflict Bleed for 30 s (stacks up to 5 times) on hit, with a ranged weapon in hand
- ×1.25 Crit Damage with a ranged weapon† in hand
