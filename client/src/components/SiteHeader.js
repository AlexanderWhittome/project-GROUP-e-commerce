import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const SiteHeader = () => {
  const { cartContents } = React.useContext(CartContext);
  const cartProductCount = Object.keys(cartContents).length;

  return (
    <Wrapper>
      <Link to="/">
        <h1>Budget Alibaba</h1>
      </Link>
      <Nav cartProductCount={cartProductCount}>
        <Link to="/cart">
          <h2 className={cartProductCount ? "display-product-count" : ""}>
            cart
          </h2>
        </Link>
      </Nav>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--secondary-color);
`;

const Nav = styled.nav`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--misc);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  & .display-product-count {
    position: relative;
  }
  & .display-product-count::after {
    content: "${(props) => {
      return props.cartProductCount;
    }}";
    min-height: 1.2em;
    min-width: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    background-color: #e81140;
    border-radius: 9999px;
    position: absolute;
    top: -10px;
    left: calc(100% - 5px);
    z-index: 1;
    color: #fff;
  }
`;

export default SiteHeader;
