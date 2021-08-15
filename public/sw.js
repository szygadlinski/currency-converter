/* eslint-disable no-restricted-globals */

var cacheName = 'Currency Converter';

var filesToCache = [
  '/static/css/main.a452568f.chunk.css',
  '/static/css/main.a452568f.chunk.css.map',
  '/static/js/2.408d625f.chunk.js',
  '/static/js/2.408d625f.chunk.js.LICENSE.txt',
  '/static/js/2.408d625f.chunk.js.map',
  '/static/js/main.686b1872.chunk.js',
  '/static/js/main.686b1872.chunk.js.map',
  '/static/js/runtime-main.ebbbaf40.js',
  '/static/js/runtime-main.ebbbaf40.js.map',
  '/index.html',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
