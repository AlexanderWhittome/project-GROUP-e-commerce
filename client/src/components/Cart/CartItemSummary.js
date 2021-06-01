import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import GenericInputField from "../GenericComponents/GenericInputField";
import { GenericButton } from "../GenericComponents/GenericButton";
import Thumbnail from "../GenericComponents/Thumbnail";
import { CartContext } from "../CartContext";

const CartItemSummary = (props) => {
  const { cartContents, cartDispatch } = React.useContext(CartContext);
  const [deleteDialogVisible, setDeleteDialogVisible] = React.useState(false);
  const [newNumInCart, setNewNumInCart] = React.useState(
    cartContents[props._id].numInCart
  );
  const itemSummary = useRef(null);
  const total =
    Math.round(
      parseFloat(cartContents[props._id].price.slice(1)) * newNumInCart * 100
    ) / 100;
  return (
    <Row ref={itemSummary}>
      <ThumbnailWrapper>
        <Thumbnail
          src={cartContents[props._id].imageSrc}
          className="spaced-thumbnail"
        ></Thumbnail>
      </ThumbnailWrapper>
      <Row>
        <Details>
          <ItemName>{cartContents[props._id].name}</ItemName>
          <PriceMath>
            {cartContents[props._id].price + " \u00D7"}
            <GenericInputField
              type="number"
              name="num-in-cart"
              onChange={(ev) => {
                setNewNumInCart(ev.target.value);
                const oldPendingCartChanges =
                  localStorage.getItem("pendingCartChanges");
                !oldPendingCartChanges &&
                  localStorage.setItem(
                    "pendingCartChanges",
                    JSON.stringify({})
                  );

                localStorage.setItem(
                  "pendingCartChanges",
                  JSON.stringify({
                    ...JSON.parse(oldPendingCartChanges),
                    [props._id]: parseInt(ev.target.value) || 0,
                  })
                );
                console.log(
                  `❗ CartItemSummary.js:41 'localStorage' <${typeof localStorage}>`,
                  localStorage
                );
              }}
              value={newNumInCart}
            ></GenericInputField>
          </PriceMath>
          <Total total={total}></Total>
        </Details>
        <DeleteBlock>
          {!deleteDialogVisible && (
            <GenericButton
              onClick={(ev) => setDeleteDialogVisible((state) => !state)}
            >
              Remove from cart
            </GenericButton>
          )}
          {deleteDialogVisible && [
            <GenericButton
              onClick={(ev) => {

                const oldPendingCartChanges =
                  localStorage.getItem("pendingCartChanges");
                !oldPendingCartChanges &&
                  localStorage.setItem(
                    "pendingCartChanges",
                    JSON.stringify({})
                  );

                localStorage.setItem(
                  "pendingCartChanges",
                  JSON.stringify({
                    ...JSON.parse(oldPendingCartChanges),
                    [props._id]: 0,
                  })
                );
                console.log(`❗ CartItemSummary.js:89 'localStorage' <${typeof localStorage}>`,localStorage);
                itemSummary.current.style.display = "none";
                
              }}
            >
              {"\u2713"}
            </GenericButton>,
            <GenericButton
              onClick={() => setDeleteDialogVisible((state) => !state)}
            >
              {"\u2717"}
            </GenericButton>,
          ]}
        </DeleteBlock>
      </Row>
    </Row>
  );
};
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ThumbnailWrapper = styled.div`
  padding: 20px;
`;

const Details = styled.div`
  border: 2px solid white;
  border-width: 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75%;
  padding: 15px;
  & > div {
    padding: 5px;
  }
`;

const PriceMath = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DeleteBlock = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 25%;
`;
const updateTotalAnimation = keyframes`
0% {opacity:1}
100% {opacity:0}
`;
const ItemName = styled.div``;

const Total = ({ total }) => {
  return (
    <TotalDiv key={total} total={total}>
      <span>Total: {total}</span>
    </TotalDiv>
  );
};

const TotalDiv = styled.div`
  position: relative;
  & span {
    position: relative;
    z-index: 1;
  }
  & span::after {
    content: "";
    position: absolute;
    background-color: #fea;
    top: -3px;
    left: -3px;
    color: rgba(0, 0, 0, 0);
    z-index: -1;
    border: 3px #fec solid;
    border-radius: 2px;
    width: 100%;
    height: 100%;
    animation: ${updateTotalAnimation} 2s forwards;
  }
`;

export default CartItemSummary;
