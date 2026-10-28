---
{
  "title": "Shulk",
  "summary": "Armored shell-dweller: armor, Epic Fight impact, Phase Step teleport, lava immunity and growing storage; slow and hungry.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`origins:shulk`"
      ],
      [
        "Impact",
        "Low"
      ],
      [
        "Classes",
        "Any"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_reforged/data/origins/origins/shulk.json (powers, description)
  config/paxi/datapacks/soulrend_reforged/data/origins/powers/natural_armor.json, strong_arms.json, no_shield.json, more_exhaustion.json, shulker_inventory.json
  config/paxi/datapacks/soulrend_reforged/data/origins/powers/shulk/*.json (heavy_shell, defensive_shell, phase_step 300-tick cooldown, lava_immunity, hoarder_*)
  config/paxi/datapacks/soulrend_reforged/data/origins/tags/blocks/shulk_teleport_unsafe.json
  mods/soulrend_origins-1.2-1.20.1.jar Shulk (Phase Step range 10, cooldown from Ender Spell Power; Hoarder grows on eating Chorus Fruit, 10 per step), OriginMath.shulkCooldown (max(60, ceil(300 / power)) ticks), OriginMath.shulkCapacity (9 + 9 x growth, growth 0-2)
  mods/soulrend_core-2.7-1.20.1.jar gameplay/ShulkShell (still for 20 ticks -> Resistance amplifier 2, 40-tick effect refreshed)
  game-data/tags.json (origins:shields holds only minecraft:shield)
  calc: Resistance III = 60% damage reduction; 300 ticks = 15 s; 60 ticks = 3 s
-->
**Shulks** are kin to the End's Shulkers. A hard shell gives them natural armor and heavy blows, they can fold space to teleport a short distance, and a pocket in their shell holds items that survive death. In exchange they move slowly, get hungry quickly and can't use the vanilla Shield.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Sturdy Skin | +8 armor. | — |
| Strong Arms | +10 Epic Fight Impact in both hands, so blows stagger enemies more easily. | — |
| Defensive Shell | Standing still for 1 second gives Resistance III (−60% damage taken), kept for as long as the Shulk stays still. Moving or using Phase Step ends it. | — |
| Phase Step | Primary ability key: teleports up to 10 blocks toward where the Shulk is looking. It won't land in fire, lava, water, powder snow, cactus, magma, portals or other hazards. | 15 s, divided by Ender Spell Power (at least 3 s) |
| Hoarder | Secondary ability key: opens a personal inventory that is kept on death. It starts with 9 slots and grows to 18 and then 27; each step needs 10 [[item:minecraft:chorus_fruit]] eaten. | — |
| Molten Carapace | Immune to lava damage. Fire and burning still hurt. | — |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Heavy Shell | −20% movement speed. |
| Unwieldy | Can't use a [[item:minecraft:shield]]. |
| Large Appetite | +60% exhaustion, so hunger drains faster. |

> [!NOTE]
> Unwieldy blocks the items in the `origins:shields` tag, which in Soulrend holds only the vanilla Shield. Modded shields aren't affected.

## Playstyle

The Shulk is a slow brawler. Defensive Shell rewards planting the feet and trading blows, and Phase Step covers the distance its low speed can't. Ender Spell Power shortens Phase Step: at +100% Ender Spell Power (2.0 total) the cooldown is 7.5 s, and it bottoms out at 3 s. Hoarder is a safe place for valuables, since it isn't dropped on death.

## Pairs well with

- [[origins/mage-classes/voidmancer|Voidmancer]]: +30% Ender Spell Power shortens Phase Step.
- [[origins/melee-classes/tank|Tank]] and [[origins/melee-classes/warrior|Warrior]]: Sturdy Skin and Defensive Shell stack with their health, armor and damage.
