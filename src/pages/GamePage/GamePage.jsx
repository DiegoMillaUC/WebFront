import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import backgroundImage from './images/board.jpg';
import squareImage2 from './images/square.png';
import pieceImage1 from './images/piece_1.png';
import pieceImage2 from './images/piece_2.png';
import pieceImage3 from './images/piece_3.png';
import pieceImage4 from './images/piece_4.png';
import { AuthContext } from "../Auth/AuthContext";

const LudoGame = () => {
    

  return (
    <div>
      <LudoBoard></LudoBoard>
    </div>
  );
};

const LudoBoard = () => {

  const {token} = useContext(AuthContext);

  const config = {
    'method' : 'get',
    'url' : 'http://localhost:5000/scope/protecteduser',
    'headers' : {
        'Authorization' : 'Bearer ' + token
    }
    };

  const [piecesPositions, setPiecesPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gameInfo, setGameInfo] = useState({});
  const [turn, setTurn] = useState(0);

  const [logged, setLogged] = useState(false);
  const [userId, setUserId] = useState(0);
  const [gameId, setGameId] = useState(0);
  const [player, setPlayer] = useState({});
  const [myTurn, setMyTurn] = useState(false);
  const [numMoves, setnumMoves] = useState(0);
  const [posibleMoves, setPosibleMoves] = useState([]);
  const [played, setPlayed] = useState(true);

  useEffect(() => {
        axios(config).then((response) => {
            setUserId(parseInt(response['data']['user']['sub']));
            setLogged(true);
        }).catch((error) => {
            setLogged(false);
            console.log(error);
        })
    }, [])

  useEffect(() => {
        axios.get(`http://localhost:5000/games/last/game`)
        .then(response => {
            setGameId(parseInt(response.data['id']));
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

  const renderPiece = (pieceId, position) => {
    //const pieceImage = require(`./images/piece_${pieceId}.png`).default;
    if ([...Array(4)].map((_, i) => 1 + i).includes(pieceId)){
        var pieceImage = `${pieceImage1}`;
    }else if ([...Array(4)].map((_, i) => 5 + i).includes(pieceId)){
        var pieceImage = `${pieceImage2}`;
    }else if ([...Array(4)].map((_, i) => 9 + i).includes(pieceId)){
        var pieceImage = `${pieceImage3}`;
    }else{
        var pieceImage = `${pieceImage4}`;
    }
    const style = {
      position: 'absolute',
      top: position.top,
      left: position.left,
      width: '40px',
      height: '40px',
    };

    return <img src={pieceImage} alt={`Piece ${pieceId}`} data-id={pieceId} style={style} onClick={handleClick} />;
  };

  const returnSquares = () => {
    const squares = {
      1: [60, 60],
      2: [60, 140],
      3: [140, 60],
      4: [140, 140],
      5: [60, 420],
      6: [60, 500],
      7: [140, 420],
      8: [140, 500],
      9: [420, 420],
      10: [420, 500],
      11: [500, 420],
      12: [500, 500],
      13: [420, 60],
      14: [420, 140],
      15: [500, 60],
      16: [500, 140],
      17: [240, 40],
      18: [240, 80],
      19: [240, 120],
      20: [240, 160],
      21: [240, 200],
      22: [200, 240],
      23: [160, 240],
      24: [120, 240],
      25: [80, 240],
      26: [40, 240],
      27: [0, 240],
      28: [0, 280],
      29: [0, 320],
      30: [40, 320],
      31: [80, 320],
      32: [120, 320],
      33: [160, 320],
      34: [200, 320],
      35: [240, 360],
      36: [240, 400],
      37: [240, 440],
      38: [240, 480],
      39: [240, 520],
      40: [240, 560],
      41: [280, 560],
      42: [320, 560],
      43: [320, 520],
      44: [320, 480],
      45: [320, 440],
      46: [320, 400],
      47: [320, 360],
      48: [360, 320],
      49: [400, 320],
      50: [440, 320],
      51: [480, 320],
      52: [520, 320],
      53: [560, 320],
      54: [560, 280],
      55: [560, 240],
      56: [520, 240],
      57: [480, 240],
      58: [440, 240],
      59: [400, 240],
      60: [360, 240],
      61: [320, 200],
      62: [320, 160],
      63: [320, 120],
      64: [320, 80],
      65: [320, 40],
      66: [320, 0],
      67: [280, 0],
      68: [240, 0],
      69: [280, 40],
      70: [280, 80],
       // ... Add other square positions
    };
  
    return squares;
  };
  


  const renderSquares = () => {
    const squares = [
        { id: 1, position: { top: '60px', left: '60px' } },
        { id: 2, position: { top: '60px', left: '140px' } },
        { id: 3, position: { top: '140px', left: '60px' } },
        { id: 4, position: { top: '140px', left: '140px' } },
        { id: 5, position: { top: '60px', left: '420px' } },
        { id: 6, position: { top: '60px', left: '500px' } },
        { id: 7, position: { top: '140px', left: '420px' } },
        { id: 8, position: { top: '140px', left: '500px' } },
        { id: 9, position: { top: '420px', left: '60px' } },
        { id: 10, position: { top: '420px', left: '140px' } },
        { id: 11, position: { top: '500px', left: '60px' } },
        { id: 12, position: { top: '500px', left: '140px' } },
        { id: 13, position: { top: '420px', left: '420px' } },
        { id: 14, position: { top: '420px', left: '500px' } },
        { id: 15, position: { top: '500px', left: '420px' } },
        { id: 16, position: { top: '500px', left: '500px' } },        
        { id: 17, position: { top: '240px', left: '40px' } },
        { id: 18, position: { top: '240px', left: '80px' } },
        { id: 19, position: { top: '240px', left: '120px' } },
        { id: 20, position: { top: '240px', left: '160px' } },
        { id: 21, position: { top: '240px', left: '200px' } },
        { id: 22, position: { top: '200px', left: '240px' } },
        { id: 23, position: { top: '160px', left: '240px' } },
        { id: 24, position: { top: '120px', left: '240px' } },
        { id: 25, position: { top: '80px', left: '240px' } },
        { id: 26, position: { top: '40px', left: '240px' } },
        { id: 27, position: { top: '0px', left: '240px' } },
        { id: 28, position: { top: '0px', left: '280px' } },
        { id: 29, position: { top: '0px', left: '320px' } },
        { id: 30, position: { top: '40px', left: '320px' } },
        { id: 31, position: { top: '80px', left: '320px' } },
        { id: 32, position: { top: '120px', left: '320px' } },
        { id: 33, position: { top: '160px', left: '320px' } },
        { id: 34, position: { top: '200px', left: '320px' } },
        { id: 35, position: { top: '240px', left: '360px' } },
        { id: 36, position: { top: '240px', left: '400px' } },
        { id: 37, position: { top: '240px', left: '440px' } },
        { id: 38, position: { top: '240px', left: '480px' } },
        { id: 39, position: { top: '240px', left: '520px' } },
        { id: 40, position: { top: '240px', left: '560px' } },
        { id: 41, position: { top: '280px', left: '560px' } },
        { id: 42, position: { top: '320px', left: '560px' } },
        { id: 43, position: { top: '320px', left: '520px' } },
        { id: 44, position: { top: '320px', left: '480px' } },
        { id: 45, position: { top: '320px', left: '440px' } },
        { id: 46, position: { top: '320px', left: '400px' } },
        { id: 47, position: { top: '320px', left: '360px' } },
        { id: 48, position: { top: '360px', left: '320px' } },
        { id: 49, position: { top: '400px', left: '320px' } },
        { id: 50, position: { top: '440px', left: '320px' } },
        { id: 51, position: { top: '480px', left: '320px' } },
        { id: 52, position: { top: '520px', left: '320px' } },
        { id: 53, position: { top: '560px', left: '320px' } },
        { id: 54, position: { top: '560px', left: '280px' } },
        { id: 55, position: { top: '560px', left: '240px' } },
        { id: 56, position: { top: '520px', left: '240px' } },
        { id: 57, position: { top: '480px', left: '240px' } },
        { id: 58, position: { top: '440px', left: '240px' } },
        { id: 59, position: { top: '400px', left: '240px' } },
        { id: 60, position: { top: '360px', left: '240px' } },
        { id: 61, position: { top: '320px', left: '200px' } },
        { id: 62, position: { top: '320px', left: '160px' } },
        { id: 63, position: { top: '320px', left: '120px' } },
        { id: 64, position: { top: '320px', left: '80px' } },
        { id: 65, position: { top: '320px', left: '40px' } },
        { id: 66, position: { top: '320px', left: '0px' } },
        { id: 67, position: { top: '280px', left: '0px' } },
        { id: 68, position: { top: '240px', left: '0px' } },
        { id: 69, position: { top: '280px', left: '40px' } },
        { id: 70, position: { top: '280px', left: '80px' } },
        { id: 71, position: { top: '280px', left: '120px' } },
        { id: 72, position: { top: '280px', left: '160px' } },
        { id: 73, position: { top: '280px', left: '200px' } },
        { id: 74, position: { top: '280px', left: '240px' } },
        { id: 75, position: { top: '40px', left: '280px' } },
        { id: 76, position: { top: '80px', left: '280px' } },
        { id: 77, position: { top: '120px', left: '280px' } },
        { id: 78, position: { top: '160px', left: '280px' } },
        { id: 79, position: { top: '200px', left: '280px' } },
        { id: 80, position: { top: '240px', left: '280px' } },
        { id: 81, position: { top: '280px', left: '520px' } },
        { id: 82, position: { top: '280px', left: '480px' } },
        { id: 83, position: { top: '280px', left: '440px' } },
        { id: 84, position: { top: '280px', left: '400px' } },
        { id: 85, position: { top: '280px', left: '360px' } },
        { id: 86, position: { top: '280px', left: '320px' } },
        { id: 87, position: { top: '520px', left: '280px' } },
        { id: 88, position: { top: '480px', left: '280px' } },
        { id: 89, position: { top: '440px', left: '280px' } },
        { id: 90, position: { top: '400px', left: '280px' } },
        { id: 91, position: { top: '360px', left: '280px' } },
        { id: 92, position: { top: '320px', left: '280px' } },
      // ... Add other square positions
    ]; 

    return squares.map(square => {
      //const squareImage = require(`./images/square_${square.id}.png`).default;
      const squareImage = `${squareImage2}`;
      const style = {
        position: 'absolute',
        top: square.position.top,
        left: square.position.left,
        width: '40px',
        height: '40px',
      };

      return <img key={square.id} src={squareImage} alt={`Square ${square.id}`} style={style} />;
    });
  }; 

  const getPositions = () => {
    axios.get(`http://localhost:5000/pieces/positions/all`)
      .then(response => {
        setPiecesPositions(response.data);   
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
    };


  const getGameInfo = () => {
    axios.get(`http://localhost:5000/games/last/game`)
        .then(response => {
            axios.get(`http://localhost:5000/games/${parseInt(response.data['id'])}`)
                .then(response => {
                    setGameInfo(response.data);
                    if (response.data.turn !== turn){
                        setTurn(response.data.turn);
                    }
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setIsLoading(false);
                });
                })
        .catch(error => {
            console.log(error);
        });
    
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/games/getplayerid/${gameId}/${userId}`)
        .then(response => {
            setPlayer(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [gameId, userId])

    useEffect(() => { 
        getPositions();
        const intervalId = setInterval(() => {
            getPositions();
            getGameInfo();
          }, 1000);
          }, []); // Se ejecuta solo una vez al montar el componente

    useEffect(() => {
        const colors = { 1: 'yellow', 2: 'green', 3: 'red', 4: 'blue'};
        if (colors[turn] === player['color']) {
            setMyTurn(true);
            setPlayed(false);
            alert('Your turn');
        } else {
            setMyTurn(false);
            alert('Waiting for other players');
        }
    }, [turn])

  const getPixels = (position) => {
    const squares = returnSquares();
    const pixels = squares[position];
    return pixels;
    }

    const handleClick1 = (event) => {
        axios.get(`http://localhost:5000/games/last/game`)
            .then(response => {
                axios.get(`http://localhost:5000/games/${parseInt(response.data['id'])}`)
                    .then(response2 => {
                        setGameInfo(response.data);
                        if (response2.data.turn === turn){
                            axios.get(`http://localhost:5000/games/dice`)
                                .then(response3 => {
                                    setPlayed(true);
                                    var num = response3.data;
                                    setnumMoves(num);
                                    axios.get(`http://localhost:5000/games/${parseInt(response.data['id'])}/round/${num}`)
                                        .then(response4 => {
                                            setPosibleMoves(response4.data);
                                        })
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        
                        }

                        else {
                            alert('No es tu turno');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
                    })
            .catch(error => {
                console.log(error);
            });
        
    }


    const handleClick = (event) => {
        axios.get(`http://localhost:5000/games/last/game`)
            .then(response => {
                axios.get(`http://localhost:5000/games/${parseInt(response.data['id'])}`)
                    .then(response => {
                        setGameInfo(response.data);
                        if (response.data.turn !== turn){
                            setTurn(response.data.turn);
                            const colors = { 1: 'yellow', 2: 'green', 3: 'red', 4: 'blue'};
                            console.log(colors[turn], player['color']);
                            if (colors[turn] === player['color']) {
                                //console.log('Turno:', myTurn, turn, response.data.turn);
                                setMyTurn(true);
                                alert('Your turn');
                            } else {
                                setMyTurn(false);
                                alert('Waiting for other players');
            }
                        }
                        const { id } = event.target.dataset;
                        console.log('ID de la pieza:', id);
                        console.log('Turno:', myTurn, turn, response.data.turn);
                        console.log(gameId);
                        if (response.data.turn === turn){
                            axios.post(`http://localhost:5000/games/${gameId}/move/${(gameId-1)*16+parseInt(id)}/${numMoves}`)
                            .then(response => {
                                console.log(response.data);
                                axios.get(`http://localhost:5000/pieces/positions/all`)
                                    .then(response => {
                                        setPiecesPositions(response.data);  
                                        //console.log(piecesPositions); 
                                        setIsLoading(false);
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        setIsLoading(false);
                                    });
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
                    })
            .catch(error => {
                console.log(error);
            });
    
          };


  return (
    <div style={{ display: 'flex' }}>
        
            {isLoading ? (
            <p>Loading...</p>) :(
            <div style={{ position: 'relative', width: '600px', height: '600px', background: `url(${backgroundImage})` }}>
                {renderPiece(1, { top: getPixels(piecesPositions[0])[0]+'px', left: getPixels(piecesPositions[0])[1]+'px' })}
                {renderPiece(2, { top: getPixels(piecesPositions[1])[0]+'px', left: getPixels(piecesPositions[1])[1]+'px' })}
                {renderPiece(3, { top: getPixels(piecesPositions[2])[0]+'px', left: getPixels(piecesPositions[2])[1]+'px' })}
                {renderPiece(4, { top: getPixels(piecesPositions[3])[0]+'px', left: getPixels(piecesPositions[3])[1]+'px' })}
                {renderPiece(5, { top: getPixels(piecesPositions[4])[0]+'px', left: getPixels(piecesPositions[4])[1]+'px' })}
                {renderPiece(6, { top: getPixels(piecesPositions[5])[0]+'px', left: getPixels(piecesPositions[5])[1]+'px' })}
                {renderPiece(7, { top: getPixels(piecesPositions[6])[0]+'px', left: getPixels(piecesPositions[6])[1]+'px' })}
                {renderPiece(8, { top: getPixels(piecesPositions[7])[0]+'px', left: getPixels(piecesPositions[7])[1]+'px' })}
                {renderPiece(9, { top: getPixels(piecesPositions[8])[0]+'px', left: getPixels(piecesPositions[8])[1]+'px' })}
                {renderPiece(10, { top: getPixels(piecesPositions[9])[0]+'px', left: getPixels(piecesPositions[9])[1]+'px' })}
                {renderPiece(11, { top: getPixels(piecesPositions[10])[0]+'px', left: getPixels(piecesPositions[10])[1]+'px' })}
                {renderPiece(12, { top: getPixels(piecesPositions[11])[0]+'px', left: getPixels(piecesPositions[11])[1]+'px' })}
                {renderPiece(13, { top: getPixels(piecesPositions[12])[0]+'px', left: getPixels(piecesPositions[12])[1]+'px' })}
                {renderPiece(14, { top: getPixels(piecesPositions[13])[0]+'px', left: getPixels(piecesPositions[13])[1]+'px' })}
                {renderPiece(15, { top: getPixels(piecesPositions[14])[0]+'px', left: getPixels(piecesPositions[14])[1]+'px' })}
                {renderPiece(16, { top: getPixels(piecesPositions[15])[0]+'px', left: getPixels(piecesPositions[15])[1]+'px' })}
            </div>)}
        
        <div className="game-info" style={{ float: 'right', marginLeft: '20px' }}>
            <h2>Información del juego:</h2>
            <table>
            <tbody>
                <tr>
                <td>Turno:</td>
                <td>{gameInfo.turn}</td>
                </tr>
                <tr>
                <td>Ganador:</td>
                <td>{gameInfo.winner ? gameInfo.winner : 'Sin ganador'}</td>
                </tr>
                <tr>
                <td>Dado:</td>
                <td><button disabled={played} onClick={handleClick1}>Tirar</button></td>
                </tr>
                <tr>
                <td>Numero:</td>
                <td>{numMoves}</td>
                </tr>
                <tr>
                <td>Puedes mover las piezas:</td>
                <td>{JSON.stringify(posibleMoves)}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>

  );
};

export default LudoGame;