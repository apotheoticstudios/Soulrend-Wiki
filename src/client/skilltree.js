// Skill tree maps for {{skilltree}} embeds, drawn the way Passive Skill Tree draws its own screen
// (SkillTreeScreen, SkillButtons, SkillButton and ScreenHelper in the mod). Loaded only on pages with a
// tree (see main.js); data and textures come from _app/<hash>/skilltrees/, written by the build.
// Focused nodes are drawn learned (background, icon, frame); the others get the darkening frame.
import { mcTextToHtml } from '../shared/mctext.js';

const BASE = new URL('../skilltrees/', import.meta.url);
const MAX_ZOOM = 4;
const TICKS_PER_SECOND = 20;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const loaded = new Map();

export function initSkillTrees() {
  const pending = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      pending.unobserve(entry.target);
      mount(entry.target);
    }
  }, { rootMargin: '200px' });
  document.querySelectorAll('.skilltree-stage[data-skilltree]').forEach(stage => pending.observe(stage));
}

const image = src => {
  if (!loaded.has(src)) {
    const img = new Image();
    img.src = new URL(src, BASE).href;
    loaded.set(src, img.decode().then(() => img));
  }
  return loaded.get(src);
};

async function loadTree(id) {
  const response = await fetch(new URL(`${id}.json`, BASE));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  const screen = {};
  await Promise.all([
    image(data.sheet).then(img => { data.sheetImage = img; }),
    ...Object.entries(data.screen).map(([name, s]) => image(s.file).then(img => { screen[name] = img; })),
  ]);
  return { data, screen };
}

// One row of a connection texture (row 0 is the lit one) as a repeating pattern.
function rowPattern(ctx, img, row) {
  const h = img.height / 2;
  const canvas = new OffscreenCanvas(img.width, h);
  canvas.getContext('2d').drawImage(img, 0, row * h, img.width, h, 0, 0, img.width, h);
  return { pattern: ctx.createPattern(canvas, 'repeat-x'), scale: 6 / h };
}

