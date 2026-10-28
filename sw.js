'use strict';
const CACHE = 'motive-offline-v21';
const ASSETS = ['./','./index.html','./styles.css','./styles.css?v=21','./quotes.js','./daily-quotes.js','./scenes.js','./app.js','./app.js?v=14','./enhancements.js','./enhancements.js?v=21','./companion.js','./wellbeing-core.js','./wellbeing.js','./wellbeing.js?v=21','./wellbeing.css','./growth-core.js','./growth.js','./icon.svg','./manifest.webmanifest','./quotes.json','./widget/Motive.js','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png','./assets/backgrounds/daily-2026-10-22-mending.jpg','./assets/backgrounds/daily-2026-10-23-resting-cat.jpg','./assets/backgrounds/daily-2026-10-24-origami.jpg','./assets/backgrounds/daily-2026-10-25-shared-meal.jpg','./assets/backgrounds/craft.jpg','./assets/backgrounds/support.jpg','./assets/backgrounds/color.jpg','./assets/backgrounds/summit.jpg','./assets/backgrounds/sunrise.jpg','./assets/backgrounds/forest.jpg','./assets/backgrounds/water.jpg','./assets/backgrounds/workspace.jpg'];
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', event => {event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('motive-offline-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),5000);
    try {const response=await fetch(request,{signal:controller.signal,cache:'no-cache'});if(response.ok)await cache.put(request,response.clone());return response;}
    catch {const saved=await cache.match(request);if(saved)return saved;if(request.mode==='navigate')return (await cache.match('./index.html'))||Response.error();return Response.error();}
    finally {clearTimeout(timeout);}
  })());
});

