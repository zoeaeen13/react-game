import styled from 'styled-components';


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
`

const StepButton = styled.button`
  margin-bottom: 3px;
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  background: ${(props) => props.current? 'gold': '#EEEEEE'};
`

function RenderSquare({index, value, onClick}) {
  const handleClickSquare = () => {
    onClick(index)
  }
  return (
    <Square current={false} onClick={handleClickSquare}>{value}</Square>
  )
}

export function RenderStepButton({index, onClick}) {
  const handleClickStep = () => {
    onClick(index);
  }
  const children = 'Go to move ' + (index? index :'game start');

  return (
    <li><StepButton onClick={handleClickStep}>{children}</StepButton></li>
  )
}

export function Board({pieceList, handleSquare}) {
  return (
    <div>
        <div className="board-row">
          <RenderSquare onClick={handleSquare} index={0} value={pieceList[0]}/>
          <RenderSquare onClick={handleSquare} index={1} value={pieceList[1]}/>
          <RenderSquare onClick={handleSquare} index={2} value={pieceList[2]}/>
        </div>
        <div className="board-row">
          <RenderSquare onClick={handleSquare} index={3} value={pieceList[3]}/>
          <RenderSquare onClick={handleSquare} index={4} value={pieceList[4]}/>
          <RenderSquare onClick={handleSquare} index={5} value={pieceList[5]}/>
        </div>
        <div className="board-row">
          <RenderSquare onClick={handleSquare} index={6} value={pieceList[6]}/>
          <RenderSquare onClick={handleSquare} index={7} value={pieceList[7]}/>
          <RenderSquare onClick={handleSquare} index={8} value={pieceList[8]}/>
        </div>
      </div>
  )
}