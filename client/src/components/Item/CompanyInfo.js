import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompanyInfo = (prop) => {
  const [company, getCompany] = React.useState({});
  const [isLoading, setisLoading] = React.useState(true);

  const fetchCompanyInfo = async (compId) => {
    const res = await fetch(`/api/company/${compId}`);
    const json = await res.json();
    // console.log(` CompanyInfo.js:11 'json' <${typeof json}>`, json);
    getCompany(json.data);
    if (json.data != undefined) {
      setisLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCompanyInfo(prop.value);
    // console.log(` CompanyInfo.js:16 'refetching CompanyInfo'`);
  }, [prop]);

  // console.log(` CompanyInfo.js:20 'company' <${typeof company}>`, company);
  console.log(`isLoading: ${isLoading}`);
  return (
    <>
      {isLoading ? (
        <p>Loading Company...</p>
      ) : (
        !!Object.keys(company).length && (
          <CompanyUrl href={company.url}>
            {company.name} in {company.country}
          </CompanyUrl>
        )
      )}
    </>
  );
};

const CompanyUrl = styled.a`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
  color: var(--text);
`;

export default CompanyInfo;
