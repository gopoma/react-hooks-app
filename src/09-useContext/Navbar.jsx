import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

export const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <button 
                    className="navbar-toggler" 
                    type="button"
                    onClick={() => setShow(!show)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${(show) ? "show" : ""}`}>
                    <div className="navbar-nav">
                        <NavLink 
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/login"
                        >
                            Login
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-link ${(isActive) ? "active" : ""}`}
                            to="/about"
                        >
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};