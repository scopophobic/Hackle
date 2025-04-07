import React from "react";
// This component renders a keyboard for the word guessing game.
const Keyboard = ({ onkeyPress, usedLetters }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  // //  NEW FUNCTION: Determines the background color of each key
  // const getKeyColor = (letter) => {
  //   if (usedLetters[letter] === "correct") return "#6aaa64"; // Green for correct letters
  //   if (usedLetters[letter] === "misplaced") return "#c9b458"; // Yellow for misplaced letters
  //   if (usedLetters[letter] === "incorrect") return "#787c7e"; // Gray for incorrect letters
  //   return "#d3d6da"; // Default key color (light gray)
  // };

  //  UPDATED FUNCTION: Now applies the correct styles dynamically
  const getKeyStyle = (letter) => {
    if (usedLetters[letter] === "green") return "bg-green-500 text-white";
    if (usedLetters[letter] === "yellow") return "bg-yellow-500 text-white";
    if (usedLetters[letter] === "gray") return "bg-gray-500 text-white";
    return "bg-gray-600 text-white"; // Default color for unused letters
  };
  

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-2 my-1">
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => onkeyPress(letter)}
              className={`p-2 rounded ${getKeyStyle(letter)}`}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center space-x-2 my-1">
        <button
          onClick={() => onkeyPress("ENTER")}
          className="p-2 bg-blue-500 text-white rounded"
        >
          ENTER
        </button>
        <button
          onClick={() => onkeyPress("DELETE")}
          className="p-2 bg-red-500 text-white rounded"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
