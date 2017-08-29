"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","f3be891022632531fa68df75d2e0ee0f"],["static/css/app.2a295e53f4d2aea668c619704e77a8d4.css","11cf9e5d38ce66c4d0868426b68aeb81"],["static/js/0.8afc50623d0097a33f7e.js","2d326ec8041c0d84228d3f54a59ffff8"],["static/js/1.b031ebcf18346eeb7ba4.js","2a9c0d0498132556777b9477502bdf56"],["static/js/10.191d230e0163427e41e2.js","554fb58fcdfe65c4a43017cb325d0b9e"],["static/js/2.12c9a6b13a306cc4ee5b.js","78fb57470beb3a023e7f92ccc1d565d1"],["static/js/3.40b1a1bd768b9e9d81f1.js","d7f6c8074b25656fd4f5489deeeb26bb"],["static/js/4.8b2423768bc8dad19ada.js","dd02e53fa5fb283541d8683f98b72e1b"],["static/js/5.e4308c43ee95eafa6c69.js","b9f67c64c92d951d9b25d525ba641df3"],["static/js/6.dc278c4cd0dca296d7f6.js","c6e763e74de7b5b18a2fc6b2edf8390e"],["static/js/7.7777f9dc2e868dbbd37e.js","d8ff4d716fb36766af9c13c66402486e"],["static/js/8.f0d1219530c651e6fd1f.js","08d235cf2052804457648c748bb5040d"],["static/js/9.cfbc0a8913c60ad004af.js","62930fffb0def7e6d2f941881fae33d2"],["static/js/app.9dbdaa71cfc6cc0cdaf3.js","c49a2e49e2ed9d48631996bafaccc653"],["static/js/manifest.aed337dfa45f37e1bd83.js","507467e9234b92995ee781997f840496"],["static/js/vendor.0b6ac51480168b1aec87.js","33337c442327c532cbdf5c57293c8c8c"]],cacheName="sw-precache-v3-vbs-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});