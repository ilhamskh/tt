'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "821ccb7eb5157bb2ab3727dc2845d62b",
".git/config": "69bbbc4a3f28c0125b308b1138c21dc4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0529a8b23eccb203d49e34d0295cfaea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47a78155fb87fd9cc1926e06c9c84301",
".git/logs/refs/heads/master": "47a78155fb87fd9cc1926e06c9c84301",
".git/logs/refs/remotes/origin/master": "5c607bf8d6aac0eb24d393f2ea5ba1dd",
".git/objects/01/eab76bff57db01a4e15d6a92a65dea5d273e1e": "896b0c7044251c9f2f95284adff1383a",
".git/objects/02/21e91d37f171d47dfaa3625477e999c6770e92": "dbdff800762247b8b375c2e3b42894fa",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/11/ca122beafa9e1d1c6fe90c355c07510768001a": "8a41b2a00a71b9a092c2563245aee21a",
".git/objects/15/51bef7dfd05629af8710ac5fec27183b1e37ec": "b15cc441bcd1d1a276f67a4781018b44",
".git/objects/1a/f06ab1e36c41bc22286bedb667565527da4c77": "7ce600b9ceb4034b7a4b01eda1a2f83e",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/602bcb892178308c19d19249f38dac33d44d85": "43830fd3401d47d204ebc93deeb60ad3",
".git/objects/27/23a04a228e519cc5a71644d77f5b93deae4f2f": "feee856794506e88a27887283908e108",
".git/objects/2f/1d174698539f5cb9991540b64809ff42d3e1c5": "77f84ef17dd1b7569346a0540b1854a7",
".git/objects/32/1fb710ce1afe55686fa92c750a974c5c7d651b": "089eb1c8f19d3c33e8aa6946ef88b367",
".git/objects/34/b42a555e9269defda20a66f087fbeeb67c9ec5": "c0b17fdaefec134675a4934115166965",
".git/objects/37/e90b7820d8c65bc9612e74dc8a61221e8f9ac0": "6217f5f0a04140cbbe12640b48603ccd",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/c0bb73b4a15b5add18b5049bc00cdc70951c95": "5d35c6ceea7aabbdcc2839cf5ee30f87",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/36d3982b4f910e5d0cd320b7808266006076d4": "dab96347949c56fc52ce0a29a079b598",
".git/objects/5e/9c43bfe37d565a26ba2833d69081d473955fd5": "48b59a6e18f59251e8b063b9cceef298",
".git/objects/65/f7660d620e18096fcc30b1d1a3316c93b1efe4": "d7e2311702ca62094caaaf6cd1d42b91",
".git/objects/67/6b2e3f8c6f8796038c7a35fae6c2c244e8c759": "5082b3f509d485a88eaf5aeee70b81d1",
".git/objects/71/fdafaffa05a9fb16107c451f45b17615d8e54b": "62d3f6f2dc1a01c318096aad034dc905",
".git/objects/75/6e08b7910dcb784c8c08ac00d20d10dd398e7b": "b20c4ffa0cf095c5fe728b580d8efb10",
".git/objects/76/cde30b282e55e2664856d95c5957fbcf96b228": "38cf61391034a4958b7b1dc26b658e62",
".git/objects/86/c4d7ca92b768d34a8879f3618cb9a061379199": "2ce836ba15f3634fbb3dfd53dbf7de8d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/559137785a2f87db24707a7ec82d1422e1446c": "acb11a9d05e80960c8991583e3fb9301",
".git/objects/92/3a8c4d377ddb939ec93a99f2e42e98eea24432": "711c8be8cf8c976c5ef68c7fd55f9fab",
".git/objects/94/5ad4fdda738ed7fb9780e1bfeff6707e67da14": "cd166bec40f52512a7a7d6cd650811f9",
".git/objects/97/b3efeffa0e1921888715088a01cad93a6151b2": "2d57f0a1b0f2b704d61a82685aa5775c",
".git/objects/a8/68ebd7154d0954c4482803424074b926b19049": "ef892c6f7365a52b51b4f4b9868657e0",
".git/objects/aa/3f38c1cfc4da4b1c05ef79df379460c5e9d843": "6cb5a844e2bcd07599e71c2c179b3d47",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c6/297ce5f9d32a33c23c1274cfa9952ad2058ee3": "154b68902df89fb549049eaaf6e6ec23",
".git/objects/c6/50e1b2c7abb6abc8e0b43666ec3fc506b3d18d": "e8f676c530e62e3de5cec16e7e093485",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/b726241c4b5ceb62bb9f424b71fef7675e954f": "c11c06059ba8f43d8d4aea4ad25d65ad",
".git/objects/de/87428ba527f3dd0412fc5e02f03a3d81a0e605": "6f4d6a2275343f4dcb60212e724f376d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/be2f097bf0bec9118a0a1b67f31c851fa3086f": "6db4bd1a351853ea5a5728c3c134aa7e",
".git/refs/heads/master": "b917890b418772425c4333392aed62ac",
".git/refs/remotes/origin/master": "b917890b418772425c4333392aed62ac",
"assets/AssetManifest.bin": "cd2b238c6f3ec8d83d67a3f9ab678490",
"assets/AssetManifest.bin.json": "9c3a0d6bf71056073f22fc9bcfe61037",
"assets/AssetManifest.json": "db4627cc3964afb260fe207345983020",
"assets/assets/fonts/LexendDeca-Bold.ttf": "a54efd6be25a010ad881cf7d9350574b",
"assets/assets/fonts/LexendDeca-Regular.ttf": "99701f3fa21155b9dca7a18a181c0dc8",
"assets/assets/images/background.jpg": "d42c31857a0d77c0ca9d223188bb97d9",
"assets/assets/images/background2.jpg": "21faaf5cd5bc5bb8e25c2e945caaecc7",
"assets/assets/images/character_idle.png": "bb7985fb3ca080b761ecc67c3156e0c9",
"assets/assets/images/chests.png": "738f8ae65f0d3bb566d6a2b47dec4273",
"assets/assets/images/enemy.png": "cc377a8034c539c36814902b34ffe39e",
"assets/assets/images/left_sprite.png": "d75b84027d7586e861c16c253335cff4",
"assets/assets/images/mistery_box.png": "e31824fb0a7214ff0df94c5f63f889eb",
"assets/assets/images/napoleon.png": "8833e5e9c87761f4305f97c5092fc0a7",
"assets/assets/images/right_sprite.png": "d678a3b54a0a6de5cabb4e95945c13a7",
"assets/assets/images/walk.png": "6086c1b3e1d31cf0b385828b6d380435",
"assets/FontManifest.json": "6ddd4712306a49fade761c024d0b9912",
"assets/fonts/MaterialIcons-Regular.otf": "7bff7b03c7b17c9043751eb7a423fa1f",
"assets/NOTICES": "853250e84d8b46418e70a4dd8eab0a3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be26d9b93531d07431fb6bccd3d3eb8a",
"/": "be26d9b93531d07431fb6bccd3d3eb8a",
"main.dart.js": "5bf7733e870d691f48af21aff954b7c2",
"manifest.json": "56158a641fca09af1a32b62e824e9325",
"version.json": "1b8b367532ac4b3ff6d5406743283c7a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
