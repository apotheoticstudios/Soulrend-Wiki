---
{
  "title": "Pre-generation",
  "summary": "In singleplayer, Soulrend generates the terrain around you while you pick your origin or stand idle, so exploring later stutters less.",
  "aliases": ["Pregen", "Chunk Pre-generation", "Idle Terrain", "Chunky"],
  "icon": "minecraft:filled_map"
}
---
<!-- sources:
  config/feelixs_soulrend_optimizations/features.properties (client.idle_terrain: singleplayer, Chunky generates 384 blocks around you while you choose your origin and class, or after a minute without input, not in the pause menu, and stops the moment you play; client.terrain_frame_cap: frames capped at the monitor's refresh rate, 60 to 120, while nearby chunks generate; servercore.singleplayer_static)
  mods/feelixs_soulrend_optimizations-0.1.1.jar compat/chunky/IdlePregen (idle threshold 1200 ticks; ChunkyAPI.startTask square, radius 384, concentric pattern; cancelTask on input; remembers the finished world)
  mods/Chunky-1.3.146.jar (Chunky, used as the generator)
-->
**Pre-generation** builds the world around a singleplayer character before they explore it. Soulrend's world generation is heavy, with many structure and biome mods, so generating terrain while the player is busy elsewhere makes the first trips smoother. It is a feature of Feelix's Soulrend Optimizations and uses the Chunky mod to do the work.

## How it works

In singleplayer, generation starts:

- while the [[features/character/origin-selector|Origin Selector]] is open on the first join, or
- after **1 minute** without any input (but not while the pause menu is open).

It generates a square of terrain reaching **384 blocks** from the player in every direction, from the middle outward. It **stops the moment the player does anything**, so it never competes with play.

## Details

- **Singleplayer only.** On a server, generation is the operator's job (Chunky's `/chunky` commands are installed for that).
- **Frame cap while generating.** While chunks near the player are still being generated, the frame rate is held at the monitor's refresh rate (between 60 and 120) so the generator gets more of the CPU; the normal limit returns once they're done.
- **Render distance is never cut.** ServerCore's dynamic settings, made for servers, stay off in singleplayer, so slow generation doesn't lower your render or simulation distance.

## Tips

- Take your time in the Origin Selector on a new world: the longer it stays open, the more terrain is ready.
- Leaving the game idle for a while before a long trip generates more of the area around you.

## Related

- [[features/settings-and-performance/graphics-presets|Graphics Presets]]
- [[features/settings-and-performance/first-launch-setup|First-Launch Setup]]
