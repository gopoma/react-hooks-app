import {useContext} from "react";
import {UserContext} from "./context/UserContext";

export const LoginPage = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <code>{JSON.stringify(user, null, 3)}</code>
            <button
                className="btn btn-outline-primary"    
                onClick={() => setUser({
                    id: 13,
                    username: "gopoma",
                    email: "gopoma@gmail.com"
                })}
            >
                Establecer Usuario
            </button>
        </>
    );
};