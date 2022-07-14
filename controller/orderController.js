const Order = require('../model/orderModel')
const {
  createOrderService
} = require("../service/orderService");

const { isEmpty } = require("../utils/validator");


function orderCreateController() {
  const {uniqueId,orderedBy, itemName, quantity, itemPrice} = {
    uniqueId: Order.uniqueId,
    orderedBy: "jerry",
    itemName: "nike",
    quantity: 3,
    itemPrice: 15000
  };
  console.log(itemName);

  if (
    !isEmpty(uniqueId) &&
    !isEmpty(orderedBy) &&
    !isEmpty(orderedBy) &&
    !isEmpty(itemName) &&
    !isEmpty(quantity) &&
    !isEmpty(itemPrice)
  ) {
    createOrderService({ uniqueId, orderedBy, itemName, quantity, itemPrice });
  }
}

orderCreateController();


