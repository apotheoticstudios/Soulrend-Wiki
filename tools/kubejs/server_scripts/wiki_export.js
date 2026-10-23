// priority: -1000
// Soulrend Wiki export (dev instance only). Writes every recipe (after all KubeJS changes) and every
// item tag to kubejs/exported/wiki/ for `npm run sync-game` in the wiki repo.
// Does nothing unless kubejs/exported/wiki/enabled.json exists, so it is safe if it ever ships.
// Lowest priority so it loads last and sees the changes made by every other recipe script.

const WIKI_EXPORT_DIR = 'kubejs/exported/wiki'
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

function wikiExportEnabled() {
    return JsonIO.read(`${WIKI_EXPORT_DIR}/enabled.json`) != null
}

ServerEvents.recipes(event => {
    if (!wikiExportEnabled()) return
    let recipes = {}
    let count = 0
    let failed = 0
    event.forEachRecipe({}, recipe => {
        try {
            if (recipe.removed) return
            try { recipe.serialize() } catch (ignored) { /* unchanged recipes keep their original JSON */ }
            recipes[String(recipe.getId())] = JSON.parse(String(recipe.json.toString()))
            count++
        } catch (error) {
            failed++
        }
    })
    JsonIO.write(`${WIKI_EXPORT_DIR}/recipes.json`, recipes)
    console.info(`[wiki export] wrote ${count} recipes (${failed} could not be read)`)
})

ServerEvents.loaded(event => {
    if (!wikiExportEnabled()) return
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
})
