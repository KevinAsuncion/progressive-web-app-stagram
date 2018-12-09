
//When service worker is installed
self.addEventListener('install', (event)=> {
    console.log('service worker  installing service worker..', event)
});

//When service worker is activated

self.addEventListener('activate', (event)=> {
    console.log('Service worker activating service worker..', event)
    return self.clients.claim();
})

self.addEventListener("fetch", event => {
  console.log("Service worker fetching ..", event);
  event.respondWith(fetch(event.request));
});