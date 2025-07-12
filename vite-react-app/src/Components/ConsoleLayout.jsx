// ConsoleLayout.js
import React from "react";

function ConsoleLayout({ gameTitle, children, controls, scoreBoard }) {


  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 font-sans">


      {/* Game Title */}
      <header className="text-center mb-6">
        {gameTitle ? (
            <h1 className="text-4xl font-bold tracking-wide">🎮 {gameTitle}</h1>
        ):(
            <h1 className="text-4xl font-bold tracking-wide">🎮</h1>
        )}
        
      </header>

      {/* Main Console Layout */}
      <main className="flex flex-col md:flex-row">
        
        {/* Scoreboard */}
        {scoreBoard &&
          <aside className=" bg-zinc-700 rounded-xl p-4 shadow-md min-w-[200px] h-full">
            <h2 className="text-xl font-semibold mb-3">🏆 Scoreboard</h2>
            {scoreBoard}
          </aside>
        }

        {/* Game Screen */}

        <div className="block mx-auto bg-zinc-800 rounded-xl p-4 shadow-lg min-w-[60%] h-[500px]">
            {children}
        </div>


        
        
      </main>

      {/* Controls Panel */}
      {controls &&
        <footer className="mt-8 bg-zinc-800 rounded-xl p-4 shadow-inner">
          <h2 className="text-lg font-semibold mb-2">🕹️ Controls</h2>
          {controls}
        </footer>
      }
    </div>
  );
}

export default ConsoleLayout;

