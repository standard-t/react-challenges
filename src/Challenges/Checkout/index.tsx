import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";



export default function Checkout() {

    const [itemsInPersonCart, setItemsInPersonCart] = useState(0);
    const [lines, setLines] = useState([[10, 5, 2], [1], [2], [3], [4]]);

    function addPersonToLine(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let leastItemsAmount = 1e9;
        let lineWithLeast: number[] | undefined = undefined;

        for (let line of lines) {
            const totalInLine = line.reduce((sum, value) => sum + value, 0);
            if (totalInLine < leastItemsAmount) {
                leastItemsAmount = totalInLine;
                lineWithLeast = line;
            }
            // add together items in the line 
            // check if the items in the line are less than the current shortest line 
            // if so, set it to the shortest line otherwise move on 

        }
        if (!lineWithLeast) return;
        // add the item to the shortest line
        setLines((prevLines) => prevLines.map((line) =>
            line === lineWithLeast ?
                [...line, itemsInPersonCart] :
                line
        ));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLines((prevLines) =>
                prevLines.map((line) =>
                    [line[0] - 1, ...line.slice(1)].filter((value) => value >= 0)
                )
            );
        }, 1500);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <h2>Checkout</h2>
            <div className="checkout">
                <form id="checkout-form" onSubmit={addPersonToLine}>
                    <input required type="number" value={itemsInPersonCart} onChange={(e) => setItemsInPersonCart(e.currentTarget.valueAsNumber)} ></input>
                    <Button type="submit" className="m-1">Checkout</Button>
                </form>
                <div className="lines">
                    {lines.map(
                        (line, idx) => (
                            <div className="line" key={idx}>{line.map((numberOfItems) => (
                                <div>{numberOfItems}</div>
                            ))}</div>
                        )
                    )
                    }
                </div>
            </div>
        </>
    );
}
