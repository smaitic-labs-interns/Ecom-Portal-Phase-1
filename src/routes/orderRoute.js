const {
  orderCreateService,
  orderUpdateService,
  statusUpdateService,
  refundService,
  orderDeleteService,
} = require("../service/orderService");

exports.orderCreateRoute = async (req, res) => {
  const { userId, productId, quantity, price, paymentType, status } = req.body;
  await orderCreateService(
    userId,
    productId,
    quantity,
    price,
    paymentType,
    status
  );
  return res.json({ userId, productId, quantity, price, paymentType, status });
};

exports.orderUpdateRoute = async (req, res) => {
  const { id, quantity } = req.body;
 await orderUpdateService(
    id, quantity
  );
  return res.json({ id, quantity });
};

exports.orderStatusUpdateRoute = async (req, res) => {
  const {id, status } = req.body;
  await statusUpdateService(id,status);
  return res.json({ id, status });
};

exports.orderRefundAndEReturnedRoute = async (req, res) => {
  const { id } = req.body;
  await refundService(id);
  return res.json({ id });
};

exports.orderDeleteRoute = async (req, res) => {
  const { id } = req.body;
  await orderDeleteService(id);
  return res.json({ id });
};