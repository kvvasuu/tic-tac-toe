import { CellValue, logRecord } from "../types";

interface Props {
  selectSquare: (symbol: CellValue, rowIndex: number, colIndex: number) => void;
  turns: logRecord[];
}

const initialGameBoard: CellValue[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ selectSquare, turns }: Props) => {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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
