//Todo list

import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function TodoList() {
    //state variable holds list todo
    const [todos, setTodos] = useState([{
        tasks: "Sample Task",
        id: uuidv4(),
        completed: false
    }]);
    //state variable holds new task to be added to the list
    const [newTodo, setNewTodo] = useState("");
    //state variable holds the id of the task being edited
    const [editId, setEditId] = useState(null);
    //state variable holds the text of the task being edited
    const [editText, setEditText] = useState("");

    //add a task
    const addTask = ()=> {

        if(newTodo.trim() ==="") return; // do not add empty tasks

        setTodos((prevTodos) => [...prevTodos, {tasks: newTodo, id: uuidv4()}]);
        setNewTodo("");
    }

    //delete a task
    const deleteTask = (id)=> {
        setTodos((prevTodos) =>  prevTodos.filter((todo) => todo.id !== id));
    }

    //update a task
    const updateTask = (id) => {
        if(editText.trim() === "") return; // do not update empty task
        setTodos((prevTodos) =>
            prevTodos.map((todo)=>
                todo.id === id ? {...todo, tasks: editText} : todo
            )
        );
        setEditId(null);
        setEditText("");
    }

    //complete a task
    const markCompleted = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        );
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
                {todos.map((todo)=>{
                    return(
                        <li key={todo.id} >
                            <input
                                type = "checkbox"
                                checked = {todo.completed}
                                onChange = {()=> markCompleted(todo.id)}
                            />
                            
                            {/** edit functionality */}
                            {editId === todo.id ? (
                                <input
                                    value={editText}
                                    onChange= {(e) => setEditText(e.target.value)}
                                />
                            ) : (
                                <span style={{textDecoration : todo.completed ? "line-through" : "none"}}>{todo.tasks}</span>
                            )}
                            &nbsp;&nbsp;&nbsp;
                            {editId ===  todo.id ? (
                                <>
                                    <button onClick = {() => updateTask(todo.id)}>Save</button>
                                    &nbsp;&nbsp;
                                    <button onClick = { () => {
                                        setEditId(null);
                                        setEditText("");
                                    }}>Cancel</button>
                                </>
                            ) : (
                                <button onClick={() => {
                                    setEditId(todo.id);
                                    setEditText(todo.tasks);
                                }}>Edit</button>
                            )}
                            
                            &nbsp;&nbsp;&nbsp;
                            {/** delete task button */}
                            <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            &nbsp;&nbsp;

                            
                            
                        </li>
                    )
                })}
            </ul>
        </>
    );
}