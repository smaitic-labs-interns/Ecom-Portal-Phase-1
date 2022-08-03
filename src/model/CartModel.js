const uuid = require("uuid");
const cartId = uuid.v4();

class CartSchema{
  
  cartId;
  userId;
  quantity;
  products = [];

  constructor({ productId,userId, quantity }) {
    this.cartId = cartId;
    this.userId = userId;
    this.quantity = quantity;
    this.addProduct(productId, quantity);
  }

  toJson() {
    return {
      cartId: this.cartId,
      userId: this.userId,
      products: this.products,
      quantity: this.quantity
    };
  }
  addProduct(productId ,quantity) {
    console.log("inside products addition");
    this.products.push(productId, quantity);
  }
}

module.exports = CartSchema