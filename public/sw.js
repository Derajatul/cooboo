/* eslint-disable no-undef */
// sw.js

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js'
);

workbox.setConfig({ debug: false });

// Cache nama file build Anda di sini
const staticAssets = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/hero-food.webp',
  // Daftar asset lainnya yang ingin Anda cache
];

workbox.precaching.precacheAndRoute(staticAssets);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
