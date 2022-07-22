const Order = require("../model/orderModel");
const {
  createOrderService,
  updateOrderService,
  deleteOrderService,
} = require("../service/orderService");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateController() {
  const { orderedBy, itemName, quantity, itemPrice, status, address, paymentMethod } = {
    orderedBy: "Jerry",
    itemName: "chanel",
    quantity: 1,
    itemPrice: 155,
    address: "lalitpur",
    paymentMethod: "cash"
    
  };
  console.log(orderedBy, itemName, quantity, itemPrice, address, status, paymentMethod);

  if (
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice) &&
    !isEmpty(address)&&
    !isEmpty(paymentMethod)
  ) {
    createOrderService({ orderedBy, itemName, quantity, itemPrice, address, paymentMethod });
  }
}
function orderUpdateController(orderId) {
  const { quantity, address } = {
    quantity: 5,
    address: " Kathmandu",
  };
  if (!isEmpty(quantity) && !isEmpty(address)) {
    updateOrderService(orderId, { quantity, address });
    console.log("successfully updated");
  }
}
function statusUpdateController(orderId) {
  const { status } = {
    status: "paid",
  };
  if (!isEmpty(status)) {
    updateOrderService(orderId, { status });
    console.log("status changed successfully");
  }
}
function orderDeleteController(orderId) {
  deleteOrderService(orderId);
  console.log("delete successful");
}

// orderUpdateController("4c0e87ca-0289-4761-92c9-95078ccaa22e");
orderCreateController();
// statusUpdateController("4c0e87ca-0289-4761-92c9-95078ccaa22e");
// orderDeleteController("b9d2a983-39c5-4286-957d-27c315fad8a5");
