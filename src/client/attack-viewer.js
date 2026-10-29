// The attack viewer in {{moveset}} embeds: the player swinging the weapon at target dummies. Models and
// clips come from tools/make-attacks.mjs; positions are in Epic Fight's model space (blocks, the player at
// the origin facing -Z), turned half a circle so the player faces the camera. Each move plays once, holds
// for a moment and repeats; guards loop. A dummy plays its "hit" clip at each of the move's hit times.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';

const PAUSE = 0.8;
const loader = new GLTFLoader();
const cache = new Map();
const load = url => {
  if (!cache.has(url)) cache.set(url, loader.loadAsync(url).then(gltf => { pixelate(gltf.scene); return gltf; }));
  return cache.get(url);
};

export function initAttacks() {
  const pending = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      pending.unobserve(entry.target);
      mount(entry.target);
    }
  }, { rootMargin: '200px' });
  document.querySelectorAll('.attack-stage[data-attacks]').forEach(stage => pending.observe(stage));
}

// Minecraft textures are pixel art: no smoothing, and cut-out transparency.
function pixelate(root) {
  root.traverse(object => {
    if (!object.isMesh) return;
    for (const material of [object.material].flat()) {
      if (material.map) {
        material.map.magFilter = THREE.NearestFilter;
        material.map.minFilter = THREE.NearestFilter;
        material.map.generateMipmaps = false;
        material.map.needsUpdate = true;
      }
      if (!material.transparent) material.alphaTest = Math.max(material.alphaTest, 0.1);
    }
  });
}

