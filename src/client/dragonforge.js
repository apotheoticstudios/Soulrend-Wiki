// 3D schematic for {{dragonforge}} embeds. Loaded only on pages that have one (see main.js), and each viewer
// only starts when it scrolls into view. The element button swaps the block textures, the layer buttons show
// all three layers or one, and "Spread" pulls the layers apart so the core in the middle layer is visible.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Bottom to top, three rows (north to south, so the last row is the front) of three blocks each.
// B = block of dragon bones, b = brick, g = brick with a grill, C = core, A = aperture. This is what
// TileEntityDragonforge.assembled checks: bone blocks on the corners of the bottom and top layers, bricks on the
// rest, the core in the middle of the middle layer, bricks on its corners, and at least three bricks on its four
// sides (the fourth is the aperture). Once assembled, updateGrills gives the bricks beside the core their grill.
const LAYERS = [
  ['BbB', 'bbb', 'BbB'],
  ['bgb', 'gCg', 'bAb'],
  ['BbB', 'bbb', 'BbB'],
];
const LAYER_NAMES = ['bottom', 'middle', 'top'];
const SPREAD = 1.8;


export function initForges() {
  const pending = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      pending.unobserve(entry.target);
      mount(entry.target);
    }
  }, { rootMargin: '200px' });
  document.querySelectorAll('.forge-stage').forEach(stage => pending.observe(stage));
}

