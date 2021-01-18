const nombreCache = "apv-v3";
const offline = "/error.html";
const archivos = [
	"/",
	"/index.html",
	offline,
	"/css/bootstrap.css",
	"/css/styles.css",
	"/js/app.js",
	"/js/apv.js",
];


// Cuando se instala el Service Worker
self.addEventListener("install", e => {
	console.log("Instalado el service worker");

	e.waitUntil(
		caches.open(nombreCache)
		.then( cache => {
			console.log("cacheando");
			cache.addAll(archivos);
		})
	)
});


// Activar el Service Worker
self.addEventListener("activate", e => {
	console.log("Service Worker activado");

	e.waitUntil(
		caches.keys()
			.then( keys => {
				// console.log(keys);

				return Promise.all(
					keys.filter( key => key !== nombreCache)
						// Borra las versiones anteriores
						.map( key => caches.delete(key))
				)
			})
	)



});

// Evento fetch para descargar archivos estáticos
self.addEventListener("fetch", e => {
	console.log("Fetch... ", e);

	e.respondWith(
		caches.match(e.request)
			.then( respuestaCache => ( respuestaCache ? respuestaCache : caches.match(offline)))
				// return respuestaCache;


			
			// .catch( () => caches.match("/error.html"))
	)
});
