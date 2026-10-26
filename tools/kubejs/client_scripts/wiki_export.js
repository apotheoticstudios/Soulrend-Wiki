// priority: -1000
// Soulrend Wiki export (dev instance only). On joining a world, writes to kubejs/exported/wiki/ for
// `npm run sync-game`:
//   items.json         every item's display name, rarity, mod and tooltip lines
//   gems.json          Apotheosis gems: weight, dimensions, rarity range and bonus lines at each rarity
//   skills.json        Epic Fight skills: name, category, resource, cost and description
//   spells.json        Iron's Spellbooks spells: school, cast type and per-level cost, cast time, rarity, info
//   attributes.json    attribute names and default values
//   effects.json       mob effect names, descriptions and categories
//   enchantments.json  enchantment names, descriptions, levels and categories
// Runs on the client because only the client knows translated names and tooltips.
// Does nothing unless kubejs/exported/wiki/enabled.json exists.

const WIKI_EXPORT_DIR = 'kubejs/exported/wiki'
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $TooltipFlag = Java.loadClass('net.minecraft.world.item.TooltipFlag')
const $Component = Java.loadClass('net.minecraft.network.chat.Component')
const $Language = Java.loadClass('net.minecraft.locale.Language')
const $ArrayList = Java.loadClass('java.util.ArrayList')

// Optional mods: a missing class just switches that part of the export off.
function wikiClass(name) {
    try { return Java.loadClass(name) } catch (error) { return null }
}
const $GemRegistry = wikiClass('dev.shadowsoffire.apotheosis.adventure.socket.gem.GemRegistry')
const $RarityRegistry = wikiClass('dev.shadowsoffire.apotheosis.adventure.loot.RarityRegistry')
const $SkillManager = wikiClass('yesman.epicfight.api.data.reloader.SkillManager')
const $SpellRegistry = wikiClass('io.redspace.ironsspellbooks.api.registry.SpellRegistry')

// Named text colours -> § codes, so the wiki can render tooltips with the game's colours.
const WIKI_COLOR_CODES = {
    black: '0', dark_blue: '1', dark_green: '2', dark_aqua: '3', dark_red: '4', dark_purple: '5', gold: '6', gray: '7',
    dark_gray: '8', blue: '9', green: 'a', aqua: 'b', red: 'c', light_purple: 'd', yellow: 'e', white: 'f'
}

// Flattens a text component into a §-formatted string. Hex colours become §#rrggbb (a wiki extension).
function wikiFormatted(component) {
    let out = ''
    component.toFlatList().forEach(part => {
        let text = String(part.getString())
        if (text.length == 0) return
        let style = part.getStyle()
        let codes = '§r'
        let color = style.getColor()
        if (color != null) {
            let name = String(color.serialize())
            codes += WIKI_COLOR_CODES[name] ? `§${WIKI_COLOR_CODES[name]}` : `§${name.toLowerCase()}`
        }
        if (style.isBold()) codes += '§l'
        if (style.isItalic()) codes += '§o'
        if (style.isUnderlined()) codes += '§n'
        if (style.isStrikethrough()) codes += '§m'
        if (style.isObfuscated()) codes += '§k'
        out += codes + text
    })
    return out.replace(/^§r/, '')
}

function wikiModName(namespace) {
    try {
        let info = Platform.getMods().get(namespace)
        if (info != null) return String(info.name)
    } catch (ignored) { }
    return namespace == 'minecraft' ? 'Minecraft' : namespace
}

// A translation if the key exists, otherwise null (many effects and enchantments have no description).
function wikiTranslated(key, args) {
    if (!$Language.getInstance().has(key)) return null
    return wikiFormatted(args ? $Component.translatable(key, args) : $Component.translatable(key))
}

