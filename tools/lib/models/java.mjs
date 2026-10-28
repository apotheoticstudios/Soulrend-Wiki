// Builds cube models by running Java model code in the interpreter (jvm.mjs) and reading back what it made.
//   layer:   a static method returning a vanilla LayerDefinition (createBodyLayer), or a Map of them
//            (vanilla's LayerDefinitions.createRoots), picked by ModelLayerLocation "ns:path#layer".
//   boxes:   a model class built from ModelRenderer-style parts (Citadel's AdvancedModelBox, Cataclysm's
//            lionfishapi copy, Mowzie's llibrary copy): its constructor runs, then the parts are read.
import { Jvm, JvmError, baseNatives, iterate, opaque } from './jvm.mjs';

export function javaModels({ classPath, rename }) {
  const natives = baseNatives();
  const resourceLocation = (_, args, __, self) => {
    let [ns, path] = args.length === 2 ? args : String(args[0]).includes(':') ? String(args[0]).split(':') : ['minecraft', args[0]];
    self.$f.namespace = ns;
    self.$f.path = path;
    self.$key = `${ns}:${path}`;
  };
  natives['net/minecraft/resources/ResourceLocation.<init>'] = resourceLocation;
  natives['net/minecraft/resources/ResourceLocation.toString'] = (_, __, ___, self) => self.$key ?? '?';
  natives['net/minecraft/resources/ResourceLocation.getPath'] = (_, __, ___, self) => self.$f.path ?? '';
  natives['net/minecraft/resources/ResourceLocation.getNamespace'] = (_, __, ___, self) => self.$f.namespace ?? '';
  natives['net/minecraft/resources/ResourceLocation.fromNamespaceAndPath'] = (jvm, args) => { const o = jvm.newObject('net/minecraft/resources/ResourceLocation'); resourceLocation(jvm, args, null, o); return o; };
  natives['net/minecraft/client/model/geom/ModelLayerLocation.<init>'] = (_, [model, layer], __, self) => {
    self.$f.model = model;
    self.$f.layer = layer;
    self.$key = `${model?.$key ?? '?'}#${layer}`;
  };
  // Render-time state we never need: textures, render types, the entity model set.
  natives['net/minecraft/client/renderer/RenderType.entityCutoutNoCull'] = () => opaque('net/minecraft/client/renderer/RenderType');
  natives['net/minecraft/client/model/geom/EntityModelSet.bakeLayer'] = () => opaque('net/minecraft/client/model/geom/ModelPart');

  // Game registries (blocks, items, entity types, sounds) are huge and only matter to a live game:
  // model code that touches them (entity.getMainHandItem().is(Items.TRIDENT)) just sees opaque values.
  const skipInit = name => /^net\/minecraft\/(world\/(level|item|entity|effect|damagesource|food)|server|core|sounds|tags|data|stats|commands|network|advancements)\//.test(name);
  const jvm = new Jvm({ classPath, rename, natives, skipInit });

  // Results of entry methods, since vanilla's createRoots builds every layer at once.
  const cache = new Map();
  function layerDefinition(spec) {
    const [owner, method] = spec.method.split('.');
    const cacheKey = `${spec.method}${JSON.stringify(spec.args ?? [])}`;
    if (!cache.has(cacheKey)) {
      const k = jvm.klass(owner);
      if (!k) throw new Error(`class not found: ${owner}`);
      const m = [...k.byKey.entries()].find(([key]) => key.startsWith(`${method}(`) && (!spec.desc || key === method + spec.desc));
      if (!m) throw new Error(`method not found: ${spec.method}`);
      const desc = m[0].slice(method.length);
      jvm.steps = 0;
      cache.set(cacheKey, run(() => jvm.invoke(owner, method, desc, defaultArgs(desc, spec.args))));
    }
    let result = cache.get(cacheKey);
    if (result?.$map) {
      const want = spec.layer;
      const found = [...result.$map.entries()].find(([key]) => key === want || key.startsWith(`${want}#`));
      if (!found) throw new Error(`layer ${want} not in ${spec.method} (${[...result.$map.keys()].slice(0, 5).join(', ')}, …)`);
      result = found[1];
    }
    return result;
  }

  function layer(spec) {
    const result = layerDefinition(spec);
    // A MeshDefinition (no texture size) is wrapped by its caller in LayerDefinition.create(mesh, w, h).
    const mesh = result.$f.mesh ?? result;
    const material = result.$f.material;
    const texWidth = spec.texSize?.[0] ?? material?.$f.xTexSize ?? 64;
    const texHeight = spec.texSize?.[1] ?? material?.$f.yTexSize ?? 32;
    const root = mesh.$f.root;
    if (!root?.$f) throw new Error(`${spec.method} returned no mesh`);
    const parts = partChildren(root);
    if (spec.setup) setupPose(spec.setup, root, parts);
    return { texWidth, texHeight, parts };
  }

  // Bakes the layer into ModelParts, builds the model class around them and runs its setupAnim for an
  // idle entity, then copies the resulting poses and visibility back. This is how vanilla poses spider
  // legs or crosses an illager's arms; the static layer alone leaves them at zero.
  function setupPose(cls, rootDef, parts) {
    const bake = def => {
      const pose = def.$f.partPose?.$f ?? {};
      const part = jvm.newObject('net/minecraft/client/model/geom/ModelPart');
      Object.assign(part.$f, {
        x: pose.x ?? 0, y: pose.y ?? 0, z: pose.z ?? 0, xRot: pose.xRot ?? 0, yRot: pose.yRot ?? 0, zRot: pose.zRot ?? 0,
        xScale: 1, yScale: 1, zScale: 1, visible: 1, skipDraw: 0, initialPose: def.$f.partPose,
        cubes: { $class: 'java/util/List', $list: [], $f: {} },
        children: { $class: 'java/util/Map', $map: new Map([...(def.$f.children?.$map ?? [])].map(([n, c]) => [n, bake(c)])), $f: {} },
      });
      return part;
    };
    const root = bake(rootDef);
    const k = jvm.klass(cls);
    if (!k) throw new Error(`class not found: ${cls}`);
    const ctor = [...k.byKey.keys()].find(key => key.startsWith('<init>(Lnet/minecraft/client/model/geom/ModelPart;'));
    if (!ctor) throw new Error(`${cls} has no ModelPart constructor`);
    const model = jvm.newObject(cls);
    jvm.steps = 0;
    run(() => jvm.invoke(cls, '<init>', ctor.slice(6), defaultArgs(ctor.slice(6), [root]), model, true));
    const setup = findSetupAnim(cls);
    if (!setup) throw new Error(`${cls} has no setupAnim`);
    run(() => jvm.invoke(cls, 'setupAnim', setup, defaultArgs(setup), model));
    const copy = (list, baked) => {
      for (const part of list) {
        const b = baked.$f.children.$map.get(part.name);
        if (!b) continue;
        const f = b.$f;
        part.pos = [f.x, f.y, f.z];
        part.rot = [f.xRot, f.yRot, f.zRot];
        if (!f.visible) part.hidden = true;
        copy(part.children, b);
      }
    };
    copy(parts, root);
  }

  function findSetupAnim(cls) {
    for (let c = cls; c; c = jvm.klass(c)?.superName) {
      const key = [...(jvm.klass(c)?.byKey.keys() ?? [])].find(key => /^setupAnim\(L[^;]+;FFFFF\)V$/.test(key));
      if (key) return key.slice('setupAnim'.length);
    }
    return null;
  }

  function partChildren(def) {
    return [...(def.$f.children?.$map ?? new Map()).entries()].map(([name, child]) => partOf(name, child));
  }
  function partOf(name, def) {
    const pose = def.$f.partPose?.$f ?? {};
    return {
      name,
      pos: [pose.x ?? 0, pose.y ?? 0, pose.z ?? 0],
      rot: [pose.xRot ?? 0, pose.yRot ?? 0, pose.zRot ?? 0],
      cubes: iterate(def.$f.cubes).map(cubeOf),
      children: partChildren(def),
    };
  }
  function cubeOf(c) {
    const f = c.$f;
    const v = o => [o?.$f.x ?? 0, o?.$f.y ?? 0, o?.$f.z ?? 0];
    const grow = f.grow?.$f ?? {};
    const scale = f.texScale?.$f;
    return {
      from: v(f.origin),
      size: v(f.dimensions),
      inflate: [grow.growX ?? 0, grow.growY ?? 0, grow.growZ ?? 0],
      mirror: !!f.mirror,
      uv: [f.texCoord?.$f.u ?? 0, f.texCoord?.$f.v ?? 0],
      ...(scale && (scale.u !== 1 || scale.v !== 1) ? { texScale: [scale.u, scale.v] } : {}),
    };
  }

  // ModelRenderer-style models: run the constructor, then read the boxes.
  function boxes(spec) {
    const k = jvm.klass(spec.class);
    if (!k) throw new Error(`class not found: ${spec.class}`);
    const ctor = [...k.byKey.keys()].filter(key => key.startsWith('<init>(')).sort((a, b) => a.length - b.length)[spec.ctor ?? 0];
    const desc = ctor.slice(6);
    const model = jvm.newObject(spec.class);
    jvm.steps = 0;
    run(() => jvm.invoke(spec.class, '<init>', desc, defaultArgs(desc, spec.args), model, true));
    if (spec.setup) {
      // The model's own setupAnim for an idle entity (age 0, no movement), as with layer models.
      const setup = findSetupAnim(spec.class);
      if (!setup) throw new Error(`${spec.class} has no setupAnim`);
      run(() => jvm.invoke(spec.class, 'setupAnim', setup, defaultArgs(setup), model));
    }
    const parts = new Set();
    for (const value of Object.values(model.$f)) collectParts(value, parts);
    // Roots: parts nobody adopted. Prefer what the model renders (parts()/getAllParts) when it says.
    const children = new Set();
    for (const p of parts) for (const c of iterate(p.$f.childModels ?? p.$f.children)) children.add(c);
    let roots = [...parts].filter(p => !children.has(p));
    const listed = spec.roots ?? null;
    if (listed) roots = listed.map(name => model.$f[name]).filter(Boolean);
    const texWidth = spec.texSize?.[0] ?? model.$f.texWidth ?? model.$f.textureWidth ?? 64;
    const texHeight = spec.texSize?.[1] ?? model.$f.texHeight ?? model.$f.textureHeight ?? 32;
    const names = new Map(Object.entries(model.$f).filter(([, v]) => v?.$f).map(([k2, v]) => [v, k2]));
    const seen = new Set();
    const convert = box => {
      seen.add(box);
      const f = box.$f;
      return {
        name: f.boxName ?? names.get(box) ?? 'part',
        pos: [f.rotationPointX ?? f.x ?? 0, f.rotationPointY ?? f.y ?? 0, f.rotationPointZ ?? f.z ?? 0],
        rot: [f.rotateAngleX ?? f.xRot ?? 0, f.rotateAngleY ?? f.yRot ?? 0, f.rotateAngleZ ?? f.zRot ?? 0],
        scale: [f.scaleX ?? 1, f.scaleY ?? 1, f.scaleZ ?? 1],
        hidden: f.showModel === 0 || f.isHidden === 1 || f.visible === 0,
        // Subclasses redeclare cubeList/childModels and the interpreter keeps one field per name, so
        // a part added by both addChild overrides shows up twice.
        cubes: [...new Set(iterate(f.cubeList ?? f.cubes))].map(c => c.$box).filter(Boolean),
        children: [...new Set(iterate(f.childModels ?? f.children))].filter(c => !seen.has(c)).map(convert),
      };
    };
    return { texWidth, texHeight, parts: roots.map(convert).filter(p => !p.hidden) };
  }

  function collectParts(value, out) {
    for (const v of Array.isArray(value) ? value : value?.$list ?? [value]) {
      if (v?.$f && (v.$f.cubeList || v.$f.childModels) && !out.has(v)) {
        out.add(v);
        for (const c of iterate(v.$f.childModels)) collectParts(c, out);
      }
    }
  }

  // Every ModelRenderer-style library builds cubes through a ModelBox(texU, texV, x, y, z, w, h, d,
  // growX, growY, growZ, mirror, texW, texH); capture the arguments instead of building its quads.
  for (const owner of [
    'com/github/alexthe666/citadel/client/model/TabulaModelRenderUtils$ModelBox',
    'com/github/alexthe666/citadel/client/model/basic/BasicModelPart$ModelBox',
    'com/github/L_Ender/lionfishapi/client/model/tools/LionfishModelRenderUtils$ModelBox',
    'com/github/L_Ender/lionfishapi/client/model/tools/BasicModelPart$ModelBox',
    'com/ilexiconn/llibrary/client/model/tools/AdvancedModelRenderer$ModelBox',
    'com/ilexiconn/llibrary/client/model/tools/BasicModelRenderer$ModelBox',
  ]) {
    natives[`${owner}.<init>`] = (_, a, __, self) => {
      self.$box = { from: [a[2], a[3], a[4]], size: [a[5], a[6], a[7]], inflate: [a[8], a[9], a[10]], mirror: !!a[11], uv: [a[0], a[1]], texSize: [a[12], a[13]] };
    };
  }

  return { jvm, layer, boxes };
}

function run(fn) {
  try {
    return fn();
  } catch (e) {
    if (e instanceof JvmError) throw new Error(`bytecode replay failed: ${e.message}`);
    throw e;
  }
}

// Arguments for an entry point: given ones first, then zero/false/opaque by type.
function defaultArgs(desc, given = []) {
  const types = [];
  for (let i = 1; desc[i] !== ')';) {
    const start = i;
    while (desc[i] === '[') i++;
    if (desc[i] === 'L') i = desc.indexOf(';', i);
    types.push(desc.slice(start, ++i));
  }
  return types.map((t, i) => (given[i] !== undefined ? given[i] : 'ZBCSIJFD'.includes(t) ? 0 : t.startsWith('L') ? opaque(t.slice(1, -1)) : []));
}
