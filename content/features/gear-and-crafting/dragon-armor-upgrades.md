---
{
  "title": "Dragon Armor Upgrades",
  "summary": "Dragon scale armor is upgraded in three Smithing Table steps: to a stronger scale set, to dragonsteel, then to the final dragonsteel armor.",
  "icon": "iceandfire:dragonsteel_fire_chestplate"
}
---
<!-- sources:
  kubejs/server_scripts/recipes/dragon_armor_recipes_main.js (CONFIG.DRAGON_ARMOR templates and materials; the three smithing loops; event.remove of the old recipes)
  kubejs/server_scripts/global.js (CONFIG.DRAGON_SCALES: elements, base and upgraded colors, upgradedDragonScaleId)
  game-data/recipes.json (minecraft:kjs/dungeons_and_combat_*_dragon_*, minecraft:kjs/iceandfire_dragonsteel_*, minecraft:kjs/dungeons_and_combat_*_dragonsteel_*)
  game-data/tags.json (my_tags:dragon_scale_<element>_<piece>, my_tags:upgraded_dragon_scale_<element>_<piece>)
-->

**Dragon armor upgrades** are Smithing Table recipes that Soulrend adds to move dragon armor from Ice and Fire's scale armor to dragonsteel and then to Dungeons and Combat's final dragonsteel sets. They exist for the three elemental dragons: fire, ice and lightning. The old recipes for the upgraded and dragonsteel pieces are removed, so these steps are the only way to make them.

## How it works

Each piece (helmet, chestplate, leggings, boots) goes through three steps. All use a Smithing Table.

| Step | Template | Base | Addition | Result |
| --- | --- | --- | --- | --- |
| 1 | [[item:dungeons_and_combat:tohi_smithing_template]] | Any Ice and Fire dragon scale armor piece of the element | [[item:iceandfire:sapphire_gem]] | A Dungeons and Combat dragon armor piece |
| 2 | [[item:minecraft:magma_block]] | The step 1 piece | The element's dragonsteel block | The Ice and Fire dragonsteel piece |
| 3 | [[item:irons_spellbooks:pyrium_ingot]] | The dragonsteel piece | [[item:astral_calamity_extras:molten_ingot]] | The Dungeons and Combat dragonsteel piece |

Step 2 uses [[item:iceandfire:dragonsteel_fire_block]], [[item:iceandfire:dragonsteel_ice_block]] or [[item:iceandfire:dragonsteel_lightning_block]] to match the element.

## Details

Each element has four colors of scale armor, and step 1 accepts any of them as the base. The result is a Dungeons and Combat set, which has its own four colors per element:

| Element | Ice and Fire scale armor | Step 1 results |
| --- | --- | --- |
| Fire | Red, gray, green, bronze | Red, black, green, bronze |
| Ice | Blue, white, sapphire, silver | Blue, sapphire, silver, white |
| Lightning | Electric, amethyst, copper, black | Amethyst, electric, copper, black electric |

The base armor's color does not decide the result. Each of the four results has its own recipe that takes any base piece of that element, so the player picks the colored set by choosing which recipe to follow in the recipe viewer.

Steps 2 and 3 do not depend on color, only on element. A dragonsteel piece of an element becomes that element's final set.

The three stages have pages on the Strength Path: [[items/armor/strength-path/fire-dragon-scale-armor|Fire Dragon Scale Armor]] (the base), [[items/armor/strength-path/polished-fire-dragon-scale-armor|Polished Fire Dragon Scale Armor]] (step 1), [[items/armor/strength-path/fire-dragonsteel-armor|Fire Dragonsteel Armor]] (step 2) and [[items/armor/strength-path/polished-fire-dragonsteel-armor|Polished Fire Dragonsteel Armor]] (step 3). The ice and lightning sets have matching pages.

## Tips

- The dragonsteel blocks are crafted and described on [[items/dragons/dragonsteel|Dragonsteel]]. The Molten Ingot is listed on [[items/materials/act-iii-materials|Act III Materials]].
- Sapphire Gems and Magma Blocks are the cheap steps. Step 3 needs the Pyrium Ingot template and the Molten Ingot.

## Related

- [[items/dragons/dragon-eggs-and-scales|Dragon Eggs & Scales]]
