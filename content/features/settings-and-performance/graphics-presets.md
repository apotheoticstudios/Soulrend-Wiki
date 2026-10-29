---
{
  "title": "Graphics Presets",
  "summary": "Five presets, Potato to Ultra, that set every video option and the heavy effects of Soulrend's mods in one click.",
  "aliases": ["Video Settings", "Graphics Preset", "Shaders", "Potato Preset"],
  "icon": "minecraft:spyglass"
}
---
<!-- sources:
  config/feelixs_soulrend_optimizations/presets.cfg (every value in the tables; descriptions don't follow it)
  config/feelixs_soulrend_optimizations/features.properties (client.graphics_presets, client.one_video_settings_entry)
  mods/feelixs_soulrend_optimizations-0.1.1.jar assets/feelixs_soulrend_optimizations/lang/en_us.json (Graphics page, Graphics Preset option and tooltip, "This PC" / recommended, Custom, Shader (High and Ultra) with Bliss and Complementary Unbound, Reset to defaults, applied_restart, /fsoclient help lines)
  mods/feelixs_soulrend_optimizations-0.1.1.jar GraphicsPresets.defaultPreset (HIGH, used by Reset to defaults)
-->
**Graphics presets** set all of Soulrend's graphics at once. They come from Feelix's Soulrend Optimizations, the pack's own performance mod, and cover Minecraft's video options, Embeddium's options, the Oculus shader, and the heaviest effects of the pack's mods: Epic Fight's trails and afterimages, particles, dynamic lights and falling leaves.

## How it works

Open **Options → Video Settings**. The first page, **Graphics**, holds the **Graphics Preset** option. Its tooltip names this PC's hardware and the preset recommended for it.

- Pick a preset and apply. A few things (mipmaps and some mod settings) change only after a restart; the game says so.
- Changing any single setting afterwards turns the preset into **Custom**.
- **Shader (High and Ultra)** picks the shader pack that High and Ultra switch on. Soulrend ships two: **Bliss** (the default; vivid colors, thick fog and light shafts) and **Complementary Unbound** (more natural light, colored light from glowing blocks). Potato to Medium always switch shaders off.
- **Reset to defaults** returns every graphics setting to a new install's: the High preset with Bliss, plus the pack's brightness, GUI scale, fullscreen and frame rate settings. Keybinds and sound are left alone.

## Details

| Setting | Potato | Low | Medium | High | Ultra |
| --- | --- | --- | --- | --- | --- |
| Render distance | 6 | 10 | 14 | 16 | 22 |
| Simulation distance | 4 | 8 | 10 | 14 | 18 |
| Graphics | Fast | Fancy | Fancy | Fancy | Fancy |
| Particles | Minimal | Decreased | All | All | All |
| Clouds | Off | Off | Fast | Fancy | Fancy |
| Entity shadows | Off | Off | On | On | On |
| Smooth lighting | Off | On | On | On | On |
| Mipmap levels | 0 | 1 | 2 | 4 | 4 |
| Biome blend | 0 | 1 | 1 | 2 | 3 |
| Leaves and weather | Fast | Fast | Default | Fancy | Fancy |
| Shaders | Off | Off | Off | On | On |
| Dynamic lights updates | Slow | Slow | Fast | Realtime | Realtime |
| Epic Fight blood effects | Off | On | On | On | On |
| Epic Fight ground slams | Off | Off | On | On | On |
| Weapon afterimages | Off | Off | On | On | On |

Higher presets also draw Epic Fight animations at full rate from farther away, show weapon and projectile trails at longer range, allow more particles at once, and turn on Better Clouds, Loot Beams particles, fireflies and lava sparks.

> [!NOTE]
> The preset descriptions shown in game give older render distances (for example 8 for Low). The table above follows the values the presets actually apply (see [[bugs#Graphics preset descriptions don't match what the presets set|Known Bugs]]).

## Tips

- Start from the recommended preset, then drop one step if fights stutter: Epic Fight effects and particles are the biggest cost in boss fights.
- `/fsoclient preset <potato|low|medium|high|ultra|auto>` applies a preset from chat; `auto` picks the recommended one. `/fsoclient preset check` lists any setting of the preset that isn't in effect. See [[features/commands/other-commands|Other Commands]].
- The presets' values are in `config/feelixs_soulrend_optimizations/presets.cfg` and can be edited; apply the preset again to use the new values.

## Related

- [[features/settings-and-performance/first-launch-setup|First-Launch Setup]]
- [[features/settings-and-performance/pre-generation|Pre-generation]]
