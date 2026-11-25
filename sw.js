// LAL Finance PWA service worker — offline-first shell with reliable updates.
// Increment this value whenever the app shell changes.
const CACHE_NAME = 'lal-finance-shell-v2';
const CACHE_PREFIX = 'lal-finance-';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Wait until every required local app file is safely stored before activation.
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  // Always try the latest page online; if offline, open the cached app shell.
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          await cache.put(new Request(new URL('./index.html', self.registration.scope)), response.clone());
          await cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        return (await caches.match(request))
          || (await caches.match('./index.html'))
          || (await caches.match('./'));
      }
    })());
    return;
  }

  // App-shell files are served from cache immediately and refreshed online.
  const refresh = fetch(request).then(async response => {
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  });
  event.waitUntil(refresh.then(() => undefined).catch(() => undefined));
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      return await refresh;
    } catch (error) {
      return await caches.match('./index.html');
    }
  })());
});
