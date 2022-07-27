const uuid = require("uuid");
const cartId = uuid.v4();

class Cart{
  
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
    };
  }
  addProduct(productId) {
    console.log("inside products addition");
    this.products.push(productId);
  }
}

module.exports = Cart