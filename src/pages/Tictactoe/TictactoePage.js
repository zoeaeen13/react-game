import { useState } from "react";
import { calculateWinner } from "../../utills";
import {
  StepButton,
  Board,
  GameWrapper,
  ResultWrapper,
} from "../../components/Tictactoe";

function Game() {
  const rowNum = 3; // 3*3
  const [records, setRecords] = useState([
    {
      squares: Array(rowNum * rowNum).fill(null),
      row: null,
      col: null,
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [player, setPlayer] = useState(true);
  const squares = records[stepNumber].squares;
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winnder: " + winner;
  } else {
    status = "Next player: " + (player ? "O" : "X");
  }

  const handleSquare = (index) => {
    if (winner || squares[index]) return;
    const currentHistory = records.slice(0, stepNumber + 1);
    const currentSquares = currentHistory[currentHistory.length - 1].squares;
    const newSquare = currentSquares.slice();
    newSquare[index] = player ? "O" : "X";
    setRecords([
      ...currentHistory,
      {
        squares: newSquare,
        row: parseInt(index / rowNum),
        col: index % rowNum,
      },
    ]);
    setPlayer(!player);
    setStepNumber(currentHistory.length);
  };

  const handleStepNum = (index) => {
    setStepNumber(index);
    setPlayer(!(index % 2) ? true : false);
  };

  return (
    <GameWrapper>
      <div>
        <Board num={rowNum} squares={squares} handleSquare={handleSquare} />
      </div>
      <ResultWrapper>
        <h4>{status}</h4>
        <ol>
          {records.map((record, index) => (
            <StepButton
              key={index}
              index={index}
              isCurrent={index === stepNumber}
              record={record}
              handleStepNum={handleStepNum}
            />
          ))}
        </ol>
      </ResultWrapper>
    </GameWrapper>
  );
}

export default Game;
