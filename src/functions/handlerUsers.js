export const register = (e)=>{
    e.preventDefault();
    let name = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;

    const datos = {name, mail, pass};
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(datos)
    });
}

export  const login = e => {
  e.preventDefault();
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  const datos = {mail, pass};
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(datos)
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('isLoged', JSON.stringify(data))
      })
}