---
{
  "title": "Revenant",
  "summary": "Undead summoner: raises a squad of undead on demand, commands it and walls itself in skeletons; villagers refuse to trade.",
  "infobox": {
    "rows": [
      [
        "ID",
        "`medievalorigins:revenant`"
      ],
      [
        "Impact",
        "High"
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
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/origins/revenant.json (powers)
  config/paxi/datapacks/soulrend_reforged/data/medievalorigins/powers/revenant/skeleton_summons.json (primary key, cooldown 1200), command_summons.json (tertiary key, cooldown 10)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/powers/revenant/*.json (transfer_item, hellraiser cooldown 900, unwitherable, poor_reputation: reputation -100, illager truce broken for 150 x 2 ticks after hitting one, disturbed)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/medievalorigins/functions/mdvlorigins/hellraiser.mcfunction (16 NoAI skeletons in a 3-block ring, LifeTicks 200)
  config/paxi/datapacks/soulrend_origins_classes/data/medievalorigins/powers/revenant/undeadge.json (water breathing; poison and regeneration immunity)
  mods/soulrend_origins-1.2-1.20.1.jar Revenant.summon (tier from Evocation Spell Power), Revenant.spawn (types: 0 zombie, 1 skeleton with a sword, 2 skeleton with a bow, 3 wither skeleton with a sword, 4 Summoned Kamath 100 health / 15 attack; expiry 2400 ticks), static SQUADS table, OriginMath.revenantTier (clamp(floor(power / 4) - 1, 0, 4))
  mods/soulrend_core-2.7-1.20.1.jar gameplay/BeastMaster (Revenant squads count as summons)
  config/origins_server.json (siphon, putrid_communion, black_thumb, unguarded disabled)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names, badges.medievalorigins.revenant.*)
  calc: 1200 ticks = 60 s; 900 ticks = 45 s; 200 ticks = 10 s; 2400 ticks = 2 min; 300 ticks = 15 s
-->
**Revenants** died and came back. They raise a squad of undead with a key press, order it to stay, follow or come, and can wall themselves in with skeletons. Like the undead they command, they ignore Wither and can't use Regeneration, and villagers want nothing to do with them.

## Powers

| Power | Effect | Cooldown |
| --- | --- | --- |
| Revenance | Primary ability key: raises an undead squad next to the Revenant. No materials are needed. The squad lasts 2 minutes, and raising a new one replaces the old. See [[#Squads]]. | 60 s |
| Command Undead | Tertiary Active key: cycles the squad's orders between stay, follow and come to me (same dimension only). | 0.5 s |
| Equip summons | Right-clicking one of the Revenant's own summons with a piece of equipment hands it over. | — |
| Reaper's Ward | Secondary ability key: raises a ring of 16 motionless skeletons 3 blocks around the Revenant as a shield. They last 10 s. | 45 s |
| Necrotic Curse | Immune to Wither. | — |
| Undead | Immune to Poison; permanent Water Breathing. | — |
| Chaotic Ally | Illagers ignore the Revenant, until it hits one; the truce returns 15 s later. | — |

## Squads

The squad's size depends on the Revenant's Evocation Spell Power. The tier is the power divided by 4, rounded down, minus 1.

| Tier | Evocation Spell Power | Squad |
| --- | --- | --- |
| 0 | below 8.0 | 1 Zombie, 1 Skeleton archer |
| 1 | 8.0 | 2 Zombies, 1 Skeleton swordsman, 1 Skeleton archer |
| 2 | 12.0 | 2 Zombies, 2 Skeleton archers, 2 Wither Skeletons |
| 3 | 16.0 | 3 Skeleton archers, 5 Wither Skeletons |
| 4 | 20.0 | 3 Skeleton archers, 4 Wither Skeletons, Kamath (100 health, 15 attack damage) |

> [!WARNING]
> Evocation Spell Power starts at 1.0 (100%), and tier 1 needs 8.0. In practice the squad is a Zombie and a Skeleton archer. The in-game text promises up to 8 summons including Kamath; see [[bugs#Revenant squads above tier 0 are out of reach|Known Bugs]].

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Undead | Immune to Regeneration, so regeneration potions, spells and effects don't heal. |
| Chaotic Ally | Village reputation is set to −100: villagers refuse to trade, and Trading Posts can't be used. |
| Disturbed | Can't sleep (beds still set the spawn point). Phantoms never spawn for the Revenant. |

> [!NOTE]
> Soulrend turns off Essence Extraction, Putrid Communion, Black Thumb and Unguarded, so Revenants can harvest crops and take normal damage from mobs.

## Playstyle

The Revenant fights alongside its squad: raise it before a fight, park it with Command Undead, and drop Reaper's Ward when surrounded. Since Regeneration doesn't work, healing comes from food, instant healing and life steal.

## Pairs well with

- [[origins/melee-classes/beast-master|Beast Master]]: its summon bonuses (+30% damage, +5% max health, +20 armor) apply to Revenant squads.
- [[origins/mage-classes/summoner|Summoner]]: +30% Evocation Spell Power, and its own summon spells add to the squad.
