import { useEffect, useState } from "react";


export default function Passcode() {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const password = "2809";
    const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);
    const [error, setError] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        if (pressedNumbers.length === 1) {
            setError("");
        }
        if (pressedNumbers.length === 4) {
            if (pressedNumbers.join("") === password) {
                setIsCorrect(true);
            } else {
                setError("Incorrect Password");
                setPressedNumbers([]);
            }
        }
    }, [pressedNumbers]);

    return (
        <div>
            <h2>Passcode</h2>
            {isCorrect ? <div><h4>Successful Login</h4></div> :
                <div>
                    <p>The Passcode is 2809</p>
                    {error}
                    <br />
                    {numbers.map((number) => <button className="numbers" onClick={() => setPressedNumbers((curr) => [...curr, number])}>{number}</button>)}
                </div>}
        </div>
    )
}