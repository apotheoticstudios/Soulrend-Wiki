---
{
  "title": "Augment of Genesis",
  "summary": "A Fallen Gems & Affixes augment that starts at half power and grows stronger with every boss killed."
}
---
<!-- sources:
  researched 2026-10-25
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/fallen_gems_affixes/augments/genesis.json (default_power -0.5, affix_power_boost 0.05, gem_power_boost 0.05)
  fallen_gems_affixes jar: lang fallen_gems_affixes.augment.genesis.*; GenesisAugment, GenesisEventHandler
-->

**Augment of Genesis** is a Fallen Gems & Affixes [[items/gear-progression/augments|augment]] that grows with its owner. It fits any item with an augment slot.

## Usage

- Once applied, the item's affix power and gem power both start at **−50%**.
- Every boss killed adds **+5%** affix power and **+5%** gem power. The item's tooltip tracks bosses slain and the current values.
- After 10 bosses it is back to normal strength.<!-- TODO: whether the growth has a cap (GenesisEventHandler) -->
- An item with Genesis can no longer be put in the Augmenting Table.

## Obtaining

Like the other augments, it drops from Fabled universal bosses (a 5% chance for a random augment). The [[progression/side-chapters/reforging|Reforging]] chapter has a quest for it.
