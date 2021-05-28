import { useState } from "react";
import { useParams } from "react-router-dom";
import items from ".../server/data/items";
import { Link } from "react-router-dom";
import { GenericButton } from "./GenericComponents/GenericButton";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemdetail, getItemDetail] = useState([]);
  console.log(items);
};

export default ItemDetails;
