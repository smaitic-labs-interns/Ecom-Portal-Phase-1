const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    productId: { type: Schema.Types.ObjectId, ref: "product" },

    status: {
      type: String,
      enum: ['pending', 'paid', 'canceled', 'delivered'],
      default: "pending",
    },

    paymentType: {
      type: String,
      enum: ["cash", "card", "paypal"],
    },
    quantity: { type: Number },
    price: { type: Number },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;

// const uuid = require("uuid");
// const orderId = uuid.v4();

// class OrderSchema {
//   static ORDER_STATUS = ["paid", "delivered", "pending", "cancel"];
//   static PaymentType = ["cash", "card", "paypal"];
//   orderId;
//   orderedBy;
//   itemName;
//   quantity;
//   itemPrice;
//   paymentMethod;
//   status;
//   constructor({
//     orderedBy,
//     itemName,
//     quantity,
//     itemPrice,
//     paymentMethod,
//     status,
//   }) {
//     this.orderId = orderId;
//     this.orderedBy = orderedBy;
//     this.itemName = itemName;
//     this.quantity = quantity;
//     this.itemPrice = itemPrice;
//     this.paymentMethod = paymentMethod;
    // OrderSchema.PaymentType.includes(paymentMethod);
//     if (OrderSchema.ORDER_STATUS.includes(status)) {
//       this.status = status;
//     } else {
//       this.status = "pending";
//     }
//   }
//   toJson() {
//     return {
//       orderId: this.orderId,
//       orderedBy: this.orderedBy,
//       itemName: this.itemName,
//       quantity: this.quantity,
//       itemPrice: this.itemPrice,
//       paymentMethod: this.paymentMethod,
//       status: this.status,
//     };
//   }
// }

// module.exports = OrderSchema;
