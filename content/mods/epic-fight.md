---
{
  "title": "Epic Fight Mods",
  "navTitle": "Epic Fight",
  "category": "Mods",
  "order": 4,
  "summary": "The Epic Fight combat system, its movesets, add-ons and compat.",
  "icon": "epicfight:iron_tachi"
}
---
<!-- sources: mods/*.jar (mods.toml), minecraftinstance.json (CurseForge links), CurseForge summaries; pack role from docs/instance-guide.md, CLAUDE.md (Epic Fight weapon-type overrides), config/epicfightx.toml -->
Epic Fight replaces click-to-swing combat with animated movesets, and most of the pack's weapons and bosses are built on it and its add-ons. See [[epic-fight/index|Epic Fight Combat]] for how it plays. This page covers the mods behind it.

## The core

- **Epic Fight** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod)) — the combat mod itself: weapon types with combos, dash and jump attacks, guarding, dodging, skills, Weight and stun armor, and Battle/Mining mode. Everything else on this page extends or fixes it.
- **Epic Fight - Avalon** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-avalon)) — an animation-registration helper for add-on authors. Add-ons such as Nightfall use it to draw weapon meshes skinned to the player's skeleton, so a sheath can follow the hip while the blade follows the hand.
- **Epic Fight - Invincible Lib** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-invincible)) — a library for building key-combination combos, used by add-ons that need complex weapon types.
- **Epic Fight - EDP (Extended Datapacks)** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-edp)) — lets datapacks give weapon categories passive skills, per-style item models, swing trails and charged attacks. Soulrend's capability datapack uses it for per-style weapon models.
- **GUHAO's VIX** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/guhaos-vix)) — a graphics library used by some Epic Fight add-ons for their effects.
- **Balanced Epic Fight** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/balanced-epic-fight)) — rebalances some of Epic Fight's combat features.
- **SL Library** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/sl-library)) — a shared utility library with synchronization, packet and data-driven helpers for the SLM mods.
- **SLM: Codex** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/slm-codex)) — adds a codex of skills, passives, actives and lore for items, weapons, armor and curios.
- **SLM: Epic Fight** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/slm-epic-fight)) — adds helpers for passive and innate skills and skill events in Epic Fight.
- **SLM: Shader** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/slm-shader)) — adds screen shader effects such as impact frames, noise and color overlays and radial blur.

## Movesets and weapons

- **Epic Fight - Rapier Moveset Addon** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod-rapier-moveset-addon)) — adds a rapier weapon type with its own attack animations.
- **Epic Fight Knuckles Extended** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-knuckles-extended)) — adds four knuckle weapons.
- **EpicFight-Extra** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-extra)) — adds a large number of animations and skills. Its config re-registers every built-in Epic Fight weapon type (`overwrite = true`), so its versions of the sword and longsword types are the ones in game.
- **EpicFight-Nightfall** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-nightfall)) — an add-on with original handcrafted combat actions and weapons. Its skills and weapons are among those listed on the wiki's Epic Fight pages.
- **EFN-Enhance** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/efn-enhance)) — improves Nightfall's visual effects and adds small enhancements.
- **EpicFight: Resurrection** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-resurrection)) — adds weapons with more mechanisms, such as the Yamato.
- **EpicFight-Awaken** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-awaken)) — adds more weapons with their own stories and movesets.
- **Epic Fight: Dawn Day** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-dawn-day)) — adds unique weapons with handcrafted animations, plus death animations for players and mobs.
- **Weapons of Miracles** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/weapons-of-miracles-epicfight)) — adds weapons, animations and skills.
- **Epic Fight: Weapons of Miracles Expansion (WoM Plus)** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-weapons-of-miracles-expansion-wom-plus)) — adds movesets for weapons Weapons of Miracles left without one, including the Evil Tachi. It also repoints WoM's greataxes, Hollow Longsword and Evil Ôdachi at its own weapon types.
- **Epic Fight | Simply Swords EpicFied 2** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/simply-swords-epicfied)) — gives Simply Swords' unique weapons Epic Fight movesets and innate skills.
- **SimplySwords Epicfied Core** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/simplyswords-epicfied-core)) — the library behind Epicfied, with custom animation assets and innate skills.
- **P1nero's Epic X Cataclysm** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/p1neros-epic-x-cataclysm)) — adds Epic Fight movesets for L_Ender's Cataclysm weapons.
- **Weapons of Traveloptics: Imbued The Spells** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/weapons-of-traveloptics-imbued-the-spells)) — adds custom movesets, including spell attacks, for the Traveloptics weapons from T.O Magic 'n Extras.

## Mobs, executions and AI

- **Combat Evolution** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/combat-evolution)) — adds executions on staggered enemies and tools for Epic Fight mob AI.
- **Combat Evolution: More Execution Animations** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/combat-evolution-x-more-execution-animations)) — adds more execution animations, compatible with EpicFight: Resurrection.
- **Epic Fight Posture Integration** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfight-posture-integration)) — adds a posture meter and guard breaks to Epic Fight mobs, working with Combat Evolution's executions.
- **Epic Fight - Super Warden** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-super-warden)) — gives the Warden Epic Fight movesets.
- **Mobs Epicfied** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/mobs-epicfied)) — fixes humanoid mobs that stay on the moveset they held at spawn instead of the one for their current weapon, and adds per-weapon combos.

## Controls, rendering and compatibility

- **Epic Fight - Better lock on** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/better-lock-on)) — adds a lock-on icon and improvements for Epic Fight's lock-on.
- **Epic Fight x Better Lock On: Movement & Camera Fixes** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-x-better-lock-on-better-third-person-qol-fixes)) — makes WASD and dodge follow the camera while locked on, and lets bows and crossbows aim at the target.
- **Epic Fight - SkillBook Description** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-skillbook-description)) — shows a skill's description in the tooltip of its skill book before you open it.
- **Epic Fight x Iron's Spells: Enhanced Animations** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-x-irons-spells-enhanced-animations)) — gives Iron's Spellbooks casting animations in Epic Fight's style.
- **Epic Fight X Relics + Artifacts + Curios** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-x-relics-artifacs)) — makes Curios accessories follow Epic Fight's animated player skeleton while keeping their own renderers.
- **Epic Fight: Curios Compat** ([CurseForge](https://www.curseforge.com/minecraft/mc-mods/epicfightcurioscompat)) — an older Epic Fight and Curios compatibility mod.
