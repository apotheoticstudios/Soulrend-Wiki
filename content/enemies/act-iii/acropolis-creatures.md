---
{
  "title": "Acropolis Creatures",
  "summary": "L_Ender's Cataclysm's sea creatures that guard the Acropolis, Scylla's structure: Hippocamtus, Cindaria, Urchinkin and Drowned Hosts; always level 200.",
  "aliases": ["Hippocamtus", "Cindaria", "Urchinkin", "Drowned Host", "Symbiocto", "Octohost"],
  "items": ["cataclysm:hippocamtus_spawn_egg", "cataclysm:cindaria_spawn_egg", "cataclysm:urchinkin_spawn_egg", "cataclysm:octohost_spawn_egg", "cataclysm:symbiocto_spawn_egg"],
  "infobox": {
    "item": "cataclysm:hippocamtus_spawn_egg",
    "rows": [
      ["ID", "`cataclysm:hippocamtus`, `cindaria`, `urchinkin`, `drowned_host`, `symbiocto`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "200 (floor)"],
      ["Location", "The Acropolis (Cataclysm dimension)"],
      { "heading": "Drops" },
      ["Common", "[[item:cataclysm:lacrima]]"]
    ]
  }
}
---
<!-- sources:
  mods/L_Enders_Cataclysm-3.16.jar data/cataclysm/worldgen/template_pool/acropolis/mob/{hippocamtus,cindaria,urchinkin,octohost_sword,octohost_trident,clawdian}.json; structure NBT octohost_* (drowned_host carrying a symbiocto)
  config/cataclysm_dimension/cataclysm_dimension.json (structures generate in the Cataclysm dimensions)
  mods/L_Enders_Cataclysm-3.16.jar Hippocamtus_Entity (85 health, 10 attack, 15 armor, 0.7 knockback resistance, 0.28 speed, 30 follow), Cindaria_Entity (60, 7, 0, 0.28, 30), Urchinkin_Entity (12, 3, 0, 0.37, 20), Drowned_Host_Entity (zombie attributes: 20, 3, 2 armor, 0.23, 20 follow), Symbiocto_Entity (16, 3, 0.3); no multipliers in config/cataclysm.toml for these
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/{hippocamtus,cindaria,urchinkin,drowned_host,symbiocto}.json (starting_level 200)
  game-data/loot-tables.json cataclysm:entities/{hippocamtus,cindaria,urchinkin,drowned_host,symbiocto}
  calc: L200: health ×60.7, attack ×20.9, armor ×3.189
-->
The **Acropolis** is L_Ender's Cataclysm's sunken temple, home of [[Scylla]], one of the bosses of [[progression/act-iii-into-the-flames|Act III]]. Its halls are guarded by sea creatures: the armored **Hippocamtus**, the jellyfish-like **Cindaria**, small spiny **Urchinkin**, and **Drowned Hosts** carrying a **Symbiocto**. All of them have Cataclysm's level floor of 200, and they are the main source of [[item:cataclysm:lacrima]]. The Acropolis's Clawdian is on [[bosses/optional-and-world/cataclysm-minibosses|Cataclysm Minibosses]].

## Spawning

None of them spawns naturally. They are placed in the Acropolis when it generates; in Soulrend, Cataclysm's structures generate in the Cataclysm dimensions.

## Stats

Their level floor is 200, and the player's level stops at 200, so in practice they are always level 200. The table gives health / attack damage / armor.

| Mob | Base | Level 200 |
| --- | --- | --- |
| Hippocamtus | 85 HP / 10 / 15 | 5,159.5 HP / 209 / 47.8 |
| Cindaria | 60 HP / 7 / 0 | 3,642 HP / 146.3 / 0 |
| Urchinkin | 12 HP / 3 / 0 | 728.4 HP / 62.7 / 0 |
| Drowned Host | 20 HP / 3 / 2 | 1,214 HP / 62.7 / 6.4 |
| Symbiocto | 16 HP / 3 / 0 | 971.2 HP / 62.7 / 0 |

The Hippocamtus is the toughest, with heavy armor and 70% knockback resistance. Urchinkin are small but fast (0.37).

## Drops

| Mob | Drops |
| --- | --- |
| Hippocamtus | 1–4 [[item:cataclysm:lacrima]] (Looting adds 1–2) |
| Cindaria | 1–4 Lacrima (Looting adds 1–2) |
| Urchinkin | Lacrima at 15% (+5% per Looting level), player kill |
| Drowned Host | 0–2 [[item:minecraft:rotten_flesh]]; Lacrima at 11% (+2%), player kill |
| Symbiocto | 1–3 [[item:minecraft:ink_sac]]; Lacrima at 2.5% (+1%), player kill |

{{uses cataclysm:lacrima limit=8}}
