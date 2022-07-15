const Order = require("../model/orderModel");
const {
  createOrderService,
  updateOrderService,
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

