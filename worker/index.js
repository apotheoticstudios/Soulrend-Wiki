// soulrend.wiki's Worker. dist/ is served as static assets; Cloudflare runs this code for /api/* and for any URL
// with no file, which goes back to the assets so the wiki's own 404 page shows.
//   GET  /api/hall-of-fame   everyone who beat Soulrend, first to join first
//   POST /api/hall-of-fame   {"name", "serverId"}, sent by Soulrend Core's HallOfFameSubmit
// A POST proves account ownership with Minecraft's own server-join handshake: the mod calls Mojang's joinServer with
// a random serverId, and hasJoined only answers for the account whose session token did that. The mod's server
// first checks the player finished the final quest without cheats (soulrend_core compat/ftbquests/HallOfFame).
// Names and skins come from Mojang's answer, never from the request.
// To remove a cheater and keep them out: npx wrangler kv key put --binding HALL_OF_FAME <uuid without dashes> banned --remote
const HAS_JOINED = 'https://sessionserver.mojang.com/session/minecraft/hasJoined';
const NAME = /^\w{3,16}$/;
const SERVER_ID = /^-?[0-9a-f]{1,40}$/;
const UUID = /^[0-9a-f]{32}$/;
const SKIN = /^https?:\/\/textures\.minecraft\.net\/texture\/([0-9a-f]+)$/;

export default {
  async fetch(request, env, ctx) {
    if (new URL(request.url).pathname !== '/api/hall-of-fame') return env.ASSETS.fetch(request);
    if (request.method === 'GET') return list(request, env, ctx);
    if (request.method === 'POST') return submit(request, env);
    return text('Use GET or POST.', 405);
  },
};

async function list(request, env, ctx) {
  // KV lists are billed per call (1,000 a day on the free plan), so each data center keeps the answer for a minute.
  const cached = await caches.default.match(request);
  if (cached) return cached;
  const players = [];
  let cursor;
  do {
    const page = await env.HALL_OF_FAME.list({ cursor });
    // Banned keys have no metadata.
    for (const { name: uuid, metadata } of page.keys) if (metadata?.name) players.push({ uuid, ...metadata });
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  players.sort((a, b) => a.at - b.at);
  const response = Response.json(players, { headers: { 'Cache-Control': 'public, max-age=60' } });
  ctx.waitUntil(caches.default.put(request, response.clone()));
  return response;
}

async function submit(request, env) {
  // Each try costs a Mojang lookup; too many from Cloudflare would get every submission throttled.
  const { success } = await env.SUBMIT_LIMIT.limit({ key: request.headers.get('CF-Connecting-IP') ?? '' });
  if (!success) return text('Too many tries. Wait a minute.', 429);
  const body = await request.json().catch(() => null);
  const name = body?.name, serverId = body?.serverId;
  if (!matches(NAME, name) || !matches(SERVER_ID, serverId)) {
    return text('Expected {"name", "serverId"}.', 400);
  }

  const mojang = await fetch(`${HAS_JOINED}?${new URLSearchParams({ username: name, serverId })}`).catch(() => null);
  if (mojang?.status === 204) return text('Mojang could not verify this account.', 403);
  const profile = mojang?.ok ? await mojang.json().catch(() => null) : null;
  if (!matches(UUID, profile?.id) || !matches(NAME, profile?.name)) return text('Mojang is not answering. Try again later.', 502);

  const { value, metadata } = await env.HALL_OF_FAME.getWithMetadata(profile.id);
  if (value === 'banned') return text('This account is barred from the Hall of Fame.', 403);
  // Sending again refreshes the name and skin but keeps the first join time.
  await env.HALL_OF_FAME.put(profile.id, '', {
    metadata: { name: profile.name, skin: skinHash(profile), at: metadata?.at ?? Date.now() },
  });
  return text('Added.', metadata ? 200 : 201);
}

// The <hash> of the skin's textures.minecraft.net/texture/<hash> URL, or null for a default skin.
function skinHash(profile) {
  const property = profile.properties?.find(p => p.name === 'textures');
  if (!property) return null;
  try {
    return SKIN.exec(JSON.parse(atob(property.value)).textures?.SKIN?.url ?? '')?.[1] ?? null;
  } catch {
    return null;
  }
}

// RegExp.test turns undefined into "undefined", which NAME would accept.
function matches(pattern, value) {
  return typeof value === 'string' && pattern.test(value);
}

function text(body, status) {
  return new Response(body, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
