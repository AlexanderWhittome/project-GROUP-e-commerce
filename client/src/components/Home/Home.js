import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemPreview from "./ItemPreview";
import Paginator from "./Paginator";
const Home = ({}) => {
  const arrayOfProducts = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]; //TODO replace with fetched array
  return (
    <>
     <Wrapper>
        <p>Page number: {useParams().pageNum}</p>
        <SubWrapper>
          
          {arrayOfProducts.map(() => {
            return <ItemPreview numberPerRow={4}/>;
          })}
        </SubWrapper>
        <Paginator></Paginator>
     </Wrapper>
    </>
  );
};
const SubWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;`;

const Wrapper = styled.div`
`

export default Home;
