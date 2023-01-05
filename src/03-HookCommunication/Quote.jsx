import PropTypes from "prop-types";
import {useLayoutEffect, useRef, useState} from "react";

const Quote = ({message, name}) => {
    const pRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setDimensions({width, height});
    }, []);

    return (
        <blockquote 
            className="blockquote text-end"
            style={{display:"flex"}}
        >
            <p ref={pRef}>{message}</p>
            <footer className="blockquote-footer">{name}</footer>
            <code>{JSON.stringify(dimensions)}</code>
        </blockquote>
    );
}

Quote.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Quote;