---
{
  "title": "Minor Update: Leveling, Progression, Balance Overhaul 8.5",
  "summary": "Soulrend 8.5, Leveling, Progression, Balance Overhaul, released Oct 9, 2026.",
  "aliases": [
    "v8.5",
    "Soulrend 8.5"
  ]
}
---
<!-- sources: CurseForge file 9105308 and Soulrend-Development changelog.txt; Soulrend-Development commit history for the backend entries -->
**Released:** Oct 9, 2026

Mob leveling now follows player level 1:1, and gems, spells and the skill trees were rebalanced.

## Gameplay Changes

- New mob leveling linked to player levels: mob levels scale 1:1 with player level instead of distance. A new mob takes the average level of players within 30 blocks, or of everyone online if nobody is nearby.
- Pets and summons scale with their owner's level and update when the owner levels up (spell power applies after). Bosses keep their base level but scale 1:1 with the player when the player exceeds it.
- Decreased mob damage per level from 0.125 to 0.1.
- Many gem changes: lower spell power on most magic gems, useless stats replaced with ones fitting each gem's theme, nerfed crit on several gems, buffs for a few weak gems and jewels, and the strongest gems drop only from tougher bosses.
- Removed lifesteal from affixes and gems (replaced with overheal) (credit: CanuckleHeadedViking and Haise), all affixes from Curios items, and many affix effects from tools (pickaxes, shovels).
- Added a strict 5% max health per second damage cap for Cataclysm bosses.
- Rebalanced the Samurai class (+50% Katana damage), many spells (higher spell power multipliers), and revamped many skill tree nodes and textures.
- Revamped Estus flask healing (percentage of health based).
- New Lancer class. Added a Scythe weapon bonus to the Reaper class, and removed the Heavenly Implements (spear) damage buff for Valkyrie and the Devil's Arms (scythe) damage buff for Keres.
- Overhauled the Yeti, Revenant, Shulk and Dwarf origins with new abilities (Haise).
- Reworked dragon summoning crystals and reinstated the dragon horn (Haise).
- Added crafting recipes for most skill books.
- Disabled party hats.
- New and revamped textures for the entire Simply Swords mod (thanks Ruseki), and retextured all dragon radars (thanks LaTabla).
- Fixes: items disappearing on death, Orc breaking claimed chunks, Feral origin bugs on servers, Samurai starting with a twig weapon, friendly fire to pets and summons, the stamina bar overlaying GUI elements, hoes being two-handed weapons, many weapon types with incorrect or missing tags, Past dimension mob spawning logic, and the Undead passive for undead origins.

## Backend Changes

- Refactored the entire KubeJS codebase for backend progression, crafting, magic, NBTs, attributes and recipes. It uses a shared config and helper system for weapon progression, magic attributes and recipe generation.
- Added standardized weapon upgrade paths for Netherite, Warden and Runic progression across gear trees, and standardized the magic school attribute mapping for spellbooks, weapons and staffs.
- Magic and equipment crafting now centralize spell power, item NBT retention and recipe overrides. Removed redundant legacy recipe definitions and duplicated progression paths from equipment scripts, and fixed recipe duplication and legacy weapon recipe conflicts.
- Added config-based support for Past dimension mob spawning fixes (resolving registry entity IDs correctly), dwarf gem drops and brews. Fixed spell container retention and upgraded NBT merging for Iron's Spells items.
- Expanded client-side tooltip, JEI and feral input tuning. Fixed client-side config and tooltip issues, and several early-loading registry crashes.
- Improved performance in Create-heavy areas (up to +30% FPS) and memory profiling (fewer micro-stutters).
- Improved server-side logging and debug tooling for inventory, attribute and spell dumps.
- Updated mods and Forge (47.4.26).

### Mods and resource packs

**Added:** Smooth Movement

**Removed:** Small Ships (unnecessary)