async function mount(stage) {
  const status = document.createElement('span');
  status.className = 'skilltree-status';
  status.setAttribute('aria-live', 'polite');
  status.textContent = 'Loading skill tree…';
  stage.append(status);

  let tree;
  try {
    tree = await loadTree(stage.dataset.skilltree);
  } catch (error) {
    status.textContent = 'Could not load the skill tree.';
    console.error(error);
    return;
  }
  const { data, screen } = tree;
  const focus = new Set((stage.dataset.focus ?? '').split(' ').filter(Boolean));
  const learned = id => !focus.size || focus.has(id);
  const nodes = Object.entries(data.nodes).map(([id, n]) => ({ id, ...n }));
  const byId = new Map(nodes.map(n => [n.id, n]));
  const links = data.links.map(([from, to, type]) => ({ a: byId.get(from), b: byId.get(to), type }));

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  stage.querySelector('.skilltree-fallback')?.remove();
  status.textContent = '';
  stage.prepend(canvas);
  stage.tabIndex = 0;

  const patterns = {
    direct: [rowPattern(ctx, screen.direct, 0), rowPattern(ctx, screen.direct, 1)],
    oneWay: rowPattern(ctx, screen.oneWay, 0),
    long: rowPattern(ctx, screen.long, 0),
  };

  // Camera: the world point at the stage's centre, and CSS pixels per skill-tree unit (one GUI pixel).
  const cam = { x: 0, y: 0, zoom: 1 };
  let width = 0, height = 0, minZoom = 0.05;
  const bounds = list => {
    const b = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
    for (const n of list) {
      b.x0 = Math.min(b.x0, n.x - n.size / 2); b.x1 = Math.max(b.x1, n.x + n.size / 2);
      b.y0 = Math.min(b.y0, n.y - n.size / 2); b.y1 = Math.max(b.y1, n.y + n.size / 2);
    }
    return b;
  };
  const fitZoom = b => Math.min((width - 96) / (b.x1 - b.x0 || 1), (height - 96) / (b.y1 - b.y0 || 1));
  const fit = () => {
    const b = bounds(focus.size ? nodes.filter(n => focus.has(n.id)) : nodes);
    cam.x = (b.x0 + b.x1) / 2;
    cam.y = (b.y0 + b.y1) / 2;
    cam.zoom = Math.max(minZoom, Math.min(MAX_ZOOM, fitZoom(b)));
    redraw();
  };
  const toWorld = (px, py) => ({ x: cam.x + (px - width / 2) / cam.zoom, y: cam.y + (py - height / 2) / cam.zoom });
  const zoomAt = (factor, px = width / 2, py = height / 2) => {
    const before = toWorld(px, py);
    cam.zoom = Math.max(minZoom, Math.min(MAX_ZOOM, cam.zoom * factor));
    cam.x = before.x - (px - width / 2) / cam.zoom;
    cam.y = before.y - (py - height / 2) / cam.zoom;
    redraw();
  };

  let hovered = null;

  // ScreenHelper.renderConnection / renderOneWayConnection / renderGatewayConnection: a 6-unit strip
  // along the line between the two centres. (The mod stretches direct links by zoom on one axis only;
  // here every link is drawn in tree units, which is how they look at the mod's default zoom.)
  const strip = (a, b, { pattern, scale }, y, offset, mirror = false) => {
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    ctx.save();
    ctx.translate(a.x, a.y);
    ctx.rotate(Math.atan2(b.y - a.y, b.x - a.x));
    pattern.setTransform(new DOMMatrix([mirror ? -scale : scale, 0, 0, scale, offset, y]));
    ctx.fillStyle = pattern;
    ctx.fillRect(0, y, length, 6);
    ctx.restore();
  };

  // SkillButton.renderWidget: background, icon at half size (0.375 for 32px buttons), then the
  // darkening frame if not learned or the border frame if learned. Each background is a strip of 3 frames.
  const drawNode = n => {
    const x0 = n.x - n.size / 2, y0 = n.y - n.size / 2;
    if (n.broken && screen.broken) return ctx.drawImage(screen.broken, x0, y0, n.size, n.size);
    const sheet = data.sheetImage;
    const frame = i => {
      if (!n.bg) return;
      const [sx, sy, sw, sh] = n.bg;
      ctx.drawImage(sheet, sx + (sw / 3) * i, sy, sw / 3, sh, x0, y0, n.size, n.size);
    };
    frame(0);
    if (n.icon) {
      const s = n.size * (n.size === 32 ? 0.375 : 0.5);
      ctx.drawImage(sheet, ...n.icon, n.x - s / 2, n.y - s / 2, s, s);
    }
    frame(learned(n.id) ? 2 : 1);
  };

  const draw = now => {
    const dpr = devicePixelRatio || 1;
    const anim = reducedMotion.matches ? 0 : (now / 1000) * TICKS_PER_SECOND;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    // SkillTreeScreen.renderBackground: centred, scrolled at a third of the tree's speed, never zoomed.
    if (screen.background) {
      const size = data.screen.background.source;
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(screen.background, (width - size) / 2 - (cam.x * cam.zoom) / 3, (height - size) / 2 - (cam.y * cam.zoom) / 3, size, size);
    }
    ctx.imageSmoothingEnabled = false;

    ctx.save();
    ctx.translate(width / 2 - cam.x * cam.zoom, height / 2 - cam.y * cam.zoom);
    ctx.scale(cam.zoom, cam.zoom);
    // SkillButtons.renderConnections: direct links, then long links (only those of the hovered node),
    // then one-way arrows, which crawl along the link.
    for (const l of links) if (l.type === 'direct') strip(l.a, l.b, patterns.direct[learned(l.a.id) && learned(l.b.id) ? 0 : 1], -3, 0);
    for (const l of links) {
      if (l.type !== 'long' || (hovered !== l.a && hovered !== l.b)) continue;
      strip(l.a, l.b, patterns.long, -8, anim);
      strip(l.a, l.b, patterns.long, 2, -anim, true);
    }
    for (const l of links) if (l.type === 'oneWay') strip(l.a, l.b, patterns.oneWay, -3, anim);
    for (const n of nodes) drawNode(n);
    ctx.restore();

    // SkillTreeScreen.renderOverlay: the vignette, stretched over the whole view.
    if (screen.overlay) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(screen.overlay, 0, 0, width, height);
    }
  };

  // Redraw every frame while visible (the arrows move); otherwise only when something changes.
  let visible = true, frameId = 0;
  const loop = now => {
    frameId = 0;
    draw(now);
    if (visible && !document.hidden && !reducedMotion.matches) frameId = requestAnimationFrame(loop);
  };
  function redraw() {
    if (!frameId) frameId = requestAnimationFrame(loop);
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) redraw();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) redraw(); });

  let fitted = false;
  const resize = () => {
    width = stage.clientWidth;
    height = stage.clientHeight;
    const dpr = devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    minZoom = Math.max(0.02, fitZoom(bounds(nodes)) / 2);
    if (!fitted) {
      fitted = true;
      fit();
    }
    redraw();
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  // Hit-testing, last drawn first, against each button's square.
  const nodeAt = (px, py) => {
    const w = toWorld(px, py);
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      if (Math.abs(w.x - n.x) <= n.size / 2 && Math.abs(w.y - n.y) <= n.size / 2) return n;
    }
    return null;
  };
  const setHovered = (n, clientX, clientY) => {
    if (n !== hovered) {
      hovered = n;
      canvas.style.cursor = n ? 'pointer' : '';
      redraw();
    }
    if (n) showTooltip(n, data, clientX, clientY);
    else hideTooltip();
  };

  // Mouse: drag to pan, wheel to zoom, hover for tooltips. Touch: horizontal drag or two fingers to pan,
  // pinch to zoom, tap a node for its tooltip (vertical swipes keep scrolling the page).
  const pointers = new Map();
  let gesture = null;
  const local = e => {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  canvas.addEventListener('pointerdown', e => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, local(e));
    gesture = { moved: false, start: local(e), cam: { ...cam } };
    hint?.remove();
  });
  canvas.addEventListener('pointermove', e => {
    const p = local(e);
    if (!pointers.has(e.pointerId)) {
      if (e.pointerType === 'mouse') setHovered(nodeAt(p.x, p.y), e.clientX, e.clientY);
      return;
    }
    const prev = pointers.get(e.pointerId);
    pointers.set(e.pointerId, p);
    if (Math.hypot(p.x - gesture.start.x, p.y - gesture.start.y) > 4) gesture.moved = true;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const other = [...pointers.entries()].find(([id]) => id !== e.pointerId)[1];
      const before = Math.hypot(prev.x - other.x, prev.y - other.y);
      const after = Math.hypot(a.x - b.x, a.y - b.y);
      if (before > 0) zoomAt(after / before, (a.x + b.x) / 2, (a.y + b.y) / 2);
    }
    cam.x -= (p.x - prev.x) / cam.zoom / pointers.size;
    cam.y -= (p.y - prev.y) / cam.zoom / pointers.size;
    if (gesture.moved) setHovered(null);
    redraw();
  });
  const release = e => {
    if (!pointers.delete(e.pointerId)) return;
    if (e.type === 'pointerup' && gesture && !gesture.moved && !pointers.size) {
      const p = local(e);
      const n = nodeAt(p.x, p.y);
      if (e.pointerType === 'mouse') setHovered(n, e.clientX, e.clientY);
      else if (n) {
        const r = canvas.getBoundingClientRect();
        setHovered(n, r.left + width / 2 + (n.x - cam.x) * cam.zoom, r.top + height / 2 + (n.y - cam.y) * cam.zoom);
      } else setHovered(null);
    }
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !pointers.size) setHovered(null); });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    const p = local(e);
    zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), p.x, p.y);
    setHovered(nodeAt(p.x, p.y), e.clientX, e.clientY);
  }, { passive: false });
  document.addEventListener('pointerdown', e => { if (!stage.contains(e.target)) setHovered(null); });

  stage.addEventListener('keydown', e => {
    const step = 60 / cam.zoom;
    const keys = {
      ArrowLeft: () => { cam.x -= step; }, ArrowRight: () => { cam.x += step; },
      ArrowUp: () => { cam.y -= step; }, ArrowDown: () => { cam.y += step; },
      '+': () => zoomAt(1.25), '=': () => zoomAt(1.25), '-': () => zoomAt(0.8), 0: fit,
    };
    if (!keys[e.key]) return;
    e.preventDefault();
    keys[e.key]();
    redraw();
  });

  const tools = document.createElement('div');
  tools.className = 'skilltree-tools';
  for (const [label, text, action] of [['Zoom in', '+', () => zoomAt(1.25)], ['Zoom out', '−', () => zoomAt(0.8)], ['Reset view', '⟲', fit]]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.title = label;
    button.setAttribute('aria-label', label);
    button.textContent = text;
    button.addEventListener('click', action);
    tools.append(button);
  }
  stage.append(tools);
  let hint = document.createElement('span');
  hint.className = 'skilltree-hint';
  hint.textContent = matchMedia('(pointer: coarse)').matches ? 'Two fingers to move and zoom · tap a node' : 'Drag to move · scroll to zoom · hover a node';
  stage.append(hint);
  hint.addEventListener('animationend', () => { hint?.remove(); hint = null; });
}

