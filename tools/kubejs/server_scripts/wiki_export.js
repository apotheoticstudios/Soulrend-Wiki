// priority: -1000
// Soulrend Wiki export (dev instance only). Writes to kubejs/exported/wiki/ for `npm run sync-game`:
//   recipes.json      every recipe the started server has: after all KubeJS changes (including recipes KubeJS
//                     scripts add) and after mods that remove recipes later (soulrend_core's removals.toml)
//   tags.json         every item tag
//   loot_tables.json  every loot table as the final datapack JSON (after Paxi and other overrides)
//   item_stats.json   per-item stats: attribute modifiers per slot, durability, tool/armor/food data,
//                     curio slots, Apotheosis loot category, Epic Fight weapon data, spellbook slots
// Does nothing unless kubejs/exported/wiki/enabled.json exists, so it is safe if it ever ships.
// Lowest priority so it loads last and sees the changes made by every other recipe script.

const WIKI_EXPORT_DIR = 'kubejs/exported/wiki'
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')
const $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
const $TieredItem = Java.loadClass('net.minecraft.world.item.TieredItem')
const $ArmorItem = Java.loadClass('net.minecraft.world.item.ArmorItem')
const $JsonParser = Java.loadClass('com.google.gson.JsonParser')
const $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks')
const $TierSortingRegistry = Java.loadClass('net.minecraftforge.common.TierSortingRegistry')
const $UUID = Java.loadClass('java.util.UUID')
const $HashMap = Java.loadClass('java.util.HashMap')

// Rhino quirks: Java arrays have no forEach, and a property name on a Java map is looked up as a key
// first, which throws on maps with non-string keys (a TreeMap of ResourceLocations). So loop arrays by
// index and copy maps into a HashMap before touching them.
function wikiEachOf(array, callback) {
    for (let i = 0; i < array.length; i++) callback(array[i])
}
function wikiEachEntry(map, callback) {
    new $HashMap(map).entrySet().forEach(entry => callback(entry.getKey(), entry.getValue()))
}
// Curios needs a UUID per modifier source; any fixed one works for reading the values.
const WIKI_CURIO_UUID = $UUID.fromString('5f1c6c3e-8f0e-4a51-9d2e-77d0a1b2c3d4')

// Optional mods: a missing class just switches that part of the export off.
function wikiClass(name) {
    try { return Java.loadClass(name) } catch (error) { return null }
}
const $CuriosApi = wikiClass('top.theillusivec4.curios.api.CuriosApi')
const $SlotContext = wikiClass('top.theillusivec4.curios.api.SlotContext')
const $LootCategory = wikiClass('dev.shadowsoffire.apotheosis.adventure.loot.LootCategory')
const $EpicFightCapabilities = wikiClass('yesman.epicfight.world.capabilities.EpicFightCapabilities')
const $PlayerPatch = wikiClass('yesman.epicfight.world.capabilities.entitypatch.player.PlayerPatch')
const $Styles = wikiClass('yesman.epicfight.world.capabilities.item.CapabilityItem$Styles')
const $SpellBook = wikiClass('io.redspace.ironsspellbooks.item.SpellBook')

function wikiExportEnabled() {
    return JsonIO.read(`${WIKI_EXPORT_DIR}/enabled.json`) != null
}

// Recipe JSON collected during ServerEvents.recipes; written by ServerEvents.loaded once later removals have run.
let wikiPendingRecipes = null

ServerEvents.recipes(event => {
    if (!wikiExportEnabled()) return
    let recipes = {}
    let count = 0
    let failed = 0
    let add = recipe => {
        try {
            if (recipe.removed) return
            try { recipe.serialize() } catch (ignored) { /* unchanged recipes keep their original JSON */ }
            let json = JSON.parse(String(recipe.json.toString()))
            // Script-added recipes serialize with type "unknown"; the recipe object still knows its type.
            if (!json.type || json.type == 'unknown') json.type = String(recipe.getType())
            recipes[String(recipe.getOrCreateId())] = json
            count++
        } catch (error) {
            failed++
        }
    }
    event.forEachRecipe({}, add)
    // forEachRecipe only visits recipes loaded from datapacks; event.shaped/custom/... go to addedRecipes.
    event.addedRecipes.forEach(add)
    wikiPendingRecipes = recipes
    console.info(`[wiki export] collected ${count} recipes (${failed} could not be read)`)
})

