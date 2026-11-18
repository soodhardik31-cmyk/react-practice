import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    const [todo, setTodo] = useState(["sample task"]);
    const [newTodo, setNewTodo] = useState("");

    //add a task
    const addTask = ()=> {
        setTodo([...todo, newTodo]);
        setNewTodo("");
    }

    //delete a task
    const deleteTask = (id)=> {
        setTodo((prevTodo) => {
            return prevTodo.filter((todo) => todo.id !== id);
        })
    }

    return (
        <>
            <h1>Todo List</h1>
            <br></br>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={(e)=> setNewTodo(e.target.value)}
            />
            <br></br><br></br>
            <button onClick={addTask}>Add Task</button>

            <h4>Tasks Todo</h4>
            <ul>
                {todo.map((todos)=>{
                    return <li key={todo.id}>{todos}
                            <button onClick={() => deleteTask(todo)}>Delete</button>
                            </li>
                })}
            </ul>
        </>
    )
}