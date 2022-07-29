// const Cart = require("../model/CartModel");
const { readJson, writeFile } = require("../utils/fileHandling");

exports.createCart = (obj) => {
  let cart = readJson(process.env.CART_JSON);
   cart = [...cart, obj];
    writeFile(process.env.CART_JSON, cart);
    return cart;
};

exports.cartSelectAll = () => {
    let carts = readJson(process.env.CART_JSON);
    return carts;
 
};

exports.cartSelectOne = (cartId) => {
    let carts = readJson(process.env.CART_JSON);
    return carts.filter((cart) => cart.cartId == cartId);
};

exports.updateCart = (obj) => {
  let carts = readJson(process.env.CART_JSON);
  let newCart = carts.map((cart) => {
    if (cart.cartId == obj.cartId)  
      cart.products = obj.products;
    return cart;
  });
    writeFile(process.env.CART_JSON, newCart);
  
};

exports.deleteCart = (cartId) => {
  let cart = readJson(process.env.CART_JSON);
  const carts = cart.filter((cart) => {
    return cart.cartId !== cartId;
  });
  writeFile(process.env.CART_JSON, carts);
};
