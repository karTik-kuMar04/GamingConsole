import React, { useState } from "react";
import ConsoleLayout from "../Components/ConsoleLayout";
import HeadsI from"../assets/heads.png"
import TailsI from"../assets/tails.png"

function CoinFlip() {
  const [side, setSide] = useState(null); // "heads" or "tails"
  const [flipping, setFlipping] = useState(false);

  const handleToss = () => {
    setFlipping(true);

    // Flip duration
    setTimeout(() => {
      const result = Math.random() < 0.5 ? "heads" : "tails";
      setSide(result);
      setFlipping(false);
    }, 1500);
  };

  return (
    <ConsoleLayout
      gameTitle="Heads or Tails"
      scoreBoard={true}
      controls={
        <button
          onClick={handleToss}
          disabled={flipping}
          className="block mx-auto bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition"
        >
          {flipping ? "Flipping..." : "Toss Coin"}
        </button>
      }
    >
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <div className="coin-flip-container">
          <div className={`coin ${flipping ? "flip" : ""} ${side}`}>
            <div className="heads"><img src={HeadsI} /></div>
            <div className="tails"><img src={TailsI} /></div>
          </div>
        </div>

        {side && !flipping && (
          <div className="text-xl font-bold text-yellow-400 mt-4">
            It's <span className="uppercase">{side}!</span>
          </div>
        )}
      </div>
    </ConsoleLayout>
  );
}

export default CoinFlip;
