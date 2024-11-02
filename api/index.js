const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");


  
mongoose.connect('mongodb://127.0.0.1:27017/SHOPVISTA', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());




app.use("/api/products", productRoute);


app.listen(5000, () => {
  console.log("Backend server is running!");
});