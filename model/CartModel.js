const Cart = require("../services/CartService");

exports.createCartService = ({ productId }) => {
  let cart = new Cart({
    productId,
  });
  console.log("inside service");
  Cart.create(cart.toJson());
};
exports.deleteCartService = (cartId) => {
  Cart.delete(cartId);
};

exports.addItemToCartService = (cartId, { productId = null }) => {
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
};


