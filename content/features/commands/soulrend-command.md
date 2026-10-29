---
{
  "title": "/soulrend",
  "summary": "Operator command for Soulrend levels and skill points, silent command runs, and debug dumps of item and spell ids.",
  "aliases": ["soulrend command", "/soulrend level", "/soulrend silent"],
  "icon": "minecraft:command_block"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendCommands (/soulrend level set|reset <targets> [level], /soulrend skillpoints set|reset; permission level 2; level 0-200)
  kubejs/server_scripts/global.js ServerEvents.commandRegistry (/soulrend silent <command>: runs the rest of the line as a server command with output suppressed; /soulrend debug dump inventory: writes the player's unique item ids as a JS array to logs/server.log, players only; /soulrend debug dump spells: logs every spell id; both branches require permission level 2)
  content/leveling/index.md (what levels and skill points are)
-->
**/soulrend** is Soulrend's own command. Part of it comes from Soulrend Core (levels and skill points) and part from the pack's KubeJS scripts (silent runs and debug dumps). Every subcommand needs **permission level 2**: operators on a server, or cheats enabled in singleplayer.

## How it works

| Command | Does |
| --- | --- |
| `/soulrend level set <players> <level>` | Sets the players' [[leveling\|Soulrend level]] (0 to 200). |
| `/soulrend level reset <players>` | Resets their Soulrend level. |
| `/soulrend skillpoints set <players> <value>` | Sets their earned skill points. |
| `/soulrend skillpoints reset <players>` | Resets their skill points. |
| `/soulrend silent <command>` | Runs any command without printing its output in chat. |
| `/soulrend debug dump inventory` | Writes the ids of every item in your inventory to `logs/server.log`, formatted as a list for a script. |
| `/soulrend debug dump spells` | Writes the id of every registered spell to the log. |

## Details

- `silent` is meant for command blocks, quests and functions that run commands for a player and shouldn't spam their chat.
- `debug dump inventory` only works when a player runs it, and reports "Your inventory is completely empty." if there is nothing to dump.
- The debug commands are tools for the pack's developers; they change nothing in the world.

## Related

- [[features/commands|Commands]]
- [[features/commands/skilltree-command|/skilltree]]
- [[leveling|Leveling]]
