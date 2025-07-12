import React from "react";
import { Link } from "react-router-dom";
import rockImg from "./assets/rock.jpg";
import ticTacToeImg from "./assets/tictactoe.png";
import sudokuImg from "./assets/sudoku.jpg";
import guessImg from "./assets/guess.jpg";
import coinImg from "./assets/coinflip.jpg";

const games = [
  {
    name: "Rock Paper Scissors",
    path: "/rps",
    image: rockImg,
    description: "Classic hand game vs computer.",
  },
  {
    name: "Tic Tac Toe",
    path: "/ttt",
    image: ticTacToeImg,
    description: "Play Xs and Os with strategy!",
  },
  {
    name: "Sudoku",
    path: "/sudoku",
    image: sudokuImg,
    description: "Fill the grid with logic & fun.",
  },
  {
    name: "Guess the Number",
    path: "/guess",
    image: guessImg,
    description: "Try to guess the hidden number.",
  },
  {
    name: "Coin Flip",
    path: "/coin",
    image: coinImg,
    description: "Heads or Tails? Let fate decide!",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-12">🎮 Game Console</h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {games.map((game) => (
          <Link
            to={game.path}
            key={game.name}
            className="group block relative bg-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:h-56 h-20"
          >
            <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center px-6 backdrop-blur-sm bg-black/40">
              <h2 className="text-2xl font-semibold">{game.name}</h2>
              <p className="opacity-0 group-hover:opacity-100 mt-2 text-sm transition duration-300">
                {game.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
