---
{
  "title": "Performance Mods",
  "navTitle": "Performance",
  "category": "Mods",
  "order": 19,
  "summary": "Rendering, memory, loading and server optimisations.",
  "icon": "minecraft:clock"
}
---
<!-- sources: mods/*.jar (mods.toml), minecraftinstance.json (CurseForge links), CurseForge summaries -->
Mods that raise frame rate, cut memory use, speed up loading or lighten the server. None changes gameplay. The pack is heavy (about 420 jars, many animated models), so these cover most of what keeps it playable.

## Rendering (client)

- **Embeddium** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/embeddium)) — a Forge fork of Sodium that replaces the renderer for much higher frame rates. Several other entries here plug into it.
- **(Sodium) Chloride** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/chloride)) — adds performance and quality features to Embeddium, including an optional FPS display.
- **Flerovium** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/flerovium)) — speeds up entity rendering with little visual change.
- **ImmediatelyFast** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/immediatelyfast)) — speeds up immediate-mode rendering, which text, HUD elements and some entity renderers use.
- **Enhanced Block Entities** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/enhanced-block-entities)) — renders chests, signs and similar block entities faster, and lets resource packs customize them.
- **Entity Culling** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/entityculling)) — hides entities and block entities that can't be seen, using path-tracing.
- **CullLessLeaves Reforged** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/culllessleaves-reforged)) — improves frame rate on leaves by changing how they are culled.
- **Particle Core** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/particle-core)) — culls and reduces particles, with per-type spawn reduction.
- **Fast Paintings** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fast-paintings)) — turns paintings into blocks, which render much faster.
- **Create Better FPS** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/create-better-fps)) — improves frame rate around Create contraptions.
- **Gnetum** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/gnetum)) — spreads HUD updates over several frames.
- **Epic Fight FPS Optimizer** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-fps-optimizer)) — lowers the cost of distant animations and visual effects in Epic Fight.
- **Dynamic FPS** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/dynamic-fps)) — lowers resource use while the window is in the background.
- **RestMode** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/restmode)) — lowers the frame rate while the player is away, with a sleep screen.

## Memory leaks and stability

- **FerriteCore** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ferritecore)) — reduces memory use.
- **AllTheLeaks** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/alltheleaks)) — fixes memory leaks in some mods, Forge and Minecraft.
- **fix GPU memory leak** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fix-gpu-memory-leak)) — fixes client video-memory leaks.
- **GPUTape** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/gputape)) — fixes video-memory leaks, based on VideoTape.
- **ModernFix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/modernfix)) — an all-in-one mod that cuts memory use, speeds up loading and fixes bugs.
- **Load My F***ing Tags** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/lmft)) — stops one bad tag entry from breaking a whole tag.

## Loading and world saving

- **Ksyxis** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ksyxis)) — speeds up world loading by skipping unneeded spawn chunks.
- **quick pack** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/quick-pack)) — speeds up loading of datapack and resource pack zip files.
- **JEI Optimizations** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/jeiemi-optimizations)) — loads JEI's plugins, recipes and search index in the background so joining a world doesn't freeze. It is by the same author as Feelix's Soulrend Optimizations.
- **Structure Layout Optimizer** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/structure-layout-optimizer)) — speeds up the generation of jigsaw structures and NBT pieces, which this structure-heavy pack uses a lot.
- **Fast Async World Save** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fast-async-world-save-forge-fabric)) — saves the world off the main thread to avoid lag spikes.
- **Server Performance - Smooth Chunk Save** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/smooth-chunk-save)) — saves chunks continuously instead of in bursts.
- **Chunk Sending** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/chunk-sending-forge-fabric)) — optimizes how chunk packets are sent.
- **Not Enough Recipe Book (NERB)** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook)) — removes the recipe book entirely, which trims player data.

## Game logic and server

- **BadOptimizations** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/badoptimizations)) — optimizes parts of the game other than rendering.
- **Radium Reforged** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/radium-reforged)) — a Forge port of Lithium, which speeds up general game logic.
- **ServerCore** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/servercore)) — optimizes the server.
- **Immersive Optimization** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/immersive-optimization)) — schedules entity ticks to roughly double TPS.
- **Mobtimizations** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/mobtimizations)) — trims the AI work mobs waste, with little effect on gameplay.
- **ThreadTweak Reforged** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/threadtweak-reforged)) — tweaks CPU thread scheduling.
- **FastEvent** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fast-event)) — speeds up Forge's event system.
- **FastSuite** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fastsuite)) — runs the JSON recipe system on several threads.
- **FastFurnace** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fastfurnace)) — makes furnaces cheaper to run.
- **Fast NBT** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fast-nbt)) — speeds up NBT operations.
- **Icterine** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/icterine)) — optimizes advancements that wait for items to be picked up.
- **Clumps** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/clumps)) — merges XP orbs into one to reduce lag.
- **Async Logger** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/asynclogger)) — writes logs on another thread and filters them.
- **Tom's Performant Storage** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/toms-performant-storage)) — speeds up Tom's Simple Storage by about 90%.
