---
{
  "title": "Gems",
  "summary": "Apotheosis gems: sockets, where gems come from, upgrading them at the Gem Cutting Table, gem dust and gem cases. One page per gem, grouped by source.",
  "items": ["apotheosis:gem_dust", "apotheosis:gem_cutting_table", "fallen_gems_affixes:gem_case", "fallen_gems_affixes:ender_gem_case"]
}
---
<!-- sources:
  researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/gems.json, game-data/recipes.json (apotheosis:salvaging, apotheosis:add_sockets max_sockets 3), game-data/items.json (gem name prefixes, gem case capacities)
  config/apotheosis/adventure.cfg (Gem Drop Chance 0.08, Gem Boss Bonus 0.5, Gem Loot Rules, Gem Dimensional Rarities as parsed: dimension|min|max)
  config/fallen_gems_affixes-common.toml (extraSockets 1, socketGemChance 0.2, tiered_socket_mode ON)
  Apotheosis jar: AdventureEvents.dropsHigh; GemCuttingMenu.getDustCost (1 + 2 x rarity ordinal) and GemCuttingMenu$RarityUpgrade (two matching gems, dust, 3 / 1 / 9 materials of the same / next / previous rarity); lang info.apotheosis.socketing, item.apotheosis.gem.*
  fallen_gems_affixes jar: lang tooltip.fallen_gems_affixes.gem_case.*, button.fallen_gems_affixes.gem_case.*; loot_modifiers/*_modifier.json
  config/ftbquests/quests/chapters/affix_enchanting.snbt (anvil crushes gems into Gem Dust)
-->

**Gems** are stones that go into the sockets of [[items/gear-progression|affix gear]] and add a bonus. The bonus depends on the gem, its rarity and the kind of item it sits in. Each gem has its own page with a table of its values; the groups are listed at the bottom.

## Sockets

- **Socketing.** Gems are put in at a Smithing Table, with the item on the left and the gem on the right. Removing them takes a [[items/gear-progression/sigils|Sigil of Withdrawal]], which takes out every gem at once.
- **Getting sockets.** Affix gear rolls its own sockets, and Fallen Gems & Affixes gives every item that can take affixes one extra socket. A Sigil of Socketing adds one more at a Smithing Table, up to 3.
- **Tiered sockets.** Some sockets have a rarity ("Empty Epic Socket"). A gem of that rarity or lower fits; plain sockets take any gem. The Sigil of Elevation raises tiered sockets one rarity.
- **Unique gems** can be socketed only once per item. Each gem page's infobox says whether it is unique.
- **Pre-filled sockets.** Affix gear found as loot has a 20% chance per socket to come with a random gem already in it.

## Rarities

A gem's rarity is part of its name:

| Rarity | Name | Gem dust to cut it up a rarity |
| --- | --- | --- |
| Common | Cracked ... | 1 |
| Uncommon | Chipped ... | 3 |
| Rare | Flawed ... | 5 |
| Epic | (no prefix) | 7 |
| Mythic | Flawless ... | 9 |
| Ancient | Perfect ... | 11 |
| Artifact | Time-Lost ... | 13 |
| Heirloom | Ancestral ... | 15 |
| Esoteric | Cosmic ... | (highest) |

Every gem has a lowest and highest rarity, shown on its page. The Artifact, Heirloom and Esoteric rarities come from Apotheotic Additions.

## Getting gems

- **Random gems** drop from hostile mobs killed by a player (8% per kill, 58% for bosses) and appear in chests (25% of vanilla chests and 20% of other chests). Each gem's drop weight decides how often it is picked; its page gives its share.
- **The dimension limits the rarity** of random gems, as Soulrend's config is read:

  | Dimension | Rarity of random gems |
  | --- | --- |
  | Overworld | Common–Uncommon |
  | Nether | Rare–Epic |
  | End | Rare–Mythic |
  | Otherside | Uncommon–Rare |
  | Any other dimension | Any |

  A gem whose rarity range doesn't overlap comes out at its nearest rarity. The config was meant to allow Rare in the Overworld and Epic in the Otherside (see [[bugs|Known Bugs]]).
- **[[items/gear-progression/gems/boss-gems|Boss gems]]** drop from one Cataclysm boss each.
- **[[items/gear-progression/gems/crafted-boss-gems|Crafted boss gems]]** are crafted with a Sigil of Awakening.
- **Quests.** Many quests in the [[progression/side-chapters/reforging|Reforging]] chapter and elsewhere give gem rolls.

## Upgrading gems

The **[[item:apotheosis:gem_cutting_table]]** raises a gem one rarity at a time. It takes:

- two identical gems (the same gem at the same rarity);
- Gem Dust, as many as the table above shows for the gems' current rarity;
- rarity materials: 3 of the gems' current rarity, 1 of the next rarity, or 9 of the rarity below.

It can't go past the gem's highest rarity.

{{recipes apotheosis:gem_cutting_table}}

## Gem dust

**[[item:apotheosis:gem_dust]]** is crushed gem. It comes from:

- dropping an anvil on unwanted gems;
- salvaging gems at the Salvaging Table: 1–2 dust for a Common gem, up to 4–10 for an Ancient one, and 9–24 for the Apotheotic Additions rarities;
- [[items/gear-progression|universal bosses]].

Besides gem cutting, the Ancient and Esoteric Reforging Tables use it, and so do many recipes (see its Used in list).

## Gem cases

A **[[item:fallen_gems_affixes:gem_case]]** stores gems (up to 32.8 thousand). It can also upgrade gems in bulk, two of a kind at a time, paying the dust and materials from what it holds. Infusing a Gem Case in an enchanting table makes the **[[item:fallen_gems_affixes:ender_gem_case]]**, which holds up to 2.1 billion.

{{recipes fallen_gems_affixes:gem_case}}

## Reading the bonus tables

- "(00:08)" is how long an effect lasts, in minutes and seconds.
- "[⌛ 00:25]" is the bonus's cooldown.
- "[Stacking]" means repeated triggers stack the effect.
- "[∞]" means the effect lasts as long as the gem is socketed.
- The "Socketed in" column uses the item groups from the gem's tooltip. The "It fits in" line above each table lists the item types the gem can go into.

## Groups

- [[items/gear-progression/gems/core-gems|Core Gems]]: Apotheosis's random gems.
- [[items/gear-progression/gems/dimension-gems|Dimension Gems]]: random gems that drop in only one dimension.
- [[items/gear-progression/gems/boss-gems|Boss Gems]]: one per Cataclysm boss.
- [[items/gear-progression/gems/crafted-boss-gems|Crafted Boss Gems]]: the Eyes, crafted from boss materials.
- [[items/gear-progression/gems/spell-gems|Spell Gems]]: spell power and spell school levels.
- [[items/gear-progression/gems/curio-gems|Curio Gems]]: gems for curios.
- [[items/gear-progression/gems/modded-gems|Modded Gems]]: Apotheotic Additions' extra random gems.
- [[items/gear-progression/gems/fallen-gems|Fallen Gems]]: Fallen Gems & Affixes' own gem.
- [[items/gear-progression/gems/other-gems|Other Gems]]: the Aqua, Geo and Sound school gems and other addon gems.
