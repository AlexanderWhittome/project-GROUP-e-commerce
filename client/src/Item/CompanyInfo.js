import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CompanyInfo = () => {
  //   const { companyId } = useParams();
  const [company, setCompany] = React.useState([]);
  let sampleCompany = {
    name: "Barska",
    url: "http://www.barska.com/",
    country: "United States",
    _id: 19962,
  };

  return (
    <>
      <CompanyUrl href={sampleCompany.url}>
        {sampleCompany.name} in {sampleCompany.country}
      </CompanyUrl>
    </>
  );
};

const CompanyUrl = styled.a`
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
`;

export default CompanyInfo;
