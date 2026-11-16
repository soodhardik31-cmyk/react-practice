import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function StudentList() {
    const [students, setStudents] = useState([
        {id: uuidv4(), name: "Hardik"},
        {id: uuidv4(), name: "Vanshu"}
    ]);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");

    //add student
    const addStudent = () => {
        const newStudent = {id: uuidv4(), name: "Aman"};
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    }
    //delete student
    const deleteStudent =(id) => {
        setStudents((prevStudents) => prevStudents.filter((student)=> student.id !== id));
    }

    const handleEdit = (student) => {
        setEditingId(student.id);
        setName(student.name);
    }
    //update student
    const updateStudent = (id, newName) => {
        setStudents((prevStudents) => prevStudents.map((student) =>
            student.id === id
            ? {...student, name: newName}
            : student
        ))
    }

    return(
        <>
            <h1>Student List</h1>
            {students.map((student) => {
                return <li key= {student.id}>{student.name}

                {}
                <input value={editName} onChange = {(e) => setEditName(e.target.value)}/>
                <button onClick={() => {
                    setEditingId(student.id);
                    setEditName(student.name);
                }}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                
                </li>
                
            })}
            <button onClick={addStudent}>Add Student</button>
        </>
    )
}

export default StudentList;