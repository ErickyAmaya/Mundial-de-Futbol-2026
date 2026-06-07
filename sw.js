const CACHE = 'mundial2026-v4';  // Incrementar versión fuerza limpieza del caché viejo

self.addEventListener('install', e => {
  self.skipWaiting(); // Activa el nuevo SW inmediatamente
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./index.html', './manifest.json']))
  );
});

self.addEventListener('activate', e => {
  // Eliminar TODOS los cachés viejos (v1, v2, v3...)
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log('SW: eliminando caché viejo', k);
        return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Solo cachear recursos del mismo origen
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchFresh = fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fetchFresh;
    })
  );
});
