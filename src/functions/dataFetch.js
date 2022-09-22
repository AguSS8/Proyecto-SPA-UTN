export async function dataHandler({url, cb}) {
 await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {
      cb(data);
      document.querySelector(".spinner").style.display = "none"
    })
    .catch(err => {
      console.log(err);
      let message = `${err.statusText}` || 'Error al cargar contenido';
      document.querySelector(".spinner").style.display = "none"
      document.getElementById("main").innerHTML = `<h2>${err.status} ${message}</h2>`;
    })
}