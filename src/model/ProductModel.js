const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;



