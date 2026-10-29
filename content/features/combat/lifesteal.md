---
{
  "title": "Lifesteal",
  "summary": "Soulrend's Lifesteal attribute heals a share of your own max HP per hit, scaled by how hard the hit was and capped at 15%.",
  "aliases": ["Life Steal", "Vampirism"],
  "icon": "minecraft:ghast_tear"
}
---
<!-- sources:
  kubejs/startup_scripts/lifesteal.js (attribute kubejs:lifesteal, default 0, range 0-1)
  kubejs/server_scripts/minor_features/lifesteal.js (players only; heal = attacker max HP x lifesteal x 0.10 x log2(1 + damage / target max HP), capped at 0.15 x attacker max HP per hit, skipped below 0.1; heart particle)
  kubejs/server_scripts/minor_features/disable_lifesteal_affixes.js (apotheosis vampiric and fallen_gems_affixes soulflare affixes disabled with forge:false)
  calc: lifesteal 1.0 (100%) hitting for 100% of the target's max HP: 0.10 x log2(2) = 10% of own max HP; for 50%: 0.10 x 0.585 = 5.8%; for 5%: 0.10 x 0.0704 = 0.7%; reaching the 15% cap needs log2(1 + r) = 1.5, r = 1.83 (183% of the target's max HP)
  searched config/, kubejs/, config/paxi/ and game-data/item-stats.json: nothing grants kubejs:lifesteal (2026-10-28)
  mods/soulrend_core-2.7-1.20.1.jar LevellingScreen (its "Lifesteal" row reads attributeslib:life_steal)
-->
**Lifesteal** is a Soulrend attribute that heals the player when they hit something. Unlike most lifesteal, it isn't a share of the damage dealt: it heals a share of the **player's own maximum health**, sized by how big the hit was compared with the target's health. Big hits on small targets heal the most; chip damage on a boss heals almost nothing.

> [!WARNING] Currently disabled
> Lifesteal doesn't work in Soulrend right now. No item, skill tree node or origin gives the Lifesteal attribute, so the formula below never triggers in normal play (see [[bugs#Lifesteal attribute has no source|Known Bugs]]).

## How it works

Each hit a player lands heals:

> own max HP × Lifesteal × 10% × log₂(1 + damage ÷ target's max HP)

capped at **15% of the player's max HP per hit**.

| Lifesteal | Hit deals … of the target's max HP | Heals … of your max HP |
| --- | --- | --- |
| 100% | 5% | 0.7% |
| 100% | 50% | 5.8% |
| 100% | 100% | 10% |
| 100% | 183% or more | 15% (cap) |
| 25% | 100% | 2.5% |

## Details

- **Only players** heal this way; pets and summons don't.
- **Heals under 0.1 health are skipped.** A heart particle marks each heal.
- **The attribute goes from 0% to 100%.**
- **Apotheosis lifesteal affixes are off.** The Vampiric affix and Fallen Gems' Soulflare affix are disabled in Soulrend.
- **The Levelling screen's "Lifesteal" row** shows a different attribute, Apothic Attributes' Life Steal.

## Related

- [[features/gear-and-crafting/disabled-lifesteal-affixes|Disabled Lifesteal Affixes]]
- [[features/character/inventory-tabs|Inventory Tabs]]
