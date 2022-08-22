const Cart = require("../model/CartModel");
const { readJson, writeFile } = require("../utils/fileHandling");

exports.createCart = async (cart) => {
  try {
    const newCart = await Cart.create(cart);
    return newCart;
  } catch (error) {
    throw error;
  }
};

exports.updateCart = async (cartId, productId, quantity) => {
  try {
    const cart = await Cart.findByIdAndUpdate(cartId, {
      $push: {
        products: {
          productId,
          quantity,
        },
      },
    });
    return cart;
  } catch (error) {
    throw error;
  }
};

exports.deleteCartProduct = async (productsId) => {
  try {
    await Cart.findOneAndUpdate(
      { "products._id": productsId },
      {
        $pull: {
          products: { _id: productsId },
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

exports.deleteCart = async (cartId) => {
  try {
    const cartDelete = await Cart.findByIdAndDelete(cartId);
    return cartDelete;
  } catch (error) {
    throw error;
  }
};
