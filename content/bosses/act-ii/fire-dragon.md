---
{
  "title": "Fire Dragon",
  "summary": "An Ice and Fire dragon of hot Overworld biomes (except jungles, badlands and savannas) and dry, warm plains, found in surface roosts and sleeping in treasure caves; part of the Dragonslayer chapter.",
  "items": ["iceandfire:spawn_egg_fire_dragon"],
  "infobox": {
    "item": "iceandfire:spawn_egg_fire_dragon",
    "model": "iceandfire:fire_dragon",
    "rows": [
      ["ID", "`iceandfire:fire_dragon`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "At least 25"],
      ["Health", "2,794–3,136.9 HP (roost, level 40)"],
      ["Location", "Roosts and caves, hot Overworld biomes (except jungles, badlands and savannas) and dry, warm plains"],
      { "heading": "Drops" },
      ["Harvest", "[[item:iceandfire:dragonscales_red]], [[item:iceandfire:fire_dragon_flesh]], [[item:iceandfire:fire_dragon_blood]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/iceandfire/leveling_settings/entities/fire_dragon.json (starting_level 25, max_level 1000)
  config/iceandfire-common.toml [Dragons.Attributes] (Dragon Health 500, Dragon Attack Damage 17, Fire breath damage 2.5; Dragons Drop Skull/Heart/Blood true; Dragon Griefing 0)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityFireDragon constructor (min damage 1, max damage 1 + 17, min health 500 × 0.04 = 20, max health 500, speed 0.15-0.4) and EntityDragonBase (armor 1-20; updateAttributes: base = min + (max − min) / 125 × age in days, health and damage rounded)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar WorldGenDragonRoosts (age 40 + radius, radius 12 + rand(8) = 52-59 days) and WorldGenDragonCave (age 75 + rand(50) = 75-124 days; aging disabled)
  config/iceandfire/fire_dragon_biomes.json / fire_dragon_cave_biomes.json (forge:is_hot/overworld without jungle, badlands, savanna; dry non-cold plains; some Terralith and BYG biomes)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/loot_tables/entities/dragon/fire_dragon_male.json and _female.json (scales 60, flesh 40, egg 2 (female only); stack size scaled to the dragon)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/dragonslayer.snbt ("Dragons", "Fire Dragon", Dragonslayer, egg quests); act_2.snbt (chapter link)
  calc: base by age: roost 52-59 days -> health 220-247, attack 8-9, armor 8.9-10; cave 75-124 days -> health 308-496, attack 11-18, armor 12.4-19.8
        level multipliers: L40 health × 12.7, attack × 4.9, armor × 1.429; L100 health × 30.7, attack × 10.9, armor × 2.089
-->
**Fire Dragon** is one of the three elemental dragons of Ice and Fire, breathing fire. Wild Fire Dragons live in hot Overworld biomes (except jungles, badlands and savannas) and dry, warm plains: younger dragons guard roosts on the surface, and older ones sleep on gold in underground caves. They are the targets of the [[progression/side-chapters/dragonslayer|Dragonslayer]] chapter, which opens from [[progression/act-ii-first-steps|Act II]].

## Location

Fire Dragons generate with the world in hot Overworld biomes (except jungles, badlands and savannas) and dry, warm plains:

- **Roosts** on the surface hold a dragon 52–59 days old.
- **Caves** underground hold a sleeping dragon 75–124 days old, on piles of gold. Cave dragons don't age.

A [[item:dragonradarmod:fire_radar]] finds the location of Fire Dragons.

## Stats

A dragon's base stats grow with its age in days, up to 125 days. Soulrend's level system then multiplies them: Fire Dragons have a level floor of 25, so their level is the nearest player's Soulrend level, but never less than 25 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Roost (base) | Cave (base) | Roost, level 40 | Cave, level 40 | Roost, level 100 | Cave, level 100 |
| --- | --- | --- | --- | --- | --- | --- |
| Health | 220–247 HP | 308–496 HP | 2,794–3,136.9 HP | 3,911.6–6,299.2 HP | 6,754–7,582.9 HP | 9,455.6–15,227.2 HP |
| Attack damage | 8–9 | 11–18 | 39.2–44.1 | 53.9–88.2 | 87.2–98.1 | 119.9–196.2 |
| Armor | 8.9–10 | 12.4–19.8 | 12.7–14.2 | 17.7–28.4 | 18.6–20.8 | 25.9–41.5 |
| Damage cap | | | None | None | None | None |

A fully grown dragon (125 days) has 500 base health and 18 base attack damage.

## Attacks

| Attack | Notes |
| --- | --- |
| Bite and claws | Melee, based on attack damage. |
| Fire breath | 2.5 base damage per hit (config). |

Dragons fly and fight both in the air and on the ground.

## Strategy

- **Roosts are the easier fight.** Roost dragons are younger, with about half the base health of an old cave dragon.
- **Cave dragons are asleep.** Their caves hold piles of gold, and they are the only source of dragon eggs.
- **No damage cap.** Dragons aren't on Soulrend's boss list, so burst damage works.

## Drops

A dead dragon leaves a corpse. Right-clicking the body with an empty hand harvests its loot:

| Item | Chance per harvest |
| --- | --- |
| [[item:iceandfire:dragonscales_red]] | 60 in 100 (60 in 102 for females) |
| [[item:iceandfire:fire_dragon_flesh]] | 40 in 100 (40 in 102 for females) |
| [[item:iceandfire:dragonegg_red]] | Females only, 2 in 102 |

Stack sizes grow with the dragon's size, and scales and eggs take the dragon's color. Dragons also drop their skull, heart and [[item:iceandfire:fire_dragon_blood]] (all turned on in Soulrend's config).

> [!NOTE] Dragon eggs
> The Dragonslayer chapter says that eggs come from female dragons of stage 4 or more, the ones sleeping in caves.

## Quests

**Dragons** ([[progression/side-chapters/dragonslayer|Dragonslayer]]) starts the chapter and gives the [[item:iceandfire:bestiary]].

**Fire Dragon** requires killing one. Rewards:

- an Epic Solar gem ([[item:apotheosis:gem]])
- 5 XP levels

It opens the **Fire Radar** quest (craft a [[item:dragonradarmod:fire_radar]]; rewards: 2 [[item:iceandfire:dragonscales_red]] and 1 XP level) and **Your First Dragon Egg**.

**Dragonslayer** completes once a Fire, an Ice and a Lightning Dragon are dead. Rewards: a [[item:fantasy_armor:dragonslayer_chestplate]] with one gem socket and a choice from the Chipped Gems reward table.

The other elemental dragons are [[Ice Dragon]] and [[Lightning Dragon]].
