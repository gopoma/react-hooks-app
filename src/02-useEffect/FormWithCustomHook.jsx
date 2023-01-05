import {useForm} from "../hooks";

const FormWithCustomHook = () => {
    const {formState, onInputChange, onFormReset, username, email, password} = useForm({
        username: "",
        email: "",
        password: ""
    });

    return (
        <>
            <h3>Form with Custom Hook</h3>
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
            <input 
                type="password"
                name="password"
                placeholder="Password..."
                value={password}
                onChange={onInputChange}
                className="form-control mt-2"
            />
            <button onClick={onFormReset} className="btn btn-primary mt-2">Borrar</button>
        </>
    );
};

export default FormWithCustomHook;