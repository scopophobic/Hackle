import React from "react";
const Keyboard = ({onkeyPress}) => {
    const rows = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"],
    ];
  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-2 my-1">
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => onkeyPress(letter)}
              className="p-2 bg-gray-600 rounded"
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