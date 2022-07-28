const Product = require("../database/ProductDB");
const { isEmpty } = require("../utils/validator");
const {
  deleteCartService,
  createCartService,

  addItemToCartService,
  cartSelectOneService,
} = require("../service/cartService");

require("dotenv").config({ path: "../.env" });

function cartCreateController(productId) {
  productId = "5caca0bc-1a73-4b26-b7a4-5c465e75b73d";

  if (!isEmpty(productId)) {
    console.log("here");
    let product = Product.selectOne(productId);
    if (product.length <= 0) {
      console.log(product);
      console.log("Product not found");
      return;
    }

    createCartService(productId);
  }
}

function cartDeleteController(cartId) {
  deleteCartService(cartId);
  console.log("delete successful");
}

function addItemToCart() {
  const { cartId, productId } = {
    cartId: "a677fa3b-a6f9-43de-99b6-4d705f4c308a",
    productId: "e1b53e60-728d-4b19-b7b6-e309683527ed",
  };
  let cart = cartSelectOneService(cartId)[0];
  let products = cart.products;

  exists =
    products.filter((prod) => prod == productId).length <= 0 ? false : true;

  if (exists) {
    console.log("Product already exists");
    return;
  }
  cart.products = [...cart.products, productId];
  console.log("cart", cart);
  addItemToCartService(cart);
}

// cartCreateController();
// addItemToCart();
cartDeleteController("a677fa3b-a6f9-43de-99b6-4d705f4c308a");
