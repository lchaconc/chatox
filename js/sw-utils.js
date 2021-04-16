//Guardar en el cache dinamico
function actualizaCacheDinamico(nombreCache, req, res) {
  if (res.ok) {
    return caches.open(nombreCache).then(cache => {
      cache.put(req, res.clone() );
      return res.clone()
    });
  } else {
      return res;
  }
}
