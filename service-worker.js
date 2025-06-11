
const CACHE_NAME = "super-counter-v1";
const urlsToCache = [
  "./super counter.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./splash-300.png",
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
