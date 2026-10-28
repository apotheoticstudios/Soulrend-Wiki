---
{
  "title": "Hydra",
  "summary": "Ice and Fire's many-headed swamp monster that lives in hydra caves and regrows its heads; one optional Act II kill quest.",
  "items": ["iceandfire:spawn_egg_hydra"],
  "infobox": {
    "item": "iceandfire:spawn_egg_hydra",
    "model": "iceandfire:hydra",
    "rows": [
      ["ID", "`iceandfire:hydra`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "3,175 HP (level 40)"],
      ["Location", "Hydra caves in swamps"],
      { "heading": "Drops" },
      ["Common", "[[item:iceandfire:hydra_fang]], [[item:minecraft:rotten_flesh]]"],
      ["Player kill", "[[item:iceandfire:hydra_heart]] (10%)"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Hydra Max Health" 250, "Hydra Caves Gen Chance" 60: one in 60 per chunk)
  config/iceandfire/hydra_cave_biomes.json (Overworld + #forge:is_swamp)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityHydra.bakeAttributes (health from config, 3 attack, 1 armor, 0.3 speed, 16 follow range); EntityHydra (getHeadCount, regrowHeadCooldown, EntityHydraHead hitboxes)
  game-data/loot-tables.json iceandfire:entities/hydra (3 rolls of 0-5 Hydra Fang (+0-3/Looting) or 0-4 Rotten Flesh; Hydra Heart 10% +10%/Looting; skull 2.5% +1%/Looting; both player kill)
  config/ftbquests/quests/chapters/act_2.snbt (kill 1 iceandfire:hydra)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 250 × 3.7 = 925, attack 3 × 1.9 = 5.7; L40: 3,175, 14.7; L100: 7,675, 32.7
-->
The **Hydra** is a many-headed serpent from Ice and Fire that lairs in caves under swamps. Each head attacks on its own, and lost heads grow back after a while. It has the most health of the Ice and Fire monsters in Act II's quests: killing one is an optional quest in [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch.

## Spawning

Hydras live in **hydra caves**, which generate in Overworld swamps (about one in 60 swamp chunks).

## Stats

The Hydra has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health comes from Ice and Fire's config (250).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 250 HP | 925 HP | 3,175 HP | 7,675 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 1 | 1.1 | 1.4 | 2.1 |
| Movement speed | 0.3 | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:iceandfire:hydra_fang]] or [[item:minecraft:rotten_flesh]] | 0–5 fangs or 0–4 flesh, three rolls | Looting adds 0–3 fangs or 0–1 flesh |
| [[item:iceandfire:hydra_heart]] | 1 | Player kill, 10% (+10% per Looting level) |
| [[item:iceandfire:hydra_skull]] | 1 | Player kill, 2.5% (+1% per Looting level) |

## Quests

- **Hydra** (Act II, Ice and Fire branch): kill one. Rewards: a roll on [[progression/reward-tables#Gem tables|Chipped Gems]], 2 XP levels and an [[item:dungeons_and_combat:estus_flask]]. See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
