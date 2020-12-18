import styled from "styled-components";
import PropTypes from "prop-types";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  position: relative;
  margin: 20vh auto;
  border-bottom: 1px solid #d1d1d1;
  border-top: 0.5rem solid #2e2e2e;
  padding: 10px;
  width: 80vw;
  height: 60vh;

  &:before {
    content: "DESIGN BY MENG-HUA";
    font-weight: bold;
    color: #2e2e2e;
    font-size: 16px;
    position: absolute;
    top: -30px;
  }
`;
export const Container = styled.div`
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
    padding: 10px 0;
    font-size: 18px;
    letter-spacing: 0.1em;
  }
`;

export const ArrowWrapper = styled.div`
  margin: 30px;
  width: 50px;
  height: 50px;
  background: orange;

  img {
    width: 100%;
    cursor: pointer;
    transition: 0.2s all ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export function GameIntro({ num, name, desc }) {
  return (
    <GameIntroWrappre>
      <h1>{"NO. " + num}</h1>
      <h2>{name}</h2>
      <p>{desc}</p>
    </GameIntroWrappre>
  );
}

GameIntro.propTypes = {
  num: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
};
