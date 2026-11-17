import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function StudentList() {
    //state variable to hold the list of students
    const [students, setStudents] = useState([
        {id: uuidv4(), name: "Hardik"},
        {id: uuidv4(), name: "Vanshu"}
    ]);
    //state variable to hold the name of the new student to be added to the list
    const [name, setName] = useState("");
    const [editingId, setEditingId] = useState(null);

    //Add a new Student to a List
    const addStudent =() => {
        if(name.trim() === "") {
            return; // Do not add empty names.
        }
        const newStudent = {
            id: uuidv4(),
            name: name
        };
        setStudents((prevStudents) => {
            return [...prevStudents, newStudent]
        });
        setName(""); // Clear the input field after adding a student.
    };

    //Delete a student from the list
    const deleteStudent =(id) => {
        setStudents((prevStudents) => {
            return prevStudents.filter((student)=> student.id !== id);
        });
    };

    //edit a student from the list
    const editStudent = (student) => {
        setEditingId(student.id);
        setName(student.name);
    };

    //update a student in a list
    const updateStudent =()=> {
        if(name.trim() === "") {
            return; // Do not update to an empty name.
        }
        const updatedStudents = students.map((student) => {
            if(student.id === editingId){
                return {...student, name: name};
            }
            return student;
        });

        setStudents(updatedStudents);
        setEditingId(null);
        setName("");
    };


    return (
        <>
            <h1>Student Management System</h1>
            <input
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {editingId ? (
                <button onClick={updateStudent}>Update Student</button>
            ) : (
                <button onClick={addStudent}>Add Student</button>
            )}
            <ul>
                {/* Rendering or displaying the List of Students */}
                {students.map((student) => {
                    return(<li key={student.id}>{student.name}
                        <button onClick={()=> deleteStudent(student.id)}>Delete</button>
                        <button onClick={() => editStudent(student)}>Edit</button>
                    </li>)
                })}
            </ul>
        </>
    );
};

export default StudentList;