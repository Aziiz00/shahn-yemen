const CACHE_NAME = "shahn-yemen-v1";
const FILES = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))));
self.addEventListener("fetch", event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));