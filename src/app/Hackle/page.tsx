"use client";
import React from "react";

const Hackle = () => {
  const [likes, setLikes] = React.useState(0);
  // const [target, setTarget] = React.useState('');
  const [guess, setGuess] = React.useState("");
  const [result, setResult] = React.useState("");
  const [grid, setGrid] = React.useState([""]);

  const targetValue = "CRANE";

  function handleClick() {
    if (guess.length != 5) return;
    setGrid((prevGrid) => [...prevGrid, guess]);
    if (guess == targetValue) setResult("YOU WIN");
    if (likes > 5 && guess != targetValue) {
      setResult("you lose hehe loser");
      return;
    }
    setLikes(likes + 1);
  }

  const getLetterColor = (letter: string, index: number) => {
    if (targetValue[index] === letter) {
      return "bg-green-500";
    } else if (targetValue.includes(letter)) {
      return "bg-yellow-500";
    }
    return "bg-gray-500";
  };
  return (
    <div>
      <h3>Your Guesses:</h3>
      <ul>
        {grid.map((guess, index) => (
          <li key={index} className="flex gap-1">
            {guess.split("").map((letter, i) => (
              <span
                key={i}
                className={`text-white p-1 rounded font-bold ${getLetterColor(letter, i)}`}>
                {letter}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        placeholder="Guess here"
        type="text"
        id="guess"
      ></input>
      <button className="" onClick={handleClick}>
        Likes ({likes})
      </button>
      <p>{result}</p>
    </div>
  );
};

export default Hackle;
