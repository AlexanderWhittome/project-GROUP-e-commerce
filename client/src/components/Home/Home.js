import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemPreview from "../ItemPreview";
const Home = ({}) => {
  const arrayOfProducts = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]; //TODO replace with fetched array
  return (
    <>
      <p>Page number: {useParams.pageNum}</p>
      <Wrapper>
        
        {arrayOfProducts.map(() => {
          return <ItemPreview numberPerRow={4}/>;
        })}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;`;

export default Home;
