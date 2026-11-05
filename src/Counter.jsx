import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(10);

    let increaseCount = () => {
        setCount(count + 5);
    }

    let decreaseCount = () => {
        setCount(count - 2);
    }
    let resetCount = () => {
        setCount(10);
    }
    return (
        <div className= "counter">
            <h1>Counter App</h1>
            <h2 className="count">Counter: {count} </h2>

            <div className="buttons">
                <button onClick={decreaseCount} className="decrease">Decrease count</button>
                &nbsp;&nbsp;
                <button onClick={resetCount} className="reset">Reset count</button>
                &nbsp;&nbsp;
                <button onClick={increaseCount} className="increase">Increase count</button>
            </div>
        </div>
    )
}