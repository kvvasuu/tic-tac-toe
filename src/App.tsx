import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import PreGame from "./components/PreGame";
import Log from "./components/Log";

import { CellValue, logRecord } from "./types";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  const [gameTurns, setGameTurns] = useState<logRecord[]>([]);

  const selectSquare = (symbol: CellValue, row: number, col: number) => {
    if (symbol || !isPlaying) {
      return;
    }

    setGameTurns((prevTurns) => {
      let activePlayer: CellValue = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        activePlayer = "O";
      }

      setCurrentPlayer(activePlayer);

      const updatedTurns = [
        { square: { row, col }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name="Player 1"
            symbol="X"
            isPlaying={isPlaying}
            isActive={currentPlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isPlaying={isPlaying}
            isActive={currentPlayer === "O"}
          />
        </ol>
        {!isPlaying ? (
          <PreGame
            startGame={() => {
              setIsPlaying(true);
              setCurrentPlayer("X");
            }}
          />
        ) : (
          <GameBoard selectSquare={selectSquare} turns={gameTurns} />
        )}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
