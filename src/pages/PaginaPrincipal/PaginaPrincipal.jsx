import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import './principal.css';
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios"

//Post request to backend  to create a wating room



function PaginaPrincipal() {
    
    const {token} = useContext(AuthContext);

    const config = {
        'method' : 'get',
        'url' : `${API_URL}/scope/protecteduser`,
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
    }, [])
    
    console.log(logged);
    async function JoinWaitingRoom() {
        //user id
        var url = `${API_URL}/waitingrooms/join`;
        const requestOptions = { //Definimos Post
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: token})
          };
          console.log(requestOptions.body);
          const response = await fetch(url, requestOptions);
          console.log(response);
          const data = await response.json();
          console.log(data);
    };
    
  return (
    <main className="content">
      <div className="bg-container2"></div>
        <div className="content1">
            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br>
            <h1>Sobre el juego</h1>
            <p>Ludwar es un juego de estrategia que pondra a prueba tus habilidades como conquistador
            </p>
            <p>Se encuentra basado en el Ludo Clásico, pero incorporando una temática de Guerra y pequeñas variaciones
                que incluyen poderes y castigos, lo cual lo hará mas desafiante que cualquier otro juego que hayas visto
            </p>
            <div className="img-container">
                <img src="/ludo.png" className="img-title" />
            </div>
            <h1>Contexto</h1>
            <p> La fecha es 13 de Septiembre del año 2046. Las tensiónes entre las grandes potencias mundiales han escalado a tal punto que se desata
                una guerra nuclear.
            </p>
            <p> Sólo un tercio de la población mundial logró sobrevivir, y a un gran costo. La humanidad se vio obligada a retroceder tecnológicamente 
                al siglo X. Sin embargo, aún se pueden encontrar vesagios del mundo antiguo.
            </p>
            <p> Con la ausencia de cualquier tipo de gobierno o entidad oficial activa, distintos clanes se embarcan en una III guerra mundial para definir que tribu será la conquistadora
                de este nuevo mundo.
            </p>
            {logged ? (
            <Link className="play-button" to="/waiting_page" onClick={async () => await JoinWaitingRoom()}>
                Partida Rápida
            </Link>
            ) : (
            <>
            <Link className="play-button" to="/login_page">
                Iniciar Sesión
            </Link>
            <Link className="play-button" to="/signup_page">
                Registrarse
            </Link>
            </>
            )}
        </div>
    </main>
  )
}

export default PaginaPrincipal;