const Cart = require("../model/CartModel");
const Product = require("../services/ProductService");
const { isEmpty } = require("../utils/validator");
const {
  deleteCartService,
  createCartService,
  cartSelectOne,
  cartSelectAll,
  updateCartService,
} = require("../services/cartService");
const { readJson } = require("../utils/fileHandling");
require("dotenv").config({ path: "../.env" });

function cartCreateController(productId) {
  console.log(productId);

  if (!isEmpty(productId)) {
    console.log("here");
    let product = Product.selectOne(productId);
    if (product.length <= 0) {
      console.log(product);
      console.log("Product not found");
      return;
    }
    let cart = new Cart({
      productId,
    });

    createCartService(cart.toJson());
  }
}

function cartDeleteController(cartId) {
  deleteCartService(cartId);
  console.log("delete successful");
}

function addItemToCart() {
  const { cartId, productId } = {
    cartId: "38d1f963-66b9-4f68-81c1-0648da30471e",
    productId: "e1b53e60-728d-4b19-b7b6-e309683527ed",
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
  updateCartService(cart)
}

// cartCreateController("5caca0bc-1a73-4b26-b7a4-5c465e75b73d");
// addItemToCart();
cartDeleteController("38d1f963-66b9-4f68-81c1-0648da30471e");
