"use strict";

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

// REST endpoints?
app.get("/api/product/:pagenumber", (req, res) => res.status(200).json());

app.get("/api/product/:id", (req, res) => res.status(200).json());

app.get("/api/company/:id", (req, res) => res.status(200).json());

app.put("/api/product/:id/", (req, res) => res.status(200).json());

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
