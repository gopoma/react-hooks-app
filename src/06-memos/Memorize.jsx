import {useState} from "react";
import Small from "./Small";
import {useCounter} from "../hooks";

const Memorize = () => {
    const [show, setShow] = useState(true);
    const {counter, increment} = useCounter(12);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>

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

export default Memorize;