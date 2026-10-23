// 3D model viewer for {{model}} embeds. Loaded only on pages with models (see main.js), and each
// viewer only starts when it scrolls into view. Models are glTF/GLB exported from Blockbench.
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

async function mount(stage) {
  const status = stage.querySelector('.model-status');
  status.textContent = 'Loading 3D model…';

  let gltf;
  try {
    gltf = await new GLTFLoader().loadAsync(stage.dataset.model);
  } catch (error) {
    status.textContent = 'Could not load the 3D model.';
    console.error(error);
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', stage.dataset.label ?? '3D model');
  // Vertical swipes keep scrolling the page on phones; horizontal drags rotate the model.
  canvas.style.touchAction = 'pan-y';

  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x555566, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(3, 5, 4);
  scene.add(sun);

  const model = gltf.scene;
  // Minecraft textures are pixel art: no smoothing, and cut-out transparency instead of blending.
  model.traverse(object => {
    if (!object.isMesh) return;
    for (const material of [object.material].flat()) {
      if (material.map) {
        material.map.magFilter = THREE.NearestFilter;
        material.map.minFilter = THREE.NearestFilter;
        material.map.generateMipmaps = false;
        material.map.needsUpdate = true;
      }
      material.alphaTest = Math.max(material.alphaTest, 0.1);
    }
  });
  scene.add(model);

  // Centre the model and back the camera off until it fits.
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const radius = box.getSize(new THREE.Vector3()).length() / 2 || 1;
  model.position.sub(center);
  const camera = new THREE.PerspectiveCamera(35, 1, radius / 100, radius * 100);
  const distance = (radius / Math.sin(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.05;
  camera.position.copy(new THREE.Vector3(0.75, 0.45, 1).normalize().multiplyScalar(distance));

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = distance * 0.35;
  controls.maxDistance = distance * 3;
  controls.autoRotate = stage.dataset.rotate !== 'false';
  controls.autoRotateSpeed = 1.5;
  controls.addEventListener('start', () => { controls.autoRotate = false; });

  let mixer = null;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(model);
    const clip = THREE.AnimationClip.findByName(gltf.animations, stage.dataset.animation ?? '') ?? gltf.animations[0];
    mixer.clipAction(clip).play();
  }

  stage.querySelector('.model-poster, .model-placeholder')?.remove();
  stage.prepend(canvas);
  status.textContent = '';
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
  const start = () => {
    last = performance.now();
    renderer.setAnimationLoop(frame);
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });
  start();
}
