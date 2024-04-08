//colocando parametro nas rotas

const express=require('express');

const app=express();

app.listen(3000,()=>{
    console.log("Servidor em excução")
})

app.get('/',(req,res)=>{
    res.send("cu");
})

//rota com 1 parametro

app.get('/ola/',(req,res)=>{
    res.send("cu2"+req.params.nome);
})

// rota com 2 parâmetro
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send("cu3, tudo bem "+req.params.nome+"da empresa"+req.params.nome)
})
//rota com soma de 2 parâmetro

app.get('/soma/:a/:b',(req,res)=>{
    res.send("resultado da soma é: "+(parseInt(req.params.a)+parseInt(req.params.b)))
})

