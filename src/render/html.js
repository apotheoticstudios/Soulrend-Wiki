const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ESCAPES[c]);
}

// Builds ` name="value"` pairs, skipping null/false and writing bare attributes for `true`.
export function attrs(obj) {
  let out = '';
  for (const [name, value] of Object.entries(obj)) {
    if (value === null || value === undefined || value === false) continue;
    out += value === true ? ` ${name}` : ` ${name}="${esc(value)}"`;
  }
  return out;
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

// "soulrend_core:soul_blade" -> "Soul Blade"; used when an item has no exported name.
export function humanize(id) {
  const name = id.includes(':') ? id.split(':')[1] : id;
  return name.split('/').pop().split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function stripHtml(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}
