const shopifyApi = require("./shopifyApi");
const orderServices = {
  getAllOrders: async () => {
    const response = await shopifyApi.get("/orders.json");
    return response.data;
  },
};

module.exports = orderServices;
