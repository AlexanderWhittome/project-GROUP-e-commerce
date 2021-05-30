import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const SiteHeader = ({}) => {
  const cartProductCount = Object.keys(React.useContext(CartContext)).length;

  return (
    <Wrapper>
      <Link to="/">
        <h1>don't forget to push it</h1>
      </Link>
      <Nav
      >
        <Link to="/cart">
          <h2 className={cartProductCount ? "display-product-count" : ""}>cart</h2>
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
  & .display-product-count::after {
    content: "${(props)=>{return props.cartProductCount}}";
    background-color:#E81140;
    border-radius:9999px;
    padding:5px;
    position:absolute;
    top:-5px;
    left:calc(100% + 5px);
    z-index:1;
  }
`;

export default SiteHeader;
