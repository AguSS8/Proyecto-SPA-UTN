const conexion = require('../database/db');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const register = async (req, res) =>{
  try {
    const {name, mail, pass} = req.body;
    let passHash = await bcryptjs.hash(pass, 8);
    conexion.query('INSERT INTO usuarios SET ?', {name:name, mail: mail, pass:passHash}, (error, results)=>{
      if(error){console.log(error)};
      console.log("Registrado con exito!");
  })
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) =>{
  const {mail, pass} = req.body;
  conexion.query('SELECT * FROM usuarios WHERE mail = ?', [mail], async (error, results) =>{
    if( results.length == 0 || ! (await bcryptjs.compare(pass, results[0].pass)) ) console.log("Usuario no existe");
    else console.log("Usuario valido");
  })
}

module.exports = {
  register,
  login
};