import styled from "styled-components";
import PropTypes from "prop-types";

const SquareWrapper = styled.button`
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

const StepButtonWrapper = styled.button`
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

const Square = ({ index, value, handleClick }) => {
  const handleClickSquare = () => {
    handleClick(index);
  };
  return (
    <SquareWrapper current={false} onClick={handleClickSquare}>
      {value}
    </SquareWrapper>
  );
};

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StepButton = ({ isCurrent, index, handleStepNum, record }) => {
  const children =
    "Go to move " +
    (index ? `${index} (${record.row}, ${record.col})` : "game start");

  const handleClickStep = () => {
    handleStepNum(index);
  };

  return (
    <li>
      <StepButtonWrapper isCurrent={isCurrent} onClick={handleClickStep}>
        {children}
      </StepButtonWrapper>
    </li>
  );
};

export function Board({ num, squares, handleSquare }) {
  let board = [];
  for (let i = 0; i < num; i += 1) {
    let boardRow = [];
    for (let j = 0; j < num; j += 1) {
      const index = j + num * i;
      boardRow.push(
        <Square
          handleClick={handleSquare}
          key={index}
          index={index}
          value={squares[index]}
        />
      );
    }
    board.push(<div>{boardRow}</div>);
  }

  return board;
}

Square.propTypes = {
  index: PropTypes.number,
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

StepButton.propTypes = {
  isCurrent: PropTypes.bool,
  index: PropTypes.number,
  value: PropTypes.string,
  handleStepNum: PropTypes.func,
  record: PropTypes.object,
};
