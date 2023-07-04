import React from "react";
import { Link } from "react-router-dom";
import './landing.css'

function LandingPage() {
  return (
    <main className="content">
      <div className="img-container">
        <img src="/logo.png" className="img-title" />
      </div>
      <div className="bg-container"></div>
        <div className="content2">
            <h1>Bienvenido a Ludwar</h1>
            <h5>El mejor juego de guerra y estrategia</h5>
            <Link className="play-button" to="/pagina_principal">
                A jugar!
            </Link>
        </div>
    </main>
  )
}

export default LandingPage;