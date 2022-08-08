const {
  createCart,
  deleteCart,
  updateCart,
  cartSelectOne,
} = require("../database/CartDB");
const { selectOneProduct } = require("../database/ProductDB");
const CartSchema = require("../model/CartModel");
const { isEmpty, cartProductSchema } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function cartCreateService(productId, userId, quantity) {
  console.log(productId);
  try {
    if (!isEmpty(productId)) {
      console.log("here");
      let product = selectOneProduct(productId);
      if (product.length <= 0) {
        console.log(product);
        console.log("Product not found");
        return;
      }
      let cart = new CartSchema({
        productId,
        userId,
        quantity,
      });

      createCart(cart.toJson());
    }
  } catch (error) {
    throw error;
  }
}

function cartDeleteService(cartId) {
  try {
    deleteCart(cartId);
    console.log("delete successful");
  } catch (error) {
    throw error;
  }
}

async function addItemToCart() {
  try {
    const { cartId, product } = {
      cartId: "ae52fa49-e94b-4459-acda-122f1eeb6487",
      product: {
        productId: "32b9e9e7-20de-49ef-a561-1bce2ed18c24",
        quantity: 15,
      },
    };
    if (!cartProductSchema(product)) {
      return;
    }
    let cart = await cartSelectOne(cartId);
    let products = cart.products;
    let exists =
      products.filter((prod) => prod == product.productId).length <= 0
        ? false
        : true;
    if (exists) {
      console.log("Product already exists");
      return;
    }
    cart.products = [...cart.products, product];
    console.log("cart", cart);
    await updateCart(cart);
  } catch (error) {
    throw error;
  }
}

// cartCreateService(
//   "303b9a8d-893c-4a16-b8be-5a1a9ce21587",
//   "e954cb30-ac05-4943-9b42-d156943de2a3",
//   15
// );
addItemToCart();
// cartDeleteService("89d3e2a7-2bbb-4b72-b2b6-f9125f24f23d");
