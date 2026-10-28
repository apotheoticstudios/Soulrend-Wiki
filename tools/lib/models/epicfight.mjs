// Epic Fight meshes (assets/<ns>/animmodels/**.json): skinned triangle meshes in Blender space (Z up,
// blocks). Epic Fight turns them -90° about X on load; the bind pose is the model as it stands, so the
// armature isn't needed for a body or armor piece. Each face corner indexes (position, uv, normal).
// Armor and weapon meshes are skinned to the same biped armature, so they line up with the body as read.
export function readEpicFightMesh(json) {
  const v = json.vertices;
  const pos = v.positions.array, uv = v.uvs.array;
  const positions = [], uvs = [], indices = [];
  for (const part of Object.values(v.parts ?? { all: v.indices })) {
    const a = part.array;
    for (let i = 0; i + 2 < a.length; i += 3) {
      const [x, y, z] = [pos[a[i] * 3], pos[a[i] * 3 + 1], pos[a[i] * 3 + 2]];
      // (x, y, z) → (x, z, -y); turned 180° about Y so the front faces +Z like the other models.
      positions.push(-x, z, y);
      uvs.push(uv[a[i + 1] * 2], uv[a[i + 1] * 2 + 1]);
      indices.push(indices.length);
    }
  }
  return { positions, uvs, indices };
}
