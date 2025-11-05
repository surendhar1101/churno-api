const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.get("/getAllOrders", orderController.getAllOrders);

module.exports = orderRouter;
