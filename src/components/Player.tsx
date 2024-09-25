import { useState, useRef } from "react";

interface Props {
  name: string;
  symbol: "X" | "O";
  isPlaying: boolean;
}

const Player = ({ name, symbol, isPlaying }: Props) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" placeholder={playerName} required ref={inputRef} />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      {!isPlaying && (
        <button
          onClick={() => {
            setIsEditing((state) => !state);
            if (isEditing && inputRef.current?.value !== "")
              setPlayerName(inputRef.current?.value || "");
          }}
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
      )}
    </li>
  );
};

export default Player;
