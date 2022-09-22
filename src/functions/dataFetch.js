export async function dataHandler({url, cb}) {
 await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => cb(data))
    .catch(err => {
      console.log(err)
      let message = `${err.statusText}` || 'Error al cargar contenido'
    })
}