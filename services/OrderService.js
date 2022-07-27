const { readJson, writeFile } = require("../utils/fileHandling");
const Order = require("../model/orderModel");

exports.createOrderService = (obj) => {
  let order = readJson(process.env.ORDER_JSON);
  order = [...order, obj];
  if (!Order.PaymentType.includes(obj.paymentMethod)) {
    console.error("provide valid payment type");
    return;
  }
  try {
    writeFile(process.env.ORDER_JSON, order);
    return true;
  } catch (error) {
    console.log(error);
  }
};

exports.updateOrderService = (
  orderId,
  {
    orderedBy = null,
    quantity = null,
    address = null,
    itemName = null,
    itemPrice = null,
    paymentMethod = null,
    status = null,
  }
) => {
  let orders = readJson(process.env.ORDER_JSON);
  const newOrders = orders.map((order) => {
    if (order.orderId == orderId) {
      order.orderedBy = orderedBy === null ? order.orderedBy : orderedBy;
      order.quantity = quantity === null ? order.quantity : quantity;
      order.itemName = itemName === null ? order.itemName : itemName;
      order.itemPrice = itemPrice === null ? order.itemPrice : itemPrice;
      order.address = address === null ? order.address : address;
      order.paymentMethod =
        paymentMethod === null ? order.paymentMethod : paymentMethod;
      order.status = status === null ? order.status : status;
      // console.log(status)
      if (!Order.ORDER_STATUS.includes(order.status)) {
        throw "Invalid status";
      }
    }
    return order;
  });
  writeFile(process.env.ORDER_JSON, newOrders);
};
exports.deleteOrderService = (orderId) => {
  let order = readJson(process.env.ORDER_JSON);
  const orders = order.filter((order) => {
    return order.orderId !== orderId;
  });
  writeFile(process.env.ORDER_JSON, orders);
};

exports.selectOneOrderService = (orderId) => {
  let reader = readJson(process.env.ORDER_JSON);
  return reader.filter((order) => order.orderId === orderId);
};
