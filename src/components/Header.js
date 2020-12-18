import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/style";
import { Link, useLocation } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  height: 10vh;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const NavItem = styled(Link)`
  color: #caae5b;
  text-decoration: none;
  border: 1px solid #caae5b;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 10px;

  &:hover {
    background: #2e2e2c;
    border-color: transparent;
  }

  ${(props) => props.$active && "background: #2E2E2C;"};
`;

export default function Header() {
  let location = useLocation();

  return (
    <Nav>
      <Wrapper>{/* <h1>REACT GAMES</h1> */}</Wrapper>
      <div>
        <NavItem to="/" $active={location.pathname === "/"}>
          Home
        </NavItem>
        <NavItem to="/tictactoe" $active={location.pathname === "/tictactoe"}>
          Tic-Tac-Toe
        </NavItem>
        <NavItem to="/gobang" $active={location.pathname === "/gobang"}>
          Gobang
        </NavItem>
      </div>
    </Nav>
  );
}
