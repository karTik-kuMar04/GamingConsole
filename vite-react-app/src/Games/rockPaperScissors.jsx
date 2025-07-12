import React, { useState } from "react";
import ConsoleLayout from "../Components/ConsoleLayout";
import rockImg from "../assets/rock.webp";
import paperImg from "../assets/paper.webp";
import scissorsImg from "../assets/scissors.webp";

const choices = ["rock", "paper", "scissors"];
const choiceImages = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
};


const getResult = (player, computer) => {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "win";
  return "lose";
};

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    const gameResult = getResult(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    setScore((prev) => ({
      ...prev,
      wins: prev.wins + (gameResult === "win" ? 1 : 0),
      losses: prev.losses + (gameResult === "lose" ? 1 : 0),
      draws: prev.draws + (gameResult === "draw" ? 1 : 0),
    }));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };
  

  return (
    <ConsoleLayout
      gameTitle="Rock Paper Scissors"
      scoreBoard={
        <div className="space-y-2 text-lg">
          <div>Wins: {score.wins}</div>
          <div>Losses: {score.losses}</div>
          <div>Draws: {score.draws}</div>
        </div>
      }
      controls={
        <div className="space-y-2">
          <div className="flex justify-center gap-4">
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => playGame(choice)}
                className="text-white px-4 py-2  shadow"
              >
                <img src={choiceImages[choice]} alt={choice} className="w-12 h-12 rounded-full" />

              </button>
            ))}
          </div>
          <button
            onClick={resetGame}
            className="mt-4 text-sm text-gray-400 underline"
          >
            Reset Round
          </button>
        </div>
      }
    >
      <div className="flex justify-between text-center text-xl relative">
        {playerChoice && (
          <>
            <div className="w-[50%]  h-[300px]">
              <span className="">
                Player Move: 
              </span>
              
              <strong className="flex justify-center items-center mt-[100px]">
                <img 
                  key={playerChoice + Math.random()}
                  src={choiceImages[playerChoice]} 
                  className="w-12 h-12 rounded-full move-animation" 
                  
                />
              </strong>
            </div>
            
            <div className="w-[50%]  h-[300px]">
              Computer Move: 
              <strong className="flex justify-center items-center mt-[100px]">
                <img 
                  key={computerChoice + Math.random()} 
                  src={choiceImages[computerChoice]} 
                  className="w-12 h-12 rounded-full move-animation" 
                    
                />
              </strong>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg">
              Result:{" "}
              <span className={
                result === "win" ? "text-green-400" :
                result === "lose" ? "text-red-400" :
                "text-yellow-400"
              }>
                {result?.toUpperCase()}
              </span>
            </div>
          </>
        )}
        {!playerChoice && (
          <div className="text-gray-400 italic">
            Choose Rock, Paper, or Scissors to start the game.
          </div>
        )}
      </div>
    </ConsoleLayout>
  );
}