function wikiExportGems() {
    let rarities = $RarityRegistry.INSTANCE.getOrderedRarities()
    let gems = {}
    $GemRegistry.INSTANCE.getKeys().forEach(id => {
        let gem = $GemRegistry.INSTANCE.getValue(id)
        let dimensions = []
        gem.getDimensions().forEach(dimension => dimensions.push(String(dimension)))
        let byRarity = {}
        rarities.forEach(holder => {
            let rarity = holder.get()
            if (!rarity.isAtLeast(gem.getMinRarity()) || !rarity.isAtMost(gem.getMaxRarity())) return
            let lines = []
            gem.addInformation($GemRegistry.createGemStack(gem, rarity), rarity, line => lines.push(wikiFormatted(line)))
            byRarity[String(holder.getId())] = lines
        })
        let stack = $GemRegistry.createGemStack(gem, gem.getMinRarity())
        gems[String(id)] = {
            name: wikiFormatted(stack.getHoverName()),
            weight: Number(gem.getWeight()),
            quality: Number(gem.getQuality()),
            unique: gem.isUnique(),
            dimensions: dimensions.sort(),
            minRarity: String($RarityRegistry.INSTANCE.getKey(gem.getMinRarity())),
            maxRarity: String($RarityRegistry.INSTANCE.getKey(gem.getMaxRarity())),
            bonuses: byRarity
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/gems.json`, gems)
    return Object.keys(gems).length
}

function wikiExportSkills() {
    let skills = {}
    let failed = []
    $SkillManager.getSkills(skill => true).forEach(skill => {
        let id = skill.getRegistryName()
        try {
            // Null for skills that aren't tied to a weapon type.
            let categories = []
            let available = skill.getAvailableWeaponCategories()
            if (available != null) available.forEach(category => categories.push(String(category).toLowerCase()))
            let args = skill.getTooltipArgsOfScreen(new $ArrayList())
            skills[String(id)] = {
                name: wikiFormatted(skill.getDisplayName()),
                category: String(skill.getCategory()).toLowerCase(),
                resource: String(skill.getResourceType()).toLowerCase(),
                consumption: Number(skill.getConsumption()),
                maxDuration: Number(skill.getMaxDuration()),
                maxStack: Number(skill.getMaxStack()),
                weaponCategories: categories.sort(),
                description: wikiTranslated(`skill.${id.getNamespace()}.${id.getPath()}.tooltip`, args == null ? null : args.toArray())
            }
        } catch (error) {
            failed.push(`${id}: ${error}`)
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/skills.json`, skills)
    if (failed.length > 0) console.warn(`[wiki export] skills failed: ${failed.slice(0, 20).join('; ')}`)
    return `${Object.keys(skills).length}${failed.length > 0 ? ` (${failed.length} failed, see the KubeJS log)` : ''}`
}

// Per-level values use this player as the caster, so spell power from gear or origins changes them.
function wikiExportSpells(player) {
    let spells = {}
    $SpellRegistry.REGISTRY.get().getValues().forEach(spell => {
        let levels = []
        for (let level = spell.getMinLevel(); level <= spell.getMaxLevel(); level++) {
            let info = []
            spell.getUniqueInfo(level, player).forEach(line => info.push(wikiFormatted(line)))
            levels.push({
                level: level,
                rarity: String(spell.getRarity(level)).toLowerCase(),
                manaCost: Number(spell.getManaCost(level)),
                castTime: Number(spell.getCastTime(level)),
                info: info
            })
        }
        spells[String(spell.getSpellResource())] = {
            name: wikiFormatted(spell.getDisplayName(player)),
            school: String(spell.getSchoolType().getId()),
            castType: String(spell.getCastType()).toLowerCase(),
            cooldown: Number(spell.getSpellCooldown()),
            enabled: spell.isEnabled(),
            lootable: spell.allowLooting(),
            description: wikiTranslated(`${spell.getComponentId()}.guide`, null),
            levels: levels
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/spells.json`, spells)
    return Object.keys(spells).length
}

function wikiExportRegistries() {
    let attributes = {}
    $BuiltInRegistries.ATTRIBUTE.keySet().forEach(location => {
        let attribute = $BuiltInRegistries.ATTRIBUTE.get(location)
        attributes[String(location)] = {
            name: wikiTranslated(attribute.getDescriptionId(), null),
            default: Number(attribute.getDefaultValue())
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/attributes.json`, attributes)

    let effects = {}
    $BuiltInRegistries.MOB_EFFECT.keySet().forEach(location => {
        let effect = $BuiltInRegistries.MOB_EFFECT.get(location)
        effects[String(location)] = {
            name: wikiFormatted(effect.getDisplayName()),
            description: wikiTranslated(`${effect.getDescriptionId()}.description`, null),
            category: String(effect.getCategory().name()).toLowerCase(),
            color: Number(effect.getColor())
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/effects.json`, effects)

    let enchantments = {}
    $BuiltInRegistries.ENCHANTMENT.keySet().forEach(location => {
        let enchantment = $BuiltInRegistries.ENCHANTMENT.get(location)
        enchantments[String(location)] = {
            name: wikiTranslated(enchantment.getDescriptionId(), null),
            description: wikiTranslated(`${enchantment.getDescriptionId()}.desc`, null),
            minLevel: Number(enchantment.getMinLevel()),
            maxLevel: Number(enchantment.getMaxLevel()),
            rarity: String(enchantment.getRarity().name()).toLowerCase(),
            category: enchantment.category == null ? null : String(enchantment.category.name()).toLowerCase(),
            treasure: enchantment.isTreasureOnly(),
            curse: enchantment.isCurse()
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/enchantments.json`, enchantments)
    return `${Object.keys(attributes).length} attributes, ${Object.keys(effects).length} effects, ${Object.keys(enchantments).length} enchantments`
}

// Runs one export step; a failure is reported in chat and the log but doesn't stop the others.
function wikiStep(player, label, run) {
    try {
        let result = run()
        player.tell(`[Wiki export] ${label}: ${result}`)
    } catch (error) {
        player.tell(`[Wiki export] ${label} failed: ${error}`)
        console.error(`[wiki export] ${label} failed: ${error}`)
    }
}

ClientEvents.loggedIn(event => {
    if (JsonIO.read(`${WIKI_EXPORT_DIR}/enabled.json`) == null) return
    let player = Client.player
    if ($GemRegistry != null) wikiStep(player, 'gems', wikiExportGems)
    if ($SkillManager != null) wikiStep(player, 'skills', wikiExportSkills)
    if ($SpellRegistry != null) wikiStep(player, 'spells', () => wikiExportSpells(player))
    wikiStep(player, 'registries', wikiExportRegistries)
    let items = {}
    let failed = 0
    $BuiltInRegistries.ITEM.keySet().forEach(location => {
        let id = String(location)
        try {
            let stack = new $ItemStack($BuiltInRegistries.ITEM.get(location))
            let mod = wikiModName(String(location.getNamespace()))
            let lines = []
            let tooltip = stack.getTooltipLines(player, $TooltipFlag.NORMAL)
            for (let i = 1; i < tooltip.size(); i++) {
                let line = wikiFormatted(tooltip.get(i))
                // Skip the mod-name line some mods (like JEI) append; the wiki shows the mod separately.
                if (line.replace(/§./g, '').trim() == mod) continue
                lines.push(line)
            }
            items[id] = {
                name: wikiFormatted(stack.getHoverName()),
                rarity: String(stack.getRarity().name()).toLowerCase(),
                mod: mod,
                tooltip: lines
            }
        } catch (error) {
            failed++
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/items.json`, items)
    player.tell(`[Wiki export] Wrote ${Object.keys(items).length} items (${failed} failed). Now run npm run sync-game.`)
})
