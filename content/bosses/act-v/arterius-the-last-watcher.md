---
{
  "title": "Arterius, the Last Watcher",
  "summary": "The NightFall boss at the Gate of Disaster in the Past; Soulrend raises its base health to 12,000 and its attack to 2,000.",
  "aliases": ["Arterius", "The Last Watcher"],
  "items": ["nightfall_invade:arterius_spawn_egg"],
  "infobox": {
    "item": "nightfall_invade:arterius_spawn_egg",
    "model": "nightfall_invade:arterius",
    "rows": [
      ["ID", "`nightfall_invade:arterius`"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Health", "728,400 HP (level 200)"],
      ["Location", "Gate of Disaster, the Past"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:efn:duskfire_ingot]] ×2–6"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (CONFIG.PAST.BOSSES: renamed "Arterius, The Last Watcher" in white; max health base 12,000, attack damage base 2,000, health set to 12,000 on spawn; no soldiers spawn within 96 blocks of it; Past is graveyard:past)
  mods/nightfall_invade-1.3.3.jar Arterius.createAttributes (400 max health, 4 attack damage, 30 armor, 20 armor toughness, 0.25 knockback resistance, 0.45 movement speed, 64 follow range; Epic Fight: 4 impact, 25 armor negation, 16 stun armor, 50 max stamina)
  config/nightfall_invade-common.toml ["Arterius Config"] (hit: +1.2% of target max health; debuff level 5 for 60 ticks; vs debuffed targets +30% of attack and +5% of target max health; +100% of attack as fire damage; single hits capped at 8% of its max health; damage reduction rises after 4% of max health taken, reaching 90% at 12%, and decays to 0 over 160 ticks)
  mods/nightfall_invade-1.3.3.jar GateOfDisaster$Piece (spawns NFIEntities.ARTERIUS); config/paxi/datapacks/soulrend_worldgen/data/nightfall_invade/worldgen/structure/gate_of_disaster.json (biome soulrend:dead_wasteland) and the jar's structure_set (spacing 70, separation 45)
  mods/nightfall_invade-1.3.3.jar data/nightfall_invade/loot_tables/entities/arterius.json (Duskfire Ingot, 2-6 rolls, player kill)
  config/soulrend_core/boss_damage.toml (not listed)
  config/ftbquests/quests/chapters/duties.snbt (Emblem of the Past, Visit the Past, Enter Gate Of Disaster, Defeat The Last Watcher Arterius, Blessing of Mortusest)
  calc: Past base × level 200 multipliers (health × 60.7, attack × 20.9, armor × 3.189)
        L200: health 12,000 × 60.7 = 728,400; attack 2,000 × 20.9 = 41,800; armor 30 × 3.189 = 95.7
        hit cap 8% = 58,272; reduction starts at 4% = 29,136, maximum at 12% = 87,408
-->
**Arterius, the Last Watcher** is a flame-wielding knight from NightFall: Invade who guards the Gate of Disaster. In Soulrend the gate only exists in the Past, the dimension of [[progression/act-v-duties|Act V]], and Arterius is one of the act's two bosses. In game it appears as **Arterius, The Last Watcher**.

## Location

Arterius waits at the Gate of Disaster (`nightfall_invade:gate_of_disaster`), which Soulrend places only in the Dead Wasteland biome of the Past, at most once per 70 × 70 chunk area. The Past is reached with the [[item:kubejs:emblem_of_the_past]] (see [[progression/act-v-duties/visit-the-past#The Past|The Past]]).

No Past soldiers spawn within 96 blocks of Arterius.

## Stats

The NightFall mod gives Arterius 400 health and 4 attack damage. In the Past, Soulrend replaces those bases with 12,000 health and 2,000 attack damage when it spawns, and the level bonus then multiplies the new bases. It has no level setting, so its level is the nearest player's Soulrend level. The last column uses Act V's typical level, the player cap of 200 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Mod base | Past base | Level 200 |
| --- | --- | --- | --- |
| Health | 400 HP | 12,000 HP | **728,400 HP** (364,200 hearts) |
| Attack damage | 4 | 2,000 | **41,800** |
| Armor | 30 | 30 | **95.7** |
| Armor toughness | 20 | 20 | 20 |
| Knockback resistance | 25% | 25% | 25% |
| Movement speed | 0.45 | 0.45 | 0.45 |

Arterius isn't on Soulrend's boss damage list, but the NightFall config gives it its own defenses:

- A single hit can't take more than 8% of its maximum health (58,272 HP at level 200).
- After it has taken 4% of its maximum health (29,136 HP), it starts reducing damage, up to 90% once it has taken 12% (87,408 HP). The reduction fades back to 0 over 8 s.

## Attacks

Arterius fights with Epic Fight animations. Each hit:

- deals extra damage equal to 1.2% of the target's maximum health;
- adds fire damage equal to its attack damage;
- applies a level 6 debuff for 3 s.

Hits on a target that already has the debuff deal 30% more of its attack damage and 5% of the target's maximum health on top.

<!-- TODO: attack list (ArteriusAI and its Epic Fight patch). -->

## Strategy

- **Spread damage out.** Burst damage runs into the 8% per-hit cap and then the damage reduction, which takes 8 s to fade.
- **Avoid back-to-back hits.** Its debuff makes every following hit stronger.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:efn:duskfire_ingot]] | 2–6 | Player kill |

## Quests

In the [[progression/act-v-duties|Act V – Duties]] chapter, a quest asks for the Emblem of the Past, then **Visit the Past** and **Enter Gate Of Disaster** (5 XP levels).

**Defeat The Last Watcher Arterius** requires killing it. Rewards:

- [[item:efn:hf_murasama]]
- a roll on the Perfect Gems reward table
- 50 XP levels

Together with [[Ó Brolacháin, the Scarlet Hunter]] it opens **Blessing of Mortusest**, which rewards the [[item:cataclysm:zweiender]]. See [[progression/act-v-duties/defeat-arterius|Defeat Arterius]].
