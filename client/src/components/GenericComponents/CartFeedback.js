import styled from "styled-components";

const CartFeedback = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: var(--misc);
  text-align: center;
  margin-top: -11px;
  padding: 20px;
  background-color: #ffbf66;
  border: 1px var(--secondary-color) solid;

  /* &.show {
    display: flex;
    font-size: 25px;
  } */
`;

export default CartFeedback;
