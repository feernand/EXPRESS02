//exercicio simples com parametros

const express=require('express');
const app=express();
app.listen(3000,()=>{
    console.log("server funfando")
})

//dados dos clientes
const clientes = [
    {id:1, nome: "jhalim Rabei", telefone: '(43)4002-8922', email:'JR@gmail.com'},
    {id:2, nome: "Mia Romba", telefone: '(41)99234-8563', email:'MR@gmail.com'},
    {id:3, nome: "H. Romel Pinto", telefone: '(45)99342-3159', email:'HRP@gmail.com'},
    {id:4, nome: "Deide Costa", telefone: '(85)99341-2776', email:'DC@gmail.com'},
    {id:5, nome: "Oscar Alho", telefone: '(11)99324-5111', email:'OA@gmail.com'}
]

//rotas
app.get('/',(req,res)=>{
    res.send("API de cliente")
})

//rota com o total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('O total de clientes: '+ clientes.lenght);
})

//rota para apresentar os dados de um cliente específico
app.get('/clientes/:id',(req,res)=>{
    const cliente=clientes.find(c=>c.id===parseInt(req.params.id));
    //se não existir o cliente
    if(!cliente) res.status(404).send('Cliente foi de Zoro');
    //o cliente existe, 
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone} e o e-mail: ${cliente.email}`)
})
