import "babel-polyfill";
import toolbox from "./node_modules/sw-toolbox/sw-toolbox";
toolbox.precache(["fail.html"]);

toolbox.router.get("/(.*)", function(request, values, options) {
  return toolbox.networkFirst(request, values, options).catch(function(error) {
    if (
      request.method === "GET" &&
      request.headers.get("accept").includes("text/html")
    ) {
      return toolbox.cacheOnly(new Request("dist/fail.html"), values, options);
    }
    throw error;
  });
});

// addEventListener("install", event => {
//   skipWaiting();
//   // prettier-ignore
//   event.waitUntil(
//     async function() {
//       const cache = await caches.open("static");
//       await cache.addAll(["fail.html", "/"]);
//     }());
// });

// addEventListener("fetch", event => {
//   event.respondWith(
//     // prettier-ignore
//     async function() {
//       const cachedRes = await caches.match(event.request);
//       if (cachedRes) return cachedRes;

//       try {
//         return await fetch(event.request);
//       } catch (err) {
//         return caches.match("static");
//       }
//     }()
//   );
// });
