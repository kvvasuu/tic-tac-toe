import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import PreGame from "./components/PreGame";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { CellValue, logRecord } from "./types";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard: CellValue[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (turns: logRecord[]) => {
  let activePlayer: CellValue = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
};

function App() {
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameTurns, setGameTurns] = useState<logRecord[]>([]);
  const [editing, setEditing] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  let winner: CellValue | undefined;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare === secondSquare &&
      secondSquare === thirdSquare &&
      thirdSquare === firstSquare
    ) {
      winner = firstSquare;
    }
  }

  const isDraw = !winner && gameTurns.length >= 9;

  const selectSquare = (symbol: CellValue, row: number, col: number) => {
    if (symbol || !isPlaying || winner) {
      return;
    }

    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row, col }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const changePlayerName = (player: "X" | "O", playerName: string) => {
    setPlayerNames((names) => {
      return {
        ...names,
        [player]: playerName,
      };
    });
  };

  const restartGame = () => {
    gameBoard = initialGameBoard;
    setGameTurns([]);
    setIsPlaying(false);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name={playerNames.X}
            symbol="X"
            isPlaying={isPlaying}
            isActive={activePlayer === "X"}
            changePlayerName={changePlayerName}
            setEditing={() => setEditing((state) => !state)}
          />
          <Player
            name={playerNames.O}
            symbol="O"
            isPlaying={isPlaying}
            isActive={activePlayer === "O"}
            changePlayerName={changePlayerName}
            setEditing={() => setEditing((state) => !state)}
          />
        </ol>
        {!isPlaying ? (
          <PreGame
            editing={editing}
            startGame={() => {
              setIsPlaying(true);
            }}
          />
        ) : (
          <>
            {(winner || isDraw) && (
              <GameOver
                restartGame={restartGame}
                winner={playerNames[winner || "X"]}
              />
            )}
            <GameBoard selectSquare={selectSquare} turns={gameBoard} />
          </>
        )}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
