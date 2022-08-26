const {
  createShipmentService,
  updateShipmentService,
  cancelShipmentService,
  deleteShipmentService,
} = require("../service/shipmentService");

exports.createShipment = async (req, res) => {
  const { orderId, address } = req.body;
  await createShipmentService(orderId, address);
  res.json({ orderId, address });
};

exports.updateShipAddress = async (req, res) => {
  const { shipmentId, address } = req.body;
  await updateShipmentService(shipmentId, address);
  res.json({ shipmentId, address });
};

exports.cancelShip = async (req, res) => {
  const { orderId, shipId } = req.body;
  await cancelShipmentService(orderId, shipId);
  res.json({ orderId, shipId });
};
exports.deleteShip = async (req, res) => {
  const { shipmentId } = req.body;
  await deleteShipmentService(shipmentId);
  res.json({ shipmentId });
};
