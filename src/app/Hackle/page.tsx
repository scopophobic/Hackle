// page currently in use
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
  const [usedLetters, setUsedLetters] = React.useState<Record<string, string>>({});

  const targetValue = "CRANE";//set random val from dictionary per 24 hrss

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
    updateUsedLetters(guess);
    if (likes == 5 && guess != targetValue) {
      setResult("you lose hehe loser");
      return;
    }
    
   
    if (guess == targetValue) {
      setResult("YOU WIN");
      return;
    }
    
    
  }
  const updateUsedLetters = (currentGuess: string) => {
    const newUsedLetters = { ...usedLetters };
  
    currentGuess.split("").forEach((letter, index) => {
      const color = getLetterColor(letter, index); // Reuse logic
      if (color === "bg-green-500") {
        newUsedLetters[letter] = "green";
      } else if (color === "bg-yellow-500" && newUsedLetters[letter] !== "green") {
        newUsedLetters[letter] = "yellow";
      } else if (!newUsedLetters[letter]) {
        newUsedLetters[letter] = "gray";
      }
    });
  
    setUsedLetters(newUsedLetters);
  };
  

  const getLetterColor = (letter: string, index: number) => {
    if (targetValue[index] === letter) {
      return "bg-green-500";
    } else if (targetValue.includes(letter)) {
      return "bg-yellow-500";
    }
    return "bg-gray-500";
  };

  const handleKeyboardClick = (key: string) => {
    if (key === "ENTER") {
      handleClick();
    } else if (key === "DELETE") {
      setGuess((prev) => prev.slice(0, -1));
    } else if (guess.length < 5) {
      setGuess((prev) => prev + key);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/*  Change: Centered layout for better UX */}

      <h3 className="text-2xl font-semibold mb-4">Your Guesses:</h3>

      {/*  Change: Added spacing and centered grid */}
      <ul className="space-y-2">
        {grid.map((guess, index) => (
          <li key={index} className="flex gap-2 justify-center">
          {guess.split("").map((letter, i) => (
            <span
              key={i}
              className={`text-white p-3 rounded-md text-lg font-bold ${getLetterColor(letter, i)}`}
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
        className="mt-4 p-2 border-2 border-gray-400 rounded-md text-black w-40 text-center" // Centered input field and added padding
      ></input>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        onClick={handleClick}
      >
        Likes ({likes})
      </button>
      <p className="mt-4 text-lg font-bold">{result}</p>
      <div className="mt-6 w-full max-w-md">
        <Keyboard onkeyPress={handleKeyboardClick} usedLetters={usedLetters} />
        </div>
    </div>
  );
};

export default Hackle;
