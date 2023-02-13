import React from "react";

export const GuessForm = ({ handleAddGuess }) => {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length < 5) {
          alert("There is a minimum of 5 characters");
          return;
        }
        handleAddGuess(guess);
      }}
    >
      <label className="guess-input" htmlFor="guess">
        Enter guess:
      </label>
      <input
        className="guess-input"
        type="text"
        id="guess"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        minLength={5}
        required
        maxLength={5}
      />
    </form>
  );
};
