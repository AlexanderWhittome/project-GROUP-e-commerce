let items = require("./data/items.json");
const companies = require("./data/companies.json");

const sendResponse = (res, status, data, message) => {
  return res.status(status).json({ status, data, message });
};

const getProducts = (req, res) => {
  const products = items;

  const { pageNumber } = req.query;
  const data = {
    products: products.slice(0 + (pageNumber - 1) * 24, pageNumber * 24),
    maxPage: Math.ceil(products.length / 24),
  };
  if (pageNumber) {
    sendResponse(res, 200, data);
  } else {
    sendResponse(res, 200, products);
  }

  console.log(pageNumber, "asdasdasd");
};

const getSingleProduct = (req, res) => {
  const products = items;
  const { id } = req.params;

  const productId = products.find((e) => e._id == id);
  sendResponse(res, 200, productId);
};

const getSingleCompany = (req, res) => {
  const allCompanies = companies;
  const { id } = req.params;

  const companyId = allCompanies.find((e) => e._id == id);

  sendResponse(res, 200, companyId);
};

const updateProductById = (req, res) => {
  const product = req.body;
  const { id } = req.params;

  if (id != product._id) {
    //todo: make error
    return;
  }

  let newArray = [];

  items.forEach((elem) => {
    if (elem._id == id) {
      newArray.push(product);
    } else {
      newArray.push(elem);
    }
  });

  items = newArray;

  sendResponse(res, 200, product);
};

module.exports = {
  getProducts,
  getSingleProduct,
  getSingleCompany,
  updateProductById,
};
