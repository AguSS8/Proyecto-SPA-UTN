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

