const CACHE_NAME = 'gfza-chat-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-mJCO6BS5.js',
  '/assets/index-Cj65zxTc.css',
  '/gfza-logo.jpg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});