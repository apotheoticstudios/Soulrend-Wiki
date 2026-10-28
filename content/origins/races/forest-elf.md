---
{
  "title": "Forest Elf",
  "summary": "Woodland archer: piercing, armor-shredding arrows, extra arrows per craft, wolf and bear summons, an eagle and a golden wolf mount; vegetarian.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:wood_elf`"
      ],
      [
        "Impact",
        "Medium"
      ],
      [
        "Classes",
        "Any"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/origins/wood_elf.json (name "Forest Elf", powers, description)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/wood_elf/*.json (sylvan_marksman, fletcher 8/4/10 and silk arrows, eagle_eyed: sneaking glow on kubejs:forest_elf_hostiles within 20 blocks, glowing 200 ticks on hit; stature height 1.2778; call_of_the_wild cooldown 300; falconry; lupus_companion; steward)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/wood_elf/spell_power.json (+1 nature spell power)
  config/paxi/datapacks/soulrend_reforged/data/soulrend/tags/items/forest_elf_vegetarian.json (142 foods allowed)
  mods/soulrend_origins-1.2-1.20.1.jar ForestElf (arrows +1 pierce; 20% chance x1.3 damage; -15% armor for 100 ticks on arrow hit; Call of the Wild: 4 wolves, 4 wolves + 1 grizzly bear at Nature Spell Power >= 2.5, 2 wolves + 2 grizzly bears at >= 3.5, expiry 600 ticks; alexsmobs:bald_eagle and wom:lupus_rex companions, respawn 200 ticks after death; starter saddle and falconry glove)
  mods/soulrend_origins-1.2-1.20.1.jar TwigArrows (Hunter twig-arrow recipe gives Forest Elves 8)
  mods/soulrend_core-2.7-1.20.1.jar gameplay/BeastMaster (Forest Elf companions count as summons)
  config/origins_server.json (archer, forest_vision, empowered_shot, towering, elegant, graceful, gear_spawn, keen_eyes disabled)
  calc: 300 ticks = 15 s; 600 ticks = 30 s; 200 ticks = 10 s; 100 ticks = 5 s
-->
**Forest Elves** are tall woodland archers. Their arrows pierce and strip armor, they get more arrows from every craft, wolves and bears answer their call, and an eagle and a great golden wolf travel with them from the start. They don't eat meat.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Sylvan Marksman | Arrows pierce one extra target. Each arrow hit has a 20% chance to deal ×1.3 damage and lowers the target's armor by 15% for 5 s. | — |
| Fletcher | The [[item:minecraft:arrow]] recipe makes 8 arrows, [[item:minecraft:spectral_arrow]] 4 and [[item:iceandfire:dragonbone_arrow]] 10. Adds a recipe: [[item:minecraft:flint]] over a [[item:minecraft:stick]] over [[item:minecraft:string]], [[item:alexscaves:shadow_silk]] or [[item:dungeons_and_combat:cursed_silk]] makes 8 arrows. | — |
| Eagle Eyed | While sneaking, hostile mobs within 20 blocks glow. Any creature hit glows for 10 s. | — |
| Call of the Wild | Primary ability key: summons woodland allies for 30 s (see below). Casting again replaces them. | 15 s |
| Woodland Falconry | A Bald Eagle companion. It comes back 10 s after dying. The Forest Elf starts with a [[item:alexsmobs:falconry_glove]] to direct it. | — |
| Golden Woodland Companion | A Lupus Rex (golden wolf) that can be ridden. It comes back 10 s after dying. The Forest Elf starts with a [[item:minecraft:saddle]]. | — |
| Nature affinity | +1 Nature Spell Power (+100%). | — |
| Stature | About 28% taller than a human. | — |

**Call of the Wild** summons depend on Nature Spell Power. A Forest Elf starts at 2.0 (the base 1.0 plus Nature affinity), which gives the second row.

| Nature Spell Power | Allies |
| --- | --- |
| below 2.5 | 4 Wolves |
| 2.5 to 3.49 | 4 Wolves, 1 Grizzly Bear |
| 3.5 or more | 2 Wolves, 2 Grizzly Bears |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Steward | Can't eat meat. Foods in the `soulrend:forest_elf_vegetarian` tag (142 items, eggs and dairy among them) and Estus and Crimson Flasks are allowed. |

> [!NOTE]
> Soulrend replaces Medieval Origins' Wood Elf powers: Natural Archer, Forest Vision, Focus, Elegant, Graceful and the starting gear are turned off.

## Playstyle

The Forest Elf is built around the bow: piercing shots hit lines of enemies, and the armor shred makes every following hit land harder. The eagle and wolf mount are permanent companions, and Call of the Wild adds a pack for short fights.

## Pairs well with

- [[origins/ranged-classes/hunter|Hunter]]: +30% arrow damage and Looting II on kills. (Hunter's Resourceful Fletcher doesn't apply to Forest Elves, since their own Fletcher already gives more.)
- [[origins/mage-classes/druid|Druid]]: +30% Nature Spell Power reaches the 2.5 threshold for a Grizzly Bear.
- [[origins/melee-classes/beast-master|Beast Master]]: its summon bonuses apply to the eagle, the Lupus Rex and the Call of the Wild pack.
