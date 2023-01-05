import { Hijo } from './Hijo'
import { useCallback, useMemo, useState } from 'react';

const heavyStuff = (iterations = 250) => {
    console.log("Entered!");
    for(let i = 0; i < iterations; i++) {
        console.log("Working...");
    }
    return `${iterations} iteraciones realizadas`;
};

export const Padre = () => {
    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
        setValor((v) => v + num);
    }, []);

    const memorizedStuff = useMemo(() => heavyStuff(valor), [valor]);

    const [foo, setFoo] = useState(true);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>
            <h3>{memorizedStuff}</h3>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
            <button
                className="btn btn-outline-primary"
                onClick={() => setValor(valor + 1)}
            >
                Increment +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setFoo(!foo)}
            >
                {foo ? "Foo :D" : "Not Foo :c"}
            </button>
        </div>
    )
}
