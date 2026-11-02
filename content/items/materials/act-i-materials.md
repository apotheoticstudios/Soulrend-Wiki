---
{
  "title": "Act I Materials",
  "aliases": [
    "Aquamarine",
    "Jade",
    "Onyx",
    "Ruby",
    "Silver Ingot",
    "Steel Ingot",
    "Wrought Ingot"
  ],
  "summary": "Early materials: vanilla drops and minerals, Samurai Dynasty gems, silver, steel and the Wrought Ingot.",
  "items": [
    "minecraft:string",
    "minecraft:leather",
    "minecraft:rabbit_hide",
    "minecraft:rabbit_foot",
    "minecraft:feather",
    "minecraft:bone",
    "minecraft:bone_meal",
    "minecraft:gunpowder",
    "minecraft:fermented_spider_eye",
    "minecraft:slime_ball",
    "minecraft:ender_pearl",
    "minecraft:ender_eye",
    "minecraft:blaze_rod",
    "minecraft:blaze_powder",
    "minecraft:magma_cream",
    "minecraft:ghast_tear",
    "minecraft:phantom_membrane",
    "minecraft:prismarine_shard",
    "minecraft:prismarine_crystals",
    "minecraft:ink_sac",
    "minecraft:glow_ink_sac",
    "minecraft:scute",
    "minecraft:honeycomb",
    "minecraft:coal",
    "minecraft:charcoal",
    "minecraft:diamond",
    "minecraft:emerald",
    "minecraft:lapis_lazuli",
    "minecraft:redstone",
    "minecraft:quartz",
    "minecraft:amethyst_shard",
    "minecraft:glowstone_dust",
    "minecraft:echo_shard",
    "minecraft:flint",
    "minecraft:clay_ball",
    "minecraft:brick",
    "minecraft:nether_brick",
    "samurai_dynasty:aquamarine",
    "samurai_dynasty:jade",
    "samurai_dynasty:onyx",
    "samurai_dynasty:ruby",
    "dungeons_and_combat:silver_ingot",
    "dungeons_and_combat:steel_ingot",
    "minecraft:iron_ingot",
    "minecraft:iron_nugget",
    "minecraft:raw_iron",
    "minecraft:gold_ingot",
    "minecraft:gold_nugget",
    "minecraft:raw_gold",
    "minecraft:copper_ingot",
    "minecraft:raw_copper",
    "astral_calamity_extras:wrought_ingot"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-26
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json, game-data/tags.json (tag-based uses: forge:ingots/steel, forge:ingots/silver, forge:gems/<gem>)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (Astral Calamity, Duskfire and HF ingot recipes)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (Gunpowder from sugar, coal and bone meal)
-->

**Act I Materials** are the materials a new player gathers first: vanilla mob drops, gems and ores, the Samurai Dynasty gems, Dungeons and Combat silver and steel, and the Wrought Ingot that starts the Astral Calamity ingot chain.

## Usage

- **Vanilla materials** work as in vanilla Minecraft. Soulrend adds one recipe: Gunpowder from sugar, coal and bone meal.
- **Samurai Dynasty gems** (Aquamarine, Jade, Onyx, Ruby) each make the matching Samurai armor in its three grades (Light, plain and Master) and a storage block. They come from their ores; Oni also drop Rubies.
- **Steel Ingot** is one of the most used materials: over 200 recipes take any steel ingot (`#forge:ingots/steel`), including the Wrought Ingot and many weapons.
- **Silver Ingot** makes Dungeons and Combat's silver tools, the Silver Shield and the Silver Orange, and Ice and Fire's Holy Dragonsilver armor.
- **Wrought Ingot** (gunpowder and steel) is the first Astral Calamity ingot. It upgrades armor into the Wrought Steel and Titan sets and is the base of the Cryonic and Tidal Ingots (see [[items/materials/act-ii-materials|Act II Materials]]).


[[item:minecraft:spider_eye]] has its own entry on another page.

## Vanilla mob drops

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:minecraft:string]] | Minecraft |  | [[craft:minecraft:string]], [[loot:minecraft:string]] |
| [[item:minecraft:leather]] | Minecraft |  | [[craft:minecraft:leather]], [[loot:minecraft:leather]] |
| [[item:minecraft:rabbit_hide]] | Minecraft |  | [[craft:minecraft:rabbit_hide]], [[loot:minecraft:rabbit_hide]] |
| [[item:minecraft:rabbit_foot]] | Minecraft |  | [[loot:minecraft:rabbit_foot]] |
| [[item:minecraft:feather]] | Minecraft |  | [[craft:minecraft:feather]], [[loot:minecraft:feather]] |
| [[item:minecraft:bone]] | Minecraft |  | [[craft:minecraft:bone]], [[loot:minecraft:bone]] |
| [[item:minecraft:bone_meal]] | Minecraft |  | [[craft:minecraft:bone_meal]], [[loot:minecraft:bone_meal]] |
| [[item:minecraft:gunpowder]] | Minecraft | Placeable | [[craft:minecraft:gunpowder]], [[loot:minecraft:gunpowder]] |
| [[item:minecraft:spider_eye]] | Minecraft | 2 hunger, 0.8 saturation | [[loot:minecraft:spider_eye]] |
| [[item:minecraft:fermented_spider_eye]] | Minecraft |  | [[craft:minecraft:fermented_spider_eye]], [[loot:minecraft:fermented_spider_eye]] |
| [[item:minecraft:slime_ball]] | Minecraft | Can be thrown | [[craft:minecraft:slime_ball]], [[loot:minecraft:slime_ball]] |
| [[item:minecraft:ender_pearl]] | Minecraft |  | [[craft:minecraft:ender_pearl]], [[loot:minecraft:ender_pearl]] |
| [[item:minecraft:ender_eye]] | Minecraft |  | [[craft:minecraft:ender_eye]], [[loot:minecraft:ender_eye]] |
| [[item:minecraft:blaze_rod]] | Minecraft | Placeable | [[craft:minecraft:blaze_rod]], [[loot:minecraft:blaze_rod]] |
| [[item:minecraft:blaze_powder]] | Minecraft |  | [[craft:minecraft:blaze_powder]], [[loot:minecraft:blaze_powder]] |
| [[item:minecraft:magma_cream]] | Minecraft |  | [[craft:minecraft:magma_cream]], [[loot:minecraft:magma_cream]] |
| [[item:minecraft:ghast_tear]] | Minecraft |  | [[loot:minecraft:ghast_tear]] |
| [[item:minecraft:phantom_membrane]] | Minecraft |  | [[loot:minecraft:phantom_membrane]] |
| [[item:minecraft:prismarine_shard]] | Minecraft |  | [[craft:minecraft:prismarine_shard]], [[loot:minecraft:prismarine_shard]] |
| [[item:minecraft:prismarine_crystals]] | Minecraft |  | [[craft:minecraft:prismarine_crystals]], [[loot:minecraft:prismarine_crystals]] |
| [[item:minecraft:ink_sac]] | Minecraft |  | [[loot:minecraft:ink_sac]] |
| [[item:minecraft:glow_ink_sac]] | Minecraft |  | [[craft:minecraft:glow_ink_sac]], [[loot:minecraft:glow_ink_sac]] |
| [[item:minecraft:scute]] | Minecraft |  | [[craft:minecraft:scute]], [[loot:minecraft:scute]] |
| [[item:minecraft:honeycomb]] | Minecraft |  | [[loot:minecraft:honeycomb]] |

