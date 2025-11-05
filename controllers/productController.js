const productServices = require("../services/productServices");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      // const { email, username, password } = req.body;
      const response = await productServices.getAllProducts();

      return res
        .status(200)
        .json({ message: "Products Retrieved", products: response });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = productController;
