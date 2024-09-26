import { logRecord } from "../types";

interface Props {
  gameTurns: logRecord[];
}

const Log = ({ gameTurns }: Props) => {
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
