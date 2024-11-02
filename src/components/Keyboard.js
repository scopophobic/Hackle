const keys = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const Keyboard = ({ onKeyPress }) => {
  const handleClick = (key) => {
    onKeyPress(key);
  };

  return (
    <div>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.split('').map((key) => (
            <button key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
