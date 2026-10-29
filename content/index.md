---
{
  "title": "Soulrend Wiki",
  "navTitle": "Main page",
  "summary": "The wiki for Soulrend, a Forge 1.20.1 adventure modpack: quests, bosses, origins, skill trees, items, magic and guides.",
  "icon": "minecraft:soul_lantern"
}
---
<!-- sources:
  content/progression/index.md (Prologue and five acts, Act III-b optional)
  content/leveling/index.md (level cap 200)
  content/features/multiplayer/soulrend-realms.md (official servers by Craft Down Under)
  https://www.curseforge.com/minecraft/modpacks/soulrend, https://discord.gg/pBDKC2Ttx8 (given by the wiki owner)
  page counts are computed by the build from content/
-->
```home
{
  "kind": "buttons",
  "bar": true,
  "lead": "Important Links:",
  "items": [
    { "label": "Soulrend on CurseForge", "url": "https://www.curseforge.com/minecraft/modpacks/soulrend", "icon": "minecraft:emerald" },
    { "label": "Official Discord", "url": "https://discord.gg/pBDKC2Ttx8", "icon": "minecraft:amethyst_shard" }
  ]
}
```

**Soulrend** is a Forge 1.20.1 adventure modpack. You follow a quest book through a Prologue and five acts, fight bosses with Epic Fight combat, cast spells from Iron's Spells 'n Spellbooks, and raise a Soulrend level (up to 200) by dealing damage. This wiki covers what the pack adds and changes, page by page.

```home
{
  "kind": "buttons",
  "items": [
    { "label": "Search the wiki", "search": true, "primary": true }
  ]
}
```

## Start here

```home
{
  "kind": "cards",
  "items": [
    { "page": "guides/getting-started", "text": "What to do in your first hours and where to go next." },
    { "page": "origins", "icon": "origins:orb_of_origin", "text": "19 races and 26 classes: the choice you make at the start." },
    { "page": "leveling", "text": "How damage becomes levels, skill points and attribute points." }
  ]
}
```

## The quest line

The main quest line, **The Exalted Path**, is gated act by act. Each act ends with a quest that opens the next one. The [[progression|Progression overview]] lists every gate.

```home
{
  "kind": "acts",
  "items": [
    { "page": "progression/prologue", "setting": "Tutorial" },
    { "page": "progression/act-i-awakening", "setting": "Overworld" },
    { "page": "progression/act-ii-first-steps", "setting": "Overworld bosses" },
    { "page": "progression/act-iii-into-the-flames", "setting": "The Nether and the Cataclysm dimensions" },
    { "page": "progression/act-iii-b-deeper-and-darker", "setting": "The Otherside", "optional": true },
    { "page": "progression/act-iv-beyond-reality", "setting": "The End" },
    { "page": "progression/act-v-duties", "setting": "The Past" }
  ]
}
```

## Play with others

Craft Down Under runs official Soulrend servers in Australia, Europe and the US, and one character follows you between all three. See [[features/multiplayer/soulrend-realms|Official Servers]] for the addresses and how the realms menu works, and [[features/multiplayer/teams-and-claims|Teams & Claims]] for sharing quest progress and protecting your base.

## Look things up

```home
{
  "kind": "cards",
  "search": "Search the wiki",
  "items": [
    { "page": "bosses", "text": "Every boss by act, with stats, drops and a 3D model.", "count": "bosses/" },
    { "page": "enemies", "text": "Mobs by act and dimension, with stats scaled to their level.", "count": "enemies/" },
    { "page": "items", "text": "Weapons, armor, curios, consumables and materials, with recipes and sources.", "count": "items/" },
    { "page": "skill-trees", "text": "Interactive maps of every skill tree and branch.", "count": "skill-trees/" },
    { "page": "epic-fight", "text": "Weapon types, innate skills and a 3D viewer for every attack." },
    { "page": "items/magic/spells", "icon": "irons_spellbooks:scroll", "text": "Spells by school, with where each one comes from." }
  ]
}
```

## How the game works

```home
{
  "kind": "cards",
  "items": [
    { "page": "features/magic", "title": "Magic", "text": "Casting spells, the spell wheel and mana." },
    { "page": "items/gear-progression", "text": "Affix gear, rarities, gems, sockets and reforging." },
    { "page": "features/travel-and-storage", "title": "Travel & Storage", "text": "Waystones, backpacks, storage networks and corpses." },
    { "page": "features/commands", "title": "Commands", "text": "`/soulrend`, `/origin`, `/skilltree` and more." },
    { "page": "features/settings-and-performance", "title": "Settings & Performance", "text": "Graphics presets, first-launch setup and pre-generation." },
    { "page": "guides/building-a-dragonforge", "text": "A 3D schematic and the yields for a dragon forge." }
  ]
}
```

## Pack information

- [[faq|FAQ]]: short answers to common questions.
- [[bugs|Known Bugs]]: problems observed in the pack.
- [[mods|Mods]]: every mod in the pack, with a CurseForge link and what it changes.
