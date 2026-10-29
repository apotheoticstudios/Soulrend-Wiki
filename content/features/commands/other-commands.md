---
{
  "title": "Other Commands",
  "summary": "Useful commands from Soulrend's other mods: parties and claims, FTB Teams, graphics and performance, waystones, corpses and pre-generation.",
  "aliases": ["/oparties", "/oclaims", "/ftbteams", "/fsoclient", "/waystones", "/deathhistory"],
  "icon": "minecraft:command_block"
}
---
<!-- sources:
  mods/open-parties-and-claims-forge-1.20.1-0.32.7.jar command prefixes oparties, oclaims, opac; CreatePartyCommand, InvitePartyCommand (member invite <player>), InviteAcceptPartyCommand (join <id>), LeavePartyCommand, AllyPartyCommand (ally add <player>), ClaimsClaimCommand (claim, unclaim), ClaimsForceloadCommand (forceload, unforceload); no permission requirement on these
  mods/ftb-teams-forge-2001.3.2.jar FTBTeamsCommands (party create [name], join, decline, leave, invite <players>, kick <players>, transfer_ownership <player>, allies add|remove <player>, settings)
  mods/feelixs_soulrend_optimizations-0.1.1.jar lang command.help.* (/fsoclient status, preset <potato|low|medium|high|ultra|auto>, preset check, restore, features, feature <id> <on|off>, safemode <on|off>, jeicache clear, shader <bliss|complementary>); client-side command
  mods/waystones-forge-1.20.1-14.1.21.jar ModCommands (/waystones activate, forget, place, count, list, cooldown reset <warp_stone|inventory_button|all>; permission level 2)
  mods/corpse-forge-1.20.1-1.0.23.jar HistoryCommand (/deathhistory <player>, permission level 2)
  mods/Chunky-1.3.146.jar (/chunky)
-->
**Other Commands** lists the commands of Soulrend's other mods that players and server operators use most. Commands marked **operator** need permission level 2 (operators on a server, or cheats in singleplayer); the rest work for every player.

## Parties and claims

From Open Parties and Claims (see [[features/multiplayer/teams-and-claims|Teams & Claims]]):

| Command | Does |
| --- | --- |
| `/oclaims claim` / `unclaim` | Claims or releases the chunk you stand in. |
| `/oclaims forceload` / `unforceload` | Keeps a claimed chunk loaded, or stops. |
| `/oparties create` | Creates a party. |
| `/oparties member invite <player>` | Invites a player. |
| `/oparties join <id>` | Accepts an invite; the invite message carries the command. |
| `/oparties leave` | Leaves the party. |
| `/oparties ally add <player>` | Makes that player's party an ally. |

The same actions are in the Open Parties and Claims menu (**'** key).

## Quest teams

From FTB Teams: `/ftbteams party create <name>`, `invite <player>`, `join`, `decline`, `leave`, `kick <player>`, `transfer_ownership <player>` and `allies add|remove <player>`. A party shares quest progress; see [[features/multiplayer/teams-and-claims|Teams & Claims]].

## Graphics and performance

`/fsoclient` comes from Feelix's Soulrend Optimizations and runs on your own game, so it works on any server:

| Command | Does |
| --- | --- |
| `/fsoclient status` | Shows the version, safe mode and the current graphics preset. |
| `/fsoclient preset <potato\|low\|medium\|high\|ultra\|auto>` | Applies a [[features/settings-and-performance/graphics-presets\|graphics preset]]; `auto` uses the one recommended for your PC. |
| `/fsoclient preset check` | Lists any setting of the preset that isn't in effect. |
| `/fsoclient shader <bliss\|complementary>` | Picks the shader High and Ultra switch on. |
| `/fsoclient restore` | Puts back every setting the mod changed. |
| `/fsoclient features` | Lists every feature and whether it is on. |
| `/fsoclient feature <id> <on\|off>` | Switches one feature from the next launch. |
| `/fsoclient safemode <on\|off>` | Switches every feature off (or back) from the next launch. |
| `/fsoclient jeicache clear` | Deletes the cached JEI search index; it is rebuilt on the next world join. |

## Operator tools

| Command | Does |
| --- | --- |
| `/waystones list <player>` | Lists the waystones a player has activated. |
| `/waystones activate` / `forget` | Adds a waystone at a position to players' lists, or removes it. |
| `/waystones cooldown` | Resets players' Warp Stone cooldowns. |
| `/deathhistory <player>` | Opens a player's [[features/travel-and-storage/corpses\|death history]], with a button to teleport to each death. |
| `/chunky` | Chunky's commands for [[features/settings-and-performance/pre-generation\|pre-generating]] terrain on a server. |

## Related

- [[features/commands|Commands]]
- [[features/commands/soulrend-command|/soulrend]]
- [[features/commands/origin-command|/origin]]
- [[features/commands/skilltree-command|/skilltree]]
