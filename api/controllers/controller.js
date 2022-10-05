const conexion = require('../database/db');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { name, mail, pass } = req.body;
    let passHash = await bcryptjs.hash(pass, 8);
    conexion.query('INSERT INTO usuarios SET ?', { name: name, mail: mail, pass: passHash }, (error, results) => {
      if (error) { console.log(error) };
      res.json({status:200})
    })
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { mail, pass } = req.body;
  conexion.query('SELECT * FROM usuarios WHERE mail = ?', [mail], async (error, results) => {
    if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
      return res.json({status:400})
    }
    else {
      const id = results[0].id
      const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRA
      })
      const name = results[0].name
      const status = 200

      res.json({token, name, status})
      
      //la manera que con este response se configuren cookies del otro lado
    }
  })
}

module.exports = {
  register,
  login
};