const express = require('express');
const mustacheExpress = require('mustache-express');
const scss = require('node-sass');
require('dotenv').config();

const app = express();
const mustache = mustacheExpress();

app.engine('mustache',mustache);

app.set('view engine' , 'mustache');

app.use(express.static('root'));

app.get('/list',(req,res)=>{
    res.render('list')
});

app.listen(process.env.port,(req,res)=>{
    console.log(`Listing at port ${process.env.port}`);
});