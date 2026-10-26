---
{
  "title": "Augments",
  "summary": "Fallen Gems & Affixes augments: Cascade, Convergence, Duality, Empowerment, Malice and Supremacy, plus Genesis on its own page.",
  "items": ["fallen_gems_affixes:augment"]
}
---
<!-- sources:
  researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/fallen_gems_affixes/augments/*.json (Soulrend's values and item categories)
  fallen_gems_affixes jar: lang item.fallen_gems_affixes.augment.*, fallen_gems_affixes.augment.*; AugmentRecipe (smithing table, matching loot category, free augment slot); SupremacyAugment (affix power = value), GemPowerAugment (gem power = 1 + value); data/fallen_gems_affixes/loot_modifiers/universal_boss_loot.json
  config/fallen_gems_affixes-common.toml (maxAugmentSlots 1, fabledAugmentDropChance 0.05)
  config/ftbquests/quests/chapters/affix_enchanting.snbt (augment quests)
-->

**Augments** are Fallen Gems & Affixes items that go into an item's **augment slot** and change how strong its affixes and gems are, or add a combat effect. All seven share one item id (`fallen_gems_affixes:augment`); the type is stored on the item.

## Usage

- **Augment slots.** A [[item:fallen_gems_affixes:sigil_of_ascension]] turns one empty, untiered socket into an augment slot ("Empty Inlay"). In Soulrend an item can have only one.
- **Applying.** Put the item and the augment in a Smithing Table. The augment has to fit the item's category, and the item needs a free augment slot.
- **Removing.** A [[item:fallen_gems_affixes:sigil_of_severance]] removes every augment from an item.
- **Getting augments.** A Fabled [[items/gear-progression|universal boss]] has a 5% chance to drop a random augment when it dies. The [[progression/side-chapters/reforging|Reforging]] quest chapter has a quest for five of the types.

## Types

"Affix power" and "gem power" scale every affix or socketed gem bonus on the item.

| Augment | Fits | Effect in Soulrend |
| --- | --- | --- |
| Augment of Cascade | Swords, heavy weapons, staffs | On an overcrit, a 35% chance to deal 40% more damage with that hit. It scales with Crit Chance above 100% and Crit Damage above 200%. |
| Augment of Convergence | Anything | +5% gem power for each affix on the item, and +5% affix power for each socketed gem. |
| Augment of Duality | Swords, heavy weapons, staffs | Crit Chance ×2 and 30% less Crit Damage. On a crit, half the damage is dealt as it was and half as magic damage. |
| Augment of Empowerment | Anything | Socketed gem power ×1.5. |
| Augment of Malice | Anything | When applied, randomly becomes affix-dominant (+100% affix power, −50% gem power) or gem-dominant (the reverse). Which one stays hidden until it is applied. |
| Augment of Supremacy | Anything | Affix power ×1.5. |
| [[items/gear-progression/augments/augment-of-genesis\|Augment of Genesis]] | Anything | Starts weak and grows with every boss killed. |
