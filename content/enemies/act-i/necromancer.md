---
{
  "title": "Necromancer",
  "summary": "An Iron's Spellbooks undead caster that spawns across the Overworld and in Catacombs; a Hunter's Journal target that drops Arcane Essence and scrolls.",
  "items": ["irons_spellbooks:necromancer_spawn_egg"],
  "infobox": {
    "item": "irons_spellbooks:necromancer_spawn_egg",
    "rows": [
      ["ID", "`irons_spellbooks:necromancer`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "92.5 HP (level 10)"],
      ["Location", "Every Overworld biome; Catacombs"],
      { "heading": "Drops" },
      ["Common", "0–4 [[item:irons_spellbooks:arcane_essence]]"],
      ["Player kill", "A random scroll (25%)"]
    ]
  }
}
---
<!-- sources:
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/forge/biome_modifier/necromancer_spawns.json (#minecraft:is_overworld, weight 18, groups of 1)
  mods/irons_spellbooks-1.20.1-3.15.6.jar worldgen/structure/catacombs.json spawn_overrides (catacombs_zombie 10, skeleton 5, necromancer 2); structure NBT catacombs "room" pieces (necromancer)
  mods/irons_spellbooks-1.20.1-3.15.6.jar NecromancerEntity.prepareAttributes (25 health, 3 attack, 0.25 speed, 25 follow range); spell list in the class: Blight, Fang Strike, Fang Ward, Icicle, Magic Missile, Raise Dead, Root
  game-data/loot-tables.json irons_spellbooks:entities/necromancer (0-4 Arcane Essence, Looting +0-1; scroll with randomize_spell quality 0-0.3, player kill, 25% +5%/Looting)
  config/ftbquests/quests/chapters/hunters_journal.snbt (necromancer kill 5, then 25; rewards 16, then 64 Arcane Essence)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 25 × 3.7 = 92.5, attack 3 × 1.9 = 5.7; L40: 317.5, 14.7; L100: 767.5, 32.7
-->
The **Necromancer** is an undead spellcaster from Iron's Spells 'n Spellbooks. It spawns throughout the Overworld from the first night and is the earliest source of [[item:irons_spellbooks:arcane_essence]] and spell scrolls, which makes it a useful target for players starting on magic. The [[progression/side-chapters/hunters-journal|Hunter's Journal]] asks for Necromancer kills.

## Spawning

- **Overworld:** Necromancers spawn alone in every Overworld biome, with a spawn weight of 18.
- **Catacombs:** Iron's Spellbooks' underground Catacombs replace normal spawns with Catacombs Zombies (weight 10), Skeletons (5) and Necromancers (2), and some of its rooms hold a Necromancer from the start.

## Stats

The Necromancer has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). It fights mostly with spells, so its attack value matters little.

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 25 HP | 92.5 HP | 317.5 HP | 767.5 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 0 | 0 | 0 | 0 |
| Movement speed | 0.25 | | | |
| Follow range | 25 blocks | | | |

## Spells

The Necromancer casts Blight, Fang Strike, Fang Ward, Icicle, Magic Missile, Raise Dead and Root. Raise Dead summons undead to fight beside it. See the [[items/magic/spells|Spells]] pages for what each spell does.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:arcane_essence]] | 0–4 | Looting adds 0–1 |
| [[item:irons_spellbooks:scroll]] with a random spell of low quality | 1 | Player kill, 25% (+5% per Looting level) |

## Hunter's Journal

- 5 kills: 16 [[item:irons_spellbooks:arcane_essence]].
- 25 kills: 64 Arcane Essence.

See [[progression/side-chapters/hunters-journal|Hunter's Journal]].
