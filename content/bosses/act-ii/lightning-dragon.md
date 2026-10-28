---
{
  "title": "Lightning Dragon",
  "summary": "An Ice and Fire dragon of jungles, badlands and savannas, found in surface roosts and sleeping in treasure caves; part of the Dragonslayer chapter.",
  "items": ["iceandfire:spawn_egg_lightning_dragon"],
  "infobox": {
    "item": "iceandfire:spawn_egg_lightning_dragon",
    "model": ["iceandfire:lightning_dragon_electric_1", "iceandfire:lightning_dragon_electric_1_male", "iceandfire:lightning_dragon_electric_2", "iceandfire:lightning_dragon_electric_2_male", "iceandfire:lightning_dragon_electric_3", "iceandfire:lightning_dragon_electric_3_male", "iceandfire:lightning_dragon_electric_4", "iceandfire:lightning_dragon_electric_4_male", "iceandfire:lightning_dragon", "iceandfire:lightning_dragon_electric_5_male", "iceandfire:lightning_dragon_amythest_1", "iceandfire:lightning_dragon_amythest_1_male", "iceandfire:lightning_dragon_amythest_2", "iceandfire:lightning_dragon_amythest_2_male", "iceandfire:lightning_dragon_amythest_3", "iceandfire:lightning_dragon_amythest_3_male", "iceandfire:lightning_dragon_amythest_4", "iceandfire:lightning_dragon_amythest_4_male", "iceandfire:lightning_dragon_amythest_5", "iceandfire:lightning_dragon_amythest_5_male", "iceandfire:lightning_dragon_copper_1", "iceandfire:lightning_dragon_copper_1_male", "iceandfire:lightning_dragon_copper_2", "iceandfire:lightning_dragon_copper_2_male", "iceandfire:lightning_dragon_copper_3", "iceandfire:lightning_dragon_copper_3_male", "iceandfire:lightning_dragon_copper_4", "iceandfire:lightning_dragon_copper_4_male", "iceandfire:lightning_dragon_copper_5", "iceandfire:lightning_dragon_copper_5_male", "iceandfire:lightning_dragon_black_1", "iceandfire:lightning_dragon_black_1_male", "iceandfire:lightning_dragon_black_2", "iceandfire:lightning_dragon_black_2_male", "iceandfire:lightning_dragon_black_3", "iceandfire:lightning_dragon_black_3_male", "iceandfire:lightning_dragon_black_4", "iceandfire:lightning_dragon_black_4_male", "iceandfire:lightning_dragon_black_5", "iceandfire:lightning_dragon_black_5_male"],
    "modelAxes": { "Color": ["Electric", "Amethyst", "Copper", "Black"], "Stage": ["1", "2", "3", "4", "5"], "Gender": ["Female", "Male"] },
    "modelStart": 9,
    "rows": [
      ["ID", "`iceandfire:lightning_dragon`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "At least 25"],
      ["Health", "2,794–3,136.9 HP (roost, level 40)"],
      ["Location", "Roosts and caves, jungles, badlands and savannas"],
      { "heading": "Drops" },
      ["Harvest", "[[item:iceandfire:dragonscales_electric]], [[item:iceandfire:lightning_dragon_flesh]], [[item:iceandfire:lightning_dragon_blood]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/iceandfire/leveling_settings/entities/lightning_dragon.json (starting_level 25, max_level 1000)
  config/iceandfire-common.toml [Dragons.Attributes] (Dragon Health 500, Dragon Attack Damage 17, Lightning breath damage 4; Dragons Drop Skull/Heart/Blood true; Dragon Griefing 0)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityLightningDragon constructor (min damage 1, max damage 1 + 17, min health 500 × 0.04 = 20, max health 500, speed 0.15-0.4) and EntityDragonBase (armor 1-20; updateAttributes: base = min + (max − min) / 125 × age in days, health and damage rounded)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar WorldGenDragonRoosts (age 40 + radius, radius 12 + rand(8) = 52-59 days) and WorldGenDragonCave (age 75 + rand(50) = 75-124 days; aging disabled)
  config/iceandfire/lightning_dragon_biomes.json / lightning_dragon_cave_biomes.json (jungle, badlands, savanna; some Terralith and BYG biomes)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/loot_tables/entities/dragon/lightning_dragon_male.json and _female.json (scales 60, flesh 40, egg 2 (female only); stack size scaled to the dragon)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDragonBase.getDragonStage (stage 1 under 25 days, 2 from 25, 3 from 50, 4 from 75, 5 from 100) and RenderDragonBase (one model for every color and stage, texture <getVariantName><stage>.png)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityLightningDragon.getVariantName (variants 0-3: electric, amythest, copper, black)
  resourcepacks/Gs ReDraco_IaF_1.20.1_v7.zip assets/iceandfire/textures/models/lightningdragon/<color>_1-5.png (model textures; loads after IceandFireExcaliburizedv3.1.zip in config/paxi/resourcepack_load_order.json)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar RenderDragonBase.getTextureLocation (males: EnumDragonTextures male overlay male_<color>.png drawn over the body texture)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDragonBase.finalizeSpawn (setGender(random.nextBoolean())), canMate (same class, opposite genders); WorldGenDragonRoosts.place (gender = nextBoolean) and WorldGenDragonCave (isMale = nextBoolean; gold pile on 1 in max(1, Dragon Den Gold Amount) × (male ? 1 : 2) blocks; chest DRAGON_MALE_CHEST or DRAGON_CHEST)
  config/iceandfire-common.toml "Dragon Den Gold Amount" = 4
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar assets/iceandfire/lang/en_us.json dragon.gender ("Gender:"), item.iceandfire.lightning_stew.jei_desc
  game-data/loot-tables.json iceandfire:chest/lightning_dragon_male_cave (1-6 rolls) and lightning_dragon_female_cave (1-4 rolls)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/dragonslayer.snbt ("Dragons", "Lightning Dragon", Dragonslayer, egg quests); act_2.snbt (chapter link)
  calc: base by age: roost 52-59 days -> health 220-247, attack 8-9, armor 8.9-10; cave 75-124 days -> health 308-496, attack 11-18, armor 12.4-19.8
        level multipliers: L40 health × 12.7, attack × 4.9, armor × 1.429; L100 health × 30.7, attack × 10.9, armor × 2.089
-->
**Lightning Dragon** is one of the three elemental dragons of Ice and Fire, breathing lightning. Wild Lightning Dragons live in jungles, badlands and savannas: younger dragons guard roosts on the surface, and older ones sleep on gold in underground caves. They are the targets of the [[progression/side-chapters/dragonslayer|Dragonslayer]] chapter, which opens from [[progression/act-ii-first-steps|Act II]].

## Location

Lightning Dragons generate with the world in jungles, badlands and savannas:

- **Roosts** on the surface hold a stage 3 dragon, 52–59 days old.
- **Caves** underground hold a sleeping stage 4 or 5 dragon, 75–124 days old, on piles of gold. Cave dragons don't age.

A [[item:dragonradarmod:lightning_radar]] finds the location of Lightning Dragons.

## Stats

A dragon's base stats grow with its age in days, up to 125 days. Soulrend's level system then multiplies them: Lightning Dragons have a level floor of 25, so their level is the nearest player's Soulrend level, but never less than 25 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Roost (base) | Cave (base) | Roost, level 40 | Cave, level 40 | Roost, level 100 | Cave, level 100 |
| --- | --- | --- | --- | --- | --- | --- |
| Health | 220–247 HP | 308–496 HP | 2,794–3,136.9 HP | 3,911.6–6,299.2 HP | 6,754–7,582.9 HP | 9,455.6–15,227.2 HP |
| Attack damage | 8–9 | 11–18 | 39.2–44.1 | 53.9–88.2 | 87.2–98.1 | 119.9–196.2 |
| Armor | 8.9–10 | 12.4–19.8 | 12.7–14.2 | 17.7–28.4 | 18.6–20.8 | 25.9–41.5 |
| Damage cap | | | None | None | None | None |

A fully grown dragon (125 days) has 500 base health and 18 base attack damage.

Each dragon has one of four **colors**: Electric, Amethyst, Copper or Black. Its look also changes with its **stage**, which comes from its age: stage 1 under 25 days old, then one stage every 25 days, up to stage 5 from 100 days. The model in the infobox can show every color at every stage, for both genders.

## Attacks

| Attack | Notes |
| --- | --- |
| Bite and claws | Melee, based on attack damage. |
| Lightning breath | 4 base damage per hit (config). |

Dragons fly and fight both in the air and on the ground.

## Strategy

- **Roosts are the easier fight.** Roost dragons are younger, with about half the base health of an old cave dragon.
- **Cave dragons are asleep.** Their caves hold piles of gold, and they are the only source of dragon eggs.
- **No damage cap.** Dragons aren't on Soulrend's boss list, so burst damage works.

## Drops

A dead dragon leaves a corpse. Right-clicking the body with an empty hand harvests its loot:

| Item | Chance per harvest |
| --- | --- |
| [[item:iceandfire:dragonscales_electric]] | 60 in 100 (60 in 102 for females) |
| [[item:iceandfire:lightning_dragon_flesh]] | 40 in 100 (40 in 102 for females) |
| [[item:iceandfire:dragonegg_electric]] | Females only, 2 in 102 |

Stack sizes grow with the dragon's size, and scales and eggs take the dragon's color. Dragons also drop their skull, heart and [[item:iceandfire:lightning_dragon_blood]] (all turned on in Soulrend's config).

> [!NOTE] Dragon eggs
> The Dragonslayer chapter says that eggs come from female dragons of stage 4 or more, the ones sleeping in caves.

## Males and Females

Every dragon is male or female; the dragon's screen shows its "Gender". Wild Lightning Dragons are either at random, in roosts and in caves alike. The two look the same except for the wings: males have a pattern of veins on the wing membranes.

- **Eggs.** Only females drop eggs (see [Drops](#drops)), and only a male and a female Lightning Dragon can breed. The [[item:iceandfire:lightning_stew]] is the breeding food: "The female will create a nest with an egg afterwards."
- **Cave gold.** Gold piles cover about 1 in 4 of the floor blocks in a male's cave and 1 in 8 in a female's.
- **Cave chest.** The chest in a male's cave is filled 1–6 times from a richer table: stacks of up to 25 iron ingots, bones and copper ingots, enchanted books, enchanted diamond and iron gear, and sometimes an enchanted golden apple. A female's chest is filled 1–4 times, with stacks of up to 10 iron ingots, bones and copper ingots, unenchanted copper gear, more amethyst shards and more cobwebs.

## Quests

**Dragons** ([[progression/side-chapters/dragonslayer|Dragonslayer]]) starts the chapter and gives the [[item:iceandfire:bestiary]].

**Lightning Dragon** requires killing one. Rewards:

- an Epic Lightning gem ([[item:apotheosis:gem]])
- 5 XP levels

It opens the **Lightning Radar** quest (craft a [[item:dragonradarmod:lightning_radar]]; rewards: 2 [[item:iceandfire:dragonscales_electric]] and 1 XP level) and **Your First Dragon Egg**.

**Dragonslayer** completes once a Fire, an Ice and a Lightning Dragon are dead. Rewards: a [[item:fantasy_armor:dragonslayer_chestplate]] with one gem socket and a choice from the Chipped Gems reward table.

The other elemental dragons are [[Fire Dragon]] and [[Ice Dragon]].
