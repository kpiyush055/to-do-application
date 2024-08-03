const express = require('express');
const { createTodo, updateTodo } = require('./types');

const app = express();

app.use(express.json());

const server = app.listen("3000", ()=>{
    console.log("Server is  running on http://localhost:3000")
})
app.post("/todos", function(req,res){
    const creatyePayload = req.body;
    const parsedPayload = createTodo.safeParse(creatyePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs!"
        });
        return;
    }
    console.log("Todo is added")
    res.status(200).json({
        "msg": "Success"
    })
})

app.get("/todo", function(req,res){
    res.json({
        todo : "List"
    })
})

app.put("/completed", function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong data"
        })
    }
})
