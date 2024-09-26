import { CellValue } from "../types";

interface Props {
  selectSquare: (symbol: CellValue, rowIndex: number, colIndex: number) => void;
  turns: CellValue[][];
}

const GameBoard = ({ selectSquare, turns }: Props) => {
  return (
    <ol id="game-board">
      {turns.map((row, rowIndex) => {
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
