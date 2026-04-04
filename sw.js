const CACHE_NAME = 'air-hockey-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación: Cachear archivos básicos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia de carga: Cache First
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
