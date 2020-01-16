const express = require('express');
const mustacheExpress = require('mustache-express');
const scss = require('node-sass');
const bodyPaser = require('body-parser');
const {Client} = require('pg');

require('dotenv').config();

const app = express();
const mustache = mustacheExpress();

app.engine('mustache',mustache);

app.set('view engine' , 'mustache');

app.use(express.static('root'));
app.use(bodyPaser.urlencoded({ extended:false }));  

app.get('/list',(req,res)=>{
    var result ;
    const client = new Client();  
 client.connect().then(()=>{
  return  client.query('Select * from emp',(err,res)=>{

        result = res.rows;
    });
 
 });
    res.render('list',result);
    console.log(result);
});

app.get('/Employee/add',(req,res)=>{
    res.render('EmployeeForm')
})
 app.post('/Employee/add',(req,res)=>{
    const client = new Client();
    client.connect().then(()=>{
    var sql = 'insert into emp (empno,ename,job) values ($1,$2,$3);'
    var params = [];
    params = [104,req.body.EmployeeName,req.body.Designation];
    client.query(sql,params,(err,res)=>{
        console.log(err,res);
    });
    }).catch(err =>{
        console.log(err);;

});

     res.redirect('/list');
     console.log(req.body)
 })

app.listen(process.env.port,(req,res)=>{
    console.log(`Listing at port ${process.env.port}`);
});