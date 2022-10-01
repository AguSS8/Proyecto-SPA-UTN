const express = require ('express');
const router = require('./routes/router');

const connection = require('./database/db')
const cors = require('cors');


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.set('port', process.env.PORT ||3001);

app.use('/', router);

app.listen(app.get('port'), ()=>{
  console.log('Server on port ' + app.get('port'));
})

connection