const Order = require("./OrderModel");

exports.createOrderService = ({
  orderedBy,
  itemName,
  quantity,
  itemPrice,
  address,
  paymentMethod,
  status,
}) => {
  let order = new Order({
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    paymentMethod,
    status,
  });
  Order.create(order.toJson());
};

exports.updateOrderService = (
  orderId,
  { quantity, address,status }
) => {
  Order.update(orderId, {quantity, address, status });
};
  exports.deleteOrderService = (orderId) => {
  Order.delete(orderId);
  }

  