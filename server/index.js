"use strict";
const {
  getProducts,
  getSingleProduct,
  getSingleCompany,
  updateProductById,
} = require("./Handlers");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

// REST endpoints
app.get("/api/product", getProducts);

app.get("/api/product/:id", getSingleProduct);

app.get("/api/test", (req, res) => res.status(202).end());

app.get("/api/company/:id", getSingleCompany);

app.put("/api/product/:id", updateProductById);

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
