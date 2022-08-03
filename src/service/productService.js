const { createProduct, filterOneProductOnTitle, updateProduct, } = require("../database/ProductDB");
const UserSchema = require("../model/ProductModel");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function productCreateService(title, description, price, quantity) {
  try{
  let product = new UserSchema ({
    title: "toyota",
    description: "car",
    quantity: 10,
    price: 500000,
  })
  // console.log(title);

  if (!isEmpty(title) && !isEmpty(description) && !isEmpty(price) && !isEmpty(quantity)) {
    createProduct(product);
  }
}catch(error){
  console.log(error)
}
}

function productUpdateService(_productId) {
  try{
  const { title, description, price } = {
    title: "newone",
    description: "lorem 3",
  };
  updateProduct(_productId.trim(), {
    title: title === undefined ? null : title.trim(),
    description: description === undefined ? null : description.trim(),
    price: price === undefined ? null : price,
  });
  console.log("updated successfully");
}
catch(error){
console.log(error);
}
}

function productSearchService() {
  let search = "s";
  let product = filterOneProductOnTitle(search);
  console.log(product);
}


function deleteProductService(productId) {
  deleteProduct(productId);
}
// productCreateService();
productSearchService();
// deleteProductService("49f43cac-f99e-45dc-941d-6271cb1c4b3c");
// productUpdateService("d89f1a25-4bfe-4be8-b5f5-8059c069fbdf");
