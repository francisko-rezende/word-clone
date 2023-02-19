import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GuessForm } from '../GuessForm';
import { PreviousGuesses } from '../PreviousGuesses/PreviousGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameResult, setGameResult] = React.useState('')

  const isGameFinished = ['won', 'lost'].includes(gameResult)

  const handleAddGuess = (guess) => {
    const newGuess = { id: Math.random(), guess }
    setGuesses([...guesses, newGuess])
  }


  return <>
    {gameResult === 'won' && (<div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>)}
    {gameResult === 'lost' && (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>)}
    <PreviousGuesses guesses={guesses} answer={answer} setGameResult={setGameResult} gameResult={gameResult} />
    <GuessForm handleAddGuess={handleAddGuess} isGameFinished={isGameFinished} />
  </>;
}

export default Game;
