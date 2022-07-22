const Cart = require("../model/CartModel");
const Product = require("../model/ProductModel");
const { isEmpty } = require("../utils/validator");
const {
  deleteCartService,
  createCartService,
  addItemToCartService,
} = require("../service/cartService");
const { readJson } = require("../utils/fileHandling");
require("dotenv").config({ path: "../.env" });

function cartCreateController() {
  const { productId } = {
    productId: "98a17dab-9e5c-44e1-8d31-7c948f085def",
  };
  console.log(productId);

  if (!isEmpty(productId)) {
    console.log("here");
    let product = Product.selectOne(productId);
    if (product.length <= 0) {
      console.log(product);
      console.log("Product not found");
      return;
    }

    createCartService({ productId });
  }
}

function cartDeleteController(cartId) {
  deleteCartService(cartId);
  console.log("delete successful");
}

function addItemToCart() {
  const { cartId, productId } = {
    cartId: "f3a7bc13-c1e6-465c-831b-cd35016f38fb",
    productId: "e1b53e60-728d-4b19-b7b6-e309683527ed",
  };
  if (!isEmpty(cartId) && !isEmpty(productId)) {
    let productExists = Product.selectOne(productId)
    let cartExists = Cart.selectOne(cartId)
    console.log(cartExists)
    if (cartExists && productExists) {
      addItemToCartService(cartId, {productId });
      return
    }
    console.error("Error");
  }
}

// cartCreateController();
// addItemToCart();
cartDeleteController("5d864a38-1bdc-46d4-86ab-d8050dd87be4");
