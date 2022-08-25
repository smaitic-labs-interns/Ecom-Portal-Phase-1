const {
  cartCreateService,
  addItemToCart,
  deleteCartProductService,
  cartDeleteService,
} = require("../service/cartService");

exports.cartCreate = async (req, res) => {
  const { cart } = req.body;
  await cartCreateService(cart);
  return res.json({ cart });
};

exports.addCart = async (req, res) => {
  const { cartId, productId, quantity } = req.body;
  await addItemToCart(cartId, productId, quantity);
  return res.json({ cartId, productId, quantity });
};

exports.deleteCartProduct = async (req, res) => {
  const { productsId } = req.body;
  await deleteCartProductService(productsId);
  return res.json({ productsId });
};

exports.deleteCart = async (req, res) => {
  const { cartId } = req.body;
  await cartDeleteService(cartId);
  return res.json({ cartId });
};
