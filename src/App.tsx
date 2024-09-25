import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import PreGame from "./components/PreGame";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            name="Player 1"
            symbol="X"
            isPlaying={isPlaying}
            active={currentPlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            isPlaying={isPlaying}
            active={currentPlayer === "O"}
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
          <GameBoard
            changePlayer={(symbol) => setCurrentPlayer(symbol)}
            currentPlayer={currentPlayer}
            isPlaying={isPlaying}
          />
        )}
      </div>
    </main>
  );
}

export default App;
