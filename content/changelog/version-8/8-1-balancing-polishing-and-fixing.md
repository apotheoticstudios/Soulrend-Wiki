---
{
  "title": "Minor Update: Balancing, Polishing and Fixing 8.1",
  "summary": "Soulrend 8.1, Balancing, Polishing and Fixing, released May 26, 2026.",
  "aliases": [
    "v8.1",
    "Soulrend 8.1"
  ]
}
---
<!-- sources: CurseForge file 8147374 and Soulrend-Development changelog.txt; Soulrend-Development commit history for the backend entries -->
**Released:** May 26, 2026

Balancing, a new skill point formula and a strict boss damage limit.

## Gameplay Changes

- Changed the skill point limit to 200, and fixed skill point progression with a new formula (30 * 1.4^level) (thanks soldierdonkey).
- Added a strict boss damage limit: players deal at most 20% of a boss's max HP every 0.75 seconds.
- Removed the usage of max HP damage and most instances of current HP damage.
- Added icons to skill tree nodes (thanks Canuckle Headed Viking and soldierdonkey), and balanced and adjusted the skill trees.
- Reworked the Paladin class and reordered the class menu. The Keres bloodthirst ability now activates by sneaking.
- Significantly buffed the stats of many Soulslike Weaponry legendary weapons, and fixed armor attributes (Nesil).
- The Gravewatcher now drops more cursed souls (for Kamath summoning).
- Increased exhaustion while flying and slightly decreased flight speed.
- Added a message when a player tries to enter the Nether while it is not unlocked.
- Added an automatic AFK mode after 20 seconds of inactivity, which can save power on laptops.
- Fixed Runic Tablets not being lootable and increased their chance, and adjusted several quest rewards and fixed several quest errors.
- Fixed instant-breaking equipment, disappearing hotbar items and spell balancing configs not applying on servers.

## Backend Changes

- General performance improvements, including about 90% better performance for Tom's Storage Networks.
- Disabled unnecessary startup chat messages.
- Fixed a crash on Apple systems and older Windows, and a Fancy Trail and AsyncParticles crash.
- Updated mods.

### Mods and resource packs

**Added:** Tom's Performant Storage, RestMode

**Removed:** Accelerated Rendering
