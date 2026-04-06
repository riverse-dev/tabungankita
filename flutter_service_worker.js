'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "32688a138c1cf8b9eb09f11ff4db8839",
".git/config": "b622941580ac953fe111fa449394c944",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "68771e390e64972fff1359f80118c04c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "94f34af919ac1e17eef595654d78b15b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77004c2e95e706aaf5dac495f57d4bd2",
".git/logs/refs/heads/master": "17c052ae90b23be2b9ef818a2ab062e9",
".git/logs/refs/remotes/origin/HEAD": "72d44221bd27b7c4e59ddf7bd35f2d10",
".git/logs/refs/remotes/origin/master": "23cd9128f9b33e994dfb147e2e0db490",
".git/objects/00/a518df66041bd4ab8f72319a859904c45d2b79": "a702d01e20ef0f4d1691faa24ee17428",
".git/objects/02/23f4c73057bd7645aec02edd84bd47dc80c030": "f2d912bb7c42ff5bc0ed1556d6eed6be",
".git/objects/04/362b0de639d07fbdaaab524dd5545e8bb63526": "a8aa6cf67992f573b6ffa9ebcf8559b4",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/10/623ecb60a1909bcfcd7a2aca46a6653c0ecec3": "5937b454ef0f02bfea59ef526e9edd14",
".git/objects/13/03b124124f83a995be099f7e47599768f79a07": "5bd4826acc7753bfafea8c4251c9dadd",
".git/objects/16/4d7d410db63c3d66f210d6e2577998e682a688": "e02ace0172f9b9f513268c6497b16e66",
".git/objects/1b/02a886e4bd773da4a2db09ab8ceba6484314d3": "6a88f91c4232beed0b5e4d8c0dec91b7",
".git/objects/1b/38fdb9e847cb820059f723c9258704642f042a": "f441cd42affd0d98a4b3fa65744cfe75",
".git/objects/1e/ab0c753ddb6a6b24b5eb3bbff50a3d393eb1c8": "be887474974b2832324593173f93a4e8",
".git/objects/2a/b177a42e005048922165a4bce01a312e158e66": "0d0502f9668f0c60db142a57ed78266f",
".git/objects/31/65c97dc95a6d169026b33eac8e5a694c6b2561": "38b5cddb26546db9e2a666efa996a55b",
".git/objects/32/4187464cee0499b036b809337216f4b233487c": "01c3cce5950a8db5f652a018b7ffced2",
".git/objects/36/bbb85993bd3d013fa4fd9e78352082e2c48512": "af65b016e29ec081e34bbd675e8a9614",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/400c2c59e7f1598c6979f26517dbbb6dacb980": "25158ab07d8aa6a27e873878bf2d183e",
".git/objects/40/ee093ba366f49f8bcf8afaeeca3dd1717693d0": "0923790c0ab23fd23bcb129f751c9c3d",
".git/objects/47/095d8f1a291c6d4ebcceaf7707f309cc4dd014": "fb64a696cd4e06a34985637f6f2f02e3",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5b/0a4802a66f1abc5e9ccce5e83db019bdf774ff": "48e727e2812d14f7fc285076aacd6933",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/61/11f3fccaa2c25d92ff444f277baf2949838aa7": "2aa0585d9738ccc696c1f0a5a231785a",
".git/objects/61/23527ecccbb97a575b067e2b5fa69299979288": "e2d6c427d5484f324148cd4c40b944f2",
".git/objects/63/db4fa70c9372225a62feecb966f306877bd9d5": "1ca2b2c7fe1d36bd361f0cdf8ee28534",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/1521c2ea6d5618676f934a60785c895a62a3ca": "d13e3bb4280ad741ca06bf914bcbed82",
".git/objects/6a/75b350d9a1c2ea14261c60a1664dc987273413": "c956ba6083de01e1a58ef2632dae0a5e",
".git/objects/6d/cd9ccb52932af1623a728d42b9c2c93d5eb429": "4e1666be2ece960f9099f759b1e8b433",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/91b09843ef7417c72e4b4ba9b68b06a8504255": "adc97a9929c7301bc047afb12cf61da6",
".git/objects/82/110e53aa30d296f795075f1d1edcb111f28d9a": "718ec549c4ba6ffbbbcc320e4003c82d",
".git/objects/85/2fd8a6470e895871e0c851c3d9a7119c00721b": "2625d04917b71afc98bb4dc247a2da13",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/88/31c3cda150c1fe4dbcfabdb076b154349f3001": "fab898be0e80dcb1b76a7c81c921a9bb",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a1/404e72210bc4797390b528bf416ad8e0ae65ae": "669b53b9184d806a652f417dd9dc76aa",
".git/objects/a1/bc556925c494a82ea92b86592f75fc97ef3713": "86442deaffd01af944aab2c788252887",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/047527dfd72125d2fec9e38393db9e1ec5b55c": "5fb9bbf7e382ce83e5b0dbef248ba6db",
".git/objects/ac/51fd9cfa5b5dbce7c954cbc234de16ea422892": "41f99a92a567877a5109a2125dad4d7e",
".git/objects/ad/1fe22cd719cc579245b82c69b215bc63f4b397": "f093c23e67e42aba31489ed6d030dc9c",
".git/objects/ad/6d78c93dff20bb29fed028e2750bcf3e158784": "e409f383ea186d1a6a2d0e699ea10efb",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/b6/3c7c528e958e9b965ad40e6a72caff4e8be4d5": "10f362941ff5386f5cb5ac88164343cf",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/1ef4561dd1b8317fe0ded6d9d5ea2159e6fdb6": "2d90045fa05f3150402fe920543bf297",
".git/objects/be/739bfad984cfc127291d08237fbcfa5355357f": "1839d0b8821c73cef00d187e13f77e2b",
".git/objects/c4/4deca8dfa95103918c57e3cbcea66b0d77adc4": "981906a7cadc25026314d59956bfa9b7",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/c423e60031f2c7f161fa59eb491cfe30b5880c": "1f74b8d7bf3121a2905d86311fea67a4",
".git/objects/c9/49ee61f84e333937bb471ca7faa8c0b67a5044": "308e7d5fa9f62b40f9f4cf692099b40d",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/d3/64adfe57874cb7a2abddfe2349782135e257fd": "5b198f749b2f9090458c81982a18300c",
".git/objects/d3/d721f9f24bd8e99a47d23af41e9e462080e900": "a87459543f523fd8f026172305ed895b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/96ce476dd9cd41eceaee5ff0c2ad7ca61e4dee": "7c8eda766aabf977a2cea17ed6f6b130",
".git/objects/d7/d73b4e0c23d4ccfc36dc3a997b30792b2a2531": "a8fbfd7ef3554aa6e213194cf24ea723",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/eb/b965836ea633af5f5d446066e936dee5eeed6c": "246d64f671f57cb2050108c3b97751cd",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/8012a202df419c740d920895e9ae62c037672a": "c8b9b5a4312b2bff4b875952d7682a9d",
".git/objects/f4/731ce37b521022445cd40f3d58c21ebecdecca": "ece262b5e5b21ce903960d9b70d500a2",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/5210b107c89d5a99a25dc1680e040be7dec901": "b9640ce809ebd9f55c8db0b298be6b30",
".git/objects/f8/f0938564570b3a0c6171c5dd59cef3fae8775c": "18c3a31bb4e67e008add0288541ba7cd",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/ORIG_HEAD": "05eecb5b35a98a9b8fa4d21d86e7f3df",
".git/refs/heads/master": "8ab9cd52def53293db465bee23112c47",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8ab9cd52def53293db465bee23112c47",
"assets/AssetManifest.bin": "770e87e441fb03639b48cfb5f4987976",
"assets/AssetManifest.bin.json": "79a801a25efe82ef4f4b1f11d5fc7121",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/OFL.txt": "09ed978d55339d326caa5e1495a6feb2",
"assets/assets/images/img-app-launcher.png": "6fb80c324ee19e2b45ca2821a5391f24",
"assets/assets/images/img-placeholder-image.jpg": "82b58413e8798e56e101b6820a83f7db",
"assets/FontManifest.json": "d35a8a91b82447fe393b22353b0b559a",
"assets/fonts/MaterialIcons-Regular.otf": "d38db25b70ca010796d0d479c33ea368",
"assets/NOTICES": "865d3990e56c0a07ed91dc9901d1269a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "fddb1cfb06a95252382ac3c80c285935",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4e4be864d2da7b30755319cd9c436089",
"icons/Icon-192.png": "3a62392774bba8bbb0cd948b539b502e",
"icons/Icon-512.png": "717f9201f5107a39819d5aa60312073a",
"icons/Icon-maskable-192.png": "3a62392774bba8bbb0cd948b539b502e",
"icons/Icon-maskable-512.png": "717f9201f5107a39819d5aa60312073a",
"index.html": "e093e68302fb0decde6fd9480a60c8ef",
"/": "e093e68302fb0decde6fd9480a60c8ef",
"main.dart.js": "8e545f42ecf225606bf31ced70bc7ac2",
"manifest.json": "c096078873c25120e1f80e52ee3919fe",
"version.json": "46311a0a29706d8db521c8129b48177a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
