const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path:'./env/.env'})

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE 
});


connection.connect((err)=>{
  if (err){
    console.log(err);
    return;
  }
  console.log("conectado");
})

module.exports = connection;