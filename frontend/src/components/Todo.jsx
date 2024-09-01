import { useState } from "react"

export function Todos({ todos }){
    
    return <div>
        {todos.map(function(todo){
            
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={
                    ()=>{   
                        fetch("http://localhost:3000/completed",{
                            method: "PUT",
                            body: JSON.stringify({
                                _id: todo._id
                            }),
                            headers: {
                                "content-Type" : "application/json"
                            }
                        }).then(async function(res){
                            const json = res.json();
                            console.log(json)
                            
                            console.log("To do updated")
                            
                        })
                    }
                }>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}