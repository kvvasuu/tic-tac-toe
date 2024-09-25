import { useState } from "react";

type CellValue = "X" | "O" | null;

interface Props {
  currentPlayer: "X" | "O";
  changePlayer: (symbol: "X" | "O") => void;
  isPlaying: boolean;
}

const initialGameBoard: CellValue[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ currentPlayer, changePlayer, isPlaying }: Props) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const updateBoard = (value: CellValue, row: number, col: number) => {
    setGameBoard((newBoard) => {
      [...newBoard.map((inner) => [...inner])];
      newBoard[row][col] = value;
      return newBoard;
    });
  };

  const selectSquare = (symbol: CellValue, row: number, col: number) => {
    if (symbol || !isPlaying) {
      return;
    }
    updateBoard(currentPlayer, row, col);
    currentPlayer === "X" ? changePlayer("O") : changePlayer("X");
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => selectSquare(symbol, rowIndex, colIndex)}
                    >
                      {symbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
