# Item research queue

Items and ids the first item port (2026-10-25) could not fully describe from `game-data/` alone. Each needs a look at the instance (configs, KubeJS, quests) or the mod jar, then a fix on the page named after it. Remove an entry once its page is updated.

The port read only the dumps in `game-data/` (items, item-stats, gems, spells, loot-tables, recipes, tags, effects). See [`instance-guide.md`](instance-guide.md) for where to look next.

## Outline group with no matching items in the dumps

3 entries.

- `Chef's Delight` — items/consumables/food
- `Materials each page covers: vanilla; silver, steel and titanium (Dungeons and Combat); moonstone (Soulslike); resonarium and warden (Deeper and Darker); black steel (Cataclysm); neptunium (Aquaculture)` — items/tools
- `Yamato and Crimson Moon skills (enchanted books) go on their weapons' pages, not here` — items/skill-books

## Page title collided with an existing page and was qualified

2 entries.

- `Archery Armory` — items/weapons/archery-armory vs progression/side-chapters/pursuit-of-mastery.md
- `The Watcher` — items/weapons/blood-bath/the-watcher vs bosses/optional-and-world/cataclysm-minibosses.md

## Epic Fight skill with no text in any lang file

Weapon pages now show each skill's name and tooltip through the `moveset` embed (from `game-data/movesets.json`). These skills have no lang text there, so the embed can only show their id. Look for the text in the mod's code, or describe them from an in-game test.

33 entries.

- `cdmoveset:blade_rush_finisher` — simplyswords:iron_rapier (innate); simplyswords:diamond_rapier (innate); simplyswords:netherite_rapier (innate); simplyswords:runic_rapier (innate); knavesneeds:deeperdarker/warden/rapier (innate); simplyswords:bramblethorn (innate); and 2 more
- `efn:aetherialdusk_passive` — efn:nf_dual_sword (passive)
- `efn:bloodlust_passive` — efn:air_tachi (passive); efn:co_tachi (passive)
- `efn:hf_blade` — efn:hf_blade (innate)
- `efn:hf_blade_passive` — efn:hf_blade (passive)
- `efn:meenlance_passive` — efn:meen_spear (passive)
- `efn:murasama_passive` — efn:hf_murasama (passive)
- `efn:ruinsgreatsword_passive` — efn:ruinsgreatsword (passive)
- `efn:shortsword_passive` — efn:nf_shortsword (passive); efn:nf_shortsword_2 (passive)
- `efn:yamato_passive` — efn:yamato_dmc_in_sheath (passive); efn:yamato_dmc4_in_sheath (passive); knavesneeds:deeperdarker/warden/sai (passive); simplyswords:runic_sai (passive); simplyswords:shadowsting (passive)
- `epicfight_awaken:darknight_pursuiters_passive` — epicfight_awaken:darknight_pursuiters (passive)
- `epicfight_dd:wingstance` — epicfight_dd:milady (passive)
- `epicfight:battojutsu_passive` — simplyswords:iron_katana (passive); soulsweapons:moonveil (passive); simplyswords:diamond_katana (passive); simplyswords:netherite_katana (passive); cdmoveset:katana (passive); knavesneeds:soulsweapons/translucent/katana (passive); and 1 more
- `epicfightx:battojutsu_passive` — samurai_dynasty:katana (passive); epicfight:uchigatana (passive); dungeons_and_combat:long_katana (passive); soulsweapons:dragonbane (passive); samurai_dynasty:katana_netherite (passive); dungeons_and_combat:dragonsteel_fire_katana (passive); and 7 more
- `p1nero_ec:astrape_innate` — cataclysm:astrape (innate)
- `p1nero_ec:ceraunus_innate` — cataclysm:ceraunus (innate)
- `p1nero_ec:infernal_innate` — cataclysm:infernal_forge (innate)
- `p1nero_ec:soul_render_innate` — cataclysm:soul_render (innate)
- `p1nero_ec:the_incinerator_innate` — cataclysm:the_incinerator (innate)
- `p1nero_ec:tidal_claw_innate` — cataclysm:tidal_claws (innate)
- `p1nero_ec:wrath_of_the_desert_innate` — cataclysm:wrath_of_the_desert (innate)
- `refm:ender_passive` — refm:enderite_rapier (passive)
- `refm:ocean_passive` — refm:oceanite_rapier (passive)
- `refm:wither_passive` — refm:witherite_rapier (passive)
- `wom:demon_mark_passive` — simplyswords:caelestis (passive); simplyswords:awakened_lichblade (passive); knavesneeds:deeperdarker/warden/scythe (passive); simplyswords:runic_scythe (passive); irons_spellbooks:hellrazor (passive); simplyswords:magiscythe (passive); and 2 more
- `wom:evil_tachi_passive` — wom:evil_tachi (passive)
- `wom:herrscher_passive` — wom:herrscher (passive); simplyswords:righteous_relic (passive); simplyswords:sunfire (passive); knavesneeds:deeperdarker/warden/longsword (passive); simplyswords:runic_longsword (passive)
- `wom:lunar_echo_passive` — simplyswords:emberlash (passive); simplyswords:stars_edge (passive); wom:moonless (passive)
- `wom:napoleon_passive` — wom:napoleon (passive)
- `wom:ruine_passive` — wom:ruine (passive); simplyswords:harbinger (passive); simplyswords:soulpyre (passive)
- `wom:satsujin_passive` — knavesneeds:deeperdarker/warden/katana (passive); simplyswords:runic_katana (passive); wom:satsujin (passive); simplyswords:whisperwind (passive); cataclysm:zweiender (passive); cataclysm:final_fractal (passive)
- `wom:solar_passive` — simplyswords:brimstone_claymore (passive); wom:solar (passive); simplyswords:waking_lichblade (passive)
- `wom:torment_passive` — wom:tormented_mind (passive); simplyswords:livyatan (passive); simplyswords:hearthflame (passive)
## Tooltip hides text behind a key (Shift, Alt or Ctrl), which the export can't read

