import {useEffect, useState} from "react";
import sleep from "../utils/sleep";

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });

        await sleep(500);
        const response = await fetch(url);
        const data = await response.json();

        setState({
            data: [data],
            isLoading: false,
            hasError: null
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};

export default useFetch;