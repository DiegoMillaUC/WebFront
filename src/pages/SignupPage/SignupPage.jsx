import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import './signup.css';
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios"

function SignupPage() {
    const {token, setToken} = useContext(AuthContext);
    const [mail, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("GHJ");

        axios.post('https://graceful-maamoul-7aee5e.netlify.app:5000/auth/signup', 
        {
            mail: mail,
            username: username, 
            password: password
        }).then((response) => {
            console.log(response)
            setError(false);
            window.location.href = "/login_page";
        }).catch((error) => {
            console.log(error)
            setError(true);
            window.location.href = "/signup_page";
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
                        Username:
                        <input 
                        type="username"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
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



export default SignupPage;