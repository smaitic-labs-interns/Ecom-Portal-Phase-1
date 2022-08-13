const mongoose = require("mongoose");

// export const OrderStatus = ["pending", "paid", "canceled", "delivered"];
// export const PaymentMethod = ["cash, card, paypal"] 

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    productId: { type: Schema.Types.ObjectId, ref: "product" },
    status: {
      type: String,
      enum: OrderStatus,
      default: "pending",
      function() {
        if (!OrderStatus) return "require right status";
      },
    },
    paymentType: {
      type: String,
      enum: PaymentMethod,
      function() {
        if (!PaymentMethod) {
          return "require payment type";
        }
      },
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
//     OrderSchema.PaymentType.includes(paymentMethod);
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
