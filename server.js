const express = require('express');
const mustacheExpress = require('mustache-express');
const scss = require('node-sass');
const bodyPaser = require('body-parser');
require('dotenv').config();

const app = express();
const mustache = mustacheExpress();

app.engine('mustache',mustache);

app.set('view engine' , 'mustache');

app.use(express.static('root'));
app.use(bodyPaser.urlencoded({ extended:false }));  

app.get('/list',(req,res)=>{
    res.render('list')
});

app.get('/Employee/add',(req,res)=>{
    res.render('EmployeeForm')
})
 app.post('/Employee/add',(req,res)=>{
     res.redirect('/list');
     console.log(req.body)
 })

app.listen(process.env.port,(req,res)=>{
    console.log(`Listing at port ${process.env.port}`);
});