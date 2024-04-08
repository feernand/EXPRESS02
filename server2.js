const express=require('express');

var morgan = require('morgan');

const server=express();
server.listen(3000);

//criar o arquivo de logs
// server.use(morgan('tiny'));
server.use(morgan(':method :status :url'));

server.get('/',(req,res)=>{
    res.send("segunda é uma bosta, ja estou cansado ")
})