## Vanilla gems and minerals

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:minecraft:coal]] | Minecraft |  | [[craft:minecraft:coal]], [[loot:minecraft:coal]] |
| [[item:minecraft:charcoal]] | Minecraft |  | [[craft:minecraft:charcoal]], [[loot:minecraft:charcoal]] |
| [[item:minecraft:diamond]] | Minecraft |  | [[craft:minecraft:diamond]], [[loot:minecraft:diamond]] |
| [[item:minecraft:emerald]] | Minecraft |  | [[craft:minecraft:emerald]], [[loot:minecraft:emerald]] |
| [[item:minecraft:lapis_lazuli]] | Minecraft |  | [[craft:minecraft:lapis_lazuli]], [[loot:minecraft:lapis_lazuli]] |
| [[item:minecraft:redstone]] | Minecraft |  | [[craft:minecraft:redstone]], [[loot:minecraft:redstone]] |
| [[item:minecraft:quartz]] | Minecraft |  | [[craft:minecraft:quartz]], [[loot:minecraft:quartz]] |
| [[item:minecraft:amethyst_shard]] | Minecraft |  | [[craft:minecraft:amethyst_shard]], [[loot:minecraft:amethyst_shard]] |
| [[item:minecraft:glowstone_dust]] | Minecraft |  | [[craft:minecraft:glowstone_dust]], [[loot:minecraft:glowstone_dust]] |
| [[item:minecraft:echo_shard]] | Minecraft |  | [[craft:minecraft:echo_shard]], [[loot:minecraft:echo_shard]] |
| [[item:minecraft:flint]] | Minecraft |  | [[craft:minecraft:flint]], [[loot:minecraft:flint]] |
| [[item:minecraft:clay_ball]] | Minecraft |  | [[craft:minecraft:clay_ball]], [[loot:minecraft:clay_ball]] |
| [[item:minecraft:brick]] | Minecraft | Can be thrown | [[craft:minecraft:brick]], [[loot:minecraft:brick]] |
| [[item:minecraft:nether_brick]] | Minecraft | Can be thrown | [[craft:minecraft:nether_brick]], [[loot:minecraft:nether_brick]] |

