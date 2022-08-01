const { readJson, writeFile } = require("../utils/fileHandling");

exports.createOrder = (obj) => {
  let order = readJson(process.env.ORDER_JSON);
  order = [...order, obj];
  writeFile(process.env.ORDER_JSON, order);
  return order
};

exports.updateOrder = (orderId,{quantity = null,status = null}
) => {
  let orders = readJson(process.env.ORDER_JSON);
  const newOrders = orders.map((order) => {
    if (order.orderId == orderId) {
      order.quantity = quantity === null ? order.quantity : quantity;
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
