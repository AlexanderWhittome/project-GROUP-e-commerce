import React from "react";
import styled from "styled-components";
import Thumbnail from "../GenericComponents/Thumbnail"
const ItemPreview = ({ numberPerRow = 4 }) => {
  return (
    <Wrapper numberPerRow={numberPerRow}>
      <Thumbnail src="http://via.placeholder.com/100x100"></Thumbnail>
      <p>I'm a placeholder</p>
      <p>$420.69</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: ${(props) => {
    return 100 / props.numberPerRow.toString() + "%";
  }};
  text-overflow:ellipsis;
`;

const ProductName = ({short=false}) => {

};
export default ItemPreview;
