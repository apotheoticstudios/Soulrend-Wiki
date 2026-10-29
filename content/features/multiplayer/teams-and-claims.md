---
{
  "title": "Teams & Claims",
  "summary": "FTB Teams parties share quest progress; Open Parties and Claims protects your chunks from other players, explosions and fire.",
  "aliases": ["FTB Teams", "Open Parties and Claims", "OPAC", "Claims", "Parties", "Land Claims"],
  "icon": "minecraft:white_banner"
}
---
<!-- sources:
  mods/ftb-teams-forge-2001.3.2.jar FTBTeamsCommands (/ftbteams party create [name], join, decline, leave, invite <players>, kick <players>, transfer_ownership <player>, settings, allies add|remove <player>, list) and lang (ftbteams.create_party.info "Create a Party team to invite members and progress together")
  mods/open-parties-and-claims-forge-1.20.1-0.32.7.jar PartyCommandRegister.COMMAND_PREFIX "oparties", ClaimsCommandRegister.COMMAND_PREFIX "oclaims", CommonCommandRegister "opac"; CreatePartyCommand, InvitePartyCommand (member invite <player>), InviteAcceptPartyCommand (join <id>), LeavePartyCommand, AllyPartyCommand (ally add <player>), ClaimsClaimCommand (claim / unclaim), ClaimsForceloadCommand (forceload / unforceload); lang gui.xaero_pac_ui_* (Main Menu: Claim, Unclaim, Forceload, Anchor), gui.xaero_pac_key_open_menu
  defaultconfigs/openpartiesandclaims-server.toml ([serverConfig.parties] maxPartyMembers 64, maxPartyAllies 64, partyExpirationTime 720 h; [serverConfig.claims] maxPlayerClaims 50, maxPlayerClaimForceloads 10, maxClaimDistance 5, playerClaimsExpirationTime 960 h, claimableDimensionsList empty = every dimension; forcedBlockProtectionExceptionList minecraft:crafting_table)
  saves/New World/serverconfig/openpartiesandclaims-default-player-config.toml (mod defaults: protectClaimedChunks true; exceptions blocksByExplosions false, fireSpread false, entitiesByExplosions false; playerDeathLoot "N"; parties.shareLocationWithParty true, receiveLocationsFromParty true; claims.forceload offlineForceload false, not player-configurable)
  config/defaultoptions/keybindings.txt (gui.xaero_pac_key_open_menu apostrophe; key.ftbteams.open_gui unbound; Xaero's World Map M)
-->
**Teams and claims** are how players share progress and protect their bases in multiplayer. Soulrend has two separate systems: **FTB Teams** groups players into a party that shares quest progress, and **Open Parties and Claims** lets players claim land and form their own parties for it. They don't sync with each other, so a group that wants both creates both.

## How it works

### FTB Teams: shared quests

An FTB Teams **party** progresses through the quest book together: a quest one member completes counts for the whole party.

| Command | Does |
| --- | --- |
| `/ftbteams party create <name>` | Creates a party with you as owner. |
| `/ftbteams party invite <player>` | Invites a player. |
| `/ftbteams party join` / `decline` | Accepts or declines an invite. |
| `/ftbteams party leave` | Leaves the party. |
| `/ftbteams party kick <player>` | Removes a member (owner only). |
| `/ftbteams party transfer_ownership <player>` | Hands the party to another member. |
| `/ftbteams party allies add <player>` | Marks a player as an ally. |

The FTB Teams screen has a key too, unbound by default.

### Open Parties and Claims: land

A **claim** covers one chunk. Inside your claims, other players can't break or place blocks, open containers or hurt your animals, and explosions and fire spread don't change anything.

1. Press **'** (apostrophe) to open the Open Parties and Claims menu.
2. Stand in the chunk to protect and press **Claim**. `/oclaims claim` does the same.
3. Repeat for each chunk. Claimed chunks show on Xaero's minimap and World Map (M) in your claim color.

An Open Parties and Claims **party** shares claim access: members can build in each other's claims and see each other's position on the map. Create one with `/oparties create`, invite with `/oparties member invite <player>`, and the invited player accepts with the `/oparties join` command from the invite message.

## Details

These are the limits in the pack's own config; a server can change them.

- **50 claims** per player, each within 5 chunks of where the player stands.
- **10 forceloaded chunks** per player (the Forceload button). They stay loaded only while the owner is online.
- **Every dimension** can be claimed.
- **Inactive claims expire.** Claims of a player who hasn't played for 960 hours (40 days) are released; an inactive party is removed after 720 hours (30 days).
- **Parties** hold up to 64 members and 64 allied parties.
- **Crafting tables** in a claim can always be used by anyone.
- Owners can open up parts of their protection (doors, chests, item frames and so on) for other players in the claim settings.

## Tips

- Claim the chunks with your storage first; claims also shield them from explosions (see [[features/travel-and-storage/storage-practices|Storage Practices]]).
- A party in both systems gives shared quests and shared building rights.

## Related

- [[features/multiplayer/soulrend-realms|Official Servers]]
- [[features/commands/other-commands|Other Commands]]
