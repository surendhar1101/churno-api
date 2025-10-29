const mongoose = require("mongoose");
const config = require("./utils/config");
const app = require("./app");

console.log("Connecting To Database!");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(config.PORT, () => {
      console.log(`Server is Running on the port:${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to Database", error.message);
  });
