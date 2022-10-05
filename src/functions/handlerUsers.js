export const register = (e) => {
  e.preventDefault();
  let name = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;

  if (name.trim()=== '' || mail.trim() === '' || pass.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'xD',
      text: 'Ambos campos son necesarios!',
    })
  } else {
    const datos = { name, mail, pass };
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
      "Content-type": "application/json"
      },
      body: JSON.stringify(datos)
    })
      .then(res => {
        if (res.ok){
          Swal.fire({
            icon: 'info',
            title: 'Registrado con exito',
            timer: 1000
          })
          window.location.hash = "#inicio-sesion"
        }
      })
  
  }
  
}

export const login = e => {
  e.preventDefault();
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  if (mail.trim() === '' || pass.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'xD',
      text: 'Ambos campos son necesarios!',
    })
  } else {
    const datos = { mail, pass };
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(datos)
    })
      .then(res => res.json())
      .then (data => {
        if (data.status===200){
          localStorage.setItem('isLoged', JSON.stringify(data))
          Swal.fire({
            icon: 'success',
            title: 'Login Correcto',
            timer: 1000
          })
          window.location.hash = "/"
        }else{
          Swal.fire({
            icon: 'error',
            title: 'No se encontro usuario',
            text: 'Las credenciales no coinciden con un usuario regitrado',
          })
        }
      })
      /*.then(data => {
        localStorage.setItem('isLoged', JSON.stringify(data))
        Swal.fire({
          icon: 'success',
          title: 'Login Correcto',
          timer: 1000
        })
        window.location.hash = "/"
      })*/
  }

}
  
 
