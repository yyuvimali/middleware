const http=require('http');
const express=require('express');

const app=express();
app.use(function(req,res,next){
console.log('i am middleware')
next();
})
app.use(function(req,res,next){
    console.log('i am another middleware');
    res.send('<h1>hiiii</h1>');
 })
 const server=http.createServer(app);
app.listen(2000);
