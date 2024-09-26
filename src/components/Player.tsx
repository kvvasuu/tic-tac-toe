import { useState, useRef } from "react";

import { PlayerSymbol } from "../types";

interface Props {
  name: string;
  symbol: PlayerSymbol;
  isPlaying: boolean;
  isActive?: boolean;
  changePlayerName: (symbol: PlayerSymbol, name: string) => void;
  setEditing: () => void;
}

const Player = ({
  name,
  symbol,
  isPlaying,
  isActive,
  changePlayerName,
  setEditing,
}: Props) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li className={isActive && isPlaying ? "active" : undefined}>
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
            setEditing();
            if (isEditing && inputRef.current?.value !== "") {
              setPlayerName(inputRef.current?.value || "");
              changePlayerName(symbol, inputRef.current?.value || "");
            }
          }}
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
      )}
    </li>
  );
};

export default Player;
