//When service worker is installed
self.addEventListener("install", event => {
  console.log("service worker  installing service worker..", event);
  event.waitUntil(
    caches.open("static").then(cache => {
      console.log("Precaching app shell");
      cache.addAll([
        "/",
        "/index.htl",
        "/src/js/app.js",
        "/src/js/feed.js",
        "/src/js/promise.js",
        "/src/js/fetch.js",
        "/src/js/material.min.js",
        "/src/css/app.css",
        "/src/css/feed.css",
        "src/images/main-image.jpg",
        "https://fonts.googleapis.com/css?family=Roboto:400,700",
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css"
      ]);
    })
  );
});

//When service worker is activated
self.addEventListener("activate", event => {
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(res => {
          return caches.open("dynamic").then(cache => {
            cache.put(event.request.url, res.clone());
            return res;
          });
        })
        .catch((err)=>{
            console.log(err)
        })
      }
    })
  );
});
