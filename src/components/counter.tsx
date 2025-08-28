import { useState } from "react";
import "./counter.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

export { Counter };