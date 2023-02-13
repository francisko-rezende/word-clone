import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const PreviousGuesses = ({ guesses }) => {
  const fillerArr = range(guesses.length, NUM_OF_GUESSES_ALLOWED);
  let currentGuesses = [...guesses, ...fillerArr];
  currentGuesses = currentGuesses.map((item) => {
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
      guess: item.guess
        .split("")
        .map((item) => ({ id: Math.random(), letter: item })),
    };
  });

  console.log(currentGuesses);

  return (
    <div className="guess-results">
      {currentGuesses.map((item) => {
        return (
          <p key={item.id} className="guess">
            {item.guess.map(({ letter, id }) => (
              <span className="cell" key={id}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
};
