import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Tictactoe from "../pages/Tictactoe";
import { useLocation } from "react-router-dom";
import leftArrow from "../images/left-arrow.svg";
import rightArrow from "../images/right-arrow.svg";
import {
  AppWrapper,
  ArrowWrapper,
  Wrapper,
  Container,
  GameIntro,
} from "./Home";

const fakeData = {
  name: "Tic-Tac-Toe",
  num: "1",
  desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

function App() {
  return (
    <Router>
      <AppWrapper>
        <ArrowWrapper>
          <img alt="left" src={leftArrow} />
        </ArrowWrapper>
        <Wrapper>
          <Container>
            <Tictactoe />
          </Container>
          <GameIntro
            num={fakeData.num}
            name={fakeData.name}
            desc={fakeData.desc}
          />
        </Wrapper>
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
