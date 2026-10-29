---
{
  "title": "Major Update: Might and Magic 8.0",
  "summary": "Soulrend 8.0, Might and Magic, released May 16, 2026.",
  "aliases": [
    "v8.0",
    "Soulrend 8.0"
  ]
}
---
<!-- sources: CurseForge file 8096865 and Soulrend-Development changelog.txt; Soulrend-Development commit history for the backend entries -->
**Released:** May 16, 2026

New skill trees, dimensions, spells and classes. The notes warn that every player's skill tree is reset.

## Gameplay Changes

- Your skill tree will be reset. Added 4 new skill trees and removed the old one.
- 4 new dimensions, 12+ new armor sets, 30+ new legendary weapons and 4+ new bosses.
- 70+ new spells, including a new Aqua spell school, and a slight increase to the spell power multiplier of all spells. Spell summons scale much better with spell power (about +40%).
- Completely revamped all classes.
- Added new origins: Faded (Simple, Difficult and Magical), Keres (the opposite of Valkyrie) and Eldritch Mage (a Mage, but Eldritch). Cannibalism was added during the cycle.
- More ranged weapon options, with 34 legendary bows, a Too Many Bows questline and 30 previously unused Skill Books.
- New third-person camera and better lock-on mechanics (thanks Heяø).
- Removed the equipment durability system.
- Rebalanced mob leveling stats, fixed unbalanced koboleton mob leveling, and changed hidden boss levels: Warden 100 to 60, Ferrous Wroughtnaut 60 to 25, Kamath 60 to 30.
- Significantly improved crit chance and crit damage gem attributes.
- Quests: updated Magic Gear, Epic Fight and affix enchanting questlines, an expanded Sky Arena shop, more skill points from quests, tons of new recipes and a fixed Dragonslayer questline (Dragon Forge). The Cataclysm dimensions are now tied to "The Watching Silence" questline.
- New Eldritch items (armor and a rune), updated attributes for Alshanex's Familiars trinkets and T.O armors and echoes, fixed excessive armor weight, and removed some unnecessary curios slots (Nesil).
- Disabled the Alex's Mobs book on startup.

## Backend Changes

- General FPS and TPS improvements, including significantly better FPS around many Excalibur animated entities and better chunk-loading on servers with many players.
- Added more Excalibur textures for FTB mods (thanks A_Shfox). Fixed invisible Create contraptions and light flickering while using shaders.
- The skill trees were rebuilt from scratch in the commit history: the Mage tree was remade dynamically, then the Ranger, Warrior and Rogue trees followed, with placeholder node icons and new menus.
- Server scripts were organized into folders, recipes were converted to JavaScript, and redundant configs and files were removed.
- The Past dimension was built, reworked and finished during the development cycle (commits "Past dimension complete" and "Past Update v0.4"), alongside the Alex's Caves and Traveloptics integrations.
- Added a Spanish translation.
- Updated mods.

### Mods and resource packs

**Added:** T.O Magic n' Extras, Alex's Caves, Dimensions of Alex's Caves, Bad Mobs, Soulrend - Spanish Translation, SLM: Codex, Weapons of Traveloptics, Nightfall: Invade, Epic Fight x Better Lock On, Ixeris, Too Many Bows, Get It Together, Drops, Epic Fight: Curios Compat 2.0, Create Better FPS

**Removed:** You Shall Not Spawn! (replaced), Unbreakable Enchantment (redundant), Cinematic Cataclysm (caused various crashes), Realm RPG: Sea Dwellers (unnecessary), Village Spawn Point (caused very slow world creation), Armor Damage Limit (redundant), Shoulder Surfing Reloaded (replaced), Countered Settlement Roads (caused too much chunk latency), Lio's Spiral Tower Villages (unnecessary, caused worldgen bugs)
