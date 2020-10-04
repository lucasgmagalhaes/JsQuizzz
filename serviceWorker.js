// Define o nome do cache atual, considerando a sua versão.
var cacheName = "jsquiz-1.0";

// Armazena todos os arquivos no cache atual
this.addEventListener("install", () => {
  caches.open(cacheName).then((cache) => {
    cache.addAll([
      "/",
      "/index.html",
      "/manifest.webmanifest",
      "/question.html",
      "/results.html",
      "/styles/global.css",
      "/styles/index.css",
      "/styles/input.css",
      "/styles/page-transition.css",
      "/styles/question.css",
      "/styles/results.css",
      "/dist/models/questions.js",
      "/dist/globals.js",
      "/dist/index.js",
      "/dist/question.js",
      "/dist/questionBuilder.js",
      "/dist/results.js",
      "/icons/android-icon-192x192-jsquiz-manifest.png",
      "/icons/apple-icon-114x114-jsquiz-manifest.png",
      "/icons/apple-icon-120x120-jsquiz-manifest.png",
      "/icons/apple-icon-144x144-jsquiz-manifest.png",
      "/icons/apple-icon-152x152-jsquiz-manifest.png",
      "/icons/apple-icon-180x180-jsquiz-manifest.png",
      "/icons/apple-icon-57x57-jsquiz-manifest.png",
      "/icons/apple-icon-60x60-jsquiz-manifest.png",
      "/icons/apple-icon-72x72-jsquiz-manifest.png",
      "/icons/apple-icon-76x76-jsquiz-manifest.png",
      "/icons/favicon-16x16-jsquiz-manifest.png",
      "/icons/favicon-32x32-jsquiz-manifest.png",
      "/icons/favicon-96x96-jsquiz-manifest.png",
      "/icons/favicon.ico",
    ]);
  });
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  let resposta = caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((recurso) => {
      if (recurso) return recurso;
      else {
        cache.put(event.request, recurso?.clone());
        return fetch(event.request);
      }
    });
  });
  event.respondWith(resposta);
});
