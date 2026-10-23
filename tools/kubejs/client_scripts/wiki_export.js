// priority: -1000
// Soulrend Wiki export (dev instance only). On joining a world, writes every item's display name,
// rarity, mod and tooltip lines to kubejs/exported/wiki/items.json for `npm run sync-game`.
// Runs on the client because only the client knows translated names and tooltips.
// Does nothing unless kubejs/exported/wiki/enabled.json exists.

const WIKI_EXPORT_DIR = 'kubejs/exported/wiki'
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const $TooltipFlag = Java.loadClass('net.minecraft.world.item.TooltipFlag')

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

ClientEvents.loggedIn(event => {
    if (JsonIO.read(`${WIKI_EXPORT_DIR}/enabled.json`) == null) return
    let player = Client.player
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
