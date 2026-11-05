import { useState } from "react";

export default function Password() {
    const [password, setPassword] = useState(false);

    let togglePassword = () => {
        setPassword(!password);
    }
    return (
        <>
            <h2>Password Example</h2>
            <input type= { password ? "text" : "password"} placeholder = "Enter password"/>
            
            <button onClick={togglePassword}>{ password ? "Hide password" : "Show password"}</button>
        </>
    )
}