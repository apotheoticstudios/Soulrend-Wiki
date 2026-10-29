---
{
  "title": "Backpacks & Quivers",
  "aliases": ["Hunter Cape"],
  "summary": "47 items: Traveler's Backpacks, other back-slot curios and quivers.",
  "items": [
    "dungeons_and_combat:hunter_cape",
    "supplementaries:quiver",
    "valarian_conquest:quiver_chestplate",
    "travelersbackpack:bat",
    "travelersbackpack:bee",
    "travelersbackpack:blaze",
    "travelersbackpack:bookshelf",
    "travelersbackpack:cactus",
    "travelersbackpack:cake",
    "travelersbackpack:chicken",
    "travelersbackpack:coal",
    "travelersbackpack:cow",
    "travelersbackpack:creeper",
    "travelersbackpack:diamond",
    "travelersbackpack:dragon",
    "travelersbackpack:emerald",
    "travelersbackpack:end",
    "travelersbackpack:enderman",
    "travelersbackpack:fox",
    "travelersbackpack:ghast",
    "travelersbackpack:gold",
    "travelersbackpack:hay",
    "travelersbackpack:horse",
    "travelersbackpack:iron",
    "travelersbackpack:iron_golem",
    "travelersbackpack:lapis",
    "travelersbackpack:magma_cube",
    "travelersbackpack:melon",
    "travelersbackpack:nether",
    "travelersbackpack:netherite",
    "travelersbackpack:ocelot",
    "travelersbackpack:pig",
    "travelersbackpack:pumpkin",
    "travelersbackpack:quartz",
    "travelersbackpack:redstone",
    "travelersbackpack:sandstone",
    "travelersbackpack:sheep",
    "travelersbackpack:skeleton",
    "travelersbackpack:snow",
    "travelersbackpack:spider",
    "travelersbackpack:sponge",
    "travelersbackpack:squid",
    "travelersbackpack:standard",
    "travelersbackpack:villager",
    "travelersbackpack:warden",
    "travelersbackpack:wither",
    "travelersbackpack:wolf"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  travelersbackpack jar: lang ability.travelersbackpack.*, obtain.*; BackpackAbilities class (attribute values, effect durations)
  defaultconfigs/travelersbackpack-server.toml (tiers, upgrades, spawn chance, backpackEffects, cooldowns)
  config/supplementaries-common.toml ([tools.quiver])
-->

**Backpacks & Quivers** covers 47 items: Traveler's Backpacks, other back-slot curios and quivers.

## Usage

### Traveler's Backpacks

Every Traveler's Backpack is worn in the Curios back slot (or placed as a block) and holds the same storage; the designs differ only in their abilities. [[features/travel-and-storage/backpacks|Backpacks (Feature)]] walks through making, wearing and keeping one. Soulrend uses the mod's default server settings:

| Tier | Slots | Upgrade slots | Tool slots |
| --- | --- | --- | --- |
| Leather | 27 | 2 | 2 |
| Iron | 45 | 3 | 3 |
| Gold | 63 | 4 | 4 |
| Diamond | 81 | 5 | 5 |
| Netherite | 99 | 6 | 6 |

A backpack starts at Leather and moves up one tier at a time in a smithing table, with leather and a tier upgrade. Each backpack has two fluid tanks of 1,000 mB and accepts tank, crafting, furnace, smoker, blast furnace, jukebox, pickup, magnet (5-block range), feeding, refill and void upgrades. A backpack can't be destroyed, and when its wearer dies it is placed as a block. Zombies, skeletons and endermen (and in the Nether, wither skeletons and piglins) have a 0.5% chance to spawn wearing one.

**Abilities** (Shift in the tooltip; the Enable/Disable Special Ability key switches them):

- **Armor and attributes:** Netherite +4 armor, Diamond +3, Gold and Iron +2; Emerald adds Luck, Enderman +1 block reach, Warden +4 maximum health and Fox +10% movement speed.
- **Permanent effects:** Bat, Night Vision; Magma Cube, Fire Resistance; Squid, Water Breathing and Night Vision underwater; Dragon, Regeneration and Strength; Quartz, Haste; Fox, Jump Boost.
- **On hit:** Bee poisons for 4 s, Warden gives Slowness II for 2 s, Wither gives Wither II for 3 s (and immunity to Wither).
- **Lifesavers:** Creeper, when the wearer would die, explodes around them instead and gives Regeneration II, Absorption II and Fire Resistance (cooldown 60–90 s). Cow cures every harmful effect (cooldown 24–27 s). Cake feeds the wearer until full and gives 10 s of Regeneration (cooldown 18–24 s).
- **Mob behavior:** Ghasts treat the wearer as an ally unless attacked; with Pumpkin, looking at endermen doesn't anger them; Blaze gives immunity to fall damage and to blaze fireballs; Ocelot gives Speed near hostile mobs; Spider climbs walls.
- **Farming and resources:** Lapis has a 15% chance to double incoming experience. Hay has a 40% chance to multiply crop drops and a 15% chance to get a crop from grass. Chicken lays an egg every 18–30 s. Cactus fills empty tanks with water in the rain, and Sponge soaks up water into them.
- **As a block:** Bookshelf counts as a bookshelf for enchanting tables, Redstone gives a strong redstone signal, and Melon drops up to 3 melon slices when harvested.

The Coal, End, Horse, Nether, Pig, Sandstone, Sheep, Skeleton, Snow, Standard, Wolf, Iron Golem and Villager backpacks have no ability. The Bat backpack is found in mineshafts and dungeons, the Iron Golem one in armorer chests, and the Villager one is sold by librarians.

### Others

- **Hunter Cape:** gives Hunter Fury, which raises attack speed and makes enemies Glow.
- **Quiver** (Supplementaries): holds 6 stacks of arrows that bows draw from, worn in the belt slot or held. Picked-up arrows go into it if it already holds that arrow type, and using it doesn't slow the wearer. Skeletons have a 3% chance to spawn with one, lower at low local difficulty.
- **Quiver Chestplate** (Valarian Conquest): a chest armor piece with no ability.

## Dungeons and Combat

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:hunter_cape]] | dungeons and combat | Slot: Back; This effect will increase your attack speed and leave the "Glowing" effect on your enemies | crafting |

