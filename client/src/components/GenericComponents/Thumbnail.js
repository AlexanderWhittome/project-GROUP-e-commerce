import styled from "styled-components";

const Thumbnail = styled.img`
  position: relative;
  height: 152px;
  width: 100%;
  background-size: cover;
  overflow: hidden;

  :hover {
    transform: scale(1.2);
    z-index: 1;
  }
`;

export default Thumbnail;
