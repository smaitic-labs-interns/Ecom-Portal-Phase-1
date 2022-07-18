const Order = require("../model/orderModel");
const {
  createOrderService,
  updateOrderService,
 
} = require("../service/orderService");

const { isEmpty } = require("../utils/validator");

function orderCreateController() {
  const { orderedBy, itemName, quantity, itemPrice, status} = {
    orderedBy: "James",
    itemName: "gucchi",
    quantity: 2,
    itemPrice: 11500,
  };
  console.log(orderedBy, itemName, quantity, itemPrice, status);

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
    quantity: 5,
  };
  if (!isEmpty(quantity)) {
    updateOrderService(uniqueId, { quantity });
  }
}
function statusUpdateController(uniqueId) {
  const { status } = {
    status: "paid",
  };
  if (!isEmpty(status)) {
    updateOrderService(uniqueId, { status });
  }
}



orderUpdateController("5adf9b9c-5bf0-4d06-bf89-841092570035");
// orderCreateController();
// statusUpdateController("baeaad80-a331-4a08-8d2d-3671207ae3e0");


