const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const ProductRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection succesful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/users/", userRoute);
app.use("/api/auth/", authRoute);
app.use("/api/products/", ProductRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/orders/", orderRoute);
app.use("/api/checkout/", stripeRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