// Rebuilds JSON for a recipe object that has none, from its ingredients and result. Shaped recipes get a
// pattern with one key per distinct ingredient; everything else is written as an ingredient list.
function wikiSerializeLive(recipe, server) {
    let result = recipe.getResultItem(server.registryAccess())
    if (result == null || result.isEmpty()) return null
    let ingredients = []
    recipe.getIngredients().forEach(ingredient => {
        ingredients.push(ingredient.isEmpty() ? null : JSON.parse(String(ingredient.toJson().toString())))
    })
    let json = {
        type: String($BuiltInRegistries.RECIPE_SERIALIZER.getKey(recipe.getSerializer())),
        result: { item: String($BuiltInRegistries.ITEM.getKey(result.getItem())), count: result.getCount() }
    }
    if (typeof recipe.getWidth === 'function') {
        let width = recipe.getWidth()
        let keys = {}
        let symbols = 'ABCDEFGHI'
        json.key = {}
        json.pattern = []
        for (let y = 0; y < recipe.getHeight(); y++) {
            let row = ''
            for (let x = 0; x < width; x++) {
                let ingredient = ingredients[y * width + x]
                if (ingredient == null) { row += ' '; continue }
                let text = JSON.stringify(ingredient)
                if (!keys[text]) {
                    keys[text] = symbols[Object.keys(keys).length]
                    json.key[keys[text]] = ingredient
                }
                row += keys[text]
            }
            json.pattern.push(row)
        }
    } else {
        json.ingredients = ingredients.filter(ingredient => ingredient != null)
    }
    return json
}

// Mods can still remove recipes after the KubeJS event (soulrend_core's removals.toml runs on TagsUpdatedEvent),
// so only the recipes the started server still has are written. Mods can also add recipes after it (Apotheosis
// registers its shelves and tomes in code through Placebo); those are rebuilt from the live recipe objects.
function wikiWriteRecipes(server) {
    if (wikiPendingRecipes == null) {
        console.warn('[wiki export] no recipes were collected, recipes.json was not written')
        return
    }
    let live = {}
    let late = {}
    let lateFailed = 0
    server.getRecipeManager().getRecipes().forEach(recipe => {
        let id = String(recipe.getId())
        live[id] = true
        if (wikiPendingRecipes[id]) return
        try {
            let json = wikiSerializeLive(recipe, server)
            if (json) late[id] = json
            else lateFailed++
        } catch (error) {
            lateFailed++
        }
    })
    let recipes = {}
    let removed = []
    Object.keys(wikiPendingRecipes).forEach(id => {
        if (live[id]) recipes[id] = wikiPendingRecipes[id]
        else removed.push(id)
    })
    Object.keys(late).forEach(id => { recipes[id] = late[id] })
    JsonIO.write(`${WIKI_EXPORT_DIR}/recipes.json`, recipes)
    let written = Object.keys(recipes).length
    console.info(`[wiki export] wrote ${written} recipes; dropped ${removed.length} removed after the recipe event${removed.length > 0 ? ` (e.g. ${removed.slice(0, 5).join(', ')})` : ''}`)
    console.info(`[wiki export] rebuilt ${Object.keys(late).length} recipes added after the recipe event; ${lateFailed} could not be read`)
    wikiPendingRecipes = null
}

