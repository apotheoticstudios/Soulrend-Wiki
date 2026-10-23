---
{
  "title": "Kitchen Sink",
  "category": "Guides",
  "summary": "Every wiki feature on one page, for testing styles and the build. Only built in dev mode.",
  "infobox": {
    "title": "Infobox",
    "item": "minecraft:diamond",
    "caption": "Infobox values support **Markdown** and [[Getting Started|links]].",
    "rows": [
      ["Plain", "Text value"],
      ["Link", "[[Arcane Essence]]"],
      { "heading": "Section heading" },
      ["Item", "[[item:minecraft:diamond]]"]
    ]
  }
}
---
This page uses every feature. Folders and files starting with `_` are drafts: built by `npm run dev`, skipped by `npm run build`.

## Text

Regular paragraph with **bold**, *italic*, `inline code`, <mark>highlight</mark> and an [external link](https://www.minecraft.net/). Keyboard: <kbd>Ctrl</kbd> + <kbd>K</kbd>.

### Lists

- Unordered item
- Another item
  - Nested item

1. Ordered
2. List

## Links

- Page by title: [[Arcane Essence]]
- Page by alias: [[Beginner's Guide]]
- Page by path with label: [[guides/getting-started|the guide]]
- Section link: [[Getting Started#Learning magic]]
- Same-page section: [[#Callouts]]
- Item: [[item:irons_spellbooks:arcane_essence]]
- Item with label: [[item:minecraft:diamond|a shiny diamond]]

## Callouts

> [!NOTE]
> A note.

> [!TIP] Custom title
> A tip with its own title.

> [!IMPORTANT]
> Important information.

> [!WARNING]
> A warning.

> [!CAUTION]
> Dangerous!

> [!LORE] From the Codex of Ash
> *The souls remember what the living forget.*

## Item grid

{{items minecraft:diamond minecraft:emerald irons_spellbooks:arcane_essence minecraft:stick minecraft:apple minecraft:diamond_sword}}

```items
["minecraft:iron_ingot", "minecraft:gold_ingot"]
```

## Recipes

Every recipe that makes an item (exported data):

{{recipes minecraft:torch}}

Only the charcoal torch recipes:

{{recipes output=minecraft:torch input=minecraft:charcoal}}

One exported recipe by id, for each built-in station:

{{recipe minecraft:iron_ingot_from_smelting_raw_iron}}

{{recipe minecraft:stone_bricks_from_stone_stonecutting}}

{{recipe minecraft:netherite_sword_smithing}}

A mod recipe drawn with an automatic ("flow") layout:

{{recipe delightful:cutting/baklava}}

Hand-written shaped recipe; the planks slot cycles through the tag:

```recipe
{
  "station": "crafting_table",
  "grid": ["P P", "PSP", " P "],
  "key": { "P": "#minecraft:planks", "S": "irons_spellbooks:arcane_essence" },
  "output": "minecraft:chest",
  "count": 2
}
```

Hand-written shapeless recipe and a free-form one with a custom label and note:

```recipe
{ "station": "crafting_table", "ingredients": ["minecraft:diamond", "#minecraft:coals"], "output": "minecraft:emerald", "count": 3 }
```

```recipe
{
  "station": "cutting_board",
  "label": "Spellbinding (example)",
  "inputs": ["minecraft:book", "irons_spellbooks:arcane_essence", "minecraft:lapis_lazuli"],
  "outputs": [{ "item": "minecraft:enchanted_book" }],
  "info": "Costs **5** levels"
}
```

Everything that uses an item, capped with `limit`:

{{uses minecraft:diamond limit=3}}

## 3D model

{{model _test/test-cube.gltf animation=idle caption="A test cube (assets/_test/test-cube.gltf) with an *idle* animation"}}

## Table

| Item | Damage | Speed | Notes |
| --- | ---: | ---: | --- |
| Iron Sword | 6 | 1.6 | Baseline |
| Diamond Sword | 7 | 1.6 | [[item:minecraft:diamond]] |

## Pixel font

<p style="font-family: 'Soulrend MC'; font-size: 16px; line-height: 20px; text-underline-position: from-font">Regular · <b>Bold</b> · <i>Italic</i> · <b><i>Bold italic</i></b> · <s style="text-decoration-thickness: 0.125em">Struck</s> · <u style="text-decoration-thickness: 0.125em">Underlined</u><br>Àéîõü çğł œß — “quotes” … €12 ±3 → done</p>

## Code

```js
// Ordinary code blocks still work.
console.log('hello');
```

---

Final paragraph after a horizontal rule.
