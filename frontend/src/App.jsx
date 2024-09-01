import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CrerateTodo'
import { Todos } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{fetch("http://localhost:3000/todos").then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })},[])
  return (
    <div>
      <CreateTodo />
      {/* <Todos todos={[{"title":"Hello1",
        "description": "Heelooojj",
        "completed": false
      },
      {"title":"Hello2",
        "description": "Heelooojjjjjj",
        "completed": true
      }]} /> */
       <Todos todos={todos} />
      }

    </div>
  )
}

export default App
