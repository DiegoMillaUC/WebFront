import React, {useContext, useState} from "react";
import './login.css'
import { AuthContext } from "../Auth/AuthContext";

const LogoutButton = () => {
    const {logout} = useContext(AuthContext);
    const [msg, setMsg] = useState("Seguro que quieres cerrar sesión?");

    const handleLogout = () => {
        logout();
        setMsg("Sesión cerrada");
        window.location.href = "/landing_page";
    }

    return (
        <main className="content">
        <div className="bg-container2"></div>
            <div className="content1">
                {msg.length > 0 && <div className="successMsg"> {msg} </div>}
                <button onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>
        </main>
    );
}

export default LogoutButton;