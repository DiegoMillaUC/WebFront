import React, {useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../pages/Auth/AuthContext";
import axios from "axios"

function Navbar() {
    const {token} = useContext(AuthContext);

    const config = {
        'method' : 'get',
        'url' : 'http://localhost:5000/scope/protecteduser',
        'headers' : {
            'Authorization' : 'Bearer ' + token
        }
    };

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        axios(config).then((response) => {
            console.log("bien");
            setLogged(true);
            console.log(response);
        }).catch((error) => {
            console.log("mal");
            setLogged(false);
            console.log(error);
        })
    }, [])
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src="/logo.png" alt="logo-image" className="logo-image" />
                <span className="name title"> LudWar </span>
            </NavLink>
            <ul className="navbar-links-container">
                { logged ? (
                    <>
                    <li className="navbar-element">
                        <NavLink to="/pagina_principal" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="navbar-element"> 
                        <NavLink to="reglas" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Reglas
                        </NavLink>
                    </li>
                    <li className="navbar-element">
                        <NavLink to="sobre_nosotros" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Sobre Nosotros
                        </NavLink>    
                    </li>
                    <li className="navbar-element">
                        <NavLink to="/logout" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Logout
                        </NavLink>    
                    </li>
                    </>
                ) : (
                    <>
                    <li className="navbar-element">
                        <NavLink to="/pagina_principal" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="navbar-element"> 
                        <NavLink to="reglas" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Reglas
                        </NavLink>
                    </li>
                    <li className="navbar-element">
                        <NavLink to="sobre_nosotros" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                            Sobre Nosotros
                        </NavLink>    
                    </li>
                    </>
                )}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;