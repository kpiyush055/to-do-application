const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const server = app.listen("3000", ()=>{
    console.log("Server is  running on http://localhost:3000")
})
app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs!"
        });
        console.log("Failed")
        return;
    }
    
    //Add to mongodb
    await todo.create({
        title : creatyePayload.title,
        description : creatyePayload.description,
        completed: false

    })
    console.log("Todo is added")
    res.status(200).json({
        msg : "To do added Successfully"
    })
})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong data"
        })
        return;
    }
    todo.update({
        _id : updatePayload.id
    },{
        completed : true
    });
    res.status(200).json({
        msg : "Todo marked as completed"
    })

})
