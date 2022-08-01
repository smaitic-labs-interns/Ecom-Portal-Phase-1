const { createCart, deleteCart, updateCart, cartSelectOne } = require("../database/CartDB");
const Product = require("../database/ProductDB");
const CartSchema = require("../model/CartModel");
const { isEmpty } = require("../utils/validator");

require("dotenv").config({ path: "../.env" });

function cartCreateService(productId) {
  console.log(productId);
try{
  if (!isEmpty(productId)) {
    console.log("here");
    let product = Product.selectOneProduct(productId);
    if (product.length <= 0) {
      console.log(product);
      console.log("Product not found");
      return;
    }
    let cart = new CartSchema({
      productId,
    });

    createCart(cart.toJson());
  }
}catch(error){
  console.log(error)
}
}


function cartDeleteService(cartId) {
  deleteCart(cartId);
  console.log("delete successful");
}

function addItemToCart() {
  try{
  const { cartId, productId } = {
    cartId: "d3739569-3431-47c0-875d-9efa472f9cc2",
    productId: "152e66bd-e574-4e53-9e02-7220763e1deb",
  };
  let cart = cartSelectOne(cartId)[0];
  let products = cart.products;
  exists =
    products.filter((prod) => prod == productId).length <= 0 ? false : true;

  if (exists) {
    console.log("Product already exists");
    return;
  }
  cart.products = [...cart.products, productId];
  console.log("cart", cart);
  updateCart(cart);
}catch(error){
console.log(error)
}
}


cartCreateService("d89f1a25-4bfe-4be8-b5f5-8059c069fbdf");
// addItemToCart();
// cartDeleteService("f9bbef43-5aef-4dd5-b33b-05ad755506fb");
