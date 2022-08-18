const {
  createCart,
  deleteCart,
  updateCart,
  cartSelectOne,
} = require("../database/CartDB");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
const Cart = require("../model/CartModel");
const { isEmpty, cartProductSchema } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

mongoConnect();

async function cartCreateService(productId) {
  // console.log(productId);
  try {
    let cart = new Cart({
      userId: "62f7a9688f6b195ae727bf16",
      products: [
        {
          productId: "62f7bde1df16a3e7093f22bc",
          quantity: 10,
        },
      ],
    });
    console.log(cart,'check cart');
    const existsProduct = await Cart.findOne({productId:cart.products.productId})
    console.log(existsProduct, 'check product');
    if(!existsProduct){
      throw 'product does not exists'
    }
    else{
    if (!isEmpty(productId)) {
      // console.log("here");
      await createCart(cart);
      return
    }
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
      cartId: "62fe10cd2506a2117499ad86",
      products: {
        productId: "62f7bde1df16a3e7093f22bc",
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

cartCreateService();
addItemToCart();
// cartDeleteService("89d3e2a7-2bbb-4b72-b2b6-f9125f24f23d");
