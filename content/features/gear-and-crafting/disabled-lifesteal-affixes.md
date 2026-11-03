---
{
  "title": "Disabled Lifesteal Affixes",
  "summary": "Soulrend switches off the Vampiric and Soulflare gear affixes so the Lifesteal attribute is the only source of lifesteal on gear.",
  "icon": "minecraft:ghast_tear"
}
---
<!-- sources:
  kubejs/server_scripts/minor_features/disable_lifesteal_affixes.js (highPriorityData; three affix files given a forge:false condition; the file's comment)
  content/features/combat/lifesteal.md (Soulrend's own Lifesteal attribute)
-->

**Disabled lifesteal affixes** are three Apotheosis-style affixes that Soulrend removes from the game: **Vampiric** and the two **Soulflare** affixes. The pack uses its own Lifesteal attribute instead.

## How it works

A KubeJS script overrides the three affix files with a `forge:false` condition, which makes the game skip them when it loads data. The overrides replace the files from Apotheosis, Fallen Gems & Affixes and any datapack in Paxi.

| Affix | Data file |
| --- | --- |
| Vampiric (sword) | `apotheosis:affixes/sword/attribute/vampiric.json` |
| Soulflare (celestial weapons) | `fallen_gems_affixes:affixes/celestial_weapons/attribute/soulflare.json` |
| Soulflare (Apotheotic Additions compat) | `fallen_gems_affixes:affixes/apotheotic_additions_compat/attribute/soulflare.json` |

## Details

Only these affixes are removed. Lifesteal gems and other lifesteal sources are unaffected, as the script's comment says. Soulrend's own [[features/combat/lifesteal|Lifesteal]] attribute heals a share of the player's maximum health per hit, with a cap.

## Related

- [[features/gear-and-crafting/reforging-and-affixes|Reforging & Affixes]]
- [[items/gear-progression|Gear Progression]]
