const conexion = require('../database/db');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const register = async (req, res) => {
  try {
    console.log("llega aca");
    const { name, mail, pass } = req.body;
    let passHash = await bcryptjs.hash(pass, 8);
    conexion.query('INSERT INTO usuarios SET ?', { name: name, mail: mail, pass: passHash }, (error, results) => {
      if (error) { console.log(error) };
      console.log("Registrado con exito!");
    })
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { mail, pass } = req.body;
  conexion.query('SELECT * FROM usuarios WHERE mail = ?', [mail], async (error, results) => {
    if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) console.log("Usuario no existe");
    else {
      const id = results[0].id
      const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRA
      })
      const name = results[0].name
      
      console.log("TOKEN: " + token + " para el USUARIO : " + results[0].name)

      res.json({token, name})
      
      //la manera que con este response se configuren cookies del otro lado
    }
  })
}

module.exports = {
  register,
  login
};