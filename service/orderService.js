const Order = require('../model/OrderModel')

exports.createOrderService = ({ orderedBy, itemName, quantity, itemPrice }) => {
  let order = new Order({
    orderedBy,
    itemName,
    quantity,
    itemPrice
  });
  Order.create(order.toJson());
};