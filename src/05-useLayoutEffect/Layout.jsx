import {LoadingQuote, Quote} from "../03-HookCommunication";
import {useCounter, useFetch} from "../hooks";

const Layout = () => {
    const {counter, increment, decrement, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const character = !!data && data[0];

    return (
        <>
            {
                isLoading 
                 ? <LoadingQuote/> 
                 : <Quote message={character.location.name} name={character.name}/>
            }
            <button 
                className="btn btn-primary"
                disabled={isLoading || counter === 1}
                onClick={() => decrement()}
            >Previous Character</button>
            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}
            >Next Character</button>
        </>
    );
};

export default Layout;