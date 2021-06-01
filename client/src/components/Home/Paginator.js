import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const Paginator = ({ maxPage }) => {
  const currentPage = parseInt(useParams().pageNum) || 1;
  const isLastPage = currentPage == maxPage; //TODO
  const [prevPageURL, nextPageURL] = [
    `${currentPage - 1}`,
    `${useParams().pageNum ? "" : "page/"}${currentPage + 1}`,
  ];
  return (
    <Wrapper>
      {!!(currentPage - 1) && (
        <Link to={prevPageURL}>
          <PaginationArrow>{"<"}</PaginationArrow>
        </Link>
      )}
      <NumberOfCurrentPage>{currentPage}</NumberOfCurrentPage>
      {!isLastPage && (
        <Link to={nextPageURL}>
          <PaginationArrow>{">"}</PaginationArrow>
        </Link>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PaginationArrow = styled.div`
  color: var(--text);
  margin: 10px;
`;

const NumberOfCurrentPage = styled.div`
  font-size: 1.2em;
`;
export default Paginator;
