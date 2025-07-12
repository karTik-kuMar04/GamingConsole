import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RockPaperScissors from "./Games/rockPaperScissors.jsx";
import TicTacToe from "./Games/TicTacToe.jsx";
import Sudoku from "./Games/sudoku.jsx";
import GuessTheNumber from "./Games/guessNumber.jsx";
import CoinFlip from "./Games/CoinFlip.jsx";

function App() {
  return (
    <BrowserRouter basename="/GamingConsole">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/ttt" element={<TicTacToe />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/guess" element={<GuessTheNumber />} />
        <Route path="/coin" element={<CoinFlip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
