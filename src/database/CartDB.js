const Cart = require("../model/CartModel");
// const { readJson, writeFile } = require("../utils/fileHandling")

exports.createCart = async (cart) => {
  try {
    const newCart = await Cart.create(cart)
    return newCart
  } catch (error) {
    throw error;
  }
};

exports.cartSelectAll = () => {
  let carts = readJson(process.env.CART_JSON);
  return carts;
};

exports.cartSelectOne = async (cartId) => {
  let carts = await readJson(process.env.CART_JSON);
  let any = carts.filter((cart) => cart.cartId == cartId)[0];
  return any;
};

exports.updateCart = async (obj) => {
  try {
    let carts = await readJson(process.env.CART_JSON);
    let newCart = carts.map((cart) => {
      if (cart.cartId == obj.cartId) cart.products = obj.products;
      return cart;
    });
    console.log("New Cart", newCart);
    await writeFile(process.env.CART_JSON, newCart);
  } catch (error) {
    throw error;
  }
};

exports.deleteCart = async (cartId) => {
  try {
    let cart = await readJson(process.env.CART_JSON);
    const carts = cart.filter((cart) => {
      return cart.cartId !== cartId;
    });
    writeFile(process.env.CART_JSON, carts);
  } catch (error) {
    throw error;
  }
};
