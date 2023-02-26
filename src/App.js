import { Board } from "./components/Board";
import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [winner, setWinner] = useState(null);
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const setValue = (index) => {
    if (board[index] === "" && !winner) {
      const updateBoard = board.map((b, i) => {
        if (i === index) {
          return isPlayerX ? "X" : "O";
        } else {
          return b;
        }
      });
      const winner = checkWinner(updateBoard);
      if (winner) {
        setWinner(winner);
        incrementCountWinner(winner);
      }
      setBoard(updateBoard);
      setIsPlayerX((oldValue) => !oldValue);
    }
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      // uso este for xq puedo dejar de iterar al hacer return
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };

  const incrementCountWinner = (winner) => {
    if (winner === "X") {
      setCountX(countX + 1);
    } else {
      setCountO(countO + 1);
    }
  };

  const checkEndGame = () => {
    return winner || board.every((b) => b !== "");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setIsPlayerX(true);
  };

  return (
    <>
      <p className="x"><b>Contador ganardor X: {countX}</b></p>
      <p className="o"><b>Contador ganardor O: {countO}</b></p>
      <Board board={board} onClick={setValue} />
      {checkEndGame() && (
        <div className="end-game">
          {winner === "X" || winner === "O" ? (
            <h3>El ganador es: {winner}</h3>
          ) : (
            <h3>Es un empate</h3>
          )}
          <button className="reset-button" onClick={() => resetGame()}>
            Reiniciar
          </button>
        </div>
      )}
    </>
  );
}

export default App;
