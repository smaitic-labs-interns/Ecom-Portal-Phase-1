const mongoose = require("mongoose");
const Product = require("./ProductModel");
const { Schema } = mongoose;

const STATUS = [
  "pending",
  "paid",
  "canceled",
  "delivered",
  "acknowledge",
  "received",
  "processed to shipping",
  "returned",
];

const OrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    productId: { type: Schema.Types.ObjectId, ref: "product" },
    status: {
      type: String,
      enum: STATUS,
      default: "pending",
    },
    paymentType: {
      type: String,
      enum: ["cash", "card", "paypal"],
    },
    quantity: { type: Number },
    price: { type: Number },
    totalAmount: { type: Number },
  },
  { timestamps: true }
);

OrderSchema.pre("save", async function (next) {
  data = this;
  data.totalAmount = data.price * data.quantity;
  if (data.status == "processed to shipping") {
    console.error("Cannot update the data that is already in shipping process");
    return;
  }
  next();
});

OrderSchema.post("save", async function (data) {
  const product = await Product.findById(data.productId);
  console.log(product);
  if (product.quantity >= data.quantity) {
    product.quantity = product.quantity - data.quantity;
    await product.save();
  }
  console.error("product quantity should not be less than order quantity");
});


const Order = mongoose.model("order", OrderSchema);
module.exports = Order;

