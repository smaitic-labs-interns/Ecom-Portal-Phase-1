const Cart = require("../model/CartModel");
const { readJson, writeFile } = require("../utils/fileHandling");

exports.cartSelectAll = () => {
  try {
    let carts = readJson(process.env.CART_JSON);
    return carts;
  } catch (error) {
    console.log("Error occurred while reading file", error);
    throw error;
  }
};

exports.cartSelectOne = (cartId) => {
  try {
    let carts = readJson(process.env.CART_JSON);
    return carts.filter((cart) => cart.cartId == cartId);
  } catch (err) {
    console.log("Error occurred while reading the file");
  }
};

exports.updateCartService = (obj) => {
  let carts = readJson(process.env.CART_JSON);
  let newCart = carts.map((cart) => {
    if (cart.cartId == obj.cartId) {
      cart.products = obj.products;
    }
    return cart;
  });
  try {
    writeFile(process.env.CART_JSON, newCart);
  } catch (error) {
    console.log("Error occurred while writing in file", error);
  }
};

exports.deleteCartService = (cartId) => {
  let cart = readJson(process.env.CART_JSON);
  const carts = cart.filter((cart) => {
    return cart.cartId !== cartId;
  });
  writeFile(process.env.CART_JSON, carts);
};

exports.createCartService = (obj) => {
  let cart = readJson(process.env.CART_JSON);
  console.log(obj);
  cart = [...cart, obj];
  try {
    writeFile(process.env.CART_JSON, cart);
    return true;
  } catch (error) {
    console.log(error);
  }
};
