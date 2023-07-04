import React, {useState, useEffect, useContext} from "react";
import { Link} from "react-router-dom";
import './waitingpage.css';
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
//import { Prompt } from 'react-router';
//import {useHistory} from 'react-router-dom';

function WaitingPage() {

    const {token} = useContext(AuthContext);

    async function Leavewatingroom (){
        var url = 'https://graceful-maamoul-7aee5e.netlify.app/waitingrooms/leave';
        const requestOptions = { //Definimos Post
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: token})
        };
        const response = await fetch(url, requestOptions);
        
        const data = await response.json();
        console.log("WER");
    };

    let route = null;
    var cont = 0;

    const config = {
        'method' : 'get',
        'url' : 'https://graceful-maamoul-7aee5e.netlify.app/scope/protecteduser',
        'headers' : {
            'Authorization' : 'Bearer ' + token
        }
    };

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        axios(config).then((response) => {
            console.log("bien");
            setLogged(true);
        }).catch((error) => {
            console.log("mal");
            setLogged(false);
            console.log(error);
        })
        return () => {
            if (route == "/game_page" || cont == 0){
                console.log("Game");
                cont = 1;
            } else {
                console.log("No game");
                Leavewatingroom();
            }
        };
    }, []);


    async function Checkplayers(){
        var url = 'https://graceful-maamoul-7aee5e.netlify.app/waitingrooms/full';
        const requestOptions = { //Definimos Post
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: token})
        };
        const response = await fetch(url, requestOptions);
        
        const data = await response.json();
        console.log(data);
        if (data == 1){
            console.log("Jugadores listos");
            route = "/game_page";
            window.location.href = "/game_page";
            console.log("EEEE");
        }
    };

    const [count, setCount] = useState(0);
    //route = "not";
    useEffect(() => {
        const interval = setInterval(() => {
            const response = Checkplayers();
    }, 1000);
    return () => clearInterval(interval);
    }, []);


    return (
        <main className="content">
        <div className="bg-container2"></div>
            <div className="content1">
                <h1>ESPERANDO PARTIDA</h1>
            </div>
            
        </main>
    )
    
};

export default WaitingPage;