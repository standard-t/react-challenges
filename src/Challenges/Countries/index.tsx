import { useState } from "react";


type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
    value: string;
    state: ButtonState;
};



export default function Countries() {

    function CountryCapitalGame({ data }: { data: Record<string, string> }) {
        const countries = Object.keys(data);
        const capitals = Object.values(data);
        const [options, setOptions] = useState<Option[]>(
            [...countries, ...capitals]
                .map((value) => ({
                    value,
                    state: "DEFAULT"
                })).sort(() => Math.random() - 0.5) as Option[]
        );

        const [selected, setSelected] = useState<Option>();
        const isGameOver = options.length === 0;

        if (isGameOver) {
            return <div><h4>You Win!</h4></div>
        }

        return <>{options.map((option) => (<button key={option.value} onClick={() => {
            if (!selected) {
                setSelected(option);
                setOptions(options.map((opt) => {
                    return opt === option ? {
                        ...opt,
                        state: "SELECTED"
                    } : { ...opt, state: 'DEFAULT' };
                }))
            } else {
                if (selected.value === data[option.value] ||
                    data[selected.value] === option.value
                ) {
                    setOptions(options.filter((opt) => {
                        return !(opt.value === selected.value || opt.value === option.value)
                    }))
                } else {
                    setOptions(options.map((opt) => {
                        return (opt.value === selected.value || opt.value === option.value) ? { ...opt, state: 'WRONG' } : opt;
                    }))
                }

                setSelected(undefined);
            }
        }} className={option.state === 'SELECTED' ? "selected" : option.state === 'WRONG' ? "wrong" : "default"}>{option.value}</button>))}</>
    }

    return (
        <div>
            <h2>Countries</h2>
            <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku", USA: "Washington DC", Austria: "Vienna", China: "Beijing", Russia: "Moscow", England: "London", Ireland: "Dublin", Italy: "Rome", France: "Paris", Chile: "Santiago", Equador: "Quito", Egypt: "Cairo", Greece: "Athens", Japan: "Tokyo", Lebanon: "Beirut" }} />
        </div>
    )
}