const {
  createOrderService,
  updateOrderService,
  deleteOrderService,
} = require("../services/OrderService");
const Order = require("../model/orderModel");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });


function orderCreateController(
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  address,
  paymentMethod,
  status
) {
  let order = new Order({
    orderedBy: "man",
    itemName: "fashion",
    quantity: 12,
    itemPrice: 1300,
    address: "birgunj",
    paymentMethod: "cash",
  });

  if (
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice) &&
    !isEmpty(address) &&
    !isEmpty(paymentMethod)
  ) {
    createOrderService(order.toJson());
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
    status: "cancel",
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

// orderUpdateController("6fd9d72b-4f27-4c22-abfd-b0dd11c4d95a");
// orderCreateController();
// statusUpdateController("6fd9d72b-4f27-4c22-abfd-b0dd11c4d95a");
orderDeleteController("6fd9d72b-4f27-4c22-abfd-b0dd11c4d95a");
