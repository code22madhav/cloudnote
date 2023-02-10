require ("./db");
const express = require('express');

const app=express();
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(8900,()=>{
    console.log("lsteinf to 8900");
})
