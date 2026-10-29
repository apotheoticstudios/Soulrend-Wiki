---
{
  "title": "Mana",
  "summary": "Mana pays for spells. Soulrend regenerates it at a tenth of the normal rate: about 8 minutes from empty to full without bonuses.",
  "aliases": ["Max Mana", "Mana Regeneration", "Mana Regen"],
  "icon": "irons_spellbooks:mana_upgrade_orb"
}
---
<!-- sources:
  game-data/attributes.json (irons_spellbooks:max_mana default 100, irons_spellbooks:mana_regen default 1)
  mods/irons_spellbooks-1.20.1-3.15.6.jar MagicManager.regenPlayerMana (every MANA_REGEN_TICKS = 10 ticks: mana += max mana x mana regen x 0.01 x manaRegenMultiplier, capped at max mana)
  defaultconfigs/irons_spellbooks-server.toml (manaRegenMultiplier 0.1, manaSpawnPercent 0.1, swordsConsumeMana true)
  mods/irons_spellbooks-1.20.1-3.15.6.jar CastSource.consumesMana (spellbook, and imbued weapons when swordsConsumeMana; not scrolls)
  mods/irons_spellbooks-1.20.1-3.15.6.jar lang (effect.irons_spellbooks.instant_mana.description "Restores 25 mana + 5% of your max mana per level", tooltip mana_cost_per_second)
  config/irons_spellbooks-client.toml [UI.ManaBar] (manaBarDisplay Contextual, anchored above the hunger bar, text visible)
  config/soulrend_core/stats.toml (intelligence: max_mana 1, spell_power 0.005; focus: max_mana 1, mana_regen 0.15; per point, 30 points max)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/{mage,spellblade,reaper}/magic.json (max_mana multiply_total 0.5 / 0.2 / 0.2), medievalorigins/powers/faded/smart.json (max_mana 0.5, mana_regen 0.2); content/origins/races/high-elf.md (+50 max mana)
  game-data/items.json (Ring of Mana: +100 Max Mana); content/items/magic/runes-orbs-and-inks.md (Mana Upgrade Orb +50 Max Mana, 3 upgrades per item)
  calc: per second = 2 x max x regen x 0.001 = 0.2% of max mana x regen; full refill = 500 s / regen (regen 1: 500 s = 8 min 20 s; Focus 30 -> regen 5.5: about 91 s); base 100 max mana -> 0.2 mana/s
-->
**Mana** is the resource that pays for spells cast from spellbooks and imbued weapons. Every player has a pool of it, shown as a bar above the hunger bar. In Soulrend mana comes back **ten times slower** than Iron's Spells 'n Spellbooks' default, so the size of the pool and how fast it refills shape how a caster plays.

## How it works

- **Maximum mana** starts at 100. Each spell's tooltip gives its mana cost; continuous spells cost mana every second instead.
- **Regeneration** adds a share of maximum mana every half second. With the base Mana Regeneration of 100%, it refills **0.2% of maximum mana per second**, so an empty pool takes **500 seconds (8 min 20 s)** to fill, whatever its size.
- **Mana Regeneration** multiplies that rate: at 200% a pool fills in 250 s.
- **What costs mana:** spellbook casts and, in Soulrend, casts from imbued weapons. [[features/magic/casting-spells#Scrolls|Scrolls]] cost no mana.
- **The mana bar** appears while the player holds a magic item or isn't at full mana, with the current and maximum value written on it.

## Details

- **Respawning** restores only 10% of maximum mana.
- **A bigger pool regenerates faster.** Because regeneration is a percentage, 200 maximum mana comes back at 0.4 mana per second where 100 comes back at 0.2.
- **Potions of Mana** (Instant Mana) restore 25 mana plus 5% of maximum mana per level at once.

### Raising mana

| Source | Effect |
| --- | --- |
| [[leveling/stats\|Intelligence]] | +1 Max Mana and +0.5% Spell Power per point (up to +30 Max Mana). |
| [[leveling/stats\|Focus]] | +1 Max Mana and +15% Mana Regeneration per point (up to +30 Max Mana and +450%, which refills an empty pool in about 91 s). |
| Mage classes | Every [[origins/mage-classes\|mage class]]: +50% Max Mana. [[origins/fusion-classes/spellblade\|Spellblade]] and [[origins/fusion-classes/reaper\|Reaper]]: +20%. |
| Races | [[origins/races/faded\|Faded]]: +50% Max Mana and +20% Mana Regeneration. [[origins/races/high-elf\|High Elf]]: +50 Max Mana and a short regeneration burst. |
| [[skill-trees/mage\|Mage skill tree]] | Many nodes add Max Mana or Mana Regeneration. |
| Gear | [[items/armor/mage-armor\|Mage armor]], the [[item:irons_spellbooks:mana_ring]] (+100 Max Mana) and other [[items/curios-and-accessories/rings\|rings]]. |
| Upgrades | A [[item:irons_spellbooks:mana_upgrade_orb]] adds +50 Max Mana to a piece of gear at the Arcane Anvil (up to 3 upgrades per item). |

## Tips

- Points in Focus pay off most for spellbook casters: regeneration is the only way to get mana back without potions.
- Scrolls and potions cover the gaps while the pool refills.

## Related

- [[features/magic/casting-spells|Casting Spells]]
- [[leveling/stats|Stats]]
- [[items/magic/runes-orbs-and-inks|Runes, Orbs & Inks]]
