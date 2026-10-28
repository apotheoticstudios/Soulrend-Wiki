---
{
  "title": "Ranger – Hexshot",
  "summary": "Ranger subclass: +50% Draw Speed, but less arrow velocity and damage against targets up to 10 blocks away."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_8.json (subclass node), config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (skillLimitations "Ranger Subclass": 1)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
**Hexshot** is one of the two subclasses of the [[skill-trees/ranger|Ranger skill tree]]. The subclass node connects directly to the Ranger root, costs 1 point, and a player can take only one Ranger subclass. Taking it opens four branches and three keystones.

{{skilltree ranger focus="ranger_8, ranger_18, ranger_19, ranger_20, ranger_81, ranger_86, ranger_85, ranger_84"}}

## Subclass node

The Hexshot node gives:

- +50% Draw Speed
- −20% Arrow Velocity (total) per 2.5 blocks between you and the target, if the target is at most 5 blocks away
- −20% Arrow Damage (total) per 2.5 blocks between you and the target, if the target is at most 10 blocks away

## Branches

| Branch | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/ranger/hexshot/mobility\|Mobility]] | 6 | +10% critical projectile damage with a ranged weapon equipped; +1 Step Height with a ranged weapon equipped | 9 |
| [[skill-trees/ranger/hexshot/retrieval\|Retrieval]] | 6 | 25% chance to retrieve fired arrows | 9 |
| [[skill-trees/ranger/hexshot/quickdraw\|Quickdraw]] | 6 | +15% Draw Speed | 9 |
| [[skill-trees/ranger/hexshot/multishot\|Multishot]] | 6 | +2% Draw Speed per enchantment on your weapon | 9 |

## Keystones

The Hexshot node connects to three keystones, of which a player can take two. They need a picked-up [[item:block_factorys_bosses:knight_sword]]. See [[skill-trees/ranger/hexshot/keystones|Ranger – Hexshot – Keystones]].
