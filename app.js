const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get('/', function(request,response){
    response.send('Hello FiveP !!!');

});

app.get('/contact', (req,res)=>{
    res.send("Do you wanna contact us ?");

});

app.post('/contact', (req,res)=>{
    console.log(req.body);
    
    res.send("get some data");

});




console.log('nesma3 fik 3al port mouch 3000');

app.listen(2000);
