const { readJson, writeFile } = require("../utils/fileHandling");
const uuid = require("uuid");
const cartId = uuid.v4();

class Cart {
  cartId;
  products = [];
 
  constructor({ productId }) {
    this.cartId = cartId;
    this.addProduct(productId);
  
  }
  toJson() {
    return {
      cartId: this.cartId,
      products: this.products,
   
  }
}
  static create(obj) {
    let cart = readJson(process.env.CART_JSON);
    console.log(obj);

    cart = [...cart, obj];
    try {
      writeFile(process.env.CART_JSON, cart);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  addProduct(productId) {
    console.log("inside products addition");
    this.products.push(productId);
  }

  static selectAll() {
    try {
      let carts = readJson(process.env.CART_JSON);
      return carts;
    } catch (error) {
      console.log("Error occurred while reading file", error);
      return;
    }
  }

  static selectOne(cartId) {
    try {
      let carts = readJson(process.env.CART_JSON);
      return carts.filter((cart) => cart.cartId == cartId );

    } catch (err) {
      console.log("Error occurred while reading the file");
    }
  }

  static update(obj) {
    let carts = Cart.selectAll();
    let newCart = carts.map((cart) => {
      if (cart.cartId == obj.cartId) {
        cart.products = obj.products;
      }
      return cart;
    });
    try {
      writeFile(process.env.CART_JSON, newCart);
    } catch (error) {
      console.log("Error occurred while writing in file", error);
    }
  }

  static delete(cartId) {
    let cart = readJson(process.env.CART_JSON);
    const carts = cart.filter((cart) => {
      return cart.cartId !== cartId;
    });
    writeFile(process.env.CART_JSON, carts);
  }
}

module.exports = Cart;
