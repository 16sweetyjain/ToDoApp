const todo = require('../persistence');
const {findTodoById,findAllTodos,updateTodo,addTodo,deleteTodo} = require('../persistence/repository/todoRepository.js');
const express = require('express');
const cors = require('cors');

const app= express();

app.use(cors());
app.use(express.json());

app.post("/todos", async(req,res)=>{                                      

    const todo=await addTodo(req.body);
    return res.send(todo);
});

app.get("/todos",async(req,res)=> res.send(await findAllTodos));      

app.get("/todos/:id",async(req,res)=> res.send(await findTodoById(req.params.id)));

app.put("/todos/:id", async(req,res)=>{
    const todo = await updateTodo(req.params.id,req.body);
    return res.send(todo);
});

app.delete("/todos/:id", async(req,res)=>{
 const todo=await deleteTodo(req.params.id,req.body);
 return res.send(todo);
});


const start= ({ port, callback }) =>app.listen(port, callback);            //setting up express server

module.exports = {start};