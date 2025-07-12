import React, { useState } from 'react';
import ConsoleLayout from '../Components/ConsoleLayout';

export default function GuessTheNumber() {
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [target, setTarget] = useState(getRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('❌ Please enter a number between 1 and 100');
      return;
    }

    setAttempts((prev) => prev + 1);

    if (num === target) {
      setMessage(`🎉 Correct! The number was ${target}`);
    } else if (num < target) {
      setMessage('📉 Too low!');
    } else {
      setMessage('📈 Too high!');
    }
  };

  const handleReset = () => {
    setTarget(getRandomNumber());
    setGuess('');
    setAttempts(0);
    setMessage('Guess a number between 1 and 100');
  };

  return (
    <ConsoleLayout
      gameTitle="Guess The Number"
      scoreBoard={
        <div className="space-y-2 text-lg">
          <div className="text-yellow-400">Attempts: {attempts}</div>
        </div>
      }
      controls={
        <div className="grid grid-rows-1 items-center justify-center gap-2">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter guess"
            className="text-black px-3 py-2 rounded-md w-36 text-center"
          />
          <button
            onClick={handleGuess}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-md"
          >
            Submit
          </button>
          <button
            onClick={handleReset}
            className="text-sm text-gray-300 underline ml-4"
          >
            Reset
          </button>
        </div>
      }
    >
      <div className="text-center text-white text-xl font-bold mt-4">{message}</div>
    </ConsoleLayout>
  );
}