0 entries.


## No recipe or loot table in the dumps (KubeJS recipe, quest reward, trade or code drop?)

Apotheosis's basic shelves and the slot tomes are crafted with recipes registered in code (Placebo's RecipeHelper), which exports made before 2026-10-25 missed. `wiki_export.js` now rebuilds them from the live recipe manager; re-export, sync and remove those entries.

405 entries.

- `alexscaves:gingerbread_boots` — items/armor/misc-armor/alexs-caves-armor
- `alexscaves:gingerbread_chestplate` — items/armor/misc-armor/alexs-caves-armor
- `alexscaves:gingerbread_helmet` — items/armor/misc-armor/alexs-caves-armor
- `alexscaves:gingerbread_leggings` — items/armor/misc-armor/alexs-caves-armor
- `alshanex_familiars:bard_shard` — items/magic/familiars
- `alshanex_familiars:bard_trinket` — items/magic/familiars; items/curios-and-accessories/other-curios
- `alshanex_familiars:cleric_shard` — items/magic/familiars
- `alshanex_familiars:dragon_warrior_shard` — items/magic/familiars
- `alshanex_familiars:illusionist_shard` — items/magic/familiars
- `alshanex_familiars:necromancer_shard` — items/magic/familiars
- `alshanex_familiars:plague_shard` — items/magic/familiars
- `alshanex_familiars:rusty_helmet` — items/armor/misc-armor/other-armor
- `alshanex_familiars:scorcher_shard` — items/magic/familiars
- `apotheosis:beeshelf` — items/gear-progression/enchanting
- `apotheosis:blazing_hellshelf` — items/gear-progression/enchanting
- `apotheosis:boots_tome` — items/gear-progression/enchanting
- `apotheosis:bow_tome` — items/gear-progression/enchanting
- `apotheosis:chestplate_tome` — items/gear-progression/enchanting
- `apotheosis:crystal_seashelf` — items/gear-progression/enchanting
- `apotheosis:dormant_deepshelf` — items/gear-progression/enchanting
- `apotheosis:draconic_endshelf` — items/gear-progression/enchanting
- `apotheosis:fishing_tome` — items/gear-progression/enchanting
- `apotheosis:glowing_hellshelf` — items/gear-progression/enchanting
- `apotheosis:heart_seashelf` — items/gear-progression/enchanting
- `apotheosis:hellshelf` — items/gear-progression/enchanting
- `apotheosis:helmet_tome` — items/gear-progression/enchanting
- `apotheosis:leggings_tome` — items/gear-progression/enchanting
- `apotheosis:melonshelf` — items/gear-progression/enchanting
- `apotheosis:other_tome` — items/gear-progression/enchanting
- `apotheosis:pearl_endshelf` — items/gear-progression/enchanting
- `apotheosis:pickaxe_tome` — items/gear-progression/enchanting
- `apotheosis:scrap_tome` — items/gear-progression/enchanting
- `apotheosis:seashelf` — items/gear-progression/enchanting
- `apotheosis:weapon_tome` — items/gear-progression/enchanting
- `aquamirae:coral_lance` — items/weapons/kings-of-the-battlefield/coral-lance
- `cataclysm:aptrgangr_head` — items/curios-and-accessories/other-curios
- `cataclysm:draugr_head` — items/curios-and-accessories/other-curios
- `cataclysm:ignitium_elytra_chestplate` — items/armor/misc-armor/cataclysm-armor
- `cataclysm:meat_shredder` — items/weapons/heavy-load/meat-shredder
- `cataclysm:the_incinerator` — items/weapons/blood-bath/the-incinerator
- `cataclysm:void_forge` — items/weapons/heavy-load/void-forge
- `cataclysm:zweiender` — items/weapons/path-of-the-samurai/zweiender
- `dacxirons:wither_ring` — items/curios-and-accessories/rings
- `dungeons_and_combat:ammit_armor_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:ammit_armor_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:ammit_armor_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:blessed_rogue_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:blessed_rogue_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:blessed_rogue_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:broken_shield` — items/weapons/misc-weapons
- `dungeons_and_combat:copper_dagger` — items/weapons/misc-weapons
- `dungeons_and_combat:counselor_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:counselor_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:cryolite_boots` — items/armor/strength-path/cryolite-armor
- `dungeons_and_combat:cryolite_chestplate` — items/armor/strength-path/cryolite-armor
- `dungeons_and_combat:cryolite_helmet` — items/armor/strength-path/cryolite-armor
- `dungeons_and_combat:cryolite_leggings` — items/armor/strength-path/cryolite-armor
- `dungeons_and_combat:dagger` — items/weapons/misc-weapons
- `dungeons_and_combat:deserter_steel_sword` — items/weapons/misc-weapons
- `dungeons_and_combat:dragonium_boots` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:dragonium_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:dragonium_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:dragonium_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:executioner_axe` — items/weapons/misc-weapons
- `dungeons_and_combat:fairy_wings` — items/curios-and-accessories/wings
- `dungeons_and_combat:heavy_shield` — items/weapons/misc-weapons
- `dungeons_and_combat:hood_of_shame_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:kamath_armor_boots` — items/armor/strength-path/kamath-armor
- `dungeons_and_combat:kamath_armor_chestplate` — items/armor/strength-path/kamath-armor
- `dungeons_and_combat:kamath_armor_helmet` — items/armor/strength-path/kamath-armor
- `dungeons_and_combat:kamath_armor_leggings` — items/armor/strength-path/kamath-armor
- `dungeons_and_combat:molten_knight_boots` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:molten_knight_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:molten_knight_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:molten_knight_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:monarch_boots` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:monarch_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:monarch_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:monarch_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:nullfire_amulet` — items/curios-and-accessories/necklaces
- `dungeons_and_combat:old_shield` — items/weapons/misc-weapons
- `dungeons_and_combat:prisoner_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:royal_steel_boots` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:royal_steel_chestplate` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:royal_steel_helmet` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:royal_steel_leggings` — items/armor/misc-armor/dungeons-and-combat-armor
- `dungeons_and_combat:sandstorm_greatsword` — items/weapons/misc-weapons
- `dungeons_and_combat:silver_dagger` — items/weapons/misc-weapons
- `dungeons_and_combat:sunleia_hand` — items/curios-and-accessories/other-curios: the recipe is now exported (`minecraft:kjs/dungeons_and_combat_sunleia_hand`) and renders; the page has only a table row, so add an Obtaining/Crafting section
- `endlessbiomes:void_touched_boots_boots` — items/armor/misc-armor/endlessbiomes-armor
- `epic_knights_ice_and_fire:dragon_fire_shortsword` — items/weapons/epic-knights-weapons
- `epic_knights_ice_and_fire:dragon_ice_shortsword` — items/weapons/epic-knights-weapons
- `epic_knights_ice_and_fire:dragon_lightning_shortsword` — items/weapons/epic-knights-weapons
- `epic_knights_ice_and_fire:dragonsteel_fire_shortsword` — items/weapons/epic-knights-weapons
- `epic_knights_ice_and_fire:dragonsteel_ice_shortsword` — items/weapons/epic-knights-weapons
- `epic_knights_ice_and_fire:dragonsteel_lightning_shortsword` — items/weapons/epic-knights-weapons
- `epicfight:golden_dagger` — items/weapons/misc-weapons
- `epicfight:stray_hat` — items/armor/misc-armor/other-armor
- `epicfight:stray_pants` — items/armor/misc-armor/other-armor
- `epicfight:stray_robe` — items/armor/misc-armor/other-armor
- `graveyard:bone_dagger` — items/weapons/misc-weapons
- `gtbcs_geomancy_plus:bracelet_of_inversion` — items/curios-and-accessories/other-curios
- `gtbcs_geomancy_plus:ring_of_the_resounding_earth` — items/curios-and-accessories/rings
- `iceandfire:dread_queen_sword` — items/weapons/bladesworn-battallion/blade-of-the-dreaded-queen
- `iceandfire:stymphalian_bird_dagger` — items/weapons/misc-weapons
- `irons_spellbooks:cinderous_soul_rune` — items/magic/runes-orbs-and-inks
- `irons_spellbooks:gold_crown` — items/armor/misc-armor/other-armor
- `irons_spellbooks:lurker_ring` — items/curios-and-accessories/rings
- `irons_spellbooks:mana_ring` — items/curios-and-accessories/rings
- `irons_spellbooks:tarnished_helmet` — items/armor/misc-armor/other-armor
- `magistuarmory:bronze_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:copper_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:crown_decoration` — items/armor/epic-knights-armor
- `magistuarmory:crusader_cross_pattern` — items/armor/epic-knights-armor
- `magistuarmory:gold_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:iron_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:minicrown_decoration` — items/armor/epic-knights-armor
- `magistuarmory:rusted_bastardsword` — items/weapons/epic-knights-weapons
- `magistuarmory:rustedbarbute` — items/armor/epic-knights-armor
- `magistuarmory:rustedchainmail_boots` — items/armor/epic-knights-armor
- `magistuarmory:rustedchainmail_chestplate` — items/armor/epic-knights-armor
- `magistuarmory:rustedchainmail_helmet` — items/armor/epic-knights-armor
- `magistuarmory:rustedchainmail_leggings` — items/armor/epic-knights-armor
- `magistuarmory:rustedcrusader_boots` — items/armor/epic-knights-armor
- `magistuarmory:rustedcrusader_chestplate` — items/armor/epic-knights-armor
- `magistuarmory:rustedgreathelm` — items/armor/epic-knights-armor
- `magistuarmory:rustedhalfarmor_chestplate` — items/armor/epic-knights-armor
- `magistuarmory:rustedkettlehat` — items/armor/epic-knights-armor
- `magistuarmory:rustednorman_helmet` — items/armor/epic-knights-armor
- `magistuarmory:silver_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:steel_claymore` — items/weapons/epic-knights-weapons
- `magistuarmory:stone_shortsword` — items/weapons/epic-knights-weapons
- `magistuarmory:wood_shortsword` — items/weapons/epic-knights-weapons
- `minecraft:piglin_head` — items/armor/misc-armor/minecraft-armor
- `mowziesmobs:naga_fang_dagger` — items/weapons/misc-weapons
- `quark:backpack` — items/armor/misc-armor/other-armor
- `samurai_dynasty:brass_samurai_boots` — items/armor/misc-armor/samurai-dynasty-armor
- `samurai_dynasty:brass_samurai_chestplate` — items/armor/misc-armor/samurai-dynasty-armor
- `samurai_dynasty:brass_samurai_helmet` — items/armor/misc-armor/samurai-dynasty-armor
- `samurai_dynasty:brass_samurai_leggings` — items/armor/misc-armor/samurai-dynasty-armor
- `simplyswords:emberblade` — items/weapons/misc-weapons
- `simplyswords:emberlash` — items/weapons/assassins-armoury/emberlash
- `simplyswords:flamewind` — items/weapons/kings-of-the-battlefield/flamewind
- `simplyswords:gold_cutlass` — items/weapons/misc-weapons
- `simplyswords:hearthflame` — items/weapons/heavy-load/hearthflame
- `simplyswords:molten_edge` — items/weapons/blood-bath/molten-edge
- `simplyswords:thunderbrand` — items/weapons/kings-of-the-battlefield/thunderbrand
- `soulsweapons:darkin_scythe` — items/weapons/demonic-implements/the-darkin-scythe
- `soulsweapons:shadow_assassin_scythe` — items/weapons/demonic-implements/shadow-assassin-scythe
- `soulsweapons:silver_sword` — items/weapons/misc-weapons
- `too_many_bows:dead_eyes_pendant` — items/curios-and-accessories/necklaces
- `too_many_bows:fletchers_talisman` — items/curios-and-accessories/necklaces
- `too_many_bows:sharpshot_ring` — items/curios-and-accessories/rings
- `too_many_bows:stormbound_signet` — items/curios-and-accessories/rings
- `too_many_bows:wind_glove` — items/curios-and-accessories/other-curios
- `travelersbackpack:bat` — items/curios-and-accessories/backpacks-and-quivers
- `travelersbackpack:iron_golem` — items/curios-and-accessories/backpacks-and-quivers
- `travelersbackpack:villager` — items/curios-and-accessories/backpacks-and-quivers
- `traveloptics:bottled_raincloud` — items/curios-and-accessories/other-curios
- `valarian_conquest:bandit_mask_gray_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bandit_mask_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_1_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barathians_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:barbute_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bascinet_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_1_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:bohemian_shield` — items/weapons/misc-weapons
- `valarian_conquest:bohemian_sword` — items/weapons/misc-weapons
- `valarian_conquest:burgundian_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:burgundian_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:caladrian_shield` — items/weapons/misc-weapons
- `valarian_conquest:caladrian_sword` — items/weapons/misc-weapons
- `valarian_conquest:chainmail_armor_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:chainmail_armor_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:chainmail_armor_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:chainmail_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:dwarven_axe` — items/weapons/misc-weapons
- `valarian_conquest:dwarven_shield` — items/weapons/misc-weapons
- `valarian_conquest:galician_shield` — items/weapons/misc-weapons
- `valarian_conquest:galician_sword` — items/weapons/misc-weapons
- `valarian_conquest:heavy_axe` — items/weapons/misc-weapons
- `valarian_conquest:hospitaller_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_1_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:hospitaller_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:kalota_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:kettle_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:lancastian_shield` — items/weapons/misc-weapons
- `valarian_conquest:lancastian_sword` — items/weapons/misc-weapons
- `valarian_conquest:leather_armor_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:leather_armor_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:leather_armor_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:light_axe` — items/weapons/misc-weapons
- `valarian_conquest:lord_coronet_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:mercenary_shield` — items/weapons/misc-weapons
- `valarian_conquest:mercenary_sword` — items/weapons/misc-weapons
- `valarian_conquest:nasal_helm_2_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:nasal_helm_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:neutral_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:neutral_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:neutral_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:neutral_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:neutral_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:numerian_shield` — items/weapons/misc-weapons
- `valarian_conquest:numerian_sword` — items/weapons/misc-weapons
- `valarian_conquest:orleanian_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_1_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:orleanian_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:quiver_chestplate` — items/curios-and-accessories/backpacks-and-quivers
- `valarian_conquest:soldiers_spear` — items/weapons/misc-weapons
- `valarian_conquest:templar_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_1_helmet` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_4_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:templar_armor_4_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:valarian_shield` — items/weapons/misc-weapons
- `valarian_conquest:valarian_sword` — items/weapons/misc-weapons
- `valarian_conquest:visgothian_armor_1_boots` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_1_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_1_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_2_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_2_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_3_chestplate` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_armor_3_leggings` — items/armor/misc-armor/valarian-conquest-armor
- `valarian_conquest:visgothian_shield` — items/weapons/misc-weapons
- `valarian_conquest:visgothian_sword` — items/weapons/misc-weapons
- `valarian_conquest:wooden_shield` — items/weapons/misc-weapons
- `wom:cursed_mask` — items/armor/misc-armor/other-armor
- `wom:ender_blaster` — items/weapons/way-of-the-dancing-blades/ender-blaster
- `wom:herrscher` — items/weapons/bladesworn-battallion/herrscher
- `wom:unholy_cursed_mask` — items/armor/misc-armor/other-armor

## No description in the dumps (behavior unknown)

0 entries.

