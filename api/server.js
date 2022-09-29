const express = require ('express');
const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router);

app.listen(3002, ()=>{
  console.log('Server on port ' + 3002);
})