import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import './login.css';
import axios from 'axios';
import { AuthContext } from "../Auth/AuthContext";
import API_URL from "../../config";

function LoginPage() {
    const {token, setToken} = useContext(AuthContext);
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("GHJ");

        axios.post(`${API_URL}/auth/login`, 
        {
            mail,
            password
        }).then((response) => {
            console.log(response)

            const access_token = response.data.acces_token;
            setToken(access_token);
            window.location.href = "/pagina_principal";

        }).catch((error) => {
            console.log(error)
            window.location.href = "/login_page";
        })


    };
    /*async function sendinfo(mail, password){
        console.log("W");
        console.log(mail);
        console.log(password);
        var url = 'http://localhost:5000/auth/login';
        const requestOptions = { //Definimos Post
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({mail: mail, password: password})
        };
        console.log(requestOptions.body);
        const response = await fetch(url, requestOptions);
        console.log(response);
        if (response.status == 200){
            window.location.href = "/pagina_principal";
        };
        const data = await response.json();
        console.log(data);
        return;
    }*/
    return (
        <main className="content">
        <div className="bg-container2"></div>
            <div className="content1">
                <h1>Ingresa datos</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Mail:
                        <input 
                        type="mail"
                        name="mail"
                        value={mail}
                        onChange={e => setEmail(e.target.value)}
                        required
                        />
                        </label>
                    <br></br>
                    <label>
                        Password:
                        <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        />
                        </label>
                    <br></br>
                    <input type="submit" value="Enviar" />

                </form>
            </div>
        </main>
    )
};


export default LoginPage;