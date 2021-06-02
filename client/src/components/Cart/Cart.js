import React from "react";
import { createContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import CartItemSummary from "./CartItemSummary";
import { CartButton } from "../Item/ItemCartButton";
import { useHistory } from "react-router-dom";

const Cart = () => {
  console.log(
    ` Cart.js:7 'React.useContext(CartContext)' <${typeof React.useContext(
      CartContext
    )}>`,
    React.useContext(CartContext)
  );
  const {
    cartContents,
    cartDispatch,
    setPurchased,
    setFeedback,
    setFeedBackCountDown,
  } = React.useContext(CartContext);
  const history = useHistory();
  return (
    <Wrapper>
      {!Object.keys(cartContents).length && <SomeElements />}
      {Object.keys(cartContents).map((id) => {
        const props = { ...cartContents[id], cartDispatch: cartDispatch };
        return <CartItemSummary {...props} />;
      })}
      <CartButton
        onClick={(ev) => {
          ev.preventDefault();
          cartDispatch({ type: "commitLocallyStoredChanges" });
          setPurchased(true);
          localStorage.removeItem("pendingCartChanges");

          const feedbackPurchaseStr = `Purchased all items in cart. Thank you for shopping at Budget Alibaba!`;
          setFeedback(feedbackPurchaseStr);
          setFeedBackCountDown(2);
          history.push("/");
        }}
      >
        Confirm Purchase
      </CartButton>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--primary-color);
  color: var(--text);
  padding: 10px;
  min-height: 100vh;
`;

const SomeElements = styled.div``;
export default Cart;
