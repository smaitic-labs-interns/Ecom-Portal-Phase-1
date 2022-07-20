const Order = require("../model/orderModel");
const {
  createOrderService,
  updateOrderService,
  deleteOrderService,
} = require("../service/orderService");

const { isEmpty } = require("../utils/validator");
require("dotenv").config({ path: "../.env" });

function orderCreateController() {
  const { orderedBy, itemName, quantity, itemPrice, status, address } = {
    orderedBy: "Jack",
    itemName: "Louis vuitton",
    quantity: 1,
    itemPrice: 11500,
    address: "Nagarkot",
  };
  console.log(orderedBy, itemName, quantity, itemPrice, address, status);

  if (
    !isEmpty(orderedBy) &&
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice) &&
    !isEmpty(address)
  ) {
    createOrderService({ orderedBy, itemName, quantity, itemPrice, address });
  }
}
function orderUpdateController(uniqueId) {
  const { quantity, address } = {
    quantity: 5,
    address: " Kathmandu",
  };
  if (!isEmpty(quantity) && !isEmpty(address)) {
    updateOrderService(uniqueId, { quantity, address });
    console.log("successfully updated");
  }
}
function statusUpdateController(uniqueId) {
  const { status } = {
    status: "paid",
  };
  if (!isEmpty(status)) {
    updateOrderService(uniqueId, { status });
    console.log("status changed successfully");
  }
}
function orderDeleteController(uniqueId) {
  deleteOrderService(uniqueId);
  console.log("delete successful");
}

// orderUpdateController("a6545d25-de00-481a-9f74-57dca67c5940");
// orderCreateController();
// statusUpdateController("baeaad80-a331-4a08-8d2d-3671207ae3e0");
orderDeleteController("b9d2a983-39c5-4286-957d-27c315fad8a5");
