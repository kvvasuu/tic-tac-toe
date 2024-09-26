export type CellValue = "X" | "O" | null;

export type logRecord = {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
};
