import React from "react";
import './sobre_nosotros.css'

function SobreNosotros() {
  return (
    <main className="content">
      <div className="bg-container1"></div>
      <div className="content">
        <br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <br></br><br></br>
        <h1> ¿Quiénes somos?</h1>
        <p>El grupo MiSt se encuentra conformado por los alumnos Diego Milla y Clemente Streeter del curso de Tecnologías y
          Aplicaciones Web de la Pontificia Universidad Católica de Chile
        </p>
        <p>Los docentes encargados son el profesor Antonio Ossa y el ayudante Matías Orbeta
        </p>
        <div class="container">
       
        <div class="card" id="alumno1">
            <img src="../../../src/assets/diego.jpg" className="img-title" />
            <h4>Diego Milla	</h4>
            <br></br>
            <p>Major Software</p>
            <p>Minor Industrial</p>
            <p>Generación 2020</p>
        </div>
        <div class="card" id="alumno2">
            <img src="../../../src/assets/clemente.jpeg" className="img-title" />
            <h4>Clemente Streeter</h4>
            <br></br>
            <p>Major Software</p>
            <p>Minor Industrial</p>
            <p>Generación 2020</p>
        </div>
        
    </div>
      </div>
    </main>
  )
}

export default SobreNosotros;