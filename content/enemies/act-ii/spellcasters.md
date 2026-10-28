---
{
  "title": "Spellcasters",
  "summary": "The mages of Iron's Spellbooks and its addons that live in towers across the Overworld, and the Ice Spiders of snowy dens; sources of runes, inks and school scrolls.",
  "aliases": ["Pyromancer (mob)", "Cryomancer (mob)", "Apothecarist", "Aquamancer", "Geomancer (mob)", "Ice Spider"],
  "items": [
    "irons_spellbooks:pyromancer_spawn_egg",
    "irons_spellbooks:cryomancer_spawn_egg",
    "irons_spellbooks:apothecarist_spawn_egg",
    "traveloptics:aquamancer_spawn_egg",
    "gtbcs_geomancy_plus:geomancer_spawn_egg",
    "irons_spellbooks:ice_spider_spawn_egg"
  ],
  "infobox": {
    "item": "irons_spellbooks:pyromancer_spawn_egg",
    "model": ["irons_spellbooks:pyromancer", "irons_spellbooks:cryomancer", "irons_spellbooks:apothecarist", "irons_spellbooks:ice_spider", "traveloptics:aquamancer", "gtbcs_geomancy_plus:geomancer"],
    "rows": [
      ["ID", "`irons_spellbooks:pyromancer`, `cryomancer`, `apothecarist`, `ice_spider`; `traveloptics:aquamancer`; `gtbcs_geomancy_plus:geomancer`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Location", "Mage towers and huts; Ice Spider Dens"],
      { "heading": "Drops" },
      ["Common", "[[item:irons_spellbooks:arcane_essence]], inks, a scroll of the caster's school"]
    ]
  }
}
---
<!-- sources:
  mods/irons_spellbooks-1.20.1-3.15.6.jar worldgen/structure + tags/worldgen/biome/has_structure: pyromancer_tower (#is_hill, #is_forest, #forge:is_plains, #forge:is_swamp; NBT pyromancer_tower/basement: pyromancer), mangrove_hut (#forge:is_swamp; NBT: apothecarist), mountain_tower (#is_mountain, snowy plains, snowy taiga, grove, ice spikes; NBT: cryomancer), ice_spider_den (#forge:is_snowy minus mountains and oceans; NBT cavern pieces: ice_spider)
  mods/traveloptics-6.3.0-1.20.1.jar has_structure/aqua_mage_tower (#minecraft:is_beach; NBT: aquamancer, deepling_brute, deepling_warlock)
  mods/gtbcs_geomancy_plus-2.0.0-1.20.1.jar has_structure/geomancer_tower (#is_mountain, snowy slopes, ice spikes; NBT: geomancer)
  entity classes: Pyromancer, Cryomancer, Apothecarist (NeutralWizard; prepareAttributes 60 health, 3 attack, 0.25 speed, 24 follow), Aquamancer and Geomancer (AbstractSpellCastingMob; 60 health, 3 attack, 11 armor), IceSpiderEntity (AbstractSpellCastingMob; 50 health, 8 attack, 20 armor, 0.6 knockback resistance, 0.35 speed, 32 follow)
  game-data/loot-tables.json irons_spellbooks:entities/{pyromancer,cryomancer,apothecarist,ice_spider}, traveloptics:entities/aquamancer, gtbcs_geomancy_plus:entities/geomancer; irons_spellbooks:magic_items/good_ink (common 12, uncommon 20, rare 6, epic 3), great_ink (uncommon 5, rare 17, epic 23, legendary 10)
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L10: health ×3.7, attack ×1.9, armor ×1.099; L40: ×12.7, ×4.9, ×1.429; L100: ×30.7, ×10.9, ×2.089
-->
**Spellcasters** are the mages of Iron's Spells 'n Spellbooks and its addons. Each lives in a tower or hut themed on its school of magic, and each drops a scroll of that school, inks and Arcane Essence, which makes them the main early source of school-specific spells. No quest asks for them. The **Ice Spider**, a spellcasting spider, guards dens in snowy biomes. The [[enemies/act-i/necromancer|Necromancer]], the [[bosses/optional-and-world/archevoker|Archevoker]], the [[bosses/optional-and-world/aqua-grandmaster|Aqua Grandmaster]] and the [[bosses/optional-and-world/fading-mage|Fading Mage]] have their own pages.

## Spawning

| Mob | School | Home | Biomes | Hostile? |
| --- | --- | --- | --- | --- |
| Pyromancer | Fire | Pyromancer Tower | Hills, forests, plains, swamps | Only when provoked |
| Cryomancer | Ice | Mountain Tower | Mountains, Snowy Plains, Snowy Taiga, Grove, Ice Spikes | Only when provoked |
| Apothecarist | Nature | Mangrove Hut | Swamps | Only when provoked |
| Aquamancer | Aqua (Traveloptics) | Aqua Mage Tower, with Deepling Brutes and Warlocks | Beaches | Yes |
| Geomancer | Geo (Geomancy Plus) | Geomancer Tower | Mountains, Snowy Slopes, Ice Spikes | Yes |
| Ice Spider | Ice | Ice Spider Den | Snowy biomes (not mountains or oceans) | Yes |

None of them spawns naturally outside its structure. Priests, who also drop scrolls, are village residents rather than enemies.

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). They fight mostly with spells, so their attack value matters little. The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Pyromancer, Cryomancer, Apothecarist | 60 HP / 3 / 0 | 222 HP / 5.7 / 0 | 762 HP / 14.7 / 0 | 1,842 HP / 32.7 / 0 |
| Aquamancer, Geomancer | 60 HP / 3 / 11 | 222 HP / 5.7 / 12.1 | 762 HP / 14.7 / 15.7 | 1,842 HP / 32.7 / 23 |
| Ice Spider | 50 HP / 8 / 20 | 185 HP / 15.2 / 22 | 635 HP / 39.2 / 28.6 | 1,535 HP / 87.2 / 41.8 |

The Ice Spider also has 60% knockback resistance.

## Drops

| Mob | Drops |
| --- | --- |
| Pyromancer, Cryomancer, Apothecarist | 0–8 [[item:irons_spellbooks:arcane_essence]]; a scroll with a random spell of its school (fire, ice or nature); 1–3 inks, mostly [[item:irons_spellbooks:uncommon_ink]] and [[item:irons_spellbooks:common_ink]], sometimes [[item:irons_spellbooks:rare_ink]] or [[item:irons_spellbooks:epic_ink]] |
| Aquamancer | An [[item:traveloptics:aqua_rune]]; 0–8 Arcane Essence; an Aqua scroll; 1–3 better inks, mostly Epic and Rare, with a chance of [[item:irons_spellbooks:legendary_ink]] |
| Geomancer | A [[item:gtbcs_geomancy_plus:geo_rune]]; 0–8 Arcane Essence; a Geo scroll; 1–3 inks as for the Pyromancer |
| Ice Spider | 4–16 Arcane Essence; 2–5 [[item:minecraft:string]]; [[item:irons_spellbooks:icy_fang]] at 40% (+5% per Looting level) on a player kill |

Every caster always drops its scroll; the spell's quality is random. Looting adds 0–1 Arcane Essence (0–2 for the Ice Spider).
