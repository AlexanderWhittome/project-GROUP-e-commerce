import styled from "styled-components";

const Thumbnail = styled.img`
  position: relative;
  height: 152px;
  width: 152px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  transition: transform 0.33s ease-in-out;
  &.animated:hover {
    transform: scale(1.2);
    z-index: 1;
  }
  &.spaced-thumbnail {
    padding: 15px;
  }
`;

export default Thumbnail;
