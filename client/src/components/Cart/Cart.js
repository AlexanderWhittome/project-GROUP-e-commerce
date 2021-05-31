import React from "react";
import { createContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import CartItemSummary from "./CartItemSummary";
const Cart = () => {
  console.log(`❗ Cart.js:7 'React.useContext(CartContext)' <${typeof React.useContext(CartContext)}>`,React.useContext(CartContext));
  const { cartContents, cartDispatch } = React.useContext(CartContext);
  return (
    <Wrapper>
      {Object.keys(cartContents).map((id) => {
        const props = { ...cartContents[id], cartDispatch: cartDispatch };
        return <CartItemSummary {...props} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Cart;
