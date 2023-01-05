import {useState, useEffect} from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "gopoma",
        email: "gopoma@gmail.com",
    });
    const {username, email} = formState;

    const onInputChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        // console.log("useEffect");
    }, []);

    useEffect(() => {
        // console.log("form changed");
    }, [formState]);

    useEffect(() => {
        // console.log("email");
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <input 
                type="text"
                name="username"
                placeholder="Username..."
                value={username}
                onChange={onInputChange}
                className="form-control"
            />
            <input 
                type="text"
                name="email"
                placeholder="Email..."
                value={email}
                onChange={onInputChange}
                className="form-control mt-2"
            />

            {username === "gopoma25" && <Message/>}
        </>
    );
};

export default SimpleForm;