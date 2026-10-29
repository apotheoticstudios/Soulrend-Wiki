---
{
  "title": "Hall of Fame",
  "aliases": ["Hall of Champions", "Players who beat Soulrend"],
  "summary": "Every player who has beaten Soulrend without cheating, in the order they joined.",
  "icon": "minecraft:player_head"
}
---
<!-- sources:
  soulrend_core compat/ftbquests/HallOfFame (final quest 1E89C6A37F3C67E1, the chat prompt, /soulrend halloffame, cheat rules: playtime at most 1 minute when first seen, complete commands a non-op can't run and their targets except clear/damage/gamemode/kick/kill, creative/spectator mode), mixin/halloffame (typed commands only, JEI notifyGive, FTB Quests TeamData.setCanEdit), client/HallOfFameSubmit (Mojang join handshake)
  config/ftbquests/quests/chapters/duties.snbt (Blessing of Mortusest: depends on Defeat Arterius and Defeat the Scarlet Hunter)
  worker/index.js (entries, verification, bans)
-->

Every player below has completed [[progression/act-v-duties/blessing-of-mortusest|Blessing of Mortusest]], the last quest of Act V, after defeating both [[progression/act-v-duties/defeat-arterius|Arterius]] and [[progression/act-v-duties/defeat-the-scarlet-hunter|the Scarlet Hunter]], without cheating. They are listed in the order they joined.

{{halloffame}}

## Joining

When you complete Blessing of Mortusest without cheating, a message in chat offers **[Feature me on the Soulrend Wiki]**. Click it to add your name and head here. Nothing is sent until you click. If you missed the message, type `/soulrend halloffame`. If your playthrough can't join, the command says why.

- Mojang confirms that you own the account, so nobody else can add you, and the name and skin shown here come from Mojang. Offline (non-premium) accounts can't be featured.
- Running the command again later updates your name and skin. Your place in the list stays the same.

## No cheats

Soulrend Core watches each character from their first minute in a world until they complete the final quest. Any of these rules the playthrough out for good:

- **Op commands**: typing any command a player without operator permissions couldn't run, such as `/give`, `/gamemode`, `/tp`, `/time`, `/effect` or `/ftbquests change_progress`. A player another operator targets with such a command is ruled out too, unless it only punishes or moderates them (`/kick`, `/kill`, `/clear`, `/damage`, `/gamemode` back to survival). Commands that fail to parse or are left unfinished don't count.
- **Creative or spectator mode**, however you get there: a creative world, `/gamemode`, F3+F4, F3+N or opening to LAN in creative.
- **JEI cheat mode** item spawning.
- **FTB Quests editing mode**.

Some things don't count against you:

- Having cheats *allowed* in the world, or being an operator, as long as you never use them.
- Commands that mods, quests and origin powers run for you.
- Anything you do after completing the final quest.

Two more conditions:

- The character must be tracked from the start. A character that already had playtime in the world when the server or game got this version of Soulrend Core can't join, because its earlier play can't be checked.
- You must be online when your team completes the final quest.
- When you click the chat link, the game asks once more before anything is sent.
