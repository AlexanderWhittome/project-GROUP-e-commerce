import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SiteHeader = ({}) => {
  return (
    <Wrapper>
      <Link to="/">
        <h1>don't forget to push it</h1>
      </Link>
      <Nav>
        <Link to="/cart">
          <h2>cart</h2>
        </Link>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export default SiteHeader;
