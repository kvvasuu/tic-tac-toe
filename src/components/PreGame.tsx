interface Props {
  startGame: () => void;
}

const PreGame = ({ startGame }: Props) => {
  return (
    <div id="pre-game">
      <button onClick={startGame}>Start game</button>
    </div>
  );
};

export default PreGame;
