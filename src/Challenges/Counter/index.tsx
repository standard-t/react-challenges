import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrease() {
        setCount(count + 1);
    }
    function handleDecrease() {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Counter</h2>
            <h4>Count: {count}</h4>
            <Button className="btn-success m-1" onClick={handleIncrease}>Increase Count</Button>
            <Button className="btn-danger m-1" onClick={handleDecrease}>Decrease Count</Button>
        </div >
    )
}