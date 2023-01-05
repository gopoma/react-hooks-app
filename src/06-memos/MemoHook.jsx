import {useMemo, useState} from "react";
import {useCounter} from "../hooks";

const heavyStuff = (iterations = 250) => {
    for(let i = 0; i < iterations; i++) {
        console.log("Working...");
    }
    return `${iterations} iteraciones realizadas`;
};

const MemoHook = () => {
    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(1250);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-outline-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
            >
                {show ? "Show" : "Hide"}
            </button>
            <code>Current Show Value: {JSON.stringify(show)}</code>
        </>
    );
};

export default MemoHook;