## Supplementaries

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:supplementaries:quiver]] | Supplementaries | Slot: Belt | 11 loot tables |

## Valarian Conquest

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:valarian_conquest:quiver_chestplate]] | Valarian Conquest | 240 durability |  |

## Traveler's Backpack

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:travelersbackpack:bat]] | Traveler's Backpack | Slot: Back; Backpack obtainable in Mine shafts and Dungeons Hold <Shift> for Special Ability Description |  |
| [[item:travelersbackpack:bee]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:blaze]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:bookshelf]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:cactus]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:cake]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:chicken]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:coal]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:cow]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:creeper]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:diamond]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:dragon]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:emerald]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:end]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:enderman]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:fox]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:ghast]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:gold]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:hay]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:horse]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:iron]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:iron_golem]] | Traveler's Backpack | Slot: Back; Backpack obtainable in Armorer villager's chests |  |
| [[item:travelersbackpack:lapis]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:magma_cube]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:melon]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:nether]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:netherite]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:ocelot]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:pig]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:pumpkin]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:quartz]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:redstone]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:sandstone]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:sheep]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:skeleton]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:snow]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:spider]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:sponge]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:squid]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:standard]] | Traveler's Backpack | Slot: Back | crafting |
| [[item:travelersbackpack:villager]] | Traveler's Backpack | Slot: Back; Can only be acquired by buying it from a Librarian villager |  |
| [[item:travelersbackpack:warden]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:wither]] | Traveler's Backpack | Slot: Back; Hold <Shift> for Special Ability Description | crafting |
| [[item:travelersbackpack:wolf]] | Traveler's Backpack | Slot: Back | crafting |
