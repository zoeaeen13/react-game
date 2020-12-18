import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Tictactoe from "../pages/Tictactoe";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";

const fakeData = {
  name: "Tic-Tac-Toe",
  num: "1",
  desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  position: relative;
  margin: 20vh auto;
  border-bottom: 1px solid #d1d1d1;
  border-top: 0.5rem solid #2e2e2e;
  padding: 10px;
  width: 80vw;
  height: 50vh;

  &:before {
    content: "${(props) => props.$title && "GAME • " + props.$title}";
    font-weight: bold;
    color: #2e2e2e;
    font-size: 16px;
    position: absolute;
    top: -30px;
  }
`;
const Wrapper = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameIntroWrappre = styled.div`
  padding: 10px;
  width: 50%;
  color: #2e2e2e;

  h1 {
    margin: 10px 0;
    font-size: 56px;
    font-weight: bold;
  }

  h2 {
    font-size: 35px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }
`;

const ArrowWrapper = styled.div`
  margin: 30px;
  width: 50px;
  height: 50px;
  background: orange;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

function GameIntro({ num, name, desc }) {
  return (
    <GameIntroWrappre>
      <h1>{"NO. " + num}</h1>
      <h2>{name}</h2>
      <p>{desc}</p>
    </GameIntroWrappre>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper>
        <ArrowWrapper>
          <img alt="left" src={leftArrow} />
        </ArrowWrapper>
        <GameWrapper>
          <Wrapper>
            <Tictactoe />
          </Wrapper>
          <GameIntro
            num={fakeData.num}
            name={fakeData.name}
            desc={fakeData.desc}
          />
        </GameWrapper>
        <ArrowWrapper>
          <img alt="left" src={rightArrow} />
        </ArrowWrapper>
      </AppWrapper>
      {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tictactoe">
            <Tictactoe />
          </Route>
        </Switch> */}
    </Router>
  );
}

export default App;
