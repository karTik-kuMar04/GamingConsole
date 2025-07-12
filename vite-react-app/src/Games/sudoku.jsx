import React, { useState } from "react";
import ConsoleLayout from "../Components/ConsoleLayout";

// Initial Puzzle
const initialBoard = [
  [5, 3, "", "", 7, "", "", "", ""],
  [6, "", "", 1, 9, 5, "", "", ""],
  ["", 9, 8, "", "", "", "", 6, ""],
  [8, "", "", "", 6, "", "", "", 3],
  [4, "", "", 8, "", 3, "", "", 1],
  [7, "", "", "", 2, "", "", "", 6],
  ["", 6, "", "", "", "", 2, 8, ""],
  ["", "", "", 4, 1, 9, "", "", 5],
  ["", "", "", "", 8, "", "", 7, 9],
];

export default function Sudoku() {
  const [board, setBoard] = useState(initialBoard);
  const [correctCells, setCorrectCells] = useState([]); // To track correct answers

  // Check if the move is valid
  const isValidMove = (board, row, col, num) => {
    if (board[row].includes(num)) return false;
    for (let r = 0; r < 9; r++) {
      if (board[r][col] === num) return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (board[r][c] === num) return false;
      }
    }
    return true;
  };

  // Handle user input
  const handleChange = (row, col, value) => {
    const num = parseInt(value);
    const newBoard = board.map((r) => [...r]);

    if (!isNaN(num) && num >= 1 && num <= 9) {
      if (isValidMove(newBoard, row, col, num)) {
        newBoard[row][col] = num;
        setCorrectCells([...correctCells, `${row}-${col}`]); // Mark this cell as correct
      } else {
        alert("❌ Invalid move!");
        return;
      }
    } else {
      newBoard[row][col] = "";
    }

    setBoard(newBoard);
  };

  return (
    <ConsoleLayout gameTitle="Sudoku" controls={false}>
      <div className="grid grid-cols-9 gap-[2px] max-w-[360px] mx-auto mt-4">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isCorrect = correctCells.includes(`${rowIndex}-${colIndex}`);
            const isFixed = initialBoard[rowIndex][colIndex] !== "";

            return (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                maxLength="1"
                value={cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                disabled={isFixed}
                className={`w-10 h-10 text-center font-bold border border-gray-600 ${
                  isFixed
                    ? "bg-gray-300 text-black"
                    : `bg-white ${isCorrect ? "text-green-500" : "text-black"}`
                }`}
              />
            );
          })
        )}
      </div>
    </ConsoleLayout>
  );
}
