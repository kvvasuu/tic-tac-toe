import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" isPlaying={isPlaying} />
          <Player name="Player 2" symbol="O" isPlaying={isPlaying} />
        </ol>
        {!isPlaying && (
          <button onClick={() => setIsPlaying((state) => !state)}>
            Start Game
          </button>
        )}
      </div>
    </main>
  );
}

export default App;