// ScreenHelper.renderSkillTooltip, in CSS pixels at GUI scale 2 (the 8px font drawn at 16px):
// the text box starts 4 GUI px down, lines at 21 GUI px, 11 apart, and the frame texture's 110×20 header
// (21px caps, a repeated middle) runs 4 GUI px past the box on each side. Width is the text plus 42 GUI px.
let tip = null;
let tipNode = null;

function showTooltip(node, data, clientX, clientY) {
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'skill-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.innerHTML = '<canvas class="skill-tooltip-frame" aria-hidden="true"></canvas><div class="skill-tooltip-title"></div><div class="skill-tooltip-lines"></div>';
    document.body.append(tip);
  }
  if (tipNode !== node) {
    tipNode = node;
    const [title = '', ...lines] = node.tooltip;
    tip.querySelector('.skill-tooltip-title').innerHTML = `<span>${mcTextToHtml(title)}</span>`;
    tip.querySelector('.skill-tooltip-lines').innerHTML = lines.map(l => `<div>${l ? mcTextToHtml(l) : '&nbsp;'}</div>`).join('');
    tip.style.width = '';
    tip.hidden = false;
    const text = Math.max(tip.querySelector('.skill-tooltip-title span').offsetWidth, tip.querySelector('.skill-tooltip-lines').offsetWidth);
    tip.style.width = `${Math.min(text + 84, innerWidth - 24)}px`;
    drawHeader(node, data);
  }
  tip.hidden = false;
  const w = tip.offsetWidth, h = tip.offsetHeight;
  let x = clientX + 24;
  if (x + w + 8 > innerWidth) x = Math.max(12, clientX - 24 - w);
  const y = Math.max(12, Math.min(clientY - 24, innerHeight - h - 8));
  tip.style.left = `${x}px`;
  tip.style.top = `${y}px`;
}

function hideTooltip() {
  if (tip) tip.hidden = true;
}

async function drawHeader(node, data) {
  const canvas = tip.querySelector('.skill-tooltip-frame');
  const frame = node.frame && data.frames[node.frame];
  const width = tip.offsetWidth + 16;
  const dpr = devicePixelRatio || 1;
  canvas.style.width = `${width}px`;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(40 * dpr);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!frame) return;
  const img = await image(frame.file);
  if (tipNode !== node) return;
  const s = img.width / 110;
  ctx.setTransform(dpr * 2, 0, 0, dpr * 2, 0, 0);
  ctx.imageSmoothingEnabled = false;
  const gui = width / 2;
  ctx.drawImage(img, 0, 0, 21 * s, 20 * s, 0, 0, 21, 20);
  for (let x = 21; x < gui - 21; x += 68) {
    const w = Math.min(68, gui - 21 - x);
    ctx.drawImage(img, 21 * s, 0, w * s, 20 * s, x, 0, w, 20);
  }
  ctx.drawImage(img, 89 * s, 0, 21 * s, 20 * s, gui - 21, 0, 21, 20);
}
