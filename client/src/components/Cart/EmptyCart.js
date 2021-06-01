import React from "react";
import styled from "styled-components";

const BlankCart = () => {
  return (
    <Wrapper>
      <span>Your cart is empty</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & span {
    font-size: 24px;
  }
`;

export default BlankCart;
