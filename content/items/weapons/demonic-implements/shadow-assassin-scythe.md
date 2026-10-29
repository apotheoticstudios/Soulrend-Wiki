---
{
  "title": "Shadow Assassin Scythe",
  "summary": "A scythe from Marium's Soulslike Weaponry, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "soulsweapons:shadow_assassin_scythe",
    "rows": [
      ["Type", "Scythe"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "12"],
      ["Attack speed", "1.60"]
    ]
  },
  "items": ["soulsweapons:shadow_assassin_scythe"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type cdmoveset:s_tachi, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: ShadowAssassinScythe class, lang tooltip.soulsweapons.umbral_trespass*, early_combat*
  config/soulsweapons/soulsweapons.json (shadow_assassin_scythe_ability_damage 40, ability_cooldown 300, ticks_before_dismount 120, shadow_step_bonus_damage 2, shadow_step_ticks 60, shadow_step_cooldown 160)
-->

**Shadow Assassin Scythe** is a scythe from Marium's Soulslike Weaponry. It is weapon 25 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 12 |
| Attack Speed | 1.60 |
| Impact | 1.6 |
| Targets per swing | 2 |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Umbral Trespass:** used in combat, it sends the wielder into the soul of the last mob they hit, if that mob is alive, in range and was hit recently. Inside, the wielder takes no damage. On leaving (after at most 6 s), they leap out and the target takes heavy damage: 40 in Soulrend. Cooldown 15 s.
- **Shadow Step:** when not on cooldown, a hit gives the wielder movement speed and 2 bonus damage with this weapon for 3 s. Cooldown 8 s.

## Moveset

In Epic Fight it is an enhanced tachi. Its default One Handed style has a four-hit basic combo and the innate skill Lethal Slash. It has one other style, shown below.

{{moveset soulsweapons:shadow_assassin_scythe}}
