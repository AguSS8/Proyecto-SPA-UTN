const express = require ('express');
const router = require('./routes/router');
const dotenv = require('dotenv');


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config({path:'./env/.env'})

app.set('port', process.env.PORT ||3001);

app.use('/', router);

app.listen(app.get('port'), ()=>{
  console.log('Server on port ' + app.get('port'));
})