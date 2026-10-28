---
{
  "title": "Rogue – Assassin",
  "summary": "Rogue subclass: invisibility while crouching, but no two-handed weapons, magic weapons or heavy armor."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_14.json (subclass node), config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/rogue.json (skillLimitations "Rogue Subclass": 1)
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
**Assassin** is one of the two subclasses of the [[skill-trees/rogue|Rogue skill tree]]. The subclass node connects directly to the Rogue root, costs 1 point, and a player can take only one Rogue subclass. Taking it opens four branches and three keystones.

> [!WARNING]
> Bonuses marked † check for an item in `#my_tags:weapons/dualwield`, a tag that no file in the pack defines, so they never apply. See [[bugs|Known Bugs]].

{{skilltree rogue focus="rogue_14, rogue_96, rogue_94, rogue_93, rogue_87, rogue_88, rogue_89, rogue_95"}}

## Subclass node

The Assassin node gives:

- Gain Invisibility for 5 s every 1 s, while crouching
- Gain True Invisibility for 5 s every 3 s, while crouching
- Effects you inflict ignore immunity

It also restricts equipment while learned:

- Cannot use [[features/combat/two-handed-weapons|two-handed weapons]]
- Cannot use magic weapons
- Cannot use heavy armor

## Branches

| Branch | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/rogue/assassin/impact\|Impact]] | 6 | +2 Impact with a dual-wield weapon† in hand; +4 Offhand Impact with a dual-wield weapon† in hand | 9 |
| [[skill-trees/rogue/assassin/critical\|Critical]] | 6 | ×1.25 Crit Chance while holding melee weapons in both hands | 9 |
| [[skill-trees/rogue/assassin/lethality\|Lethality]] | 6 | ×1.5 Crit Damage while holding weapons in both hands | 9 |
| [[skill-trees/rogue/assassin/armour-negation\|Armor Negation]] | 6 | +30% Armor Negation while affected by Invisibility | 9 |

## Keystones

The Assassin node connects to three keystones, of which a player can take two. They need a picked-up [[item:block_factorys_bosses:knight_sword]]. See [[skill-trees/rogue/assassin/keystones|Rogue – Assassin – Keystones]].
