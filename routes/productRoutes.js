const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/getAllproducts", productController.getAllProducts);

module.exports = productRouter;
