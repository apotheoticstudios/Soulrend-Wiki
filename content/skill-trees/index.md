---
{
  "title": "Skill Trees",
  "navTitle": "Overview",
  "category": "Skill Trees",
  "order": 0,
  "summary": "The four passive skill trees (Warrior, Ranger, Rogue and Mage), where skill points buy permanent stat bonuses.",
  "aliases": ["Passive Skill Tree", "Skill Tree"],
  "icon": "skilltree:wisdom_scroll"
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/*.json (warrior, ranger, rogue 164 skills each; mage 493; alchemist, cook and hunter empty; skillLimitations)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/*.json (985 skills; requirements: 21 need a picked-up nether_remastered:seal_crystal, 54 a block_factorys_bosses:knight_sword)
  config/paxi/resourcepacks/soulrend_lang/assets/skilltree/lang/en_us.json (tree names)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar PlayerSkills.learnSkill (one shared skillPoints counter, 1 point per skill), FloatFunctionMultiplier.getValue (value / divisor, cast to int), assets/skilltree/lang/en_us.json (bonus wording)
  config/skilltree-common.toml ("Amnesia scroll penalty" = 0, "Drop amnesia scrolls from the Ender Dragon" = true, "Enable exprerience exchange for skill points" = false)
  config/ftbquests/quests/chapters/the_realms.snbt "The Skill Tree" (O key or the inventory tab; 1 skill point per level)
  game-data/attributes.json (defaults: Crit Chance 0.05, Crit Damage 1.5, spell power 1.0)
  game-data/tags.json (soulrend:heavy_armor 48 items, soulrend:light_armor 56; soulrend:ranged_weapons and my_tags:weapons/dualwield absent)
  calc: Crit Chance 5% × 1.25 = 6.25%; Holy Spell Power 130% / 25% = 5.2 -> 5 steps
-->
The **skill trees** are Soulrend's second progression system, next to [[leveling|leveling]]. Each level gives one skill point, and each point buys one node in a tree: a permanent bonus such as more health, faster bow draws or higher spell power. The trees come from the Passive Skill Tree mod; Soulrend replaces all of its content with four trees of its own.

The trees open with the O key or the skill tree tab in the inventory. The Prologue quest [[progression/prologue/the-skill-tree|The Skill Tree]] introduces them.

## The trees

| Tree | Nodes | Focus |
| --- | --- | --- |
| [[skill-trees/warrior\|Warrior]] | 164 | Melee: health, armor and attack damage. Subclasses: Templar (heavy armor) and Berserker (aggression). |
| [[skill-trees/ranger\|Ranger]] | 164 | Archery: arrow damage, draw speed, mobility and loot. Subclasses: Sharpshooter and Hexshot. |
| [[skill-trees/rogue\|Rogue]] | 164 | Agility: armor negation, stealth, stamina and critical hits. Subclasses: Assassin and Skirmisher. |
| [[skill-trees/mage\|Mage]] | 493 | Spellcasting: mana, spell power and cooldowns, plus twelve school nodes, one per spell school. |

All four trees share one pool of skill points, so a character can spend points in more than one tree. The mod's own Alchemist, Cook and Hunter trees are emptied and don't appear.

## How it works

- **Starting points.** Each tree has one root node. It is the only node that can be learned without a learned neighbor.
- **Paths.** Every other node needs a learned node next to it. Most paths are one-way: they can only be followed outward from the root, so Minor nodes on a path are taken in order.
- **Cost.** Every node costs exactly 1 skill point, keystones included.
- **Limits.** Some nodes belong to a limited group. A Warrior, Ranger or Rogue character can take one subclass, up to three core keystones and up to two keystones of its subclass. A Mage can take two of the twelve school nodes, two of the six Mind keystones and one keystone per school. Each tree page lists its limits.
- **Item requirements.** Core keystones (and the six Mind keystones) need a picked-up [[item:nether_remastered:seal_crystal]], which the [[Warden]] drops. Subclass and school keystones need a picked-up [[item:block_factorys_bosses:knight_sword]], which the [[Underworld Knight]] drops. The game checks the "picked up" statistic, so the item only has to be picked up once; it can be used or stored afterwards.

### Layout of a tree

| Part | Warrior, Ranger and Rogue | Mage |
| --- | --- | --- |
| Root | Starting node with small bonuses | Starting node: mana and mana regeneration |
| Core | Six spokes: a path of Minor nodes, a hub and three leaves | The Mind: six spokes with four leaves each |
| Core keystones | Five; take three | Six; take two |
| Specialization | Two subclasses; take one | Twelve school nodes; take two |
| Specialization branches | Four per subclass: a path, a hub and three leaves | Three per school: six Minor nodes, a hub and three leaves |
| Specialization keystones | Three per subclass; take two | Three per school; take one |

The wiki names each spoke and branch after its hub. Where the game titles a hub only "Notable" or "Sentience", the wiki uses a descriptive name instead, and the page says so.

## Reading the numbers

Bonuses use the game's own wording, with these conventions:

- **+5 Attack Damage** adds a flat amount.
- **+10% Max Health** increases the stat by 10% of its value (base plus flat bonuses).
- **(total)** marks a bonus that multiplies the final value, after all other bonuses.
- **×1.25 Crit Chance** marks a percentage bonus to a stat that is itself a percentage but doesn't start at 100%. It multiplies the stat: a Crit Chance of 5% becomes 6.25%, not 30%. Crit Chance starts at 5% and Crit Damage at 150%. Dodge Chance, Armor Shred, Overheal and Knockback Resistance start at 0, so a multiplier only grows what gear adds.
- **"per"** bonuses scale with something else, counted in whole steps and rounded down. "+1% Spell Resistance per 25% Holy Spell Power" gives +5% at 130% Holy Spell Power (5.2 steps, rounded down to 5). Every spell power starts at 100%, so such bonuses are never zero.

Effect durations are in seconds. "Stacks up to N times" means repeated procs can raise the effect's level up to that cap.

## Equipment conditions

Many bonuses only apply with certain equipment. **Heavy armor** and **light armor** are Soulrend's own item tags; "with heavy armor equipped" means at least one equipped item is in the tag. Two-handed weapons are explained on [[features/combat/two-handed-weapons|Two-Handed Weapons]].

> [!WARNING]
> A few bonuses check `#soulrend:ranged_weapons` or `#my_tags:weapons/dualwield`, tags that no file in the pack defines, so they never apply. The wiki marks them with †. They include part of the Rogue root and nodes in Sharpshooter Critical and Assassin Impact. See [[bugs|Known Bugs]].

### Heavy armor

{{items tag=soulrend:heavy_armor}}

### Light armor

{{items tag=soulrend:light_armor}}

## Resetting

An [[item:skilltree:amnesia_scroll]] resets the whole tree and returns every point; Soulrend sets the scroll's point penalty to 0%. The Prologue quest gives one, and the [[Ender Dragon]] drops them. A [[item:skilltree:wisdom_scroll]] grants one extra skill point. Skill points can't be bought with experience.

## Related

- [[leveling|Leveling]]
- [[leveling/earning-levels|Earning Levels]]
- [[progression/prologue/the-skill-tree|The Skill Tree]] (quest)
- [[faq/skills-and-levelling/can-i-reset-my-skill-tree|Can I reset my skill tree?]]