function mount(stage) {
  const figure = stage.closest('.embed-forge');
  const status = stage.querySelector('.model-status');
  const legend = figure.querySelector('.forge-legend');
  const urls = JSON.parse(stage.dataset.textures);
  const buttons = name => [...figure.querySelectorAll(`.model-pick[data-${name}]`)];
  const state = { element: stage.dataset.element, layer: stage.dataset.layer, view: stage.dataset.view };

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.setAttribute('role', 'img');
  // Vertical swipes keep scrolling the page on phones; horizontal drags rotate the schematic.
  canvas.style.touchAction = 'pan-y';

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x555566, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(3, 5, 4);
  scene.add(sun);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;
  let touched = false;
  controls.addEventListener('start', () => { controls.autoRotate = false; touched = true; });

  // Textures are pixel art: no smoothing. One material per texture, shared by every block that uses it.
  const loader = new THREE.TextureLoader();
  const materials = new Map();
  const material = url => {
    if (!materials.has(url)) {
      const map = loader.load(url, () => { status.textContent = ''; }, undefined, () => { status.textContent = 'Could not load the block textures.'; });
      map.magFilter = THREE.NearestFilter;
      map.minFilter = THREE.NearestFilter;
      map.generateMipmaps = false;
      map.colorSpace = THREE.SRGBColorSpace;
      materials.set(url, new THREE.MeshLambertMaterial({ map }));
    }
    return materials.get(url);
  };
  const faces = (kind, element) => {
    const set = urls[element];
    if (kind === 'B') {
      const side = material(urls.bone.side), end = material(urls.bone.end);
      return [side, side, end, end, side, side];
    }
    return material({ b: set.brick, g: set.brick_grill, C: set.core, A: set.input }[kind]);
  };

  const box = new THREE.BoxGeometry(1, 1, 1);
  const layers = LAYERS.map(() => new THREE.Group());
  layers.forEach(group => scene.add(group));
  // Rebuilt when the element changes; the geometry is shared.
  const build = () => {
    LAYERS.forEach((rows, y) => {
      layers[y].clear();
      rows.forEach((row, r) => [...row].forEach((kind, c) => {
        const block = new THREE.Mesh(box, faces(kind, state.element));
        block.position.set(c - 1, 0, r - 1);
        layers[y].add(block);
      }));
    });
  };

  // The in-game names, singular and plural.
  const names = () => {
    const forge = `Dragonforge ${state.element[0].toUpperCase()}${state.element.slice(1)}`;
    return {
      b: [`${forge} Brick`, `${forge} Bricks`],
      C: [`${forge} Core`, `${forge} Cores`],
      A: [`${forge} Aperture`, `${forge} Apertures`],
      B: ['Block of Dragon Bones', 'Blocks of Dragon Bones'],
    };
  };
  const describe = () => {
    const shown = state.layer === 'all' ? [0, 1, 2] : [Number(state.layer) - 1];
    const count = {};
    for (const y of shown) for (const kind of LAYERS[y].join('')) count[kind === 'g' ? 'b' : kind] = (count[kind === 'g' ? 'b' : kind] ?? 0) + 1;
    const label = names();
    const list = 'bBCA'.split('').filter(kind => count[kind]).map(kind => `${count[kind]} ${label[kind][count[kind] === 1 ? 0 : 1]}`).join(', ');
    const where = state.layer === 'all' ? 'All three layers' : `Layer ${state.layer} (${LAYER_NAMES[Number(state.layer) - 1]})`;
    const notes = state.layer === '2' ? ' The core is in the center and the aperture takes the front side; the bricks beside the core show a grill once the forge is complete.' : '';
    return `${where}: ${list}.${notes}`;
  };

  // Layer heights ease toward their targets: stacked, spread apart, or the chosen layer alone at the origin.
  const targetY = y => state.layer === 'all' ? (y - 1) * (state.view === 'spread' ? SPREAD : 1) : y - (Number(state.layer) - 1);
  const settle = snap => layers.forEach((group, y) => {
    group.visible = state.layer === 'all' || Number(state.layer) - 1 === y;
    group.position.y = snap ? targetY(y) : group.position.y;
  });
  const ease = () => layers.forEach((group, y) => {
    const delta = targetY(y) - group.position.y;
    group.position.y = Math.abs(delta) < 0.001 ? targetY(y) : group.position.y + delta * 0.2;
  });

  // The distance at which the whole schematic (or the one layer) fits the narrower of the view's two directions.
  const radius = () => state.layer === 'all' ? (state.view === 'spread' ? 3.1 : 2.7) : 2;
  const fit = () => {
    const half = THREE.MathUtils.degToRad(camera.fov / 2);
    return (radius() / Math.sin(Math.min(half, Math.atan(Math.tan(half) * camera.aspect)))) * 1.05;
  };
  // Looks at the front (the aperture side, +z) from the right and above; a single layer is seen from higher up.
  const frame = () => {
    const direction = state.layer === 'all' ? new THREE.Vector3(0.7, 0.55, 1) : new THREE.Vector3(0.5, 1.15, 0.85);
    camera.position.copy(direction.normalize().multiplyScalar(fit()));
    controls.minDistance = fit() * 0.4;
    controls.maxDistance = fit() * 2.5;
    controls.target.set(0, 0, 0);
  };

  const apply = (change, reframe) => {
    const rebuild = change.element && change.element !== state.element;
    Object.assign(state, change);
    for (const name of ['element', 'layer', 'view']) {
      buttons(name).forEach(b => b.setAttribute('aria-pressed', String(b.dataset[name] === state[name])));
    }
    // "Spread" only means something with all three layers on show.
    buttons('view').forEach(b => { b.disabled = state.layer !== 'all'; });
    canvas.setAttribute('aria-label', `${stage.dataset.label}: ${state.element} Dragonforge, ${state.layer === 'all' ? 'all layers' : `layer ${state.layer}`}`);
    legend.textContent = describe();
    if (rebuild) build();
    settle(reframe);
    if (reframe) { frame(); touched = false; }
  };
  for (const name of ['element', 'layer', 'view']) {
    buttons(name).forEach(button => button.addEventListener('click', () => {
      if (state[name] === button.dataset[name]) return;
      apply({ [name]: button.dataset[name] }, name === 'layer' || (name === 'view' && !touched));
    }));
  }
  build();
  apply({}, false);
  settle(true);
  status.textContent = 'Loading block textures…';

  stage.querySelector('.model-placeholder')?.remove();
  stage.prepend(canvas);
  const hint = document.createElement('span');
  hint.className = 'model-hint';
  hint.textContent = matchMedia('(pointer: coarse)').matches ? 'Drag sideways to rotate' : 'Drag to rotate · scroll to zoom';
  stage.append(hint);
  controls.addEventListener('start', () => hint.remove(), { once: true });

  const resize = () => {
    const { clientWidth: width, clientHeight: height } = stage;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    // Until the reader has moved the camera, keep the schematic fitted.
    if (!touched) frame();
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  // Only render while the viewer is on screen and the tab is visible.
  let visible = true;
  const frameLoop = () => {
    if (!visible || document.hidden) {
      renderer.setAnimationLoop(null);
      return;
    }
    ease();
    controls.update();
    renderer.render(scene, camera);
  };
  const start = () => renderer.setAnimationLoop(frameLoop);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });
  start();
}
