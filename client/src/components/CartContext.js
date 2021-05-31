import React from "react";
import styled from "styled-components";
export const CartContext = React.createContext({
  cartContents: {},
  cartDispatch: null,
});

const cartReducer = (state, action) => {
  console.log(`❗ CartContext.js:6 'state' <${typeof state}>`, state);
  switch (action.type) {
    case "add":
      if (state[action.itemObject.id]) {
        throw new Error(
          `${action.itemObject.id} is already in cartContents. Use "type: update" instead.`
        );
      } else if (state[action.itemsObject.numInCart] === 0) {
        throw new Error(`numInCart cannot be 0 with type: add`);
      }
      return {...state, [action.itemObject.id]:action.itemObject};

    case "update":
      //undefined.numInCart already throws an error
      if (!action.newNumInCart && action.newNumInCart != 0) {
        throw new Error(
          `${action.newNumInCart} is not a valid newNumInCart value`
        );
      } else if (action.newNumInCart==0) {
        const newState = {...state};
        delete newState[action.itemId];
        console.log(`❗ CartContext.js:31 'newState' <${typeof newState}>`,newState);
        return newState;
      } else {
        return {...state, [action.itemId]:{...state[action.itemId],numInCart: action.newNumInCart}}

      }

    default:
      throw new Error(`${action.type} is not a valid type property`);
  }
};
export const CartContextProvider = ({ children }) => {
  const [cartContents, cartDispatch] = React.useReducer(cartReducer, {
    //notice that cartContents is not an array, unlike items.json
    6543: {
      name: "Barska GB12166 Fitness Watch with Heart Rate Monitor",
      price: "$49.99",
      id: 6543,
      body_location: "Wrist",
      category: "Fitness",
      imageSrc:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
      companyId: 19962,
      numInStock: 9,
      numInCart: 5,
    },
  });
  console.log(`❗ CartContext.js:60 'cartContents' <${typeof cartContents}>`,cartContents);
  return (
    <CartContext.Provider
      value={{ cartContents: cartContents, cartDispatch: cartDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
const Wrapper = styled.div``;
export default CartContextProvider;
