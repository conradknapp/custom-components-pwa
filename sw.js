self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("static").then(cache => {
      console.log("SW precaching app shell");
      return cache.addAll(["/index.html", "/"]);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Activating Service Worker ....", event);
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).then(response => {
          return caches.open("static").then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
