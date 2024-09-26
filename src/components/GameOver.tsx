interface Props {
  winner: any;
  restartGame: () => void;
}

const GameOver = ({ winner, restartGame }: Props) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won!` : "Draw!"}</p>
      <p>
        <button onClick={restartGame}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
