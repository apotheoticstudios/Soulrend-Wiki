---
{
  "title": "Casting Spells",
  "summary": "How to cast Iron's Spellbooks spells in Soulrend: spellbooks, imbued weapons and single-use scrolls, the spell wheel and quick casting.",
  "aliases": ["Spell Wheel", "Quick Cast", "Quick Casting", "Spellcasting", "Spell Bar"],
  "icon": "irons_spellbooks:gold_spell_book"
}
---
<!-- sources:
  config/defaultoptions/keybindings.txt (spellbook_cast V, spell_wheel E, spell_wheel_toggle / spell_bar_modifier / spell_quick_cast_1-15 unbound; inventory I; V also bound to epicfight_edp charged_attack, efn doppelganger and medievalorigins tertiary_active)
  mods/irons_spellbooks-1.20.1-3.15.6.jar ClientInputEvents.handleKeybinds (cast key sends CastPacket; Spell Wheel Hold opens while held and closes on release; Spell Wheel Toggle opens/closes; Quick Cast keys send QuickCastPacket(slot); spell bar modifier + mouse wheel changes the selection), handleSpellBarScrollModifier
  mods/irons_spellbooks-1.20.1-3.15.6.jar Utils.serverSideInitiateCast (casting the selected spell; same spell while casting -> CancelCastPacket.cancelCast(player, castType != LONG); no spellbook equipped but one in hand -> equips it), Utils.serverSideInitiateQuickCast (casts SpellSelectionManager.getSpellSlot(slot) without changing the selection)
  mods/irons_spellbooks-1.20.1-3.15.6.jar CancelCastPacket.cancelCast (adds the cooldown when its flag is true; a cancelled continuous scroll cast still removes the scroll)
  mods/irons_spellbooks-1.20.1-3.15.6.jar SpellSelectionManager.init (spells from the Spell Book curio slot, armor, main hand and off hand items that show in the spell wheel)
  mods/irons_spellbooks-1.20.1-3.15.6.jar CastSource.consumesMana (SPELLBOOK; SWORD when swordsConsumeMana), respectsCooldown (SPELLBOOK, SWORD); CastType INSTANT, LONG, CONTINUOUS; Scroll.removeScrollAfterCast
  mods/irons_spellbooks-1.20.1-3.15.6.jar lang (key.irons_spellbooks.*, ui.irons_spellbooks.cast_*, cast_error_*)
  defaultconfigs/irons_spellbooks-server.toml (swordsConsumeMana true, swordsCooldownMultiplier 0.5, spellGriefing false)
  config/irons_spellbooks-client.toml (spellBarDisplay Always, anchored to the hotbar; manaBarDisplay Contextual)
-->
**Casting Spells** in Soulrend works through Iron's Spells 'n Spellbooks. A spell can be cast from three things: a **spellbook** worn in the Spell Book slot, a **weapon or staff** with a spell imbued in it, or a **scroll**. Spellbooks and weapons cost [[features/magic/mana|mana]] and start a cooldown; scrolls cost neither, but each one is used up by its cast.

## How it works

### Spellbooks and weapons

1. Put a [[items/magic/spellbooks|spellbook]] in the Spell Book curio slot. Pressing the cast key while holding a spellbook with nothing in the slot equips it there.
2. Its spells appear on the **spell bar** above the hotbar. Spells imbued in held weapons, staffs and worn gear join the same bar.
3. Pick a spell with the spell wheel or the spell bar (below).
4. Press **Cast Selected Spell** (V by default) to cast it.

### Scrolls

A scroll holds one spell at one level. Hold it and use it (right-click) to cast that spell.

> [!WARNING] Scrolls are single use
> Casting a spell from a scroll uses the scroll up. A scroll costs no mana and ignores cooldowns, but each one gives a single cast. To cast a spell again and again, inscribe the scroll into a spellbook at the [[items/magic/magic-stations#Inscription Table|Inscription Table]], which also uses the scroll up but keeps the spell in the book.

Eldritch scrolls can't be cast until the spell is learned with an [[item:irons_spellbooks:eldritch_manuscript]] ("You can't understand this spell...").

## Spell wheel and quick casting

There are two ways to choose which spell goes off.

**The spell wheel** picks the spell the cast key will use. Hold **Spell Wheel Hold** (E by default), move the mouse onto a spell, and let go: that spell stays selected until another is picked. Iron's also has a **Spell Wheel Toggle** key (press once to open, again to close), and a **Spell Bar Scroll Modifier**: while it is held, the mouse wheel steps through the spell bar. Both are unbound in Soulrend.

**Quick casting** skips the selection. Iron's has 15 **Quick Cast Slot** keys; each casts the spell in that position of the spell bar at once, and the selected spell stays as it was. They are all unbound in Soulrend: set them in Controls under "Iron's Spells 'n Spellbooks - Quick Cast".

| | Spell wheel + cast key | Quick cast keys |
| --- | --- | --- |
| Keys needed | Two (E and V) | One per spell |
| Speed | Pick, then cast | Casts at once |
| Best for | Large spellbooks, spells used now and then | A few spells cast often, mid-fight |
| Changes the selected spell | Yes | No |
| Set up | Works out of the box | Bind the keys first |

The slot numbers follow the order of the spell bar, so changing the spellbook or the held weapon can change which spell a quick cast key fires.

## Details

- **Cast types.** Each spell's tooltip gives its type:
  - **Instant** spells go off at once.
  - **Cast-time** spells ("Cast Time") charge before they go off.
  - **Continuous** spells ("Duration") keep going and cost mana every second ("Mana/s").
- **Stopping a cast.** Pressing the cast key again while the same spell is casting stops it. A stopped cast-time spell doesn't start its cooldown; a stopped continuous spell does.
- **A failed cast** shows a message: "Not enough mana to cast …", "… is on cooldown.", "… cannot be cast from a scroll.", "This spell requires a target." and others.
- **Imbued weapons** cost mana in Soulrend, and their spells have **half** the normal cooldown.
- **Spells don't grief.** They don't break blocks or start fires.
- Spell Power, Cooldown Reduction and Cast Time Reduction change a spell's numbers; the school pages under [[items/magic/spells|Spells]] list the base values.

## Tips

- E opens the spell wheel because Soulrend moves the inventory to I.
- V is also the default key for Epic Fight's charged attack, Nightfall's doppelganger and Medieval Origins' Tertiary Active power. If a class uses one of those, rebind one side in Controls.
- Keep a few scrolls of an emergency spell (a heal or a teleport) for when mana runs out: they still work at 0 mana.

## Related

- [[features/magic/mana|Mana]]
- [[items/magic/spells|Spells]]
- [[items/magic/spellbooks|Spellbooks]]
- [[items/magic/magic-stations|Magic Stations]]
