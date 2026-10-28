---
{
  "title": "Fading Mage",
  "summary": "A neutral Traveloptics mage in the Deep Dark's Echo Shrine who trades rare items for Void Manuscripts.",
  "items": ["traveloptics:fading_mage_spawn_egg"],
  "infobox": {
    "item": "traveloptics:fading_mage_spawn_egg",
    "model": "traveloptics:fading_mage",
    "rows": [
      ["ID", "`traveloptics:fading_mage`"],
      ["Level", "The player's level"],
      ["Health", "7,620 HP (level 40)"],
      ["Location", "Echo Shrine, Deep Dark"],
      ["Trades for", "[[item:traveloptics:void_manuscript]]"]
    ]
  }
}
---
<!-- sources:
  mods/traveloptics-6.3.0-1.20.1.jar FadingMageEntity (extends Iron's NeutralWizard, implements IMerchantWizard and AntiMagicSusceptible; trading with restocks; onAntiMagic and DESPAWN_TRIGGERED fade it away)
  mods/traveloptics-6.3.0-1.20.1.jar CommonSetup (registers FADING_MAGE with NightwardenBossEntity.prepareAttributes: 600 max health, 18 attack damage, 10 armor, 1.0 knockback resistance, 0.2 movement speed, 70 follow range)
  mods/traveloptics-6.3.0-1.20.1.jar assets/traveloptics/lang/en_us.json (fading_mage_spawn_egg.guide: found at Echo Shrine in Deep Dark biomes; only accepts Void Manuscript; dialogue lines)
  mods/traveloptics-6.3.0-1.20.1.jar data/traveloptics/structures/echo_shrine.nbt (holds a Fading Mage); worldgen/structure/echo_shrine.json (#traveloptics:has_structure/echo_shrine = minecraft:deep_dark), structure_set (spacing 40, separation 24)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L40: health 600 × 12.7 = 7,620; attack 18 × 4.9 = 88.2; armor 10 × 1.429 = 14.3
        L100: health 600 × 30.7 = 18,420; attack 196.2; armor 20.9
-->
**Fading Mage** is a neutral mage who lives in the Echo Shrine, a Traveloptics structure in the Deep Dark. It isn't a boss fight: it is a trader that accepts only Void Manuscripts ([[item:traveloptics:void_manuscript]]), and it fades away if hit with anti-magic. It shares its base stats with [[The Nightwarden]].

## Location

The Fading Mage waits in the Echo Shrine (`traveloptics:echo_shrine`), which generates in Deep Dark biomes, at most once per 40 × 40 chunk area.

## Trading

Right-clicking the Fading Mage starts its dialogue and then trading. It sells rare and exclusive items, and it accepts only Void Manuscripts as payment, never emeralds. Its stock restocks over time.

One source of Void Manuscripts is the last optional quest of [[progression/act-iv-beyond-reality|Act IV]] (see [[The Nightwarden#Quests]]).

<!-- TODO: trade list (FadingMageEntity.createRandomOffers). -->

## Stats

The Fading Mage is neutral. It has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act II (40) | Act III (100) |
| --- | --- | --- | --- |
| Health | 600 HP | 7,620 HP | 18,420 HP |
| Attack damage | 18 | 88.2 | 196.2 |
| Armor | 10 | 14.3 | 20.9 |

Anti-magic, such as a Counterspell, makes it fade away.

## Dialogue

> [!LORE] Fading Mage
> They stopped believing... Not because magic faded… but because they were told it had. Machines replaced mages... A world run by metal and logic leaves no room for dreams. But I remembered. They laughed when I said magic was still here. Some truths aren’t forgotten... they’re buried.
