import React, { useState } from "react";
const Game = () => {
  const [secretWord, setSecretWord] = useState("javascript");
  const [letters, setLetters] = useState([]);
  const [reaminAttempts, setRemainAttempts] = useState(6);
  const [currentLetter, setCurrentLetter] = useState("");

  const handleLetters = (letter) => {
    if (!letters.includes(letter)) {
      setLetters([...letters, letter]);
      if (!secretWord.includes(letter)) {
        setRemainAttempts(reaminAttempts - 1);
      }
    }
  };

  const displayWord = secretWord
    .split("")
    .map((letter) => (letters.includes(letter) ? letter : "_"))
    .join(" ");
  const handleGuess = () => {
    handleLetters(currentLetter);
    setCurrentLetter("");
  };
  return (
    <>
      <h1>Game</h1>
      <p>Guess the word: {displayWord}</p>
      <p>Remaining attempts:{reaminAttempts}</p>
      <div>
        <input
          type="text"
          maxLength={1}
          onChange={(e) => setCurrentLetter(e.target.value)}
        />
        <button onClick={handleGuess}>Guess</button>
      </div>
    </>
  );
};
export default Game;