## Samurai Dynasty gems

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:samurai_dynasty:aquamarine]] | Samurai Dynasty |  | [[craft:samurai_dynasty:aquamarine]], [[loot:samurai_dynasty:aquamarine]] |
| [[item:samurai_dynasty:jade]] | Samurai Dynasty |  | [[craft:samurai_dynasty:jade]], [[loot:samurai_dynasty:jade]] |
| [[item:samurai_dynasty:onyx]] | Samurai Dynasty |  | [[craft:samurai_dynasty:onyx]], [[loot:samurai_dynasty:onyx]] |
| [[item:samurai_dynasty:ruby]] | Samurai Dynasty |  | [[craft:samurai_dynasty:ruby]], [[loot:samurai_dynasty:ruby]] |

## Silver

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:silver_ingot]] | dungeons and combat |  | [[craft:dungeons_and_combat:silver_ingot]], [[loot:dungeons_and_combat:silver_ingot]] |

## Steel

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:steel_ingot]] | dungeons and combat |  | [[craft:dungeons_and_combat:steel_ingot]], [[loot:dungeons_and_combat:steel_ingot]] |

## Vanilla ingots and ores

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:minecraft:iron_ingot]] | Minecraft |  | [[craft:minecraft:iron_ingot]], [[loot:minecraft:iron_ingot]] |
| [[item:minecraft:iron_nugget]] | Minecraft |  | [[craft:minecraft:iron_nugget]], [[loot:minecraft:iron_nugget]] |
| [[item:minecraft:raw_iron]] | Minecraft |  | [[craft:minecraft:raw_iron]], [[loot:minecraft:raw_iron]] |
| [[item:minecraft:gold_ingot]] | Minecraft |  | [[craft:minecraft:gold_ingot]], [[loot:minecraft:gold_ingot]] |
| [[item:minecraft:gold_nugget]] | Minecraft |  | [[craft:minecraft:gold_nugget]], [[loot:minecraft:gold_nugget]] |
| [[item:minecraft:raw_gold]] | Minecraft |  | [[craft:minecraft:raw_gold]], [[loot:minecraft:raw_gold]] |
| [[item:minecraft:copper_ingot]] | Minecraft |  | [[craft:minecraft:copper_ingot]], [[loot:minecraft:copper_ingot]] |
| [[item:minecraft:raw_copper]] | Minecraft |  | [[craft:minecraft:raw_copper]], [[loot:minecraft:raw_copper]] |

## Wrought Ingot

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:astral_calamity_extras:wrought_ingot]] | Astral Calamity Extras | A durable metal that was used to forge the Wroughtnaut's gear. |  |

{{recipes astral_calamity_extras:wrought_ingot}}

{{uses astral_calamity_extras:wrought_ingot limit=6}}
