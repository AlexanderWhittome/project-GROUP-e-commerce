import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const GenericInputField = ({ number }) => {
  return (
    <Form>
      <label>
        {number}
        <input type="number" name="itemNumber" />
      </label>
    </Form>
  );
};
/*ref to point
onclick increment decrement
*/
const Form = styled.div`
  height: 50px;
  width: 10px;
  font-size: 16px;
  /* font-family */
  label {
    display: none;
  }

  input {
    border-radius: 3px;
    border: 1px solid #e4e8eb;
    box-sizing: border-box;
    color: #464a5c;
    font-size: 15px;
    font-weight: 300;
    height: 36px;
    padding: 8px 12px 10px 12px;
    width: 100%;
  }
`;

export default GenericInputField;
