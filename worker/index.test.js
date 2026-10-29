// node --test worker/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from './index.js';

const UUID = '069a79f444e94726a5befca90e38aaf5';
const skin = hash => btoa(JSON.stringify({ textures: { SKIN: { url: `http://textures.minecraft.net/texture/${hash}` } } }));

function setup({ joined = { name: 'Notch', serverId: 'abc' }, mojangStatus = 200, mojangBody, limited = false } = {}) {
  const kv = new Map();
  const counts = { list: 0 };
  const cache = new Map();
  globalThis.caches = { default: {
    match: async request => cache.get(request.url)?.clone(),
    put: async (request, response) => void cache.set(request.url, response),
  } };
  const ctx = { waitUntil: () => {} };
  const env = {
    ASSETS: { fetch: async () => new Response('the wiki 404 page', { status: 404 }) },
    SUBMIT_LIMIT: { limit: async () => ({ success: !limited }) },
    HALL_OF_FAME: {
      list: async () => (counts.list++, { keys: [...kv].map(([name, e]) => ({ name, metadata: e.metadata })), list_complete: true }),
      getWithMetadata: async key => kv.get(key) ?? { value: null, metadata: null },
      put: async (key, value, { metadata } = {}) => void kv.set(key, { value, metadata: metadata ?? null }),
    },
  };
  globalThis.fetch = async url => {
    const q = new URL(url).searchParams;
    if (mojangStatus !== 200) return new Response(null, { status: mojangStatus });
    if (mojangBody !== undefined) return new Response(mojangBody);
    if (q.get('username') !== joined.name || q.get('serverId') !== joined.serverId) return new Response(null, { status: 204 });
    return Response.json({ id: UUID, name: joined.name, properties: [{ name: 'textures', value: skin('ab12') }] });
  };
  const post = body => worker.fetch(new Request('https://soulrend.wiki/api/hall-of-fame', {
    method: 'POST', body: typeof body === 'string' ? body : JSON.stringify(body),
  }), env, ctx);
  // A fresh cache per call, as each test step wants the current list.
  const get = async () => (cache.clear(), (await worker.fetch(new Request('https://soulrend.wiki/api/hall-of-fame'), env, ctx)).json());
  return { kv, counts, env, ctx, post, get };
}

test('a verified player is added once, with Mojang\'s name and skin', async () => {
  const { post, get } = setup();
  assert.equal((await post({ name: 'Notch', serverId: 'abc' })).status, 201);
  const [first] = await get();
  assert.deepEqual({ ...first, at: 0 }, { uuid: UUID, name: 'Notch', skin: 'ab12', at: 0 });
  assert.equal((await post({ name: 'Notch', serverId: 'abc' })).status, 200);
  const again = await get();
  assert.equal(again.length, 1);
  assert.equal(again[0].at, first.at);
});

test('a name that did not do the handshake is refused', async () => {
  const { post, get } = setup();
  assert.equal((await post({ name: 'Notch', serverId: 'abd' })).status, 403);
  assert.equal((await post({ name: 'jeb_', serverId: 'abc' })).status, 403);
  assert.deepEqual(await get(), []);
});

test('bad bodies never reach Mojang', async () => {
  const { post } = setup();
  for (const body of ['nope', {}, { serverId: 'abc' }, { name: 'Notch' }, { name: '<b>hi</b>', serverId: 'abc' }, { name: 'Notch', serverId: 'xyz' }]) {
    assert.equal((await post(body)).status, 400, JSON.stringify(body));
  }
});

test('banned accounts stay out of the list and cannot rejoin', async () => {
  const { kv, post, get } = setup();
  kv.set(UUID, { value: 'banned', metadata: null });
  assert.equal((await post({ name: 'Notch', serverId: 'abc' })).status, 403);
  assert.deepEqual(await get(), []);
});

test('rate limits and Mojang outages', async () => {
  assert.equal((await setup({ limited: true }).post({ name: 'Notch', serverId: 'abc' })).status, 429);
  assert.equal((await setup({ mojangStatus: 503 }).post({ name: 'Notch', serverId: 'abc' })).status, 502);
});

test('Mojang answers that are not a profile are refused', async () => {
  for (const body of ['not json', '{}', '{"id": "x", "name": "Notch"}']) {
    assert.equal((await setup({ mojangBody: body }).post({ name: 'Notch', serverId: 'abc' })).status, 502, body);
  }
});

test('other paths fall through to the wiki, and the list is cached', async () => {
  const { env, ctx, counts } = setup();
  const missing = await worker.fetch(new Request('https://soulrend.wiki/no-such-page/'), env, ctx);
  assert.equal(await missing.text(), 'the wiki 404 page');
  const request = () => new Request('https://soulrend.wiki/api/hall-of-fame');
  await worker.fetch(request(), env, ctx);
  await worker.fetch(request(), env, ctx);
  assert.equal(counts.list, 1);
});
