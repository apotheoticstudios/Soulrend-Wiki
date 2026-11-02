// priority: -1000
// Soulrend Wiki attack export (dev instance only). Writes kubejs/exported/wiki/attack_modifiers.json:
// for every Epic Fight attack animation in the live registry (after datapack and mod changes), each phase's
// damage, armor negation and impact modifiers, stun type, hit priority, max strikes and extra damage.
// A modifier is a multiplier on the wielder's value, not a final number: `dmg` is what it turns a base of 1 into.
// Does nothing unless kubejs/exported/wiki/enabled.json exists, so it is safe if it ever ships.

const WIKI_ATTACK_DIR = 'kubejs/exported/wiki'
const wikiAttackClass = name => {
    try { return Java.loadClass(name) } catch (error) { return null }
}
const $AttackManager = wikiAttackClass('yesman.epicfight.api.animation.AnimationManager')
const $AttackAnimation = wikiAttackClass('yesman.epicfight.api.animation.types.AttackAnimation')
const $AttackPhaseProperty = wikiAttackClass('yesman.epicfight.api.animation.property.AnimationProperty$AttackPhaseProperty')
const $AttackValueModifier = wikiAttackClass('yesman.epicfight.api.utils.math.ValueModifier')
const $AttackHashMap = Java.loadClass('java.util.HashMap')

// Evaluates a ValueModifier the way the damage source does: setter replaces, adder adds, multiplier scales.
function wikiAttackModifier(modifier) {
    let calculator = $AttackValueModifier.calculator()
    calculator.attach(modifier)
    return { raw: String(modifier), at1: Number(calculator.getResult(1)), at0: Number(calculator.getResult(0)) }
}

function wikiAttackPhase(phase) {
    let out = {
        start: Number(phase.start), antic: Number(phase.antic), preDelay: Number(phase.preDelay),
        contact: Number(phase.contact), recovery: Number(phase.recovery), end: Number(phase.end),
        hand: String(phase.hand.name()).toLowerCase()
    }
    let props = {
        DAMAGE_MODIFIER: 'damage', ARMOR_NEGATION_MODIFIER: 'armorNegation', IMPACT_MODIFIER: 'impact',
        MAX_STRIKES_MODIFIER: 'maxStrikes'
    }
    Object.keys(props).forEach(field => {
        let value = phase.getProperty($AttackPhaseProperty[field]).orElse(null)
        if (value != null) out[props[field]] = wikiAttackModifier(value)
    })
    let stun = phase.getProperty($AttackPhaseProperty.STUN_TYPE).orElse(null)
    if (stun != null) out.stun = String(stun.name()).toLowerCase()
    let priority = phase.getProperty($AttackPhaseProperty.HIT_PRIORITY).orElse(null)
    if (priority != null) out.hitPriority = String(priority.name()).toLowerCase()
    let extra = phase.getProperty($AttackPhaseProperty.EXTRA_DAMAGE).orElse(null)
    if (extra != null) out.extraDamage = String(extra)
    return out
}

ServerEvents.loaded(event => {
    if (JsonIO.read(`${WIKI_ATTACK_DIR}/enabled.json`) == null) return
    if ($AttackManager == null) { console.warn('[wiki attack export] Epic Fight is not installed'); return }
    let result = {}
    let animations = 0
    let phases = 0
    let failed = 0
    let firstError = null
    let all = new $AttackHashMap($AttackManager.getInstance().getAnimations(() => true))
    all.entrySet().forEach(entry => {
        try {
            let animation = entry.getValue().get()
            if (animation == null || !(animation instanceof $AttackAnimation)) return
            let list = []
            for (let i = 0; i < animation.phases.length; i++) {
                list.push(wikiAttackPhase(animation.phases[i]))
                phases++
            }
            result[String(entry.getKey())] = { class: String(animation.getClass().getName()), phases: list }
            animations++
        } catch (error) {
            failed++
            if (firstError == null) firstError = `${entry.getKey()}: ${error}`
        }
    })
    JsonIO.write(`${WIKI_ATTACK_DIR}/attack_modifiers.json`, result)
    console.info(`[wiki attack export] ${animations} attack animations, ${phases} phases, ${failed} failed${firstError == null ? '' : ', first: ' + firstError}`)
    // Spot-check lines so the numbers can be read straight from the log.
    let shown = 0
    Object.keys(result).forEach(id => {
        if (shown++ >= 15) return
        result[id].phases.forEach((phase, index) => {
            console.info(`[wiki attack export] ${id} #${index}: damage ${phase.damage ? phase.damage.raw : '-'}, impact ${phase.impact ? phase.impact.raw : '-'}, armor negation ${phase.armorNegation ? phase.armorNegation.raw : '-'}, stun ${phase.stun || '-'}`)
        })
    })
})
