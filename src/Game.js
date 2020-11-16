import './App.css';
import {useState} from 'react';
import {calculateWinner} from './Methods';
import {RenderStepButton, Board} from './Components';


export default function Game() {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
    row: null,
    col: null,
  }])
  const [stepNumber, setStepNumber] = useState(0)
  const [player, setPlayer] = useState(true);
  const squares = history[stepNumber].squares;
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = '獲勝者:' + winner;
  } else {
    status = 'Next player:' + (player? 'O': 'X');
  }

  function handleSquare(index) {
    if (winner || squares[index]) return

    const currentHistory = history.slice(0, stepNumber + 1);
    const currentSquares = currentHistory[currentHistory.length -1].squares;
    const newSquare = currentSquares.slice();
    newSquare[index] = (player? 'O': 'X');
    setHistory([
      ...currentHistory,
      {
        squares: newSquare,
      }
    ])
    setPlayer(!player);
    setStepNumber(currentHistory.length);
  }

  function jumpToStep(index) {
    setStepNumber(index);
    setPlayer(!(index % 2) ? true: false);
  }

  return (
    <div className="game">
        <div className="game-board">
          <Board pieceList={squares} handleSquare={handleSquare}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{history.map((value, index) => (
            <RenderStepButton
              key={index}
              index={index}
              onClick={jumpToStep}
            />
          ))}</ol>
        </div>
      </div>
  );
}
