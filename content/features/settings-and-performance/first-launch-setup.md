---
{
  "title": "First-Launch Setup",
  "summary": "What Soulrend sets up on the first start: a graphics preset for your PC, faster resource loading, and an offer of better Java arguments.",
  "aliases": ["Java Arguments", "JVM Arguments", "Stutter Fix", "Safe Mode"],
  "icon": "minecraft:redstone_torch"
}
---
<!-- sources:
  config/feelixs_soulrend_optimizations/features.properties (client.first_boot_preset: with no options.txt, start on the preset this PC can carry, at most Medium until the GPU is known; client.first_launch_packs: Default Options' resource packs selected before the first resource load; client.java_settings_offer; config.spark_background_off; config.modernfix_beta; config.fancymenu_editor_off)
  mods/feelixs_soulrend_optimizations-0.1.1.jar JavaSettings.ARGUMENTS (the argument string below), JavaSettings (offer shown while UseG1GC, MaxGCPauseMillis or ReservedCodeCacheSize are at stock values; "Don't show again" writes java-settings-dismissed), FirstLaunch (reads defaultResourcePacks from defaultoptions-common.toml)
  mods/feelixs_soulrend_optimizations-0.1.1.jar lang (java.link "Stutter fix: better Java settings for this PC >", java.explain, java.copy, java.dismiss; command.help.launch "-Dfso.safemode=true" or "*=false"; command.help.restore, safemode)
-->
**First-launch setup** is what Feelix's Soulrend Optimizations does the first time Soulrend starts, so a new install runs well before any setting is touched. It also offers better Java arguments on the title screen, which removes most stutters on PCs that still use the launcher's defaults.

## How it works

On the first start (when there is no `options.txt` yet):

1. **A graphics preset is chosen for the PC.** Instead of vanilla's defaults, the game starts on the [[features/settings-and-performance/graphics-presets|graphics preset]] this PC can carry. Until the graphics card is known, that is at most Medium.
2. **The pack's resource packs are selected before the first load**, so the game doesn't load all resources a second time to apply them.
3. **A few mod settings are fixed once:** spark's background profiler is turned off, ModernFix's extra optimizations are switched on, and FancyMenu's editor bar is hidden.

## Java arguments

While Java runs with its stock settings, the title screen shows **"Stutter fix: better Java settings for this PC >"**. With stock settings the garbage collector pauses the game for 50–200 ms every few seconds, and the code cache is nearly full with this many mods. The link opens a screen with arguments that keep pauses around 30 ms:

```
-XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+UnlockExperimentalVMOptions -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:GCTimeRatio=99 -XX:ReservedCodeCacheSize=400M
```

To use them:

1. Press **Copy** on that screen.
2. In the CurseForge app, open **Settings** (the gear at the bottom left), then **Minecraft**.
3. Paste them into **Additional Arguments** under Java Settings, after anything already there. Other launchers have a JVM arguments field in the instance settings.
4. Restart the game.

**Don't show again** hides the link for good.

## Details

- **If the game won't start** after an update, add `-Dfso.safemode=true` to the Java arguments, or put `*=false` in `config/feelixs_soulrend_optimizations/features.properties`. Both switch every Feelix's Soulrend Optimizations feature off.
- `/fsoclient restore` puts back every video and mod setting the mod changed. `/fsoclient features` lists each feature and whether it is on.

## Related

- [[features/settings-and-performance/graphics-presets|Graphics Presets]]
- [[features/settings-and-performance/pre-generation|Pre-generation]]
- [[features/commands/other-commands|Other Commands]]
