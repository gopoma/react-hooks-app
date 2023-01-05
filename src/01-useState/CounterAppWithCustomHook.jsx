import useCounter from "../hooks/useCounter";

const CounterAppWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter(12);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
            <button className="btn btn-primary" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        </>
    );
};

export default CounterAppWithCustomHook;