ServerEvents.loaded(event => {
    if (!wikiExportEnabled()) return
    wikiWriteRecipes(event.server)

    let tags = {}
    $BuiltInRegistries.ITEM.getTags().forEach(pair => {
        let members = []
        pair.getSecond().forEach(holder => {
            holder.unwrapKey().ifPresent(key => members.push(String(key.location())))
        })
        if (members.length > 0) tags[String(pair.getFirst().location())] = members.sort()
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/tags.json`, tags)
    console.info(`[wiki export] wrote ${Object.keys(tags).length} item tags`)

    // The resource manager returns the winning file for each id, so overrides are already applied.
    // Global loot modifiers and drops made in code are not loot tables and are not included.
    let tables = {}
    let failed = 0
    wikiEachEntry(event.server.getResourceManager().listResources('loot_tables', location => String(location.getPath()).endsWith('.json')),
        (location, resource) => {
            let id = `${location.getNamespace()}:${String(location.getPath()).replace(/^loot_tables\//, '').replace(/\.json$/, '')}`
            try {
                let reader = resource.openAsReader()
                try { tables[id] = JSON.parse(String($JsonParser.parseReader(reader).toString())) } finally { reader.close() }
            } catch (error) {
                failed++
            }
        })
    JsonIO.write(`${WIKI_EXPORT_DIR}/loot_tables.json`, tables)
    console.info(`[wiki export] wrote ${Object.keys(tables).length} loot tables (${failed} could not be read)`)
})

function wikiModifiers(multimap) {
    let out = []
    multimap.entries().forEach(entry => {
        let key = $BuiltInRegistries.ATTRIBUTE.getKey(entry.getKey())
        let modifier = entry.getValue()
        out.push({
            attribute: key == null ? String(entry.getKey().getDescriptionId()) : String(key),
            amount: Number(modifier.getAmount()),
            operation: String(modifier.getOperation().name()).toLowerCase(),
            name: String(modifier.getName())
        })
    })
    return out
}

function wikiSlotName(slot) {
    return String(slot.getName())
}

// Each part is guarded on its own, so one mod API that throws doesn't drop the item's other stats.
// errors: part name -> { count, first } (the first message, with the item it came from).
function wikiItemStats(id, stack, player, errors) {
    let item = stack.getItem()
    let stats = {}
    let part = (name, run) => {
        try {
            run()
        } catch (error) {
            let entry = errors[name] || (errors[name] = { count: 0, first: `${id}: ${error}` })
            entry.count++
        }
    }

    part('attributes', () => {
        let attributes = {}
        wikiEachOf($EquipmentSlot.values(), slot => {
            let list = wikiModifiers(stack.getAttributeModifiers(slot))
            if (list.length > 0) attributes[wikiSlotName(slot)] = list
        })
        if (Object.keys(attributes).length > 0) stats.attributes = attributes
    })

    part('basics', () => {
        if (stack.getMaxStackSize() != 64) stats.maxStackSize = Number(stack.getMaxStackSize())
        if (stack.isDamageableItem()) stats.durability = Number(stack.getMaxDamage())
        if (item.isFireResistant()) stats.fireResistant = true
        let enchantability = Number(stack.getEnchantmentValue())
        if (enchantability > 0) stats.enchantability = enchantability
        let burnTime = Number($ForgeHooks.getBurnTime(stack, null))
        if (burnTime > 0) stats.burnTime = burnTime
        let slot = $LivingEntity.getEquipmentSlotForItem(stack)
        if (slot != $EquipmentSlot.MAINHAND) stats.equipSlot = wikiSlotName(slot)
    })

    if (item instanceof $TieredItem) part('tier', () => {
        let tier = item.getTier()
        let tierName = $TierSortingRegistry.getName(tier)
        stats.tier = {
            name: tierName == null ? String(tier) : String(tierName),
            level: Number(tier.getLevel()),
            uses: Number(tier.getUses()),
            speed: Number(tier.getSpeed()),
            attackDamageBonus: Number(tier.getAttackDamageBonus()),
            enchantability: Number(tier.getEnchantmentValue())
        }
    })

    if (item instanceof $ArmorItem) part('armor', () => {
        let material = item.getMaterial()
        stats.armor = {
            material: String(material.getName()),
            type: String(item.getType().getName()),
            defense: Number(item.getDefense()),
            toughness: Number(item.getToughness()),
            knockbackResistance: Number(material.getKnockbackResistance())
        }
    })

    part('food', () => {
        let food = stack.getFoodProperties(player)
        if (food == null) return
        let effects = []
        food.getEffects().forEach(pair => {
            let effect = pair.getFirst()
            effects.push({
                effect: String($BuiltInRegistries.MOB_EFFECT.getKey(effect.getEffect())),
                duration: Number(effect.getDuration()),
                amplifier: Number(effect.getAmplifier()),
                chance: Number(pair.getSecond())
            })
        })
        stats.food = {
            nutrition: Number(food.getNutrition()),
            saturation: Number(food.getSaturationModifier()),
            meat: food.isMeat(),
            alwaysEdible: food.canAlwaysEat(),
            fast: food.isFastFood(),
            effects: effects
        }
    })

    if ($CuriosApi != null) part('curios', () => {
        let curioSlots = []
        let curioAttributes = {}
        // KubeJS exposes the player's level as a property, not the level() method.
        wikiEachEntry($CuriosApi.getItemStackSlots(stack, player.level), (slotId, type) => {
            slotId = String(slotId)
            curioSlots.push(slotId)
            let context = new $SlotContext(slotId, player, 0, false, true)
            let list = wikiModifiers($CuriosApi.getAttributeModifiers(context, WIKI_CURIO_UUID, stack))
            if (list.length > 0) curioAttributes[slotId] = list
        })
        if (curioSlots.length > 0) stats.curioSlots = curioSlots.sort()
        if (Object.keys(curioAttributes).length > 0) stats.curioAttributes = curioAttributes
    })

    if ($LootCategory != null) part('apotheosis', () => {
        let category = $LootCategory.forItem(stack)
        if (category != null && !category.isNone()) stats.apotheosisCategory = String(category.getName())
    })

    if ($EpicFightCapabilities != null) part('epicFight', () => {
        let capability = $EpicFightCapabilities.getItemStackCapability(stack)
        if (capability == null || capability.isEmpty()) return
        let patch = $EpicFightCapabilities.getEntityPatch(player, $PlayerPatch)
        let styles = {}
        wikiEachOf($Styles.values(), style => {
            let damage = capability.getDamageAttributesInCondition(style)
            if (damage == null) return
            let list = []
            wikiEachEntry(damage, (attribute, modifier) => {
                list.push({
                    attribute: String($BuiltInRegistries.ATTRIBUTE.getKey(attribute)),
                    amount: Number(modifier.getAmount()),
                    operation: String(modifier.getOperation().name()).toLowerCase()
                })
            })
            if (list.length > 0) styles[String(style.name()).toLowerCase()] = list
        })
        let innate = patch == null ? null : capability.getInnateSkill(patch, stack)
        let passive = capability.getPassiveSkill()
        stats.epicFight = {
            category: String(capability.getWeaponCategory()).toLowerCase(),
            style: patch == null ? null : String(capability.getStyle(patch)).toLowerCase(),
            innateSkill: innate == null ? null : String(innate.getRegistryName()),
            passiveSkill: passive == null ? null : String(passive.getRegistryName()),
            reach: Number(capability.getReach()),
            offhand: capability.canBePlacedOffhand(),
            styles: styles
        }
    })

    if ($SpellBook != null && item instanceof $SpellBook) part('spellbook', () => {
        stats.spellSlots = Number(item.getMaxSpellSlots())
    })
    return stats
}

// Needs a player for food, curio and Epic Fight data. Join on a fresh character with nothing equipped
// so origin and gear bonuses don't leak into player-dependent values (Epic Fight style, innate skill).
PlayerEvents.loggedIn(event => {
    if (!wikiExportEnabled()) return
    let player = event.player
    let stats = {}
    let errors = {}
    $BuiltInRegistries.ITEM.keySet().forEach(location => {
        let id = String(location)
        let entry = wikiItemStats(id, new $ItemStack($BuiltInRegistries.ITEM.get(location)), player, errors)
        if (Object.keys(entry).length > 0) stats[id] = entry
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/item_stats.json`, stats)
    let parts = Object.keys(errors)
    parts.forEach(name => console.warn(`[wiki export] item stats: ${name} failed for ${errors[name].count} items, first: ${errors[name].first}`))
    player.tell(`[Wiki export] Wrote stats for ${Object.keys(stats).length} items${parts.length > 0 ? ` (failures in ${parts.join(', ')}; see the KubeJS log)` : ''}.`)
})