async function mount(stage) {
  const config = JSON.parse(stage.dataset.attacks);
  const figure = stage.closest('.embed-attacks');
  const status = stage.querySelector('.model-status');
  // One set of rows per weapon type (several on a category's page, picked with the type selector).
  const setRows = [...figure.querySelectorAll('.attack-set')].map(el => ({
    el,
    styleButtons: [...el.querySelectorAll('.attack-styles .model-pick')],
    moveRows: [...el.querySelectorAll('.attack-moves')],
  }));
  const captions = [...figure.querySelectorAll('.attack-held')];
  const typeSelect = figure.querySelector('.attack-type');

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.setAttribute('role', 'img');
  canvas.style.touchAction = 'pan-y';
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0x555566, 2.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(3, 5, 4);
  scene.add(sun);
  const grid = new THREE.GridHelper(16, 16, 0x888888, 0x888888);
  grid.material.transparent = true;
  grid.material.opacity = 0.25;
  scene.add(grid);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.05, 200);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;

  stage.querySelector('.model-placeholder')?.remove();
  stage.prepend(canvas);
  const hint = document.createElement('span');
  hint.className = 'model-hint';
  hint.textContent = matchMedia('(pointer: coarse)').matches ? 'Drag sideways to rotate' : 'Drag to rotate · scroll to zoom';
  stage.append(hint);
  controls.addEventListener('start', () => hint.remove(), { once: true });

  // Everything sits in Epic Fight's space inside `world`, turned to face the camera.
  const world = new THREE.Group();
  world.rotation.y = Math.PI;
  scene.add(world);

  status.textContent = 'Loading 3D models…';
  let player, dummyGltf, horse = null;
  try {
    const [p, d] = await Promise.all([load(config.player), load(config.dummy.model)]);
    player = cloneSkinned(p.scene);
    dummyGltf = d;
  } catch (error) {
    status.textContent = 'Could not load the 3D models.';
    console.error(error);
    return;
  }
  status.textContent = '';
  const rider = new THREE.Group();
  rider.add(player);
  world.add(rider);
  // The held weapon: nodes named "<hand>__<joint>", each parented to that joint of the player (the main
  // hand's on Tool_R, a sheath on Tool_L or Torso, …); the off hand's only show in dual styles.
  let hands = { main: [], off: [] }, heldUrl;
  const hold = async url => {
    if (url === heldUrl) return;
    heldUrl = url;
    for (const node of [...hands.main, ...hands.off]) node.removeFromParent();
    hands = { main: [], off: [] };
    if (!url) return;
    let item;
    try { item = await load(url); } catch (error) { console.error(error); return; }
    if (url !== heldUrl) return;
    for (const node of item.scene.children) {
      const [, hand, joint] = /^(main|off)__(.+)$/.exec(node.name) ?? [];
      const bone = joint && player.getObjectByName(joint);
      if (!bone) continue;
      const copy = node.clone();
      bone.add(copy);
      hands[hand].push(copy);
    }
  };
  const mixer = new THREE.AnimationMixer(player);
  const dummies = [];
  const dummyGroup = new THREE.Group();
  world.add(dummyGroup);
  const hitClip = dummyGltf.animations.find(a => a.name === 'hit');

  let move = null, action = null, last = 0, request = 0;
  const show = async (setIndex, styleIndex, moveIndex) => {
    const ticket = ++request;
    const set = config.sets[setIndex];
    const s = set.styles[styleIndex];
    const m = s.moves[moveIndex];
    setRows.forEach((rows, n) => {
      rows.el.hidden = n !== setIndex;
      if (captions[n]) captions[n].hidden = n !== setIndex;
      if (n !== setIndex) return;
      rows.styleButtons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === styleIndex)));
      rows.moveRows.forEach((row, i) => {
        row.hidden = i !== styleIndex;
        if (i === styleIndex) row.querySelectorAll('.model-pick').forEach((b, k) => b.setAttribute('aria-pressed', String(k === moveIndex)));
      });
    });
    if (typeSelect) typeSelect.value = String(setIndex);
    status.textContent = 'Loading animation…';
    let clip;
    try {
      [clip] = await Promise.all([load(m.clip).then(g => g.animations[0]), hold(m.item ?? s.item ?? set.item)]);
    } catch (error) {
      if (ticket === request) status.textContent = 'Could not load the animation.';
      console.error(error);
      return;
    }
    if (ticket !== request) return;
    status.textContent = '';
    for (const node of hands.off) node.visible = !!s.dual;
    // Mounted attacks ride a horse; the rider sits at the horse's passenger height.
    if (m.mount && !horse) {
      try {
        horse = (await load(config.horse.model)).scene.clone();
        horse.rotation.y = Math.PI;
        world.add(horse);
      } catch (error) { console.error(error); }
    }
    if (horse) horse.visible = m.mount;
    rider.position.y = m.mount ? config.horse.rider : 0;
    // Dummies: one per target, facing the player's starting spot, each with its own hit wobble.
    dummyGroup.clear();
    dummies.length = 0;
    for (const [x, z, yaw] of m.targets) {
      const d = dummyGltf.scene.clone();
      d.position.set(x, 0, z);
      d.rotation.y = yaw;
      dummyGroup.add(d);
      const dm = new THREE.AnimationMixer(d);
      dummies.push({ mixer: dm, action: hitClip ? dm.clipAction(hitClip).setLoop(THREE.LoopOnce, 1) : null });
    }
    mixer.stopAllAction();
    action = mixer.clipAction(clip);
    action.reset();
    if (m.loop) action.setLoop(THREE.LoopRepeat, Infinity);
    else { action.setLoop(THREE.LoopOnce, 1); action.clampWhenFinished = true; }
    action.play();
    move = { ...m, time: 0 };
    canvas.setAttribute('aria-label', `${setRows[setIndex].moveRows[styleIndex].querySelectorAll('.model-pick')[moveIndex].textContent} animation`);
    frame(m);
  };

  // Fit the player's whole move, the dummies and the horse in view.
  let fitted = false;
  const frame = m => {
    const box = new THREE.Box3(new THREE.Vector3(-0.6, 0, -0.6), new THREE.Vector3(0.6, 2 + (m.mount ? config.horse.rider : 0), 0.6));
    for (const [x, z] of m.targets) box.expandByPoint(new THREE.Vector3(x, 2, z)).expandByPoint(new THREE.Vector3(x, 0, z));
    if (m.travel) box.expandByPoint(new THREE.Vector3(m.travel[0] - 0.5, 0, m.travel[1] - 0.5)).expandByPoint(new THREE.Vector3(m.travel[2] + 0.5, 2, m.travel[3] + 0.5));
    if (m.mount) box.expandByPoint(new THREE.Vector3(0, 0, 1.4)).expandByPoint(new THREE.Vector3(0, 0, -1.4));
    box.applyMatrix4(world.matrixWorld);
    const center = box.getCenter(new THREE.Vector3());
    // The view direction: the reader's, or from the player's right side, a little in front, so the swing
    // arm and the dummies ahead of the player are both in view.
    const dir = fitted ? camera.position.clone().sub(controls.target).normalize() : new THREE.Vector3(-1, 0.5, 0.35).normalize();
    // The distance at which every corner of the box is inside the view: per corner, its depth towards the
    // camera plus what its sideways and vertical offsets need at the view's half-angles.
    const up = new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, dir).normalize();
    const trueUp = new THREE.Vector3().crossVectors(dir, right);
    const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), tanH = tanV * camera.aspect;
    let distance = 0;
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) {
      const v = new THREE.Vector3(x, y, z).sub(center);
      distance = Math.max(distance, v.dot(dir) + Math.abs(v.dot(right)) / tanH, v.dot(dir) + Math.abs(v.dot(trueUp)) / tanV);
    }
    distance *= 1.08;
    controls.minDistance = distance * 0.3;
    controls.maxDistance = distance * 3;
    controls.target.copy(center);
    camera.position.copy(center).add(dir.multiplyScalar(distance));
    fitted = true;
  };

  setRows.forEach((rows, n) => {
    rows.styleButtons.forEach((button, i) => button.addEventListener('click', () => show(n, i, 0)));
    rows.moveRows.forEach((row, i) => row.querySelectorAll('.model-pick').forEach((button, k) => button.addEventListener('click', () => show(n, i, k))));
  });
  typeSelect?.addEventListener('change', () => show(Number(typeSelect.value), 0, 0));

  const resize = () => {
    renderer.setSize(stage.clientWidth, stage.clientHeight, false);
    camera.aspect = stage.clientWidth / stage.clientHeight;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(stage);
  resize();
  world.updateMatrixWorld(true);

  let visible = true;
  const tick = now => {
    if (!visible || document.hidden) { renderer.setAnimationLoop(null); return; }
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (move && action) {
      const before = move.time;
      move.time += dt;
      if (!move.loop && move.time > move.length + PAUSE) {
        // Start over, dummies at rest.
        move.time = 0;
        action.reset().play();
        for (const d of dummies) d.action?.stop();
      } else if (!move.loop) {
        for (const [t, i] of move.hits) if (before < t && move.time >= t) dummies[i]?.action?.reset().play();
      }
      mixer.update(dt);
      for (const d of dummies) d.mixer.update(dt);
    }
    controls.update();
    renderer.render(scene, camera);
  };
  const start = () => { last = performance.now(); renderer.setAnimationLoop(tick); };
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); }).observe(stage);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });
  start();
  show(0, 0, 0);
}
