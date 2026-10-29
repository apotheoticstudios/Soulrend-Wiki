---
{
  "title": "Fix & Patch Mods",
  "navTitle": "Fixes & Patches",
  "category": "Mods",
  "order": 20,
  "summary": "Bug fixes and compatibility patches.",
  "icon": "minecraft:shears"
}
---
<!-- sources: mods/*.jar (mods.toml), minecraftinstance.json (CurseForge links), CurseForge summaries; pack role from docs/instance-guide.md -->
These mods have no gameplay of their own. They fix bugs in Minecraft or in other mods, or lift limits that Soulrend's higher numbers would otherwise hit.

- **Armor Damage Limit** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/armor-damage-limit)) — caps the damage a single hit can deal to armor, so one huge hit can't destroy a piece of gear.
- **AttributeFix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/attributefix)) — removes vanilla's arbitrary caps on attributes such as health and attack damage. Soulrend's leveling and gear push stats well past vanilla's limits, so this keeps them working.
- **Boat Break Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/boat-break-fix)) — stops boats from breaking when you fall onto them from certain heights.
- **Colorwheel Patcher** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/colorwheel-patcher)) — automatically patches supported shaderpacks to work with Colorwheel.
- **Connectivity** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/connectivity)) — fixes login timeouts, oversized packets and ghost blocks. A large modpack with many items and recipes would otherwise hit these on login.
- **DEUF - Duplicate Entity UUID Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/deuf-duplicate-entity-uuid-fix)) — gives a new UUID to a loaded entity whose UUID is already taken, and removes the log spam from it.
- **Dimensional Sync Fixes** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/dimensional-sync-fixes)) — fixes potion effects and experience failing to sync when players change dimension, which matters because the Past and the dimension mods make travel common.
- **EntityModelShadersFix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/entitymodelshaderfix)) — fixes entity model and texture mods rendering wrongly under shaders, such as cats losing their eyes and whiskers.
- **EpicFight-Resurrection Crash Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-resurrection-crash-fix)) — patches a crash and broken animations caused by EpicFight: Resurrection passing a null animation to newer Epic Fight versions.
- **Ice And Fire Patcher** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-patcher)) — fixes assorted bugs in Ice and Fire.
- **Max Health Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/max-health-fix)) — fixes vanilla bug MC-17876, where players above 20 health are reset when they rejoin.
- **Mixin Extras NeoForge on Forge Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/mixin-extras-neoforge-on-forge-fix)) — fixes crashes when a mod bundles the NeoForge build of MixinExtras on Forge.
- **NaNny Reforked** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/nanny-reforked)) — replaces NaN damage values with a fixed fallback damage so a mod that produces a bad float doesn't turn a hit into a no-op.
- **Packet Fixer** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/packet-fixer)) — fixes packet size, NBT and timeout problems.
- **Quests Freeze Fix** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/ftb-quests-freeze-fix)) — caches the FTB Quests screen at startup so opening the large quest book doesn't freeze the game.
- **Structure Essentials** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/structure-essentials-forge-fabric)) — adds faster structure locating, distance adjustments and a nearby-structure command, and fixes structure logging.
- **Too Fast** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/too-fast)) — turns off the "moved too quickly" server check, which fast movement such as dashes and dodges can trigger.
