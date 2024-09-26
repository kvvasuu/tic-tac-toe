export type PlayerSymbol = "X" | "O";

export type CellValue = PlayerSymbol | null;

export type logRecord = {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
};
