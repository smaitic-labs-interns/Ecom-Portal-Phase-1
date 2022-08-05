const {
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../database/OrderDB");
const OrderSchema = require("../model/orderModel");
const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateService(
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  paymentMethod
) {
  try {
    let order = new OrderSchema({
      orderedBy: "hello",
      itemName: "nom",
      quantity: 1,
      itemPrice: 100,
      paymentMethod: "cash",
    });

    if (!OrderSchema.PaymentType.includes(order.paymentMethod)) {
      console.error("provide valid payment type");
      return;
    }
    if (
      !isEmpty(orderedBy) &&
      !isEmpty(itemName) &&
      !isEmpty(quantity) &&
      !isEmpty(itemPrice) &&
      !isEmpty(paymentMethod)
    )
      createOrder(order.toJson());
  } catch (error) {
    throw error
  }
}

function orderUpdateService(orderId) {
  try {
    const { quantity} = {
      quantity: 8,
    };
    if (!isEmpty(quantity)) {
      updateOrder(orderId, { quantity });
      console.log("successfully updated");
    }
  } catch (error) {
    throw error
  }
}

function statusUpdateService(orderId) {
  try {
    const { status } = {
      status: "paid",
    };
    if (!OrderSchema.ORDER_STATUS.includes(status)) {
      throw "Invalid status";
    }
    if (!isEmpty(status)) {
      updateOrder(orderId, { status });
      console.log("status changed successfully");
    }
  } catch (error) {
   throw error
  }
}

function orderDeleteService(orderId) {
 try {
   deleteOrder(orderId);
   console.log("delete successful");
 } catch (error) {
  throw error
 } 
}

// orderUpdateService("013610fd-435e-4912-aab0-e1c0f1d492ee");
orderCreateService();
// statusUpdateService("013610fd-435e-4912-aab0-e1c0f1d492ee");
// orderDeleteService("013610fd-435e-4912-aab0-e1c0f1d492ee");
