import {useState} from "react";

const CounterApp = () => {
    const [state, setState] = useState({
        counter: 10,
        counter2: 20,
        counter3: 30
    });
    const {counter, counter2, counter3} = state;
    const handleClick = () => {
        setState({
            ...state,
            counter: counter + 1
        });
    };

    return (
        <>
            <code>{JSON.stringify(state)}</code>
            <h2>{counter}</h2>
            <h2>{counter2}</h2>
            <h2>{counter3}</h2>

            <hr/>

            <button 
                className="btn"
                onClick={handleClick}
            >+1</button>
        </>
    );
};

export default CounterApp;