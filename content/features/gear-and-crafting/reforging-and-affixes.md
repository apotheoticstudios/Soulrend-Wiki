---
{
  "title": "Reforging & Affixes",
  "summary": "Affixes are random bonuses on gear, and reforging tables reroll them at a chosen rarity for rarity materials, Sigils of Rebirth and XP levels.",
  "icon": "apotheosis:reforging_table"
}
---
<!-- sources:
  content/items/gear-progression/index.md, content/items/gear-progression/reforging-tables.md (rarities, drop chances, table limits and costs)
  config/apotheosis/adventure.cfg (Random Affix Chance 0.1, chest rules)
  kubejs/server_scripts/minor_features/disable_lifesteal_affixes.js
  config/paxi/datapacks/soulrend_apotheosis_rebalance/ (reforging and salvaging recipes)
-->

**Affixes** are the random bonus stats on Apotheosis gear, and **reforging** rerolls them. Soulrend uses both systems and rebalances their recipes, so the Gear Progression pages hold the full detail. This page is the short version for new players.

## How it works

- **Affix gear.** An affix item has a rarity, several affixes and sockets. Higher rarities roll more and stronger affixes. The rarities run from Common through Mythic, Ancient, Artifact, Heirloom and Esoteric, and Fabled sits above them.
- **Where it comes from.** A naturally spawned mob has a 10% chance to carry an affix item, and chests hold more. See [[items/gear-progression|Gear Progression]] for the chances and the dimension rarity limits.
- **Reforging.** A reforging table takes an affix item and offers three rerolled versions at a rarity chosen by the rarity material placed in it. Picking one spends the materials, [[item:apotheosis:sigil_of_rebirth]] and XP levels.
- **Salvaging.** The Salvaging Table breaks unwanted affix gear into rarity materials.

## Details

Each table reaches a different top rarity:

| Table | Highest rarity |
| --- | --- |
| Simple Reforging Table | Rare |
| Reforging Table | Mythic |
| Ancient Reforging Table | Ancient |
| Esoteric Reforging Table | Esoteric |
| Fabled Reforging Table | Fabled only, adds a set affix |

Costs rise with rarity. A Common reforge costs 1 rarity material, no sigils and 3 levels. An Esoteric reforge costs 3 materials, 18 Sigils of Rebirth and 200 levels. The full cost table is on [[items/gear-progression/reforging-tables|Reforging Tables]].

Soulrend disables the Vampiric and Soulflare affixes ([[features/gear-and-crafting/disabled-lifesteal-affixes|Disabled Lifesteal Affixes]]).

## Tips

- Upgrade through [[features/gear-and-crafting/equipment-upgrades|Equipment Upgrades]] after reforging. The affixes carry over.
- Sigils change sockets and affixes without a full reroll. See [[items/gear-progression/sigils|Sigils]].

## Related

- [[items/gear-progression/rarity-materials|Rarity Materials]]
- [[progression/side-chapters/reforging|Reforging quest chapter]]
- [[features/gear-and-crafting/gems-and-sigils|Gems & Sigils]]
