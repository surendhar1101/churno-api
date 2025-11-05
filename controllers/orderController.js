const orderServices = require("../services/orderServices");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      // const { email, username, password } = req.body;
      const response = await orderServices.getAllOrders();

      return res
        .status(200)
        .json({ message: "Orders Retrieved", orders: response });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = orderController;
