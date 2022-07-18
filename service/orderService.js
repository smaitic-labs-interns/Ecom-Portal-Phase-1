const Order = require("../model/OrderModel");

exports.createOrderService = ({
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  status,
}) => {
  let order = new Order({
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    status,
  });
  Order.create(order.toJson());
};

exports.updateOrderService = (
  uniqueId,
  { orderedBy, itemName, quantity, itemPrice, status }
) => {
  Order.update(uniqueId, { orderedBy, itemName, quantity, itemPrice, status });
};
