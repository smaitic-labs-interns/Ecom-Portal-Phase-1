

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
title:{type: String},
description: {type: String},
price: {type: String},
quantity:{type: String},
});

const Product = mongoose.model('product', ProductSchema)
module.exports = Product;

// class ProductSchema{
//   productId;
//   title;
//   description;
//   price;
//   quantity;
//   constructor({ title, description, price, quantity }) {
//     this.productId = productId;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.quantity = quantity;
//   }
//   toJson(){ 
//     return {
//       productId: this.productId,
//       title: this.title,
//       description: this.description,
//       price: this.price,
//       quantity: this.quantity
//     }
//   }
// }

// module.exports = ProductSchema

  


