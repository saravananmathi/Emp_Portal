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

app.get('/list1',(req,res)=>{
    var result ;
    const client = new Client();  
 client.connect().then(()=>{
  return  client.query('Select * from med',(err,res)=>{

        result = res.rows;
    });
 
 });
    res.render('list1',result);
    console.log(result);
});

app.get('/Doctors/add',(req,res)=>{
    res.render('medform')
})
 app.post('/Doctors/add',(req,res)=>{
    const client = new Client();
    client.connect().then(()=>{
    var sql = 'insert into med (doctor_id,doctor_name,specialities) values ($1,$2,$3);'
    var params = [];
    params = [1002,req.body.Doctor_ID,req.body.Doctor_Name, req.body.Specialities];
    client.query(sql,params,(err,res)=>{
        console.log(err,res);
    });
    }).catch(err =>{
        console.log(err);;

});

     res.redirect('/list1');
     console.log(req.body)
 })

app.listen(process.env.port,(req,res)=>{
    console.log(`Listing at port ${process.env.port}`);
});