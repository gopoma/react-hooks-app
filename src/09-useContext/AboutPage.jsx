import {useContext} from "react";
import {UserContext} from "./context/UserContext";

export const AboutPage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <h1>AboutPage</h1>
            <code>{JSON.stringify(user)}</code>
        </>
    );
};