import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function StudentList() {
    const [students, setStudents] = useState([
        { id: uuidv4(), name: "Hardik"},
        { id: uuidv4(), name: "Vanshu"}
    ]);

    let addStudent = ()=> {
        let newStudent = {id: uuidv4(), name: "Aman"};
        setStudents((prevStudents)=> [...prevStudents, newStudent]);
    }

    let deleteStudent = (id => {
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    })

    return (
        <>
            <h3>Student List</h3>
            <ul>
                {students.map((student) => {
                    return <li key={student.id}>{student.name}
                    <button onClick={() => deleteStudent(student.id)}>Delete</button></li>;
                })}
            </ul>
            <button onClick={addStudent}>Add Student</button>
            
        </>
    )
}