---
{
  "title": "Innate Skills",
  "category": "Epic Fight",
  "order": 1,
  "summary": "Each Epic Fight weapon has an innate skill, a special move charged by landing hits. 160 innate skills are in Soulrend.",
  "aliases": ["Weapon Innate Skill", "Weapon Skill", "Weapon Charge", "Innate Skill"],
  "icon": "epicfight:diamond_tachi"
}
---
<!-- sources:
  game-data/movesets.json (innate skill per weapon type style, item overrides; skill names and tooltips from lang), game-data/skills.json (category weapon_innate, resource weapon_charge or none, consumption)
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar lang (epicfight.tip.weapon_charge "Your weapon will be charged up when you strike entities. You can use weapon innate skill when weapon charge is full", epicfight.tip.weapon_innate, epicfight.tip.sweeping_edge, epicfight.tip.death_harvest, key.epicfight.show_tooltip, gui.epicfight.long_press_counter.tooltip "Used for weapon innate and dodge skills")
  config/defaultoptions/keybindings.txt (key.epicfight.weapon_innate_skill and key.epicfight.attack both on the left mouse button; key.epicfight.show_tooltip Left Shift)
  config/epicfight-client.toml (long_press_count 3)
-->
An **innate skill** is a weapon's special move. Every Epic Fight [[epic-fight/weapon-types|weapon type]] has one per style, so the same weapon can have a different innate skill held one-handed or two-handed. Soulrend's weapons use 160 different innate skills.

## How it works

1. **Charge the weapon.** Landing hits fills the weapon's charge, shown on the HUD. Most innate skills need a full charge; a few need none and are limited by a cooldown or stamina instead.
2. **Use the skill.** In Soulrend both **Attack** and **Weapon Innate Skill** are on the left mouse button: a click attacks, and **holding** the button (a long press) uses the innate skill once it is ready.
3. **Read what it does.** With the inventory open, hold **Left Shift** over a weapon to see its innate skill's tooltip. Each weapon's page also lists it under Moveset.

## Details

- **Sweeping Edge** raises innate skill damage: +50% at level I, +67% at level II, +75% at level III.
- **Death Harvest**, an Epic Fight passive skill, refills weapon charge when an innate skill kills an enemy.
- **Passive innate skills.** Some weapons have a weapon passive instead of, or alongside, an active skill.

## Innate skills

"Uses" is what the skill needs before it can be used.

