const mongoose = require('mongoose')

const {Schema} = mongoose;

const CartSchema = new Schema ({
  userId: { type: Schema.Types.ObjectId, ref: 'user'},
  products: [
    {
      productId: {type: Schema.Types.ObjectId, ref:'product'},
      quantity: {type: Number}
    }
  ]
}, {timestamps: true})

const Cart = mongoose.model('cart',CartSchema )
module.exports = Cart







// const uuid = require("uuid");
// const cartId = uuid.v4();

// class CartSchema {
//   cartId;
//   userId;
//   quantity;
//   products = [];

//   constructor({ productId, userId, quantity }) {
//     this.cartId = cartId;
//     this.userId = userId;
//     this.quantity = quantity;
//     this.addProduct(productId, quantity);
//   }

//   toJson() {
//     return {
//       cartId: this.cartId,
//       userId: this.userId,
//       products: this.products,
//     };
//   }
//   addProduct(productId, quantity) {
//     const newProd = {
//       productId,
//       quantity,
//     };
//     console.log("inside products addition");
//     this.products.push(newProd);
//   }
// }

// module.exports = CartSchema;
