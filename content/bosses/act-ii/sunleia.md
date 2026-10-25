---
{
  "title": "Sunleia",
  "summary": "A level 30 winged warrior of light in the desert Pantheon of Sunleia; one of the two bosses behind the Bottom-Left Shard.",
  "items": ["dungeons_and_combat:sunleia_spawn_egg"],
  "infobox": {
    "item": "dungeons_and_combat:sunleia_spawn_egg",
    "rows": [
      ["ID", "`dungeons_and_combat:sunleia`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "30 (fixed)"],
      ["Health", "3,104 HP"],
      ["Location", "Pantheon of Sunleia, deserts"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:dungeons_and_combat:sunrise_sword]], [[item:dungeons_and_combat:essence_of_sunleia]] ×1–6"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/dungeons_and_combat/leveling_settings/entities/sunleia.json (starting_level 30 = max_level 30)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar SunleiaEntity.createAttributes (320 max health, 22 armor, 1 attack damage, 0.5 knockback resistance, 0.8 attack knockback, 0.2 movement speed, 64 follow range); hurt ignores fall and fire damage
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar procedures Sunleia* (attacks: left/right slash, left/right stab, dual slash, dash slash, air projectile, flight; dual and dash slash deal 1.5 × attack damage)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar SunleiaLightOnBlockRightClicked(2)Procedure (lit Sunleia Light spawns Sunleia and goes out; Blessed Beetle relights it; "The Light's energy must be restored")
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/worldgen/structure/the_pantheon_of_sunleia.json (desert), structure_set (spacing 50, separation 30); structures/the_pantheon_of_sunleia.nbt
  config/paxi/datapacks/soulrend_loot/data/dungeons_and_combat/loot_tables/entities/sunleia.json (Soulrend's table; removes the jar's Blessed Amulet and Hand of Sunleia)
  kubejs/server_scripts/progression/dungeons_and_combat.js (Blessed Beetle recipe; not in game-data/recipes.json)
  config/soulrend_core/boss_damage.toml (dungeons_and_combat:sunleia=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: The Pantheon of Sunleia", "Defeat Sunleia", blessed_beetle quest, "Bottom-Left Shard"
  calc: level 30 -> Auto Leveling level 29
        health 320 × (1 + 0.3 × 29) = 3,104; attack 1 × (1 + 0.1 × 29) = 3.9; armor 22 × (1 + 0.011 × 29) = 29.0
        damage cap 20% × 3,104 = 620.8 HP per second -> at least 5 s
-->
**Sunleia** is a winged warrior of light that guards the Pantheon of Sunleia in the desert. It is one of the [[progression/act-ii-first-steps|Act II]] bosses: killing it and [[Kamath]] completes the Bottom-Left Shard quest, which rewards the [[item:nether_remastered:seal_piece_3]], one of the four seal pieces that open the Nether.

Sunleia can be summoned again after its first defeat, so its weapon and essence can be farmed.

## Location

Sunleia waits in the Pantheon of Sunleia (`dungeons_and_combat:the_pantheon_of_sunleia`), which generates in deserts, at most once per 50 × 50 chunk area. The [[item:explorerscompass:explorerscompass]] can search for it.

The pantheon holds the **Sunleia Light**. Using the lit Sunleia Light summons Sunleia and puts the light out. Using a [[item:dungeons_and_combat:blessed_beetle]] on the dark light relights it, so it can be fought again.

## Stats

Sunleia's level is fixed at 30, so its stats never change. The quest book states it too ("Level 30"). See [[features/mobs-and-world/mob-levelling|Mob Levelling]] for how levels scale other mobs.

| Stat | Base | Level 30 |
| --- | --- | --- |
| Health | 320 HP | **3,104 HP** (1,552 hearts) |
| Attack damage | 1 | **3.9** |
| Armor | 22 | **29.0** |
| Knockback resistance | 50% | 50% |
| Movement speed | 0.2 | 0.2 |
| Follow range | 64 blocks | 64 blocks |
| Damage cap | | 20% of max health per second (620.8 HP), so a kill takes at least 5 s |

Sunleia takes no damage from fire or falling.

## Attacks

| Attack | Notes |
| --- | --- |
| Left and right slashes | |
| Left and right stabs | |
| Dual slash | 1.5 × attack damage |
| Dash slash | 1.5 × attack damage |
| Air projectile | |

Sunleia can take off and fight from the air.

<!-- TODO: attack conditions and cooldowns (procedures SunleiaActionTrigger / SunleiaOnEntityTickUpdate). -->

## Strategy

- **Its armor is high.** At 29 armor, armor-piercing damage helps.
- **Fire does nothing.** Fire Aspect and fire spells don't hurt it.
- **Sustained damage beats burst.** The damage cap blocks anything above 620.8 HP in a second, shared by every attacker.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:sunrise_sword]] | 1 | Always |
| [[item:dungeons_and_combat:essence_of_sunleia]] | 1–6 | Always |
| [[item:dungeons_and_combat:horus_klauen]] | 1–2 | Always |
| [[item:dungeons_and_combat:sunleia_music_disc]] | 1 | Always |
| [[item:dungeons_and_combat:blessed_gold_ingot]] | 0–9 | Always rolled |
| [[item:dungeons_and_combat:divine_blood_vial]] | 0–4 | Always rolled |
| [[item:dungeons_and_combat:solar_emblem]] | 0–3 | Always rolled |
| [[item:dungeons_and_combat:horuso_feather]] | 0–3 | Always rolled |
| [[item:dungeons_and_combat:estus_flask]] | 0–3 | Always rolled |

The Essence of Sunleia is traded with the essence forger. Soulrend's loot table removes the Blessed Amulet and the [[item:dungeons_and_combat:sunleia_hand]] from its drops.

### Blessed Beetle

The Blessed Beetle that resummons Sunleia is crafted from its drops:

```recipe
{ "station": "crafting_table", "grid": ["ABA", "BCB", "DBD"],
  "key": { "A": "dungeons_and_combat:horuso_feather", "B": "dungeons_and_combat:blessed_gold_ingot", "C": "dungeons_and_combat:solar_emblem", "D": "dungeons_and_combat:blessed_dust" },
  "output": "dungeons_and_combat:blessed_beetle" }
```

## Quests

**Find Structure: The Pantheon of Sunleia** ([[progression/act-ii-first-steps|Act II]], Dungeons and Combat branch) requires finding the pantheon. Rewards: a roll on the Common Loot reward table and 2 XP levels.

**Defeat Sunleia** requires killing it. Rewards:

- a roll on the Flawed Gems reward table
- a roll on the Rare Loot reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

A later quest asks for a Blessed Beetle ("To resummon Sunleia") and rewards a roll on the Chipped Gems reward table.

**Bottom-Left Shard** completes once Sunleia and Kamath are both dead. It rewards the [[item:nether_remastered:seal_piece_3]] and a [[item:skilltree:wisdom_scroll]]. See [[progression/act-ii-first-steps/dungeons-and-combat-bosses|Dungeons and Combat Bosses]].

> [!LORE] Defeat Sunleia (Act II)
> Defeat Sunleia, a radiant being of immense divine power, and prove your strength against the light itself.
