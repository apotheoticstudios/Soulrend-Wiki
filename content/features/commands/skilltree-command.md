---
{
  "title": "/skilltree",
  "summary": "Operator command from Passive Skill Tree: add or set skill points, reset a tree, or grant a single skill.",
  "aliases": ["skilltree command", "/skilltree reset", "Reset Skill Tree"],
  "icon": "skilltree:wisdom_scroll"
}
---
<!-- sources:
  mods/PassiveSkillTree-1.20.1-BETA-0.7.6c-all.jar PSTCommands (/skilltree points add <player> <amount>, /skilltree points set <player> <amount>, /skilltree reset <player>, /skilltree grant_skill <player> <skill_id>; hasPermission(2)); lang skilltree.message.point_command, reset_command "Your skill tree has been reset.", grant_skill_command; item.skilltree.amnesia_scroll ("Resets your passive skill tree", "%d%% of your skill points will be lost")
  config/skilltree-common.toml ["Amnesia Scroll"] penalty 0, "Drop amnesia scrolls from the Ender Dragon" true
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/ (skill ids such as skilltree:warrior_6)
-->
**/skilltree** is the Passive Skill Tree command for a player's [[skill-trees|skill tree]]. It needs **permission level 2** (operators, or cheats in singleplayer).

## How it works

| Command | Does |
| --- | --- |
| `/skilltree points add <player> <amount>` | Gives the player skill points. |
| `/skilltree points set <player> <amount>` | Sets the player's unspent skill points. |
| `/skilltree reset <player>` | Removes every skill the player has learned ("Your skill tree has been reset."). |
| `/skilltree grant_skill <player> <skill_id>` | Learns one skill for the player, such as `skilltree:warrior_6`. |

## Details

- In normal play, skill points come from [[leveling|Soulrend levels]], not from this command; `/soulrend skillpoints` (see [[features/commands/soulrend-command|/soulrend]]) changes the Soulrend side.
- **Players can reset their own tree** with an [[item:skilltree:amnesia_scroll]]. In Soulrend it loses no points (the penalty is set to 0%), and the Ender Dragon drops one.
- Skill ids are shown in the sources of each [[skill-trees|skill tree page]].

## Related

- [[skill-trees|Skill Trees]]
- [[features/commands|Commands]]
