---
{
  "title": "Gem of the Guardian of Hell",
  "summary": "An Apotheosis gem for boots, chestplates, heavy weapons, helmets, leggings, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/guardian_of_hell`"],
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

**Gem of the Guardian of Hell** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/guardian_of_hell`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, chestplates, heavy weapons, helmets, leggings, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | On hit, gain Monstrous (00:05) [⌛ 00:25] | On hit, gain Monstrous II (00:07) [⌛ 00:25] | On hit, gain Monstrous III (00:10) [⌛ 00:25] |
| Chestplates | Physical damage taken is reduced by 10% | Physical damage taken is reduced by 15% | Physical damage taken is reduced by 25% |
| Leggings | +20% Max Health | +25% Max Health | +40% Max Health |
| Boots | +1 Step Height | +2 Step Height | +3 Step Height |
| Heavy Weapons | On hit, inflict Stun (00:02) [⌛ 00:10] | On hit, inflict Stun II (00:03) [⌛ 00:10] | On hit, inflict Stun III (00:05) [⌛ 00:10] |
| Light Weapons | +1 Attack Knockback and +20% Fire Damage | +2 Attack Knockback and +40% Fire Damage | +3 Attack Knockback and +65% Fire Damage |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
