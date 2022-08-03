const uuid = require("uuid");
const productId = uuid.v4();

class ProductSchema{
  productId;
  title;
  description;
  price;
  quantity;
  constructor({ title, description, price, quantity }) {
    this.productId = productId;
    this.title = title;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
  toJson(){ 
    return {
      productId: this.productId,
      title: this.title,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    }
  }
}

module.exports = ProductSchema

  


