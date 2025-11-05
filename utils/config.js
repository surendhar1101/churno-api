require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const BASE_STORE_URL = process.env.BASE_STORE_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
module.exports = {
  MONGODB_URI,
  PORT,
  SECRET_KEY,
  BASE_STORE_URL,
  SHOPIFY_ACCESS_TOKEN,
};
