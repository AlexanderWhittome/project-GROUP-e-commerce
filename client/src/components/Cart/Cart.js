import React from "react";
import { createContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import CartItemSummary from "./CartItemSummary";
const Cart = () => {
  console.log(
    `❗ Cart.js:7 'React.useContext(CartContext)' <${typeof React.useContext(
      CartContext
    )}>`,
    React.useContext(CartContext)
  );
  const { cartContents, cartDispatch } = React.useContext(CartContext);
  return (
    <Wrapper>
      {!Object.keys(cartContents).length && <SomeElements />}
      {Object.keys(cartContents).map((id) => {
        const props = { ...cartContents[id], cartDispatch: cartDispatch };
        return <CartItemSummary {...props} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--primary-color);
  color: var(--text);
  padding: 10px;
  min-height: 100vh;
`;

const SomeElements = styled.div``;
export default Cart;
