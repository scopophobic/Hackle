"use client";
import React from "react";
import words from "@/data/Words 5";
import  Keyboard  from "@/components/Keyboard";
const Hackle = () => {
  // const [Status, setStatus] = React.useState("playing");
  const [likes, setLikes] = React.useState(0);
  // const [target, setTarget] = React.useState('');
  const [guess, setGuess] = React.useState("");

  // guess and setGuess

  const [result, setResult] = React.useState("");
  const [grid, setGrid] = React.useState([""]);

  const targetValue = "CRANE";

  const isWordValid = (word: string): boolean => {
    return words.valid.includes(guess.toLowerCase()) || words.words.includes(guess.toLowerCase());
  };
  function handleClick() {
    setLikes(likes + 1);//likes exceeding 6 so fix
    if (!isWordValid(guess)) {
      setResult("invalid input");
      return;
    }
    if (guess.length != 5) return;
    if (likes >= 6) {
      return;
    } 
    setGrid((prevGrid) => [...prevGrid, guess]);
    setGuess("");
    if (likes == 5 && guess != targetValue) {
      setResult("you lose hehe loser");
      return;
    }
    
   
    if (guess == targetValue) {
      setResult("YOU WIN");
      return;
    }
    
    
  }

  const getLetterColor = (letter: string, index: number) => {
    if (targetValue[index] === letter) {
      return "bg-green-500";
    } else if (targetValue.includes(letter)) {
      return "bg-yellow-500";
    }
    return "bg-gray-500";
  };

  const handleKeyboardClick = (key) => {
    if (key === "ENTER") {
      handleClick();
    } else if (key === "DELETE") {
      setGuess((prev) => prev.slice(0, -1));
    } else if (guess.length < 5) {
      setGuess((prev) => prev + key);
    }
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
                className={`text-white p-1 rounded font-bold ${getLetterColor(
                  letter,
                  i
                )}`}
              >
                {letter}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        onKeyDown={(e)=> e.key === 'Enter' && handleClick()}
        placeholder="Guess here"
        type="text"
        id="guess"
      ></input>
      <button className="" onClick={handleClick}>
        Likes ({likes})
      </button>
      <p>{result}</p>
      <Keyboard onkeyPress={handleKeyboardClick} />
    </div>
  );
};

export default Hackle;
