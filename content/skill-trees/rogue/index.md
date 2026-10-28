---
{
  "title": "Rogue Skill Tree",
  "navTitle": "Rogue",
  "category": "Skill Trees",
  "order": 3,
  "summary": "The Rogue passive skill tree: a core of six spokes and two subclasses, Skirmisher and Assassin.",
  "icon": "epicfight:iron_dagger"
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (164 skills, skillLimitations)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_1.json (root)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
-->
The **Rogue Skill Tree** is the agility tree. Its core gives armor negation, stealth, stamina and loot, and its two subclasses focus on invisibility and critical hits (Assassin) or light-armor speed (Skirmisher). It has 164 nodes. Every node costs 1 skill point.

{{skilltree rogue height=520}}

## Layout

- **Root:** the Rogue node, the tree's starting point. See [[skill-trees/rogue/core|Rogue – Core]].
- **Core:** six spokes of Minor nodes, each ending in a hub with three leaves.
- **Core keystones:** five keystones on the root; take up to three. Each needs a picked-up [[item:nether_remastered:seal_crystal]].
- **Subclasses:** [[skill-trees/rogue/skirmisher|Skirmisher]] and [[skill-trees/rogue/assassin|Assassin]], both on the root. Only one can be taken. Each has four branches and three keystones (take up to two), which need a picked-up [[item:block_factorys_bosses:knight_sword]].

The game enforces these limits by tag:

| Limit | Nodes allowed |
| --- | --- |
| Rogue Subclass | 1 |
| Skirmisher Keystone | 2 |
| Rogue Keystone | 3 |
| Assassin Keystone | 2 |

## In this section

- [[skill-trees/rogue/core|Rogue – Core]]: the root and its six spokes.
- [[skill-trees/rogue/core/keystones|Rogue – Core – Keystones]]
- [[skill-trees/rogue/skirmisher|Rogue – Skirmisher]]: +20% Max Stamina (total); cannot use heavy armor.
- [[skill-trees/rogue/assassin|Rogue – Assassin]]: Gain Invisibility for 5 s every 1 s, while crouching; Gain True Invisibility for 5 s every 3 s, while crouching; cannot use [[features/combat/two-handed-weapons|two-handed weapons]]; cannot use magic weapons; cannot use heavy armor.
