import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const PreviousGuesses = ({ guesses, answer, setGameResult }) => {
  const fillerArr = range(guesses.length, NUM_OF_GUESSES_ALLOWED);
  const currentGuesses = [...guesses, ...fillerArr];
  const processedGuesses = currentGuesses.map((item) => {
    if (typeof item === "number") {
      return {
        id: Math.random(),
        guess: "     "
          .split("")
          .map((item) => ({ id: Math.random(), letter: item })),
      };
    }
    return {
      ...item,
      guess: checkGuess(item.guess, answer).map((item) => ({
        ...item,
        id: Math.random(),
      })),
    };
  });
  console.log(answer);
  console.log(guesses);
  console.log(processedGuesses);

  const checkResult = () => {
    const hasGuessedCorrectly = processedGuesses.some(({ guess }) =>
      guess.every(({ status }) => status === "correct")
    );

    if (hasGuessedCorrectly) {
      setGameResult("won");
    }

    if (!hasGuessedCorrectly && guesses.length === 6) {
      setGameResult("lost");
    }
  };

  checkResult();

  return (
    <div className="guess-results">
      {processedGuesses.map((item) => {
        return (
          <p key={item.id} className="guess">
            {item.guess.map(({ letter, id, status }) => (
              <span className={`cell ${status}`} key={id}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};
