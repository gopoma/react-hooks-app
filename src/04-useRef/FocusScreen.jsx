import {useRef} from "react";

const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h3>Focus Screen</h3>
            <hr/>

            <input
                ref={inputRef} 
                type="text" 
                placeholder="Introduzca un textito..."
                className="form-control"
            />
            <button 
                onClick={onClick}
                className="btn btn-primary mt-2"
            >Set Focus</button>
        </>
    );
};

export default FocusScreen;