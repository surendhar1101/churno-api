const shopifyApi = require("./shopifyApi");
const productServices = {
  getAllProducts: async () => {
    const response = await shopifyApi.get("/products.json");
    return response.data;
  },
};

module.exports = productServices;
