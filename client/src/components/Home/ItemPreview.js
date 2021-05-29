import React from "react";
import styled from "styled-components";
import Thumbnail from "../GenericComponents/Thumbnail";
const ItemPreview = ({ imgSrc = "http://via.placeholder.com/100x100" }) => {
return (
    <Wrapper>
      <Thumbnail src={imgSrc} />
      <Noverflow>
        I'm a placeholder12345678912345678912345879123456789123456789
      </Noverflow>
      <p>$420.69</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :last-child {
    margin-bottom: 10px;
  }
`;

const Noverflow = styled.div`
  padding: 3px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin: 10px;
`;

const ProductName = ({ short = false }) => {};
export default ItemPreview;
