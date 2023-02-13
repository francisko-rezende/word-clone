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

  const handleAddGuess = (guess) => {
    const newGuess = { id: Math.random(), guess }
    setGuesses([...guesses, newGuess])
  }

  return <>
    <PreviousGuesses guesses={guesses} />
    <GuessForm handleAddGuess={handleAddGuess} />
  </>;
}

export default Game;
