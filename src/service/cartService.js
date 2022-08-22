const {
  createCart,
  deleteCart,
  updateCart,
  deleteCartProduct,
} = require("../database/CartDB");
const { mongoConnect } = require("../connectDatabase/mongoConnect");
const Cart = require("../model/CartModel");
const mongoose = require('mongoose')
const Product = require("../model/ProductModel");
require("dotenv").config({ path: "../.env" });

mongoConnect();

async function cartCreateService() {

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

        await createCart(cart);
        return;
      
    }
  } catch (error) {
    throw error;
  }
}


async function addItemToCart() {
  try {
    const { cartId, products } = {
      cartId: "630254455805128e268fdccd",
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


async function deleteCartProductService (productsId){
  var is_valid = mongoose.Types.ObjectId.isValid(productsId)
  if(is_valid){
  try {
      const existsProduct = await Cart.findOne({'products._id':productsId})
      if(existsProduct){
        await deleteCartProduct(productsId)
        return
      }
      console.log('product not found');
  } catch (error) {
    throw error
  }
}
console.log('provide valid id');
}

function cartDeleteService(cartId) {
  try {
    deleteCart(cartId);
    console.log("delete successful");
  } catch (error) {
    throw error;
  }
}

// cartCreateService();
// deleteCartProductService("63031cce594db4eddcac3dd6");
addItemToCart();
// cartDeleteService("89d3e2a7-2bbb-4b72-b2b6-f9125f24f23d");
