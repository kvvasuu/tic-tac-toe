interface Props {
  startGame: () => void;
  editing: boolean;
}

const PreGame = ({ startGame, editing }: Props) => {
  return (
    <div id="pre-game">
      <button
        onClick={startGame}
        disabled={editing}
        className={editing ? "disabled" : undefined}
      >
        Start game
      </button>
    </div>
  );
};

export default PreGame;
