import {UserProvider} from "./context/UserProvider"
import {Navigate, Routes, Route} from "react-router-dom";
import {Navbar, HomePage, LoginPage, AboutPage} from "./";

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar/>

            <hr/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="about" element={<AboutPage/>}/>

                {/* <Route path="/*" element={<h1>Not Found</h1>}/> */}
                <Route path="/*" element={<Navigate to="login"/>}/>
            </Routes>
        </UserProvider>
    );
};