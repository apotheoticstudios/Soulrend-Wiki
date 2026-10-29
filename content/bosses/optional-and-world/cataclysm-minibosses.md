---
{
  "title": "Cataclysm Minibosses",
  "summary": "The level 200 L_Ender's Cataclysm minibosses that guard the Eight Sins' structures; no quest asks for them.",
  "aliases": ["Ignited Revenant", "Kobolediator", "Wadjet", "Coralssus", "The Prowler", "The Watcher", "Aptrgangr", "Clawdian", "Ender Golem"],
  "items": [
    "cataclysm:ignited_revenant_spawn_egg",
    "cataclysm:kobolediator_spawn_egg",
    "cataclysm:wadjet_spawn_egg",
    "cataclysm:coralssus_spawn_egg",
    "cataclysm:the_prowler_spawn_egg",
    "cataclysm:the_watcher_spawn_egg",
    "cataclysm:aptrgangr_spawn_egg",
    "cataclysm:clawdian_spawn_egg",
    "cataclysm:ender_golem_spawn_egg"
  ]
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/{ignited_revenant,kobolediator,wadjet,coralssus,the_prowler,the_watcher,aptrgangr,clawdian,ender_golem}.json (starting_level 200, max_level 1000; players cap at 200, so always 200)
  mods/L_Enders_Cataclysm-3.16.jar *_Entity.createAttributes (base stats); Animation_Monsters.setConfigattribute (health and damage multipliers; Coralssus and The Watcher have none)
  config/cataclysm.toml (Revenant, Kobolediator, Wadjet, Prowler, Aptrgangr, Clawdian, Golem health and damage multipliers 1.2; Prowler long range limit 16, Ender Golem 60)
  mods/L_Enders_Cataclysm-3.16.jar Cursed_Pyramid_Structure$Piece (Kobolediator, Wadjet), Sunken_City_Structure$Piece (Coralssus), RuinedCitadelStructure$Piece (Ender Golem), Burning_Arena_Structure$Piece (Ignited Revenant); template pools ancient_factory/mob/the_prowler, the_watcher; frosted_prison/mob/aptrgangr; acropolis/mob/clawdian
  config/paxi/datapacks/soulrend_worldgen/data/cataclysm/tags/worldgen/structure/revenant_spawn.json (betterfortresses:fortress) with Cataclysm's cataclysm_mob_spawns biome modifier
  mods/L_Enders_Cataclysm-3.16.jar data/cataclysm/loot_tables/entities/*.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/*_additions(_new).json (added by traveloptics' global loot modifiers)
  config/soulrend_core/boss_damage.toml (none listed)
  config/autoleveling-common.toml [Attributes]
  calc: level 200: health × 60.7, attack × 20.9, armor × 3.189
        Ignited Revenant 80 × 1.2 = 96 -> 5,827.2; 6 × 1.2 = 7.2 -> 150.5; armor 12 -> 38.3
        Kobolediator 180 × 1.2 = 216 -> 13,111.2; 14 × 1.2 = 16.8 -> 351.1; armor 10 -> 31.9
        Wadjet 150 × 1.2 = 180 -> 10,926; 11 × 1.2 = 13.2 -> 275.9; armor 5 -> 15.9
        Coralssus 160 -> 9,712; 10 -> 209; armor 5 -> 15.9
        The Prowler 160 × 1.2 = 192 -> 11,654.4; 14 × 1.2 = 16.8 -> 351.1; armor 10 -> 31.9
        The Watcher 25 -> 1,517.5; 5 -> 104.5; armor 5 -> 15.9
        Aptrgangr 160 × 1.2 = 192 -> 11,654.4; 18 × 1.2 = 21.6 -> 451.4; armor 10 -> 31.9
        Clawdian 225 × 1.2 = 270 -> 16,389; 16 × 1.2 = 19.2 -> 401.3; armor 12 -> 38.3
        Ender Golem 150 × 1.2 = 180 -> 10,926; 10 × 1.2 = 12 -> 250.8; armor 12 -> 38.3
-->
**Cataclysm minibosses** are the strong L_Ender's Cataclysm mobs that guard the structures of the [[progression/act-iii-into-the-flames/the-eight-sins|Eight Sins]]. Players meet them on the way to the Sins in [[progression/act-iii-into-the-flames|Act III]], but no quest requires killing them.

Every one of them has a level floor of 200, the highest level a player can reach, so they are always level 200 (see [[leveling/mob-levels|Mob Levels]]). None has a damage cap.

{{model cataclysm:clawdian cataclysm:kobolediator cataclysm:the_prowler cataclysm:aptrgangr cataclysm:wadjet cataclysm:ender_golem cataclysm:coralssus cataclysm:ignited_revenant cataclysm:the_watcher caption="The Cataclysm minibosses, in the order of the table below."}}


## Comparison

Cataclysm's config multiplies most of their base health and attack damage by 1.2 before the level bonus applies; Coralssus and The Watcher have no multiplier.

| Mob | Found in | Health (level 200) | Attack damage | Armor |
| --- | --- | --- | --- | --- |
| [[item:cataclysm:clawdian_spawn_egg]] | Acropolis ([[Scylla]]) | 16,389 HP | 401.3 | 38.3 |
| [[item:cataclysm:kobolediator_spawn_egg]] | Cursed Pyramid ([[Ancient Remnant]]) | 13,111.2 HP | 351.1 | 31.9 |
| [[item:cataclysm:the_prowler_spawn_egg]] | Ancient Factory ([[The Harbinger]]) | 11,654.4 HP | 351.1 | 31.9 |
| [[item:cataclysm:aptrgangr_spawn_egg]] | Frosted Prison ([[Maledictus]]) | 11,654.4 HP | 451.4 | 31.9 |
| [[item:cataclysm:wadjet_spawn_egg]] | Cursed Pyramid ([[Ancient Remnant]]) | 10,926 HP | 275.9 | 15.9 |
| [[item:cataclysm:ender_golem_spawn_egg]] | Ruined Citadel ([[Ender Guardian]]) | 10,926 HP | 250.8 | 38.3 |
| [[item:cataclysm:coralssus_spawn_egg]] | Sunken City ([[The Leviathan]]) | 9,712 HP | 209 | 15.9 |
| [[item:cataclysm:ignited_revenant_spawn_egg]] | Burning Arena ([[Ignis]]), Nether Fortresses | 5,827.2 HP | 150.5 | 38.3 |
| [[item:cataclysm:the_watcher_spawn_egg]] | Ancient Factory ([[The Harbinger]]) | 1,517.5 HP | 104.5 | 15.9 |

Each structure sits in the dimension of its Sin, reached with that Sin's eye (see [[items/progression-keys/cataclysm-eyes|Cataclysm Eyes]]). Ignited Revenants also spawn in Better Fortresses' Nether Fortresses.

## Drops

Spell scrolls come from Traveloptics loot tables that Soulrend adds to these mobs; each holds the named spell at a random level.

### Clawdian

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:chitin_claw]] | 1 | Always |
| [[item:cataclysm:lacrima]] | 5–8 | Always |
| [[item:irons_spellbooks:scroll]] (Herald Of Acropolis) | 1 | 60% |

### Kobolediator

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:kobolediator_skull]] | 1 | Always |
| [[item:cataclysm:koboleton_bone]] | 3–5 (Looting +1–3) | Always |
| [[item:cataclysm:ancient_metal_ingot]] | 1–3 (Looting +1–2) | Always |
| [[item:irons_spellbooks:scroll]] (Sword Of The Ancients) | 1 | 90% |

### The Prowler

It takes no damage from attackers more than 16 blocks away.

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:redstone]] | 5–9 | Always |
| [[item:minecraft:iron_ingot]] | 5–7 | Always |
| [[item:irons_spellbooks:scroll]] (Mechanized Predators) | 1 | 90% |

### Aptrgangr

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:strange_key]] | 1 | Always |
| [[item:cataclysm:black_steel_ingot]] | 1–2 (Looting +0–1) | Always |
| [[item:cataclysm:black_steel_nugget]] | 2–4 (Looting +0–2) | Always |
| [[item:minecraft:bone]] | 1–4 (Looting +0–2) | Always |
| [[item:minecraft:rotten_flesh]] | 1–4 (Looting +1–2) | Always |
| [[item:irons_spellbooks:scroll]] (Axe Of The Doomed) | 1 | 60% |
| [[item:traveloptics:aetherial_despair_ring]] | 1–3 | 20% |

### Wadjet

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:ancient_metal_ingot]] | 2–4 (Looting +1–2) | Always |
| [[item:irons_spellbooks:scroll]] (Desert Dwellers) | 1 | 70% |

### Ender Golem

It takes no damage from attackers more than 60 blocks away.

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:void_core]] | 1 | Always |
| [[item:irons_spellbooks:scroll]] (Eternal Sentinel) | 1 | 70% |

### Coralssus

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:coral_chunk]] | 1 | Always |
| [[item:irons_spellbooks:scroll]] (Coral Barrage) | 1 | 20% |

### Ignited Revenant

| Item | Count | Chance |
| --- | --- | --- |
| [[item:cataclysm:burning_ashes]] | 1 | Always |
| [[item:irons_spellbooks:scroll]] (Ashen Breath) | 1 | 25% |
| [[item:irons_spellbooks:scroll]] (Ignited Onslaught) | 1 | 58% (instead of Ashen Breath) |

Burning Ashes are needed for the [[item:cataclysm:flame_eye]] that leads to [[Ignis]].

### The Watcher

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:iron_ingot]] | 1–3 | Always |
| [[item:minecraft:redstone]] | 0–2 | Always rolled |
| [[item:irons_spellbooks:scroll]] (Mechanized Predators) | 1 | 5% |
