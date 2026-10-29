---
{
  "title": "Visit the Past",
  "summary": "Act V quest that completes on arriving in the Past, entered with the Emblem of the Past and left by dying or warping out.",
  "infobox": {
    "item": "kubejs:emblem_of_the_past",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-v-duties|Act V – Duties]]"],
      ["Requires", "[[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]]"],
      ["Task", "Enter the Past (`graveyard:past`)"],
      ["Rewards", "None"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/duties.snbt quest 7DAC338EE5CF1A0D (depends on Emblem of the Past; dimension task graveyard:past; description; no rewards)
  kubejs/server_scripts/dimension/past.js (Emblem right-click: refuses inside the Past with "You are already in the battlefield..."; teleports to the same x/z at y=200; Slow Falling for 600 ticks; 100-tick cooldown; message "You have been cast into the infinite trenches..."; forced thunder in the Past)
  kubejs/server_scripts/dimension/past.js CONFIG.PAST (SOLDIERS: zombies, zombie villagers, skeletons and wither skeletons replaced by named soldiers; DRAGON_VARIANTS for fire, ice and lightning dragons; BOSSES Arterius, Scarlet Hunter, Nightlord with BOSS_HEALTH 12000 / BOSS_DAMAGE 2000; BAN_SPAWNS chickens, Aquaculture fish, quark:forgotten; BAN_ITEMS wheat seeds never drop; SOLDIER_CROWD_LIMIT 3 within 24 blocks; no soldiers within 96 blocks of a Nightfall boss; one Decaying King per 256 blocks)
  pack author (2026-10-24): the way out of the Past is dying or warping out with a waystone item
-->
**Visit the Past** is the [[progression/act-v-duties|Act V]] quest that completes on arrival in the Past, the act's own dimension. It has no reward, but it opens every remaining quest of the act: the two boss lines and the [[progression/act-v-duties/esoteric-material|Galactic Core]].

## Requirements

- [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]]

## Objectives

Enter the Past.

> [!LORE] Visit the Past (Act V)
> Your greatest challenge begins now.

## Walkthrough

1. Right-click the [[item:kubejs:emblem_of_the_past]] anywhere outside the Past. It drops you into the Past at the same x and z, at y=200, with 30 s of Slow Falling and the message "You have been cast into the infinite trenches...".
2. Land and get your bearings. It is always thundering in the Past, and its soldiers are reskinned, much stronger versions of normal mobs (see [[#The Past]]).
3. To leave, warp out with a [[item:waystones:warp_stone]] or [[item:waystones:warp_scroll]] to a waystone in another dimension, or die. The Emblem doesn't work inside the Past ("You are already in the battlefield...").

> [!TIP]
> Because the Emblem keeps your x and z, using it from a known spot means you always arrive above the same area of the Past. Carry a Warp Stone or spare Warp Scrolls before going in.

## The Past

The Past is Soulrend's Act V dimension, added by its own datapack and KubeJS scripts. Several rules apply only there:

- **It is always thundering.**
- **Soldiers replace the undead.** Every zombie, zombie villager and skeleton that spawns is turned into a named, armed soldier with fixed health and damage, and every wither skeleton into a [[bosses/act-v/decaying-king-past|Decaying King]]. See [[enemies/act-v/rotten-soldiers|Rotten Soldiers]] and [[enemies/act-v/emaciated-soldiers|Emaciated Soldiers]]. At most three soldiers gather within 24 blocks of each other, none spawn within 96 blocks of a Nightfall boss, and only one Decaying King spawns within 256 blocks.
- **Dragons become Elden Beasts.** Fire, ice and lightning dragons spawn armored, as one of four Elden variants (see [[enemies/act-v/elden-beasts|Elden Beasts]]).
- **Bosses are rebuilt.** Arterius, the Scarlet Hunter and the Nightlord get 12,000 base health and 2,000 base attack damage before their level bonus (see [[bosses/act-v|Act V Bosses]]).
- **Some things never appear:** chickens, Aquaculture's fish and Quark's Forgotten don't spawn, and wheat seeds never drop.

## Next

- [[progression/act-v-duties/defeat-the-scarlet-hunter|Defeat The Scarlet Hunter]]
- [[progression/act-v-duties/defeat-arterius|Defeat Arterius]]
- [[progression/act-v-duties/esoteric-material|Esoteric Material]]
