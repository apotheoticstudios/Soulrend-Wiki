---
{
  "title": "Ferrous Wroughtnaut",
  "summary": "A level 25 armored knight in the Wrought Chamber that can only be hurt from behind after an overhead swing.",
  "aliases": ["Wroughtnaut", "The Fallen Knight"],
  "items": ["mowziesmobs:wroughtnaut_spawn_egg"],
  "infobox": {
    "item": "mowziesmobs:wroughtnaut_spawn_egg",
    "rows": [
      ["ID", "`mowziesmobs:ferrous_wroughtnaut`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "25 (fixed)"],
      ["Health", "328 HP"],
      ["Location", "Wrought Chamber, underground"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:mowziesmobs:wrought_helmet]], [[item:mowziesmobs:wrought_axe]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/mowziesmobs/leveling_settings/entities/ferrous_wroughtnaut.json (starting_level 25 = max_level 25)
  mods/mowziesmobs-1.8.2.jar EntityWroughtnaut.createAttributes (40 max health, 30 attack damage, 1.0 knockback resistance)
  mods/mowziesmobs-1.8.2.jar EntityWroughtnaut.hurt (no damage unless `vulnerable`; hits inside the front 220° arc blocked; attacker-less damage only if BYPASSES_INVULNERABILITY)
  mods/mowziesmobs-1.8.2.jar EntityWroughtnaut.tick (activates when its target is within 4.5 blocks; heals while inactive)
  mods/mowziesmobs-1.8.2.jar AnimationFWNVerticalAttackAI (vulnerable from animation tick 27 to 84 = 58 ticks)
  mods/mowziesmobs-1.8.2.jar WroughtnautAttackAI (swing/overhead within 3.5 blocks and in front; overhead after more than 3 + 2 × (1 − health ratio) swings or 18% chance; stomp within 6 blocks, 200-tick cooldown, used instead of a swing 33.3% of the time; target 1 block below to 3 above)
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/worldgen/structure_set/wrought_chambers.json (spacing 15, separation 5)
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/loot_tables/entities/ferrous_wroughtnaut.json (helm + axe, killed_by_player)
  config/mowziesmobs-common.toml [mobs.ferrous_wroughtnaut] (multipliers 1.0, heals out of battle, health reset on respawn, biome !is_ocean, height 20-50)
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/autoleveling-common.toml [Attributes] (max health 0.3, attack damage 0.1 per level)
  config/ftbquests/quests/chapters/mowzies_mobs.snbt "The Wrought Chamber", "The Ferrous Wroughtnaut"
  config/explorerscompass-common.toml (structure not blacklisted)
  calc: level 25 -> Auto Leveling level 24
        health 40 × (1 + 0.3 × 24) = 328; attack 30 × (1 + 0.1 × 24) = 102
        vulnerable window 58 ticks = 2.9 s; stomp cooldown 200 ticks = 10 s
-->
**Ferrous Wroughtnaut** is a giant suit of armor wielding a huge axe, which guards the Wrought Chamber underground. It is one of the [[progression/act-ii-first-steps|Act II]] bosses, and killing it completes The Ferrous Wroughtnaut quest in the [[progression/side-chapters/fallen-myths|Fallen Myths]] chapter.

Its armor blocks almost every hit. The Wroughtnaut only takes damage from behind, and only for a few seconds after its overhead swing buries the axe in the ground.

## Location

The Wroughtnaut stands inactive in its own structure, the Wrought Chamber (`mowziesmobs:wrought_chamber`). The chamber generates:

- in any Overworld biome except oceans;
- between y=20 and y=50;
- at most once per 15 × 15 chunk area.

The [[item:explorerscompass:explorerscompass]] can search for the structure (see [[progression/act-i-awakening/explorers-compass|Explorer's Compass]]). Finding it completes The Wrought Chamber quest.

The Wroughtnaut wakes up when its target comes within 4.5 blocks, and heals while it is inactive.

## Stats

The Wroughtnaut's level is fixed at 25, so its stats never change. See [[features/mobs-and-world/mob-levelling|Mob Levelling]] for how levels scale other mobs.

| Stat | Base | Level 25 |
| --- | --- | --- |
| Health | 40 HP | **328 HP** (164 hearts) |
| Attack damage | 30 | **102** |
| Armor | 0 | 0 |
| Knockback resistance | 100% | 100% |
| Damage cap | | None |

Attack damage is the value its attacks are based on. Individual attacks deal different amounts.

## Attacks

The Wroughtnaut attacks targets that are in front of it, from 1 block below to 3 blocks above its feet.

| Attack | Condition | Cooldown |
| --- | --- | --- |
| Horizontal swing | The target is within 3.5 blocks. | |
| Overhead swing | The target is within 3.5 blocks. Used after 4 horizontal swings at full health and after 6 near death, or at random (18% per attack). | |
| Stomp | The target is within 6 blocks. Replaces a swing a third of the time when it is ready. | 10 s |

After the overhead swing the axe stays stuck in the ground for 2.9 s. This is the only time the Wroughtnaut can be hurt.

## Strategy

- **Bait the overhead swing, then get behind it.** Hits only land during the 2.9 s after an overhead swing, and only from outside the 220° arc in front of it. Every other hit makes a metallic sound and deals no damage.
- **Fire, poison and other damage with no attacker do nothing.** Only hits from an attacker count.
- **Stay close enough to make it swing.** The overhead swing only comes after several horizontal swings, so keeping out of range only delays the opening.
- **It hits hard for Act II.** 102 attack damage at level 25 is far above other bosses of the act; block or dodge the swings rather than trading hits.

> [!WARNING]
> The Wroughtnaut's health resets to full when a player respawns nearby, and it heals while inactive. Dying or walking away loses progress on the fight.

## Drops

Drops only count when a player gets the kill.

| Item | Count | Condition |
| --- | --- | --- |
| [[item:mowziesmobs:wrought_helmet]] | 1 | Always |
| [[item:mowziesmobs:wrought_axe]] | 1 | Always |

Neither item breaks. The Axe of a Thousand Metals attacks in a wide arc on right-click and creates a shockwave on shift-right-click.

## Quests

**The Wrought Chamber** (Fallen Myths chapter) requires finding the structure. Rewards: [[item:cataclysm:ancient_metal_ingot]], everything in the Ore reward table, and 2 XP levels.

**The Ferrous Wroughtnaut** (Fallen Myths chapter) requires killing the Wroughtnaut. Rewards:

- [[item:minecraft:iron_block]]
- [[item:minecraft:netherite_scrap]]
- 3 XP levels

> [!LORE] The Ferrous Wroughtnaut (Fallen Myths)
> Only the bravest of adventurers would dare to challenge the Ferrous Wroughtnaut. Upon defeat, the Wroughtnaut will drop its Wrought Helm and its Axe of a Thousand Metals for the victor.
>
> Right clicking with the axe attacks in a large arc, and shift-right clicking will create a shockwave that brings targets closer to you. Neither tool can break.
