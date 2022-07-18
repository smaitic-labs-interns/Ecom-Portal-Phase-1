const Order = require("../model/orderModel");
const {
  createOrderService,
  updateOrderService,
  deleteOrderService,
} = require("../service/orderService");

const { isEmpty } = require("../utils/validator");

function orderCreateController() {
  const { orderedBy, itemName, quantity, itemPrice } = {
    orderedBy: "Bikin",
    itemName: "Gold star",
    quantity: 10,
    itemPrice: 15000,
  };
  console.log(orderedBy, itemName, quantity, itemPrice);

  if (
    !isEmpty(orderedBy) &&
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice)
  ) {
    createOrderService({ orderedBy, itemName, quantity, itemPrice });
  }
}
function orderUpdateController(uniqueId) {
  const { quantity } = {
    quantity: 44,
  };
  if (!isEmpty(quantity)) {
    updateOrderService(uniqueId, { quantity });
  }
}
function statusUpdateController(uniqueId) {
  const { status } = {
    status: "wrong",
  };
  if (!isEmpty(status)) {
    updateOrderService(uniqueId, { status });
  }
}


function orderDelete(uniqueId) {
  deleteOrderService(uniqueId);
}

orderDelete("values");
