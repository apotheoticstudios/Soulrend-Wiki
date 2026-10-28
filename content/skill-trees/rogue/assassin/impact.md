---
{
  "title": "Rogue – Assassin – Impact",
  "summary": "Rogue Assassin branch: impact, offhand impact and armor negation."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_93.json (hub), rogue_116–120, rogue_162–164 (path and leaves)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (tree membership)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
  calc: Points = learnable distance from rogue_14 over direct, long and one-way connections; totals sum identical bonuses
-->
**Impact** is one of the four branches of the [[skill-trees/rogue/assassin|Assassin]] subclass of the Rogue tree. The name is the wiki's; in game the hub is titled "Notable". It takes 6 points from the Assassin node to reach its hub, which gives +2 Impact with a dual-wield weapon† in hand; +4 Offhand Impact with a dual-wield weapon† in hand. Three leaves branch off the hub, one point each.

Its nodes give Impact, Offhand Impact, Armor Negation, Offhand Armor Negation and Speed.

> [!WARNING]
> Bonuses marked † check for an item in `#my_tags:weapons/dualwield`, a tag that no file in the pack defines, so they never apply. See [[bugs|Known Bugs]].

{{skilltree rogue focus="rogue_93"}}

## Nodes

The Points column counts the points spent in this branch to reach a node, starting from the Assassin node. Path nodes must be taken in order; each leaf needs only the hub.

| Node | Points | Effect |
| --- | --- | --- |
| Path ×5 | 1–5 | +0.3 Impact (each) |
| **Hub** | 6 | +2 Impact with a dual-wield weapon† in hand; +4 Offhand Impact with a dual-wield weapon† in hand |
| Leaf | 7 | +0.4 Armor Negation while holding weapons in both hands |
| Leaf | 7 | +0.6 Offhand Armor Negation while holding weapons in both hands |
| Leaf | 7 | +25% Speed while crouching |

## Totals

Taking all 9 nodes (9 points) gives:

- +2 Impact with a dual-wield weapon† in hand
- +4 Offhand Impact with a dual-wield weapon† in hand
- +0.4 Armor Negation while holding weapons in both hands
- +0.6 Offhand Armor Negation while holding weapons in both hands
- +25% Speed while crouching
- +1.5 Impact
