import { useState, Component } from "react";
import data from ".../server/data/items.json";
import { Link } from "react-router-dom";
import { GenericButton } from "./GenericComponents/GenericButton";

const ItemDetails = () => {
  const [itemdetail, getItemDetail] = useState([]);
  console.log(data);
};
