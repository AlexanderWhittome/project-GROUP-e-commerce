import React from "react";
import styled from "styled-components";
export const CartContext = React.createContext({});

const cartReducer = (state, action) => {
  console.log(`❗ CartContext.js:6 'state' <${typeof state}>`, state);
  switch (action.type) {
    case "add":
      state[action.itemObject.id] = action.itemObject;
      break;
    case "update":
      state[action.itemId].numInCart = action.newNumInCart;
      break;
    default:
      throw new Error(`${action.type} is not a valid type property`);
  }
  console.log(`❗ CartContext.js:16 'state' <${typeof state}>`, state);
};
export const CartContextProvider = ({ children }) => {
  const [cartContents, cartDispatch] = React.useReducer(cartReducer, {});
  return <CartContext.Provider value={{cartContents:cartContents,cartDispatch:cartDispatch}}>{children}</CartContext.Provider>;
};
const Wrapper = styled.div``;
export default CartContextProvider;
