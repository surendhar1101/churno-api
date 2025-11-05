const { default: axios } = require("axios");
const config = require("../utils/config");
const shopifyApi = require("./shopifyApi");
const userServices = {
  getAllCustomers: async () => {
    const response = await shopifyApi.get("/customers.json");
    return response.data;
  },
};

module.exports = userServices;
