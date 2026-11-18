import {useState, useEffect} from 'react';

function UserProfile() {
    
    const[name, setName] = useState("Hardik");
    const [age, setAge] = useState(21);

    useEffect(() => {
        console.log("Name Changed: ", name);
    }, [name]);

    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>

            <button onClick={() => setName("Vanshu")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Change Age</button>
        </>
    );
};

export default UserProfile;
