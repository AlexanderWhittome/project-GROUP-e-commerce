import React from "react";
import styled from "styled-components";
import GenericInputField from "../GenericComponents/GenericInputField";
import { GenericButton } from "../GenericComponents/GenericButton";
import Thumbnail from "../GenericComponents/Thumbnail";

const CartItemSummary = (props) => {

  const [deleteDialogVisible, setDeleteDialogVisible] = React.useState(false);
  const total =
    Math.round(parseFloat(props.price.slice(1)) * props.numInCart * 100) / 100;
  return (
    <Row>
      <Thumbnail src={props.imageSrc}></Thumbnail>
      <Row>
        <Details>
          <div>{props.name}</div>
          <div>
            {props.price + " \u00D7"}
            <GenericInputField number={props.numInCart}></GenericInputField>
          </div>
          <div>Total: {total}</div>
        </Details>
        <DeleteBlock>
          {!deleteDialogVisible && (
            <GenericButton
              onClick={(ev) => 

                  setDeleteDialogVisible((state) => !state)}
            >
              Remove from cart
            </GenericButton>
          )}
          {deleteDialogVisible && [
            <GenericButton
              onClick={(ev)=>{
                props.cartDispatch({
                type: "update",
                itemId: props.id,
                newNumInCart: 0,
              })}}
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

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75%;
`;

const DeleteBlock = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 25%;
`;

export default CartItemSummary;
