const OrderSchema = require('../model/OrderModel')
const {createOrder, updateOrder,deleteOrder } = require('../database/OrderDB')

exports.createOrderService = (orderedBy,itemName,quantity,itemPrice,address,status,paymentMethod,) => {
  let order = new OrderSchema({
    orderedBy,
    itemName,
    quantity,
    itemPrice,
    address,
    status,
    paymentMethod,
});
  console.log(paymentMethod, 'sss');
  createOrder(order.toJson());
};

exports.updateOrderService = (
  orderId,
  { orderedBy, itemName, quantity, itemPrice, status, address }
) => {
  updateOrder(orderId, { orderedBy, itemName, quantity, itemPrice, status,address });
};
exports.deleteOrderService = (orderId) => {
  deleteOrder(orderId);
};

