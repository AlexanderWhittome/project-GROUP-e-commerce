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
  // console.log(`isLoading: ${isLoading}`);
  return (
    <>
      {isLoading ? (
        <p>Loading Company...</p>
      ) : (
        company &&
        !!Object.keys(company).length && (
          <CompanyWrappper>
            <CompanyUrl href={company.url}>{company.name}</CompanyUrl>
            <CompanyText>in {company.country}</CompanyText>
          </CompanyWrappper>
        )
      )}
    </>
  );
};

const CompanyWrappper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CompanyUrl = styled.a`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
  color: var(--text);
  text-decoration: underline;
`;

const CompanyText = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
  color: var(--text);
  padding-left: 5px;
`;

export default CompanyInfo;
