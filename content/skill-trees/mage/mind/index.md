---
{
  "title": "Mage – Mind",
  "summary": "The Mage root node and its six Mind spokes: spell power, resistance, mana, regeneration, cooldowns and effect duration."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/mage.json (root)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skill_trees/mage.json
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar (each skill costs 1 point: PlayerSkills.learnSkill; multipliers count whole steps: FloatFunctionMultiplier.getValue; tooltip wording from assets/skilltree/lang/en_us.json)
  game-data/attributes.json, game-data/effects.json, game-data/spells.json (display names)
-->
The **Mind** is the core of the [[skill-trees/mage|Mage skill tree]]: the Mage root node, six spokes and six keystones. Every Mage build starts from the root, which costs 1 point like every other node.

{{skilltree mage focus="mage, mage-cdr, mage-ctr, mage-ks_defense, mage-ks_defxoff, mage-ks_offense, mage-ks_offxutil, mage-ks_utility, mage-ks_utilxdef, mage-mr, mage-mm, mage-sp, mage-sr"}}

## Root

The Mage root gives:

- +50% Mana Regeneration
- +20 Max Mana

## Spokes

Each spoke is a path of Minor nodes that ends in a hub; four leaves branch off each hub.

| Spoke | Points to hub | Hub effect | Nodes |
| --- | --- | --- | --- |
| [[skill-trees/mage/mind/spell-resistance\|Spell Resistance]] | 9 | +10% Spell Resistance | 13 |
| [[skill-trees/mage/mind/enchantment\|Enchantment]] | 9 | +5% duration of effects on you | 13 |
| [[skill-trees/mage/mind/max-mana\|Max Mana]] | 9 | +15% Max Mana | 13 |
| [[skill-trees/mage/mind/spell-power\|Spell Power]] | 9 | +2.5% Spell Power | 13 |
| [[skill-trees/mage/mind/cooldown\|Cooldown Reduction]] | 9 | +2.5% Cooldown Reduction | 13 |
| [[skill-trees/mage/mind/mana-regen\|Mana Regeneration]] | 9 | +2.5% Mana Regeneration | 13 |

## Keystones

The root also connects to six keystones, of which a player can take two. They need a picked-up [[item:nether_remastered:seal_crystal]]. See [[skill-trees/mage/mind/keystones|Mage – Mind – Keystones]].

## Schools

The root connects to the twelve school nodes as well. See [[skill-trees/mage|Mage Skill Tree]].
