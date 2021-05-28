const items = require("./data/items.json");
const companies = require("./data/companies.json");

const getProducts = (req, res) => {
  const products = items;

  sendResponse(res, 200, products);
};

const getSingleProduct = (req, res) => {
  const products = items;

  const productId = products._id;

  sendResponse(res, 200, productId);
};

const getCompanies = (req, res) => {
  const allCompanies = companies;

  sendResponse(res, 200, allCompanies);
};

const getSingleCompany = (req, res) => {
  const allCompanies = companies;

  const companyId = allCompanies._id;

  sendResponse(res, 200, companyId);
};

module.exports = {
  getProducts,
  getSingleProduct,
  getCompanies,
  getSingleCompany,
};
