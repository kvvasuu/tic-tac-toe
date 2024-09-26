import { logRecord } from "../types";

interface Props {
  gameTurns: logRecord[];
}

const Log = ({ gameTurns }: Props) => {
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        return (
          <li>
            <span>{turn.square.row}</span>
            <span>{turn.square.col}</span>
            <span>{turn.player}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
