---
{
  "title": "Warrior – Templar",
  "summary": "Warrior subclass for heavy armor: +30% Armor and +25% Max Health, but no magic weapons."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_85.json (subclass node), config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (skillLimitations "Warrior Subclass": 1)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
**Templar** is one of the two subclasses of the [[skill-trees/warrior|Warrior skill tree]]. The subclass node connects directly to the Warrior root, costs 1 point, and a player can take only one Warrior subclass. Taking it opens four branches and three keystones.

{{skilltree warrior focus="warrior_85, warrior_87, warrior_162, warrior_163, warrior_164, warrior_90, warrior_92, warrior_91"}}

## Subclass node

The Templar node gives:

- +30% Armor
- +25% Max Health (total)
- +2.5% Stun Armor
- +2.5% Armor Toughness

It also restricts equipment while learned:

- Cannot use magic weapons

## Branches

| Branch | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/warrior/templar/bulwark\|Bulwark]] | 6 | +20% Overheal with heavy armor equipped | 9 |
| [[skill-trees/warrior/templar/restoration\|Restoration]] | 6 | +10% incoming healing with heavy armor equipped | 9 |
| [[skill-trees/warrior/templar/warding\|Warding]] | 6 | +30% Armor Toughness with heavy armor equipped | 9 |
| [[skill-trees/warrior/templar/unflinching\|Unflinching]] | 6 | +5 Stun Armor with heavy armor equipped | 9 |

## Keystones

The Templar node connects to three keystones, of which a player can take two. They need a picked-up [[item:block_factorys_bosses:knight_sword]]. See [[skill-trees/warrior/templar/keystones|Warrior – Templar – Keystones]].
