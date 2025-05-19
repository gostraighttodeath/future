self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("암산-cache").then((cache) => {
      return cache.addAll(["암산.html", "style.css", "script.js"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});