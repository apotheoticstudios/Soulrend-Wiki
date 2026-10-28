---
{
  "title": "Ranger Skill Tree",
  "navTitle": "Ranger",
  "category": "Skill Trees",
  "order": 2,
  "summary": "The Ranger passive skill tree: a core of six spokes and two subclasses, Hexshot and Sharpshooter."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/ranger.json (164 skills, skillLimitations)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_1.json (root)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
-->
The **Ranger Skill Tree** is the archery tree. Its core improves bows, mobility and loot, and its two subclasses trade fire rate for power (Sharpshooter) or power for fire rate (Hexshot). It has 164 nodes. Every node costs 1 skill point.

{{skilltree ranger height=520}}

## Layout

- **Root:** the Ranger node, the tree's starting point. See [[skill-trees/ranger/core|Ranger – Core]].
- **Core:** six spokes of Minor nodes, each ending in a hub with three leaves.
- **Core keystones:** five keystones on the root; take up to three. Each needs a picked-up [[item:nether_remastered:seal_crystal]].
- **Subclasses:** [[skill-trees/ranger/hexshot|Hexshot]] and [[skill-trees/ranger/sharpshooter|Sharpshooter]], both on the root. Only one can be taken. Each has four branches and three keystones (take up to two), which need a picked-up [[item:block_factorys_bosses:knight_sword]].

The game enforces these limits by tag:

| Limit | Nodes allowed |
| --- | --- |
| Sharpshooter Keystone | 2 |
| Ranger Keystone | 3 |
| Hexshot Keystone | 2 |
| Ranger Subclass | 1 |

## In this section

- [[skill-trees/ranger/core|Ranger – Core]]: the root and its six spokes.
- [[skill-trees/ranger/core/keystones|Ranger – Core – Keystones]]
- [[skill-trees/ranger/hexshot|Ranger – Hexshot]]: +50% Draw Speed; −20% Arrow Velocity (total) per 2.5 blocks between you and the target, if the target is at most 5 blocks away.
- [[skill-trees/ranger/sharpshooter|Ranger – Sharpshooter]]: +30% Arrow Velocity; −40% Draw Speed.
