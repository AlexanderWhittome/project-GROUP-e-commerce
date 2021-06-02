import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useHistory } from "react-router-dom";
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

  const { cartContents, cartDispatch, setFeedback, setFeedBackCountDown } =
    React.useContext(CartContext);
  const [newNumInCart, setNewNumInCart] = React.useState(1);
  const history = useHistory();
  console.log("Cart test", itemId.productId);
  // console.log(`❗ ItemDetails.js:32 'itemdetail' <${typeof itemdetail}>`);
  // console.log(
  //   `❗ ItemDetails.js:32 'cartContents' <${typeof cartContents}>`,
  //   cartContents
  // );
  // console.log(
  //   `❗ ItemDetails.js:32 '[newNumInCart,cartContents[itemId.productId]]' <${typeof [
  //     newNumInCart,
  //     cartContents[itemId.productId],
  //   ]}>`,
  //   [newNumInCart, cartContents[itemId.productId]]
  // );
  console.log(
    `❗ ItemDetails.js:43 'itemdetail.numInStock' <${typeof itemdetail.numInStock}>`,
    itemdetail.numInStock
  );
  console.log(
    `❗ ItemDetails.js:44 'newNumInCart' <${typeof newNumInCart}>`,
    newNumInCart
  );
  const plannedNumInCartExceedsStock =
    newNumInCart +
      (cartContents[itemId.productId]
        ? cartContents[itemId.productId].numInCart
        : 0) >
    itemdetail.numInStock;

  console.log(
    ` ItemDetails.js:49 'plannedNumInCartExceedsStock' <${typeof plannedNumInCartExceedsStock}>`,
    plannedNumInCartExceedsStock
  );

  return (
    <ItemWrapper>
      <ItemName>{itemdetail.name}</ItemName>
      <ItemThumbnail src={itemdetail.imageSrc}></ItemThumbnail>
      <ItemPosition>
        <CompanyInfo value={itemdetail.companyId}></CompanyInfo>
        <ItemInfoWrapper>
          <ItemLoc>
            <ItemInfo>Body Location:</ItemInfo> {itemdetail.body_location}
          </ItemLoc>
        </ItemInfoWrapper>
        <ItemInfoWrapper>
          <ItemCategory>
            <ItemInfo>Category:</ItemInfo> {itemdetail.category}
          </ItemCategory>
        </ItemInfoWrapper>
      </ItemPosition>
      <ItemPurchase>
        <CartButton
          disabled={plannedNumInCartExceedsStock || newNumInCart == 0}
          onClick={(ev) => {
            cartDispatch({
              type: "add",
              itemObject: itemdetail,
              numInCart: newNumInCart,
            });

            const feedbackStr = `Added ${newNumInCart} x ${itemdetail.name} to your cart`;
            setFeedback(feedbackStr);
            setFeedBackCountDown(2);
            history.push("/");
          }}
        >
          {itemdetail.numInStock ? (
            <>Add to Cart - max {itemdetail.numInStock}</>
          ) : (
            <>Out of Stock</>
          )}
        </CartButton>
        <GenericInputField
          type="number"
          name="num-in-cart"
          onChange={(ev) => {
            console.log(` test`, ev.target.value);
            setNewNumInCart(parseInt(ev.target.value));
          }}
          value={newNumInCart}
        ></GenericInputField>
        <ItemPrice>Price: {itemdetail.price}</ItemPrice>
      </ItemPurchase>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--primary-color);
  color: var(--text);
  padding: 15px;
`;

const ItemName = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 40px;
  margin: 0px;
  text-align: center;
  margin-bottom: 30px;
`;

const ItemPurchase = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ItemPrice = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-self: center;
`;

const ItemPosition = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  margin-top: 20px;
`;
const ItemInfo = styled.p`
  margin-right: 5px;
  color: #000000;
`;
const ItemInfoWrapper = styled.div`
  display: flex;
  background-color: #ffbf66;
  border: 1px var(--secondary-color) solid;
  color: var(--misc);
  border-radius: 999px;
  padding: 4px;
`;

const ItemLoc = styled.h1`
  display: relative;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
`;
const ItemCategory = styled.h1`
  display: relative;
  text-align: center;
`;

export default ItemDetails;
