---
{
  "title": "Gems & Sigils",
  "summary": "Gems are socketed at a Smithing Table, and the Sigil of Withdrawal takes them out but destroys each one 50% of the time.",
  "icon": "apotheosis:gem"
}
---
<!-- sources:
  config/soulrend_tweaks-common.toml (gemLossChance = 0.5)
  mods/soulrend_tweaks-1.20.1-1.0.1.jar mixin/WithdrawalRecipeMixin (rolls the chance for each socketed gem; lists the lost gems to the player); lang item.soulrend_tweaks.sigil_of_withdrawal.desc.chance
  mods/Apotheosis-1.20.1-7.4.8.jar adventure/socket/WithdrawalRecipe (unmodified version returns every gem)
  content/items/gear-progression/gems/index.md, content/items/gear-progression/sigils.md (sockets, socketing, sigil list)
  config/fallen_gems_affixes-common.toml (extra socket, pre-filled sockets)
-->

**Gems and sigils** are the socketing system for affix gear. A gem gives a bonus when it sits in a socket of an item, and a sigil is a consumable that changes the sockets, gems or affixes of an item at a Smithing Table. Soulrend changes one rule: removing gems is risky.

## How it works

- **Socketing.** Put the item and a gem in a Smithing Table to socket the gem. Affix gear has sockets of its own, and Fallen Gems & Affixes adds one more socket to every item that takes affixes. A [[item:apotheosis:sigil_of_socketing]] adds another socket, up to 3.
- **Tiered sockets.** Some sockets have a rarity, and the gem must be of that rarity or lower. The Sigil of Elevation raises them.
- **Gem cutting.** The Gem Cutting Table upgrades a gem to the next rarity with gem dust and materials.
- **Sigils.** Other sigils reroll, strip or convert parts of an item. The full list is on [[items/gear-progression/sigils|Sigils]].

## The Sigil of Withdrawal

The [[item:apotheosis:sigil_of_withdrawal]] removes the gems from an item. In Apotheosis, every gem comes back intact. Soulrend Tweaks changes that: each socketed gem has a **50% chance to be destroyed** when withdrawn. The surviving gems are returned to the player, and a message lists the gems that were lost.

The chance is set in `config/soulrend_tweaks-common.toml` as `gemLossChance`, and the Sigil's tooltip shows the current value.

## Tips

- Expect to lose about half the gems you take out. Withdraw only from gear you are replacing.
- A destroyed gem cannot be recovered.

## Related

- [[items/gear-progression/gems|Gems]]
- [[items/gear-progression/sigils|Sigils]]
- [[features/gear-and-crafting/reforging-and-affixes|Reforging & Affixes]]
