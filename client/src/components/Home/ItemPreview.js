import React from "react";
import styled from "styled-components";
import Thumbnail from "../GenericComponents/Thumbnail";
import {useHistory} from "react-router-dom";
const ItemPreview = ({ _id,imageSrc,name,price}) => {
  const history = useHistory();
return (

      <Wrapper onClick={()=>history.push(`/product/${_id}`)}>
        <Thumbnail src={imageSrc} />
        <Noverflow>
          {name}
        </Noverflow>
        <p>{price}</p>
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
