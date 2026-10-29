---
{
  "title": "Building a Dragonforge",
  "category": "Guides",
  "aliases": ["Dragon Forge", "How to build a Dragonforge", "Dragonforge guide"],
  "summary": "How to build an Ice and Fire Dragonforge: its three layers, the scales and bones it costs, and how many dragons that takes.",
  "icon": "iceandfire:dragonforge_fire_core_disabled"
}
---
<!-- sources:
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar TileEntityDragonforge.assembled / checkBoneCorners / checkBrickSlots / checkBrickCorners / atleastThreeAreBricks / checkY (layout: bone blocks on the corners of the bottom and top layers, bricks on the other 5 spots, core in the middle, bricks on the middle layer's corners, 3 or 4 bricks on its sides), updateGrills (grill bricks beside the core), getDefaultOutput (ash, or dragon ice for ice)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar assets/iceandfire/lang/bestiary/en_us_0/dragonforge_0-3.txt (8 dragon bone blocks, 17 dragon forge bricks, layers built bottom to top, power from a tame or chained dragon in front of the aperture, dragon bone walls)
  config/ftbquests/quests/chapters/dragonslayer.snbt ("Your First Dragon Forge": 1 core, 1 aperture, 8 bone blocks, 17 bricks; Fire, Ice and Lightning Dragonsteel Ingot quests, 5 XP levels each)
  game-data/recipes.json (brick: 5 scale blocks + 4 stone bricks -> 4 bricks; core: 8 bricks + heart; aperture: 4 bricks + 4 iron ingots; scale block and bone block: 9 of the item; iceandfire:dragonforge cook_time 1,000), game-data/tags.json (forge:storage_blocks/scales/dragon/<element>), game-data/items.json (names)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDragonBase.interactAt (harvest steps: min(age / 5, 25); glass bottle while step < steps / 2; skull when step >= steps - 1; heart when step == steps / 2 - 1; otherwise loot), getDragonStage (stage thresholds), EntityFireDragon.getDeadLootTable (skeleton loot once step >= age / 5 / 2)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar CustomizeToDragon (scales: age / 25 + random(1 + age / 5); bones: 1 + random(1 + age / 25)), data/iceandfire/loot_tables/entities/dragon/*_dragon_male/female/skeleton.json (game-data/loot-tables.json: scales 60, flesh 40, egg 2 on females; skeleton: bone)
  config/iceandfire-common.toml (Dragons Drop Skull/Heart/Blood = true)
  content/bosses/act-ii/fire-dragon.md (sources: WorldGenDragonRoosts age 52-59, WorldGenDragonCave age 75-124)
  calc: roost dragons (age 52-59) give 16.6-17.8 scales and 8-10 bones, so 360 scales take 21-22; at every age from 25 to 125 the dragons needed for 360 scales hold at least 132 bones
  calc: bricks 17 + core 8 + aperture 4 = 29; ceil(29 / 4) = 8 crafts = 40 scale blocks (360 scales), 32 stone bricks; 8 bone blocks = 72 bones
        per corpse of age A: steps M = floor(A / 5) (A < 125); scale rolls floor(M / 2) - 1, bone rolls M - floor(M / 2) - 1; expected scales = scale rolls x 0.594 x (floor(A / 25) + floor(A / 5) / 2), 0.594 = mean of 60/100 (male) and 60/102 (female); expected bones = bone rolls x (1 + floor(A / 25) / 2); table gives the youngest and oldest day of each stage (stage 5 to day 125); dragons = ceil(360 / scales) and ceil(72 / bones)
-->
A **Dragonforge** is a 3 × 3 × 3 cube of Ice and Fire blocks that turns iron into [[items/dragons/dragonsteel|dragonsteel]] while a dragon of its element breathes into it. This guide covers the three layers, what one forge costs in dragon scales and bones, and how many dragons you need to kill to pay for it.

One forge takes **360 dragon scales**, **72 dragon bones** and **one dragon heart**. In dragons, that is about 4–5 fully grown cave dragons, or about 21–22 of the younger dragons that guard roosts. The scales are the bottleneck: the dragons you kill for them leave more than enough bones.

## Before you start

- **Pick an element.** A forge is Fire, Ice or Lightning. Its bricks, core and aperture are all of one element, and only a dragon of that element can power it.
- **Scales must match; bones need not.** The brick recipe takes the scale blocks of any color of the forge's element, mixed freely. Dragon bones are one item for every dragon, so bones from a Fire Dragon go into an Ice forge.
- **Scales come from dragons of that element**, and so does the heart:

| Element | Scale colors that count | Heart | Dragon |
| --- | --- | --- | --- |
| Fire | Red, Green, Bronze, Gray | [[item:iceandfire:fire_dragon_heart]] | [[Fire Dragon]] |
| Ice | Blue, White, Sapphire, Silver | [[item:iceandfire:ice_dragon_heart]] | [[Ice Dragon]] |
| Lightning | Electric Blue, Amethyst, Copper, Black | [[item:iceandfire:lightning_dragon_heart]] | [[Lightning Dragon]] |

### What one forge costs

| Material | Amount | Used for |
| --- | --- | --- |
| [[item:iceandfire:dragonscales_red\|Dragon Scales]] | 360 (40 blocks of 9) | 32 Dragonforge bricks |
| [[item:minecraft:stone_bricks]] | 32 | 32 Dragonforge bricks |
| [[item:iceandfire:dragonbone]] | 72 (8 blocks of 9) | The 8 corner blocks |
| Dragon heart | 1 | The core |
| [[item:minecraft:iron_ingot]] | 4 | The aperture |

The cube holds 17 bricks. The core takes 8 more bricks to craft and the aperture 4, so you need 29 bricks in all. Bricks are crafted four at a time, which makes 8 crafts and 32 bricks, with 3 to spare. Each craft uses 5 scale blocks and 4 stone bricks.

## The structure

Build the layers bottom to top: layer 1 on the ground, layer 2 on top of it and layer 3 on top of that. The schematic below shows the finished cube. Pick an element, show a single layer, or stack the layers to see how they fit.

{{dragonforge caption="The three layers of a Dragonforge. Spread pulls the layers apart so the core in layer 2 shows; drag to rotate."}}

| Layer | Blocks |
| --- | --- |
| 1 (bottom) | A [[item:iceandfire:dragon_bone_block]] on each of the 4 corners, and a Dragonforge brick on the 4 edges and in the center |
| 2 (middle) | The core in the center, bricks on the 4 corners, and bricks on 3 of the 4 sides. The aperture takes the fourth side |
| 3 (top) | The same as layer 1 |

In total the cube is 17 bricks, 8 blocks of dragon bones, 1 core and 1 aperture.

- **Any side can hold the aperture.** The forge checks only that at least three of the core's four sides are bricks. The aperture is the side the dragon faces, so put it where a dragon can stand.
- **A complete forge lights up.** The core you craft is the "disabled" one; once the cube is complete it switches to the active core, and the bricks beside it change to their grill look.
- **The corner blocks must be dragon bones.** A brick on a corner of layer 1 or 3 doesn't count, and neither does a bone block anywhere else.

## Crafting the parts

The recipes below are for a Fire forge. Ice and Lightning use the same patterns with their element's scale blocks, bricks and heart (see [[items/dragons/dragonforges|Dragonforges]]).

{{recipes iceandfire:dragonscale_red}}

{{recipes iceandfire:dragonforge_fire_brick}}

{{recipes iceandfire:dragonforge_fire_core_disabled}}

{{recipes iceandfire:dragonforge_fire_input}}

{{recipes iceandfire:dragon_bone_block}}

## Collecting scales and bones

### How a dragon corpse pays out

A killed dragon leaves a corpse, and you harvest it by right-clicking with an empty hand. It can be harvested once for every 5 days of the dragon's age (rounded down, at most 25 times), and the harvests come in this order:

1. **The first half** roll the dragon's loot: 60 in 100 for scales and 40 in 100 for flesh. A female's roll is 60, 40 and 2 in 102, the 2 being an egg.
2. **One harvest in the middle** gives the dragon's heart.
3. **The second half** each give a stack of dragon bones.
4. **The last harvest** gives the skull, and the corpse disappears.

An older dragon has more harvests and bigger stacks. A scale stack is the dragon's age ÷ 25 (rounded down), plus a random 0 to its age ÷ 5 (rounded down). A bone stack is 1, plus a random 0 to its age ÷ 25 (rounded down). A dragon's stage comes from its age: stage 1 under 25 days, then one stage every 25 days, stage 5 from day 100.

> [!WARNING]
> A Glass Bottle used on a corpse collects dragon blood, but the bottle uses up one of the harvests in the first half. Leave the bottle out while you farm scales, unless you want the blood.

### Dragons needed

Roosts hold a stage 3 dragon, 52–59 days old. Caves hold a sleeping stage 4 or 5 dragon, 75–124 days old. Stage 1 and 2 dragons only exist if you raise them from an egg. The table gives the average for the youngest and the oldest day of each stage and what it means for one forge (360 scales, 72 bones).

| Stage | Age (days) | Scales per dragon | Dragons for 360 scales | Bones per dragon | Dragons for 72 bones |
| --- | --- | --- | --- | --- | --- |
| 1 | 0–24 | 0–1 | Not practical | 0–1 | Not practical |
| 2 | 25–49 | 2–10 | 37–174 | 3–6 | 12–24 |
| 3 (roosts) | 50–74 | 17–32 | 12–22 | 8–12 | 6–9 |
| 4 (caves) | 75–99 | 37–59 | 7–10 | 17–23 | 4–5 |
| 5 (caves) | 100–125 | 75–114 | 4–5 | 27–42 | 2–3 |

Wild roost dragons are 52–59 days old and give 17–18 scales and 8–10 bones each, so a forge's scales take 21–22 of them. These are averages from the harvest rules above, assuming a scale roll of about 59% (the mean of a male's 60% and a female's 58.8%). Real kills vary, so plan for one dragon more than the table says.

- **Count the scales, not the bones.** The dragons that supply 360 scales also supply at least 130 bones at every stage from 2 to 5, so one batch of kills covers both. Bones can come from dragons of any element.
- **Scales must come from your forge's element.** Kill the dragons of that element, and keep the heart from one of them.
- **Older is better.** A stage 5 dragon gives about as many scales as 4–7 roost dragons. Dragon health scales with Soulrend level, so check the dragons' stats first (see [[Fire Dragon#Stats]]); [[items/dragons/dragon-utility#Using a radar|dragon radars]] find wild dragons, but stage 4 and 5 cave dragons only show on the Master Radar.

## Powering the forge

A forge does nothing until a dragon of its element breathes into the aperture. The Draconic Bestiary gives two ways:

- **A tamed dragon.** Hatch an egg (see [[items/dragons/dragon-eggs-and-scales|Dragon Eggs & Scales]]), and build the forge near the dragon.
- **A chained wild dragon.** Chain the dragon and stand it directly in front of the aperture. Dragons break most walls, so tie the chain to dragon bone walls.

{{recipes iceandfire:chain}}

{{recipes iceandfire:dragon_bone_wall}}

The dragon then breathes while the forge holds a valid recipe: one iron ingot and one dragon blood of the forge's element make a dragonsteel ingot, which takes 50 s of breath. For the forge's controls and recipes, see [[items/dragons/dragonforges#Usage|Dragonforges]].

> [!WARNING]
> An item with no forge recipe comes out as a block of ash, or as dragon ice in an Ice forge. Don't put anything else in the core.

## Next

- [[items/dragons/dragonforges|Dragonforges]] and [[items/dragons/dragonsteel|Dragonsteel]] for what the forge makes and how to use it.
- [[items/dragons/dragon-parts|Dragon Parts]] for blood, hearts, skulls and bones.
- [[progression/side-chapters/dragonslayer|Dragonslayer]], whose "Your First Dragon Forge" quest describes this build and whose Fire, Ice and Lightning Dragonsteel Ingot quests reward a dragonsteel ingot and 5 XP levels each.
