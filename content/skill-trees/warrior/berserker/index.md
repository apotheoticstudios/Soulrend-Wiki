---
{
  "title": "Warrior – Berserker",
  "summary": "Warrior subclass that grants Rage every 1.5 seconds, with branches for crits, damage, health and impact."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior_berserker.json (subclass node), config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (skillLimitations "Warrior Subclass": 1)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
**Berserker** is one of the two subclasses of the [[skill-trees/warrior|Warrior skill tree]]. The subclass node connects directly to the Warrior root, costs 1 point, and a player can take only one Warrior subclass. Taking it opens four branches and three keystones.

{{skilltree warrior focus="warrior_berserker, warrior_berserker_agile, warrior_berserker_bloodthirsty, warrior_159, warrior_160, warrior_161, warrior_berserker_resilient, warrior_berserker_shred"}}

## Subclass node

The Berserker node gives:

- Gain Rage for 2 s every 1.5 s

## Branches

| Branch | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/warrior/berserker/agile\|Agile]] | 6 | +10% Impact with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand | 9 |
| [[skill-trees/warrior/berserker/bloodthirsty\|Bloodthirsty]] | 6 | +10% Max Health | 9 |
| [[skill-trees/warrior/berserker/shred\|Shred]] | 6 | +20% Attack Damage with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand | 9 |
| [[skill-trees/warrior/berserker/resilient\|Resilient]] | 6 | ×1.3 Crit Damage with a [[features/combat/two-handed-weapons\|two-handed weapon]] in hand | 9 |

## Keystones

The Berserker node connects to three keystones, of which a player can take two. They need a picked-up [[item:block_factorys_bosses:knight_sword]]. See [[skill-trees/warrior/berserker/keystones|Warrior – Berserker – Keystones]].
