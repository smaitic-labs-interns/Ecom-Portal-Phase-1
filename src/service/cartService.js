const {
  createCart,
  deleteCart,
  updateCart,
} = require("../database/CartDB");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
const Cart = require("../model/CartModel");
const { isEmpty, cartProductSchema } = require("../utils/validator");
const { findById } = require("../model/OrderModel");
const Product = require("../model/ProductModel");
require("dotenv").config({ path: "../.env" });

mongoConnect();

async function cartCreateService(productId) {

  try {
    let cart = {
      userId: "62f7a9688f6b195ae727bf16",
      products: {
        productId: "62f7be1be7304bda01b0d532",
        quantity: 10,
      },
    };
    console.log(cart, "check cart");
    const existsProduct = await Product.findById(
      cart.products.productId,
    );
    console.log(existsProduct, "check product");
    if (!existsProduct) {
      console.log("product does not exists"); 
  
    } else {
      if (!isEmpty(productId)) {
        await createCart(cart);
        return;
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
    const { cartId, products } = {
      cartId: "62ff65f4b9af4b2c0c330869",
      products: {
        productId: "62f7bdfdc866f265bede7622",
        quantity: 15,
      },
    };
    let existsCart = await Cart.findById(cartId)
    console.log(existsCart,'check cartid');
   if(existsCart){
    let existsProduct = await Product.findById(products.productId)
    console.log(existsProduct,' check productid');
    if (existsProduct) {
       await updateCart(cartId, products.productId, products.quantity);
      return;
    }
    else{
     console.log('unable to add to cart');
    }
    }
  } catch (error) {
    throw error;
  }
}

// cartCreateService();
addItemToCart();
// cartDeleteService("89d3e2a7-2bbb-4b72-b2b6-f9125f24f23d");
