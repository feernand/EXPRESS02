const express=require('express');

const server=express();

server.listen(3000);

//inserindo midleware

server.use((req,res,next)=>{
    console.log('aaaaaaaaaaaaaaooooooooooooooooooo potenciaaaaaaaaa')
    next();
})

server.use((req,res,next)=>{
    req.requestTime=Date.now();
    next();
})

server.get('/',(req,res)=>{
    console.log(req.requestTime);
    res.send('<h1>Bora la</h1>')
})