import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";
import { CartButton } from "./ItemCartButton";
import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";
import GenericInputField from "../GenericComponents/GenericInputField";

const ItemDetails = (props) => {
  const itemId = useParams();
  const [itemdetail, setItemDetail] = React.useState({});

  const fetchItemDetail = async (id) => {
    const res = await fetch(`/api/product/${id}`);
    const json = await res.json();
    console.log(`❗ ItemDetails.js:21 'json' <${typeof json}>`, json);
    setItemDetail(json.data);
  };

  React.useEffect(() => {
    fetchItemDetail(itemId.productId);
    console.log(`❗ ItemDetails.js:29 'refetching itemdetail'`);
  }, [itemId]);

  const { cartContents, cartDispatch } = React.useContext(CartContext);

  // const [newNumInCart, setNewNumInCart] = React.useState(
  //   cartContents[itemId.productId].numInCart
  // );

  console.log(`❗ ItemDetails.js:32 'itemdetail' <${typeof itemdetail}>`);
  return (
    <ItemWrapper>
      <ItemName>{itemdetail.name}</ItemName>
      <ItemThumbnail src={itemdetail.imageSrc}></ItemThumbnail>
      <CompanyInfo value={itemdetail.companyId}></CompanyInfo>
      <ItemPurchase>
        <CartButton
          onClick={(ev) => {
            cartDispatch({
              type: "add",
              itemObject: itemdetail,
              numberAddedToCart: 1,
            });
          }}
        >
          Add Cart
        </CartButton>
        {/* <GenericInputField
          type="number"
          name="num-in-cart"
          onChange={(ev) => {
            setNewNumInCart(ev.target.value);
          }}
          onBlur={(ev) => {
            console.log(
              `❗ CartItemSummary.js:40 'ev.target.value' <${typeof ev.target
                .value}>`,
              ev.target.value
            );
          }}
          value={newNumInCart}
        ></GenericInputField> */}
        <ItemPrice>{itemdetail.price}</ItemPrice>
      </ItemPurchase>
      <ItemPosition>
        <ItemLoc>{itemdetail.body_location}</ItemLoc>
        <ItemCategory>{itemdetail.category}</ItemCategory>
      </ItemPosition>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div``;

const ItemName = styled.h1`
  font-weight: bolder;
  font-size: 40px;
  margin: 0px;
  text-align: center;
  margin-bottom: 30px;
`;

const ItemPurchase = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ItemPrice = styled.h1`
  align-self: center;
`;

const ItemPosition = styled.div`
  display: flex;
  gap: 60px;
`;

const ItemLoc = styled.h1``;
const ItemCategory = styled.h1``;

export default ItemDetails;
