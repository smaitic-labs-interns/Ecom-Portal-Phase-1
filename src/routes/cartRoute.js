
const { cartCreateService, addItemToCart, deleteCartProductService, cartDeleteService } = require("../service/cartService");


exports.cartCreateRoute = async (req, res) => {
  const { cart } = req.body;
  await cartCreateService(cart);
  return res.json({ cart });
};

exports.addCartRoute = async (req, res) => {
  const { cartId, productId, quantity } = req.body;
  await addItemToCart(cartId, productId, quantity);
  return res.json({ cartId, productId, quantity });
};

exports.deleteCartProductRoute = async (req, res) => {
  const { productsId } = req.body;
  await deleteCartProductService(productsId);
  return res.json({ productsId });
};

exports.deleteCartRoute = async (req, res) => {
  const { cartId } = req.body;
  await cartDeleteService(cartId);
  return res.json({ cartId });
};


