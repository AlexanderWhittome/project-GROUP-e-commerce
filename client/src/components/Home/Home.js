import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemPreview from "./ItemPreview";
import Paginator from "./Paginator";
const Home = ({}) => {
  const params = useParams();
  const [productsArray, setProductsArray] = React.useState([]);

  const fetchProductsArray = async (pageNum) => {
    // const res = await fetch(`http://localhost:4000/api/homepage/${pageNum}`);
    // const json = await res.json();
    // console.log(`❗ Home.js:11 'json' <${typeof json}>`, json);
    // setProductsArray(JSON.parse(json).body)
    setProductsArray([ //TODO remove this placeholder once endpoint functional
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ])
  };

  React.useEffect(() => {
    fetchProductsArray(params.pageNum)
    console.log(`❗ Home.js:22 'refetching productsArray'`);
  }, [params]);

  return (
    <>
      <Wrapper>
        <p>Page number: {params.pageNum}</p>
        <SubWrapper numberPerRow={4} >
          {productsArray.map((item) => {
            return <ItemPreview imgSrc={item.imgSrc}/>;
          })}
        </SubWrapper>
        <Paginator></Paginator>
      </Wrapper>
    </>
  );
};
const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap: wrap;
  padding:5px; //bobby
  &>div {
    border:5px rgba(0,0,0,0) solid; //bobby
    width: ${(props) => {
    return 100 / props.numberPerRow.toString() + "%";
  }};
  }
`;

const Wrapper = styled.div``;

export default Home;
