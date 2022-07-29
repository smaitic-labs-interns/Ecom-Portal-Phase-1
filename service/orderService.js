const { createOrder, updateOrder, deleteOrder } = require("../database/OrderDB");
const OrderSchema = require("../model/orderModel");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateService(
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  address,
  paymentMethod
) {
  let order = new OrderSchema({
    orderedBy: "hello",
    itemName: "nom",
    quantity: 1,
    itemPrice: 100,
    address: "hetauda",
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
    !isEmpty(address) &&
    !isEmpty(paymentMethod)
  )
    createOrder(order.toJson());
}


function orderUpdateService (orderId) {
  const { quantity, address } = {
    quantity: 89,
    address: " Kathmandu",
  };
  if (!isEmpty(quantity) &&
     !isEmpty(address)){
    updateOrder(orderId, { quantity, address });
    console.log("successfully updated");
  }
}


function statusUpdateService(orderId) {
  const { status } = {
    status: "pending",
  };
   if (!OrderSchema.ORDER_STATUS.includes(status)) {
     throw "Invalid status";
   }
  if (!isEmpty(status)) {
    updateOrder(orderId, { status });
    console.log("status changed successfully");
  }
}


function orderDeleteService(orderId) {
  deleteOrder(orderId);
  console.log("delete successful");
}

// orderUpdateService ("d706d742-9473-4a90-afd0-7093eb706ac5");
orderCreateService();
// statusUpdateService("d706d742-9473-4a90-afd0-7093eb706ac5");
// orderDeleteService("6fd9d72b-4f27-4c22-abfd-b0dd11c4d95a");
