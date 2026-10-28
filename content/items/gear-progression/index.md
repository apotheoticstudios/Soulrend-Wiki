---
{
  "title": "Gear Progression",
  "category": "Items",
  "order": 7,
  "summary": "How Apotheosis affix gear works in Soulrend: rarities, affixes, sockets and gems, reforging, salvaging, sigils, augments and universal bosses.",
  "icon": "apotheosis:gem"
}
---
<!-- sources:
  researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  config/apotheosis/adventure.cfg (Random Affix Chance 0.1, Affix Item Loot Rules, Affix Convert Loot Rules and Rarities as parsed: dimension|min|max, Boss Spawn Dimensions)
  Apotheosis and ApotheoticAdditions jars: data/*/rarities/*.json (ordinals, materials)
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/fallen_gems_affixes/universal_boss/universal_boss.json (tier_chances, dimension_rarities, blacklist, affixes)
  fallen_gems_affixes jar: data/fallen_gems_affixes/loot_modifiers/universal_boss_loot.json; config/fallen_gems_affixes-common.toml (fabledAugmentDropChance 0.05, affixScrollDropChance 0)
  config/ftbquests/quests/chapters/affix_enchanting.snbt (Reforging chapter)
-->

**Gear Progression** covers Apotheosis's **affix gear** and the items that improve it. Affix gear is equipment with a **rarity**, random bonus stats called **affixes** and **sockets** for [[items/gear-progression/gems|gems]]. Better rarities roll more and stronger affixes. The [[progression/side-chapters/reforging|Reforging]] quest chapter teaches the system step by step.

## Rarities

| Rarity | Rarity material | Notes |
| --- | --- | --- |
| Common | Mysterious Scrap Metal | |
| Uncommon | Timeworn Fabric | |
| Rare | Luminous Crystal Shard | |
| Epic | Arcane Sands | |
| Mythic | Godforged Pearl | |
| Ancient | Manifestation of Infinity | |
| Artifact | Artifact Shards | Apotheotic Additions |
| Heirloom | Core of the Family | Apotheotic Additions |
| Esoteric | Galactic Core | Apotheotic Additions; the highest |
| Fabled | Relic of the Renowned | Fallen Gems & Affixes; given by the Fabled Reforging Table |

[[items/gear-progression/rarity-materials|Rarity Materials]] lists where each material comes from.

## Where affix gear comes from

- **Mobs:** a naturally spawned mob has a 10% chance to be given an affix item.
- **Chests:** vanilla structure chests have a 35% chance to hold an affix item, and other chests 30%. Ordinary gear in loot tables also has a 35% chance to be turned into affix gear.
- **The dimension caps the rarity of that converted chest gear:** Common–Uncommon in the Overworld, Uncommon–Rare in the Nether, Rare–Epic in the End and the Otherside, and any rarity in the Past. The config meant one rarity higher everywhere; see [[bugs|Known Bugs]].
- **Bosses:** Apothic bosses spawn naturally in the Nether and the outer End, and universal bosses (below) appear everywhere.

## Universal bosses

Fallen Gems & Affixes can turn any spawning mob, except villagers, wandering traders and armor stands, into a **universal boss** of a rarity tier. Soulrend's chances are 6% Common, 5% Uncommon, 4% Rare, 3% Epic, 2% Mythic, 1% Ancient and 2.5% Fabled. Each dimension allows only some tiers:

| Dimension | Tiers |
| --- | --- |
| Overworld | Common, Uncommon, Rare |
| Nether | Rare, Epic |
| End | Epic, Mythic, Ancient, Fabled |

Higher tiers carry boss affixes, such as Executioner from Rare and Berserker from Epic. When killed they drop:

- gem dust (25% chance);
- rarity materials of their tier (15%);
- an enchanted book (15%).

Fabled ones drop Relics of the Renowned instead of the usual materials, and have a 5% chance to drop an [[items/gear-progression/augments|augment]].

## Working on gear

- **[[items/gear-progression/reforging-tables|Reforging Tables]]** reroll an item at a chosen rarity, using rarity materials, Sigils of Rebirth and experience levels. The **Salvaging Table** breaks unwanted affix gear into rarity materials.
- **[[items/gear-progression/sigils|Sigils]]** add or remove sockets, gems, affixes and augments at a Smithing Table, or fuel the tables.
- **[[items/gear-progression/gems|Gems]]** go into sockets and are upgraded at the Gem Cutting Table.
- **[[items/gear-progression/augments|Augments]]** go into a special slot and scale an item's affix and gem power.

## In this section

- [[items/gear-progression/sigils|Sigils]]
- [[items/gear-progression/rarity-materials|Rarity Materials]]
- [[items/gear-progression/reforging-tables|Reforging Tables]] (with the Salvaging and Augmenting Tables)
- [[items/gear-progression/gems|Gems]]: one page per gem, plus sockets, gem cutting, gem dust and gem cases.
- [[items/gear-progression/enchanting|Enchanting (Items)]]: Apotheosis's enchanting shelves and tomes.
- [[items/gear-progression/coins-and-apples|Coins & Apples]]: Wandering Trader coins and rarity apples.
- [[items/gear-progression/augments|Augments]]
