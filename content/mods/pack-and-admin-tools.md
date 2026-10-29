---
{
  "title": "Pack & Admin Tool Mods",
  "navTitle": "Pack & Admin Tools",
  "category": "Mods",
  "order": 21,
  "summary": "Scripting, datapack loading, profiling and admin tools.",
  "icon": "minecraft:debug_stick"
}
---
<!-- sources: mods/*.jar (mods.toml), minecraftinstance.json (CurseForge links), CurseForge summaries; config/item_obliterator.json5, config/paxi/, kubejs/; pack role from docs/instance-guide.md -->
Mods for pack makers and server admins. Players mostly never see them, but the pack's rules and recipes are written through them.

- **KubeJS** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/kubejs)) — scripts recipes, items, loot and events in JavaScript. Most of Soulrend's custom behavior lives in its scripts: boss summon rules, the Past, the Estus Flask, lifesteal and mounted combat, and about 190 shaped and shapeless recipes.
- **Paxi** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/paxi)) — loads datapacks and resource packs into every world. Soulrend's origins, classes, skill trees, recipes, loot tables and mob-leveling data are Paxi datapacks.
- **Almost Unified** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/almostunified)) — replaces duplicate materials from different mods with one preferred item, so metals and other materials from different mods stack and craft together.
- **Item Obliterator** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/item-obliterator)) — removes items, recipes and trades by JSON. Soulrend uses it to remove items such as the Soulslike Weaponry guns and Mehrunes' Razor, and patterns for estocs, stylets, bastard swords, ranseurs and ahlspiesses.
- **Better Compatibility Checker** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker)) — makes the server compare modpack versions instead of mod lists when players connect.
- **Crash Assistant** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/crash-assistant)) — opens a window after a crash that shows and analyzes the affected logs and offers a one-click upload.
- **spark** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/spark)) — a profiler for finding what causes lag on a client or server.
- **FullStack Watchdog** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/fullstack-watchdog)) — makes the server watchdog print every thread's full stack trace, which helps when a server hangs.
- **Log Begone** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/log-begone)) — filters noisy lines out of the log.
- **Chunky** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge)) — pre-generates chunks ahead of time.
- **IconExporter** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/iconexporter)) — exports item, block and fluid icons to files. The wiki's item icons come from it.
- **Huge Structure Blocks** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/huge-structure-blocks)) — makes structure blocks accept regions of up to 512 blocks.
