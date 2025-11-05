const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const User = require("../models/user");
const { default: axios } = require("axios");
const userServices = require("../services/userServices");
const { BASE_STORE_URL, SHOPIFY_ACCESS_TOKEN } = require("../utils/config");

const userController = {
  register: async (req, res) => {
    try {
      const { email, username, password } = req.body;

      const user = await User.findOne({ email });

      if (user) {
        return res.status(500).json({ message: "User Already Exist!!" });
      }
      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        username,
        passwordHash: passwordHash,
      });

      const createduser = await newUser.save();

      return res
        .status(200)
        .json({ message: "User Created", newuser: createduser });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User Not Exist!" });
      }
      const isPassword = await bcrypt.compare(password, user.passwordHash);

      if (!isPassword) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        config.SECRET_KEY
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours expiration
      });

      res.status(200).json({ message: "Login Successfully", token });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getCustomers: async (req, res) => {
    try {
      // const { email, username, password } = req.body;
      const response = await userServices.getAllCustomers();

      return res
        .status(200)
        .json({ message: "Customers Retrieved", customers: response });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
