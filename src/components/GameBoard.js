import styles from '../styles/Game.module.css';

const GameBoard = ({ guesses, currentGuess }) => {
  return (
    <div className={styles.board}>
      {guesses.map((guess, index) => (
        <div className={styles.row} key={index}>
          {guess.split('').map((char, i) => (
            <div className={styles.cell} key={i}>
              {char}
            </div>
          ))}
        </div>
      ))}
      <div className={styles.row}>
        {currentGuess.split('').map((char, i) => (
          <div className={styles.cell} key={i}>
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
