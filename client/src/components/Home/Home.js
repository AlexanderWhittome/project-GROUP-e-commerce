import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ItemPreview from "./ItemPreview";
import Paginator from "./Paginator";
import CartFeedback from "../GenericComponents/CartFeedback";
import {CartContext} from "../CartContext"

const Home = ({}) => {
  const params = useParams();
  const [productsArray, setProductsArray] = React.useState([]);
  const [maxPage, setMaxPage] = React.useState(1);
  const {feedback, feedBackCountDown} = React.useContext(CartContext)

  const fetchProductsArray = async (pageNum = 1) => {
    const res = await fetch(`/api/product?pageNumber=${pageNum}`);
    const json = await res.json();
    setProductsArray(json.data.products);
    setMaxPage(json.data.maxPage);
    // setProductsArray([ //TODO remove this placeholder once endpoint functional
    //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    // ])
  };

  React.useEffect(() => {
    fetchProductsArray(params.pageNum);
  }, [params]);

  // console.log(`❗ Home.js:29 'feedback' <${typeof feedback}>`,feedback);
  // console.log(`❗ Home.js:30 'feedBackCountDown' <${typeof feedBackCountDown}>`,feedBackCountDown);

  return (
    <>
      <Wrapper>
        {!!feedBackCountDown && (
          <CartFeedback id="feedback">{feedback}</CartFeedback>
        )}
        <SubWrapper numberPerRow={4}>
          {productsArray.map((item) => {
            return <ItemPreview {...item} />;
          })}
        </SubWrapper>
        <Paginator maxPage={maxPage}></Paginator>
      </Wrapper>
    </>
  );
};
const SubWrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px; //bobby
  & > div {
    border: 5px rgba(0, 0, 0, 0) solid; //bobby
    width: ${(props) => {
      return 100 / props.numberPerRow.toString() + "%";
    }};
  }
`;

const Wrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--primary-color);
  color: var(--text);
  padding: 20px;
`;

export default Home;
