import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function StudentList() {
    const [students, setStudents] = useState(
        {id: uuidv4(), name: "Hardik"},
        {id: uuidv4(), name: "Vanshu"}
    )

    const addStudent = () => {
        const newStudent = {id: uuidv4(), name: "New Student"};
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    }

    const deleteStudent =(id) => {
        setStudents((prevStudents) => prevStudents.filter((student)=> student.id !== id));
    }

    return(
        <>
            <h1>Student List</h1>
            {students.map((student) => {
                return <li key= {student.id}>{student.name}
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </li>
                
            })}
            <button onClick={addStudent}>Add Student</button>
        </>
    )
}

export default StudentList;