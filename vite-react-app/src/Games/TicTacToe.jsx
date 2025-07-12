import React from 'react'
import ConsoleLayout from '../Components/ConsoleLayout'

const initialBoard = ["", "", "", "", "", "", "", "", ""];



const WinningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board) => {
  for (const [a, b, c] of WinningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.every(Boolean) ? "Draw" : null;
};

function TicTacToe() {
  const [board, setBoard] = React.useState([...initialBoard]);
  const [playerSymbol, setPlayerSymbol] = React.useState("");
  const [currentTurn, setCurrentTurn] = React.useState("X");
  const [winner, setWinner] = React.useState(null);


  const [wins, setWins] = React.useState(0);
  const [losses, setLosses] = React.useState(0);
  const [draws, setDraws] = React.useState(0);

  const handleSymbolSelect = (symbol) => {
    setPlayerSymbol(symbol);
    setCurrentTurn("X"); // X always starts
    setBoard([...initialBoard]);
    setWinner(null);
  };

  const handleClick = (index) => {
    if (!playerSymbol || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);


      if (win === "Draw") {
        setDraws((prev) => prev + 1);
      } else if (win === playerSymbol) {
        setWins((prev) => prev + 1);
      } else {
        setLosses((prev) => prev + 1);
      }

    } else {
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
    }
  };

  const handleReset = () => {
    setBoard([...initialBoard]);
    setWinner(null);
    setPlayerSymbol(""); // Ask again
  };

  return (
    <ConsoleLayout
      gameTitle={"Tic-Tac-Toe"}
      scoreBoard={
        <div className="space-y-2 text-lg">
          <div className='text-green-600 italic'>Wins: {wins}</div>
          <div className='text-red-500 italic'>Losses: {losses}</div>
          <div className='text-yellow-500 italic'>Draws: {draws}</div>
        </div>
      }
      controls={
        playerSymbol && (
          <button
            onClick={handleReset}
            className="block mx-auto bg-gray-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            Reset Game
          </button>
        )
      }
    >
      {!playerSymbol ? (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h2 className="text-white text-lg font-bold">Choose your symbol:</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handleSymbolSelect("X")}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl font-bold"
            >
              X
            </button>
            <button
              onClick={() => handleSymbolSelect("O")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-xl font-bold"
            >
              O
            </button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center h-full gap-4'>
          {winner && (
            <div className="text-white text-xl font-bold">
              {winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}
            </div>
          )}

          <div className='grid grid-cols-3 gap-1'>
            {board.map((value, index) => (
              <div
                key={index}
                className='text-white w-20 h-20 sm:w-24 sm:h-24 bg-gray-600 rounded-lg active:translate-y-1 active:translate-x-1 flex items-center justify-center font-bold text-2xl'
                onClick={() => handleClick(index)}
              >
                {value}
              </div>
            ))}
          </div>

          <div className='text-sm text-gray-400 italic'>
            Turn: {winner ? "-" : currentTurn}
          </div>
        </div>
      )}
    </ConsoleLayout>
  );
}

export default TicTacToe;
