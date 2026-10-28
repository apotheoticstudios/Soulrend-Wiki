---
{
  "title": "Rogue – Skirmisher",
  "summary": "Rogue subclass for light armor: +20% Max Stamina, but no heavy armor."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_13.json (subclass node), config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (skillLimitations "Rogue Subclass": 1)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
**Skirmisher** is one of the two subclasses of the [[skill-trees/rogue|Rogue skill tree]]. The subclass node connects directly to the Rogue root, costs 1 point, and a player can take only one Rogue subclass. Taking it opens four branches and three keystones.

{{skilltree rogue focus="rogue_13, rogue_102, rogue_99, rogue_90, rogue_91, rogue_92, rogue_103, rogue_104"}}

## Subclass node

The Skirmisher node gives:

- +20% Max Stamina (total)

It also restricts equipment while learned:

- Cannot use heavy armor

## Branches

| Branch | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/rogue/skirmisher/impact\|Impact]] | 6 | +5 Impact with light armor equipped | 9 |
| [[skill-trees/rogue/skirmisher/armour-pierce\|Armor Pierce]] | 6 | +25% Armor Pierce with light armor equipped | 9 |
| [[skill-trees/rogue/skirmisher/speed\|Speed]] | 6 | +20% Speed with light armor equipped | 9 |
| [[skill-trees/rogue/skirmisher/stamina\|Stamina]] | 6 | +20% Stamina Regen (total) with light armor equipped | 9 |

## Keystones

The Skirmisher node connects to three keystones, of which a player can take two. They need a picked-up [[item:block_factorys_bosses:knight_sword]]. See [[skill-trees/rogue/skirmisher/keystones|Rogue – Skirmisher – Keystones]].
