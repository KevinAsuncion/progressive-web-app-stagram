var deferredPrompt; 

//Check if service worker exists 
if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(){
          console.log('service worker registered')
      })
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    deferredPrompt = event; 
    return false
})