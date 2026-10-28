// 3D model viewer for {{model}} embeds. Loaded only on pages with models (see main.js), and each
// viewer only starts when it scrolls into view. Models are glTF/GLB: the mobs come from
// tools/make-models.mjs, anything else can be exported from Blockbench. A viewer with several models
// (data-models) keeps one WebGL context and swaps the model when a picker button is pressed; with
// several pickers (axes), the model is the one at the pressed buttons' position, first picker outermost.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initModels() {
  const pending = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      pending.unobserve(entry.target);
      mount(entry.target);
    }
  }, { rootMargin: '200px' });
  document.querySelectorAll('.model-stage[data-model]').forEach(stage => pending.observe(stage));
}

function mount(stage) {
  const status = stage.querySelector('.model-status');
  const models = stage.dataset.models ? JSON.parse(stage.dataset.models) : [{ src: stage.dataset.model, label: stage.dataset.label }];
  const pickers = [...(stage.closest('.embed-model')?.querySelectorAll('.model-picker') ?? [])].map(p => [...p.querySelectorAll('.model-pick')]);
  const digits = index => pickers.reduceRight((out, buttons) => {
    out.unshift(index % buttons.length);
    index = Math.floor(index / buttons.length);
    return out;
  }, []);
  const loader = new GLTFLoader();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.setAttribute('role', 'img');
  // Vertical swipes keep scrolling the page on phones; horizontal drags rotate the model.
  canvas.style.touchAction = 'pan-y';

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x555566, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(3, 5, 4);
  scene.add(sun);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 1000);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.autoRotate = stage.dataset.rotate !== 'false';
  controls.autoRotateSpeed = 1.5;
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  let current = null, mixer = null, shown = -1, wanted = 0, request = 0, radius = 0;
  // The distance at which the model fits the narrower of the view's two directions.
  const fit = () => {
    const half = THREE.MathUtils.degToRad(camera.fov / 2);
    return (radius / Math.sin(Math.min(half, Math.atan(Math.tan(half) * camera.aspect)))) * 1.05;
  };
  const place = distance => {
    const fitted = fit();
    controls.minDistance = fitted * 0.35;
    controls.maxDistance = fitted * 3;
    camera.position.setLength(distance);
  };
  const show = async index => {
    wanted = index;
    if (index === shown) return;
    const ticket = ++request;
    const pressed = digits(index);
    pickers.forEach((buttons, a) => buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === pressed[a]))));
    status.textContent = 'Loading 3D model…';
    let gltf;
    try {
      gltf = await loader.loadAsync(models[index].src);
    } catch (error) {
      if (ticket === request) status.textContent = 'Could not load the 3D model.';
      console.error(error);
      return;
    }
    if (ticket !== request) return;
    shown = index;
    status.textContent = '';
    if (current) scene.remove(current);
    current = gltf.scene;
    canvas.setAttribute('aria-label', models[index].label ?? '3D model');
    // Minecraft textures are pixel art: no smoothing, and cut-out transparency instead of blending.
    current.traverse(object => {
      if (!object.isMesh) return;
      for (const material of [object.material].flat()) {
        for (const map of [material.map, material.emissiveMap]) {
          if (!map) continue;
          map.magFilter = THREE.NearestFilter;
          map.minFilter = THREE.NearestFilter;
          map.generateMipmaps = false;
          map.needsUpdate = true;
        }
        if (!material.transparent) material.alphaTest = Math.max(material.alphaTest, 0.1);
      }
    });
    scene.add(current);

    // Centre the model and back the camera off until it fits.
    const box = new THREE.Box3().setFromObject(current);
    const center = box.getCenter(new THREE.Vector3());
    radius = box.getSize(new THREE.Vector3()).length() / 2 || 1;
    current.position.sub(center);
    camera.near = radius / 100;
    camera.far = radius * 100;
    camera.position.set(0.75, 0.45, 1);
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    place(fit());

    mixer = null;
    if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(current);
      const clip = THREE.AnimationClip.findByName(gltf.animations, stage.dataset.animation ?? '') ?? gltf.animations[0];
      mixer.clipAction(clip).play();
    }
    start();
  };
  pickers.forEach((buttons, a) => buttons.forEach((button, i) => button.addEventListener('click', () => {
    const pressed = digits(wanted);
    pressed[a] = i;
    show(pressed.reduce((n, d, k) => n * pickers[k].length + d, 0));
  })));

  stage.querySelector('.model-poster, .model-placeholder')?.remove();
  stage.prepend(canvas);
  const hint = document.createElement('span');
  hint.className = 'model-hint';
  hint.textContent = matchMedia('(pointer: coarse)').matches ? 'Drag sideways to rotate' : 'Drag to rotate · scroll to zoom';
  stage.append(hint);
  controls.addEventListener('start', () => hint.remove(), { once: true });

  // Fullscreen is an overlay, not the browser's Fullscreen API: the whole figure (pickers and caption
  // included) moves into a modal <dialog>, leaving an empty copy of itself to hold its place on the page.
  const figure = stage.closest('.embed-model');
  const expand = document.createElement('button');
  expand.type = 'button';
  expand.className = 'model-expand';
  stage.append(expand);
  let dialog = null, spot = null, compact = false;
  const label = open => {
    expand.setAttribute('aria-label', open ? 'Exit fullscreen' : 'View fullscreen');
    expand.title = open ? 'Exit fullscreen (Esc)' : 'View fullscreen';
    expand.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${open
      ? 'M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5' : 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5'}"/></svg>`;
  };
  const toggle = () => {
    if (dialog?.open) return dialog.close();
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'model-dialog';
      dialog.setAttribute('aria-label', canvas.getAttribute('aria-label') ?? '3D model');
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => {
        spot.replaceWith(figure);
        figure.classList.toggle('compact', compact);
        label(false);
        expand.focus({ preventScroll: true });
      });
      document.body.append(dialog);
    }
    spot = figure.cloneNode(false);
    spot.setAttribute('aria-hidden', 'true');
    spot.style.height = `${figure.offsetHeight}px`;
    figure.replaceWith(spot);
    // The infobox's compact look (no frame, tight pickers) is for its narrow column only.
    compact = figure.classList.contains('compact');
    figure.classList.remove('compact');
    dialog.append(figure);
    label(true);
    dialog.showModal();
  };
  label(false);
  expand.addEventListener('click', toggle);
  canvas.addEventListener('dblclick', toggle);

  const resize = () => {
    const { clientWidth: width, clientHeight: height } = stage;
    renderer.setSize(width, height, false);
    // Keep the reader's zoom relative to the fit, so a portrait overlay doesn't crop the model.
    const before = radius && fit();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (radius) place(camera.position.length() * fit() / before);
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  // Only render while the viewer is on screen and the tab is visible.
  let visible = true;
  let last = performance.now();
  const frame = now => {
    if (!visible || document.hidden) {
      renderer.setAnimationLoop(null);
      return;
    }
    mixer?.update(Math.min((now - last) / 1000, 0.1));
    last = now;
    controls.update();
    renderer.render(scene, camera);
  };
  function start() {
    last = performance.now();
    renderer.setAnimationLoop(frame);
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });
  show(Number(stage.dataset.start ?? 0));
}
