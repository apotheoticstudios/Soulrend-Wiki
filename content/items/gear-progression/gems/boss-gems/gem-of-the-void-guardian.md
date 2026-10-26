---
{
  "title": "Gem of the Void Guardian",
  "summary": "An Apotheosis gem for boots, chestplates, heavy weapons, helmets, leggings, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/void_guardian`"],
      ["Rarities", "Epic to Ancient"],
      ["Unique", "Yes"]
    ]
  }
}
---
<!-- sources:
  researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/gems.json (weight, dimensions, rarities, bonus lines), game-data/recipes.json (crafted gems)
  config/apotheosis/adventure.cfg (Gem Drop Chance 0.08, Gem Boss Bonus 0.5, Gem Loot Rules, Gem Dimensional Rarities as parsed: dimension|min|max)
  Apotheosis jar: AdventureEvents.dropsHigh (player kills of Monsters only)
  fallen_gems_affixes jar: data/fallen_gems_affixes/loot_modifiers/*_modifier.json, GemLootModifier (one gem per kill, chances as weights)
  calc: drop share = weight / sum of weights of gems that can drop in that dimension
-->

**Gem of the Void Guardian** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/void_guardian`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, chestplates, heavy weapons, helmets, leggings, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | +2 levels to all existing enchantments | +3 levels to all existing enchantments | +4 levels to all existing enchantments |
| Chestplates | +10% Armor Toughness | +15% Armor Toughness | +25% Armor Toughness |
| Leggings | +50% Knockback Resistance | +75% Knockback Resistance | +100% Knockback Resistance |
| Heavy Weapons | +20% Crit Chance and +20% Crit Damage | +25% Crit Chance and +30% Crit Damage | +35% Crit Chance and +40% Crit Damage |
| Boots | On hit, gain Evasion (00:05) [⌛ 00:25] | On hit, gain Evasion II (00:08) [⌛ 00:25] | On hit, gain Evasion III (00:11) [⌛ 00:25] |
| Light Weapons | On hit, gain Echoing Strikes (00:08) [⌛ 00:25] | On hit, gain Echoing Strikes II (00:11) [⌛ 00:25] | On hit, gain Echoing Strikes III (00:15) [⌛ 00:25] |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/ender-guardian|Ender Guardian]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
