import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const CartContext = React.createContext({
  cartContents: {},
  cartDispatch: null,
});

const cartReducer = (state, action) => {
  console.log(`❗ CartContext.js:6 'state' <${typeof state}>`, state);
  switch (action.type) {
    case "add":
      if (action.numInCart === 0) {
        throw new Error(`numInCart cannot be 0 with type: add`);
      } else if (state[action.itemObject.id]) {
        return {
          ...state,
          [action.itemObject.id]: {
            ...action.itemObject,
            numInCart: action.numInCart + state[action.itemObject.id].numInCart,
          },
        };
      }

      return {
        ...state,
        [action.itemObject.id]: {
          ...action.itemObject,
          numInCart: action.numInCart,
        },
      };

    case "update":
      //undefined.numInCart already throws an error
      if (!action.newNumInCart && action.newNumInCart != 0) {
        throw new Error(
          `${action.newNumInCart} is not a valid newNumInCart value`
        );
      } else if (action.newNumInCart == 0) {
        const newState = { ...state };
        delete newState[action.itemId];
        console.log(
          `❗ CartContext.js:31 'newState' <${typeof newState}>`,
          newState
        );
        return newState;
      } else {
        return {
          ...state,
          [action.itemId]: {
            ...state[action.itemId],
            numInCart: action.newNumInCart,
          },
        };
      }
    case "commitLocallyStoredChanges":
      console.log(action.type);
      const receivedOrderToFinalizePurchase = JSON.parse(
        localStorage.getItem("finalizePurchase")
      );
      const changes = JSON.parse(localStorage.getItem("pendingCartChanges"));
      if (!changes) {
        console.log("No changes to commit");
        return state;
      }
      const changedIds = Object.keys(changes);
      console.log(
        `❗ CartContext.js:53 'changedIds' <${typeof changedIds}>`,
        changedIds
      );
      const updatedItems = changedIds.reduce((accumulator, nextId) => {
        return {
          ...accumulator,
          [nextId]: { ...state[nextId], numInCart: changes[nextId] },
        };
      }, {});

      const upToDateCart = { ...state, ...updatedItems };
      console.log(
        `❗ CartContext.js:66 'upToDateCart' <${typeof upToDateCart}>`,
        upToDateCart
      );

      console.log("done");
      return receivedOrderToFinalizePurchase ? {} : upToDateCart;

    default:
      throw new Error(`${action.type} is not a valid type property`);
  }
};

export const CartContextProvider = ({ children }) => {
  const location = useLocation();

  const [cartContents, cartDispatch] = React.useReducer(cartReducer, {
    //notice that cartContents is not an array, unlike items.json
  });
  React.useEffect(() => {
    //TODO remove
    cartDispatch({
      type: "add",
      itemObject: {
        name: "Barska GB12166 Fitness Watch with Heart Rate Monitor",
        price: "$49.99",
        id: 6543,
        body_location: "Wrist",
        category: "Fitness",
        imageSrc:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
        companyId: 19962,
        numInStock: 9,
      },
      numInCart: 7,
    });
  },[]);
  React.useEffect(() => {
    console.log("useEffect Triggered");
    console.log(
      `❗ CartContext.js:97 'location' <${typeof location}>`,
      location
    );
    const pendingCartChanges = localStorage.getItem("pendingCartChanges");
    if (pendingCartChanges) {
      //cart should never change without handling pending changes, so this should be safe.

      cartDispatch({ type: "commitLocallyStoredChanges" });
    }
  }, [location]);
  React.useEffect(() => {
    console.log("useEffect 2 Triggered");
    const pendingCartChanges = localStorage.getItem("pendingCartChanges");
    if (pendingCartChanges) {
      localStorage.removeItem("pendingCartChanges");
    }
  }, [cartContents]);

  console.log(
    `❗ CartContext.js:60 'cartContents' <${typeof cartContents}>`,
    cartContents
  );
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
