const {
  createOrder,
  updateOrder,
  deleteOrder,
  updateStatus,
  refundAAndReturnOrder,
} = require("../database/OrderDB");
const Order = require("../model/OrderModel");
const { isEmpty } = require("../utils/validator");
const User = require("../model/UserModel");
const Product = require("../model/ProductModel");
require("dotenv").config({ path: "../.env" });
const { mongoConnect } = require("../connectDatabase/mongoConnect");
var mongoose = require("mongoose");
mongoConnect();

var PAYMENT_TYPES = ["cash", "card", "paypal"];
var STATUS = ["paid", "canceled", "pending", "delivered"];

async function orderCreateService({
  userId,
  productId,
  quantity,
  price,
  paymentType,
  status,
  totalAmount = null,
}) {
  try {
    const user = await User.exists({ _id: userId });
    const product = await Product.exists({ _id: productId });
    if (!PAYMENT_TYPES.includes(paymentType) || !STATUS.includes(status)) {
      console.log("payment or status not valid");
      return;
    }
    if (user && product && !isEmpty(quantity) && !isEmpty(price)) {
      let newOrder = new Order({
        userId: userId,
        productId: productId,
        quantity: quantity,
        price: price,
        paymentType: paymentType,
        status: status,
      });
      await createOrder(newOrder);
      return;
    }
    console.log("user ID or product ID not found");
    return;
  } catch (error) {
    throw error;
  }
}

async function orderUpdateService(id, quantity) {
  var valid_id = mongoose.Types.ObjectId.isValid(id);
  if (valid_id) {
    try {
      const existsOrder = await Order.exists({ _id: id });
      console.log(existsOrder, "order exist");
      if (existsOrder) {
        if (!isEmpty(quantity)) {
          await updateOrder(id, quantity);
          console.log("successfully updated");
          return;
        }
      }
      console.log("order does not exists ");
      return;
    } catch (error) {
      throw error;
    }
  }
  console.log("provide valid id");
}

async function statusUpdateService(id, status) {
  try {
    if (STATUS.includes(status)) {
      const existsId = await Order.findById(id);
      console.log(existsId);
      if (!existsId) {
        console.log("id does not exists ");
        return;
      } else {
        if (!isEmpty(status)) {
          await updateStatus(id, status);
          console.log("successfully updated");
          return;
        }
      }
    } else {
      console.error("Status invalid.");
      return;
    }
  } catch (error) {
    console.log("Order id not exists");
  }
}

async function refundAndReturnService(id) {
  var valid_id = mongoose.Types.ObjectId.isValid(id);
  if (valid_id) {
    try {
      let status = "returned";
      let orderId = await Order.findById(id);
      console.log(orderId, "check");
      if (orderId && orderId.status == "canceled") {
        let refund = await refundAAndReturnOrder(id, status);
        console.log(refund, "refunding is on process");
        return;
      }
      console.log("order is not canceled");
      return;
    } catch (error) {
      throw error;
    }
  }
  console.error("provide valid order id");
}

function orderDeleteService(id) {
  try {
    deleteOrder(id);
    console.log("delete successful");
  } catch (error) {
    throw error;
  }
}

// orderUpdateService("62fcb0b3de74ba80b6872b19", 20);
// orderCreateService({
//   userId: "62f7a8d45507e268b41b2c35",
//   productId: "62f7be1be7304bda01b0d532",
//   status: "paid",
//   paymentType: "cash",
//   quantity: 5,
//   price: 42000,
// });
// statusUpdateService("630225abafaf6bcc874808e4", "canceled");
refundAndReturnService("630225abafaf6bcc874808e4");
// orderDeleteService("62fb4226c174b4b54c2b23e7");
