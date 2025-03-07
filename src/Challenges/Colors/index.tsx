import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Colors() {

    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<boolean | undefined>(undefined);

    const getRandomColor = () => {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("");
        return `#${color}`;

    }

    const generateColors = () => {
        const actualColor = getRandomColor();
        setColor(actualColor);
        setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()));
    }

    useEffect(() => {
        generateColors();
    }, []);

    const handleAnswerClicked = (answer: string) => {
        if (answer === color) {
            setResult(true);
            generateColors();
        } else {
            setResult(false);
        }
    }

    return (
        <div>
            <h2>Color Guess</h2>
            <br />
            <div className="colors-main">
                <div className="guess-me" style={{ background: color }}></div>
            </div>
            <div className="colors-main" >
                {answers.map(answer => (<Button key={answer} onClick={() => handleAnswerClicked(answer)} className="btn-secondary m-3">{answer}</Button>))}
            </div>
            {result === false && <div className="colors-main">Wrong Answer</div>}
            {result === true && <div className="colors-main">Correct!</div>}
        </div>

    )
}