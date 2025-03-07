import { useState } from "react";
import { Button } from "react-bootstrap";

type TPoint = {
    x: number;
    y: number;
};

export default function Circles() {

    const [points, setPoints] = useState<TPoint[]>([]);
    const [popped, setPopped] = useState<TPoint[]>([]);

    function handlePlaceCircle(e: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY } = e;
        setPoints([...points, { x: clientX, y: clientY },])
    };

    function handleUndo() {
        const newPoints = [...points];
        const poppedPoint = newPoints.pop();
        if (!poppedPoint) return;
        setPopped([...popped, poppedPoint]);
        setPoints(newPoints);
    };

    function handleRedo() {
        const newPopped = [...popped];
        const poppedPoint = newPopped.pop();
        if (!poppedPoint) return;
        setPoints([...points, poppedPoint]);
        setPopped(newPopped);

    }



    return (
        <>
            <h2>Circles</h2>
            <p> click anywhere to place a circle!</p>
            <Button className="m-1" disabled={points.length === 0} onClick={handleUndo}>Undo</Button>
            <Button className="m-1" disabled={popped.length === 0} onClick={handleRedo}>Redo</Button>
            <div className="full-screen" onClick={handlePlaceCircle} >
                {points.map(point => <div className="point" style={{ left: point.x - 10 + "px", top: point.y - 10 + "px" }}></div>)}
            </div>
        </>

    );
}