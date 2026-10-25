---
{
  "title": "Ender Dragon",
  "summary": "The vanilla Ender Dragon at level 467; it drops the skill tree's Amnesia Scroll and extra Iron's Spellbooks loot.",
  "items": ["minecraft:ender_dragon_spawn_egg"],
  "infobox": {
    "item": "minecraft:ender_dragon_spawn_egg",
    "rows": [
      ["ID", "`minecraft:ender_dragon`"],
      ["Act", "[[progression/act-iv-beyond-reality|Act IV]]"],
      ["Level", "467 (fixed)"],
      ["Health", "28,160 HP"],
      ["Location", "The End"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:skilltree:amnesia_scroll]], [[item:irons_spellbooks:dragonskin]] ×6–10, [[item:irons_spellbooks:arcane_essence]] ×28–45"],
      ["Chance", "[[item:alshanex_familiars:dragon_warrior_trinket]] (25%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/minecraft/leveling_settings/entities/ender_dragon.json (starting_level 467 = max_level 467)
  libraries/net/minecraft/client/1.20.1-20230612.114412 client-srg.jar EnderDragon.createAttributes (200 max health)
  config/skilltree-common.toml ["Amnesia Scroll"] ("Drop amnesia scrolls from the Ender Dragon" = true; penalty 0)
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/loot_modifiers/entity_drops/ender_dragon_modifier.json -> loot_tables/entities/additional_dragon_loot.json (Dragonskin 6-10, Looting +0-2; Arcane Essence 28-45, Looting +0-3)
  mods/alshanex_familiars-1.20.1_v3.8_HOTFIX.jar data/alshanex_familiars/loot_modifiers/entity_loot/dragon_tear_drop.json -> loot_tables/entities/additional_dragon_loot.json (Dragon Tear: player kill, 25% + 2% per Looting level)
  config/endrem.toml (use_ender_eye false, frame_has_eye false)
  config/soulrend_core/boss_damage.toml (minecraft:ender_dragon=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_4.snbt "Slay The Ender Dragon"
  calc: level 467 -> Auto Leveling level 466
        health 200 × (1 + 0.3 × 466) = 28,160
        damage cap 20% × 28,160 = 5,632 HP per second -> at least 5 s
-->
**Ender Dragon** is the dragon that rules the End, as in vanilla Minecraft. In Soulrend it is fixed at level 467, far above the player level cap of 200, and it is the main boss of [[progression/act-iv-beyond-reality|Act IV]].

## Location

The Ender Dragon waits on the main island of the End. In Soulrend the End portal is filled with End Remastered eyes instead of Eyes of Ender (see [[items/progression-keys/legendary-eyes|Legendary Eyes]]).

## Stats

The dragon's level is fixed at 467, so its stats never change. See [[features/mobs-and-world/mob-levelling|Mob Levelling]].

| Stat | Base | Level 467 |
| --- | --- | --- |
| Health | 200 HP | **28,160 HP** (14,080 hearts) |
| Armor | 0 | 0 |
| Damage cap | | 20% of max health per second (5,632 HP), so a kill takes at least 5 s |

The dragon has no attack damage stat; its attacks deal fixed damage as in vanilla Minecraft.

## Attacks

The Ender Dragon fights as in vanilla Minecraft: it charges, breathes dragon's breath, shoots fireballs, and heals from the End Crystals on the obsidian pillars.

## Strategy

- **Destroy the End Crystals first.** They heal the dragon while they stand.
- **Sustained damage beats burst.** The damage cap blocks anything above 5,632 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:skilltree:amnesia_scroll]] | 1 | Always |
| [[item:irons_spellbooks:dragonskin]] | 6–10 | Always; Looting adds 0–2 |
| [[item:irons_spellbooks:arcane_essence]] | 28–45 | Always; Looting adds 0–3 |
| [[item:alshanex_familiars:dragon_warrior_trinket]] | 1 | Player kill; 25% (+2% per Looting level) |
| [[item:minecraft:dragon_egg]] | 1 | First kill, as in vanilla |

The Amnesia Scroll resets the skill tree. Soulrend sets its level penalty to 0, so no levels are lost (see [[progression/prologue/the-skill-tree|The Skill Tree]]).

## Quests

**Slay The Ender Dragon** ([[progression/act-iv-beyond-reality|Act IV]], after Beyond Reality) requires killing the dragon. Rewards:

- a [[item:fantasy_armor:dragonslayer_helmet]] with one gem socket
- an [[item:cataclysm:storm_eye]]
- a [[item:minecraft:dragon_head]]

It opens End Highlands. See [[progression/act-iv-beyond-reality/slay-the-ender-dragon|Slay The Ender Dragon]].

> [!LORE] Slay The Ender Dragon (Act IV)
> At the edge of reality, where only darkness remains, an ancient ruler watches over the Void.
>
> The Ender Dragon is more than a beast, it is a relic of a forgotten age, a guardian standing between you and the truth hidden beyond.
>
> Face the dragon and prove that even legends can fall.
