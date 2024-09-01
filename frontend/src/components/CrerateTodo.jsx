import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <>
    <div>
        <input type="text" placeholder="title" className="gap" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input>
        <input type="text" placeholder="description" className="gap" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input>
        <button className="gap" 
        onClick={ 
            ()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-Type": "application/json"
                    }
                }).then(async function(res){
                    const json = res.json();
                    alert("To Do Added");
                    console.log("To do added")
                    console.log(body)
                })
                //this above thing is important to understand.How fetch is being used here and how to tell backend to identify the json.
            }
        }>Add To Do</button>
    </div>
    </>
}