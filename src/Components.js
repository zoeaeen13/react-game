import styled from "styled-components";

const Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
    background: #ddd;
  }
`;

const StepButton = styled.button`
  margin-bottom: 3px;
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  background: ${(props) => (props.isCurrent ? "gold" : "#EEEEEE")};

  &:focus {
    outline: none;
    background: gold;
  }
`;

function RenderSquare({ index, value, onClick }) {
  const handleClickSquare = () => {
    onClick(index);
  };
  return (
    <Square current={false} onClick={handleClickSquare}>
      {value}
    </Square>
  );
}

function RenderRow() {}

export function RenderStepButton({ isCurrent, index, onClick, data }) {
  const handleClickStep = () => {
    onClick(index);
  };
  const children =
    "Go to move " +
    (index ? `${index} (${data.row}, ${data.col})` : "game start");
  return (
    <li>
      <StepButton isCurrent={isCurrent} onClick={handleClickStep}>
        {children}
      </StepButton>
    </li>
  );
}

export function Board({ num, squares, handleSquare }) {
  let board = [];
  for (let i = 0; i < num; i += 1) {
    let boardRow = [];
    for (let j = 0; j < num; j += 1) {
      const index = j + num * i;
      boardRow.push(
        <RenderSquare
          onClick={handleSquare}
          key={index}
          index={index}
          value={squares[index]}
        />
      );
    }
    board.push(<div className="board-row">{boardRow}</div>);
  }
  console.log("board", board);

  return board;
}
