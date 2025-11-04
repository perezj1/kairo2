// Forzar activación inmediata al instalar
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Util: resolver una URL relativa contra el scope del SW
function resolveUrl(urlLike) {
  try {
    // Si ya es absoluta, new URL la aceptará
    return new URL(urlLike, self.registration.scope).toString();
  } catch (_) {
    return self.registration.scope; // fallback al root de la app
  }
}

// PUSH: espera payload JSON { title, body, url, tag }
self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) {}

  const title = data.title || 'REMI';
  const options = {
    body: data.body || 'Tienes tareas por completar 💪',
    icon: '/icons/icon-192.png',
    // Pon este archivo si existe; si no, elimina la línea:
    // badge: '/icons/badge-72.png',
    tag: data.tag || 'Remi-reminder',
    renotify: false,
    data: { url: resolveUrl(data.url || '/home') }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// CLICK: enfocar una ventana existente o abrir nueva en data.url
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || resolveUrl('/home');

  event.waitUntil((async () => {
    const all = await clients.matchAll({ type: 'window', includeUncontrolled: true });

    // 1) intenta enfocar una ventana ya abierta del mismo origen
    const sameOrigin = all.find((c) => {
      try { return new URL(c.url).origin === new URL(self.registration.scope).origin; }
      catch { return false; }
    });
    if (sameOrigin && 'focus' in sameOrigin) {
      // Si ya está en la URL objetivo, sólo enfoca
      try {
        if (sameOrigin.url !== targetUrl && 'navigate' in sameOrigin) {
          await sameOrigin.navigate(targetUrl);
        }
      } catch (_) {}
      return sameOrigin.focus();
    }
    // 2) si no hay ventana, abre una nueva
    return clients.openWindow(targetUrl);
  })());
});

// Opcional: telemetría o limpieza
self.addEventListener('notificationclose', (_event) => {
  // console.log('Notificación cerrada', _event.notification?.tag);
});

// Opcional: si cambia la suscripción push (rotación de claves, etc.)
self.addEventListener('pushsubscriptionchange', async (event) => {
  // Aquí puedes re-subscribirte y enviar la nueva sub a tu backend.
  // Por simplicidad, sólo log:
   console.log('pushsubscriptionchange', event);
});
