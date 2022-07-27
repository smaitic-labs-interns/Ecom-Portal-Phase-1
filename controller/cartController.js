const Cart = require("../services/CartService");
const Product = require("../services/ProductService");
const { isEmpty } = require("../utils/validator");
const {
  deleteCartService,
  createCartService,
  addItemToCartService,
} = require("../model/cartModel");
const { readJson } = require("../utils/fileHandling");
require("dotenv").config({ path: "../.env" });

function cartCreateController(productId) {
  let cart = new Cart({
    productId,
  });
  console.log(productId);

  if (!isEmpty(productId)) {
    console.log("here");
    let product = Product.selectOne(productId);
    if (product.length <= 0) {
      console.log(product);
      console.log("Product not found");
      return;
    }

    Cart.create(cart.toJson());
  }
}

function cartDeleteController(cartId) {
  Cart.delete(cartId);
  console.log("delete successful");
}

function addItemToCart() {
  const { cartId, productId } = {
    cartId: "a37313fb-3c48-4ff5-81e0-7df6938a87cd",
    productId: "e1b53e60-728d-4b19-b7b6-e309683527ed",
  };
  let cart = Cart.selectOne(cartId)[0];
  let products = cart.products;

  exists =
    products.filter((prod) => prod == productId).length <= 0 ? false : true;

  if (exists) {
    console.log("Product already exists");
    return;
  }
  cart.products = [...cart.products, productId];
  console.log("cart", cart);
  Cart.update(cart);

  // if (!isEmpty(cartId) && !isEmpty(productId)) {
  //   let productExists = Product.selectOne(productId)
  //   let cartExists = Cart.selectOne(cartId)
  //   console.log(cartExists)
  //   if (cartExists && productExists) {
  //     Cart.selectOne(cartId, {productId });
  //     return
  //   }
  //   console.error("Error");
  // }
}

// cartCreateController("5caca0bc-1a73-4b26-b7a4-5c465e75b73d");
addItemToCart();
// cartDeleteController("6d79e339-2819-4273-a8d3-3e86f1ad5d21");
