import {useCallback, useEffect, useState} from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
    const [counter, setCounter] = useState(12);

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // };

    const incrementFather = useCallback((inc) => {
        setCounter((cc) => cc + inc);
    }, []);

    // useEffect(() => {
    //     incrementFather();
    // }, [incrementFather]);

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementFather}/>
        </>
    );
};

export default CallbackHook;