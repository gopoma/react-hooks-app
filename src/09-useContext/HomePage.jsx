import {useContext} from "react";
import {UserContext} from "./context/UserContext";

export const HomePage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>HomePage | { (user) ? `Bienvenido ${user.username}` : "" }</h1>
            <code>{JSON.stringify(user)}</code>
        </>
    );
};