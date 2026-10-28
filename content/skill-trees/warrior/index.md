---
{
  "title": "Warrior Skill Tree",
  "navTitle": "Warrior",
  "category": "Skill Trees",
  "order": 1,
  "summary": "The Warrior passive skill tree: a core of six spokes and two subclasses, Templar and Berserker."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/warrior.json (164 skills, skillLimitations)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/warrior.json (root)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
-->
The **Warrior Skill Tree** is the melee tree. Its core raises health, armor and attack damage, and its two subclasses specialize in heavy armor (Templar) or aggression (Berserker). It has 164 nodes. Every node costs 1 skill point.

{{skilltree warrior height=520}}

## Layout

- **Root:** the Warrior node, the tree's starting point. See [[skill-trees/warrior/core|Warrior – Core]].
- **Core:** six spokes of Minor nodes, each ending in a hub with three leaves.
- **Core keystones:** five keystones on the root; take up to three. Each needs a picked-up [[item:nether_remastered:seal_crystal]].
- **Subclasses:** [[skill-trees/warrior/templar|Templar]] and [[skill-trees/warrior/berserker|Berserker]], both on the root. Only one can be taken. Each has four branches and three keystones (take up to two), which need a picked-up [[item:block_factorys_bosses:knight_sword]].

The game enforces these limits by tag:

| Limit | Nodes allowed |
| --- | --- |
| Warrior Subclass | 1 |
| Berserker Keystone | 2 |
| Templar Keystone | 2 |
| Warrior Keystone | 3 |

## In this section

- [[skill-trees/warrior/core|Warrior – Core]]: the root and its six spokes.
- [[skill-trees/warrior/core/keystones|Warrior – Core – Keystones]]
- [[skill-trees/warrior/templar|Warrior – Templar]]: +30% Armor; +25% Max Health (total); cannot use magic weapons.
- [[skill-trees/warrior/berserker|Warrior – Berserker]]: Gain Rage for 2 s every 1.5 s.
