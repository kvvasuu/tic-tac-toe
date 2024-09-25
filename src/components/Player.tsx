import { useState, useRef } from "react";

interface Props {
  name: string;
  symbol: "X" | "O";
}

const Player = ({ name, symbol }: Props) => {
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
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          if (isEditing) setPlayerName(inputRef.current?.value || "");
        }}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
};

export default Player;
