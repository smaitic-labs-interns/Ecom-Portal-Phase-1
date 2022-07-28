const CartSchema = require ('../model/CartModel')
const {createCart, deleteCart, updateCart, cartSelectOne} = require ('../database/CartDB')

exports.createCartService = ( productId ) => {
  let cart = new CartSchema({
    productId,
  });
  console.log("inside service");
  createCart(cart.toJson());
};
exports.deleteCartService = (cartId) => {
  deleteCart(cartId);
};

exports.addItemToCartService = (cartId, productId) => {
    updateCart(cartId, productId)
};

exports.cartSelectOneService = (cartId) => {
  return cartSelectOne(cartId);
};
