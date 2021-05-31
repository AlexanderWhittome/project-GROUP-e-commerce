import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const GenericInputField = styled.input`
  border-radius: 3px;
  border: 1px solid #e4e8eb;
  box-sizing: border-box;
  color: #464a5c;
  font-size: 15px;
  font-weight: 300;
  height: 36px;
  padding: 8px 12px 10px 12px;
  width: 100%;
`;

export default GenericInputField;
