import React, { useEffect, useState } from "react";
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import './reglas.css';

const images1 = [img1, img2];
const images2 = [img3, img4];
const images3 = [img5, img6];
const images4 = [img7, img8];


export default function Reglas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images1.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 1500)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])

  return (
    <main>
    <div className="bg-container1"></div>
    <div className="info-container">
    <div className="img-container">
      <img src="/logo.png" className="img-title" />
    </div>
    <div className="description">
      <h1>Reglas</h1>
    </div>
    </div>
    <div className="content">
        <h4>1. Un soldado puede eliminar a otro cayendo directamente en su casilla, así, el soldado eliminado tendrá que volver a su base</h4>
        <img src={images2[currentIndex]} className="img-dinamic"/>
        <h4>2. Para poder ingresar a la línea de victoria, el soldado tuvo que haber recorrido todo el camino del tablero anteriormente</h4>
        <h4>3. Si un soldado cae en una casilla de comodín, se generará un poder aleatoriamente que permita eliminar automáticamente al soldado enemigo más cercano adelante en el tablero o avanzar 10 casillas</h4>
        <h4>4. Si un soldado cae en una casilla de eliminación, se generará un castigo aleatoriamente que puede ser que el jugador pierda el siguiente turno o retroceder 10 casillas</h4>
        <h4>5. Si un soldado cae en una casilla donde se encuentran dos enemigos, el que cae resulta eliminado por los otros dos y debe volver a su base</h4>
        <h4>6. El primer jugador en tener a todos sus soldados en la zona de victoria, será el ganador de la partida y según la cantidad de soldados en la victoria se determina las otras posiciones</h4>
        <img src={images3[currentIndex]} className="img-dinamic" />
    </div>

    
    <div className="info-container">
    <div className="img-container">
      <img src="/logo.png" className="img-title" />
    </div>
    <div className="description">
      <h1>Movimientos</h1>
    </div>
    </div>
    <div className="content">
        <h4>1. Los soldados que se encuentran en la base deben permanecer en esa posición hasta que el jugador pueda sacarlos</h4>
        <h4>2. Cada jugador debe obtener un 6 en su turno para poder sacar a un soldado de su base, luego lanza el dado nuevamente para determinar cuántas casillas avanza y podrá avanzar sólo si se encuentra libre su primer casilla</h4>
        <img src={images1[currentIndex]} className="img-dinamic"/>
        <h4>3. Si el jugador lanza el dado y obtiene entre 1 y 5, puede mover un soldado del tablero, en el caso que no posea ningún soldado en juego, pierde su turno</h4>
        <img src={images4[currentIndex]} className="img-dinamic"/>
    </div>

    <div className="info-container">
    <div className="img-container">
      <img src="/logo.png" className="img-title" />
    </div>
    <div className="description">
      <h1>Elementos del juego</h1>
    </div>
    </div>
    <div className="content">
        <h4>1. Cada clan (equipo) está compuesto por 4 valientes soldados (4 fichas)</h4>
        <h4>2. Cada clan tiene un color oficial asignado</h4>
        <h4>3. Existen dos casillas de castigo</h4>
        <h4>4. Existen dos casillas de poder</h4>
        <h4>5. Existe una linea de victoria para cada clan</h4>

    </div>
    </main>
  )
}