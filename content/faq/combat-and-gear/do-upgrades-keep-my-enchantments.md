---
{
  "title": "Do upgrades keep my enchantments?",
  "summary": "Yes. Soulrend's equipment upgrade recipes copy the old item's data, including enchantments and imbued spells, onto the new one."
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar recipe/upgrade/UpgradeData (merges the input stack's NBT into the result; moves irons_spellbooks:spell_container data, keeping locked spells)
  kubejs/server_scripts/global.js (comment: the equipment upgrade trees are data files using soulrend_core:upgrade_shaped and upgrade_smithing)
-->
Yes. Equipment upgrades use Soulrend Core's own recipe types (`soulrend_core:upgrade_shaped` and `upgrade_smithing`), which copy the old item's data onto the upgraded one. Enchantments and other item data carry over, and so do spells imbued from Iron's Spells 'n Spellbooks, including ones that are still locked.
