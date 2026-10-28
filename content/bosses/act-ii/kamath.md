---
{
  "title": "Kamath",
  "summary": "A level 30 champion in the Ruins of Kamath, summoned at the Champion Brazier; one of the two bosses behind the Bottom-Left Shard.",
  "items": ["dungeons_and_combat:kamath_spawn_egg"],
  "infobox": {
    "item": "dungeons_and_combat:kamath_spawn_egg",
    "rows": [
      ["ID", "`dungeons_and_combat:kamath`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "30 (fixed)"],
      ["Health", "3,104 HP"],
      ["Location", "Ruins of Kamath, forests and plains"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:dungeons_and_combat:oath_sword]], [[item:dungeons_and_combat:essence_of_kamath]] ×1–6"],
      ["Chance", "[[item:dungeons_and_combat:champion_belt]] (50%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/dungeons_and_combat/leveling_settings/entities/kamath.json (starting_level 30 = max_level 30)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar KamathEntity.createAttributes (320 max health, 16 attack damage, 12 armor, 0.8 knockback resistance, 0.5 attack knockback, 0.23 movement speed, 48 follow range); hurt ignores fall damage
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar procedures Kamath* (ComboAttack, GreatSlam, GroundAttack, StabbedAttack; KamathBrazierOnRightClick: lit Champion Brazier spawns Kamath and goes out; KamathBrazierOnRightClickSoul: Imposing Soul relights it, "The Champion's flame is extinguished")
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/worldgen/structure/the_ruins_of_kamath.json (dark_forest, plains, forest, snowy_taiga), structure_set (spacing 68, separation 51)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/loot_tables/entities/kamath.json
  config/soulrend_core/boss_damage.toml (dungeons_and_combat:kamath=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: The Ruins Of Kamath", "Defeat Kamath", "Bottom-Left Shard"
  calc: level 30 -> Auto Leveling level 29
        health 320 × 9.7 = 3,104; attack 16 × 3.9 = 62.4; armor 12 × 1.319 = 15.8
        damage cap 20% × 3,104 = 620.8 HP per second -> at least 5 s
-->
**Kamath** is an armored champion that rises in the Ruins of Kamath. It is one of the [[progression/act-ii-first-steps|Act II]] bosses: killing it and [[Sunleia]] completes the Bottom-Left Shard quest, which rewards the [[item:nether_remastered:seal_piece_3]], one of the four seal pieces that open the Nether.

## Location

Kamath appears in the Ruins of Kamath (`dungeons_and_combat:the_ruins_of_kamath`). The ruins generate in Dark Forests, Plains, Forests and Snowy Taigas, at most once per 68 × 68 chunk area, which makes them one of the rarer structures. The [[item:explorerscompass:explorerscompass]] can search for them.

The ruins hold the **Champion Brazier**. Using the lit brazier summons Kamath and puts the flame out. An [[item:dungeons_and_combat:imposing_soul]] relights it, so Kamath can be fought again.

## Stats

Kamath's level is fixed at 30, so its stats never change. The quest book states it too ("Level 30"). See [[leveling/mob-levels|Mob Levels]] for how levels scale other mobs.

| Stat | Base | Level 30 |
| --- | --- | --- |
| Health | 320 HP | **3,104 HP** (1,552 hearts) |
| Attack damage | 16 | **62.4** |
| Armor | 12 | **15.8** |
| Knockback resistance | 80% | 80% |
| Movement speed | 0.23 | 0.23 |
| Follow range | 48 blocks | 48 blocks |
| Damage cap | | 20% of max health per second (620.8 HP), so a kill takes at least 5 s |

Kamath takes no fall damage.

## Attacks

- **Combo attack**, a string of melee swings
- **Stab**
- **Ground attack**
- **Great slam**

<!-- TODO: attack conditions and cooldowns (procedures KamathActionTrigger / KamathOnEntityTickUpdate). -->

## Strategy

- **It hits hard for its level.** 62.4 attack damage at level 30 is the highest of the Act II Dungeons and Combat bosses.
- **Sustained damage beats burst.** The damage cap blocks anything above 620.8 HP in a second, shared by every attacker.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:oath_sword]] | 1 | Always |
| [[item:dungeons_and_combat:essence_of_kamath]] | 1–6 | Always |
| [[item:dungeons_and_combat:cursed_soul]] | 1 | Always |
| [[item:dungeons_and_combat:kamath_music_disc]] | 1 | Always |
| [[item:dungeons_and_combat:champion_belt]] | 0–1 | Always rolled |
| [[item:dungeons_and_combat:armor_plate]] | 0–6 | Always rolled |
| [[item:dungeons_and_combat:steel_ingot]] | 0–9 | Always rolled |
| [[item:minecraft:bone]] | 0–12 | Always rolled |
| [[item:dungeons_and_combat:estus_flask]] | 0–3 | Always rolled |

The Essence of Kamath is traded with the essence forger. The Champion Belt is a curio that raises maximum health, armor and knockback resistance.

## Quests

**Find Structure: The Ruins Of Kamath** ([[progression/act-ii-first-steps|Act II]], Dungeons and Combat branch) requires finding the ruins. Rewards: a roll on the Structure Loot reward table and 2 XP levels.

**Defeat Kamath** requires killing it. Rewards:

- a roll on the Flawed Gems reward table
- a roll on the Rare Loot reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

**Bottom-Left Shard** completes once Kamath and Sunleia are both dead. It rewards the [[item:nether_remastered:seal_piece_3]] and a [[item:skilltree:wisdom_scroll]]. See [[progression/act-ii-first-steps/dungeons-and-combat-bosses|Dungeons and Combat Bosses]].

The Kamath armor set is a step of the [[progression/side-chapters/rise-of-the-champion|Rise of the Champion]] chapter.
