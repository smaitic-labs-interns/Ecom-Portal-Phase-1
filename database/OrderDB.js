const { readJson, writeFile } = require("../utils/fileHandling");
const OrderSchema = require("../model/OrderModel");

exports.createOrder = (obj) => {
  let order = readJson(process.env.ORDER_JSON);
  order = [...order, obj];
  writeFile(process.env.ORDER_JSON, order);
  return order
};

exports.updateOrder = (orderId,{quantity = null,address = null,status = null}
) => {
  let orders = readJson(process.env.ORDER_JSON);
  const newOrders = orders.map((order) => {
    if (order.orderId == orderId) {
      order.quantity = quantity === null ? order.quantity : quantity;
      order.address = address === null ? order.address : address;
      order.status = status === null ? order.status : status;   
    }
    return order;
  });
  writeFile(process.env.ORDER_JSON, newOrders);
};
exports.deleteOrder = (orderId) => {
  let order = readJson(process.env.ORDER_JSON);
  const orders = order.filter((order) => {
    return order.orderId !== orderId;
  });
  writeFile(process.env.ORDER_JSON, orders);
};

exports.selectOneOrder = (orderId) => {
  let reader = readJson(process.env.ORDER_JSON);
  return reader.filter((order) => order.orderId === orderId);
};
