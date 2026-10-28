---
{
  "title": "Rogue – Skirmisher – Stamina",
  "summary": "Rogue Skirmisher branch: stamina regen, weakness and max stamina."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_104.json (hub), rogue_131–135, rogue_144–146 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_13 over direct, long and one-way connections; totals sum identical bonuses
-->
**Stamina** is one of the four branches of the [[skill-trees/rogue/skirmisher|Skirmisher]] subclass of the Rogue tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Skirmisher node to reach its hub, which gives +20% Stamina Regen (total) with light armor equipped. Three leaves branch off the hub, one point each.

Its nodes give Stamina Regen, Weakness and Max Stamina.

{{skilltree rogue focus="rogue_104"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Skirmisher node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +2.5% Stamina Regen (each) |
| **Hub** | 6 | +20% Stamina Regen (total) with light armor equipped |
| Leaf | 7 | 30% chance to inflict Weakness for 10 s on melee hit, with light armor equipped |
| Leaf | 7 | 30% chance to inflict Weakness for 10 s on melee hit, with light armor equipped |
| Leaf | 7 | +30% Max Stamina with light armor equipped |

## Totals

Taking all 9 nodes (9 points) gives:

- +20% Stamina Regen (total) with light armor equipped
- 30% chance to inflict Weakness for 10 s on melee hit, with light armor equipped (×2)
- +30% Max Stamina with light armor equipped
- +12.5% Stamina Regen