| Skill | Mod | Uses | Weapon types |
| --- | --- | --- | --- |
| [[epic-fight/innate-skills/guardparry\|Absolute Defense]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]] |
| [[epic-fight/innate-skills/charged-upperslash\|Accusatio]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/pioneer\|Active Skill-Breaching Combo]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/ruinsgreatsword\|Active Skill-Defiance]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/meenlance\|Active Skill-Embers]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/aetherialdusk\|Active Skill-Execution]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/deadlybackflip-amethyst\|Amethyst Crystal Crush]] | Rapier For EpicFightMod | Weapon charge | [[epic-fight/weapon-types/amethyst-rapier\|Amethyst Rapier]] |
| [[epic-fight/innate-skills/annihilate\|Annihilate]] | WoM Plus | Weapon charge | [[epic-fight/weapon-types/greataxes\|Greataxes]] |
| [[epic-fight/innate-skills/annihilator-innate\|Annihilator Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/aqua-the-eternal-lightning\|Aqua The Eternal Lightning]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/kusabimaru\|Ashina]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/astral-acceleration\|Astral Acceleration]] | WoM Plus | Weapon charge | [[epic-fight/weapon-types/nova\|Nova]] |
| [[epic-fight/innate-skills/astrape-innate\|Astrape Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/battojutsu\|Battojutsu]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/epicfightx-battojutsu\|Battojutsu]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/beast-eye\|Beast's Eye]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/claws\|Claws]] |
| [[epic-fight/innate-skills/blade-rush\|Blade Rush]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/s-dagger\|S Dagger]] |
| [[epic-fight/innate-skills/epicfight-blade-rush\|Blade Rush]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]] |
| [[epic-fight/innate-skills/epicfightx-blade-rush\|Blade Rush]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]] |
| [[epic-fight/innate-skills/blade-rush-finisher\|Blade Rush Finisher]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/greeat-tachiskill\|Blood Blade]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/dual-tachi\|Dual Tachi]] |
| [[epic-fight/innate-skills/blood-dance\|Blood Dance]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/poleblade\|Poleblade]] |
| [[epic-fight/innate-skills/bloodlust\|BLOODRUST]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/broadblade\|Breaking Edge]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/brutal-dash\|Brutal Dash]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/bats\|Bats]], [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/ceraunus-innate\|Ceraunus Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/chakram-slash-2\|Chakram Dance]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/chakram-slash\|Chakram Slash]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/champions-might\|Champions Might]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/charged-spearslash\|Charged thrust]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/charybdis\|Charybdis into Scylla]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]], [[epic-fight/weapon-types/staff\|Staff]] |
| [[epic-fight/innate-skills/combo-demo\|Combo Demo]] | Epic Fight - Invincible | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/comet\|Comet]] | WoM Plus | Weapon charge | [[epic-fight/weapon-types/greataxes\|Greataxes]] |
| [[epic-fight/innate-skills/teleporting-skill\|Concitus]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/core-of-infernal\|Core Of Infernal]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/cosmic-wrath\|Cosmic Wrath]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/katanaskill\|Critical Strike]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/katana\|Katana]], [[epic-fight/weapon-types/phantom-katana\|Phantom Katana]], [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/katanaspskill\|Critical Strike]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/dual-tachi\|Dual Tachi]], [[epic-fight/weapon-types/enhanced-tachi\|Enhanced Tachi]] |
| [[epic-fight/innate-skills/custom-combo-demo\|Custom Combo Demo]] | Epic Fight - Invincible | Unknown | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/custom-innate-skill\|Custom Innate Skill]] | Epic Fight - Invincible | Unknown | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/dual-dance\|Dancing Blades]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/dancing-edge\|Dancing Edge]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/epicfightx-dancing-edge\|Dancing Edge]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/darknight-pursuiters\|Darknight Pursuiters]] | EpicFight Awaken | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/deadlybackflip\|Deadly Backflip]] | Rapier For EpicFightMod | Weapon charge | [[epic-fight/weapon-types/rapier\|Rapier]] |
| [[epic-fight/innate-skills/scythe-skill\|Decapitate / Hymn of the Night]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/epicfightx-scythe-skill\|Decapitate / Hymn of the Night]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/demonic-ascension\|Demonic Ascension]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/antitheus\|Antitheus]], [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/charged-downslash\|Deorsum]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/axe\|Axe]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/yamatoskill\|During the preparation phase of normal skill usage, being attacked by the enemy can trigger a counterattack. After 1a, 2a, 3a, you can release additional combos, and after a parry, you can release the Illusory Blade Realm for a counterattack.]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/yamato\|Yamato]] |
| [[epic-fight/innate-skills/greatsword-dual-skill\|Earth Splitting Slash]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/enhanced-greatsword\|Enhanced Greatsword]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/dual-slash\|Edge Dance]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/electric-sands\|Electric Sands]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/ender-blast\|Ender blast]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/enderblaster\|Enderblaster]], [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/ender-fusion\|Ender fusion]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/enderblaster\|Enderblaster]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/plunder-perdition\|Ender Ritual]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/sword-slash\|Enhanced Sweeping Blade]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/s-dagger\|S Dagger]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/evil-punishment\|Evil Punishment]] | WoM Plus | Weapon charge | [[epic-fight/weapon-types/evil-tachi\|Evil Tachi]] |
| [[epic-fight/innate-skills/eviscerate\|Eviscerate]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/s-dagger\|S Dagger]] |
| [[epic-fight/innate-skills/epicfightx-eviscerate\|Eviscerate]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/examplecombo\|Examplecombo]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/exsiliumgladius\|EXSILIUMGLADIUS]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/extinction-showdown\|Extinction Showdown]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/beastclaw\|Feral Claw]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/fist\|Fist]] |
| [[epic-fight/innate-skills/flash-mutilation\|Flash mutilation]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/nova\|Nova]], [[epic-fight/weapon-types/s-dagger\|S Dagger]] |
| [[epic-fight/innate-skills/furious-cut\|Furious Cut]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/light-greatswords\|Light Greatswords]] |
| [[epic-fight/innate-skills/gauntlet-guard-innate\|Gauntlet Guard Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/gentle-nudge\|Gentle Nudge]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/light-greatswords\|Light Greatswords]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/rocket\|Geschoss]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/thornwheel\|Ghiza's Wheel]] | EpicFight Nightfall | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/gloria-maxima\|Gloria Maxima]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/iron-fist\|Iron Fist]] |
| [[epic-fight/innate-skills/grasping-spire\|Grasping Spire]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/epicfightx-grasping-spire\|Grasping Spire]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/greater-harvest\|Greater Harvest]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/great-scythe\|Great Scythe]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/groundslam\|Groundslam]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/head-knocker\|Headknocker]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/bats\|Bats]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/charged-breaker\|Heart-Breaker]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/heartstabber\|Heart-Stabber]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/heartpiercer\|Heartpiercer]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-spear\|Enhanced Spear]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/epicfightx-heartpiercer\|Heartpiercer]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/hf-blade\|Hf Blade]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/incisura-vitrea\|Incisura Vitrea]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/infernal-innate\|Infernal Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/infernal-volcano\|Infernal Volcano]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/powerful-kick\|Iron Kick]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/iron-fist\|Iron Fist]] |
| [[epic-fight/innate-skills/scythe-slash\|le Messor]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/lethalslicing\|Lethal Slash]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-tachi\|Enhanced Tachi]] |
| [[epic-fight/innate-skills/liechtenauer\|Liechtenauer]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]], [[epic-fight/weapon-types/shield\|Shield]], [[epic-fight/weapon-types/sword\|Sword]], [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/epicfightx-liechtenauer\|Liechtenauer]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/lunar-eclipse\|Lunar Eclipse]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/charged-swordslash\|Magna Ictus]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/magnetronix\|Magnetronix]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/mortal-slash\|Mortal Slash]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/natural-rising\|Natural Rising]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/enhanced-spear\|Enhanced Spear]] |
| [[epic-fight/innate-skills/nightfall\|Nightfall]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/orbital-beam\|Orbital beam]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/otachi-skill\|Otachi Skill]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/pickaxe-skill\|Pickaxe Skill]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/pickaxe\|Pickaxe]] |
| [[epic-fight/innate-skills/pierce-rush\|Piercing Rush]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/piercing-strike\|Piercing Strike]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/florett\|Florett]], [[epic-fight/weapon-types/light-greatswords\|Light Greatswords]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/quick-step\|Quickstep]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/claws\|Claws]], [[epic-fight/weapon-types/sickles\|Sickles]] |
| [[epic-fight/innate-skills/rof-skill\|Rage Of Flame]] | EpicFight Awaken | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/reaper-of-outer-realm\|Reaper of Outer Realm]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/rechargement\|Rechargement]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/napoleon\|Napoleon]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/shortsword\|Reenactment]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/regierung\|Regierung]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/relentless-combo\|Relentless Combo]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/fist\|Fist]] |
| [[epic-fight/innate-skills/epicfightx-relentless-combo\|Relentless Combo]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/fist\|Fist]] |
| [[epic-fight/innate-skills/murasama\|Rodrigues Shinkage-ryu]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/rahhh\|RRAAAAHHR]] | WoM Plus | Weapon charge | [[epic-fight/weapon-types/hollow-longsword\|Hollow Longsword]] |
| [[epic-fight/innate-skills/rushing-slam\|Rushing Slam]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/rushing-tempo\|Rushing Tempo]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/epicfightx-rushing-tempo\|Rushing Tempo]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/sakura-state\|Sakura state]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]], [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/sandstorm-awaken\|Sandstorm Awaken]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/sepukku\|Sepukku]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/ritual-daggers\|Ritual Daggers]] |
| [[epic-fight/innate-skills/sharp-stab\|Sharp Stab]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/hollow-longsword\|Hollow Longsword]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/epicfightx-sharp-stab\|Sharp Stab]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/sharp-stabs\|Sharp Stabs]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/horus-fang\|Horus Fang]] |
| [[epic-fight/innate-skills/sharpshooter\|Sharpshooter]] | Weapons of Traveloptics | No weapon charge | [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]] |
| [[epic-fight/innate-skills/shiled-slahs\|Shield Bash!!!!]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]] |
| [[epic-fight/innate-skills/darkness-slash\|Sign from Darkness]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/shading-slash\|Sign from Shadows]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/skull-rupture\|Skull Rupture]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/agony-plunge\|Sky dive]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/spear\|Spear]], [[epic-fight/weapon-types/sword\|Sword]], [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/solar-arcano\|Solar Arcano]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/crescentmoon\|Soul Fusion]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/soul-render-innate\|Soul Render Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/spearslash\|Spear Dance]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/enhanced-spear\|Enhanced Spear]], [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/spearing-strike\|Spearing Strike]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/katana-skill\|Stance Flow]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/wind-slash\|Steel Whirlwind]] | EpicFight-Resurrection | Weapon charge | [[epic-fight/weapon-types/axe\|Axe]], [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/enhanced-greatsword\|Enhanced Greatsword]] |
| [[epic-fight/innate-skills/steel-whirlwind\|Steel Whirlwind]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/spear\|Spear]], [[epic-fight/weapon-types/tachi\|Tachi]], [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/epicfightx-steel-whirlwind\|Steel Whirlwind]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/sweeping-edge\|Sweeping Edge]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/longsword\|Longsword]], [[epic-fight/weapon-types/spear\|Spear]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/epicfightx-sweeping-edge\|Sweeping Edge]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/wr-skill\|Sword Of Thunder and Flame]] | EpicFight Awaken | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/charged-slam\|Terra Destruction]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/deadlybackflip-ender\|The Ender Dance]] | Rapier For EpicFightMod | Weapon charge | [[epic-fight/weapon-types/enderite-rapier\|Enderite Rapier]] |
| [[epic-fight/innate-skills/the-guillotine\|The Guillotine]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/axe\|Axe]], [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/epicfightx-the-guillotine\|The Guillotine]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/axe\|Axe]] |
| [[epic-fight/innate-skills/the-incinerator-innate\|The Incinerator Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]] |
| [[epic-fight/innate-skills/judgement-ultimate\|The Judgement!]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/uchigatana\|Uchigatana]] |
| [[epic-fight/innate-skills/deadlybackflip-ocean\|The Ocean Flow]] | Rapier For EpicFightMod | Weapon charge | [[epic-fight/weapon-types/oceanite-rapier\|Oceanite Rapier]] |
| [[epic-fight/innate-skills/deadlybackflip-wither\|The Wither Rage]] | Rapier For EpicFightMod | Weapon charge | [[epic-fight/weapon-types/witherite-rapier\|Witherite Rapier]] |
| [[epic-fight/innate-skills/tidal-claw-innate\|Tidal Claw Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/fist\|Fist]] |
| [[epic-fight/innate-skills/tremedeous-retaliation\|Tremendous Retaliation]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/morningstar\|Morningstar]] |
| [[epic-fight/innate-skills/twinblade-skill\|Tripudium]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/true-berserk\|True Wrath]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/torment\|Torment]] |
| [[epic-fight/innate-skills/tsunami\|Tsunami]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/unbreakable\|Unbreakable]] | Weapons of miracle | Weapon charge | [[epic-fight/weapon-types/blackstar\|Blackstar]] |
| [[epic-fight/innate-skills/void-slash\|Void Slash!]] | Simply Swords Epicfied | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/whirlwind\|Whirlwind]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/dagger\|Dagger]], [[epic-fight/weapon-types/ritual-daggers\|Ritual Daggers]], [[epic-fight/weapon-types/sickles\|Sickles]], [[epic-fight/weapon-types/sword\|Sword]] |
| [[epic-fight/innate-skills/wild-strikes\|Wild Strikes]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/sword\|Sword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/wild-strikes-dual\|Wild Strikes Dual]] | EpicFight - Dawnday | Weapon charge | [[epic-fight/weapon-types/florett\|Florett]] |
| [[epic-fight/innate-skills/wok-skill\|Will Of King]] | EpicFight Awaken | No weapon charge | [[epic-fight/weapon-types/longsword\|Longsword]] |
| [[epic-fight/innate-skills/wrath-of-the-desert-innate\|Wrath Of The Desert Innate]] | P1nero's Epic Cataclysm | No weapon charge | [[epic-fight/weapon-types/wrath-of-the-desert\|Wrath Of The Desert]] |
| [[epic-fight/innate-skills/wrathful-lighting\|Wrathful Lightning]] | Epic Fight | Weapon charge | [[epic-fight/weapon-types/greatsword\|Greatsword]], [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]], [[epic-fight/weapon-types/tachi\|Tachi]] |
| [[epic-fight/innate-skills/epicfightx-wrathful-lighting\|Wrathful Lightning]] | Epic Fight Extra | Weapon charge | [[epic-fight/weapon-types/spear\|Spear]] |
| [[epic-fight/innate-skills/yamato\|YAMATO]] | EpicFight Nightfall | No weapon charge | [[epic-fight/weapon-types/efn-yamato\|Efn Yamato]] |

## Related

- [[epic-fight/weapon-types|Weapon Types]]
- [[epic-fight/skill-books|Skill Books]]
