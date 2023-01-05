import {useEffect, useState} from "react";

const Message = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        console.log(coords);
    }, [coords]);

    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            setCoords({x, y});
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="alert alert-danger">Usuario ya registrado!</div>
    );
};

export default Message;