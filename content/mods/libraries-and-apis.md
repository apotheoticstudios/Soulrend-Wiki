---
{
  "title": "Libraries & APIs",
  "navTitle": "Libraries",
  "category": "Mods",
  "order": 22,
  "summary": "Code libraries other mods depend on. No gameplay of their own.",
  "icon": "minecraft:book"
}
---
<!-- sources: mods/*.jar (mods.toml; the "used by" lists are the required dependencies declared by the other installed jars), minecraftinstance.json (CurseForge links), CurseForge summaries -->
Code libraries other mods depend on. They add no gameplay of their own. Each entry says which installed mods require it, taken from the dependencies the jars declare. "No installed mod requires it" means no jar lists it as a mandatory dependency, so it is there as an optional dependency, for a mod's own use or left over from an update.

## Core platforms and loaders

- **Architectury API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/architectury-api)) — a cross-loader layer for mod authors. Required by KubeJS, FTB Quests, FTB Library, FTB Teams, FTB Ranks, FTB XMod Compat, FTB Filter System, Panda's Falling Trees, Furnish, Epic Knights and Not Enough Recipe Book, among others.
- **Sinytra Connector** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/sinytra-connector)) — lets Fabric-built mods load on Forge. Together with Forgified Fabric API it is how the pack's Fabric-format mods run.
- **Forgified Fabric API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/forgified-fabric-api)) — the Fabric API ported to Forge, for mods loaded through Connector. No installed mod requires it by id.
- **Connector Extras** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/connector-extras)) — adds compatibility between Connector and other mods' APIs. No installed mod requires it.
- **Kotlin for Forge** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/kotlin-for-forge)) — a language loader for mods written in Kotlin.
- **Kambrik** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/kambrik)) — a Kotlin framework library. No installed mod requires it.
- **Rhino** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/rhino)) — KubeJS's JavaScript engine, a fork of Mozilla Rhino.

## Animation, models and rendering

- **GeckoLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/geckolib)) — animates entities, items, blocks and armor from Bedrock-format models. Required by Iron's Spellbooks, Iron's Lib, Dungeons And Combat x Iron's Spells, Mowzie's Mobs, The Graveyard, Souls like Bosses Reforged and Soulslike Weaponry, among others.
- **AzureLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/azurelib)) — a GeckoLib-style animation library used by some of the pack's items and entities.
- **playerAnimator** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/playeranimator)) — plays custom animations on the player model. Required by Iron's Spellbooks and Dungeons And Combat x Iron's Spells for casting poses.
- **Lionfish API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/lionfish-api)) — a light animation API required by L_Ender's Cataclysm.
- **Citadel** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/citadel)) — Alexthe666's shared library, required by Alex's Mobs, Alex's Caves and Ice and Fire.
- **Pehkui** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/pehkui)) — resizes entities. Required by Soulrend Origins.
- **Prism** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/prism-lib)) — a color library, required by Item Borders.
- **Fragmentum** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fragmentum)) — a framework for the Obscuria mods, required by Loot Journal and Obscure Tooltips.
- **Obscure API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/obscure-api)) — the core of the Obscuria collection, required by Aquamirae.
- **CreativeCore** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/creativecore)) — a core library, required by ItemPhysic Full.
- **Sodium/Embeddium Options API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/sodium-options-api)) — lets mods add pages to the Embeddium video settings. No installed mod requires it.

## Items, attributes and gear

- **Curios API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/curios)) — the accessory slot system. Required by Apothic Curios, Corpse x Curios API Compat, Dungeons And Combat x Iron's Spells, Epic Fight: Curios Compat, Icarus, Iron's Spellbooks, KubeJS Iron's Spells, Samurai Dynasty and Too Many Bows.
- **Caelus API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/caelus)) — exposes elytra-style flight as an attribute. Required by Icarus and Dungeons And Combat x Iron's Spells.
- **Placebo** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/placebo)) — Shadows' library. Required by Apotheosis, Ancient Reforging, Apothic Attributes, FastFurnace, FastSuite and Toast Control.
- **Projectile Damage Attribute** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/projectile-damage-attribute)) — adds an attribute that scales ranged weapon damage, so ranged builds can be tuned. No installed mod requires it.
- **Ranged Weapon API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ranged-weapon-api)) — a library for bows and crossbows, required by Soulslike Weaponry.
- **Fallen Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fallen-lib)) — a runtime extension library, required by Fallen Gems & Affixes and Soulrend Tweaks.
- **Iron's Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/irons-lib)) — shared content and code for Iron's mods, required by Iron's Spells 'n Spellbooks.
- **GTBC's SpellLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/gtbcs-spelllib)) — shared code for GTBC's Iron's Spellbooks add-ons, required by GTBC's Geomancy Plus.
- **FamiliarsLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/familiarslib)) — the library behind Alshanex's Familiars. No installed mod requires it by id.
- **Library of Exile** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/library-of-exile)) — a library for the Mine and Slash family of mods. Anti Mob Farm requires it.
- **Item Production Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/item-production-lib)) — tools for tracking item production. No installed mod requires it.

## Configuration

- **Cloth Config API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/cloth-config)) — a config screen API. Required by Epic Knights, Medieval Buildings [Nether Edition], Medieval Buildings [End Edition], Simply Swords and StartInv.
- **YetAnotherConfigLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/yacl)) — a config builder, required by Structurify.
- **Resourceful Config** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/resourceful-config)) — a cross-loader config library, required by Icarus and Structure Layout Optimizer.
- **Fzzy Config** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fzzy-config)) — a config API with automatic screens and validation, required by Particle Core and Subtle Effects.
- **MezzConfig** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/mezzconfig)) — a client and server config library, required by JEI.
- **Searchables** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/searchables)) — search-bar helpers, required by Controlling.
- **Almanac Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/almanac-lib)) — shared code for several mods, plus a fix for empty NBT issues. No installed mod requires it.
- **Atlas Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/atlas-lib)) — a serialization and math library. No installed mod requires it.
- **BaguetteLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/baguettelib)) — adds extra events for mod authors. Required by Corpse x Curios API Compat.
- **Data Anchor** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/data-anchor)) — helpers for attaching data to entities, chunks, players and worlds. No installed mod requires it.
- **Immersive Messages API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/immersive-messages-api)) — shows in-game help and story messages for mods and packs. No installed mod requires it.
- **Integrated API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/integrated-api)) — the library for the Integrated Structures series, required by Integrated Dungeons and Structures, Integrated Cataclysm, Integrated Stronghold and Integrated Villages.

## Shared code for specific mod families

- **Balm** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/balm)) — Blay's multi-loader layer, required by Default Options and Waystones.
- **Blueprint** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/blueprint)) — the framework behind the Abnormals mods. No installed mod requires it.
- **Bookshelf** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/bookshelf)) — Darkhax's library, required by Enchantment Descriptions and Runelic.
- **Collective** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/collective)) — Serilum's shared library for his mods.
- **Common Network** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/common-network)) — unified networking, required by Icarus.
- **CorgiLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/corgilib)) — Corgi Taco's library. No installed mod requires it.
- **CoroUtil** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/coroutil)) — a library for weather and zombie-awareness mods, required by Mobtimizations.
- **Cristel Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/cristel-lib)) — a structure config and runtime datapack library, required by William Wythers' Expanded Ecosphere and Towns and Towers.
- **Cupboard** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/cupboard)) — utilities required by Biome Music, Chunk Sending, Connectivity, Fast Async World Save, Loot Integrations, Server Performance - Smooth Chunk Save and Structure Essentials.
- **Cyclops Core** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/cyclops-core)) — the library for EvilCraft and Integrated Dynamics, required by IconExporter.
- **Framework** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/framework)) — MrCrayfish's shared library. No installed mod requires it by id.
- **FTB Library** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge)) — common GUI code for the FTB mods, required by FTB Quests, FTB Teams, FTB Ranks and FTB XMod Compat.
- **Iceberg** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/iceberg)) — events and helpers, required by Advancement Plaques, Item Highlighter, Item Borders and Merchant Markers.
- **JamLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/jamlib)) — the library for JamCoreModding's mods. No installed mod requires it by id.
- **Kiwi** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/kiwi)) — a modding library, required by Passable Foliage.
- **Konkrete** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/konkrete)) — Keksuccino's library, required by FancyMenu, Drippy Loading Screen, Just Zoom and Modern World Creation.
- **LibX** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/libx)) — shared code for Melanx's mods. No installed mod requires it.
- **Melody** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/melody)) — plays background music with OpenAL, required by FancyMenu.
- **Moonlight Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/selene)) — the library behind Supplementaries and Amendments, also required by Every Compat, Immersive Weathering, Fast Paintings and the Target Dummy.
- **Moog's Structure Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/moogs-structure-lib)) — required by Moog's End Structures and Moog's Voyager Structures.
- **Necronomicon API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/necronomicon)) — a utility library required by Item Obliterator and You Shall Not Spawn!.
- **PandaLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/pandalib)) — a config and model library, required by Panda's Falling Trees.
- **Puzzles Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/puzzles-lib)) — a shared library required by Climate Rivers, Overflowing Bars and Stylish Effects.
- **Resourceful Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/resourceful-lib)) — Team Resourceful's library, required by Friends&Foes and Handcrafted.
- **ShatterLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/shatterbyte-lib)) — a shared library from OctoStudios, required by Not Enough Recipe Book.
- **Structure Gel API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/structure-gel-api)) — a structure-generation API. No installed mod requires it.
- **TenshiLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/tenshilib)) — a core library required by Improved Mobs.
- **TerraBlender** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/terrablender)) — adds biomes through a compatible region system, required by Climate Rivers and Nature's Spirit.
- **TxniLib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/txnilib)) — a multiversion library, required by Toni's Immersive Lanterns and Immersive Messages API.
- **Lithostitched** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/lithostitched)) — adds worldgen configurability, required by Abridged and Deeper Oceans.
- **YUNG's API** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/yungs-api)) — the library for YUNG's mods, also required by Paxi and Traveler's Titles.
- **Zeta** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/zeta)) — the library behind Quark.
